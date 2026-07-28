# 📘 Disciplina 10 — Banco de Dados II (Avançado/NoSQL)

> **Carga Horária:** 40h | **Aulas:** 20 encontros de 2h  
> **Ferramentas:** PostgreSQL avançado + MongoDB

---

## AULAS 01-02 — Revisão SQL Avançado: Window Functions
**Objetivo:** ROW_NUMBER, RANK, DENSE_RANK, PARTITION BY.
**Prática:** Ranking de vendedores por região usando window functions.

## AULAS 03-04 — Triggers e Auditoria
**Objetivo:** Criar triggers para log automático de alterações.
**Prática:** Trigger que registra toda alteração de preço em tabela de auditoria.

## AULAS 05-06 — Performance: EXPLAIN, índices compostos
**Objetivo:** Analisar plano de execução e otimizar queries lentas.
**Prática:** Query lenta → EXPLAIN → criar índice → comparar.

## AULAS 07-08 — JSON no PostgreSQL (JSONB)
**Objetivo:** Armazenar e consultar dados semi-estruturados.
**Prática:** Tabela de configurações com coluna JSONB + operadores ->, ->>, @>.

## AULAS 09-10 — Introdução ao NoSQL: Conceitos e MongoDB
**Objetivo:** Documento vs Relacional, quando usar cada um, instalar Mongo.
**Prática:** Instalar MongoDB/Atlas, criar banco via mongosh.

## AULAS 11-12 — MongoDB: CRUD (insertOne/Many, find, update, delete)
**Objetivo:** Operações básicas em documentos.
**Prática:** Coleção de produtos com campos variáveis (schema-less).

## AULAS 13-14 — MongoDB: Queries Avançadas e Aggregation
**Objetivo:** $match, $group, $sort, $lookup (JOIN), pipelines.
**Prática:** Relatório de vendas com aggregation pipeline.

## AULAS 15-16 — Modelagem NoSQL: Embedding vs Referencing
**Objetivo:** Decidir entre documento embutido e referência.
**Prática:** Modelar sistema de blog (posts + comments: embed vs ref).

## AULAS 17-18 — Redis: Cache e Session Store
**Objetivo:** Key-value store para cache, sessions, pub/sub.
**Prática:** Cache de query lenta com Redis + TTL.

## AULAS 19-20 — Projeto Final: Sistema Híbrido (SQL + NoSQL)
**Tema:** API que usa PostgreSQL para dados transacionais e MongoDB para logs/analytics.
