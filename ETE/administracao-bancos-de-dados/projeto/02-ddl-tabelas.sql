-- ============================================================
-- Arquivo: 02-ddl-tabelas.sql
-- Descrição: Criação de todas as tabelas do sistema Pet Shop
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. No pgAdmin, selecione o banco "petshop_ete"
--   2. Abra o Query Tool (Ferramentas > Query Tool)
--   3. Cole este script e execute (F5)
-- ============================================================

-- ============================================================
-- TABELA: clientes
-- Armazena dados dos tutores (donos dos pets)
-- Conceitos: PRIMARY KEY, UNIQUE, NOT NULL, DEFAULT
-- ============================================================
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,                          -- PK auto-incremento
    nome VARCHAR(100) NOT NULL,                     -- Nome completo é obrigatório
    cpf CHAR(11) UNIQUE NOT NULL,                   -- CPF único, sem formatação
    telefone VARCHAR(15) NOT NULL,                  -- Telefone com DDD
    email VARCHAR(100) UNIQUE,                      -- Email opcional mas único
    endereco TEXT,                                  -- Endereço completo
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data de cadastro automática
);

-- Comentário na tabela
COMMENT ON TABLE clientes IS 'Cadastro dos clientes (tutores dos pets)';
COMMENT ON COLUMN clientes.cpf IS 'CPF sem pontuação - apenas números';

-- ============================================================
-- TABELA: pets
-- Armazena dados dos animais
-- Conceitos: FOREIGN KEY, CHECK constraint
-- ============================================================
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,                         -- FK para o dono
    nome VARCHAR(50) NOT NULL,                           -- Nome do pet
    especie VARCHAR(30) NOT NULL                         -- cachorro, gato, ave, etc.
        CHECK (especie IN ('cachorro', 'gato', 'ave', 'roedor', 'réptil', 'outro')),
    raca VARCHAR(50),                                    -- Raça (opcional)
    data_nascimento DATE,                                -- Data de nascimento
    peso DECIMAL(5,2),                                   -- Peso em kg (ex: 12.50)
    observacoes TEXT,                                    -- Alergias, condições especiais
    
    -- Definição da Foreign Key
    CONSTRAINT fk_pets_cliente 
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON DELETE RESTRICT                              -- Impede excluir cliente com pets
        ON UPDATE CASCADE                              -- Atualiza ID em cascata
);

COMMENT ON TABLE pets IS 'Cadastro dos pets vinculados aos clientes';
COMMENT ON COLUMN pets.especie IS 'Tipo de animal: cachorro, gato, ave, roedor, réptil, outro';

-- ============================================================
-- TABELA: servicos
-- Catálogo de serviços oferecidos pelo pet shop
-- Conceitos: DEFAULT, CHECK (valor positivo)
-- ============================================================
CREATE TABLE servicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,                           -- Nome do serviço
    descricao TEXT,                                      -- Descrição detalhada
    preco DECIMAL(8,2) NOT NULL CHECK (preco > 0),      -- Preço deve ser positivo
    duracao_minutos INTEGER NOT NULL DEFAULT 30          -- Duração padrão: 30 min
        CHECK (duracao_minutos > 0),
    ativo BOOLEAN DEFAULT TRUE                           -- Serviço disponível?
);

COMMENT ON TABLE servicos IS 'Catálogo de serviços do pet shop';
COMMENT ON COLUMN servicos.ativo IS 'Se FALSE, o serviço não aparece para agendamento';

-- ============================================================
-- TABELA: profissionais
-- Equipe de profissionais do pet shop
-- Conceitos: CHECK em texto, DEFAULT boolean
-- ============================================================
CREATE TABLE profissionais (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL                           -- Função no pet shop
        CHECK (cargo IN ('veterinário', 'tosador', 'banhista', 'atendente', 'auxiliar')),
    telefone VARCHAR(15),
    especialidade VARCHAR(100),                          -- Ex: dermatologia animal
    ativo BOOLEAN DEFAULT TRUE
);

COMMENT ON TABLE profissionais IS 'Cadastro da equipe de profissionais';

-- ============================================================
-- TABELA: agendamentos
-- Controle de agenda do pet shop
-- Conceitos: Múltiplas FKs, CHECK constraint para status
-- ============================================================
CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER NOT NULL,
    servico_id INTEGER NOT NULL,
    profissional_id INTEGER NOT NULL,
    data_hora TIMESTAMP NOT NULL,                        -- Data e hora do agendamento
    status VARCHAR(20) DEFAULT 'agendado'
        CHECK (status IN ('agendado', 'confirmado', 'realizado', 'cancelado')),
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    CONSTRAINT fk_agendamentos_pet
        FOREIGN KEY (pet_id) REFERENCES pets(id),
    CONSTRAINT fk_agendamentos_servico
        FOREIGN KEY (servico_id) REFERENCES servicos(id),
    CONSTRAINT fk_agendamentos_profissional
        FOREIGN KEY (profissional_id) REFERENCES profissionais(id)
);

COMMENT ON TABLE agendamentos IS 'Agenda de serviços - controle de atendimentos';
COMMENT ON COLUMN agendamentos.status IS 'Status: agendado → confirmado → realizado (ou cancelado)';

-- ============================================================
-- TABELA: produtos
-- Estoque de produtos para venda
-- Conceitos: CHECK múltiplos, estoque mínimo
-- ============================================================
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL
        CHECK (categoria IN ('ração', 'brinquedo', 'higiene', 'acessório', 'medicamento', 'outro')),
    preco DECIMAL(8,2) NOT NULL CHECK (preco > 0),
    estoque INTEGER NOT NULL DEFAULT 0 CHECK (estoque >= 0),
    estoque_minimo INTEGER NOT NULL DEFAULT 5           -- Alerta quando estoque < mínimo
        CHECK (estoque_minimo >= 0)
);

COMMENT ON TABLE produtos IS 'Cadastro de produtos disponíveis para venda';
COMMENT ON COLUMN produtos.estoque_minimo IS 'Quantidade mínima antes de reposição';

-- ============================================================
-- TABELA: vendas
-- Registro de vendas realizadas
-- Conceitos: FK, CHECK em forma de pagamento, DEFAULT
-- ============================================================
CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2) NOT NULL CHECK (valor_total >= 0),
    forma_pagamento VARCHAR(20) NOT NULL
        CHECK (forma_pagamento IN ('dinheiro', 'pix', 'credito', 'debito')),
    
    CONSTRAINT fk_vendas_cliente
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

COMMENT ON TABLE vendas IS 'Registro de vendas de produtos';

-- ============================================================
-- TABELA: itens_venda
-- Detalhamento dos produtos vendidos em cada venda
-- Conceitos: Tabela associativa, múltiplas FKs, campo calculado
-- ============================================================
CREATE TABLE itens_venda (
    id SERIAL PRIMARY KEY,
    venda_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(8,2) NOT NULL CHECK (preco_unitario > 0),
    
    CONSTRAINT fk_itens_venda_venda
        FOREIGN KEY (venda_id) REFERENCES vendas(id)
        ON DELETE CASCADE,                              -- Se excluir a venda, exclui itens
    CONSTRAINT fk_itens_venda_produto
        FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

COMMENT ON TABLE itens_venda IS 'Itens de cada venda - relação N:N entre vendas e produtos';

-- ============================================================
-- ÍNDICES
-- Aceleram consultas frequentes no sistema
-- ============================================================

-- Busca de pets por cliente (usado em toda consulta de atendimento)
CREATE INDEX idx_pets_cliente ON pets(cliente_id);

-- Busca de agendamentos por data (agenda do dia)
CREATE INDEX idx_agendamentos_data ON agendamentos(data_hora);

-- Busca de agendamentos por status (filtros de gestão)
CREATE INDEX idx_agendamentos_status ON agendamentos(status);

-- Busca de agendamentos por profissional (agenda individual)
CREATE INDEX idx_agendamentos_profissional ON agendamentos(profissional_id);

-- Busca de itens por venda (detalhamento de vendas)
CREATE INDEX idx_itens_venda_venda ON itens_venda(venda_id);

-- Busca de produtos por categoria (filtro na loja)
CREATE INDEX idx_produtos_categoria ON produtos(categoria);

-- Busca de vendas por cliente (histórico de compras)
CREATE INDEX idx_vendas_cliente ON vendas(cliente_id);

-- ============================================================
-- FIM DO DDL - Todas as tabelas criadas com sucesso!
-- ============================================================
