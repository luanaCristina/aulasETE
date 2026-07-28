# Módulo II — TypeScript Version

## Projeto: Sistema de Agendamentos — Salão Beleza & Arte

Express + TypeScript + PostgreSQL

```bash
npm install
cp .env.example .env
npm run dev   # http://localhost:3000
```

### Estrutura
```
modulo2TypeScript/
├── src/
│   ├── server.ts, app.ts
│   ├── config/database.ts    — Pool tipado
│   ├── models/types.ts       — Interfaces e Enums
│   ├── models/errors.ts      — AppError + subclasses
│   ├── services/agendamento.service.ts — Regras de negócio
│   └── routes/ (index, agendamento, cliente)
├── database/ (SQL DDL + Seed + Queries)
├── public/ (front-end estático)
├── package.json, tsconfig.json
```

### Conceitos TypeScript demonstrados
- Interfaces e Enums para domínio
- Generic typed query `query<T>(sql, params)`
- Classes com métodos estáticos tipados
- Custom Error classes (extends Error)
- Strict mode no tsconfig
