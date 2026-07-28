# Módulo III JavaScript — TaskFlow API (Express + Jest)

```bash
npm install
npm run dev    # http://localhost:3000
npm test       # Rodar testes
```

## Estrutura
```
modulo3JavaScript/
├── src/
│   ├── server.js, app.js
│   ├── services/auth.service.js   ← bcrypt + JWT
│   ├── services/task.service.js   ← Regras Kanban
│   ├── routes/ (auth, project, task)
│   └── middleware/auth.js         ← Verifica token
├── tests/
│   ├── auth.test.js
│   └── task.test.js
├── security_challenge/
│   ├── vulnerable_code.js
│   └── INSTRUCTIONS.md
└── package.json
```
