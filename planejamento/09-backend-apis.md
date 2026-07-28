# 📘 Disciplina 9 — Desenvolvimento Web Back-End & APIs

> **Carga Horária:** 80h | **Aulas:** 40 encontros de 2h  
> **Stack:** Node.js + Express + TypeScript + PostgreSQL

---

## AULAS 01-02 — O que é Back-End? Arquitetura Web
**Objetivo:** Entender client-server, APIs, REST, JSON.
**Prática:** Fazer requisições com curl e Postman para API pública.

## AULAS 03-04 — Node.js: Runtime e NPM
**Objetivo:** Instalar Node, npm init, instalar pacotes, scripts.
**Prática:** Criar projeto Node do zero, instalar express, hello world.

## AULAS 05-06 — Express: Primeiro Servidor HTTP
**Objetivo:** Rotas GET, parâmetros, query strings, JSON response.
**Prática:** API que retorna lista de produtos em memória.

## AULAS 07-08 — TypeScript com Express
**Objetivo:** Configurar TS no projeto, tipar rotas e handlers.
**Prática:** Migrar API de produtos para TypeScript.

## AULAS 09-10 — CRUD Completo em Memória
**Objetivo:** POST, PUT, PATCH, DELETE + validação básica.
**Prática:** API CRUD de tarefas (array em memória).

## AULAS 11-12 — Middleware: Conceito e Prática
**Objetivo:** logger, cors, validação, error handler.
**Prática:** Criar middleware de log e de validação de body.

## AULAS 13-14 — Conectando ao PostgreSQL
**Objetivo:** Pool de conexões, query parametrizada, evitar SQL Injection.
**Prática:** Migrar CRUD de memória para banco real.

## AULAS 15 — AVALIAÇÃO A1 (API + CRUD + Express)

## AULAS 16-18 — Arquitetura em Camadas (Routes → Services → Repositories)
**Objetivo:** Separar responsabilidades, código manutenível.
**Prática:** Refatorar API em 3 camadas com injeção de dependência leve.

## AULAS 19-20 — Validação com Zod
**Objetivo:** Criar schemas de validação, middleware de validação.
**Prática:** Validar request bodies com Zod schemas.

## AULAS 21-22 — Autenticação JWT (Register + Login)
**Objetivo:** bcrypt hash + jwt sign/verify + middleware auth.
**Prática:** Endpoints /register e /login com proteção de rotas.

## AULAS 23-24 — Autorização e Roles
**Objetivo:** RBAC básico (admin, user), middleware de permissão.
**Prática:** Admin pode deletar usuários, user só edita o próprio perfil.

## AULAS 25-26 — Upload de Arquivos (Multer)
**Objetivo:** Receber imagens/PDFs, salvar em disco ou cloud.
**Prática:** Endpoint de upload de avatar do usuário.

## AULAS 27-28 — Paginação, Filtros e Ordenação
**Objetivo:** Query params: page, limit, sort, filter.
**Prática:** GET /api/products?page=2&limit=10&sort=price&category=eletronicos.

## AULAS 29-30 — AVALIAÇÃO A2 (Auth + Camadas + DB)

## AULAS 31-32 — Documentação de API (Swagger/OpenAPI)
**Objetivo:** Documentar endpoints automaticamente.
**Prática:** Configurar swagger-ui-express na API.

## AULAS 33-34 — Rate Limiting e Cache
**Objetivo:** Proteger API de abusos, cache com Redis/memória.
**Prática:** express-rate-limit + node-cache.

## AULAS 35-36 — WebSockets (Tempo Real)
**Objetivo:** Comunicação bidirecional com socket.io.
**Prática:** Chat simples em tempo real.

## AULAS 37-40 — Projeto Final: API Completa
**Tema:** API de e-commerce com auth, CRUD, upload, paginação, docs.
**Critérios:** Camadas, JWT, testes, Swagger, PostgreSQL, deploy.
