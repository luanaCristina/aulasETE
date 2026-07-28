# Módulo III TypeScript — TaskFlow API (Express + Jest + TS)

```bash
npm install
npm run dev    # http://localhost:3000
npm test       # Rodar testes com ts-jest
```

## Estrutura
```
modulo3TypeScript/
├── src/
│   ├── server.ts, app.ts
│   ├── services/auth.service.ts  ← bcrypt + JWT tipados
│   ├── services/task.service.ts  ← TaskStatus type + transições
│   ├── middleware/auth.ts        ← AuthRequest interface
│   └── routes/ (auth, task)
├── tests/
│   ├── auth.test.ts
│   └── task.test.ts
├── package.json, tsconfig.json
```

## Conceitos TypeScript destacados
- `type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE'` (Union Types)
- `Record<TaskStatus, TaskStatus[]>` para mapa de transições
- `AuthRequest extends Request` (extend de interfaces)
- Strict mode no tsconfig
