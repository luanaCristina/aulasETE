# 📘 Disciplina 6 — Banco de Dados I (Relacional/SQL)

> **Carga Horária:** 60h | **Aulas:** 30 encontros de 2h  
> **SGBD:** PostgreSQL | **Ferramenta:** DBeaver ou pgAdmin

---

## AULAS 01-02 — Introdução a Bancos de Dados
**Objetivo:** Entender o que é SGBD, modelo relacional, tabelas/linhas/colunas.
**Prática:** Instalar PostgreSQL + DBeaver, criar primeiro banco.

## AULAS 03-04 — Modelagem: Entidade-Relacionamento (MER)
**Objetivo:** Identificar entidades, atributos, relacionamentos (1:1, 1:N, N:N).
**Prática:** Modelar MER de sistema de escola (alunos, turmas, professores).

## AULAS 05-06 — Normalização (1FN, 2FN, 3FN)
**Objetivo:** Eliminar redundância e anomalias de inserção/atualização.
**Prática:** Receber planilha desnormalizada → aplicar 3 formas normais.

## AULAS 07-08 — DDL: CREATE, ALTER, DROP
**Objetivo:** Criar tabelas com tipos de dados corretos e constraints.
**Prática:** DDL completo para sistema de e-commerce (5 tabelas).

## AULAS 09-10 — Constraints: PK, FK, NOT NULL, UNIQUE, CHECK
**Objetivo:** Garantir integridade referencial e de domínio.
**Prática:** Adicionar constraints ao schema da aula anterior.

## AULAS 11-12 — DML: INSERT, UPDATE, DELETE
**Objetivo:** Manipular dados nas tabelas criadas.
**Prática:** Popular 50+ registros e atualizar/deletar com condições.

## AULAS 13-14 — SELECT: Consultas Básicas e Filtros
**Objetivo:** WHERE, ORDER BY, LIMIT, LIKE, BETWEEN, IN, IS NULL.
**Prática:** 10 queries progressivas sobre dados do e-commerce.

## AULAS 15 — AVALIAÇÃO A1 (MER + DDL + DML básico)

## AULAS 16-18 — JOINs (INNER, LEFT, RIGHT, FULL)
**Objetivo:** Combinar dados de múltiplas tabelas.
**Prática:** Relatórios com JOIN de 2, 3 e 4 tabelas.

## AULAS 19-20 — GROUP BY, HAVING e Funções Agregadas
**Objetivo:** COUNT, SUM, AVG, MAX, MIN + agrupamento.
**Prática:** Relatório de vendas: total por mês, top 5 produtos, média por categoria.

## AULAS 21-22 — Subqueries e CTEs (WITH)
**Objetivo:** Queries dentro de queries e Common Table Expressions.
**Prática:** "Clientes que compraram acima da média", "Produto mais vendido por categoria".

## AULAS 23-24 — Views e Índices
**Objetivo:** Criar views para relatórios e índices para performance.
**Prática:** View de dashboard + benchmark com/sem índice.

## AULAS 25-26 — Transações e Controle de Concorrência
**Objetivo:** BEGIN, COMMIT, ROLLBACK, isolation levels.
**Prática:** Simular transferência bancária com transação.

## AULAS 27-28 — Funções e Procedures (PL/pgSQL)
**Objetivo:** Criar funções SQL reutilizáveis.
**Prática:** Função que calcula desconto progressivo.

## AULAS 29-30 — Projeto Final: Modelar + Implementar Banco Completo
**Tema:** Sistema de agendamento médico (MER + DDL + Seed + 10 queries).
