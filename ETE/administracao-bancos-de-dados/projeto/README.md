# 🐾 Sistema de Gestão de Pet Shop

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-DDL%20%7C%20DML%20%7C%20DQL-orange)
![Status](https://img.shields.io/badge/Status-Projeto%20Completo-brightgreen)
![Disciplina](https://img.shields.io/badge/Disciplina-Administra%C3%A7%C3%A3o%20de%20BD-blue)

> **Disciplina:** Administração de Bancos de Dados  
> **Curso:** Desenvolvimento de Sistemas - ETE  
> **Projeto Tutorial:** Construído passo a passo em sala de aula

---

## 📋 Sobre o Projeto

Este é um **projeto prático** de banco de dados para um **Pet Shop**, onde você vai aplicar todos os conceitos aprendidos em sala de aula:

- Modelagem de dados (DER)
- Criação de tabelas (DDL)
- Inserção e manipulação de dados (DML)
- Consultas simples e avançadas (DQL)
- Views para relatórios gerenciais
- Transações e controle de concorrência

> 💡 **O cenário:** Você foi contratado para criar o banco de dados de um pet shop em Recife/PE. O sistema precisa controlar clientes, pets, agendamentos, vendas e estoque.

---

## 🛠️ Pré-requisitos

- [PostgreSQL 14+](https://www.postgresql.org/download/) instalado
- [pgAdmin 4](https://www.pgadmin.org/) configurado
- Conexão com o servidor local funcionando

---

## 📂 Estrutura dos Arquivos

```
projeto/
├── README.md                    ← Você está aqui!
├── 01-criar-banco.sql           ← Criação do banco de dados
├── 02-ddl-tabelas.sql           ← Criação das tabelas (DDL)
├── 03-dml-inserir-dados.sql     ← Inserção de dados (DML)
├── 04-consultas-basicas.sql     ← Consultas SELECT básicas
├── 05-consultas-avancadas.sql   ← JOINs, GROUP BY, subqueries
├── 06-atualizacoes.sql          ← UPDATE, DELETE e transações
└── 07-views-relatorios.sql      ← Views para relatórios
```

---

## 🚀 Passo 1: Criar o Banco de Dados

**Arquivo:** `01-criar-banco.sql`

1. Abra o **pgAdmin**
2. Conecte ao servidor PostgreSQL
3. Clique com botão direito em **Databases** → **Query Tool**
4. Execute:

```sql
CREATE DATABASE petshop_ete;
```

5. Dê **F5** (ou clique em ▶ Executar)
6. Atualize a lista de bancos (F5 na árvore lateral)

> 🎓 **O que estamos aplicando:**  
> O comando `CREATE DATABASE` é um comando **DDL** (Data Definition Language). Ele cria a estrutura onde todos os nossos dados serão armazenados. Um banco de dados é como uma "pasta" que contém todas as tabelas do sistema.

⚠️ **Importante:** Após criar o banco, selecione `petshop_ete` na árvore lateral antes de continuar! Todos os próximos scripts devem ser executados **dentro** deste banco.

---

## 🗺️ Passo 2: Entender o DER (Diagrama Entidade-Relacionamento)

Antes de criar as tabelas, vamos entender como elas se relacionam:

```
┌─────────────┐       ┌─────────────┐       ┌─────────────────┐
│  CLIENTES   │1    N │    PETS     │1    N │  AGENDAMENTOS   │
│─────────────│───────│─────────────│───────│─────────────────│
│ id (PK)     │       │ id (PK)     │       │ id (PK)         │
│ nome        │       │ cliente_id  │──┐    │ pet_id (FK)     │
│ cpf (UQ)    │       │ nome        │  │    │ servico_id (FK) │
│ telefone    │       │ especie     │  │    │ profissional_id │
│ email (UQ)  │       │ raca        │  │    │ data_hora       │
│ endereco    │       │ peso        │  │    │ status          │
│ created_at  │       │ observacoes │  │    │ observacoes     │
└─────────────┘       └─────────────┘  │    └────────┬────────┘
                                        │             │
┌─────────────┐       ┌─────────────┐  │    ┌────────┴────────┐
│  PRODUTOS   │       │  SERVICOS   │──┘    │ PROFISSIONAIS   │
│─────────────│       │─────────────│       │─────────────────│
│ id (PK)     │       │ id (PK)     │       │ id (PK)         │
│ nome        │       │ nome        │       │ nome            │
│ categoria   │       │ preco       │       │ cargo           │
│ preco       │       │ duracao_min │       │ especialidade   │
│ estoque     │       │ ativo       │       │ ativo           │
│ estoque_min │       └─────────────┘       └─────────────────┘
└──────┬──────┘
       │
┌──────┴──────┐       ┌─────────────┐
│ ITENS_VENDA │N    1 │   VENDAS    │
│─────────────│───────│─────────────│
│ id (PK)     │       │ id (PK)     │
│ venda_id FK │       │ cliente_id  │
│ produto_id  │       │ data_venda  │
│ quantidade  │       │ valor_total │
│ preco_unit  │       │ forma_pgto  │
└─────────────┘       └─────────────┘
```

> 🎓 **O que estamos aplicando:**  
> O **DER** é a representação visual do banco de dados. Cada retângulo é uma **entidade** (tabela), e as linhas mostram os **relacionamentos** (1:N = um para muitos). As **PK** são chaves primárias e **FK** são chaves estrangeiras que conectam as tabelas.

**Relacionamentos identificados:**
- 1 Cliente → N Pets (um dono pode ter vários pets)
- 1 Pet → N Agendamentos (um pet pode ter vários atendimentos)
- 1 Serviço → N Agendamentos (um serviço pode ser agendado várias vezes)
- 1 Profissional → N Agendamentos (um profissional atende vários pets)
- 1 Cliente → N Vendas (um cliente pode fazer várias compras)
- 1 Venda → N Itens_Venda (uma venda pode ter vários produtos)
- 1 Produto → N Itens_Venda (um produto pode aparecer em várias vendas)

---

## 🏗️ Passo 3: Executar DDL - Criar as Tabelas

**Arquivo:** `02-ddl-tabelas.sql`

1. No pgAdmin, certifique-se de estar no banco `petshop_ete`
2. Abra o Query Tool
3. Cole o conteúdo do arquivo `02-ddl-tabelas.sql`
4. Execute tudo (F5)

### Tabelas criadas:

| Tabela | Descrição | Principais Constraints |
|--------|-----------|----------------------|
| `clientes` | Tutores dos pets | CPF UNIQUE, email UNIQUE |
| `pets` | Animais cadastrados | FK → clientes, CHECK espécie |
| `servicos` | Catálogo de serviços | CHECK preço > 0 |
| `profissionais` | Equipe do pet shop | CHECK cargo válido |
| `agendamentos` | Controle de agenda | 3 FKs, CHECK status |
| `produtos` | Estoque de produtos | CHECK categoria, estoque ≥ 0 |
| `vendas` | Registro de vendas | FK → clientes, CHECK pagamento |
| `itens_venda` | Detalhes da venda | FK → vendas (CASCADE), FK → produtos |

> 🎓 **O que estamos aplicando:**
> - **DDL** (Data Definition Language): CREATE TABLE, constraints
> - **PRIMARY KEY (PK):** Identificador único de cada registro
> - **FOREIGN KEY (FK):** Garante integridade referencial entre tabelas
> - **CHECK:** Valida os valores permitidos em uma coluna
> - **UNIQUE:** Impede valores duplicados (CPF, email)
> - **DEFAULT:** Define valor padrão quando não informado
> - **INDEX:** Acelera consultas em colunas frequentemente pesquisadas

💡 **Dica:** Após executar, expanda `petshop_ete > Schemas > public > Tables` no pgAdmin para ver todas as tabelas criadas!

---

## 📝 Passo 4: Popular com Dados

**Arquivo:** `03-dml-inserir-dados.sql`

1. Execute o arquivo completo no Query Tool
2. Verifique se os dados foram inseridos:

```sql
-- Conte os registros em cada tabela
SELECT 'clientes' AS tabela, COUNT(*) AS registros FROM clientes
UNION ALL SELECT 'pets', COUNT(*) FROM pets
UNION ALL SELECT 'servicos', COUNT(*) FROM servicos
UNION ALL SELECT 'profissionais', COUNT(*) FROM profissionais
UNION ALL SELECT 'agendamentos', COUNT(*) FROM agendamentos
UNION ALL SELECT 'produtos', COUNT(*) FROM produtos
UNION ALL SELECT 'vendas', COUNT(*) FROM vendas
UNION ALL SELECT 'itens_venda', COUNT(*) FROM itens_venda;
```

**Resultado esperado:**

| tabela | registros |
|--------|-----------|
| clientes | 8 |
| pets | 12 |
| servicos | 8 |
| profissionais | 5 |
| agendamentos | 15 |
| produtos | 10 |
| vendas | 5 |
| itens_venda | 8 |

> 🎓 **O que estamos aplicando:**
> - **DML** (Data Manipulation Language): INSERT INTO
> - **Integridade referencial:** Os IDs usados nas FKs devem existir na tabela referenciada
> - **Ordem de inserção importa:** Primeiro clientes, depois pets (que dependem de clientes), etc.

---

## 🔍 Passo 5: Praticar Consultas

### 5.1 Consultas Básicas

**Arquivo:** `04-consultas-basicas.sql`

Execute cada consulta individualmente e observe os resultados:

| # | Conceito | Pergunta de Negócio |
|---|----------|-------------------|
| 1 | SELECT * | Quem são todos os clientes? |
| 2 | Projeção | Nome e telefone dos clientes |
| 3 | WHERE | Quais pets são cachorros? |
| 4 | ORDER BY | Serviços mais caros primeiro |
| 5 | LIKE | Clientes da Boa Vista/Boa Viagem |
| 6 | IN | Agendamentos pendentes ou confirmados |
| 7 | BETWEEN | Produtos entre R$30 e R$100 |
| 8 | AND | Cachorros com mais de 10kg |
| 9 | COUNT + GROUP BY | Quantos pets por espécie |
| 10 | Comparação colunas | Produtos precisando reposição |

> 🎓 **O que estamos aplicando:**
> - **DQL** (Data Query Language): SELECT é o comando mais usado em qualquer sistema
> - **Cláusula WHERE:** Filtra registros (seleção)
> - **ORDER BY:** Ordena resultados (ASC = crescente, DESC = decrescente)
> - **LIKE:** Busca parcial com coringas (% = qualquer coisa)
> - **Funções de agregação:** COUNT(), SUM(), AVG(), MAX(), MIN()

### 5.2 Consultas Avançadas

**Arquivo:** `05-consultas-avancadas.sql`

| # | Conceito | Pergunta de Negócio |
|---|----------|-------------------|
| 1 | INNER JOIN (4 tabelas) | Agenda completa com todos os nomes |
| 2 | GROUP BY + HAVING | Clientes com mais de 1 pet |
| 3 | JOIN + SUM | Faturamento por serviço |
| 4 | Subquery + MAX | Serviço mais popular |
| 5 | CASE WHEN | Classificar pets por porte |
| 6 | LEFT JOIN + IS NULL | Clientes sem agendamentos |
| 7 | JOIN + cálculo | Detalhamento de vendas com subtotal |
| 8 | COUNT + CASE | Ranking de profissionais |
| 9 | NOT IN + subquery | Pets sem atendimento |
| 10 | UNION ALL | Resumo financeiro completo |

> 🎓 **O que estamos aplicando:**
> - **JOINs:** Conectam dados de múltiplas tabelas
> - **INNER JOIN:** Retorna apenas registros com correspondência
> - **LEFT JOIN:** Retorna todos da esquerda, mesmo sem correspondência
> - **GROUP BY + HAVING:** Agrupa dados e filtra grupos
> - **Subqueries:** Consultas dentro de consultas
> - **CASE WHEN:** Lógica condicional dentro do SELECT
> - **UNION ALL:** Combina resultados de múltiplas consultas

---

## ✏️ Passo 6: Praticar UPDATE e DELETE com Segurança

**Arquivo:** `06-atualizacoes.sql`

> ⚠️ **REGRA DE OURO:** Sempre use `WHERE` em UPDATE e DELETE!  
> Sem WHERE, **TODOS** os registros serão afetados!

### Padrão seguro para alterações:

```sql
-- 1️⃣ Primeiro, VEJA o que será afetado:
SELECT * FROM tabela WHERE condição;

-- 2️⃣ Só depois, execute a alteração:
UPDATE tabela SET campo = valor WHERE condição;

-- 3️⃣ Confirme o resultado:
SELECT * FROM tabela WHERE condição;
```

### Transações (BEGIN/COMMIT/ROLLBACK):

```sql
BEGIN;           -- Inicia "modo seguro"
  -- seus comandos aqui
COMMIT;          -- Salva tudo (se deu certo)
-- ou
ROLLBACK;        -- Desfaz tudo (se deu errado)
```

> 🎓 **O que estamos aplicando:**
> - **UPDATE:** Altera dados existentes
> - **DELETE:** Remove registros
> - **Transações (ACID):** Garantem Atomicidade, Consistência, Isolamento e Durabilidade
> - **BEGIN/COMMIT:** Agrupa comandos em uma unidade atômica
> - **ROLLBACK:** Desfaz todas as operações desde o último BEGIN
> - **Segurança:** Sempre fazer SELECT antes de UPDATE/DELETE

💡 **Dica para praticar:** Use `BEGIN` e `ROLLBACK` para testar comandos perigosos sem medo! Nada é salvo até você dar `COMMIT`.

---

## 📊 Passo 7: Criar Views para Relatórios

**Arquivo:** `07-views-relatorios.sql`

Views são "consultas salvas" que funcionam como tabelas virtuais:

| View | Uso | Descrição |
|------|-----|-----------|
| `vw_agenda_dia` | Recepção | Agenda do dia com todos os detalhes |
| `vw_faturamento_mensal` | Financeiro | Receita separada por serviços e produtos |
| `vw_estoque_baixo` | Estoque | Alerta de produtos para reposição |
| `vw_ficha_pet` | Atendimento | Ficha completa do pet com histórico |

### Como usar:

```sql
-- Agenda de amanhã
SELECT * FROM vw_agenda_dia 
WHERE data_agendamento = '2025-02-15';

-- Produtos que precisam comprar
SELECT * FROM vw_estoque_baixo;

-- Ficha do pet Rex
SELECT * FROM vw_ficha_pet WHERE pet = 'Rex';
```

> 🎓 **O que estamos aplicando:**
> - **CREATE VIEW:** Cria uma consulta reutilizável
> - **Encapsulamento:** A complexidade do JOIN fica "escondida" na view
> - **Relatórios gerenciais:** Views facilitam consultas do dia-a-dia
> - **Segurança:** Podemos dar acesso a views sem expor tabelas originais
> - **Manutenção:** Se a lógica muda, alteramos apenas a view

---

## 📚 Resumo dos Conceitos Aplicados

| Conceito | Onde aplicamos | Comando SQL |
|----------|---------------|-------------|
| Banco de Dados | Passo 1 | `CREATE DATABASE` |
| Tabelas | Passo 3 | `CREATE TABLE` |
| Chave Primária | Todas as tabelas | `PRIMARY KEY` |
| Chave Estrangeira | pets, agendamentos, vendas | `FOREIGN KEY REFERENCES` |
| Constraint CHECK | especie, status, pagamento | `CHECK (valor IN (...))` |
| Unique | CPF, email | `UNIQUE` |
| Índices | Colunas frequentes | `CREATE INDEX` |
| Inserção | Passo 4 | `INSERT INTO` |
| Consulta simples | Passo 5.1 | `SELECT ... WHERE` |
| JOINs | Passo 5.2 | `INNER JOIN`, `LEFT JOIN` |
| Agregações | Passo 5.2 | `GROUP BY`, `HAVING` |
| Subqueries | Passo 5.2 | `WHERE x IN (SELECT...)` |
| Atualização | Passo 6 | `UPDATE ... SET ... WHERE` |
| Exclusão | Passo 6 | `DELETE FROM ... WHERE` |
| Transações | Passo 6 | `BEGIN`, `COMMIT`, `ROLLBACK` |
| Views | Passo 7 | `CREATE VIEW` |

---

## 🎯 Desafios Extras (Para Praticar)

Tente resolver sozinho(a):

1. **Criar uma view** que mostre o "Top 3 clientes que mais gastaram" (somando serviços + produtos)
2. **Escrever um UPDATE** que desative serviços que nunca foram agendados
3. **Criar uma consulta** que mostre a média de peso dos pets por espécie
4. **Usar uma transação** para registrar um agendamento + atualizar o status de outro
5. **Criar um índice** na coluna `email` de clientes e explicar por quê

---

## ❓ Dúvidas Frequentes

**P: Posso executar os arquivos fora de ordem?**  
R: Não! Siga a numeração (01 → 02 → 03 → ...) pois cada arquivo depende do anterior.

**P: Errei um comando e os dados ficaram errados. Como resolver?**  
R: Execute novamente o arquivo `03-dml-inserir-dados.sql`. Se precisar recomeçar do zero, delete o banco (`DROP DATABASE petshop_ete;`) e comece do Passo 1.

**P: O pgAdmin deu erro de "permission denied".**  
R: Certifique-se de estar conectado como o usuário `postgres` (administrador).

**P: Posso adicionar mais dados?**  
R: Sim! Pratique criando novos clientes, pets e agendamentos. Quanto mais praticar, melhor!

---

## 👩‍🏫 Critérios de Avaliação

| Critério | Peso |
|----------|------|
| Banco e tabelas criados corretamente | 20% |
| Dados inseridos sem erros | 15% |
| Consultas básicas funcionando | 20% |
| Consultas avançadas com JOINs | 25% |
| Views e transações | 20% |

---

> Feito com 🐾 para a disciplina de Administração de Bancos de Dados - ETE
