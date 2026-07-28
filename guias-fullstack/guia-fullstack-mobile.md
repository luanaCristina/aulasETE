# 📱 Guia Fullstack — App Mobile com Expo + API Node.js + MongoDB

> **Projeto:** "ComUnidade" — Gestão de Tarefas Comunitárias  
> **Stack:** React Native (Expo) + Node.js/Express + MongoDB Atlas  
> **Nível:** Intermediário | **Tempo:** 4-6 semanas de construção

---

## 1. 🌐 Web Tradicional vs. Mobile com Expo

### O que muda entre web e mobile?

No **web tradicional**, você escreve HTML com tags como `<div>`, `<p>`, `<img>` e estiliza com CSS em arquivos separados. No **React Native com Expo**, você usa componentes nativos como `<View>`, `<Text>`, `<Image>` e estiliza com JavaScript (StyleSheet).

A **lógica é a mesma**. Só muda a "casca" (sintaxe dos componentes).

---

### Tabela de Equivalência: Web ↔ React Native

| Web (HTML/CSS) | React Native (Expo) | Para que serve |
|---|---|---|
| `<div>` | `<View>` | Container / caixa |
| `<p>`, `<span>`, `<h1>` | `<Text>` | Texto (todo texto vai dentro de Text) |
| `<img src="...">` | `<Image source={{uri: '...'}}/>` | Imagens |
| `<button>` | `<TouchableOpacity>` ou `<Pressable>` | Botão clicável |
| `<input type="text">` | `<TextInput>` | Campo de entrada |
| `<ul><li>` | `<FlatList>` | Lista de itens |
| `<a href="">` | Navegação (React Navigation) | Links/páginas |
| CSS externo (`.css`) | `StyleSheet.create({})` | Estilização |
| `class="container"` | `style={styles.container}` | Aplicar estilo |
| Flexbox (`display: flex`) | Flexbox (padrão! Não precisa declarar) | Layout |
| `@media (min-width)` | `Dimensions` / `useWindowDimensions` | Responsividade |

---

### Exemplo Visual: Mesmo Card em Web vs Mobile

**Web (HTML/CSS):**
```html
<div class="card">
  <h3>Limpar praça</h3>
  <p>Mutirão sábado 8h</p>
  <span class="tag tag-urgente">Urgente</span>
</div>
```
```css
.card { padding: 16px; border-radius: 12px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.tag-urgente { background: #FF6B6B; color: #fff; padding: 4px 8px; border-radius: 8px; }
```

**React Native (Expo):**
```jsx
<View style={styles.card}>
  <Text style={styles.title}>Limpar praça</Text>
  <Text style={styles.subtitle}>Mutirão sábado 8h</Text>
  <View style={styles.tagUrgente}>
    <Text style={styles.tagText}>Urgente</Text>
  </View>
</View>
```
```javascript
const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 12, backgroundColor: '#fff', elevation: 3 },
  tagUrgente: { backgroundColor: '#FF6B6B', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  tagText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});
```

**Conclusão:** A estrutura é a MESMA — container com título, descrição e badge. Só muda a sintaxe.

---

## 2. 🏗️ Arquitetura do Projeto

```
┌─────────────────────┐       HTTP/JSON       ┌─────────────────────┐       MongoDB Driver      ┌──────────────────┐
│    📱 MOBILE APP     │ ◄──────────────────► │    🖥️ API REST       │ ◄────────────────────► │   🍃 MONGODB     │
│  React Native/Expo  │   fetch / axios       │   Node.js/Express   │    mongoose / driver    │   Atlas (Cloud)  │
│                     │                       │                     │                         │                  │
│  Telas:             │                       │  Endpoints:         │                         │  Collections:    │
│  • Lista de Tarefas │  GET /api/tasks  ───► │  • GET /api/tasks   │  ──► db.tasks.find()    │  • tasks         │
│  • Criar Tarefa     │  POST /api/tasks ───► │  • POST /api/tasks  │  ──► db.tasks.insert()  │  • users         │
│  • Editar / Deletar │  PUT/DELETE ─────────► │  • PUT / DELETE     │  ──► db.tasks.update()  │                  │
└─────────────────────┘                       └─────────────────────┘                         └──────────────────┘
```

---

## 3. 🔧 Construção do Back-End (API)

### 3.1 Setup Inicial

```bash
# Criar pasta do projeto
mkdir comunidade-api && cd comunidade-api

# Iniciar projeto Node.js
npm init -y

# Instalar dependências
npm install express mongoose cors dotenv
npm install -D nodemon
```

### 3.2 Estrutura de Pastas

```
comunidade-api/
├── src/
│   ├── server.js          ← Entry point
│   ├── app.js             ← Express config
│   ├── config/
│   │   └── database.js    ← Conexão MongoDB
│   ├── models/
│   │   └── Task.js        ← Schema da tarefa
│   └── routes/
│       └── taskRoutes.js  ← Endpoints CRUD
├── .env                   ← Variáveis (NÃO commitar!)
├── .gitignore
└── package.json
```

### 3.3 package.json (scripts)

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

### 3.4 .env

```
MONGODB_URI=mongodb+srv://SEU_USER:SUA_SENHA@cluster0.xxxxx.mongodb.net/comunidade?retryWrites=true&w=majority
PORT=3000
```

### 3.5 .gitignore

```
node_modules/
.env
```

### 3.6 Código da API (completo e comentado)

**src/config/database.js**
```javascript
// Conexão com MongoDB Atlas
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🍃 MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar no MongoDB:', error.message);
    process.exit(1); // Encerra se não conectar
  }
}

module.exports = connectDB;
```

**src/models/Task.js**
```javascript
// Schema da Tarefa — define a estrutura do documento no MongoDB
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  status: {
    type: String,
    enum: ['pendente', 'em_andamento', 'concluida'],
    default: 'pendente',
  },
  priority: {
    type: String,
    enum: ['baixa', 'media', 'alta', 'urgente'],
    default: 'media',
  },
  category: {
    type: String,
    enum: ['limpeza', 'educacao', 'saude', 'cultura', 'infraestrutura'],
    default: 'infraestrutura',
  },
  assignee: { type: String, trim: true },
  dueDate: { type: Date },
}, {
  timestamps: true, // Cria createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Task', taskSchema);
```

**src/routes/taskRoutes.js**
```javascript
// Rotas CRUD completas para tarefas
const { Router } = require('express');
const Task = require('../models/Task');

const router = Router();

// GET /api/tasks — Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/tasks — Criar nova tarefa
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /api/tasks/:id — Atualizar tarefa
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.id, req.body, {
      new: true,           // Retorna o documento atualizado
      runValidators: true, // Valida os dados
    });
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/tasks/:id — Deletar tarefa
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /api/tasks/:id/status — Mover tarefa de status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
```

**src/app.js**
```javascript
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());              // Permite requisições do mobile
app.use(express.json());      // Parse JSON no body

// Rotas
app.get('/', (req, res) => res.json({ app: 'ComUnidade API', status: 'online' }));
app.use('/api/tasks', taskRoutes);

module.exports = app;
```

**src/server.js**
```javascript
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;

// Conectar ao banco e iniciar servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 ComUnidade API rodando em http://localhost:${PORT}`);
  });
});
```

### 3.7 Testar a API

```bash
npm run dev
# 🍃 MongoDB conectado com sucesso!
# 🚀 ComUnidade API rodando em http://localhost:3000

# Testar com curl:
curl http://localhost:3000/api/tasks

# Criar tarefa:
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Limpar praça","priority":"alta","category":"limpeza"}'
```

---

## 4. 📱 Construção do App Mobile (Expo)

### 4.1 Setup

```bash
# Criar projeto Expo
npx create-expo-app comunidade-app --template blank
cd comunidade-app

# Instalar dependências
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npm install axios
```

### 4.2 Estrutura

```
comunidade-app/
├── App.js                 ← Entry point + navegação
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js      ← Lista de tarefas
│   │   └── CreateTaskScreen.js ← Formulário de criação
│   ├── components/
│   │   └── TaskCard.js        ← Card colorido de tarefa
│   └── services/
│       └── api.js             ← Configuração do axios
├── app.json
└── package.json
```

### 4.3 src/services/api.js

```javascript
// Conexão com a API — trocar IP quando testar no celular!
import axios from 'axios';

const api = axios.create({
  // No emulador Android: http://10.0.2.2:3000
  // No celular físico: usar IP da sua máquina (ex: http://192.168.1.100:3000)
  // No web: http://localhost:3000
  baseURL: 'http://192.168.1.100:3000/api',
  timeout: 10000,
});

export default api;
```

### 4.4 src/components/TaskCard.js

```jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Cores por prioridade — visual atraente!
const PRIORITY_COLORS = {
  baixa: '#4ECDC4',    // Verde-água
  media: '#FFD166',    // Amarelo
  alta: '#FF6B6B',     // Vermelho claro
  urgente: '#C44569',  // Vermelho escuro
};

const STATUS_LABELS = {
  pendente: '⏳ Pendente',
  em_andamento: '🔨 Em Andamento',
  concluida: '✅ Concluída',
};

export default function TaskCard({ task, onPress, onDelete }) {
  const priorityColor = PRIORITY_COLORS[task.priority] || '#999';

  return (
    <TouchableOpacity style={[styles.card, { borderLeftColor: priorityColor }]} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={[styles.priorityBadge, { backgroundColor: priorityColor }]}>
          <Text style={styles.priorityText}>{task.priority}</Text>
        </View>
      </View>

      {task.description && <Text style={styles.description}>{task.description}</Text>}

      <View style={styles.footer}>
        <Text style={styles.status}>{STATUS_LABELS[task.status]}</Text>
        <Text style={styles.category}>📂 {task.category}</Text>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(task._id)}>
        <Text style={styles.deleteTxt}>🗑️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#2D3436', flex: 1 },
  priorityBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  priorityText: { color: '#fff', fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase' },
  description: { color: '#636E72', marginTop: 8, fontSize: 14 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  status: { fontSize: 13, color: '#6C5CE7' },
  category: { fontSize: 12, color: '#999' },
  deleteBtn: { position: 'absolute', top: 12, right: 12 },
  deleteTxt: { fontSize: 18 },
});
```

### 4.5 src/screens/HomeScreen.js

```jsx
import { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, RefreshControl, Alert } from 'react-native';
import api from '../services/api';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTasks(); }, []);

  // Atualizar ao voltar da tela de criação
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchTasks);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    Alert.alert('Confirmar', 'Deseja remover esta tarefa?', [
      { text: 'Cancelar' },
      { text: 'Remover', style: 'destructive', onPress: async () => {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      }},
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏘️ ComUnidade</Text>
      <Text style={styles.subtitle}>{tasks.length} tarefa(s) da comunidade</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskCard task={item} onDelete={handleDelete} />
        )}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchTasks} />}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa ainda. Crie a primeira! 🎯</Text>}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('CreateTask')}>
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 16, paddingTop: 60 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#6C5CE7' },
  subtitle: { color: '#999', marginBottom: 16 },
  empty: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 16 },
  fab: { position: 'absolute', bottom: 24, right: 24, width: 56, height: 56, borderRadius: 28, backgroundColor: '#6C5CE7', justifyContent: 'center', alignItems: 'center', elevation: 6 },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 30 },
});
```

### 4.6 Rodar no Celular

```bash
# Iniciar o Expo
npx expo start

# Aparece um QR Code no terminal!
# 1. Baixe "Expo Go" no celular (Play Store ou App Store)
# 2. Escaneie o QR Code com a câmera
# 3. O app abre no celular em tempo real!
# 4. Toda alteração no código atualiza automaticamente 🔥
```

---

## 5. 📦 Versionamento Profissional no GitHub

### Passo a Passo (Terminal do VS Code)

```bash
# 1. Inicializar Git
git init

# 2. Criar .gitignore (ANTES do primeiro commit!)
echo "node_modules/\n.env\n.expo/\ndist/" > .gitignore

# 3. Primeiro commit
git add .
git commit -m "feat: setup inicial do projeto com Express + Mongoose"

# 4. Criar repositório no GitHub (via CLI)
# Instalar GitHub CLI: https://cli.github.com/
gh repo create comunidade-api --public --source=. --push

# OU manualmente:
git remote add origin https://github.com/SEU_USER/comunidade-api.git
git branch -M main
git push -u origin main
```

### Commits Semânticos (Padrão de mercado)

| Prefixo | Quando usar | Exemplo |
|---------|-------------|---------|
| `feat:` | Nova funcionalidade | `feat: adicionar endpoint de criação de tarefa` |
| `fix:` | Correção de bug | `fix: corrigir validação de data no agendamento` |
| `style:` | Formatação/visual | `style: ajustar cores dos cards de prioridade` |
| `refactor:` | Refatoração sem mudar comportamento | `refactor: extrair lógica de validação para service` |
| `docs:` | Documentação | `docs: adicionar README com instruções de setup` |
| `test:` | Testes | `test: adicionar testes unitários para TaskService` |

---

## 6. ☁️ Deploy Gratuito

### API no Render (render.com)

1. Criar conta em render.com (login com GitHub)
2. "New" → "Web Service" → conectar repositório
3. Configurar: Build = `npm install`, Start = `node src/server.js`
4. Adicionar variável `MONGODB_URI` nos Environment Variables
5. Deploy automático a cada push! 🚀

### MongoDB Atlas (mongo gratuito na nuvem)

1. Acesse mongodb.com/atlas → criar conta → "Create Cluster" (FREE M0)
2. Configurar usuário e senha do banco
3. Network Access → "Allow from anywhere" (0.0.0.0/0)
4. Copiar a connection string → colocar no .env

---

## 7. 🔄 Portabilidade de Linguagens

### A mesma lógica em 3 linguagens

A lógica de um endpoint de API é IDÊNTICA em qualquer linguagem:

**JavaScript (Express):**
```javascript
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  if (tasks.length === 0) {
    return res.status(404).json({ message: 'Nenhuma tarefa' });
  }
  res.json(tasks);
});
```

**Python (FastAPI):**
```python
@app.get("/api/tasks")
async def get_tasks():
    tasks = await db.tasks.find().to_list(100)
    if len(tasks) == 0:
        raise HTTPException(404, "Nenhuma tarefa")
    return tasks
```

**Java (Spring Boot):**
```java
@GetMapping("/api/tasks")
public ResponseEntity<List<Task>> getTasks() {
    List<Task> tasks = taskRepository.findAll();
    if (tasks.isEmpty()) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(tasks);
}
```

### O que é igual nas 3?
1. ✅ Rota GET com path `/api/tasks`
2. ✅ Buscar dados no banco
3. ✅ Verificar se está vazio (if)
4. ✅ Retornar JSON com status code

**A lógica é universal. A sintaxe muda. Aprenda a PENSAR, não a decorar.**

---

### Quadro: if/else em 4 linguagens

| Linguagem | Sintaxe |
|-----------|---------|
| **JavaScript** | `if (x > 10) { ... } else { ... }` |
| **Python** | `if x > 10:` (indent) `else:` (indent) |
| **Java/C#** | `if (x > 10) { ... } else { ... }` |
| **Go** | `if x > 10 { ... } else { ... }` (sem parênteses) |

> 💡 Percebeu? A lógica é SEMPRE "se condição, faça isso, senão, faça aquilo". Isso é **pensamento computacional** — a habilidade mais importante de um dev.

---

## 🏆 Resumo Final

```
Vocês agora sabem:
✅ Criar uma API REST com Node.js + MongoDB (back-end)
✅ Criar um app mobile com Expo (front-end)
✅ Conectar mobile ↔ API via HTTP/JSON
✅ Versionar com Git + GitHub (profissional)
✅ Fazer deploy gratuito na nuvem
✅ Que a lógica é universal entre linguagens

Isso é o que um DEV JÚNIOR faz no dia a dia.
Vocês já estão fazendo. 🚀
```
