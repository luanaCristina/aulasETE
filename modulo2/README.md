# 🎓 Módulo II — POO, Banco de Dados & Front-End

## Projeto: Sistema de Agendamentos — "Salão Beleza & Arte"

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Intermediário  
> **Duração estimada:** 6 a 8 semanas  
> **Entrega final:** Sistema funcional com banco de dados e interface web

---

## 📖 História do Cliente / Problema a Resolver

### O Cliente

O **"Salão Beleza & Arte"** é um salão de beleza comunitário localizado no bairro de Ibura, Recife. Dona Fátima atende com mais 3 profissionais (cabeleireira, manicure e barbeiro) e oferece serviços acessíveis para a comunidade.

### O Problema

1. **Agendamentos em caderneta** — Todos os horários são anotados em um caderno, que já foi perdido duas vezes. Clientes ficam sem atendimento por falta de registro.
2. **Conflitos de horário** — Dois clientes já apareceram no mesmo horário para o mesmo profissional, gerando constrangimento.
3. **Sem histórico de serviços** — Dona Fátima não sabe quais serviços são mais procurados, nem qual profissional tem mais demanda.
4. **Cancelamentos sem controle** — Clientes cancelam por WhatsApp e o recado não chega ao profissional.

### A Missão

Desenvolver um **Sistema de Gestão de Agendamentos** com banco de dados relacional, back-end orientado a objetos e interface web funcional que resolva os problemas de organização do salão.

---

## 🗂️ Modelo Entidade-Relacionamento (MER)

### Diagrama Conceitual

```
┌─────────────────┐       ┌──────────────────┐       ┌─────────────────────┐
│    CLIENTES     │       │  PROFISSIONAIS   │       │      SERVICOS       │
├─────────────────┤       ├──────────────────┤       ├─────────────────────┤
│ PK id           │       │ PK id            │       │ PK id               │
│    nome         │       │    nome          │       │    nome             │
│    telefone     │       │    especialidade │       │    duracao_min      │
│    email        │       │    ativo         │       │    preco            │
│    created_at   │       │    created_at    │       │    ativo            │
└────────┬────────┘       └────────┬─────────┘       └──────────┬──────────┘
         │                         │                             │
         │ 1:N                     │ 1:N                         │ 1:N
         │                         │                             │
         ▼                         ▼                             ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                           AGENDAMENTOS                                    │
├──────────────────────────────────────────────────────────────────────────┤
│ PK id                                                                     │
│ FK cliente_id         → CLIENTES(id)                                     │
│ FK profissional_id    → PROFISSIONAIS(id)                                │
│ FK servico_id         → SERVICOS(id)                                     │
│    data_hora          (TIMESTAMP — data e hora do agendamento)           │
│    status             (ENUM: confirmado, cancelado, concluido)           │
│    observacoes        (TEXT — notas opcionais)                            │
│    created_at                                                             │
│    updated_at                                                             │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                    PROFISSIONAL_SERVICO (N:N)                             │
├──────────────────────────────────────────────────────────────────────────┤
│ FK profissional_id    → PROFISSIONAIS(id)                                │
│ FK servico_id         → SERVICOS(id)                                     │
│ PK (profissional_id, servico_id)                                         │
└──────────────────────────────────────────────────────────────────────────┘
```

### Regras do Modelo

- Um **cliente** pode ter vários agendamentos (1:N)
- Um **profissional** pode ter vários agendamentos (1:N)
- Um **profissional** pode oferecer vários serviços e um serviço pode ser oferecido por vários profissionais (N:N via tabela associativa)
- Um **agendamento** pertence a exatamente 1 cliente, 1 profissional e 1 serviço
- **Não pode haver dois agendamentos** para o mesmo profissional em horários sobrepostos

---

## 🛠️ Tecnologias do Projeto

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Back-End / POO** | Python 3.11+ | Sintaxe clara, ideal para aprendizado de POO |
| **Banco de Dados** | PostgreSQL 15+ | Robusto, gratuito, amplamente usado no mercado |
| **Front-End** | HTML5 + CSS3 + JavaScript ES6+ | Integração via Fetch API |
| **Servidor Web** | Flask (Python) | Microframework simples para APIs |
| **Ferramenta DB** | DBeaver ou pgAdmin | Visualização e consultas manuais |

---

## 📁 Estrutura do Projeto

```
modulo2/
├── README.md
├── database/
│   ├── 001_create_tables.sql      ← DDL: criação das tabelas
│   ├── 002_seed_data.sql          ← DML: dados iniciais para teste
│   └── 003_queries_relatorios.sql ← Consultas JOIN para relatórios
├── backend/
│   ├── app.py                     ← Servidor Flask (rotas)
│   ├── models/
│   │   ├── __init__.py
│   │   ├── cliente.py             ← Classe Cliente
│   │   ├── profissional.py        ← Classe Profissional
│   │   ├── servico.py             ← Classe Servico
│   │   └── agendamento.py         ← Classe Agendamento (regras de negócio)
│   ├── database.py                ← Conexão com PostgreSQL
│   ├── exceptions.py              ← Exceções customizadas
│   └── requirements.txt           ← Dependências Python
├── frontend/
│   ├── index.html                 ← Página principal
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js                 ← Fetch API para comunicar com back-end
└── docs/
    └── mer-diagrama.png           ← Imagem do MER (feita no draw.io)
```

---

## 🏆 Critérios de Avaliação

| Critério | Peso | O que será avaliado |
|---|---|---|
| **Modelagem do Banco** | 20% | MER correto, normalização, constraints |
| **SQL (DDL + DML)** | 20% | Scripts funcionais, JOINs, relatórios |
| **POO (Python)** | 25% | Classes bem estruturadas, encapsulamento, exceções |
| **Integração Front-Back** | 20% | Fetch API funcional, CRUD via interface |
| **Organização & Documentação** | 15% | README, commits, código comentado |

---

## ✅ Checklist de Entrega

### Banco de Dados
- [ ] Script DDL cria todas as tabelas sem erros
- [ ] Constraints (PK, FK, NOT NULL, UNIQUE) aplicadas
- [ ] Dados de seed inseridos (mínimo 5 clientes, 4 profissionais, 6 serviços, 10 agendamentos)
- [ ] 5 queries com JOIN para relatórios funcionando

### Back-End (POO)
- [ ] Mínimo 4 classes implementadas (Cliente, Profissional, Servico, Agendamento)
- [ ] Classe Agendamento com validação de conflito de horário
- [ ] Tratamento de exceções customizadas
- [ ] API REST com endpoints CRUD

### Front-End
- [ ] Interface permite criar/listar/cancelar agendamentos
- [ ] Comunicação com back-end via Fetch API
- [ ] Feedback visual de sucesso/erro

### Documentação
- [ ] README com instruções de instalação e execução
- [ ] Diagrama MER (imagem ou link draw.io)
- [ ] Mínimo 15 commits com mensagens descritivas
