# 📘 Disciplina 11 — Testes e Qualidade de Software (QA)

> **Carga Horária:** 40h | **Aulas:** 20 encontros de 2h  
> **Ferramentas:** Jest, Supertest, Postman, Cypress (E2E)

---

## AULAS 01-02 — Por que Testar? Tipos de Teste
**Objetivo:** Pirâmide de testes, unitário/integração/E2E/manual.
**Prática:** Identificar bugs em código dado (sem testes) → argumentar valor dos testes.

## AULAS 03-04 — Jest: Primeiro Teste Unitário
**Objetivo:** Instalar Jest, describe, test, expect, matchers.
**Prática:** Testar função `calcularDesconto(valor, percentual)`.

## AULAS 05-06 — TDD: Red-Green-Refactor
**Objetivo:** Escrever teste ANTES do código, ciclo TDD.
**Prática:** TDD para `validarCPF(cpf)` → teste falha → implementa → passa.

## AULAS 07-08 — Testando Funções Complexas e Edge Cases
**Objetivo:** Boundary values, null/undefined, arrays vazios.
**Prática:** Testes para `calcularFrete(cep, peso)` com 10+ cenários.

## AULAS 09-10 — Mocks, Spies e Stubs
**Objetivo:** Isolar dependências com jest.fn(), jest.mock().
**Prática:** Testar service que chama repository (mock do banco).

## AULAS 11-12 — Testes de Integração com Supertest
**Objetivo:** Testar endpoints HTTP da API sem levantar o servidor.
**Prática:** Testes para POST /register, POST /login, GET /protected.

## AULAS 13-14 — Cobertura de Código e CI
**Objetivo:** jest --coverage, relatório HTML, integrar com GitHub Actions.
**Prática:** Atingir 80% de cobertura + configurar CI que roda testes no push.

## AULAS 15-16 — Testes E2E com Cypress (Introdução)
**Objetivo:** Instalar Cypress, escrever teste de fluxo completo no browser.
**Prática:** Testar fluxo login → dashboard → criar tarefa → logout.

## AULAS 17-18 — Testes de API com Postman/Newman
**Objetivo:** Collections, environments, scripts de teste, rodar via CLI.
**Prática:** Collection Postman com 20 requests + assertions + environment variables.

## AULAS 19-20 — Projeto Final: Plano de QA Completo
**Entrega:** 20+ testes unitários + 10 integração + 1 E2E + coverage 80%+ relatório.
