# 🍃 MANUAL INTEGRAL DE DESENVOLVIMENTO WEB FULL-STACK (STACK MERN)

**Prof. Dr. em Ciência da Computação — Especialista em Desenvolvimento Web e Arquitetura NoSQL**

---

## 🎯 NOTA DE BOAS-VINDAS E MIGRACÃO DE PARADIGMA

Seja bem-vindo(a) a esta versão atualizada do nosso curso! Aqui, transicionamos do paradigma relacional (SQL) para a **Arquitetura Orientada a Documentos (NoSQL)** utilizando o **MongoDB** com o **Mongoose** no ecossistema Node.js (Stack MERN/MEAN).

Substituir o MySQL pelo MongoDB não é apenas trocar os comandos `SELECT` ou `INSERT`; é alterar fundamentalmente **como modelamos dados**. No lugar de tabelas rígidas com linhas e colunas unidas por `JOINs`, trabalhamos com **Coleções (*Collections*)** e **Documentos BSON/JSON** dinâmicos e altamente escaláveis.

---

# MÓDULO 1: Fundamentos da Web e Preparação do Ambiente

---

## 1.1 História da Web e Arquitetura Cliente-Servidor no Ecossistema NoSQL

### 1. 📖 Explicação Expositiva e Detalhada

Na arquitetura moderna com MongoDB, o fluxo de comunicação web ganha fluidez natural, pois os dados trafegam no formato **JSON** do banco até o front-end, sem a necessidade de conversões complexas (*Object-Relational Impedance Mismatch*).

1. **Arquitetura Cliente-Servidor com NoSQL:** O cliente faz requisições HTTP REST; o servidor Node.js/Express processa a lógica usando o **Mongoose** (ODM - *Object Document Mapper*) e grava ou lê documentos no formato BSON (*Binary JSON*) no MongoDB.
2. **Ciclo de Requisição/Resposta (JSON End-to-End):**
* **Request:** O navegador envia um objeto JSON no corpo da requisição `POST /api/pokemons`.
* **Processamento:** O Mongoose valida esse objeto contra um **Schema** estruturado em JavaScript e o grava diretamente como um Documento no MongoDB.
* **Response:** O MongoDB retorna o documento gravado com uma chave primária padrão chamada `_id` (do tipo `ObjectId`), que é enviada diretamente ao cliente como JSON.



```
 [ CLIENTE (Navegador) ]                              [ SERVIDOR (Node.js + Express) ]
           │                                                        │
           │──── 1. HTTP Request (GET /api/pokemons) ──────────────>│
           │                                                        │ (Mongoose ODM)
           │<─── 2. HTTP Response (JSON direto da Coleção) ─────────│
                                                                    │
                                                           [ MONGO DB (Coleções NoSQL) ]

```

---

## 1.2 Mapeamento de Conceitos: MySQL vs. MongoDB

Para consolidar a migração do seu raciocínio técnico, observe a equivalência de conceitos entre os dois paradigmas:

| Conceito Relacional (MySQL) | Conceito NoSQL (MongoDB) | Descrição no MongoDB |
| --- | --- | --- |
| **Banco de Dados (Database)** | **Banco de Dados (Database)** | O repositório lógico de armazenamento. |
| **Tabela (Table)** | **Coleção (Collection)** | Agrupamento de documentos relacionados. |
| **Linha / Registro (Row)** | **Documento (Document)** | Um registro individual armazenado em estrutura BSON/JSON. |
| **Coluna (Column)** | **Campo (Field)** | Par Chave/Valor dentro de um documento. |
| **Chave Primária (PRIMARY KEY)** | **Campo `_id` (`ObjectId`)** | Identificador único de 12 bytes gerado automaticamente. |
| **Chave Estrangeira (FOREIGN KEY)** | **Referência (`ref`) ou Documento Embutido** | Associação via `ObjectId` ou aninhamento de objetos. |
| **SGBD SQL / Joins** | **Mongoose ODM / Populate** | Mapeamento de objetos em JS e povoamento de referências. |

---

# MÓDULO 2: Estruturação Web com HTML5

---

## 2.1 Tags Semânticas e Formulários

A camada de interface HTML5 permanece idêntica na sua estrutura semântica, mas a interação via formulários agora consome a API REST enviando e recebendo dados diretamente como estruturas de objetos flexíveis.

```html
<!-- Formulário HTML5 pronto para integração via Fetch/JSON -->
<form id="form-cadastro-treinador">
  <div class="mb-3">
    <label for="nome" class="form-label">Nome do Treinador:</label>
    <input type="text" id="nome" name="nome" class="form-control" required placeholder="Ex: Ash Ketchum">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">E-mail:</label>
    <input type="email" id="email" name="email" class="form-control" required placeholder="treinador@pallet.com">
  </div>
  <div class="mb-3">
    <label for="senha" class="form-label">Senha:</label>
    <input type="password" id="senha" name="senha" class="form-control" required minlength="6">
  </div>
  <button type="submit" class="btn btn-danger w-100">Criar Conta no MongoDB</button>
</form>

```

---

# MÓDULO 3: Estilização e Design com CSS3 e Bootstrap 5

---

## 3.1 Layout Responsivo e Cards Dinâmicos com Bootstrap 5

A estilização responsiva atua como a camada de apresentação. A grade do Bootstrap 5 renderizará dinamicamente os **Documentos da Coleção do MongoDB** convertidos em cards interativos.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon Trading App - Stack MERN</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">🍃 Pokémon Trader (MongoDB Edition)</a>
    </div>
  </nav>

  <main class="container my-5">
    <h2 class="mb-4">Coleção vinda do MongoDB</h2>
    <div class="row g-4" id="grid-pokemons">
      <!-- Cards serão injetados dinamicamente via JS/Fetch -->
    </div>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

```

---

# MÓDULO 4: Projeto Full-Stack Gamificado — "Pokémon Trading App" (Edição MongoDB)

Construiremos agora o ecossistema completo utilizando **MongoDB (com Mongoose)**, **Node.js/Express**, **Sessões** e o **Front-end com Vanilla JS**.

---

## 4.1 Modelagem NoSQL com Mongoose Schemas

No MongoDB, em vez de comandos SQL `CREATE TABLE`, definimos **Schemas** no Mongoose. Eles garantem validação de tipos, valores padrão e integridade no nível da aplicação em JavaScript.

#### Estrutura do Projeto Node.js/MongoDB:

```
/pokemon-app-mongodb
  ├── package.json
  ├── server.js               <-- Servidor Express e Rotas da API
  ├── /config
  │     └── db.js             <-- Conexão com o MongoDB Atlas / Local
  ├── /models
  │     ├── Usuario.js        <-- Schema/Modelo da Coleção 'usuarios'
  │     ├── Pokemon.js        <-- Schema/Modelo da Coleção 'pokemons'
  │     └── Troca.js          <-- Schema/Modelo da Coleção 'trocas'
  └── /public
        ├── index.html
        └── app.js            <-- Consumo da API REST no Client-side

```

---

### 💻 Código dos Modelos (Schemas) em Mongoose

#### 1. Modelo de Usuário (`models/Usuario.js`)

```javascript
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  senha: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

```

#### 2. Modelo de Pokémon (`models/Pokemon.js`)

```javascript
const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  // Referência relacional ao ID do Usuário (Documento Pai)
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  nivel: { type: Number, default: 1 },
  ataque: { type: Number, required: true },
  hp: { type: Number, required: true },
  spriteUrl: { type: String, required: true }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);

```

#### 3. Modelo de Troca (`models/Troca.js`)

```javascript
const mongoose = require('mongoose');

const TrocaSchema = new mongoose.Schema({
  pokemonOfertado: { type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon', required: true },
  pokemonDesejado: { type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon', required: true },
  status: { type: String, enum: ['PENDENTE', 'ACEITA', 'RECUSADA'], default: 'PENDENTE' },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Troca', TrocaSchema);

```

---

## 4.2 Conexão com o MongoDB (`config/db.js`)

```javascript
const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    // String de Conexão com Banco Local ou MongoDB Atlas
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/pokemon_trading_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`🍃 MongoDB Conectado: ${conn.connection.host}`);
  } catch (erro) {
    console.error(`❌ Erro na conexão com o MongoDB: ${erro.message}`);
    process.exit(1);
  }
};

module.exports = conectarDB;

```

---

## 4.3 Back-End Completo em Node.js / Express com Mongoose (`server.js`)

```javascript
const express = require('express');
const session = require('express-session');
const path = require('path');
const conectarDB = require('./config/db');

// Importação dos Modelos Mongoose
const Usuario = require('./models/Usuario');
const Pokemon = require('./models/Pokemon');
const Troca = require('./models/Troca');

const app = express();
const PORT = 3000;

// Inicializa a Conexão com o MongoDB
conectarDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuração de Sessão
app.use(session({
  secret: 'chave_secreta_mongodb_pokemon_2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

// Middleware de Autenticação
function autenticarSessao(req, res, next) {
  if (req.session && req.session.usuarioId) {
    return next();
  }
  return res.status(401).json({ erro: 'Acesso negado. Faça login.' });
}

// Lista Inicial para Sorteio
const POKEMONS_INICIAIS = [
  { nome: 'Bulbasaur', tipo: 'Planta', ataque: 49, hp: 45, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { nome: 'Charmander', tipo: 'Fogo', ataque: 52, hp: 39, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { nome: 'Squirtle', tipo: 'Água', ataque: 48, hp: 44, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { nome: 'Pikachu', tipo: 'Elétrico', ataque: 55, hp: 35, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }
];

// ============================================================================
// 1. AUTENTICAÇÃO E REGRA DE NEGÓCIO (SORTEIO COM TRANSAÇÃO ACID NO MONGO)
// ============================================================================

// POST /api/cadastrar - Cria conta e insere 3 Pokémons na Coleção
app.post('/api/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  // Abre uma Sessão de Transação Mongoose (ACID em MongoDB)
  const sessionMongo = await Usuario.startSession();
  sessionMongo.startTransaction();

  try {
    // 1. Cria o Usuário no MongoDB
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save({ session: sessionMongo });

    // 2. Sorteia 3 Pokémons Aleatórios
    const sorteados = [...POKEMONS_INICIAIS].sort(() => 0.5 - Math.random()).slice(0, 3);

    // 3. Prepara os documentos vinculando o ObjectId do novo Usuário
    const documentosPokemons = sorteados.map(poke => ({
      usuario: novoUsuario._id,
      nome: poke.nome,
      tipo: poke.tipo,
      nivel: 1,
      ataque: poke.ataque,
      hp: poke.hp,
      spriteUrl: poke.spriteUrl
    }));

    // Insere múltiplos documentos em lote no MongoDB
    await Pokemon.insertMany(documentosPokemons, { session: sessionMongo });

    // Efetiva a transação
    await sessionMongo.commitTransaction();
    sessionMongo.endSession();

    res.status(201).json({ mensagem: 'Treinador e Pokémons criados com sucesso no MongoDB!' });

  } catch (erro) {
    await sessionMongo.abortTransaction();
    sessionMongo.endSession();

    if (erro.code === 11000) { // Código de Entrada Duplicada (Unique Email)
      return res.status(400).json({ erro: 'E-mail já cadastrado.' });
    }
    res.status(500).json({ erro: 'Erro ao criar conta no servidor.' });
  }
});

// POST /api/login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email, senha });

    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    req.session.usuarioId = usuario._id; // Salva o ObjectId na Sessão
    req.session.usuarioNome = usuario.nome;

    res.json({ mensagem: 'Login com sucesso!', usuario: { id: usuario._id, nome: usuario.nome } });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro no login.' });
  }
});

// ============================================================================
// 2. CRUD COMPLETO DE CARDS COM MONGOOSE
// ============================================================================

// READ: GET /api/meus-pokemons
app.get('/api/meus-pokemons', autenticarSessao, async (req, res) => {
  try {
    // Busca documentos filtrando pela chave do usuário
    const pokemons = await Pokemon.find({ usuario: req.session.usuarioId }).sort({ _id: -1 });
    res.json(pokemons);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar Pokémons no MongoDB.' });
  }
});

// CREATE: POST /api/pokemons
app.post('/api/pokemons', autenticarSessao, async (req, res) => {
  const { nome, tipo, nivel, ataque, hp, spriteUrl } = req.body;

  try {
    const novoPokemon = new Pokemon({
      usuario: req.session.usuarioId,
      nome,
      tipo,
      nivel: nivel || 1,
      ataque,
      hp,
      spriteUrl
    });

    await novoPokemon.save();
    res.status(201).json({ mensagem: 'Card salvo no MongoDB!', pokemon: novoPokemon });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar documento do Pokémon.' });
  }
});

// UPDATE: PUT /api/pokemons/:id
app.put('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;
  const { nivel, ataque, hp } = req.body;

  try {
    // Garante atualização apenas se o id do documento bater E o usuario bater
    const pokemonAtualizado = await Pokemon.findOneAndUpdate(
      { _id: id, usuario: req.session.usuarioId },
      { $set: { nivel, ataque, hp } },
      { new: true } // Retorna o documento já atualizado
    );

    if (!pokemonAtualizado) {
      return res.status(403).json({ erro: 'Operação não permitida ou card inexistente.' });
    }

    res.json({ mensagem: 'Pokémon atualizado com sucesso!', pokemon: pokemonAtualizado });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar Pokémon.' });
  }
});

// DELETE: DELETE /api/pokemons/:id
app.delete('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await Pokemon.findOneAndDelete({ _id: id, usuario: req.session.usuarioId });

    if (!resultado) {
      return res.status(403).json({ erro: 'Operação não permitida.' });
    }

    res.json({ mensagem: 'Pokémon deletado do MongoDB!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao deletar documento.' });
  }
});

// ============================================================================
// 3. MÓDULO DE TROCA DE CARDS ENTRE USUÁRIOS (MONGOOSE TROCA DE PROPRIEDADE)
// ============================================================================

// POST /api/trocas/aceitar/:id - Troca de donos via MongoDB
app.post('/api/trocas/aceitar/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;

  try {
    const troca = await Troca.findById(id);
    if (!troca || troca.status !== 'PENDENTE') {
      return res.status(404).json({ erro: 'Proposta inválida.' });
    }

    // Busca os dois documentos de Pokémons
    const pokeOfertado = await Pokemon.findById(troca.pokemonOfertado);
    const pokeDesejado = await Pokemon.findById(troca.pokemonDesejado);

    // Inverte os donos (substitui os ObjectIds dos usuários)
    const donoTemporario = pokeOfertado.usuario;
    pokeOfertado.usuario = pokeDesejado.usuario;
    pokeDesejado.usuario = donoTemporario;

    // Salva as alterações nos documentos
    await pokeOfertado.save();
    await pokeDesejado.save();

    troca.status = 'ACEITA';
    await troca.save();

    res.json({ mensagem: 'Troca realizada no MongoDB com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Falha ao concluir troca.' });
  }
});

// Inicialização
app.listen(PORT, () => {
  console.log(`🚀 Servidor MERN App rodando em http://localhost:${PORT}`);
});

```

---

## 4.4 Front-End Interativo com Manipulação de Objetos MongoDB (`public/app.js`)

A única mudança no JavaScript do cliente é adaptar o acesso à Chave Primária do MongoDB, trocando `poke.id` por `poke._id`:

```javascript
// public/app.js - Ajustado para Chaves ObjectId (_id) do MongoDB

document.addEventListener('DOMContentLoaded', carregarMeusPokemons);

async function carregarMeusPokemons() {
  const containerGrid = document.getElementById('grid-pokemons');

  try {
    const resposta = await fetch('/api/meus-pokemons');
    if (!resposta.ok) return;

    const pokemons = await resposta.json();
    containerGrid.innerHTML = '';

    pokemons.forEach(poke => {
      // IMPORTANTE: Mapeamos o campo do MongoDB `poke._id`
      const colHTML = `
        <div class="col-12 col-md-6 col-lg-4" id="card-pokemon-${poke._id}">
          <div class="card pokemon-card text-center h-100 shadow-sm border-0">
            <div class="card-header bg-white border-0 pt-3">
              <span class="badge bg-success rounded-pill px-3 py-2">${poke.tipo}</span>
            </div>
            <img src="${poke.spriteUrl}" class="card-img-top mt-2" alt="${poke.nome}">
            <div class="card-body">
              <h5 class="card-title fw-bold">${poke.nome}</h5>
              <p class="card-text text-muted mb-1">Nível: ${poke.nivel}</p>
              <small><strong>Ataque:</strong> ${poke.ataque} | <strong>HP:</strong> ${poke.hp}</small>
            </div>
            <div class="card-footer bg-white border-0 pb-3 d-flex justify-content-center gap-2">
              <button class="btn btn-success btn-sm" onclick="subirNivel('${poke._id}', ${poke.nivel}, ${poke.ataque}, ${poke.hp})">⚡ Treinar</button>
              <button class="btn btn-outline-danger btn-sm" onclick="liberarPokemon('${poke._id}')">🗑️ Soltar</button>
            </div>
          </div>
        </div>
      `;
      containerGrid.innerHTML += colHTML;
    });
  } catch (erro) {
    console.error('Erro ao renderizar dados do MongoDB:', erro);
  }
}

async function subirNivel(id, nivelAtual, ataqueAtual, hpAtual) {
  try {
    const resposta = await fetch(`/api/pokemons/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nivel: nivelAtual + 1, ataque: ataqueAtual + 5, hp: hpAtual + 10 })
    });

    if (resposta.ok) carregarMeusPokemons();
  } catch (erro) {
    console.error('Erro ao treinar:', erro);
  }
}

async function liberarPokemon(id) {
  if (!confirm('Deseja soltar este documento do MongoDB?')) return;

  try {
    const resposta = await fetch(`/api/pokemons/${id}`, { method: 'DELETE' });
    if (resposta.ok) {
      document.getElementById(`card-pokemon-${id}`).remove();
    }
  } catch (erro) {
    console.error('Erro ao deletar:', erro);
  }
}

```

---

### 5. ✏️ Exercício Prático Dirigido (MongoDB + Mongoose)

Crie uma nova rota no servidor Express (`GET /api/pokemons/busca?tipo=Fogo`) que realize uma busca avançada por tipo no MongoDB e utilize o método `.populate('usuario', 'nome email')` para retornar na mesma resposta o nome e e-mail do treinador dono de cada card.

---

### 6. ✅ Resposta e Explicação Passo a Passo

#### A) Código da Rota no Node.js (`server.js`):

```javascript
// GET /api/pokemons/busca - Busca por Filtro com Povoamento de Referência
app.get('/api/pokemons/busca', async (req, res) => {
  const { tipo } = req.query;

  try {
    // 1. Cria o filtro dinâmico
    const filtro = {};
    if (tipo) {
      filtro.tipo = new RegExp(tipo, 'i'); // Busca Case-Insensitive (Regex)
    }

    // 2. Executa a busca no MongoDB e aplica o .populate()
    const pokemonsEncontrados = await Pokemon.find(filtro)
      .populate('usuario', 'nome email -_id') // Trás nome e e-mail do Usuário associado
      .exec();

    res.json(pokemonsEncontrados);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao realizar busca avançada no MongoDB.' });
  }
});

```

#### B) Passo a Passo da Lógica Implementada:

1. **Filtro com Expressão Regular (Regex):** A instrução `new RegExp(tipo, 'i')` permite buscar tipos de Pokémons ignorando diferenças entre maiúsculas e minúsculas (ex: "fogo" acha "Fogo").
2. **O Poder do `.populate()` no Mongoose:** Como o MongoDB não possui `JOINs` relacionais nativos como o MySQL, o Mongoose abstrai essa operação. O método `.populate('usuario', 'nome email -_id')` lê a referência `ObjectId` gravada no campo `usuario` da coleção de Pokémons, vai até a coleção de `usuarios` e injeta os campos `nome` e `email` diretamente dentro do documento JSON de resposta.
3. **Desempenho no NoSQL:** Essa técnica entrega a flexibilidade dos documentos com a capacidade de vincular dados entre coleções de forma performática.

---