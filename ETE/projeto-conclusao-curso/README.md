<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/3_Semestres-FF6B6B?style=for-the-badge&logo=bookstack&logoColor=white" alt="3 Semestres"/>
</p>

<h1 align="center">🏆 Projeto de Conclusão de Curso Evolutivo (PCC)</h1>

<p align="center">
  <strong>Do console ao full-stack em 3 módulos</strong><br/>
  Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco<br/>
  Coordenação: <strong>Profª Luana Cristina</strong>
</p>

<p align="center">
  <em>Um único projeto que cresce com você ao longo de todo o curso técnico.</em>
</p>

---

## 📋 Sumário

1. [Visão Geral do Sistema Final](#1--visão-geral-do-sistema-final)
2. [Módulo 1 — Fundação (Python & PostgreSQL)](#2--módulo-1--fundação-python--postgresql)
3. [Módulo 2 — Evolução para Web & Engenharia (JavaScript & Node.js)](#3--módulo-2--evolução-para-web--engenharia-javascript--nodejs)
4. [Módulo 3 — Consolidação e Produção (TypeScript & Frontend)](#4--módulo-3--consolidação-e-produção-typescript--frontend)
5. [Roteiro Passo a Passo de Execução](#5--roteiro-passo-a-passo-de-execução)

---

## 1. 🎯 Visão Geral do Sistema Final

### Sistema: **AgendaPro** — Plataforma de Agendamento de Serviços

Uma plataforma completa de agendamento de serviços (semelhante a um Calendly/Booksy simplificado) onde:

| Funcionalidade | Descrição |
|---|---|
| 📝 **Cadastro de Prestadores** | Profissionais se registram e definem sua disponibilidade |
| 📅 **Agendamento de Clientes** | Clientes escolhem prestador, serviço, data e horário |
| 🚫 **Anti-conflito** | Sistema impede reservas duplicadas (double-booking) |
| 📊 **Dashboard Estatístico** | Serviços mais populares, faturamento, cancelamentos |
| 🔐 **Autenticação com Papéis** | Admin, Prestador e Cliente com permissões distintas |

### 🔄 Diagrama de Evolução

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   MÓDULO 1                MÓDULO 2                MÓDULO 3          │
│   ─────────              ─────────              ─────────           │
│                                                                     │
│   Python CLI        →    API REST           →    TypeScript          │
│   + PostgreSQL           Node.js/Express          Backend            │
│                          + Eng. Software          + Frontend Web     │
│                                                   (React/HTML+CSS)   │
│                                                   + Deploy           │
│                                                                     │
│   ┌───────────┐          ┌───────────┐          ┌───────────┐      │
│   │  Console  │    →     │   HTTP    │    →     │    Web    │      │
│   │  Menu     │          │   JSON    │          │    SPA    │      │
│   │  Terminal │          │   REST    │          │  Deploy   │      │
│   └───────────┘          └───────────┘          └───────────┘      │
│                                                                     │
│   Fundação               Evolução               Produção            │
│   (20 semanas)           (20 semanas)           (20 semanas)        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 🤔 Por que este projeto funciona?

| Razão | Explicação |
|---|---|
| 🎓 **Complexidade progressiva** | Desafiador o suficiente para 3 semestres, sem ser impossível |
| 🧠 **Domínio simples** | Agendamentos é algo que todo estudante entende intuitivamente |
| 🔗 **Conecta TODAS as disciplinas** | BD, Lógica, Python, Web, Engenharia, Design, Ética... |
| 💼 **Portfólio real** | Resulta em um projeto completo para mostrar em entrevistas |
| 🌍 **Problema real** | Resolve uma necessidade concreta do mercado |

> 💡 **Dica:** Ao final do curso, o estudante terá um sistema full-stack funcional, em produção, documentado e apresentável — algo que a maioria dos cursos superiores não entrega!

---

## 2. 🐍 Módulo 1 — Fundação (Python & PostgreSQL)

**Semestre:** 1º | **Duração:** 20 semanas

### Disciplinas Conectadas

| Disciplina | Contribuição para o PCC |
|---|---|
| Administração de Banco de Dados | DER, modelo lógico, SQL, normalização |
| Lógica e Pensamento Computacional | Algoritmos, estruturas de decisão, loops |
| Programação Python/Desktop | Aplicação CLI, CRUD, conexão com BD |
| Projeto Integrador I | Integração de todas as entregas |
| Design Centrado no Usuário | Personas, jornada do usuário |
| Design Thinking | Pesquisa, empatia, ideação, prototipação |

### 📦 Entregáveis do Módulo 1

1. **DER + Modelo Lógico** normalizado até a 3ª Forma Normal (3FN)
2. **Scripts DDL** — `CREATE TABLE` com todas as constraints (PK, FK, UNIQUE, CHECK, NOT NULL)
3. **Scripts DML** — Dados de teste realistas (INSERT com pelo menos 20 registros por tabela)
4. **Aplicação Python (CLI/Console)** com:
   - Menu interativo (loop principal + escolha de opções)
   - CRUD completo de: Prestadores, Clientes, Serviços, Agendamentos
   - Conexão PostgreSQL via `psycopg2`
   - Validações de negócio (horário disponível, sem conflito de agenda)
   - Relatórios no terminal (SELECT com JOIN + funções de agregação)
5. **Documentação** — README do repositório GitHub
6. **Pesquisa UX** — Personas + Jornada do Usuário (preparação para interface futura)

### 📁 Estrutura do Código — Módulo 1

```
agendapro/
├── README.md
├── requirements.txt
├── database/
│   ├── 01-create-database.sql
│   ├── 02-create-tables.sql
│   └── 03-seed-data.sql
├── src/
│   ├── main.py
│   ├── database/
│   │   └── connection.py
│   ├── repositories/
│   │   ├── prestador_repository.py
│   │   ├── cliente_repository.py
│   │   ├── servico_repository.py
│   │   └── agendamento_repository.py
│   └── services/
│       └── agendamento_service.py
└── docs/
    ├── der.png
    ├── personas.md
    └── jornada-usuario.md
```

> 💡 **Por que essa estrutura?** Mesmo em Python CLI, já separamos responsabilidades (repositórios para SQL, services para regras de negócio). Isso facilita a migração para API no Módulo 2.

### 📅 Cronograma — Módulo 1 (20 semanas)

| Semanas | Fase | Atividades | Entregas |
|---------|------|-----------|----------|
| 1–4 | 🔍 Descoberta | Design Thinking: pesquisa, personas, POV, HMW. Definição do tema. | Personas, Mapa de Empatia |
| 5–8 | 🗄️ Modelagem | DER → Modelo Lógico → Físico → DDL. Criação do banco. | Scripts SQL, DER |
| 9–12 | 🐍 Desenvolvimento | Python: connection → repositories → services → menu | CRUD funcionando |
| 13–16 | ✅ Validação | Regras de negócio + Relatórios SQL avançados | Sistema com validações |
| 17–18 | 📝 Documentação | Testes manuais, README, organização do código | Repositório documentado |
| 19–20 | 🎤 Apresentação | Preparação e apresentação do PI I | Apresentação PI I |

### 💻 Exemplo de Funcionalidade — Menu Principal

```python
def menu_principal():
    while True:
        print("\n" + "=" * 50)
        print("       🏆 AGENDAPRO - Sistema de Agendamentos")
        print("=" * 50)
        print("[1] Gerenciar Prestadores")
        print("[2] Gerenciar Clientes")
        print("[3] Gerenciar Serviços")
        print("[4] Agendamentos")
        print("[5] Relatórios")
        print("[0] Sair")
        print("-" * 50)
        
        opcao = input("Escolha uma opção: ")
        
        match opcao:
            case "1": menu_prestadores()
            case "2": menu_clientes()
            case "3": menu_servicos()
            case "4": menu_agendamentos()
            case "5": menu_relatorios()
            case "0": 
                print("Até logo! 👋")
                break
            case _: print("⚠️  Opção inválida!")
```

### 🗄️ Modelo de Dados — Módulo 1

```sql
-- Tabelas principais do AgendaPro (Módulo 1)

CREATE TABLE prestadores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    especialidade VARCHAR(80),
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE servicos (
    id SERIAL PRIMARY KEY,
    prestador_id INTEGER REFERENCES prestadores(id),
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    duracao_minutos INTEGER NOT NULL CHECK (duracao_minutos > 0),
    preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0)
);

CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    servico_id INTEGER REFERENCES servicos(id),
    data_hora TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'confirmado' 
        CHECK (status IN ('confirmado', 'cancelado', 'concluido')),
    observacoes TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(servico_id, data_hora)  -- Evita double-booking
);
```

---

## 3. 🌐 Módulo 2 — Evolução para Web & Engenharia (JavaScript & Node.js)

**Semestre:** 2º | **Duração:** 20 semanas

### Disciplinas Conectadas

| Disciplina | Contribuição para o PCC |
|---|---|
| Programação Web (HTML/CSS/JS) | Frontend estático, consumo de API |
| Engenharia de Software | UML, requisitos, Scrum, arquitetura |
| Projeto Integrador II | Integração API + Frontend + Processos |

### 🔄 O que muda do Módulo 1 para o 2?

| Aspecto | Módulo 1 | Módulo 2 |
|---------|----------|----------|
| Interface | Terminal (CLI) | HTTP (API REST + HTML) |
| Linguagem | Python | JavaScript (Node.js) |
| Comunicação | Direto com BD | Rotas → Controllers → Services → Repos |
| Autenticação | Nenhuma | JWT Tokens |
| Validação | if/else no código | Middleware (Zod/Joi) |
| Documentação | README básico | API Docs + UML + Scrum |
| Tratamento de erros | try/except simples | Códigos HTTP + error handling |

### 📦 Entregáveis do Módulo 2

1. **API RESTful** com Node.js + Express
2. **Endpoints CRUD** para todas as entidades (JSON request/response)
3. **Documentação da API** (endpoints, métodos HTTP, payloads, exemplos)
4. **Diagramas UML** — Classes, Sequência, Atividades
5. **Scrum** — Product Backlog + evidências de Sprints (planning, review, retro)
6. **Testes básicos** com Jest + Supertest
7. **Frontend HTML/CSS** estático (landing page do produto)

### 📁 Estrutura do Código — Módulo 2

```
agendapro/
├── README.md
├── package.json
├── .env.example
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validate.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── prestador.routes.js
│   │   ├── cliente.routes.js
│   │   ├── servico.routes.js
│   │   └── agendamento.routes.js
│   ├── controllers/
│   │   └── agendamento.controller.js
│   ├── services/
│   │   └── agendamento.service.js
│   └── repositories/
│       └── agendamento.repository.js
├── migrations/
│   ├── 001_initial_schema.sql
│   └── 002_add_auth_tables.sql
├── tests/
│   └── agendamento.test.js
├── docs/
│   ├── uml-classes.png
│   ├── uml-sequence.png
│   ├── api-documentation.md
│   └── scrum/
│       ├── product-backlog.md
│       └── sprint-retrospectives.md
└── frontend/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

### 🏗️ Arquitetura em Camadas — Módulo 2

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENTE                               │
│              (Postman / Frontend HTML / Browser)              │
└─────────────────────────┬───────────────────────────────────┘
                          │ HTTP Request (JSON)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     ROUTES (Express)                          │
│         Define endpoints, aplica middleware                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    CONTROLLERS                                │
│         Recebe request, chama service, retorna response       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     SERVICES                                  │
│         Regras de negócio, validações, orquestração           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   REPOSITORIES                                │
│         Queries SQL, mapeamento de dados                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL                                 │
│         Mesmo banco do Módulo 1 (evoluído com migrations)    │
└─────────────────────────────────────────────────────────────┘
```

### 📅 Cronograma — Módulo 2 (20 semanas)

| Semanas | Fase | Atividades | Entregas |
|---------|------|-----------|----------|
| 1–3 | 📐 Engenharia | Requisitos, UML (classes, sequência, atividades), arquitetura, setup Scrum | Diagramas UML, Product Backlog |
| 4–6 | ⚙️ Setup | Node.js/Express setup + migração do BD Python → migrations SQL | Projeto Node funcional |
| 7–10 | 🔌 API | Endpoints CRUD + Autenticação JWT + Validação com middleware | API completa testável |
| 11–14 | 🎨 Frontend | HTML/CSS da landing page + dashboard de visualização | Frontend estático integrado |
| 15–17 | 🧪 Testes | Jest/Supertest + integração frontend ↔ API | Testes automatizados |
| 18–20 | 📄 Entrega | Documentação completa + apresentação PI II | Apresentação PI II |

### 🔌 Exemplo de Endpoint — Criar Agendamento

```javascript
// POST /api/agendamentos
// Body (JSON):
{
  "cliente_id": 1,
  "servico_id": 3,
  "data_hora": "2025-03-15T14:00:00",
  "observacoes": "Primeira consulta"
}

// Response 201 Created:
{
  "id": 42,
  "cliente": "Maria Silva",
  "servico": "Corte de Cabelo",
  "prestador": "João Barbeiro",
  "data_hora": "2025-03-15T14:00:00",
  "status": "confirmado"
}

// Response 409 Conflict:
{
  "error": {
    "code": "HORARIO_INDISPONIVEL",
    "message": "Este horário já está ocupado para o prestador selecionado"
  }
}
```

---

## 4. 🚀 Módulo 3 — Consolidação e Produção (TypeScript & Frontend)

**Semestre:** 3º | **Duração:** 20 semanas

### Disciplinas Conectadas

| Disciplina | Contribuição para o PCC |
|---|---|
| Programação Mobile/Web Avançado | Frontend React interativo, SPA |
| Banco de Dados Cloud | Deploy do BD, backups, escalabilidade |
| Ética e Segurança da Informação | LGPD, criptografia, políticas de privacidade |
| Design de Interfaces Mobile | UI/UX responsivo, Design System |
| Projeto Integrador III | Sistema completo em produção |

### 🔄 O que muda do Módulo 2 para o 3?

| Aspecto | Módulo 2 | Módulo 3 |
|---------|----------|----------|
| Linguagem Backend | JavaScript | TypeScript (strict mode) |
| Frontend | HTML/CSS estático | React SPA interativo |
| Segurança | JWT básico | JWT + Refresh Tokens + Roles + LGPD |
| Deploy | Local (localhost) | Produção (Vercel/Railway/Render) |
| CI/CD | Nenhum | GitHub Actions (lint, test, deploy) |
| Monitoramento | Nenhum | Error tracking + logs estruturados |
| Design | CSS simples | Design System + Material Design |

### 📦 Entregáveis do Módulo 3

1. **Backend refatorado para TypeScript** (strict mode, tipagem completa)
2. **Frontend completo e interativo** (React ou HTML/CSS/JS avançado)
3. **Interface responsiva** seguindo Material Design / Design System próprio
4. **Autenticação robusta** (JWT + refresh tokens + controle de papéis)
5. **Deploy em produção** (Vercel/Railway/Render)
6. **Conformidade LGPD** (política de privacidade, consentimento, exclusão de dados)
7. **Documentação técnica completa** (README profissional, API docs, arquitetura)
8. **Vídeo demonstrativo** (2–3 minutos)
9. **Pitch de apresentação final** (Demo Day)

### 📁 Estrutura do Código — Módulo 3 (Final)

```
agendapro/
├── README.md (profissional, pronto para portfólio)
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── validate.ts
│   │   │   └── rate-limit.ts
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── prestador.routes.ts
│   │   │   ├── cliente.routes.ts
│   │   │   ├── servico.routes.ts
│   │   │   └── agendamento.routes.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── agendamento.controller.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── agendamento.service.ts
│   │   ├── repositories/
│   │   │   └── agendamento.repository.ts
│   │   ├── models/
│   │   │   ├── types.ts
│   │   │   └── errors.ts
│   │   └── validation/
│   │       └── schemas.ts
│   └── tests/
│       ├── unit/
│       └── integration/
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── App.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Agendamento.tsx
│   │   │   └── MeuPerfil.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── StatsChart.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   └── styles/
│   │       └── global.css
│   └── public/
│       └── index.html
├── database/
│   └── migrations/
│       ├── 001_initial_schema.sql
│       ├── 002_add_auth.sql
│       └── 003_add_lgpd_fields.sql
├── docs/
│   ├── architecture.md
│   ├── api-reference.md
│   ├── lgpd-compliance.md
│   ├── uml/
│   │   ├── classes.png
│   │   └── sequence.png
│   └── screenshots/
│       ├── dashboard.png
│       ├── agendamento.png
│       └── login.png
├── .github/
│   └── workflows/
│       └── ci.yml
└── deploy/
    └── docker-compose.yml (opcional)
```

### 📅 Cronograma — Módulo 3 (20 semanas)

| Semanas | Fase | Atividades | Entregas |
|---------|------|-----------|----------|
| 1–3 | 🔄 Migração | TypeScript migration + reestruturação do projeto (monorepo) | Backend TS funcional |
| 4–7 | 🎨 Frontend | Desenvolvimento React (páginas, componentes, integração API) | SPA navegável |
| 8–10 | 🔐 Auth | Sistema de autenticação completo + controle de acesso por papel | Login/Register/Roles |
| 11–13 | 🛡️ Segurança | Conformidade LGPD + sanitização + rate limiting | Política LGPD, segurança |
| 14–16 | ✨ Design | Polimento visual + responsividade + acessibilidade (WCAG) | Interface final |
| 17–18 | 🚀 Deploy | Deploy + CI/CD + testes finais | Sistema em produção |
| 19–20 | 🎤 Demo Day | Preparação da apresentação final | Pitch + Demo ao vivo |

### 🛡️ LGPD no AgendaPro — Módulo 3

```
┌─────────────────────────────────────────────────────────────┐
│                    CONFORMIDADE LGPD                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✅ Consentimento explícito no cadastro                     │
│  ✅ Política de privacidade acessível                       │
│  ✅ Direito de exclusão (DELETE /api/me)                    │
│  ✅ Exportação de dados pessoais (GET /api/me/data)         │
│  ✅ Criptografia de senhas (bcrypt)                         │
│  ✅ Logs de acesso auditáveis                               │
│  ✅ Minimização de dados (coletar apenas o necessário)      │
│  ✅ Política de retenção de dados                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

> ⚠️ **Atenção:** A conformidade com a LGPD não é opcional! A disciplina de Ética e Segurança da Informação avalia diretamente esse aspecto do projeto.

### 💻 Exemplo TypeScript — Service com Tipagem

```typescript
// backend/src/services/agendamento.service.ts

interface CriarAgendamentoDTO {
  clienteId: number;
  servicoId: number;
  dataHora: Date;
  observacoes?: string;
}

interface AgendamentoResponse {
  id: number;
  cliente: string;
  servico: string;
  prestador: string;
  dataHora: Date;
  status: 'confirmado' | 'cancelado' | 'concluido';
}

export class AgendamentoService {
  async criar(dados: CriarAgendamentoDTO): Promise<AgendamentoResponse> {
    // 1. Verificar se horário está disponível
    const conflito = await this.repository.verificarConflito(
      dados.servicoId,
      dados.dataHora
    );
    
    if (conflito) {
      throw new AppError('HORARIO_INDISPONIVEL', 409);
    }

    // 2. Criar o agendamento
    const agendamento = await this.repository.criar(dados);
    
    // 3. Retornar resposta formatada
    return this.formatarResposta(agendamento);
  }
}
```

---

## 5. 📋 Roteiro Passo a Passo de Execução

### 5.1 🗂️ Como Organizar o Repositório GitHub (desde o Dia 1)

#### Criação do Repositório

```bash
# Criar repositório no GitHub (nome sugerido: agendapro)
# Clonar localmente:
git clone https://github.com/seu-usuario/agendapro.git
cd agendapro
git checkout -b develop
```

#### Estratégia de Branches

```
main        ─────●──────────────●──────────────●─── (releases estáveis)
                 │              │              │
develop     ────●●●●───────────●●●●───────────●●●● (trabalho contínuo)
                |||             |||             |||
feature/*   ────●●●            ●●●            ●●●  (funcionalidades)
```

| Branch | Propósito |
|--------|-----------|
| `main` | Código estável, só recebe merges de `develop` nas entregas |
| `develop` | Branch de trabalho do dia-a-dia |
| `feature/nome` | Uma funcionalidade específica (ex: `feature/crud-prestadores`) |
| `fix/nome` | Correções de bugs (ex: `fix/validacao-horario`) |

#### Convenção de Commits

```bash
feat: adicionar CRUD de prestadores
fix: corrigir validação de horário duplicado
docs: atualizar README com instruções de setup
refactor: extrair lógica de conflito para service
style: formatação do código com prettier
test: adicionar testes do agendamento service
chore: atualizar dependências do package.json
```

#### Tags por Módulo

```bash
# Ao finalizar cada módulo:
git tag -a v1.0-modulo1 -m "Entrega Módulo 1: Python CLI + PostgreSQL"
git tag -a v2.0-modulo2 -m "Entrega Módulo 2: API REST + Frontend HTML"
git tag -a v3.0-modulo3 -m "Entrega Módulo 3: TypeScript + React + Deploy"
git push origin --tags
```

### 5.2 📊 Cronograma Visual Completo (60 semanas)

```
MÓDULO 1 (Semestre 1)          MÓDULO 2 (Semestre 2)          MÓDULO 3 (Semestre 3)
━━━━━━━━━━━━━━━━━━━━━          ━━━━━━━━━━━━━━━━━━━━━          ━━━━━━━━━━━━━━━━━━━━━

Sem 1─4:  🔍 Descoberta        Sem 1─3:  📐 Engenharia        Sem 1─3:  🔄 TypeScript
          Design Thinking                UML + Scrum                    Migration
          Personas/HMW                   Requisitos                     Monorepo setup

Sem 5─8:  🗄️ Modelagem BD      Sem 4─6:  ⚙️ Node.js Setup     Sem 4─7:  🎨 Frontend
          DER → DDL                     Express + DB                   React SPA
          Scripts SQL                   Migrations                     Componentes

Sem 9─12: 🐍 Python CRUD       Sem 7─10: 🔌 API REST          Sem 8─10: 🔐 Auth
          Repositories                  Endpoints CRUD                 JWT + Roles
          Services                      JWT Auth                       Refresh Tokens

Sem 13─16:✅ Validações         Sem 11─14:🎨 Frontend          Sem 11─13:🛡️ LGPD
          Regras negócio                HTML/CSS                       Segurança
          Relatórios SQL                Landing Page                   Compliance

Sem 17─18:📝 Documentação       Sem 15─17:🧪 Testes            Sem 14─16:✨ Design
          Testes manuais                Jest/Supertest                 UI/UX Polish
          README                        Integração                     Responsivo

Sem 19─20:🎤 PI I               Sem 18─20:📄 PI II             Sem 17─18:🚀 Deploy
          Apresentação                  Apresentação                   CI/CD + Prod

                                                                Sem 19─20:🎤 DEMO DAY
                                                                         Apresentação
                                                                         Final
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         v1.0 ──────────────────── v2.0 ──────────────────── v3.0 (FINAL)
```

### 5.3 🔗 Como Juntar as Disciplinas

Mapeamento completo de **cada disciplina** e sua contribuição direta para o PCC:

| Módulo | Disciplina | Contribuição para o AgendaPro |
|--------|-----------|-------------------------------|
| 1 | Administração de Banco de Dados | DER, modelo lógico/físico, normalização (3FN), DDL, DML, consultas avançadas |
| 1 | Lógica e Pensamento Computacional | Algoritmos do menu, validações, estruturas de repetição e decisão |
| 1 | Programação Python/Desktop | Aplicação CLI completa, conexão psycopg2, CRUD |
| 1 | Design Thinking | Pesquisa com usuários reais, personas, mapa de empatia, ideação |
| 1 | Design Centrado no Usuário | Personas detalhadas, jornada do usuário, preparação para UI |
| 1 | Projeto Integrador I | Integra tudo em uma entrega única avaliada por banca |
| 2 | Programação Web (HTML/CSS/JS) | Landing page, dashboard estático, consumo de API via fetch |
| 2 | Engenharia de Software | Diagramas UML, documento de requisitos, Scrum, arquitetura |
| 2 | Projeto Integrador II | API + Frontend + Documentação em entrega integrada |
| 3 | Programação Mobile/Web Avançado | Frontend React interativo, SPA, hooks, estado global |
| 3 | Banco de Dados Cloud | Deploy do PostgreSQL na nuvem, backups, monitoramento |
| 3 | Ética e Segurança da Informação | LGPD, criptografia, sanitização, políticas de segurança |
| 3 | Design de Interfaces Mobile | UI responsiva, Design System, componentes reutilizáveis, acessibilidade |
| 3 | Projeto Integrador III | Sistema completo em produção + Demo Day |

> 💡 **Dica para professores:** Cada disciplina avalia o mesmo projeto sob sua perspectiva. O aluno não faz "vários trabalhos separados" — ele evolui UM projeto que atende a todos.

### 5.4 🎤 Guia de Apresentação Final (Demo Day)

**Duração total:** 15 minutos por equipe

```
┌─────────────────────────────────────────────────────────────┐
│                    ESTRUTURA DO DEMO DAY                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐                                       │
│  │ 1. PROBLEMA     │  (2 min)                              │
│  │    Que problema │  Apresentar a dor do mercado          │
│  │    resolvemos?  │  Dados reais de demanda               │
│  └────────┬────────┘                                       │
│           │                                                 │
│  ┌────────▼────────┐                                       │
│  │ 2. JORNADA      │  (3 min)                              │
│  │    do Projeto   │  Evolução em 3 módulos                │
│  │                 │  Mostrar histórico do Git              │
│  └────────┬────────┘                                       │
│           │                                                 │
│  ┌────────▼────────┐                                       │
│  │ 3. DEMO AO VIVO │  (5 min)                              │
│  │    Fluxo real   │  Cadastro → Login → Agendar →         │
│  │                 │  Dashboard (mostrar sistema rodando)   │
│  └────────┬────────┘                                       │
│           │                                                 │
│  ┌────────▼────────┐                                       │
│  │ 4. ARQUITETURA  │  (3 min)                              │
│  │    Técnica      │  Stack, pastas, deploy, CI/CD         │
│  │                 │  Decisões arquiteturais                │
│  └────────┬────────┘                                       │
│           │                                                 │
│  ┌────────▼────────┐                                       │
│  │ 5. LIÇÕES       │  (2 min)                              │
│  │    Aprendidas   │  Desafios, crescimento pessoal        │
│  │                 │  O que faria diferente                 │
│  └─────────────────┘                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Dicas para uma Apresentação Nota 10

| ✅ Faça | ❌ Evite |
|---------|----------|
| Demo ao vivo (mesmo com risco) | Apenas slides com screenshots |
| Conte uma história | Listar funcionalidades secamente |
| Mostre o Git (commits reais) | Dizer "a gente fez" sem provar |
| Fale dos erros e aprendizados | Fingir que tudo foi perfeito |
| Ensaie com cronômetro | Estourar o tempo (desclassifica) |
| Vista-se profissionalmente | Apresentar de chinelo/bermuda |

#### Perguntas que a Banca pode fazer:

1. "Por que vocês escolheram essa arquitetura?"
2. "Como vocês lidam com dois clientes agendando o mesmo horário?"
3. "O que acontece se o banco de dados ficar fora do ar?"
4. "Como a LGPD é tratada no sistema de vocês?"
5. "Qual foi o maior desafio técnico que enfrentaram?"

### 5.5 📊 Rubrica Final de Avaliação (PCC Completo)

| Critério | Peso | Descrição | Nota Máx. |
|----------|------|-----------|-----------|
| 🔧 **Funcionalidade** | 25% | Sistema funciona end-to-end: cadastro, login, agendamento, dashboard, sem erros críticos | 10,0 |
| 💻 **Código & Arquitetura** | 20% | Código limpo, separação de camadas, TypeScript correto, sem repetição desnecessária | 10,0 |
| 🎨 **Design & UX** | 15% | Interface intuitiva, responsiva, acessível, esteticamente agradável | 10,0 |
| 📄 **Documentação** | 15% | README profissional, API docs, diagramas atualizados, LGPD documentada | 10,0 |
| 📋 **Processo (Scrum/Git)** | 10% | Commits consistentes, branches, sprints evidenciadas, backlog mantido | 10,0 |
| 🎤 **Apresentação** | 15% | Comunicação clara, demo funcional, domínio técnico nas perguntas | 10,0 |

#### Critérios de Aprovação

| Conceito | Nota | Significado |
|----------|------|-------------|
| 🏆 Excelente | 9,0 – 10,0 | Pronto para portfólio profissional |
| ✅ Satisfatório | 7,0 – 8,9 | Atende todos os requisitos com qualidade |
| ⚠️ Em desenvolvimento | 5,0 – 6,9 | Funciona mas precisa de melhorias |
| ❌ Insuficiente | < 5,0 | Não atende os requisitos mínimos |

> ⚠️ **Requisito mínimo para aprovação:** O sistema precisa funcionar ao vivo durante o Demo Day. Projetos que só existem em slides não são aprovados.

### 5.6 ✅ Checklist de Entrega Final

#### Repositório GitHub
- [ ] README.md profissional com badges, screenshots, instruções de setup
- [ ] `.env.example` com todas as variáveis documentadas
- [ ] Código organizado em pastas conforme estrutura definida
- [ ] Histórico de commits limpo e com mensagens significativas
- [ ] Tags de versão: `v1.0-modulo1`, `v2.0-modulo2`, `v3.0-modulo3`
- [ ] Branch `main` estável e funcional
- [ ] Licença definida (MIT recomendada)

#### Backend
- [ ] API RESTful funcional com todos os endpoints
- [ ] TypeScript compilando sem erros (`tsc --noEmit`)
- [ ] Autenticação JWT funcionando (login, register, refresh)
- [ ] Controle de acesso por papéis (admin, prestador, cliente)
- [ ] Validação de entrada em todos os endpoints (Zod)
- [ ] Tratamento de erros padronizado (códigos HTTP corretos)
- [ ] Prevenção de double-booking implementada
- [ ] Testes automatizados passando (mínimo 70% cobertura)
- [ ] Rate limiting configurado
- [ ] Variáveis de ambiente para configuração

#### Frontend
- [ ] SPA funcional com navegação entre páginas
- [ ] Tela de login/cadastro
- [ ] Tela de agendamento (selecionar prestador → serviço → horário)
- [ ] Dashboard com estatísticas
- [ ] Perfil do usuário (editar dados, excluir conta — LGPD)
- [ ] Design responsivo (funciona em mobile e desktop)
- [ ] Loading states e tratamento de erros na UI
- [ ] Acessibilidade básica (labels, contraste, navegação por teclado)

#### Banco de Dados
- [ ] Schema normalizado (3FN)
- [ ] Migrations versionadas e aplicáveis
- [ ] Constraints adequadas (PK, FK, UNIQUE, CHECK, NOT NULL)
- [ ] Índices para queries frequentes
- [ ] Dados de seed para demonstração
- [ ] Backup/restore documentado

#### Documentação
- [ ] README com instruções de instalação e execução
- [ ] Documentação da API (endpoints, payloads, respostas)
- [ ] Diagramas UML atualizados (classes, sequência)
- [ ] Diagrama de arquitetura do sistema
- [ ] Documento de conformidade LGPD
- [ ] Screenshots das telas principais

#### Deploy & DevOps
- [ ] Aplicação acessível via URL pública
- [ ] CI/CD configurado (GitHub Actions)
- [ ] Banco de dados em ambiente de produção
- [ ] HTTPS configurado
- [ ] Variáveis de ambiente em produção (não commitadas)

#### Apresentação
- [ ] Slides preparados (máximo 10 slides de apoio)
- [ ] Demo ensaiada (fluxo completo em 5 minutos)
- [ ] Vídeo demonstrativo gravado (backup para falhas técnicas)
- [ ] Todos os membros da equipe sabem explicar o sistema
- [ ] Respostas preparadas para perguntas técnicas da banca

---

## 🎯 Resumo da Evolução Tecnológica

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│              EVOLUÇÃO DO ESTUDANTE AO LONGO DO CURSO                    │
│                                                                         │
│  MÓDULO 1          MÓDULO 2              MÓDULO 3                       │
│  ────────          ────────              ────────                       │
│                                                                         │
│  🐍 Python    →    📦 JavaScript    →    🔷 TypeScript                  │
│  🗄️ SQL puro  →    🔌 API REST      →    🚀 Full-stack                  │
│  💻 Terminal   →    🌐 HTTP/JSON     →    🎨 React SPA                   │
│  📝 README     →    📐 UML + Scrum   →    📊 Docs completa              │
│  👤 Solo       →    👥 Equipe        →    🏢 Processo profissional       │
│  🏠 Local      →    🧪 Testes        →    ☁️ Deploy produção             │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────      │
│  Resultado: Desenvolvedor Jr. pronto para o mercado! 🎉                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tecnologias e Ferramentas por Módulo

| Categoria | Módulo 1 | Módulo 2 | Módulo 3 |
|-----------|----------|----------|----------|
| **Linguagem** | Python 3.11+ | JavaScript ES6+ | TypeScript 5.x |
| **Banco de Dados** | PostgreSQL 16 | PostgreSQL 16 | PostgreSQL 16 (Cloud) |
| **Driver/ORM** | psycopg2 | pg (node-postgres) | pg + tipagem |
| **Framework** | — (CLI puro) | Express 4.x | Express 4.x (tipado) |
| **Frontend** | — | HTML5 + CSS3 + JS | React 18 + Vite |
| **Autenticação** | — | JWT (jsonwebtoken) | JWT + Refresh + Roles |
| **Validação** | if/else | Joi ou Zod | Zod (schema tipado) |
| **Testes** | manual | Jest + Supertest | Jest + Supertest + fast-check |
| **Versionamento** | Git + GitHub | Git + GitHub | Git + GitHub + Actions |
| **Deploy** | — | — | Vercel/Railway/Render |
| **Design** | — | Figma (wireframes) | Figma (UI final) |
| **Documentação** | README | README + API docs | README + docs/ completa |
| **Metodologia** | Kanban simples | Scrum (sprints) | Scrum + CI/CD |

---

## 📚 Recursos de Aprendizagem Recomendados

### Módulo 1 — Python & BD
| Recurso | Link | Tipo |
|---------|------|------|
| Python para Iniciantes | [python.org.br](https://python.org.br) | Documentação |
| PostgreSQL Tutorial | [postgresqltutorial.com](https://www.postgresqltutorial.com/) | Tutorial |
| Git para Iniciantes | [git-scm.com/book/pt-br](https://git-scm.com/book/pt-br) | Livro gratuito |
| psycopg2 docs | [psycopg.org](https://www.psycopg.org/docs/) | Documentação |

### Módulo 2 — Node.js & Web
| Recurso | Link | Tipo |
|---------|------|------|
| MDN Web Docs | [developer.mozilla.org](https://developer.mozilla.org/pt-BR/) | Referência |
| Express.js Guide | [expressjs.com](https://expressjs.com/pt-br/) | Documentação |
| REST API Design | [restfulapi.net](https://restfulapi.net/) | Guia |
| JWT.io | [jwt.io](https://jwt.io/) | Ferramenta |

### Módulo 3 — TypeScript & React
| Recurso | Link | Tipo |
|---------|------|------|
| TypeScript Handbook | [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/) | Documentação |
| React Docs | [react.dev](https://react.dev/) | Documentação |
| Vercel Deploy Guide | [vercel.com/docs](https://vercel.com/docs) | Tutorial |
| LGPD na Prática | [gov.br/lgpd](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd) | Referência |

---

## ❓ Perguntas Frequentes (FAQ)

<details>
<summary><strong>O projeto precisa ser feito em grupo?</strong></summary>

Sim! Equipes de 3 a 5 integrantes. O Scrum será praticado com papéis reais (Product Owner, Scrum Master, Devs).
</details>

<details>
<summary><strong>Posso mudar o tema (não ser agendamento)?</strong></summary>

O tema "AgendaPro" é a sugestão padrão. Equipes que desejarem outro domínio (ex: controle de estoque, gerenciamento de tarefas) devem solicitar aprovação da coordenação antes da Semana 4 do Módulo 1. O domínio precisa ter complexidade equivalente.
</details>

<details>
<summary><strong>E se eu entrar no curso no Módulo 2?</strong></summary>

Você receberá o repositório base do Módulo 1 já pronto para começar a evolução. Converse com a coordenação para planejamento individual.
</details>

<details>
<summary><strong>Preciso de hospedagem paga para o deploy?</strong></summary>

Não! Utilizamos planos gratuitos:
- **Backend:** Railway (free tier) ou Render
- **Frontend:** Vercel ou Netlify (free)
- **Banco:** Neon.tech ou Supabase (free tier PostgreSQL)
</details>

<details>
<summary><strong>Posso usar outra linguagem no lugar de Python/JavaScript?</strong></summary>

Não para o projeto padrão. As linguagens foram escolhidas para se alinhar com as disciplinas do currículo. Projetos extras pessoais podem usar qualquer stack.
</details>

<details>
<summary><strong>O que acontece se o sistema falhar durante o Demo Day?</strong></summary>

Por isso pedimos o vídeo demonstrativo como backup! Mas a demo ao vivo é fortemente valorizada. Dica: teste na manhã da apresentação.
</details>

---

## 🏗️ Exemplo de Fluxo Completo do Sistema Final

```
┌─────────────────────────────────────────────────────────────────────┐
│                     FLUXO DO AGENDAPRO (Módulo 3)                    │
└─────────────────────────────────────────────────────────────────────┘

  👤 CLIENTE                   🖥️ FRONTEND (React)              ⚙️ BACKEND (TypeScript)
  ─────────                   ─────────────────              ──────────────────────

  1. Acessa o site       →    Página de Login               
                              ────────────────               
  2. Faz login           →    POST /api/auth/login     →     Valida credenciais
                              Recebe JWT token               Retorna token + role
                              ────────────────               
  3. Vê prestadores      →    GET /api/prestadores     →     Lista prestadores ativos
     disponíveis              Renderiza cards                com serviços
                              ────────────────               
  4. Escolhe serviço     →    GET /api/disponibilidade →     Calcula slots livres
     e vê horários            Mostra calendário              (evita conflitos)
                              ────────────────               
  5. Confirma            →    POST /api/agendamentos   →     Verifica conflito
     agendamento              Mostra confirmação             Cria agendamento
                                                             Envia notificação
                              ────────────────               
  6. Vê dashboard        →    GET /api/dashboard       →     Agrega estatísticas
                              Renderiza gráficos             (JOIN + GROUP BY)
```

---

## 🎓 Conexão com o Mercado de Trabalho

Ao concluir este projeto, o estudante terá experiência prática com:

| Habilidade | Como é desenvolvida no PCC | Relevância no mercado |
|---|---|---|
| **Banco de dados relacional** | Modelagem, SQL avançado, migrations | 95% das vagas pedem SQL |
| **API REST** | Design de endpoints, autenticação, status codes | Padrão da indústria |
| **TypeScript** | Tipagem estática, interfaces, generics | Exigido em +60% das vagas front/back |
| **React** | Componentes, hooks, estado, SPA | Framework #1 do mercado |
| **Git/GitHub** | Branches, PRs, commits semânticos, CI/CD | Obrigatório em qualquer vaga |
| **Testes** | Unitários, integração, cobertura | Diferencial competitivo |
| **Deploy** | CI/CD, variáveis de ambiente, produção | DevOps básico muito valorizado |
| **Scrum/Ágil** | Sprints, backlog, retrospectivas | Metodologia padrão das empresas |
| **Documentação** | README, API docs, diagramas | Sinal de profissionalismo |
| **LGPD/Segurança** | Compliance, criptografia, sanitização | Obrigatório por lei |

> 💡 **Dado importante:** Segundo pesquisa da BRASSCOM (2024), o Brasil terá déficit de 530 mil profissionais de TI até 2025. Um estudante que sai do curso técnico com este portfólio está muito à frente da concorrência!

---

## 📐 Diagrama de Banco de Dados (Evolução)

### Módulo 1 — Estrutura Inicial

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  prestadores │     │   servicos   │     │   clientes   │
├──────────────┤     ├──────────────┤     ├──────────────┤
│ id (PK)      │◄────│ prestador_id │     │ id (PK)      │
│ nome         │     │ id (PK)      │     │ nome         │
│ email (UQ)   │     │ nome         │     │ email (UQ)   │
│ telefone     │     │ duracao_min  │     │ telefone     │
│ especialidade│     │ preco        │     │ criado_em    │
│ ativo        │     │ descricao    │     └──────┬───────┘
│ criado_em    │     └──────┬───────┘            │
└──────────────┘            │                    │
                            │                    │
                     ┌──────▼────────────────────▼──┐
                     │         agendamentos          │
                     ├───────────────────────────────┤
                     │ id (PK)                       │
                     │ cliente_id (FK → clientes)    │
                     │ servico_id (FK → servicos)    │
                     │ data_hora (UQ c/ servico_id)  │
                     │ status                        │
                     │ observacoes                   │
                     │ criado_em                     │
                     └───────────────────────────────┘
```

### Módulo 2 e 3 — Tabelas Adicionais

```
┌──────────────────┐     ┌─────────────────────┐
│     usuarios     │     │   disponibilidade   │
├──────────────────┤     ├─────────────────────┤
│ id (PK)          │     │ id (PK)             │
│ email (UQ)       │     │ prestador_id (FK)   │
│ senha_hash       │     │ dia_semana          │
│ role             │     │ hora_inicio         │
│ ativo            │     │ hora_fim            │
│ consentimento_lgpd│    └─────────────────────┘
│ criado_em        │     
└──────────────────┘     ┌─────────────────────┐
                         │    refresh_tokens    │
                         ├─────────────────────┤
                         │ id (PK)             │
                         │ usuario_id (FK)     │
                         │ token               │
                         │ expira_em           │
                         └─────────────────────┘
```

---

## 📝 Modelo de README do Estudante (Template)

O repositório do estudante no Módulo 3 deve ter um README profissional. Use este template:

```markdown
<p align="center">
  <img src="docs/screenshots/logo.png" alt="AgendaPro" width="200"/>
</p>

<h1 align="center">AgendaPro</h1>
<p align="center">Plataforma de Agendamento de Serviços</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20produção-green" />
  <img src="https://img.shields.io/badge/versão-3.0-blue" />
  <img src="https://img.shields.io/badge/licença-MIT-yellow" />
</p>

## 🚀 Demo
🔗 **Acesse:** [agendapro.vercel.app](https://agendapro.vercel.app)

## 📋 Sobre o Projeto
Sistema full-stack de agendamento de serviços desenvolvido ao longo 
de 3 semestres no Curso Técnico em Desenvolvimento de Sistemas — ETE PE.

## 🛠️ Stack
- **Backend:** TypeScript + Express + PostgreSQL
- **Frontend:** React + Vite
- **Deploy:** Vercel + Railway

## ⚙️ Como Executar Localmente
[instruções de git clone, npm install, configuração .env, etc.]

## 📸 Screenshots
[imagens das telas principais]

## 👥 Equipe
- Nome 1 — Backend
- Nome 2 — Frontend
- Nome 3 — Database + DevOps

## 📄 Licença
MIT
```

---

## 🎯 Dicas de Ouro para os Estudantes

> 💡 **1. Commit todo dia que programar.**
> Mesmo que seja pouco. Um commit por dia > um commit gigante por mês.

> 💡 **2. Não tenha medo de errar.**
> O Git permite voltar atrás. Experimente, quebre, conserte. É assim que se aprende.

> 💡 **3. Leia código de outras pessoas.**
> Projetos open source no GitHub são a melhor escola gratuita que existe.

> 💡 **4. Documente ENQUANTO faz, não depois.**
> Se você deixar para documentar no final, nunca vai ficar bom.

> 💡 **5. Peça ajuda cedo.**
> Ficar travado 3 dias sem pedir ajuda não é persistência, é desperdício de tempo.

> 💡 **6. O projeto é seu portfólio.**
> Imagine que um recrutador vai ver seu GitHub amanhã. Isso muda a forma como você commita.

---

## 🗓️ Marcos Importantes (Checkpoints)

| Quando | O quê | Evidência |
|--------|--------|-----------|
| Módulo 1 — Semana 4 | Tema definido + Personas | `docs/personas.md` no repo |
| Módulo 1 — Semana 8 | Banco de dados criado | Scripts SQL + DER no repo |
| Módulo 1 — Semana 12 | CRUD Python funcionando | Demo ao vivo para a professora |
| Módulo 1 — Semana 20 | **Entrega PI I** | Tag `v1.0-modulo1` |
| Módulo 2 — Semana 3 | UML + Backlog prontos | `docs/uml/` + `docs/scrum/` |
| Módulo 2 — Semana 10 | API completa | Todos endpoints testáveis no Postman |
| Módulo 2 — Semana 20 | **Entrega PI II** | Tag `v2.0-modulo2` |
| Módulo 3 — Semana 7 | Frontend navegável | Deploy preview no Vercel |
| Módulo 3 — Semana 13 | LGPD implementada | `docs/lgpd-compliance.md` |
| Módulo 3 — Semana 18 | Sistema em produção | URL pública funcionando |
| Módulo 3 — Semana 20 | **🏆 DEMO DAY** | Tag `v3.0-modulo3` + apresentação |

---

## ⚖️ Critérios Éticos e Profissionais

Este projeto também avalia competências socioemocionais e éticas:

| Competência | Como é avaliada |
|---|---|
| **Trabalho em equipe** | Participação equilibrada nos commits e sprints |
| **Comunicação** | Qualidade da apresentação e documentação |
| **Ética profissional** | Código não plagiado, referências corretas, LGPD |
| **Responsabilidade** | Entregas no prazo, comunicação proativa de impedimentos |
| **Pensamento crítico** | Decisões arquiteturais justificadas, trade-offs reconhecidos |
| **Aprendizado contínuo** | Evolução visível entre módulos, busca por soluções |

> ⚠️ **Plágio:** Projetos com código copiado sem atribuição (incluindo de IA) serão reprovados. Usar IA como ferramenta de aprendizado é permitido e incentivado — mas o estudante deve entender e ser capaz de explicar cada linha que entrega.

---

## 🌟 Projetos de Referência e Inspiração

Projetos similares que podem servir de inspiração (não para copiar!):

| Projeto | O que observar | Link |
|---------|---------------|------|
| Cal.com | Agendamento open source | [github.com/calcom/cal.com](https://github.com/calcom/cal.com) |
| Calendso | Interface limpa | [calendso.com](https://cal.com) |
| Booksy | UX mobile-first | [booksy.com](https://booksy.com) |
| Doctoralia | Agendamento médico | [doctoralia.com.br](https://www.doctoralia.com.br) |

> 💡 Estudar sistemas reais ajuda a entender padrões de UX e funcionalidades esperadas pelos usuários.

---

## 📊 Métricas de Sucesso do Projeto

Como saber se o projeto está no caminho certo em cada módulo:

### Módulo 1 ✅
- [ ] Consigo criar um agendamento via terminal sem erros?
- [ ] O sistema impede agendamento em horário já ocupado?
- [ ] Os relatórios SQL retornam dados corretos com JOINs?
- [ ] O README tem instruções para qualquer pessoa executar o projeto?

### Módulo 2 ✅
- [ ] Consigo fazer CRUD completo via Postman/Insomnia?
- [ ] A autenticação JWT protege as rotas corretamente?
- [ ] Os testes automatizados passam com `npm test`?
- [ ] A landing page está bonita e responsiva?

### Módulo 3 ✅
- [ ] O sistema está acessível via URL pública?
- [ ] Um usuário consegue fazer o fluxo completo sem ajuda?
- [ ] A LGPD está implementada (exclusão de dados, consentimento)?
- [ ] O CI/CD deploya automaticamente quando faço push na main?

---

<p align="center">

---

<br/>

> *"O único jeito de aprender a programar é programando.*
> *Não assista tutoriais infinitos — construa coisas reais."*

<br/>

**🏆 Projeto de Conclusão de Curso Evolutivo (PCC)**<br/>
Curso Técnico em Desenvolvimento de Sistemas<br/>
ETE Pernambuco

**Coordenação e Elaboração:** Profª Luana Cristina<br/>
**Metodologia:** Projeto Progressivo em 3 Módulos<br/>
**Carga Horária Total:** 60 semanas (~1.200 horas)

---

<sub>
📅 Documento atualizado em 2025 | 
📧 Dúvidas? Procure a coordenação do curso |
🔗 Este documento é vivo e será atualizado a cada semestre
</sub>

</p>
