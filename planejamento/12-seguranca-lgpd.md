# 📘 Disciplina 12 — Segurança da Informação & LGPD

> **Carga Horária:** 40h | **Aulas:** 20 encontros de 2h

---

## AULAS 01-02 — Introdução à Segurança da Informação
**Objetivo:** Tríade CIA (Confidencialidade, Integridade, Disponibilidade).
**Prática:** Analisar 3 vazamentos de dados famosos e classificar qual pilar falhou.

## AULAS 03-04 — OWASP Top 10: Visão Geral
**Objetivo:** Conhecer as 10 vulnerabilidades mais comuns em apps web.
**Prática:** Mapear quais do Top 10 se aplicam a um app fictício.

## AULAS 05-06 — SQL Injection: Ataque e Defesa
**Objetivo:** Entender, reproduzir (ambiente controlado) e prevenir.
**Prática:** Código vulnerável dado → corrigir com queries parametrizadas.

## AULAS 07-08 — XSS e CSRF: Ataque e Defesa
**Objetivo:** Tipos de XSS (stored, reflected, DOM), tokens CSRF.
**Prática:** Identificar XSS em código HTML/JS → implementar sanitização.

## AULAS 09-10 — Autenticação Segura: Hashing e JWT
**Objetivo:** Por que nunca salvar senha em texto. bcrypt, salt, JWT seguro.
**Prática:** Refatorar código que salva senha em plain text.

## AULAS 11-12 — HTTPS, Cookies Seguros e Headers
**Objetivo:** TLS, HttpOnly, Secure, SameSite, helmet.js.
**Prática:** Configurar helmet + cookie seguro em Express.

## AULAS 13-14 — LGPD: Princípios e Bases Legais
**Objetivo:** 10 princípios, 10 bases legais, direitos do titular.
**Prática:** Mapeamento de dados pessoais em sistema existente.

## AULAS 15-16 — LGPD na Prática: Consentimento e Anonimização
**Objetivo:** Implementar banner de consentimento, pseudonimização.
**Prática:** Criar middleware de log que anonimiza dados sensíveis.

## AULAS 17-18 — Teste de Segurança: Pentest Básico
**Objetivo:** Usar ferramentas para encontrar vulnerabilidades.
**Prática:** Rodar OWASP ZAP contra app local, interpretar relatório.

## AULAS 19-20 — Projeto Final: Auditoria de Segurança
**Entrega:** Relatório de auditoria de um app (vulnerabilidades + correções + conformidade LGPD).
