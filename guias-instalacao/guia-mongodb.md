# 🍃 Guia Completo — MongoDB: Conta, Instalação, Uso e Queries

> **Para:** Alunos iniciantes que nunca usaram MongoDB  
> **Tempo:** 30 min para configurar, 1h para praticar queries

---

## 1. O que é o MongoDB?

MongoDB é um **banco de dados NoSQL** que armazena dados em formato de
**documentos JSON** (na verdade BSON). Diferente do SQL que usa tabelas
com linhas e colunas fixas, no MongoDB cada documento pode ter campos
diferentes.

```javascript
// Exemplo de documento MongoDB (parece um objeto JavaScript!)
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "nome": "Maria Silva",
  "idade": 28,
  "email": "maria@email.com",
  "hobbies": ["leitura", "corrida", "cozinhar"],
  "endereco": {
    "rua": "Rua das Flores, 123",
    "cidade": "Recife",
    "estado": "PE"
  }
}
```

### Terminologia: SQL vs MongoDB

| SQL (PostgreSQL) | MongoDB | Significado |
|------------------|---------|-------------|
| Database | Database | Banco de dados |
| Table | Collection | Grupo de dados |
| Row | Document | Um registro |
| Column | Field | Um campo |
| `SELECT` | `find()` | Buscar dados |
| `INSERT` | `insertOne()` | Inserir dado |
| `UPDATE` | `updateOne()` | Atualizar |
| `DELETE` | `deleteOne()` | Remover |

---

## 2. Criar Conta no MongoDB Atlas (Nuvem Gratuita)

### Passo a passo (5 minutos)

**1.** Acesse: https://www.mongodb.com/cloud/atlas/register

**2.** Crie sua conta:
   - Clique "Try Free"
   - Cadastre com Google ou e-mail + senha
   - Aceite os termos

**3.** Criar Cluster gratuito:
   - Na tela de boas-vindas: "Build a Database"
   - Selecione **M0 FREE** (tier gratuito — 512 MB)
   - Provider: AWS
   - Region: **São Paulo (sa-east-1)** ← mais próximo, menor latência
   - Cluster Name: "Cluster0" (ou renomear)
   - Clique "Create Deployment"

**4.** Criar usuário do banco:
   - Username: `aluno`
   - Password: `SenhaForte2025!` (anote!)
   - Clique "Create User"

**5.** Configurar acesso de rede:
   - "Add My Current IP Address" (para acessar do seu PC)
   - **OU** clique "Allow Access from Anywhere" → IP: `0.0.0.0/0`
   - ⚠️ Em produção NUNCA use 0.0.0.0/0, mas para estudo está OK
   - Clique "Finish and Close"

**6.** Obter a Connection String:
   - No painel, clique "Connect" no cluster
   - Selecione "Drivers" → "Node.js"
   - Copie a string (algo como):
   ```
   mongodb+srv://aluno:SenhaForte2025!@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
   ```
   - Adicione o nome do banco após `.net/`:
   ```
   mongodb+srv://aluno:SenhaForte2025!@cluster0.abc123.mongodb.net/meu_banco?retryWrites=true&w=majority
   ```

---

## 3. Instalar MongoDB na Máquina Local

### Opção A: MongoDB Community (Instalação Local)

#### Windows

1. Baixe: https://www.mongodb.com/try/download/community
2. Selecione: Windows x64, MSI
3. Execute o instalador:
   - ✅ "Complete" installation
   - ✅ "Install MongoDB as a Service"
   - ✅ "Install MongoDB Compass" (interface gráfica)
4. Após instalar, o MongoDB roda como serviço automaticamente

**Verificar:**
```powershell
mongosh --version
# Se não reconhecer, adicionar ao PATH:
# C:\Program Files\MongoDB\Server\7.0\bin
```

#### macOS

```bash
# Via Homebrew
brew tap mongodb/brew
brew install mongodb-community@7.0

# Iniciar o serviço
brew services start mongodb-community@7.0

# Verificar
mongosh --version
```

#### Linux (Ubuntu/Debian)

```bash
# Importar chave GPG
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Adicionar repositório
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Instalar
sudo apt update
sudo apt install -y mongodb-org

# Iniciar
sudo systemctl start mongod
sudo systemctl enable mongod

# Verificar
mongosh --version
```

---

### Opção B: Apenas mongosh (Shell) — Conectar ao Atlas sem instalar servidor

Se você vai usar o **Atlas (nuvem)** e não precisa de banco local:

```bash
# Windows (via npm)
npm install -g mongosh

# macOS
brew install mongosh

# Linux
npm install -g mongosh
```

---

## 4. Conectar ao MongoDB

### Via mongosh (terminal)

```bash
# Conectar ao Atlas (nuvem)
mongosh "mongodb+srv://cluster0.abc123.mongodb.net/meu_banco" --username aluno

# Conectar ao local (se instalou)
mongosh
# ou
mongosh "mongodb://localhost:27017"
```

### Via MongoDB Compass (interface gráfica)

1. Abrir MongoDB Compass
2. Colar a connection string
3. Clicar "Connect"
4. Interface visual para ver collections, documentos e rodar queries

---

## 5. Queries no MongoDB — CRUD Completo

### Selecionar banco

```javascript
// Mudar para o banco (cria se não existir)
use comunidade
```

### CREATE — Inserir documentos

```javascript
// Inserir 1 documento
db.tasks.insertOne({
  title: "Limpar praça",
  description: "Mutirão sábado 8h",
  status: "pendente",
  priority: "alta",
  category: "limpeza",
  assignee: "Maria",
  createdAt: new Date()
})

// Inserir vários de uma vez
db.tasks.insertMany([
  { title: "Aula de reforço", priority: "media", category: "educacao", status: "pendente" },
  { title: "Campanha de vacinação", priority: "urgente", category: "saude", status: "em_andamento" },
  { title: "Festival cultural", priority: "baixa", category: "cultura", status: "concluida" }
])
```

### READ — Buscar documentos

```javascript
// Buscar TODOS
db.tasks.find()

// Buscar todos (formatado bonitinho)
db.tasks.find().pretty()

// Buscar por campo exato
db.tasks.find({ status: "pendente" })

// Buscar por prioridade alta OU urgente
db.tasks.find({ priority: { $in: ["alta", "urgente"] } })

// Buscar com múltiplas condições (AND)
db.tasks.find({ status: "pendente", priority: "alta" })

// Buscar com OR
db.tasks.find({ $or: [{ priority: "alta" }, { priority: "urgente" }] })

// Buscar 1 só (primeiro que encontrar)
db.tasks.findOne({ title: "Limpar praça" })

// Buscar mostrando apenas alguns campos (projeção)
db.tasks.find({}, { title: 1, priority: 1, _id: 0 })

// Contar documentos
db.tasks.countDocuments({ status: "pendente" })

// Ordenar (1 = crescente, -1 = decrescente)
db.tasks.find().sort({ createdAt: -1 })

// Limitar resultados
db.tasks.find().limit(5)

// Pular + limitar (paginação)
db.tasks.find().skip(10).limit(5)  // Página 3 (itens 11-15)
```

### UPDATE — Atualizar documentos

```javascript
// Atualizar 1 documento
db.tasks.updateOne(
  { title: "Limpar praça" },           // filtro (qual documento)
  { $set: { status: "em_andamento" } } // alteração
)

// Atualizar vários de uma vez
db.tasks.updateMany(
  { status: "pendente" },
  { $set: { status: "em_andamento" } }
)

// Incrementar valor numérico
db.tasks.updateOne(
  { title: "Limpar praça" },
  { $inc: { views: 1 } }  // incrementa campo 'views' em 1
)

// Adicionar item a um array
db.tasks.updateOne(
  { title: "Festival cultural" },
  { $push: { tags: "comunidade" } }
)

// Substituir documento inteiro
db.tasks.replaceOne(
  { title: "Limpar praça" },
  { title: "Limpar praça central", status: "concluida", priority: "alta" }
)
```

### DELETE — Remover documentos

```javascript
// Remover 1
db.tasks.deleteOne({ title: "Festival cultural" })

// Remover vários
db.tasks.deleteMany({ status: "concluida" })

// Remover TODOS (cuidado!)
db.tasks.deleteMany({})

// Dropar collection inteira
db.tasks.drop()
```

### Operadores de Comparação

| Operador | Significado | Exemplo |
|----------|-------------|---------|
| `$eq` | Igual | `{ age: { $eq: 25 } }` |
| `$ne` | Diferente | `{ status: { $ne: "concluida" } }` |
| `$gt` | Maior que | `{ price: { $gt: 100 } }` |
| `$gte` | Maior ou igual | `{ age: { $gte: 18 } }` |
| `$lt` | Menor que | `{ stock: { $lt: 5 } }` |
| `$lte` | Menor ou igual | `{ rating: { $lte: 3 } }` |
| `$in` | Está na lista | `{ priority: { $in: ["alta","urgente"] } }` |
| `$nin` | NÃO está na lista | `{ status: { $nin: ["concluida"] } }` |
| `$exists` | Campo existe? | `{ email: { $exists: true } }` |
| `$regex` | Busca por padrão | `{ title: { $regex: /praça/i } }` |

### Aggregation Pipeline (Relatórios)

```javascript
// Contar tarefas por status
db.tasks.aggregate([
  { $group: { _id: "$status", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
// Resultado: [{ _id: "pendente", total: 10 }, { _id: "concluida", total: 5 }, ...]

// Média de tarefas por categoria
db.tasks.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 3 }
])
```

---

## 6. Usar MongoDB com Node.js (no código)

### Com Mongoose (recomendado para projetos)

```javascript
const mongoose = require('mongoose');

// Conectar
await mongoose.connect('mongodb+srv://aluno:senha@cluster0.../meu_banco');

// Definir Schema
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['pendente', 'em_andamento', 'concluida'] },
});

const Task = mongoose.model('Task', TaskSchema);

// CRUD
const task = await Task.create({ title: "Nova tarefa", status: "pendente" });
const all = await Task.find({ status: "pendente" });
await Task.findByIdAndUpdate(id, { status: "concluida" });
await Task.findByIdAndDelete(id);
```

### Com driver nativo (sem Mongoose)

```javascript
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://...');

await client.connect();
const db = client.db('meu_banco');
const collection = db.collection('tasks');

await collection.insertOne({ title: "Teste" });
const docs = await collection.find({}).toArray();
```

---

## 7. Erros Comuns e Soluções

| Erro | Causa | Solução |
|------|-------|---------|
| `MongoServerError: bad auth` | Senha errada na URI | Verificar user/password no Atlas → Database Access |
| `MongoNetworkError: connect ECONNREFUSED` | IP não liberado | Atlas → Network Access → Add IP (ou 0.0.0.0/0) |
| `mongosh: command not found` | Não instalou ou PATH errado | Reinstalar mongosh ou adicionar ao PATH |
| Banco vazio após insert | Usando banco errado | Verificar com `db` qual banco está selecionado |
| `E11000 duplicate key error` | ID duplicado | Não passar `_id` manualmente (MongoDB gera sozinho) |
