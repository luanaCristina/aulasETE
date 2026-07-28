# Módulo IV TypeScript — EcoColeta API (Express + Docker + CI)

```bash
# Com Docker (recomendado)
docker-compose up --build   # http://localhost:3000

# Sem Docker
npm install
npm run dev
```

## Estrutura
```
modulo4TypeScript/
├── src/
│   ├── server.ts, app.ts
│   ├── config/database.ts
│   ├── middleware/auth.ts
│   └── routes/ (auth, collectionPoint, pickup)
├── Dockerfile              ← Multi-stage build
├── docker-compose.yml      ← API + PostgreSQL
├── package.json, tsconfig.json
```

## Comandos Docker
```bash
docker-compose up -d        # Subir em background
docker-compose logs -f api  # Ver logs da API
docker-compose down         # Parar tudo
docker-compose down -v      # Parar + limpar volumes
```
