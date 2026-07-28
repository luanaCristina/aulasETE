# 📊 Administração de Bancos de Dados

## Informações Gerais

| Item | Detalhe |
|------|---------|
| **Curso** | Técnico Subsequente em Desenvolvimento de Sistemas |
| **Módulo** | 1 |
| **Carga Horária** | 80h (4 aulas/semana) |
| **Duração** | 20 semanas |
| **Instituição** | ETE Pernambuco |
| **Docente** | Profª Luana Cristina |

## Ementa

Fundamentos de Banco de Dados, SGBD Relacional, Modelagem Conceitual, Lógica e Física (DER/MER), Normalização de tabelas, DDL e DML em SQL (CREATE, DROP, ALTER, SELECT, INSERT, UPDATE, DELETE).

## Competências a Desenvolver

- Compreender a importância e o papel dos bancos de dados em sistemas de informação
- Projetar modelos conceituais, lógicos e físicos de bancos de dados
- Aplicar técnicas de normalização até a 3ª Forma Normal
- Escrever comandos SQL para criação e manipulação de dados
- Resolver problemas reais de mercado usando bancos de dados relacionais

---

## 🗓️ CRONOGRAMA SEMANA A SEMANA

### BLOCO 1 — FUNDAMENTOS (Semanas 1–3)

#### Semana 1: Introdução a Bancos de Dados
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | O que é um Banco de Dados? Histórico e evolução | Compreender o conceito de BD e sua importância nos sistemas modernos |
| 2 | Tipos de BD (Relacional, NoSQL, Grafos, Documento) | Diferenciar os tipos de bancos e seus casos de uso |
| 3 | SGBD: conceito, exemplos (PostgreSQL, MySQL, SQL Server) | Identificar o papel do SGBD como intermediário entre usuário e dados |
| 4 | Instalação do PostgreSQL + pgAdmin (Lab prático) | Configurar o ambiente de trabalho local |

#### Semana 2: Conceitos Relacionais
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Modelo Relacional: Tabelas, Linhas, Colunas | Compreender a estrutura tabular de dados |
| 2 | Chaves Primárias (PK) e Chaves Estrangeiras (FK) | Identificar e aplicar restrições de integridade |
| 3 | Tipos de Dados (INTEGER, VARCHAR, DATE, BOOLEAN, DECIMAL) | Escolher tipos adequados para cada cenário |
| 4 | Exercício prático: Modelar tabela de Clientes | Aplicar conceitos em um cenário real de cadastro |

#### Semana 3: Integridade e Restrições
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Restrições: NOT NULL, UNIQUE, DEFAULT, CHECK | Garantir qualidade dos dados no esquema |
| 2 | Relacionamentos: 1:1, 1:N, N:M | Modelar associações entre entidades |
| 3 | Tabelas associativas (junção para N:M) | Implementar relacionamentos muitos-para-muitos |
| 4 | Exercício integrador: Modelar sistema de Biblioteca | Consolidar conceitos de relacionamentos |

### BLOCO 2 — MODELAGEM DE DADOS (Semanas 4–7)

#### Semana 4: Modelagem Conceitual — DER
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Diagrama Entidade-Relacionamento (DER): elementos | Identificar entidades, atributos e relacionamentos |
| 2 | Cardinalidade e participação (total/parcial) | Definir restrições de participação em relacionamentos |
| 3 | Ferramenta: brModelo ou draw.io (prática) | Criar DERs usando ferramentas visuais |
| 4 | Exercício: DER de um sistema de Clínica Médica | Aplicar modelagem conceitual em cenário real |

#### Semana 5: Modelagem Lógica — MER
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Do DER ao Modelo Lógico: regras de mapeamento | Converter modelo conceitual em lógico |
| 2 | Atributos multivalorados e compostos | Tratar atributos complexos na conversão |
| 3 | Herança/Generalização no modelo lógico | Mapear hierarquias de entidades |
| 4 | Exercício: MER do sistema de Clínica Médica | Gerar modelo lógico a partir do DER da semana anterior |

#### Semana 6: Normalização (Parte 1)
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Por que normalizar? Anomalias de inserção, exclusão e atualização | Compreender os problemas de dados não normalizados |
| 2 | 1ª Forma Normal (1FN): atomicidade | Eliminar grupos repetitivos e atributos multivalorados |
| 3 | 2ª Forma Normal (2FN): dependência funcional total | Remover dependências parciais da chave |
| 4 | Exercício prático: Normalizar planilha de Vendas até 2FN | Aplicar 1FN e 2FN em dados reais |

#### Semana 7: Normalização (Parte 2) + Modelo Físico
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | 3ª Forma Normal (3FN): dependências transitivas | Eliminar dependências transitivas |
| 2 | Exercício completo: Normalizar até 3FN | Aplicar todas as formas normais em sequência |
| 3 | Modelo Físico: traduzir MER para scripts SQL | Converter modelo lógico em DDL |
| 4 | **PROJETO INTERMEDIÁRIO: Entrega do modelo completo** | Consolidar modelagem conceitual, lógica e física |

### BLOCO 3 — DDL: Linguagem de Definição de Dados (Semanas 8–10)

#### Semana 8: CREATE TABLE
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Sintaxe do CREATE TABLE com restrições | Criar tabelas com PKs, FKs e constraints |
| 2 | Tipos de dados no PostgreSQL (SERIAL, TEXT, TIMESTAMP) | Escolher tipos específicos do SGBD |
| 3 | Prática: Criar schema do sistema de Clínica | Implementar modelo físico no banco |
| 4 | CREATE TABLE com relacionamentos (REFERENCES) | Criar tabelas com integridade referencial |

#### Semana 9: ALTER e DROP
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | ALTER TABLE: ADD, DROP, RENAME, MODIFY colunas | Modificar estrutura de tabelas existentes |
| 2 | ALTER TABLE: ADD/DROP CONSTRAINT | Adicionar/remover restrições após criação |
| 3 | DROP TABLE, DROP DATABASE, TRUNCATE | Entender operações destrutivas e suas diferenças |
| 4 | Exercício prático: Evoluir schema com ALTER | Simular migrações de banco de dados |

#### Semana 10: Índices e Boas Práticas DDL
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | CREATE INDEX: conceito e quando usar | Otimizar consultas com índices |
| 2 | Tipos de índice (B-tree, Hash) — visão geral | Entender mecanismos internos básicos |
| 3 | Boas práticas de nomenclatura e organização | Padronizar nomes de tabelas, colunas e constraints |
| 4 | Revisão DDL + Quiz interativo | Consolidar toda a DDL estudada |

### BLOCO 4 — DML: Linguagem de Manipulação de Dados (Semanas 11–16)

#### Semana 11: INSERT
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | INSERT INTO: sintaxe básica e variações | Inserir registros em tabelas |
| 2 | INSERT com múltiplas linhas e valores default | Otimizar inserções em massa |
| 3 | INSERT com SELECT (subquery) | Popular tabelas a partir de consultas |
| 4 | Exercício: Popular banco da Clínica com dados realistas | Criar massa de dados para consultas |

#### Semana 12: SELECT Básico
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | SELECT *, colunas específicas, aliases (AS) | Consultar dados de uma tabela |
| 2 | WHERE: operadores de comparação e lógicos | Filtrar registros com condições |
| 3 | ORDER BY, LIMIT, OFFSET | Ordenar e paginar resultados |
| 4 | DISTINCT, IN, BETWEEN, LIKE, IS NULL | Usar operadores especiais de filtragem |

#### Semana 13: SELECT Avançado
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Funções de agregação: COUNT, SUM, AVG, MIN, MAX | Calcular estatísticas sobre dados |
| 2 | GROUP BY e HAVING | Agrupar dados e filtrar grupos |
| 3 | JOIN: INNER JOIN (conceito e prática) | Combinar dados de múltiplas tabelas |
| 4 | LEFT JOIN, RIGHT JOIN, FULL JOIN | Entender variações de junção |

#### Semana 14: SELECT com Subqueries
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Subqueries no WHERE (escalar e lista) | Usar consultas aninhadas para filtros complexos |
| 2 | Subqueries no FROM (tabelas derivadas) | Criar fontes de dados temporárias |
| 3 | EXISTS e NOT EXISTS | Verificar existência de registros relacionados |
| 4 | Exercício integrador: Relatórios complexos da Clínica | Combinar JOINs, agregações e subqueries |

#### Semana 15: UPDATE e DELETE
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | UPDATE: sintaxe, WHERE obrigatório, múltiplas colunas | Atualizar registros com segurança |
| 2 | UPDATE com JOIN e subquery | Atualizar dados baseados em outras tabelas |
| 3 | DELETE: sintaxe, diferença para TRUNCATE | Excluir registros controladamente |
| 4 | Segurança: transações (BEGIN, COMMIT, ROLLBACK) | Garantir atomicidade nas operações |

#### Semana 16: Prática Intensiva DML
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Desafio prático: 10 consultas de nível mercado | Resolver problemas reais com SQL |
| 2 | Views: CREATE VIEW para simplificar consultas | Encapsular consultas complexas |
| 3 | Revisão geral DML + Dúvidas | Consolidar todos os comandos DML |
| 4 | **Simulado Preparatório** | Preparar para avaliação oficial |

### BLOCO 5 — AVALIAÇÃO E PROJETO FINAL (Semanas 17–20)

#### Semana 17: Avaliação Oficial
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1-2 | **PROVA REGIMENTAL** (2 aulas) | Avaliar domínio dos conteúdos |
| 3 | Correção coletiva e feedback | Identificar pontos de melhoria |
| 4 | Introdução ao Projeto Final | Apresentar escopo e requisitos do projeto |

#### Semana 18: Projeto Final — Modelagem
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Levantamento de requisitos do sistema escolhido | Identificar entidades e regras de negócio |
| 2 | Construção do DER | Criar modelo conceitual completo |
| 3 | Mapeamento para Modelo Lógico | Converter DER em MER normalizado |
| 4 | Revisão e ajustes com feedback docente | Refinar modelo antes da implementação |

#### Semana 19: Projeto Final — Implementação SQL
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1 | Scripts DDL: criação completa do banco | Implementar schema no PostgreSQL |
| 2 | Scripts DML: popular com dados realistas | Criar massa de dados significativa |
| 3 | Consultas para relatórios (mín. 5 queries complexas) | Demonstrar domínio de SELECT avançado |
| 4 | Documentação do projeto | Organizar entregáveis |

#### Semana 20: Apresentação e Encerramento
| Aula | Tópico | Objetivo de Aprendizagem |
|------|--------|--------------------------|
| 1-2 | **Apresentação dos Projetos Finais** | Comunicar soluções técnicas |
| 3 | Feedback final e autoavaliação | Refletir sobre aprendizado |
| 4 | Encerramento + Panorama do próximo módulo | Conectar BD com programação |

---

## 📖 MATERIAL DE APOIO TEÓRICO E PRÁTICO

### Tópico 1: Fundamentos de Banco de Dados

#### Resumo Teórico

Um **Banco de Dados (BD)** é uma coleção organizada de dados que pode ser acessada, gerenciada e atualizada. Diferente de planilhas, bancos de dados oferecem:

- **Controle de concorrência** — múltiplos usuários simultâneos
- **Integridade** — regras que impedem dados inconsistentes
- **Segurança** — controle de acesso granular
- **Recuperação** — backup e restore em caso de falhas

O **SGBD (Sistema Gerenciador de Banco de Dados)** é o software que gerencia o banco. Exemplos:

| SGBD | Tipo | Uso Típico |
|------|------|-----------|
| PostgreSQL | Relacional, Open Source | Aplicações web, APIs, analytics |
| MySQL | Relacional, Open Source | WordPress, e-commerce |
| SQL Server | Relacional, Proprietário | Corporações Microsoft |
| MongoDB | Documento (NoSQL) | Apps com dados flexíveis |
| Redis | Chave-valor (NoSQL) | Cache, sessões |

#### Exemplo Prático: Primeira Conexão no PostgreSQL

```sql
-- Após instalar PostgreSQL e pgAdmin:

-- 1. Criar um banco de dados
CREATE DATABASE clinica_medica;

-- 2. Conectar ao banco (no pgAdmin: clique duplo no BD)

-- 3. Criar sua primeira tabela
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(15),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Inserir um registro
INSERT INTO pacientes (nome, cpf, data_nascimento, telefone, email)
VALUES ('Maria Silva', '12345678901', '1990-05-15', '81999991234', 'maria@email.com');

-- 5. Consultar
SELECT * FROM pacientes;
```

**Explicação passo a passo:**
1. `CREATE DATABASE` — cria o contêiner que vai armazenar todas as tabelas
2. `CREATE TABLE` — define a estrutura (colunas e tipos)
3. `SERIAL` — inteiro auto-incremento (gera IDs automáticos)
4. `PRIMARY KEY` — identifica unicamente cada linha
5. `NOT NULL` — campo obrigatório
6. `UNIQUE` — não permite valores duplicados
7. `DEFAULT CURRENT_TIMESTAMP` — preenche automaticamente com data/hora atual

### Tópico 2: Modelagem Conceitual (DER)

#### Resumo Teórico

O **Diagrama Entidade-Relacionamento (DER)** é a representação visual do minimundo que queremos modelar. Elementos:

| Elemento | Representação | Descrição |
|----------|---------------|-----------|
| Entidade | Retângulo | "Coisa" do mundo real (Paciente, Médico) |
| Atributo | Elipse | Característica da entidade (nome, CPF) |
| Relacionamento | Losango | Associação entre entidades (consulta) |
| Cardinalidade | (1,1) (1,N) (0,N) | Quantos de cada lado participam |

**Cardinalidades mais comuns:**
- **(1,1)** — exatamente um (obrigatório)
- **(0,1)** — zero ou um (opcional)
- **(1,N)** — um ou muitos (obrigatório)
- **(0,N)** — zero ou muitos (opcional)

#### Exemplo Prático: DER de Sistema de Clínica Médica

```
┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│   PACIENTE   │          │   CONSULTA   │          │    MÉDICO    │
├──────────────┤          ├──────────────┤          ├──────────────┤
│ *id          │ (1,N)    │ *id          │    (1,N) │ *id          │
│  nome        │──────────│  data_hora   │──────────│  nome        │
│  cpf         │          │  tipo        │          │  crm         │
│  telefone    │          │  status      │          │  especialid. │
│  email       │          │  observacoes │          │  telefone    │
└──────────────┘          └──────────────┘          └──────────────┘

Leitura: "Um PACIENTE realiza uma ou muitas CONSULTAS"
         "Um MÉDICO atende uma ou muitas CONSULTAS"
         "Uma CONSULTA pertence a exatamente um PACIENTE e um MÉDICO"
```

**Regras de Negócio identificadas:**
1. Todo paciente deve ter CPF único
2. Todo médico deve ter CRM único
3. Uma consulta só pode ter um médico e um paciente
4. Um paciente pode ter várias consultas
5. Um médico pode atender vários pacientes

### Tópico 3: Normalização

#### Resumo Teórico

**Normalização** é o processo de organizar tabelas para eliminar redundâncias e anomalias.

| Forma Normal | Regra | O que elimina |
|-------------|-------|---------------|
| **1FN** | Todos os atributos devem ser atômicos (indivisíveis) | Grupos repetitivos, listas em uma célula |
| **2FN** | Estar em 1FN + sem dependências parciais | Atributos que dependem só de PARTE da PK composta |
| **3FN** | Estar em 2FN + sem dependências transitivas | Atributo A→B→C (B não é chave) |

#### Exemplo Prático: Normalizando Passo a Passo

**Tabela NÃO normalizada (planilha original):**

| pedido_id | cliente_nome | cliente_cidade | produto1 | qtd1 | produto2 | qtd2 |
|-----------|-------------|----------------|----------|------|----------|------|
| 1 | João | Recife | Mouse | 2 | Teclado | 1 |
| 2 | Maria | Olinda | Monitor | 1 | | |

**Problemas:** colunas repetitivas (produto1, produto2), dados misturados.

**Após 1FN** (atomicidade, sem grupos repetitivos):

| pedido_id | cliente_nome | cliente_cidade | produto | quantidade |
|-----------|-------------|----------------|---------|-----------|
| 1 | João | Recife | Mouse | 2 |
| 1 | João | Recife | Teclado | 1 |
| 2 | Maria | Olinda | Monitor | 1 |

PK composta: (pedido_id, produto)

**Após 2FN** (eliminar dependências parciais):

```
PEDIDOS: pedido_id (PK) | cliente_nome | cliente_cidade
ITENS_PEDIDO: pedido_id (FK) | produto | quantidade → PK(pedido_id, produto)
```

`cliente_nome` dependia só de `pedido_id`, não do produto → movida.

**Após 3FN** (eliminar dependências transitivas):

```
CLIENTES: cliente_id (PK) | cliente_nome | cliente_cidade
PEDIDOS: pedido_id (PK) | cliente_id (FK)
ITENS_PEDIDO: pedido_id (FK) | produto_id (FK) | quantidade
PRODUTOS: produto_id (PK) | nome_produto
```

`cliente_cidade` dependia de `cliente_nome`, não diretamente do `pedido_id` → tabela separada.

### Tópico 4: DDL — Comandos de Definição

#### Resumo Teórico

| Comando | Função | Sintaxe Básica |
|---------|--------|---------------|
| `CREATE TABLE` | Criar tabela | `CREATE TABLE nome (colunas);` |
| `ALTER TABLE` | Modificar estrutura | `ALTER TABLE nome ADD/DROP/RENAME;` |
| `DROP TABLE` | Excluir tabela | `DROP TABLE nome;` |
| `TRUNCATE` | Apagar todos os dados (mantém estrutura) | `TRUNCATE TABLE nome;` |

#### Exemplo Prático: Schema Completo da Clínica

```sql
-- ============================================
-- SCHEMA: SISTEMA DE CLÍNICA MÉDICA
-- ============================================

-- Tabela de Especialidades
CREATE TABLE especialidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT
);

-- Tabela de Médicos
CREATE TABLE medicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    crm VARCHAR(15) NOT NULL UNIQUE,
    especialidade_id INTEGER NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_especialidade
        FOREIGN KEY (especialidade_id) REFERENCES especialidades(id)
);

-- Tabela de Pacientes
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    endereco TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Consultas
CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    medico_id INTEGER NOT NULL,
    data_hora TIMESTAMP NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('primeira_vez', 'retorno')),
    status VARCHAR(20) NOT NULL DEFAULT 'agendada'
        CHECK (status IN ('agendada', 'confirmada', 'realizada', 'cancelada')),
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_paciente FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    CONSTRAINT fk_medico FOREIGN KEY (medico_id) REFERENCES medicos(id),
    CONSTRAINT uk_medico_horario UNIQUE (medico_id, data_hora)
);

-- Índice para buscas por data
CREATE INDEX idx_consultas_data ON consultas(data_hora);

-- Índice para buscas por paciente
CREATE INDEX idx_consultas_paciente ON consultas(paciente_id);
```

**Explicação das decisões:**
- `SERIAL` para IDs auto-incrementais
- `CHECK` para validar valores permitidos (tipo, status)
- `UNIQUE(medico_id, data_hora)` evita dois pacientes no mesmo horário
- Índices aceleram consultas frequentes (por data e por paciente)

### Tópico 5: DML — Comandos de Manipulação

#### Resumo Teórico

| Comando | Função | Cuidado |
|---------|--------|---------|
| `INSERT` | Adicionar registros | Respeitar constraints (NOT NULL, FK, UNIQUE) |
| `SELECT` | Consultar dados | Comando mais versátil e complexo |
| `UPDATE` | Alterar registros | SEMPRE usar WHERE (senão altera tudo!) |
| `DELETE` | Excluir registros | SEMPRE usar WHERE (senão apaga tudo!) |

#### Exemplo Prático: Operações Completas na Clínica

```sql
-- ============================================
-- INSERT: Popular o banco
-- ============================================

-- Inserir especialidades
INSERT INTO especialidades (nome, descricao) VALUES
    ('Cardiologia', 'Doenças do coração e sistema circulatório'),
    ('Dermatologia', 'Doenças de pele, cabelo e unhas'),
    ('Pediatria', 'Saúde infantil de 0 a 18 anos'),
    ('Ortopedia', 'Sistema músculo-esquelético');

-- Inserir médicos
INSERT INTO medicos (nome, crm, especialidade_id, telefone, email) VALUES
    ('Dr. Carlos Mendes', 'CRM-PE 12345', 1, '81988881111', 'carlos@clinica.com'),
    ('Dra. Ana Costa', 'CRM-PE 23456', 2, '81988882222', 'ana@clinica.com'),
    ('Dr. Pedro Lima', 'CRM-PE 34567', 3, '81988883333', 'pedro@clinica.com');

-- Inserir pacientes
INSERT INTO pacientes (nome, cpf, data_nascimento, telefone, email) VALUES
    ('João Oliveira', '11122233344', '1985-03-20', '81977771111', 'joao@email.com'),
    ('Maria Santos', '55566677788', '1992-08-10', '81977772222', 'maria@email.com'),
    ('Ana Paula Reis', '99900011122', '2000-12-05', '81977773333', 'anapaula@email.com');

-- Inserir consultas
INSERT INTO consultas (paciente_id, medico_id, data_hora, tipo, status) VALUES
    (1, 1, '2026-08-10 09:00', 'primeira_vez', 'agendada'),
    (2, 1, '2026-08-10 10:00', 'primeira_vez', 'confirmada'),
    (1, 2, '2026-08-11 14:00', 'retorno', 'agendada'),
    (3, 3, '2026-08-12 08:30', 'primeira_vez', 'realizada'),
    (2, 2, '2026-08-05 11:00', 'primeira_vez', 'cancelada');

-- ============================================
-- SELECT: Consultas de diferentes complexidades
-- ============================================

-- 1. Básico: Todos os pacientes
SELECT * FROM pacientes ORDER BY nome;

-- 2. Filtro: Consultas agendadas
SELECT * FROM consultas WHERE status = 'agendada';

-- 3. JOIN: Consultas com nomes de pacientes e médicos
SELECT
    c.id AS consulta_id,
    p.nome AS paciente,
    m.nome AS medico,
    e.nome AS especialidade,
    c.data_hora,
    c.tipo,
    c.status
FROM consultas c
INNER JOIN pacientes p ON c.paciente_id = p.id
INNER JOIN medicos m ON c.medico_id = m.id
INNER JOIN especialidades e ON m.especialidade_id = e.id
ORDER BY c.data_hora;

-- 4. Agregação: Quantas consultas cada médico tem
SELECT
    m.nome AS medico,
    COUNT(c.id) AS total_consultas,
    COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) AS canceladas
FROM medicos m
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY m.id, m.nome
ORDER BY total_consultas DESC;

-- 5. Subquery: Pacientes que nunca consultaram com Cardiologia
SELECT nome, cpf
FROM pacientes
WHERE id NOT IN (
    SELECT DISTINCT c.paciente_id
    FROM consultas c
    INNER JOIN medicos m ON c.medico_id = m.id
    WHERE m.especialidade_id = 1
);

-- ============================================
-- UPDATE: Atualizar registros
-- ============================================

-- Confirmar uma consulta
UPDATE consultas
SET status = 'confirmada'
WHERE id = 1 AND status = 'agendada';

-- Atualizar telefone de paciente
UPDATE pacientes
SET telefone = '81966661234'
WHERE cpf = '11122233344';

-- ============================================
-- DELETE: Excluir registros
-- ============================================

-- Excluir consultas canceladas com mais de 6 meses
DELETE FROM consultas
WHERE status = 'cancelada'
  AND data_hora < CURRENT_DATE - INTERVAL '6 months';
```

---

## 📝 LISTA DE EXERCÍCIOS PRÁTICOS

### Módulo A: Modelagem de Dados (Semanas 4–7)

#### Exercício A1 — Fácil
**Enunciado:** Modele um DER para um sistema de **Biblioteca** com as seguintes regras:
- A biblioteca possui livros, autores e empréstimos
- Um livro pode ter vários autores e um autor pode ter vários livros
- Um empréstimo envolve um livro e um leitor com datas de retirada e devolução

**Gabarito:**
```
Entidades: LIVRO, AUTOR, LEITOR, EMPRESTIMO
Relacionamentos:
  - LIVRO ←(N:M)→ AUTOR (tabela associativa: LIVRO_AUTOR)
  - LEITOR ←(1:N)→ EMPRESTIMO
  - LIVRO ←(1:N)→ EMPRESTIMO

Atributos chave:
  LIVRO: id, titulo, isbn, ano_publicacao, editora
  AUTOR: id, nome, nacionalidade
  LEITOR: id, nome, cpf, telefone
  EMPRESTIMO: id, livro_id(FK), leitor_id(FK), data_retirada, data_devolucao_prevista, data_devolucao_real, status
```

#### Exercício A2 — Médio
**Enunciado:** Normalize a seguinte tabela até a 3FN:

| matricula | aluno_nome | curso_nome | curso_coordenador | disciplina | nota |
|-----------|-----------|-----------|-------------------|-----------|------|
| 001 | Ana | ADS | Prof. Silva | BD | 8.5 |
| 001 | Ana | ADS | Prof. Silva | Lógica | 7.0 |
| 002 | João | Redes | Prof. Costa | Redes I | 9.0 |

**Gabarito:**

**1FN:** Já está (valores atômicos, sem repetições).

**2FN:** PK composta = (matricula, disciplina). `aluno_nome`, `curso_nome`, `curso_coordenador` dependem só de `matricula`:
```
ALUNOS: matricula(PK), aluno_nome, curso_nome, curso_coordenador
NOTAS: matricula(FK), disciplina, nota → PK(matricula, disciplina)
```

**3FN:** `curso_coordenador` depende de `curso_nome` (transitiva):
```
CURSOS: curso_id(PK), curso_nome, curso_coordenador
ALUNOS: matricula(PK), aluno_nome, curso_id(FK)
DISCIPLINAS: disciplina_id(PK), nome_disciplina
NOTAS: matricula(FK), disciplina_id(FK), nota → PK(matricula, disciplina_id)
```

#### Exercício A3 — Médio
**Enunciado:** Crie o modelo físico (DDL) para um sistema de **E-commerce** com: Clientes, Produtos, Pedidos e Itens de Pedido. Inclua todas as constraints necessárias.

**Gabarito:**
```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco > 0),
    estoque INTEGER NOT NULL DEFAULT 0 CHECK (estoque >= 0),
    categoria VARCHAR(50)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL REFERENCES clientes(id),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pendente'
        CHECK (status IN ('pendente','pago','enviado','entregue','cancelado')),
    valor_total DECIMAL(10,2) DEFAULT 0
);

CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL REFERENCES pedidos(id) ON DELETE CASCADE,
    produto_id INTEGER NOT NULL REFERENCES produtos(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,
    UNIQUE (pedido_id, produto_id)
);
```

#### Exercício A4 — Desafiador
**Enunciado:** Uma escola de idiomas precisa de um banco de dados. Regras:
- Alunos se matriculam em turmas (uma turma = 1 idioma + 1 nível + 1 professor)
- Professores podem lecionar vários idiomas
- Alunos podem estar em várias turmas simultaneamente
- Cada turma tem horários fixos (dias da semana + horário)
- É preciso controlar frequência (presença/falta por aula)

**Crie:** DER completo + DDL normalizada em 3FN.

**Gabarito:**
```
Entidades: ALUNO, PROFESSOR, TURMA, IDIOMA, MATRICULA, AULA, FREQUENCIA
Relacionamentos:
  - PROFESSOR ←(N:M)→ IDIOMA (tabela: PROFESSOR_IDIOMA)
  - TURMA → PROFESSOR (N:1), TURMA → IDIOMA (N:1)
  - ALUNO ←(N:M)→ TURMA (tabela: MATRICULA)
  - TURMA ←(1:N)→ AULA
  - FREQUENCIA liga MATRICULA + AULA
```

```sql
CREATE TABLE idiomas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE professor_idioma (
    professor_id INTEGER REFERENCES professores(id),
    idioma_id INTEGER REFERENCES idiomas(id),
    PRIMARY KEY (professor_id, idioma_id)
);

CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    idioma_id INTEGER NOT NULL REFERENCES idiomas(id),
    professor_id INTEGER NOT NULL REFERENCES professores(id),
    nivel VARCHAR(20) NOT NULL CHECK (nivel IN ('basico','intermediario','avancado')),
    dia_semana VARCHAR(15) NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    max_alunos INTEGER DEFAULT 20
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE matriculas (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    turma_id INTEGER NOT NULL REFERENCES turmas(id),
    data_matricula DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'ativa',
    UNIQUE (aluno_id, turma_id)
);

CREATE TABLE aulas (
    id SERIAL PRIMARY KEY,
    turma_id INTEGER NOT NULL REFERENCES turmas(id),
    data_aula DATE NOT NULL,
    conteudo TEXT
);

CREATE TABLE frequencias (
    matricula_id INTEGER NOT NULL REFERENCES matriculas(id),
    aula_id INTEGER NOT NULL REFERENCES aulas(id),
    presente BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (matricula_id, aula_id)
);
```

### Módulo B: SQL — DDL e DML (Semanas 8–16)

#### Exercício B1 — Fácil
**Enunciado:** Usando o schema da Clínica Médica, escreva consultas para:
1. Listar todos os médicos ativos ordenados por nome
2. Contar quantos pacientes estão cadastrados
3. Buscar consultas agendadas para agosto/2026

**Gabarito:**
```sql
-- 1. Médicos ativos
SELECT nome, crm, email
FROM medicos
WHERE ativo = TRUE
ORDER BY nome;

-- 2. Total de pacientes
SELECT COUNT(*) AS total_pacientes FROM pacientes;

-- 3. Consultas de agosto/2026
SELECT *
FROM consultas
WHERE data_hora >= '2026-08-01'
  AND data_hora < '2026-09-01'
  AND status = 'agendada'
ORDER BY data_hora;
```

#### Exercício B2 — Médio
**Enunciado:** Escreva consultas usando JOIN e agregações:
1. Listar todas as consultas com nome do paciente, médico e especialidade
2. Mostrar a quantidade de consultas por especialidade
3. Encontrar o paciente com mais consultas realizadas

**Gabarito:**
```sql
-- 1. Consultas detalhadas
SELECT
    c.id,
    p.nome AS paciente,
    m.nome AS medico,
    e.nome AS especialidade,
    c.data_hora,
    c.status
FROM consultas c
JOIN pacientes p ON c.paciente_id = p.id
JOIN medicos m ON c.medico_id = m.id
JOIN especialidades e ON m.especialidade_id = e.id
ORDER BY c.data_hora DESC;

-- 2. Consultas por especialidade
SELECT
    e.nome AS especialidade,
    COUNT(c.id) AS total_consultas
FROM especialidades e
LEFT JOIN medicos m ON e.id = m.especialidade_id
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY e.nome
ORDER BY total_consultas DESC;

-- 3. Paciente com mais consultas realizadas
SELECT
    p.nome,
    COUNT(c.id) AS total
FROM pacientes p
JOIN consultas c ON p.id = c.paciente_id
WHERE c.status = 'realizada'
GROUP BY p.id, p.nome
ORDER BY total DESC
LIMIT 1;
```

#### Exercício B3 — Médio
**Enunciado:** Pratique UPDATE e DELETE com segurança:
1. Altere o status de todas as consultas passadas de 'agendada' para 'não compareceu'
2. Desative (não delete!) médicos que não têm nenhuma consulta registrada
3. Delete pacientes que nunca tiveram consulta (cuidado com FK!)

**Gabarito:**
```sql
-- 1. Marcar não comparecimento
UPDATE consultas
SET status = 'nao_compareceu'
WHERE status = 'agendada'
  AND data_hora < CURRENT_TIMESTAMP;
-- Afeta: consultas no passado que ficaram como "agendada"

-- 2. Desativar médicos sem consultas
UPDATE medicos
SET ativo = FALSE
WHERE id NOT IN (
    SELECT DISTINCT medico_id FROM consultas
);

-- 3. Deletar pacientes sem consultas (verificar FK primeiro)
DELETE FROM pacientes
WHERE id NOT IN (
    SELECT DISTINCT paciente_id FROM consultas
);
-- ATENÇÃO: Só funciona se não houver FK apontando para esses pacientes
```

#### Exercício B4 — Desafiador
**Enunciado:** Crie um relatório gerencial que mostre:
1. Para cada mês de 2026, a quantidade de consultas por status
2. A taxa de cancelamento por médico (canceladas / total * 100)
3. Os 3 horários mais procurados (hora do dia) para agendamento
4. Pacientes que têm consulta agendada com mais de um médico diferente

**Gabarito:**
```sql
-- 1. Consultas por mês e status (tabela pivô simples)
SELECT
    TO_CHAR(data_hora, 'YYYY-MM') AS mes,
    COUNT(CASE WHEN status = 'agendada' THEN 1 END) AS agendadas,
    COUNT(CASE WHEN status = 'confirmada' THEN 1 END) AS confirmadas,
    COUNT(CASE WHEN status = 'realizada' THEN 1 END) AS realizadas,
    COUNT(CASE WHEN status = 'cancelada' THEN 1 END) AS canceladas,
    COUNT(*) AS total
FROM consultas
WHERE EXTRACT(YEAR FROM data_hora) = 2026
GROUP BY TO_CHAR(data_hora, 'YYYY-MM')
ORDER BY mes;

-- 2. Taxa de cancelamento por médico
SELECT
    m.nome AS medico,
    COUNT(c.id) AS total_consultas,
    COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) AS canceladas,
    ROUND(
        COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) * 100.0 / 
        NULLIF(COUNT(c.id), 0), 2
    ) AS taxa_cancelamento_pct
FROM medicos m
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY m.id, m.nome
ORDER BY taxa_cancelamento_pct DESC;

-- 3. Horários mais procurados
SELECT
    EXTRACT(HOUR FROM data_hora) AS hora,
    COUNT(*) AS total_agendamentos
FROM consultas
GROUP BY EXTRACT(HOUR FROM data_hora)
ORDER BY total_agendamentos DESC
LIMIT 3;

-- 4. Pacientes com múltiplos médicos
SELECT
    p.nome,
    COUNT(DISTINCT c.medico_id) AS qtd_medicos
FROM pacientes p
JOIN consultas c ON p.id = c.paciente_id
WHERE c.status IN ('agendada', 'confirmada')
GROUP BY p.id, p.nome
HAVING COUNT(DISTINCT c.medico_id) > 1;
```

#### Exercício B5 — Desafiador
**Enunciado:** Crie uma VIEW chamada `vw_agenda_completa` que retorne a agenda dos próximos 7 dias com: data, horário, paciente, médico, especialidade, tipo e status. Depois, use essa VIEW para responder: "Quais médicos têm mais de 3 consultas na próxima semana?"

**Gabarito:**
```sql
-- Criar a VIEW
CREATE VIEW vw_agenda_completa AS
SELECT
    c.id AS consulta_id,
    c.data_hora,
    DATE(c.data_hora) AS data,
    TO_CHAR(c.data_hora, 'HH24:MI') AS horario,
    p.nome AS paciente,
    p.telefone AS paciente_telefone,
    m.nome AS medico,
    e.nome AS especialidade,
    c.tipo,
    c.status
FROM consultas c
JOIN pacientes p ON c.paciente_id = p.id
JOIN medicos m ON c.medico_id = m.id
JOIN especialidades e ON m.especialidade_id = e.id
WHERE c.data_hora BETWEEN CURRENT_TIMESTAMP AND CURRENT_TIMESTAMP + INTERVAL '7 days'
  AND c.status IN ('agendada', 'confirmada');

-- Usar a VIEW para a consulta
SELECT
    medico,
    especialidade,
    COUNT(*) AS consultas_semana
FROM vw_agenda_completa
GROUP BY medico, especialidade
HAVING COUNT(*) > 3
ORDER BY consultas_semana DESC;
```

---

## 🚀 PROJETOS PRÁTICOS ORIENTADOS

### Projeto Intermediário (Semana 7) — Modelagem Completa

**Tema sugerido:** Sistema de Agendamento de um Salão de Beleza

**Enunciado:**
Você foi contratado(a) para projetar o banco de dados de um salão de beleza. O sistema deve controlar: profissionais, clientes, serviços oferecidos (com preços), agendamentos e pagamentos.

**Requisitos Funcionais:**
- RF01: Cadastrar profissionais com suas especialidades (cabeleireiro, manicure, etc.)
- RF02: Cadastrar clientes com dados de contato
- RF03: Cadastrar serviços com duração estimada e preço
- RF04: Realizar agendamento vinculando cliente + profissional + serviço + horário
- RF05: Registrar pagamento (dinheiro, cartão, PIX) vinculado ao agendamento

**Requisitos Não-Funcionais:**
- RNF01: Um profissional não pode ter dois agendamentos no mesmo horário
- RNF02: Manter histórico de preços (não apagar preço antigo ao atualizar)
- RNF03: Dados pessoais (CPF, telefone) devem ser obrigatórios

**Entregáveis:**
1. DER (Diagrama Entidade-Relacionamento) em ferramenta visual
2. Modelo Lógico (tabelas com PKs, FKs, tipos de dados)
3. Demonstração que está em 3FN (justificar cada tabela)

**Rubrica de Avaliação:**

| Critério | Peso | Excelente (10) | Bom (7) | Insuficiente (4) |
|----------|------|----------------|---------|------------------|
| DER correto | 30% | Todas entidades, atributos e cardinalidades corretos | Pequenas falhas de cardinalidade | Falta entidades ou relações importantes |
| Modelo Lógico | 30% | Mapeamento completo com todas as constraints | Faltam 1-2 constraints | Mapeamento incompleto |
| Normalização | 20% | Em 3FN com justificativa clara | Em 2FN ou 3FN sem justificativa | Não normalizado |
| Apresentação | 20% | Diagrama limpo, nomenclatura padronizada | Legível mas com inconsistências | Difícil de entender |

---

### Projeto Final (Semanas 18–20) — Sistema Completo

**Tema:** Sistema de Gestão para um **Restaurante Delivery** (ou tema livre aprovado pela docente)

**Escopo:**
O aluno deve entregar um banco de dados funcional no PostgreSQL que contemple todo o ciclo: modelagem → implementação → consultas.

**Entregáveis Obrigatórios:**

| # | Entregável | Descrição |
|---|-----------|-----------|
| 1 | DER | Diagrama conceitual completo (mín. 5 entidades) |
| 2 | Modelo Lógico | Tabelas normalizadas até 3FN |
| 3 | Script DDL | `CREATE TABLE` com todas as constraints |
| 4 | Script DML - INSERT | Mín. 10 registros por tabela principal |
| 5 | Script DML - SELECT | Mín. 5 consultas complexas (JOIN, GROUP BY, subquery) |
| 6 | Script DML - UPDATE/DELETE | Mín. 2 exemplos de cada |
| 7 | Documentação | README com descrição do sistema e regras de negócio |

**Passo a Passo para os Alunos:**

1. **Semana 18, Aula 1:** Escolha do tema + levantamento de regras de negócio (listar pelo menos 5 regras)
2. **Semana 18, Aula 2:** Construção do DER com mínimo 5 entidades e 4 relacionamentos
3. **Semana 18, Aula 3:** Mapeamento para modelo lógico + verificação de normalização
4. **Semana 18, Aula 4:** Revisão com a professora (obrigatória)
5. **Semana 19, Aula 1:** Script DDL — criar todas as tabelas no PostgreSQL
6. **Semana 19, Aula 2:** Script DML — popular com dados realistas
7. **Semana 19, Aula 3:** Queries de consulta — resolver "perguntas de negócio"
8. **Semana 19, Aula 4:** Documentação + preparar apresentação
9. **Semana 20:** Apresentação oral (5-8 min por grupo/aluno)

**Sugestões de "Perguntas de Negócio" para o tema Restaurante:**
- Qual prato vende mais em cada dia da semana?
- Qual entregador tem melhor tempo médio de entrega?
- Qual o ticket médio dos pedidos por bairro?
- Quais clientes não pedem há mais de 30 dias?
- Qual o faturamento mensal por categoria de produto?

**Rubrica de Avaliação do Projeto Final:**

| Critério | Peso | Nota 10 | Nota 7 | Nota 4 |
|----------|------|---------|--------|--------|
| Modelagem (DER + Lógico) | 25% | Completa, correta, normalizada | Pequenos erros de cardinalidade | Modelo incompleto/não normalizado |
| DDL (scripts) | 20% | Todas constraints, índices, nomenclatura padrão | Faltam 1-2 constraints | Tabelas sem constraints |
| DML - Inserção | 10% | Dados realistas e consistentes | Dados mínimos corretos | Dados inconsistentes |
| DML - Consultas | 25% | 5+ queries complexas e corretas | 3-4 queries com JOINs | Só SELECT simples |
| Documentação | 10% | README claro com regras e explicações | Documentação parcial | Sem documentação |
| Apresentação | 10% | Comunicação clara, domínio do conteúdo | Apresentação básica | Não demonstrou entendimento |

---

## 📋 SIMULADO PREPARATÓRIO (Semana 16)

### Questões Objetivas (5 questões)

**Q1.** Qual das alternativas representa corretamente a 2ª Forma Normal (2FN)?

a) Todos os atributos devem ser atômicos  
b) Não pode haver dependências transitivas  
c) Todo atributo não-chave deve depender totalmente da chave primária  
d) A tabela deve ter pelo menos uma chave candidata  
e) Toda coluna deve ser NOT NULL  

**Resposta:** C  
**Explicação:** A 2FN exige que todos os atributos não-chave dependam funcionalmente de TODA a chave primária, eliminando dependências parciais (quando um atributo depende apenas de parte da PK composta).

---

**Q2.** Considere a query: `SELECT * FROM medicos WHERE especialidade_id IN (SELECT id FROM especialidades WHERE nome = 'Cardiologia')`. Qual tipo de subquery está sendo utilizado?

a) Subquery escalar  
b) Subquery de lista (retorna múltiplos valores)  
c) Subquery correlacionada  
d) Subquery no FROM  
e) Common Table Expression (CTE)  

**Resposta:** B  
**Explicação:** A subquery retorna uma lista de IDs (potencialmente múltiplos valores) que são usados pelo operador IN para filtrar. Uma subquery escalar retorna apenas um valor único.

---

**Q3.** Qual é a diferença fundamental entre `DELETE` e `TRUNCATE`?

a) DELETE é DML e TRUNCATE é DDL; TRUNCATE não ativa triggers e não pode ter WHERE  
b) Não há diferença, são sinônimos  
c) DELETE é mais rápido que TRUNCATE  
d) TRUNCATE pode ter cláusula WHERE  
e) DELETE remove a estrutura da tabela  

**Resposta:** A  
**Explicação:** DELETE é DML (pode usar WHERE, ativa triggers, é logado por registro). TRUNCATE é DDL (remove TODOS os registros de uma vez, não ativa triggers, é mais rápido, reseta sequences no PostgreSQL).

---

**Q4.** Em um relacionamento N:M entre ALUNO e DISCIPLINA, qual a solução correta no modelo lógico/físico?

a) Adicionar uma coluna array em ALUNO com IDs das disciplinas  
b) Criar uma tabela associativa (ex: MATRICULA) com FKs para ambas  
c) Adicionar uma FK em DISCIPLINA apontando para ALUNO  
d) Usar herança entre ALUNO e DISCIPLINA  
e) Duplicar registros em ambas as tabelas  

**Resposta:** B  
**Explicação:** Relacionamentos N:M são implementados através de uma tabela associativa (ou tabela de junção) que contém chaves estrangeiras para ambas as tabelas, transformando N:M em dois relacionamentos 1:N.

---

**Q5.** Qual constraint garante que não existam dois médicos atendendo no mesmo horário?

a) `PRIMARY KEY (medico_id, data_hora)`  
b) `UNIQUE (medico_id, data_hora)` na tabela de consultas  
c) `CHECK (data_hora IS NOT NULL)`  
d) `FOREIGN KEY (medico_id) REFERENCES medicos(id)`  
e) `NOT NULL` na coluna data_hora  

**Resposta:** B  
**Explicação:** A constraint `UNIQUE (medico_id, data_hora)` garante que a combinação de médico + horário seja única na tabela de consultas, impedindo duplicidade. PK não seria adequada pois a tabela já tem sua própria PK (id).

---

### Questões Práticas/Discursivas (2 questões)

**QP1.** (4,0 pontos) Dada a tabela não normalizada abaixo, normalize até a 3FN. Mostre cada passo e justifique.

| pedido | data | cliente | cidade_cliente | estado_cliente | produto | categoria | preco | qtd |
|--------|------|---------|----------------|----------------|---------|-----------|-------|-----|
| 101 | 2026-01-15 | Ana | Recife | PE | Notebook | Eletrônicos | 3500 | 1 |
| 101 | 2026-01-15 | Ana | Recife | PE | Mouse | Periféricos | 80 | 2 |
| 102 | 2026-01-16 | João | Olinda | PE | Notebook | Eletrônicos | 3500 | 1 |

**Gabarito QP1:**

**1FN:** Já atende (valores atômicos, sem colunas repetitivas). PK candidata: (pedido, produto)

**2FN:** Identificar dependências parciais:
- `data`, `cliente`, `cidade_cliente`, `estado_cliente` → dependem só de `pedido`
- `categoria`, `preco` → dependem só de `produto`
- `qtd` → depende de ambos (pedido + produto) ✓

Resultado:
```
PEDIDOS(pedido PK, data, cliente, cidade_cliente, estado_cliente)
PRODUTOS(produto PK, categoria, preco)
ITENS_PEDIDO(pedido FK, produto FK, qtd) → PK(pedido, produto)
```

**3FN:** Dependências transitivas em PEDIDOS:
- `cidade_cliente` depende de `cliente` (não do pedido diretamente)
- `estado_cliente` depende de `cidade_cliente`

Resultado final:
```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(100),
    estado CHAR(2)
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    cliente_id INTEGER REFERENCES clientes(id)
);

CREATE TABLE itens_pedido (
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (pedido_id, produto_id)
);
```

**Critério de correção:** 1 ponto por FN correta + 1 ponto pela justificativa + 1 ponto pelo DDL final.

---

**QP2.** (4,0 pontos) Escreva as seguintes consultas SQL para o schema da Clínica Médica:

a) Liste os 3 médicos com mais consultas realizadas no primeiro semestre de 2026, mostrando nome, especialidade e total.

b) Encontre pacientes que tiveram consultas canceladas E que também têm consultas agendadas futuras (mostrar nome e datas).

**Gabarito QP2:**

```sql
-- a) Top 3 médicos do 1º semestre
SELECT
    m.nome AS medico,
    e.nome AS especialidade,
    COUNT(c.id) AS total_realizadas
FROM medicos m
JOIN consultas c ON m.id = c.medico_id
JOIN especialidades e ON m.especialidade_id = e.id
WHERE c.status = 'realizada'
  AND c.data_hora >= '2026-01-01'
  AND c.data_hora < '2026-07-01'
GROUP BY m.id, m.nome, e.nome
ORDER BY total_realizadas DESC
LIMIT 3;

-- b) Pacientes com cancelamento + agendamento futuro
SELECT DISTINCT
    p.nome,
    c_cancel.data_hora AS data_cancelada,
    c_futura.data_hora AS data_agendada
FROM pacientes p
JOIN consultas c_cancel ON p.id = c_cancel.paciente_id
    AND c_cancel.status = 'cancelada'
JOIN consultas c_futura ON p.id = c_futura.paciente_id
    AND c_futura.status IN ('agendada', 'confirmada')
    AND c_futura.data_hora > CURRENT_TIMESTAMP
ORDER BY p.nome;
```

**Critério:** 2 pontos por query. -0,5 para erros menores de sintaxe que não alteram a lógica.

---

## 📝 PROVA REGIMENTAL / OFICIAL (Semana 17)

**Duração:** 2 aulas (100 minutos)  
**Valor:** 10,0 pontos  
**Material permitido:** Nenhum (consulta fechada)

---

### PARTE 1 — Questões Objetivas (2,5 pontos — 0,5 cada)

**1.** Qual comando SQL é classificado como DDL (Data Definition Language)?

a) SELECT  
b) INSERT  
c) UPDATE  
d) ALTER TABLE  
e) DELETE  

**Resposta:** D

---

**2.** Em um modelo relacional, uma chave estrangeira (FK) serve para:

a) Identificar unicamente cada registro da tabela  
b) Estabelecer uma ligação de integridade referencial entre duas tabelas  
c) Impedir que valores nulos sejam inseridos  
d) Criar índices automáticos para performance  
e) Permitir herança entre tabelas  

**Resposta:** B

---

**3.** Considere: `SELECT nome FROM alunos WHERE turma_id = (SELECT id FROM turmas WHERE nome = 'DS-M1')`. Se a subquery retornar mais de um resultado, o que acontece?

a) Retorna o primeiro resultado encontrado  
b) Gera um erro de execução (subquery retornou mais de uma linha)  
c) Funciona normalmente com todos os resultados  
d) Retorna NULL  
e) O SGBD escolhe aleatoriamente um valor  

**Resposta:** B  
**Explicação:** Quando usamos `=` com subquery, ela deve retornar exatamente 1 valor. Para múltiplos valores, usar `IN`.

---

**4.** Qual das opções abaixo representa um problema de anomalia de ATUALIZAÇÃO em tabelas não normalizadas?

a) Ao inserir um novo aluno, ser obrigado a cadastrar uma disciplina  
b) Ao deletar o último aluno de uma disciplina, perder os dados da disciplina  
c) Ao alterar o nome do curso, ter que atualizar em TODAS as linhas dos alunos daquele curso  
d) Não conseguir inserir dados por falta de chave primária  
e) Ter performance ruim nas consultas  

**Resposta:** C  
**Explicação:** Anomalia de atualização: dado redundante exige atualização em múltiplos lugares. Se falhar uma, gera inconsistência.

---

**5.** Qual a diferença entre `LEFT JOIN` e `INNER JOIN`?

a) LEFT JOIN retorna apenas registros da tabela à esquerda  
b) LEFT JOIN retorna todos da esquerda + correspondentes da direita (NULL se não houver match)  
c) INNER JOIN inclui registros sem correspondência  
d) Não há diferença prática  
e) LEFT JOIN é mais rápido  

**Resposta:** B

---

### PARTE 2 — Questões Práticas (7,5 pontos)

**Contexto:** Use o schema abaixo para as questões 6, 7 e 8:

```sql
-- Schema fornecido na prova:
-- FUNCIONARIOS(id, nome, cargo, salario, departamento_id, data_admissao)
-- DEPARTAMENTOS(id, nome, andar, gerente_id FK→FUNCIONARIOS)
-- PROJETOS(id, nome, orcamento, departamento_id FK→DEPARTAMENTOS)
-- ALOCACOES(funcionario_id FK, projeto_id FK, horas_semanais) PK(func_id, proj_id)
```

---

**6.** (2,5 pontos) Escreva o script DDL completo para criar as 4 tabelas acima no PostgreSQL, incluindo:
- Tipos de dados adequados
- Todas as PKs e FKs
- Constraints: salário > 0, horas_semanais entre 1 e 40
- Pelo menos 1 índice que faça sentido

**Gabarito:**
```sql
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    andar INTEGER,
    gerente_id INTEGER  -- FK adicionada depois (referência circular)
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL CHECK (salario > 0),
    departamento_id INTEGER NOT NULL REFERENCES departamentos(id),
    data_admissao DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Adicionar FK circular após criação de ambas as tabelas
ALTER TABLE departamentos
ADD CONSTRAINT fk_gerente FOREIGN KEY (gerente_id) REFERENCES funcionarios(id);

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    orcamento DECIMAL(12,2) DEFAULT 0,
    departamento_id INTEGER NOT NULL REFERENCES departamentos(id)
);

CREATE TABLE alocacoes (
    funcionario_id INTEGER NOT NULL REFERENCES funcionarios(id),
    projeto_id INTEGER NOT NULL REFERENCES projetos(id),
    horas_semanais INTEGER NOT NULL CHECK (horas_semanais BETWEEN 1 AND 40),
    PRIMARY KEY (funcionario_id, projeto_id)
);

-- Índice para buscas frequentes por departamento
CREATE INDEX idx_func_depto ON funcionarios(departamento_id);
```

**Critério:** 1,0 tabelas corretas | 0,5 constraints | 0,5 FK circular resolvida | 0,5 índice

---

**7.** (2,5 pontos) Escreva consultas SQL para:

a) Listar o nome de cada departamento com a quantidade de funcionários e a média salarial (incluir departamentos sem funcionários).

b) Encontrar funcionários que trabalham em mais de 2 projetos simultaneamente.

c) Mostrar o projeto com maior orçamento de cada departamento.

**Gabarito:**
```sql
-- a) Departamentos com qtd de funcionários e média salarial
SELECT
    d.nome AS departamento,
    COUNT(f.id) AS qtd_funcionarios,
    COALESCE(ROUND(AVG(f.salario), 2), 0) AS media_salarial
FROM departamentos d
LEFT JOIN funcionarios f ON d.id = f.departamento_id
GROUP BY d.id, d.nome
ORDER BY qtd_funcionarios DESC;

-- b) Funcionários em mais de 2 projetos
SELECT
    f.nome,
    f.cargo,
    COUNT(a.projeto_id) AS total_projetos,
    SUM(a.horas_semanais) AS total_horas
FROM funcionarios f
JOIN alocacoes a ON f.id = a.funcionario_id
GROUP BY f.id, f.nome, f.cargo
HAVING COUNT(a.projeto_id) > 2;

-- c) Projeto com maior orçamento por departamento
SELECT
    d.nome AS departamento,
    p.nome AS projeto,
    p.orcamento
FROM projetos p
JOIN departamentos d ON p.departamento_id = d.id
WHERE p.orcamento = (
    SELECT MAX(p2.orcamento)
    FROM projetos p2
    WHERE p2.departamento_id = p.departamento_id
)
ORDER BY p.orcamento DESC;
```

**Critério:** ~0,83 por query correta. -0,25 por erros menores de sintaxe.

---

**8.** (2,5 pontos) Questão de modelagem:

Uma empresa de transporte precisa de um banco de dados com estas regras:
- Motoristas possuem CNH com categoria e validade
- Veículos têm placa, modelo e capacidade de carga (kg)
- Cada viagem tem: motorista, veículo, origem, destino, data e status
- Um motorista não pode fazer duas viagens no mesmo dia
- Veículos precisam de manutenção periódica (registrar data, tipo e custo)

**Pedido:** Desenhe o modelo lógico (tabelas com colunas, PKs, FKs e constraints) e escreva o DDL.

**Gabarito:**
```sql
CREATE TABLE motoristas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    cnh VARCHAR(20) UNIQUE NOT NULL,
    cnh_categoria CHAR(2) NOT NULL CHECK (cnh_categoria IN ('A','B','C','D','E','AB','AC','AD','AE')),
    cnh_validade DATE NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    placa VARCHAR(8) UNIQUE NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    ano INTEGER,
    capacidade_kg DECIMAL(8,2) NOT NULL CHECK (capacidade_kg > 0),
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE viagens (
    id SERIAL PRIMARY KEY,
    motorista_id INTEGER NOT NULL REFERENCES motoristas(id),
    veiculo_id INTEGER NOT NULL REFERENCES veiculos(id),
    origem VARCHAR(200) NOT NULL,
    destino VARCHAR(200) NOT NULL,
    data_viagem DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'programada'
        CHECK (status IN ('programada','em_andamento','concluida','cancelada')),
    km_percorridos DECIMAL(8,2),
    -- Garante: 1 motorista = 1 viagem por dia
    UNIQUE (motorista_id, data_viagem)
);

CREATE TABLE manutencoes (
    id SERIAL PRIMARY KEY,
    veiculo_id INTEGER NOT NULL REFERENCES veiculos(id),
    data_manutencao DATE NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descricao TEXT,
    custo DECIMAL(10,2) NOT NULL CHECK (custo >= 0),
    proxima_manutencao DATE
);

CREATE INDEX idx_viagens_data ON viagens(data_viagem);
CREATE INDEX idx_manutencoes_veiculo ON manutencoes(veiculo_id);
```

**Critério:** 1,0 tabelas + tipos | 0,5 PKs/FKs | 0,5 constraint do motorista/dia | 0,5 manutenções

---

## ✅ CRITÉRIOS GERAIS DE CORREÇÃO

| Aspecto | Desconto |
|---------|----------|
| Erro de sintaxe que não impede compreensão | -0,25 |
| Falta de ponto-e-vírgula | -0,1 |
| Tipo de dado inadequado mas funcional | -0,25 |
| Falta de constraint solicitada | -0,5 |
| Lógica de query completamente incorreta | Nota 0 na questão |
| Query correta mas sem alias/formatação | Sem desconto |

---

*Documento gerado para a disciplina de Administração de Bancos de Dados — ETE Pernambuco — 2026.2*
