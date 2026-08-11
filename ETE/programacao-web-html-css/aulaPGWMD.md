# 🌐 MANUAL INTEGRAL DE DESENVOLVIMENTO WEB FULL-STACK (STACK MERN)

**Prof. Dr. em Ciência da Computação — Especialista em Desenvolvimento Web e Arquitetura NoSQL**

---

## 🎯 NOTA DE BOAS-VINDAS E DIRETRIZ DIDÁTICA

Seja bem-vindo(a) à disciplina de **Programação em Novas Tecnologias (Web)**!

Nesta jornada Full-Stack, você aprenderá a dominar a construção de software moderno utilizando a prestigiada **Stack MERN** (*MongoDB, Express, React/Vanilla JS, Node.js*). O objetivo deste material é ir além do "como fazer": você entenderá a **causa e a mecânica interna** de cada instrução de código.

Nossa caminhada cobrirá desde os fundamentos da infraestrutura de redes até a estruturação semântica com **HTML5**, estilização profissional com **CSS3 e Bootstrap 5**, até culminar no nosso projeto integrador: o **Pokémon Trading App**, uma aplicação full-stack gamificada conectada ao banco NoSQL **MongoDB** através do ODM **Mongoose**.

Prepare seu ambiente de desenvolvimento e bons estudos!

---

# MÓDULO 1: Fundamentos da Web e Preparação do Ambiente

---

## 1.1 História da Web e Arquitetura Cliente-Servidor

### 1. 📖 Explicação Expositiva e Detalhada

A *World Wide Web* (WWW), concebida por Tim Berners-Lee em 1989 no CERN, nasceu da necessidade de compartilhar documentos de pesquisa entre cientistas. Hoje, evoluiu de páginas estáticas em hipertexto para aplicações altamente reativas em tempo real.

Para compreender como as aplicações web operam, é preciso dominar quatro pilares de infraestrutura:

1. **Arquitetura Cliente-Servidor:** É um modelo computacional distribuído onde as tarefas são divididas entre fornecedores de recursos ou serviços (chamados de **Servidores**) e os requisitantes de serviços (chamados de **Clientes**). Na Web, o cliente é tipicamente o navegador (*User Agent*), e o servidor é uma aplicação remota (ex: Node.js/Express).
2. **Protocolo HTTP/HTTPS (*Hypertext Transfer Protocol / Secure*):** O protocolo sem estado (*stateless*) da camada de aplicação que define a sintaxe e a semântica da comunicação entre cliente e servidor. A versão HTTPS adiciona uma camada de segurança por meio de TLS/SSL, criptografando os dados trafegados.
3. **DNS (*Domain Name System*):** É o sistema hierárquico e distribuído de gerenciamento de nomes. Ele traduz nomes amigáveis (ex: `[www.pokemon.com](https://www.pokemon.com)`) para os endereços IP numéricos que identificam as máquinas na rede mundial (ex: `192.0.2.1`).
4. **Ciclo de Requisição e Resposta (*Request/Response Cycle*):**
* **Request (Cliente $\rightarrow$ Servidor):** Composta por **Método HTTP** (`GET`, `POST`, `PUT`, `DELETE`), **Cabeçalhos** (*Headers* — contendo metadados como tipo de conteúdo e tokens de autorização), **URL/URI** e **Corpo** (*Body* — contendo dados em JSON ou formulários).
* **Response (Servidor $\rightarrow$ Cliente):** Composta por **Código de Status HTTP** (`200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`), **Cabeçalhos** e o **Corpo** (dados brutos como HTML, CSS, Imagens ou dados estruturados em JSON).



```
   [ CLIENTE (Navegador) ]                                 [ SERVIDOR (Node.js + Express) ]
             │                                                           │
             │──── 1. Consulta DNS ("pokemon.com") ───> [ SERVIDOR DNS ]  │
             │<─── 2. Retorna IP (192.0.2.1) ──────────┘                 │
             │                                                           │
             │──── 3. HTTP Request (GET /api/pokemons) ─────────────────>│
             │                                                           │ (Mongoose/MongoDB)
             │<─── 4. HTTP Response (Status 200 + Dados JSON) ──────────│

```

---

### 2. 💡 Analogia do Mundo Real

Imagine um **Restaurante de Alto Padrão**:

* **Você (O Cliente):** Senta-se à mesa e solicita um prato.
* **O Cardápio (Interface HTML/CSS):** Apresenta visualmente as opções disponíveis.
* **O Garçom (Protocolo HTTP/HTTPS):** Transporta o seu pedido do cliente até a cozinha.
* **A Cozinha (O Servidor Node.js):** Processa as instruções do pedido e consulta a despensa organizadamente estocada (**O Banco de Dados MongoDB**).
* **O Prato Pronto (A Resposta HTTP):** É entregue de volta ao cliente pelo garçom para consumo imediato.

---

### 3. 🔍 Explicação Detalhada da Lógica e Arquitetura

Quando um cliente faz uma chamada para a Web, a natureza *stateless* do HTTP significa que cada requisição é totalmente isolada; o servidor não "lembra" de quem é o cliente por padrão. Para resolver isso, utilizamos mecanismos como **Cookies**, **Sessões** ou **Tokens JWT** (*JSON Web Tokens*) enviados nos cabeçalhos HTTP.

O Node.js trata cada requisição de forma assíncrona orientada a eventos. O servidor aceita a solicitação e, em vez de travar o fluxo aguardando o banco de dados responder, ele delega a busca no MongoDB para uma *Promise* interna e continua pronto para receber outras requisições. Quando o MongoDB retorna os dados, o evento é disparado e a resposta HTTP é montada e devolvida ao cliente.

---

## 1.2 Ambiente de Desenvolvimento, Emmet e Ferramentas

### 1. 📖 Explicação Expositiva e Detalhada

O ambiente de desenvolvimento Full-Stack moderno é composto por ferramentas de alta performance:

* **VS Code (Visual Studio Code):** Editor de código-fonte leve e extensível.
* **Live Server:** Extensão para VS Code que provê um servidor de desenvolvimento local com recarregamento automático (*Hot Reloading*) ao salvar arquivos front-end.
* **DevTools do Navegador (F12):** Painel de depuração nativo dos navegadores contendo:
* *Elements:* Inspeção e alteração do DOM e CSS em tempo real.
* *Console:* Execução de scripts e logs de erros.
* *Network:* Monitoramento detalhado de requisições e respostas HTTP.


* **Emmet:** Motor de expansão de código que converte abreviações sintáticas em blocos completos de HTML/CSS.

#### Tabela de Atalhos Emmet Essenciais:

| Atalho Emmet | Código HTML Gerado |
| --- | --- |
| `!` + `Tab` | Estrutura esqueleto básica completa do HTML5. |
| `div.card` | `<div class="card"></div>` |
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `input:v` | `<input type="text" name="" id="">` |
| `h1{Título}+p{Texto}` | `<h1>Título</h1><p>Texto</p>` |

---

### 4. 💻 Código Prático Completo: Testando Requisições com a Fetch API

Podemos usar o **Console das DevTools** de qualquer navegador para executar requisições HTTP reais com a API nativa do JavaScript:

```javascript
// Testando o ciclo Request/Response consumindo a PokeAPI pública via Console do Navegador
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    // Verifica se o servidor respondeu com status de sucesso (200-299)
    if (!response.ok) {
      throw new Error(`Erro na requisição: Status ${response.status}`);
    }
    return response.json(); // Converte o corpo da resposta de JSON para Objeto JavaScript
  })
  .then(data => {
    console.log("Nome do Pokémon:", data.name.toUpperCase());
    console.log("HP Base:", data.stats[0].base_stat);
    console.log("Sprite Frontal:", data.sprites.front_default);
  })
  .catch(error => console.error("Falha na comunicação:", error));

```

---

### 5. ✏️ Exercício Prático Dirigido

Abra o DevTools do seu navegador (pressione `F12`), acesse a aba **Console** e execute uma requisição `fetch()` para buscar os dados do Pokémon **"Charizard"** na URL `[https://pokeapi.co/api/v2/pokemon/charizard](https://pokeapi.co/api/v2/pokemon/charizard)`. Extraia e imprima no console apenas o nome, o peso (*weight*) e o tipo principal do Pokémon.

---

### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
fetch('https://pokeapi.co/api/v2/pokemon/charizard')
  .then(res => res.json())
  .then(pokemon => {
    console.log("Nome:", pokemon.name);
    console.log("Peso:", pokemon.weight);
    console.log("Tipo Principal:", pokemon.types[0].type.name);
  })
  .catch(err => console.error("Erro no exercício:", err));

```

**Passo a Passo do Raciocínio:**

1. A função `fetch()` dispara um método `GET` assíncrono para a URL informada.
2. A primeira *Promise* (`.then(res => res.json())`) intercepta o fluxo de dados brutos e o converte em um objeto manipulável em JavaScript.
3. A segunda *Promise* navega pelas propriedades do objeto retornado: `pokemon.name` (String), `pokemon.weight` (Number) e `pokemon.types[0].type.name` (o valor contido na primeira posição da lista de tipos).

---

# MÓDULO 2: Estruturação Web com HTML5

---

## 2.1 Tags Semânticas, Multimídia e Formulários

### 1. 📖 Explicação Expositiva e Detalhada

O **HTML5** (*HyperText Markup Language*) é a linguagem de marcação que define a estrutura conceitual do documento.

#### A) Semântica Web

Antes do HTML5, páginas eram compostas por `<div>` genéricas para todas as áreas do sistema (*"Div Soup"*). O HTML5 introduziu **Tags Semânticas**, que informam o **significado** e a função de cada bloco tanto para leitores de tela de acessibilidade quanto para algoritmos de busca (SEO).

* `<header>`: Cabeçalho superior contendo marca, título e navegação.
* `<nav>`: Bloco destinado a conjuntos de links de navegação.
* `<main>`: O conteúdo principal, exclusivo e central do documento.
* `<section>`: Agrupamento genérico de conteúdo temático.
* `<article>`: Bloco autônomo e independente que possui significado próprio (ex: um card de produto ou post de blog).
* `<footer>`: Rodapé da página (direitos autorais, mapa do site e contatos).

#### B) Formulários e Validação Nativa

Os formulários (`<form>`) capturam dados do usuário no front-end para envio ao servidor. O HTML5 possui atributos de validação nativos que executam checagens no próprio navegador antes do envio dos dados via HTTP.

```html
<!-- Formulário HTML5 com Validações Nativas -->
<form action="/api/cadastro" method="POST">
  <!-- Campo obrigatório com validação nativa de formato de e-mail -->
  <label for="emailUsuario">E-mail do Treinador:</label>
  <input type="email" id="emailUsuario" name="email" required placeholder="treinador@pallet.com">

  <!-- Campo numérico restrito por valores mínimo e máximo -->
  <label for="idadeUsuario">Idade:</label>
  <input type="number" id="idadeUsuario" name="idade" min="10" max="100" required>

  <!-- Caixa de Seleção Dropdown -->
  <label for="cidadeRegiao">Região de Origem:</label>
  <select id="cidadeRegiao" name="regiao" required>
    <option value="">Selecione...</option>
    <option value="kanto">Kanto</option>
    <option value="johto">Johto</option>
    <option value="hoenn">Hoenn</option>
  </select>

  <!-- Botão de Envio do Formulário -->
  <button type="submit">Cadastrar Treinador</button>
</form>

```

---

### 2. 💡 Analogia do Mundo Real

Considere a **Construção de uma Casa**:

* **HTML5:** É a **Estrutura de Alvenaria e Concreto**. Ele especifica onde estão as paredes, onde fica a porta de entrada (`<header>`), onde estão os quartos (`<article>`) e onde fica a fundação (`<footer>`). Sem essa fundação, não existe lugar para aplicar a pintura ou instalar a iluminação elétrica.

---

### 4. 💻 Código Prático Completo: Esqueleto Semântico HTML5

Abaixo está o arquivo `index.html` contendo a estrutura semântica limpa para o nosso sistema:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon Trading App - Coleção e Trocas</title>
</head>
<body>

  <!-- Cabeçalho Principal e Navegação -->
  <header>
    <h1>Pokémon Trading System</h1>
    <nav>
      <ul>
        <li><a href="#colecao">Minha Coleção</a></li>
        <li><a href="#trocas">Módulo de Trocas</a></li>
        <li><a href="#login">Sair</a></li>
      </ul>
    </nav>
  </header>

  <!-- Conteúdo Principal da Aplicação -->
  <main>
    <section id="painel-treinador">
      <h2>Painel do Treinador</h2>
      <p>Bem-vindo, <strong>Treinador Ash</strong>!</p>
    </section>

    <!-- Área de Exibição dos Cards em Formato de Grade Semântica -->
    <section id="colecao">
      <h2>Sua Coleção Ativa</h2>
      
      <article class="card-pokemon">
        <header>
          <h3>Pikachu - Nível 15</h3>
        </header>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Sprite do Pikachu">
        <p>Ataque: 55 | HP: 35</p>
        <footer>
          <button type="button">Propor Troca</button>
        </footer>
      </article>
    </section>
  </main>

  <!-- Rodapé do Sistema -->
  <footer>
    <p>&copy; 2026 Pokémon Trading App - Todos os direitos reservados.</p>
  </footer>

</body>
</html>

```

---

# MÓDULO 3: Estilização e Design com CSS3 e Bootstrap 5

---

## 3.1 Fundamentos de CSS3, Modelo de Caixa e Flexbox

### 1. 📖 Explicação Expositiva e Detalhada

O **CSS3** (*Cascading Style Sheets*) gerencia a camada de apresentação visual dos documentos HTML.

#### A) A Cascata e a Especificidade

O termo "Cascata" significa que as regras aplicadas fluem do topo do arquivo para baixo, podendo ser sobrescritas conforme o peso de **Especificidade** do seletor utilizado:

1. `Style Inline` (atributo `style=""` na tag): Peso 1000.
2. Seletores por `ID` (`#meuElemento`): Peso 100.
3. Seletores por `Classe` (`.minhaClasse`), Pseudoclasses (`:hover`) e Atributos: Peso 10.
4. Seletores por `Tag` (`h1`, `p`, `div`): Peso 1.

#### B) O Modelo de Caixa (*Box Model*)

Toda tag renderizada no HTML se comporta como uma caixa retangular compuesta por 4 camadas:

1. **Content:** A área interna onde o texto/imagem reside.
2. **Padding:** O espaçamento transparente entre o conteúdo e a borda.
3. **Border:** A linha limítrofe da caixa.
4. **Margin:** O espaçamento transparente externo utilizado para afastar a caixa dos demais elementos vizinhos.

> ⚠️ **Boas Práticas de Reset:** Sempre aplique `box-sizing: border-box;` no CSS global (`*`). Isso faz com que o `width` e o `height` calculados pelo navegador incluam o *padding* e a *border*, impedindo que o layout quebre ao adicionar espaçamentos.

#### C) Flexbox (Flexible Box Layout)

Desenvolvido para organizar componentes ao longo de um eixo unidimensional (linha ou coluna). As principais propriedades declaradas no elemento pai são:

* `display: flex;`: Ativa o contexto flexível.
* `justify-content`: Controla o alinhamento no **Eixo Principal** (`flex-start`, `center`, `space-between`).
* `align-items`: Controla o alinhamento no **Eixo Transversal** (`stretch`, `center`, `flex-end`).

---

## 3.2 O Framework Bootstrap 5

### 1. 📖 Explicação Expositiva e Detalhada

O Bootstrap é um framework CSS para criação de interfaces responsivas e *mobile-first*.

* **Sistema de Grid:** Divide a tela em um sistema flexível de **12 colunas**.
* **Breakpoints Responsivos:** Ponto de corte para telas: `sm` ($\ge 576\text{px}$), `md` ($\ge 768\text{px}$), `lg` ($\ge 992\text{px}$), `xl` ($\ge 1200\text{px}$).
* **Componente Card:** Estrutura pronta contendo cabeçalho, imagem, corpo e rodapé, ideal para exibição dos nossos Pokémons.

---

### 2. 💡 Analogia do Mundo Real

Retomando a construção da nossa casa:

* **CSS3:** É a **Pintura, Revestimento e Iluminação**. Ele escolhe a cor das paredes, a textura do chão e o alinhamento das janelas.
* **Bootstrap 5:** É a contratação de uma **Equipe de Design de Interiores com Móveis Modulares Pré-Fabricados**. Em vez de projetar cada cadeira e mesa do zero, você utiliza componentes elegantes e padronizados instantaneamente.

---

### 4. 💻 Código Prático Completo: Estilização com Bootstrap 5 via CDN

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon Trading App - Interface Bootstrap</title>
  
  <!-- CDN do CSS do Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <style>
    body { background-color: #f8f9fa; }
    .pokemon-card img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      margin: 0 auto;
    }
  </style>
</head>
<body>

  <!-- Barra de Navegação Bootstrap -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">⚡ Pokémon Trader</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Minha Coleção</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Mercado de Trocas</a></li>
          <li class="nav-item"><a class="nav-link btn btn-outline-light ms-2 px-3" href="#">Sair</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Container Principal do Grid -->
  <main class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Sua Coleção de Cards</h2>
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalNovoPokemon">+ Adicionar Card</button>
    </div>

    <!-- Grade Responsiva: 1 col em mobile, 2 em tablet, 3 em desktop -->
    <div class="row g-4" id="grid-pokemons">
      
      <!-- Card Pokémon Demonstrativo -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card pokemon-card text-center h-100 shadow-sm border-0">
          <div class="card-header bg-white border-0 pt-3">
            <span class="badge bg-warning text-dark rounded-pill px-3 py-2">Elétrico</span>
          </div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" class="card-img-top mt-2" alt="Pikachu">
          <div class="card-body">
            <h5 class="card-title fw-bold">Pikachu</h5>
            <p class="card-text text-muted mb-1">Nível: 25</p>
            <div class="d-flex justify-content-center gap-3">
              <small><strong>Ataque:</strong> 55</small>
              <small><strong>HP:</strong> 35</small>
            </div>
          </div>
          <div class="card-footer bg-white border-0 pb-3 d-flex justify-content-center gap-2">
            <button class="btn btn-primary btn-sm">Editar</button>
            <button class="btn btn-outline-danger btn-sm">Liberar</button>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- CDN do JavaScript do Bootstrap 5 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

```

---

# MÓDULO 4: Projeto Full-Stack Gamificado — "Pokémon Trading App" (Stack MERN)

Integraremos agora todas as camadas do desenvolvimento Full-Stack: **Front-end em HTML5/CSS3/Bootstrap/JS**, **Back-end em Node.js com Express** e persistência de dados NoSQL orientada a documentos no **MongoDB** utilizando o ODM **Mongoose**.

---

## 4.1 Entendendo o Banco de Dados NoSQL MongoDB e o Mongoose

### 1. 📖 Explicação Expositiva e Detalhada

Diferente dos bancos relacionais tradicionais (SQL), que exigem tabelas rígidas com esquemas pré-definidos conectados por `JOINs`, o **MongoDB** é um banco de dados NoSQL **Orientado a Documentos**.

#### Conceitos-Chave da Modelagem NoSQL:

* **Documento (Document):** É a unidade fundamental de dados no MongoDB. Os dados são armazenados no formato **BSON** (*Binary JSON*), um formato binário que suporta tipos de dados adicionais como datas, inteiros de 64 bits e a chave identificadora `ObjectId`.
* **Coleção (Collection):** É o equivalente a uma tabela relacional. Uma coleção agrupa múltiplos documentos NoSQL.
* **Mongoose ODM (*Object Document Mapper*):** Biblioteca para Node.js que cria uma camada de abstração sobre o driver nativo do MongoDB. O Mongoose nos permite criar **Schemas** (esquemas) rígidos em JavaScript para definir a estrutura, os tipos de dados e os métodos de validação dos documentos salvos nas coleções.
* **ObjectId:** Identificador exclusivo de 12 bytes gerado automaticamente pelo MongoDB para cada documento no campo `_id`. Ele contém a marca temporal do instante de criação (*timestamp*), ID da máquina, ID do processo e um contador incremental.

### 2. 💡 Analogia do Mundo Real

Pense no **MongoDB** como um **Arquivo de Aço de um Consultório**:

* O banco de dados é a sala de arquivos.
* As **Coleções** são as gavetas rotuladas (ex: "Gaveta de Treinadores", "Gaveta de Pokémons").
* Os **Documentos BSON/JSON** são as **pastas suspensas** guardadas em cada gaveta. Dentro de cada pasta, há uma ficha em formato de folha contendo os pares chave/valor do paciente. Em vez de preencher formulários divididos em tabelas diferentes, todas as informações relevantes podem ser gravadas diretamente na mesma ficha.

---

## 4.2 Estrutura do Projeto Node.js / Express / MongoDB

#### Estrutura de Pastas do Servidor Full-Stack:

```
/pokemon-app-mongodb
  ├── package.json
  ├── server.js               <-- Ponto de Entrada da Aplicação
  ├── /config
  │     └── db.js             <-- Módulo de Conexão com o MongoDB
  ├── /models
  │     ├── Usuario.js        <-- Schema Mongoose para Coleção 'usuarios'
  │     ├── Pokemon.js        <-- Schema Mongoose para Coleção 'pokemons'
  │     └── Troca.js          <-- Schema Mongoose para Coleção 'trocas'
  └── /public
        ├── index.html        <-- Interface Front-end
        └── app.js            <-- Script do Cliente (Fetch/DOM)

```

---

## 4.3 Schemas Mongoose para a Aplicação

### 💻 Código dos Modelos (Schemas) em Mongoose

#### 1. Modelo de Usuário (`models/Usuario.js`)

```javascript
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'O nome do treinador é obrigatório.'] 
  },
  email: { 
    type: String, 
    required: [true, 'O e-mail é obrigatório.'], 
    unique: true, 
    lowercase: true 
  },
  senha: { 
    type: String, 
    required: [true, 'A senha é obrigatória.'] 
  },
  criadoEm: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

```

#### 2. Modelo de Pokémon (`models/Pokemon.js`)

```javascript
const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  // Referência por ObjectId ao Documento do Usuário (Dono do Card)
  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true 
  },
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
  pokemonOfertado: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Pokemon', 
    required: true 
  },
  pokemonDesejado: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Pokemon', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['PENDENTE', 'ACEITA', 'RECUSADA'], 
    default: 'PENDENTE' 
  },
  criadoEm: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Troca', TrocaSchema);

```

---

## 4.4 Módulo de Conexão com o MongoDB (`config/db.js`)

```javascript
const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    // String de Conexão com a instância do MongoDB (Local ou MongoDB Atlas)
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/pokemon_trading_db');
    console.log(`🍃 MongoDB Conectado com Sucesso: ${conn.connection.host}`);
  } catch (erro) {
    console.error(`❌ Erro crítico ao conectar ao MongoDB: ${erro.message}`);
    process.exit(1); // Encerra o processo do Node em caso de falha de conexão
  }
};

module.exports = conectarDB;

```

---

## 4.5 Servidor Back-End Completo em Node.js com Express e Mongoose (`server.js`)

```javascript
const express = require('express');
const session = require('express-session');
const path = require('path');
const conectarDB = require('./config/db');

// Importação dos Schemas/Modelos Mongoose
const Usuario = require('./models/Usuario');
const Pokemon = require('./models/Pokemon');
const Troca = require('./models/Troca');

const app = express();
const PORT = 3000;

// Inicializa a Conexão com o MongoDB
conectarDB();

// Middlewares para Parse de JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da Sessão do Usuário
app.use(session({
  secret: 'chave_secreta_mongodb_pokemon_super_segura_2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // Sessão válida por 1 hora
}));

// Middleware de Proteção de Rota (Garante autenticação)
function autenticarSessao(req, res, next) {
  if (req.session && req.session.usuarioId) {
    return next();
  }
  return res.status(401).json({ erro: 'Acesso negado. Realize o login.' });
}

// Lista de Pokémons Iniciais para Sorteio
const POKEMONS_INICIAIS = [
  { nome: 'Bulbasaur', tipo: 'Planta', ataque: 49, hp: 45, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { nome: 'Charmander', tipo: 'Fogo', ataque: 52, hp: 39, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { nome: 'Squirtle', tipo: 'Água', ataque: 48, hp: 44, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { nome: 'Pikachu', tipo: 'Elétrico', ataque: 55, hp: 35, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { nome: 'Eevee', tipo: 'Normal', ataque: 55, hp: 55, spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' }
];

// ============================================================================
// 1. AUTENTICAÇÃO E REGRA DE NEGÓCIO (SORTEIO COM TRANSAÇÃO NO MONGO)
// ============================================================================

// POST /api/cadastrar - Cria conta e sorteia 3 Pokémons vinculados por ObjectId
app.post('/api/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  // Abre uma Sessão Mongoose para garantir uma Transação Atomica no MongoDB
  const sessionMongo = await Usuario.startSession();
  sessionMongo.startTransaction();

  try {
    // 1. Instancia e salva o novo Usuário no MongoDB
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save({ session: sessionMongo });

    // 2. REGRA DE NEGÓCIO: Sorteia 3 Pokémons sem repetição
    const sorteados = [...POKEMONS_INICIAIS].sort(() => 0.5 - Math.random()).slice(0, 3);

    // 3. Mapeia os documentos vinculando o ObjectId do usuário recém-criado
    const documentosPokemons = sorteados.map(poke => ({
      usuario: novoUsuario._id, // Vínculo via ObjectId
      nome: poke.nome,
      tipo: poke.tipo,
      nivel: 1,
      ataque: poke.ataque,
      hp: poke.hp,
      spriteUrl: poke.spriteUrl
    }));

    // Inserção em lote de múltiplos documentos
    await Pokemon.insertMany(documentosPokemons, { session: sessionMongo });

    // Efetiva a transação no banco
    await sessionMongo.commitTransaction();
    sessionMongo.endSession();

    res.status(201).json({ mensagem: 'Treinador cadastrado com sucesso e 3 Pokémons concedidos!' });

  } catch (erro) {
    await sessionMongo.abortTransaction();
    sessionMongo.endSession();

    if (erro.code === 11000) { // Código de Entrada Duplicada no MongoDB (Email Único)
      return res.status(400).json({ erro: 'E-mail já cadastrado.' });
    }
    res.status(500).json({ erro: 'Erro interno no servidor ao cadastrar.' });
  }
});

// POST /api/login - Valida o usuário e grava na sessão
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email, senha });

    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    req.session.usuarioId = usuario._id; // Salva o ObjectId na Sessão
    req.session.usuarioNome = usuario.nome;

    res.json({ mensagem: 'Login realizado com sucesso!', usuario: { id: usuario._id, nome: usuario.nome } });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno no login.' });
  }
});

// POST /api/logout
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ mensagem: 'Sessão encerrada.' });
});

// ============================================================================
// 2. CRUD COMPLETO DE CARDS DE POKÉMON COM MONGOOSE
// ============================================================================

// READ: GET /api/meus-pokemons - Consulta os documentos do usuário logado
app.get('/api/meus-pokemons', autenticarSessao, async (req, res) => {
  try {
    // Busca documentos na coleção filtrando pelo ObjectId do usuário logado
    const pokemons = await Pokemon.find({ usuario: req.session.usuarioId }).sort({ _id: -1 });
    res.json(pokemons);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao consultar Pokémons no MongoDB.' });
  }
});

// CREATE: POST /api/pokemons - Cadastra um novo documento de card
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
    res.status(201).json({ mensagem: 'Card criado no MongoDB com sucesso!', pokemon: novoPokemon });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar o card.' });
  }
});

// UPDATE: PUT /api/pokemons/:id - Atualiza um documento via findOneAndUpdate
app.put('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;
  const { nivel, ataque, hp } = req.body;

  try {
    // Atualiza o documento garantindo que o id e o usuario do documento pertençam ao usuário da sessão
    const pokemonAtualizado = await Pokemon.findOneAndUpdate(
      { _id: id, usuario: req.session.usuarioId },
      { $set: { nivel, ataque, hp } },
      { new: true } // Retorna o documento atualizado
    );

    if (!pokemonAtualizado) {
      return res.status(403).json({ erro: 'Operação não permitida ou card não encontrado.' });
    }

    res.json({ mensagem: 'Pokémon atualizado com sucesso!', pokemon: pokemonAtualizado });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar o card no MongoDB.' });
  }
});

// DELETE: DELETE /api/pokemons/:id - Exclui um documento via findOneAndDelete
app.delete('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await Pokemon.findOneAndDelete({ _id: id, usuario: req.session.usuarioId });

    if (!resultado) {
      return res.status(403).json({ erro: 'Operação não permitida.' });
    }

    res.json({ mensagem: 'Pokémon removido da coleção do MongoDB com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao excluir documento.' });
  }
});

// ============================================================================
// 3. MÓDULO DE TROCA DE CARDS E GAMIFICAÇÃO
// ============================================================================

// POST /api/trocas/propor - Cadastra uma nova proposta de troca
app.post('/api/trocas/propor', autenticarSessao, async (req, res) => {
  const { pokemonOfertadoId, pokemonDesejadoId } = req.body;

  try {
    const novaTroca = new Troca({
      pokemonOfertado: pokemonOfertadoId,
      pokemonDesejado: pokemonDesejadoId,
      status: 'PENDENTE'
    });

    await novaTroca.save();
    res.status(201).json({ mensagem: 'Proposta de troca enviada!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar proposta de troca.' });
  }
});

// POST /api/trocas/aceitar/:id - Altera as referências de dono (ObjectId) entre os documentos
app.post('/api/trocas/aceitar/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;

  try {
    const troca = await Troca.findById(id);
    if (!troca || troca.status !== 'PENDENTE') {
      return res.status(404).json({ erro: 'Proposta não encontrada ou já encerrada.' });
    }

    // Busca os documentos dos dois Pokémons envolvidos
    const pokeOfertado = await Pokemon.findById(troca.pokemonOfertado);
    const pokeDesejado = await Pokemon.findById(troca.pokemonDesejado);

    // Inverte a propriedade dos Pokémons alterando a referência do ObjectId do usuário
    const donoTemporario = pokeOfertado.usuario;
    pokeOfertado.usuario = pokeDesejado.usuario;
    pokeDesejado.usuario = donoTemporario;

    await pokeOfertado.save();
    await pokeDesejado.save();

    troca.status = 'ACEITA';
    await troca.save();

    res.json({ mensagem: 'Troca de propriedade concluída no MongoDB com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Falha ao processar troca.' });
  }
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor MERN App rodando em http://localhost:${PORT}`);
});

```

---

## 4.6 Front-End Interativo com JavaScript e Manipulação do DOM (`public/app.js`)

O script no cliente consome as rotas REST. Como estamos utilizando MongoDB, a chave primária de cada documento é identificada por `_id`:

```javascript
// public/app.js - Lógica Front-End integrada ao MongoDB

document.addEventListener('DOMContentLoaded', () => {
  carregarMeusPokemons();

  const formNovoPokemon = document.getElementById('form-novo-pokemon');
  if (formNovoPokemon) {
    formNovoPokemon.addEventListener('submit', cadastrarPokemon);
  }
});

// Busca e renderiza os documentos da coleção no MongoDB
async function carregarMeusPokemons() {
  const containerGrid = document.getElementById('grid-pokemons');

  try {
    const resposta = await fetch('/api/meus-pokemons');
    
    if (resposta.status === 401) {
      alert('Sessão expirada. Redirecionando para login...');
      window.location.href = '/login.html';
      return;
    }

    const pokemons = await resposta.json();
    containerGrid.innerHTML = '';

    if (pokemons.length === 0) {
      containerGrid.innerHTML = `<div class="col-12"><p class="text-center alert alert-warning">Sua coleção do MongoDB está vazia!</p></div>`;
      return;
    }

    // Renderiza cada card mapeando o campo `poke._id` gerado pelo MongoDB
    pokemons.forEach(poke => {
      const colHTML = `
        <div class="col-12 col-md-6 col-lg-4" id="card-pokemon-${poke._id}">
          <div class="card pokemon-card text-center h-100 shadow-sm border-0">
            <div class="card-header bg-white border-0 pt-3">
              <span class="badge bg-danger rounded-pill px-3 py-2">${poke.tipo}</span>
            </div>
            <img src="${poke.spriteUrl}" class="card-img-top mt-2" alt="${poke.nome}">
            <div class="card-body">
              <h5 class="card-title fw-bold">${poke.nome}</h5>
              <p class="card-text text-muted mb-1">Nível: <strong>${poke.nivel}</strong></p>
              <div class="d-flex justify-content-center gap-3">
                <small><strong>Ataque:</strong> ${poke.ataque}</small>
                <small><strong>HP:</strong> ${poke.hp}</small>
              </div>
            </div>
            <div class="card-footer bg-white border-0 pb-3 d-flex justify-content-center gap-2">
              <button class="btn btn-primary btn-sm" onclick="subirNivel('${poke._id}', ${poke.nivel}, ${poke.ataque}, ${poke.hp})">⚡ Treinar (+1 Nível)</button>
              <button class="btn btn-outline-danger btn-sm" onclick="liberarPokemon('${poke._id}')">🗑️ Liberar</button>
            </div>
          </div>
        </div>
      `;
      containerGrid.innerHTML += colHTML;
    });

  } catch (erro) {
    console.error('Erro ao carregar coleção:', erro);
  }
}

// Cadastra um novo documento na coleção (CREATE)
async function cadastrarPokemon(event) {
  event.preventDefault();

  const novoPoke = {
    nome: document.getElementById('nome').value,
    tipo: document.getElementById('tipo').value,
    nivel: parseInt(document.getElementById('nivel').value),
    ataque: parseInt(document.getElementById('ataque').value),
    hp: parseInt(document.getElementById('hp').value),
    spriteUrl: document.getElementById('spriteUrl').value || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  };

  try {
    const resposta = await fetch('/api/pokemons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoPoke)
    });

    if (resposta.ok) {
      alert('Novo Pokémon salvo na coleção do MongoDB!');
      carregarMeusPokemons();
    }
  } catch (erro) {
    console.error('Erro no envio:', erro);
  }
}

// Atualiza o documento no MongoDB (UPDATE)
async function subirNivel(id, nivelAtual, ataqueAtual, hpAtual) {
  try {
    const resposta = await fetch(`/api/pokemons/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nivel: nivelAtual + 1, ataque: ataqueAtual + 5, hp: hpAtual + 10 })
    });

    if (resposta.ok) {
      carregarMeusPokemons(); // Recarrega a interface sem recarregar a página
    }
  } catch (erro) {
    console.error('Erro ao evoluir Pokémon:', erro);
  }
}

// Deleta o documento do MongoDB (DELETE)
async function liberarPokemon(id) {
  if (!confirm('Deseja realmente soltar este Pokémon da coleção?')) return;

  try {
    const resposta = await fetch(`/api/pokemons/${id}`, {
      method: 'DELETE'
    });

    if (resposta.ok) {
      // Remove o elemento visual da árvore DOM diretamente
      document.getElementById(`card-pokemon-${id}`).remove();
    }
  } catch (erro) {
    console.error('Erro ao liberar:', erro);
  }
}

```

---

### 5. ✏️ Exercício Prático Dirigido (Para Sala de Aula)

Crie uma nova rota no servidor Express (`GET /api/pokemons/busca?tipo=Fogo`) que execute uma busca por filtro na coleção do MongoDB utilizando o método `Pokemon.find()` e aplique a função `.populate('usuario', 'nome email')` do Mongoose para retornar no mesmo JSON o nome e e-mail do treinador proprietário de cada card.

---

### 6. ✅ Resposta e Explicação Passo a Passo

#### A) Código da Rota no Node.js (`server.js`):

```javascript
// GET /api/pokemons/busca - Busca Filtrada por Tipo com Povoamento de Dados (.populate)
app.get('/api/pokemons/busca', async (req, res) => {
  const { tipo } = req.query;

  try {
    // 1. Constrói o filtro dinâmico
    const filtro = {};
    if (tipo) {
      // Aplica busca Case-Insensitive usando Expressão Regular (Regex)
      filtro.tipo = new RegExp(tipo, 'i');
    }

    // 2. Executa a consulta no MongoDB e povoa os dados do Usuário referente
    const pokemonsEncontrados = await Pokemon.find(filtro)
      .populate('usuario', 'nome email -_id') // Trás apenas nome e e-mail, ocultando o _id do usuário
      .exec();

    res.json(pokemonsEncontrados);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao realizar busca avançada no MongoDB.' });
  }
});

```

#### B) Passo a Passo do Raciocínio Implementado:

1. **Busca Flexível com Regex:** O uso do manipulador `new RegExp(tipo, 'i')` permite pesquisar palavras parciais ignorando maiúsculas e minúsculas (ex: "fogo" ou "FOGO" encontram "Fogo").
2. **O Método `.populate()` do Mongoose:** Como o MongoDB não realiza `JOINs` nativos do estilo SQL, o Mongoose abstrai essa complexidade. Ele pega a referência `ObjectId` contida no campo `usuario` da coleção de Pokémons, faz uma segunda busca automática na coleção de `usuarios` e injeta os campos solicitados (`nome` e `email`) diretamente dentro do documento devolvido na resposta HTTP.

---

## 🎓 CONSIDERAÇÕES FINAIS DO PROFESSOR

Parabéns por concluir este manual completo de **Desenvolvimento Web Full-Stack com a Stack MERN**!

Nesta disciplina, você percorreu toda a arquitetura de engenharia de software para a Web:

1. Entendeu os fundamentos de infraestrutura, incluindo **DNS, o ciclo HTTP Request/Response** e o ecossistema de ferramentas de desenvolvimento.
2. Dominou a marcação semântica com **HTML5** e o design responsivo moderno com **CSS3 e Bootstrap 5**.
3. Construiu uma API RESTful de alta performance com **Node.js e Express**, protegida por controle de sessões.
4. Modelou e manipulou um banco NoSQL orientado a documentos no **MongoDB** através do ODM **Mongoose**, aplicando **Schemas, ObjectIds e Populates**.
5. Desenvolveu a camada cliente reativa manipulando o DOM com **JavaScript Assíncrono (`fetch`)**.

Continue praticando, expandindo as funcionalidades do **Pokémon Trading App** e criando novos sistemas. O mercado de tecnologia valoriza profissionais que dominam o funcionamento completo da aplicação, do front-end ao banco de dados!