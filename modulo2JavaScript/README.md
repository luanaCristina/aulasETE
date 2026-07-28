# 🎓 Módulo II — POO, Banco de Dados & Front-End (Versão JavaScript)

## Projeto: Sistema de Agendamentos — "Salão Beleza & Arte" (Node.js)

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Intermediário  
> **Stack:** Node.js + Express + PostgreSQL + HTML/CSS/JS

---

## 📖 Contexto

Mesmo sistema de agendamentos do Módulo 2, porém totalmente em **JavaScript/Node.js**:
- Back-end: Express.js com classes ES6+
- Banco: PostgreSQL via `pg`
- Front-end: HTML/CSS/JS com Fetch API

---

## 📁 Estrutura

```
modulo2JavaScript/
├── README.md
├── package.json
├── .env.example
├── src/
│   ├── server.js              ← Entry point
│   ├── app.js                 ← Express config
│   ├── config/
│   │   └── database.js        ← Pool PostgreSQL
│   ├── models/
│   │   ├── Cliente.js
│   │   ├── Profissional.js
│   │   ├── Servico.js
│   │   └── Agendamento.js     ← Regras de negócio (POO)
│   ├── routes/
│   │   ├── clienteRoutes.js
│   │   ├── agendamentoRoutes.js
│   │   └── index.js
│   └── errors/
│       └── AppError.js
├── database/
│   ├── 001_create_tables.sql
│   ├── 002_seed_data.sql
│   └── 003_queries.sql
└── public/
    ├── index.html
    ├── css/style.css
    └── js/app.js
```

---

## 🚀 Como Rodar

```bash
npm install
cp .env.example .env   # ajustar credenciais do banco
npm run dev            # Inicia com nodemon
# Acesse: http://localhost:3000
```
