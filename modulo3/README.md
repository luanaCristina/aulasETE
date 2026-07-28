# 🎓 Módulo III — Back-End, Qualidade (QA) & Segurança

## Projeto: API RESTful — "TaskFlow" (Kanban Simplificado)

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Intermediário/Avançado  
> **Duração:** 6 a 8 semanas  
> **Foco:** API REST, Autenticação JWT, Testes automatizados, Segurança OWASP

---

## 📖 Contexto do Projeto

O **TaskFlow** é um sistema de gestão de tarefas estilo Kanban para equipes pequenas.
Permite criar projetos, organizar tarefas em colunas (TODO, IN_PROGRESS, DONE) e
atribuir membros. O foco deste módulo é construir o **back-end com qualidade**:
autenticação segura, testes automatizados e proteção contra vulnerabilidades.

---

## 📋 Documentação dos Endpoints

### Autenticação

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/api/auth/register` | Cadastrar usuário | ❌ |
| POST | `/api/auth/login` | Login (retorna JWT) | ❌ |
| GET | `/api/auth/me` | Dados do usuário logado | ✅ |

### Projetos

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/api/projects` | Listar projetos do usuário | ✅ |
| POST | `/api/projects` | Criar projeto | ✅ |
| GET | `/api/projects/:id` | Detalhe do projeto | ✅ |
| PUT | `/api/projects/:id` | Atualizar projeto | ✅ |
| DELETE | `/api/projects/:id` | Deletar projeto (owner) | ✅ |

### Tarefas

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/api/projects/:id/tasks` | Listar tarefas do projeto | ✅ |
| POST | `/api/projects/:id/tasks` | Criar tarefa | ✅ |
| PUT | `/api/tasks/:id` | Atualizar tarefa | ✅ |
| PATCH | `/api/tasks/:id/move` | Mover tarefa de coluna | ✅ |
| DELETE | `/api/tasks/:id` | Deletar tarefa | ✅ |

---

### Exemplos de Request/Response

#### POST /api/auth/register
```json
// Request
{ "name": "João Silva", "email": "joao@email.com", "password": "Senha@123" }

// Response 201
{ "id": 1, "name": "João Silva", "email": "joao@email.com", "token": "eyJ..." }

// Response 400
{ "error": { "code": "VALIDATION_ERROR", "message": "E-mail já cadastrado." } }
```

#### POST /api/auth/login
```json
// Request
{ "email": "joao@email.com", "password": "Senha@123" }

// Response 200
{ "token": "eyJhbGciOiJIUzI1NiIs...", "user": { "id": 1, "name": "João Silva" } }

// Response 401
{ "error": { "code": "INVALID_CREDENTIALS", "message": "E-mail ou senha incorretos." } }
```

#### POST /api/projects/:id/tasks
```json
// Request (Header: Authorization: Bearer <token>)
{
  "title": "Implementar login",
  "description": "Criar tela de login com validação",
  "status": "TODO",
  "priority": "HIGH",
  "assigneeId": 2
}

// Response 201
{
  "id": 5,
  "title": "Implementar login",
  "status": "TODO",
  "priority": "HIGH",
  "assignee": { "id": 2, "name": "Maria" },
  "createdAt": "2025-08-01T10:00:00Z"
}
```

#### PATCH /api/tasks/:id/move
```json
// Request
{ "status": "IN_PROGRESS" }

// Response 200
{ "id": 5, "title": "Implementar login", "status": "IN_PROGRESS" }

// Response 400 (transição inválida)
{ "error": { "code": "INVALID_TRANSITION", "message": "Não pode mover de DONE para TODO." } }
```

---

## 🔐 Autenticação JWT + Bcrypt

### Fluxo
```
1. Usuário faz POST /auth/register → senha hashada com bcrypt (salt 10)
2. POST /auth/login → compara hash, gera JWT (exp: 24h)
3. Requisições autenticadas → Header: Authorization: Bearer <token>
4. Middleware verifica JWT → extrai userId → prossegue ou retorna 401
```

### Regras de Senha
- Mínimo 8 caracteres
- Pelo menos 1 letra maiúscula
- Pelo menos 1 número
- Pelo menos 1 caractere especial (@#$%&)

---

## 🧪 Plano de Testes QA

### Testes Unitários

| Teste | O que valida |
|-------|-------------|
| `hashPassword()` retorna hash diferente da senha | Bcrypt funciona |
| `comparePassword()` retorna true para senha correta | Comparação OK |
| `generateToken()` retorna string JWT válida | Geração de token |
| `verifyToken()` decodifica payload correto | Decodificação |
| `verifyToken()` lança erro para token expirado | Expiração |
| Task com status inválido lança ValidationError | Enum validado |
| Mover task de DONE→TODO lança InvalidTransition | Regra de negócio |
| Senha fraca lança ValidationError | Regex de senha |

### Testes de Integração

| Teste | Cenário |
|-------|---------|
| POST /auth/register com dados válidos → 201 | Happy path |
| POST /auth/register com email duplicado → 400 | Unicidade |
| POST /auth/login com senha errada → 401 | Autenticação |
| GET /api/projects sem token → 401 | Proteção de rota |
| GET /api/projects com token válido → 200 | Acesso autorizado |
| POST /api/projects/:id/tasks → 201 | Criar tarefa |
| PATCH /api/tasks/:id/move (TODO→IN_PROGRESS) → 200 | Transição válida |
| PATCH /api/tasks/:id/move (DONE→TODO) → 400 | Transição inválida |
| DELETE /api/projects/:id por não-owner → 403 | Autorização |

### Cobertura Mínima Esperada
- Unitários: ≥ 80%
- Integração: todos os endpoints cobertos com happy path + erro

---

## 🛡️ Desafio de Segurança (OWASP)

### Vulnerabilidade 1: SQL Injection

**Código VULNERÁVEL** (alunos devem identificar e corrigir):
```javascript
// ❌ VULNERÁVEL — NÃO USE ISSO EM PRODUÇÃO!
app.get('/api/users/search', async (req, res) => {
  const { name } = req.query;
  const result = await db.query(
    `SELECT * FROM users WHERE name = '${name}'`  // PERIGO!
  );
  res.json(result.rows);
});
// Atacante pode enviar: ?name=' OR '1'='1
```

**Correção esperada:**
```javascript
// ✅ SEGURO — Query parametrizada
app.get('/api/users/search', async (req, res) => {
  const { name } = req.query;
  const result = await db.query(
    'SELECT * FROM users WHERE name = $1', [name]
  );
  res.json(result.rows);
});
```

### Vulnerabilidade 2: XSS (Cross-Site Scripting)

**Código VULNERÁVEL:**
```javascript
// ❌ VULNERÁVEL — renderiza HTML do usuário sem sanitizar
app.get('/api/tasks/:id', async (req, res) => {
  const task = await getTask(req.params.id);
  // Se task.title = "<script>alert('hack')</script>"
  // O front-end renderiza o script!
  res.json(task);
});
```

**Correção esperada:**
```javascript
// ✅ SEGURO — Sanitização na entrada + escape na saída
import sanitizeHtml from 'sanitize-html';

// Na criação: sanitizar antes de salvar
const title = sanitizeHtml(req.body.title, { allowedTags: [] });

// Validação: rejeitar se contiver tags HTML
if (/<[^>]*>/.test(req.body.title)) {
  return res.status(400).json({ error: 'Título não pode conter HTML.' });
}
```

---

## 🏆 Critérios de Avaliação

| Critério | Peso |
|---|---|
| API REST funcional (CRUD completo) | 25% |
| Autenticação JWT + bcrypt | 20% |
| Testes automatizados (unit + integration) | 25% |
| Correção das vulnerabilidades | 15% |
| Documentação (Postman collection + README) | 15% |

---

## 📁 Versões Disponíveis

- `modulo3Python/` — FastAPI + PyTest + PostgreSQL
- `modulo3JavaScript/` — Express + Jest + PostgreSQL  
- `modulo3TypeScript/` — Express + Jest + TypeScript + PostgreSQL
