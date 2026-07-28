# 📱 ComUnidade — Projeto CRUD Fullstack (Expo + Node.js + MongoDB)

## Estrutura

```
projeto/
├── api/           ← Back-end (Node.js + Express + Mongoose)
│   ├── src/
│   │   ├── server.js
│   │   ├── app.js
│   │   ├── config/database.js
│   │   ├── models/Task.js
│   │   └── routes/taskRoutes.js
│   ├── .env.example
│   └── package.json
├── app/           ← Mobile (React Native + Expo)
│   ├── App.js
│   ├── app.json
│   ├── src/
│   │   ├── services/api.js
│   │   ├── components/TaskCard.js
│   │   └── screens/
│   │       ├── HomeScreen.js
│   │       ├── CreateTaskScreen.js
│   │       └── EditTaskScreen.js
│   └── package.json
└── README.md
```

## 🍃 Banco de Dados — MongoDB Atlas (Gratuito)

O projeto usa **MongoDB Atlas** (cluster na nuvem, gratuito). Não precisa instalar banco local.

### Configurar em 5 minutos:

1. Acesse: https://www.mongodb.com/cloud/atlas/register
2. Crie conta gratuita (Google ou e-mail)
3. "Create a Cluster" → selecione **M0 FREE** (São Paulo)
4. "Database Access" → criar usuário: `aluno` / senha: `Curso2025!`
5. "Network Access" → "Add IP" → **Allow Access from Anywhere** (0.0.0.0/0)
6. "Connect" → "Drivers" → copiar a connection string:
   ```
   mongodb+srv://aluno:Curso2025!@cluster0.xxxxx.mongodb.net/comunidade?retryWrites=true&w=majority
   ```
7. Colar no arquivo `api/.env`:
   ```
   MONGODB_URI=mongodb+srv://aluno:Curso2025!@cluster0.xxxxx.mongodb.net/comunidade?retryWrites=true&w=majority
   PORT=3000
   ```

### Popular o banco com dados de exemplo:
```bash
cd projeto/api
node src/seed.js
# ✅ 6 tarefas inseridas com sucesso!
```

---

## Como Rodar

### 1. API (Terminal 1)
```bash
cd projeto/api
npm install
cp .env.example .env   # Preencher com MongoDB Atlas URI (passo acima)
node src/seed.js       # Popular banco (rodar 1x só)
npm run dev
# 🚀 http://localhost:3000
```

### 2. App Mobile (Terminal 2)
```bash
cd projeto/app
npm install
npx expo start
# Escanear QR Code com Expo Go no celular
```

### ⚠️ Lembrar
- Trocar IP em `app/src/services/api.js` pelo IP local da máquina
- API e celular devem estar na mesma rede Wi-Fi
- Para testar a API sem o app: `curl http://localhost:3000/api/tasks`
