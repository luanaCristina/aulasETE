-- ============================================================
-- DDL — Criação do Banco de Dados "Salão Beleza & Arte"
-- Módulo II — ETE Advogado José David Gil Rodrigues
-- ============================================================

-- Criar o banco (rodar separadamente no psql ou pgAdmin)
-- CREATE DATABASE salao_beleza_arte;

-- ============================================================
-- ENUM para status do agendamento
-- ============================================================

CREATE TYPE status_agendamento AS ENUM ('confirmado', 'cancelado', 'concluido');

-- ============================================================
-- TABELA: clientes
-- ============================================================

CREATE TABLE clientes (
    id          SERIAL PRIMARY KEY,
    nome        VARCHAR(100) NOT NULL,
    telefone    VARCHAR(15) NOT NULL,
    email       VARCHAR(100) UNIQUE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE clientes IS 'Cadastro dos clientes do salão';
COMMENT ON COLUMN clientes.telefone IS 'Formato: (81) 99999-9999';

-- ============================================================
-- TABELA: profissionais
-- ============================================================

CREATE TABLE profissionais (
    id              SERIAL PRIMARY KEY,
    nome            VARCHAR(100) NOT NULL,
    especialidade   VARCHAR(50) NOT NULL,
    ativo           BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE profissionais IS 'Profissionais que atendem no salão';
COMMENT ON COLUMN profissionais.especialidade IS 'Ex: cabeleireira, manicure, barbeiro';

-- ============================================================
-- TABELA: servicos
-- ============================================================

CREATE TABLE servicos (
    id           SERIAL PRIMARY KEY,
    nome         VARCHAR(100) NOT NULL,
    duracao_min  INTEGER NOT NULL CHECK (duracao_min > 0),
    preco        DECIMAL(8, 2) NOT NULL CHECK (preco >= 0),
    ativo        BOOLEAN DEFAULT TRUE
);

COMMENT ON TABLE servicos IS 'Serviços oferecidos pelo salão';
COMMENT ON COLUMN servicos.duracao_min IS 'Duração do serviço em minutos';
COMMENT ON COLUMN servicos.preco IS 'Preço em reais (R$)';

-- ============================================================
-- TABELA: profissional_servico (associativa N:N)
-- ============================================================

CREATE TABLE profissional_servico (
    profissional_id INTEGER NOT NULL REFERENCES profissionais(id) ON DELETE CASCADE,
    servico_id      INTEGER NOT NULL REFERENCES servicos(id) ON DELETE CASCADE,
    PRIMARY KEY (profissional_id, servico_id)
);

COMMENT ON TABLE profissional_servico IS 'Relacionamento N:N entre profissionais e serviços que oferecem';

-- ============================================================
-- TABELA: agendamentos
-- ============================================================

CREATE TABLE agendamentos (
    id                SERIAL PRIMARY KEY,
    cliente_id        INTEGER NOT NULL REFERENCES clientes(id) ON DELETE RESTRICT,
    profissional_id   INTEGER NOT NULL REFERENCES profissionais(id) ON DELETE RESTRICT,
    servico_id        INTEGER NOT NULL REFERENCES servicos(id) ON DELETE RESTRICT,
    data_hora         TIMESTAMP NOT NULL,
    status            status_agendamento DEFAULT 'confirmado',
    observacoes       TEXT,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE agendamentos IS 'Registro de todos os agendamentos do salão';

-- ============================================================
-- ÍNDICES para performance
-- ============================================================

-- Busca rápida de agendamentos por profissional e data
CREATE INDEX idx_agendamentos_profissional_data 
ON agendamentos(profissional_id, data_hora);

-- Busca rápida por cliente
CREATE INDEX idx_agendamentos_cliente 
ON agendamentos(cliente_id);

-- Busca rápida por status
CREATE INDEX idx_agendamentos_status 
ON agendamentos(status);

-- ============================================================
-- CONSTRAINT: impedir agendamento duplicado no mesmo horário
-- (mesma data/hora para o mesmo profissional com status ativo)
-- Nota: essa validação também será feita no código Python,
-- mas ter no banco é uma camada extra de segurança.
-- ============================================================

CREATE UNIQUE INDEX idx_unique_agendamento_ativo 
ON agendamentos(profissional_id, data_hora) 
WHERE status = 'confirmado';
