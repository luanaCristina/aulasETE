# 🌐 MANUAL INTEGRAL DE DESENVOLVIMENTO WEB FULL-STACK

**Prof. Dr. em Ciência da Computação — Especialista em Desenvolvimento Web e Arquitetura Full-Stack**

---

## 🎯 NOTA DE BOAS-VINDAS E DIRETRIZ DIDÁTICA

Seja bem-vindo(a) à disciplina que une a estrutura gráfica da Web à lógica de negócios no servidor e à persistência de dados.

Muitos iniciantes acreditam que construir para a Web é apenas "desenhar páginas". No entanto, o desenvolvimento Full-Stack moderno é uma engenharia que exige o domínio da **Tríade do Front-end (HTML5, CSS3, JavaScript)**, a compreensão de **Protocolos de Comunicação (HTTP/HTTPS)** e a criação de **APIs RESTful seguras no Back-end (Node.js/Express)** com integração a **Bancos de Dados Relacionais (MySQL)**.

Neste material, você aprenderá não apenas *como* escrever o código, mas *por que* cada instrução é necessária. No final, consolidaremos esses conceitos na construção de uma aplicação real e gamificada: o **Pokémon Trading App**.

Prepare seu ambiente de desenvolvimento e bons estudos!

---

# MÓDULO 1: Fundamentos da Web e Preparação do Ambiente

---

## 1.1 História da Web e Arquitetura Cliente-Servidor

### 1. 📖 Explicação Expositiva e Detalhada

A Web (*World Wide Web*) foi concebida por Tim Berners-Lee em 1989 no CERN como um sistema de documentos de hipertexto interligados executados sobre a Internet. Para compreender a construção de software Web, é preciso dominar quatro pilares fundamentais:

1. **Arquitetura Cliente-Servidor:** O modelo computacional distribuído onde o **Cliente** (geralmente o navegador Web como Chrome, Firefox ou Safari) solicita dados ou serviços, e o **Servidor** (um computador remoto executando um processo servidor como Node.js, Nginx ou Apache) processa a requisição, acessa dados e devolve a resposta.
2. **Protocolo HTTP/HTTPS (*Hypertext Transfer Protocol / Secure*):** É o protocolo da camada de aplicação que rege como as mensagens são formatadas e transmitidas. A versão HTTPS adiciona uma camada de criptografia via **TLS/SSL**, garantindo a privacidade e integridade dos dados transitados.
3. **DNS (*Domain Name System*):** Funciona como a "lista telefônica" da Internet. Ele traduz nomes de domínio legíveis por humanos (ex: `[www.pokemon.com](https://www.pokemon.com)`) em endereços IP numéricos que os roteadores entendem (ex: `192.0.2.1`).
4. **Ciclo de Requisição e Resposta (*Request/Response*):**
* **Request (Cliente $\rightarrow$ Servidor):** Composta por Método HTTP (`GET`, `POST`, `PUT`, `DELETE`), Cabeçalhos (*Headers*), URL/URI e Corpo (*Body* - em casos de envio de formulários/JSON).
* **Response (Servidor $\rightarrow$ Cliente):** Composta por Código de Status HTTP (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`), Cabeçalhos e o Corpo da resposta (HTML, CSS, imagens ou dados em JSON).



```
   [ CLIENTE (Navegador) ]                                 [ SERVIDOR (Node.js + Express) ]
             │                                                           │
             │──── 1. Consulta DNS ("pokemon.com") ───> [ SERVIDOR DNS ]  │
             │<─── 2. Retorna IP (192.0.2.1) ──────────┘                 │
             │                                                           │
             │──── 3. HTTP Request (GET /api/pokemons) ─────────────────>│
             │                                                           │ (Acessa BD MySQL)
             │<─── 4. HTTP Response (Status 200 + Dados JSON) ──────────│

```

---

### 2. 💡 Analogia do Mundo Real

Pense em um **Restaurante de Alto Padrão**:

* **Você (O Cliente):** Senta-se à mesa e deseja consumir algo.
* **O Cardápio (Interface HTML/CSS):** Apresenta as opções visualmente.
* **O Garçom (Protocolo HTTP/HTTPS):** O meio de transporte. Ele pega o seu pedido e o leva de forma segura até a cozinha.
* **A Cozinha (O Servidor Node.js):** Processa o pedido, pega os ingredientes no freezer (**O Banco de Dados MySQL**), prepara o prato e entrega ao garçom.
* **O Prato Pronto (A Resposta HTTP):** É entregue à sua mesa para você consumir.

---

### 3. 🔍 Explicação Detalhada da Lógica e Arquitetura

Quando você digita uma URL no navegador e pressiona `Enter`, o seguinte fluxo lógico ocorre em milissegundos:

1. O navegador consulta o **Cache Local** e, se não encontrar, faz uma requisição ao **Servidor DNS** para descobrir o IP de destino.
2. Uma conexão de socket TCP/IP é aberta na porta `80` (HTTP) ou `443` (HTTPS).
3. O cliente envia os cabeçalhos da requisição informando detalhes como o tipo de conteúdo que aceita (`Accept: application/json` ou `text/html`) e dados de autenticação (*Cookies* ou *Tokens JWT*).
4. O servidor recebe esses bytes, roteia para o código correspondente no Node.js, processa as regras de negócio e envia uma resposta final.

---

## 1.2 Ambiente de Desenvolvimento, Emmet e Ferramentas

### 1. 📖 Explicação Expositiva e Detalhada

Para garantir alta produtividade, o desenvolvedor Full-Stack utiliza um ecossistema de ferramentas essenciais:

* **VS Code (Visual Studio Code):** O editor de código dominante no mercado, expansível via extensões.
* **Live Server:** Extensão do VS Code que cria um servidor local com recarregamento automático (*Hot Reloading*) sempre que um arquivo HTML, CSS ou JS é salvo.
* **DevTools do Navegador (F12):** Conjunto de ferramentas de depuração integrado ao navegador. Permite inspecionar a árvore DOM, alterar estilos CSS em tempo real, monitorar o tráfego de rede (*Network Tab*) e depurar scripts via *Console* e *Sources*.
* **Emmet:** Um motor de abreviações embutido no VS Code que permite gerar grandes blocos de código HTML/CSS digitando apenas pequenos atalhos sintáticos.

#### Tabela de Atalhos Emmet Essenciais:

| Atalho Emmet | Código Gerado |
| --- | --- |
| `!` + `Tab` | Estrutura esqueleto básica completa do HTML5. |
| `div.card` | `<div class="card"></div>` |
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `input:v` | `<input type="text" name="" id="">` (ou variando conforme o tipo). |
| `h1{Título}+p{Texto}` | `<h1>Título</h1><p>Texto</p>` |

---

### 4. 💻 Exemplo Prático: Testando Requisições com a Fetch API

Podemos usar o **DevTools (Console)** de qualquer navegador para executar requisições HTTP reais usando a API nativa do JavaScript:

```javascript
// Testando o ciclo Request/Response consumindo a PokeAPI pública via Console do Navegador
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    // Verifica se o servidor respondeu com sucesso (Status 200-299)
    if (!response.ok) {
      throw new Error(`Erro na requisição: Status ${response.status}`);
    }
    return response.json(); // Converte o corpo da resposta de JSON para Objeto JS
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

Abra o DevTools do seu navegador (pressione `F12`), acesse a aba **Console** e execute uma requisição `fetch()` para buscar os dados do Pokémon **"Charizard"**. Extraia e imprima no console apenas o nome, o peso (*weight*) e o tipo principal do Pokémon.

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

1. A instrução `fetch()` dispara um método `GET` assíncrono para a URL da API.
2. A primeira promessa (`.then(res => res.json())`) pega o fluxo de dados em formato de texto bruto e o transforma em um objeto JavaScript manipulável.
3. A segunda promessa acessa as propriedades internas do objeto: `pokemon.name` (String), `pokemon.weight` (Number) e `pokemon.types[0].type.name` (o elemento da primeira posição do array de tipos).

---

# MÓDULO 2: Estruturação Web com HTML5

---

## 2.1 Tags Semânticas, Multimídia e Formulários

### 1. 📖 Explicação Expositiva e Detalhada

HTML5 (*HyperText Markup Language*) não é uma linguagem de programação, mas uma **Linguagem de Marcação**. O HTML define a estrutura conceitual do documento através de **Elementos (Tags)**.

#### A) Semântica Web

Antes do HTML5, a Web era estruturada utilizando `<div>` para todos os blocos do sistema (o famoso *"Div Soup"*). O HTML5 introduziu **Tags Semânticas**, que conferem **significado** à estrutura tanto para motores de busca (SEO - *Search Engine Optimization*) quanto para ferramentas de acessibilidade (leitores de tela para deficientes visuais).

* `<header>`: Cabeçalho da página ou de uma seção (contém logotipos, títulos e navegação).
* `<nav>`: Bloco contendo os links de navegação principal.
* `<main>`: O conteúdo principal e exclusivo do documento. Deve existir apenas um por página.
* `<section>`: Agrupamento genérico de conteúdo relacionado por um mesmo tema.
* `<article>`: Conteúdo autônomo e independente que faz sentido por si só (ex: um post de blog, um card de produto).
* `<footer>`: Rodapé da página (direitos autorais, links de suporte e contatos).

#### B) Formatação de Formulários e Validação Nativa

Os formulários (`<form>`) são a porta de entrada para a interatividade e envio de dados do usuário ao servidor. O HTML5 trouxe tipos de `input` com validações nativas que dispensam JavaScript básico para validação de padrão.

```html
<!-- Exemplo de Formulário HTML5 com Validações Nativas -->
<form action="/api/cadastro" method="POST">
  <!-- Campo obrigatório com validação de formato de e-mail nativa -->
  <label for="emailUsuario">E-mail do Treinador:</label>
  <input type="email" id="emailUsuario" name="email" required placeholder="treinador@pallet.com">

  <!-- Campo numérico com limites mínimos e máximos -->
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

Imagine a **Construção de um Prédio Residencial**:

* **HTML5:** É a **Estrutura de Concreto e Alvenaria**. Define onde ficam as paredes, onde está o hall de entrada (`<header>`), onde ficam os apartamentos (`<article>`) e onde está a fundação/subsolo (`<footer>`).
* Sem o HTML, a casa simplesmente não existe fisicamente.

---

### 4. 💻 Código Prático Completo: Esqueleto Semântico HTML5

Abaixo está o arquivo `index.html` básico semântico pronto para ser acoplado ao nosso futuro projeto:

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

## 3.1 Fundamentos de CSS3, Modelo de Caixa e Layouts Moderne (Flexbox/Grid)

### 1. 📖 Explicação Expositiva e Detalhada

O CSS3 (*Cascading Style Sheets*) é a linguagem de estilos utilizada para descrever a apresentação visual de um documento HTML.

#### A) A Cascata e a Especificidade

O termo "Cascata" significa que as regras de estilo fluem de cima para baixo e podem ser sobrescritas dependendo da sua **Especificidade**. O peso da especificidade é calculado da seguinte forma:

1. `Style Inline` (atributo `style=""` no HTML): Peso 1000.
2. Seletores por `ID` (`#meuElemento`): Peso 100.
3. Seletores por `Classe` (`.minhaClasse`), Pseudoclasses (`:hover`) e Atributos: Peso 10.
4. Seletores por `Tag` (`h1`, `p`, `div`): Peso 1.

#### B) O Modelo de Caixa (Box Model)

Todo elemento na página Web é renderizado pelo navegador como uma **caixa retangular**. O Box Model é composto por 4 camadas concêntricas:

1. **Content (Conteúdo):** Onde o texto ou imagem realmente aparece (`width` e `height`).
2. **Padding (Preenchimento Interno):** O espaço entre o conteúdo e a borda.
3. **Border (Borda):** A linha ao redor do preenchimento e do conteúdo.
4. **Margin (Margem Externa):** O espaço do lado de fora da borda, usado para afastar o elemento dos seus vizinhos.

> ⚠️ **Propriedade Indispensável:** Sempre aplique `box-sizing: border-box;` no CSS Global. Isso faz com que o `width` e o `height` incluam o *padding* e a *border*, impedindo que caixas quebrem o layout ao adicionar espaçamentos.

```
+-------------------------------------------------+
| MARGIN (Espaçamento Externo)                    |
|  +-------------------------------------------+  |
|  | BORDER (Borda)                            |  |
|  |  +-------------------------------------+  |  |
|  |  | PADDING (Preenchimento Interno)     |  |  |
|  |  |  +-------------------------------+  |  |  |
|  |  |  | CONTEÚDO (Width x Height)    |  |  |  |
|  |  |  +-------------------------------+  |  |  |
|  |  +-------------------------------------+  |  |
|  +-------------------------------------------+  |
+-------------------------------------------------+

```

#### C) Flexbox (Flexible Box Layout)

Desenvolvido para criar layouts unidimensionais (alinhamento em linha ou em coluna). As propriedades fundamentais aplicadas ao container pai são:

* `display: flex;`: Ativa o contexto flexível.
* `justify-content`: Controla o alinhamento ao longo do **Eixo Principal** (`flex-start`, `center`, `space-between`, `space-around`).
* `align-items`: Controla o alinhamento ao longo do **Eixo Transversal** (`stretch`, `center`, `flex-end`).
* `flex-direction`: Define a direção dos filhos (`row` ou `column`).

---

## 3.2 O Framework Bootstrap 5

### 1. 📖 Explicação Expositiva e Detalhada

O Bootstrap é o framework CSS open-source mais popular do mundo para criação de interfaces responsivas *Mobile-First*.

* **Grid System:** Um sistema de grade responsivo composto por containers, linhas (`.row`) e colunas (`.col-*`) baseado em uma divisão de **12 colunas flexíveis**.
* **Breakpoints:** Pontos de interrupção baseados na largura da tela: `sm` ($\ge 576\text{px}$), `md` ($\ge 768\text{px}$), `lg` ($\ge 992\text{px}$), `xl` ($\ge 1200\text{px}$).
* **Componente Card:** Ideal para exibir dados estruturados (como nossos Pokémons) com cabeçalho, imagem, corpo e rodapé em um visual moderno.

---

### 2. 💡 Analogia do Mundo Real

Se o HTML é a estrutura de alvenaria do prédio:

* **CSS3:** É a **Pintura, Decoração, Iluminação e Paisagismo**. Define a cor das paredes, a textura do chão e a posição dos móveis.
* **Bootstrap 5:** É a contratação de uma **Empresa de Arquitetura de Interiores Pré-Fabricada**. Em vez de desenhar cada sofá e cadeira do zero no CSS, você simplesmente pega componentes modernos e testados diretamente do catálogo.

---

### 4. 💻 Código Prático Completo: Estilização do Dashboard com Bootstrap 5 via CDN

Abaixo está a interface responsiva utilizando a grade e os componentes do Bootstrap 5:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon Trading App - Interface Bootstrap</title>
  
  <!-- Inclusão do Bootstrap 5 via CDN (CSS) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- CSS Customizado para Sobrescrever Estilos -->
  <style>
    body {
      background-color: #f8f9fa;
    }
    .pokemon-card img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      margin: 0 auto;
    }
    .badge-fogo { background-color: #fd7d24; }
    .badge-eletrico { background-color: #eed535; color: #000; }
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
      
      <!-- Card Pokémon 1 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card pokemon-card text-center h-100 shadow-sm border-0">
          <div class="card-header bg-white border-0 pt-3">
            <span class="badge badge-eletrico rounded-pill px-3 py-2">Elétrico</span>
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

  <!-- Bootstrap 5 JavaScript Bundle via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

```

---

# MÓDULO 4: Projeto Full-Stack Gamificado — "Pokémon Trading App"

Chegou o momento de conectar **todas as pontas da Engenharia Full-Stack**. Construiremos do zero uma aplicação funcional com backend em **Node.js/Express**, banco de dados **MySQL** e frontend manipulando chamadas de API via **JavaScript Assíncrono (`fetch`)**.

---

## 4.1 Arquitetura do Banco de Dados Relacional (MySQL)

Abaixo está o script DDL SQL completo para criar a estrutura de dados do sistema, incluindo as chaves primárias (`PRIMARY KEY`) e estrangeiras (`FOREIGN KEY`):

```sql
-- 1. Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS pokemon_trading_db 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE pokemon_trading_db;

-- 2. Tabela de Usuários (Treinadores)
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL, -- Senha com hash de segurança
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 3. Tabela de Cards de Pokémons
CREATE TABLE IF NOT EXISTS pokemons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  nome VARCHAR(50) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
  nivel INT NOT NULL DEFAULT 1,
  ataque INT NOT NULL,
  hp INT NOT NULL,
  sprite_url VARCHAR(255) NOT NULL,
  CONSTRAINT fk_pokemons_usuarios 
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) 
    ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4. Tabela de Propostas de Troca entre Treinadores
CREATE TABLE IF NOT EXISTS trocas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pokemon_ofertado_id INT NOT NULL,
  pokemon_desejado_id INT NOT NULL,
  status ENUM('PENDENTE', 'ACEITA', 'RECUSADA') DEFAULT 'PENDENTE',
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pokemon_ofertado_id) REFERENCES pokemons(id) ON DELETE CASCADE,
  FOREIGN KEY (pokemon_desejado_id) REFERENCES pokemons(id) ON DELETE CASCADE
) ENGINE=InnoDB;

```

---

## 4.2 Back-End Completo em Node.js com Express e MySQL

### 1. 📖 Estrutura dos Arquivos do Servidor

O back-end é estruturado utilizando a biblioteca `mysql2/promise` para suporte nativo a comandos assíncronos (`async/await`) e `express-session` para gerenciamento da sessão do usuário logado na memória.

#### Estrutura de Pastas do Servidor:

```
/pokemon-app
  ├── package.json
  ├── server.js            <-- Ponto de Entrada da Aplicação
  ├── /config
  │     └── db.js          <-- Conexão com Banco de Dados MySQL
  └── /public              <-- Arquivos Estáticos (HTML, CSS, JS do Front)
        ├── index.html
        └── app.js

```

---

### 💻 Código do Back-End: Conexão com o Banco (`config/db.js`)

```javascript
const mysql = require('mysql2/promise');

// Criação do Pool de Conexões para garantir alta performance e reuso de sockets
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Insira sua senha do MySQL aqui
  database: 'pokemon_trading_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

```

---

### 💻 Código do Servidor REST API Completo (`server.js`)

```javascript
const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./config/db');

const app = express();
const PORT = 3000;

// Middlewares para Parse de JSON e Dados de Formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta public (HTML, CSS, JS do Front-end)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da Sessão do Usuário
app.use(session({
  secret: 'chave_secreta_pokemon_super_segura_2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // Sessão válida por 1 hora
}));

// Middleware de Proteção de Rotas (Garante que o usuário está logado)
function autenticarSessao(req, res, next) {
  if (req.session && req.session.usuarioId) {
    return next();
  }
  return res.status(401).json({ erro: 'Acesso negado. Realize o login.' });
}

// Lista de Pokémons Iniciais do Sistema para o Sorteio
const POKEMONS_INICIAIS = [
  { nome: 'Bulbasaur', tipo: 'Planta', ataque: 49, hp: 45, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { nome: 'Charmander', tipo: 'Fogo', ataque: 52, hp: 39, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { nome: 'Squirtle', tipo: 'Água', ataque: 48, hp: 44, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { nome: 'Pikachu', tipo: 'Elétrico', ataque: 55, hp: 35, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { nome: 'Eevee', tipo: 'Normal', ataque: 55, hp: 55, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' }
];

// ============================================================================
// 1. ROTAS DE AUTENTICAÇÃO E REGRA DE NEGÓCIO (SORTEIO DE 3 POKÉMONS)
// ============================================================================

// POST /api/cadastrar - Cria conta e concede 3 Pokémons sorteados
app.post('/api/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  const conexao = await db.getConnection();

  try {
    // Inicia uma Transação no Banco de Dados
    await conexao.beginTransaction();

    // Insere o Usuário
    const [resultUser] = await conexao.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha] // Na prática profissional, aplicar bcrypt no hash
    );

    const novoUsuarioId = resultUser.insertId;

    // REGRA DE NEGÓCIO: Sorteia 3 Pokémons Aleatórios sem repetição
    const pokemonsSorteados = [...POKEMONS_INICIAIS].sort(() => 0.5 - Math.random()).slice(0, 3);

    for (let poke of pokemonsSorteados) {
      await conexao.execute(
        'INSERT INTO pokemons (usuario_id, nome, tipo, nivel, ataque, hp, sprite_url) VALUES (?, ?, ?, 1, ?, ?, ?)',
        [novoUsuarioId, poke.nome, poke.tipo, poke.ataque, poke.hp, poke.sprite]
      );
    }

    // Confirma as alterações no banco
    await conexao.commit();
    res.status(201).json({ mensagem: 'Treinador cadastrado com sucesso! 3 Pokémons concedidos.' });

  } catch (erro) {
    await conexao.rollback(); // Cancela tudo se der erro
    if (erro.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ erro: 'E-mail já cadastrado no sistema.' });
    }
    res.status(500).json({ erro: 'Erro interno no servidor ao cadastrar.' });
  } finally {
    conexao.release();
  }
});

// POST /api/login - Realiza o login do usuário
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [linhas] = await db.execute(
      'SELECT id, nome, email FROM usuarios WHERE email = ? AND senha = ?',
      [email, senha]
    );

    if (linhas.length === 0) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    const usuario = linhas[0];
    req.session.usuarioId = usuario.id; // Salva o ID do usuário na Sessão
    req.session.usuarioNome = usuario.nome;

    res.json({ mensagem: 'Login realizado com sucesso!', usuario });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro no login.' });
  }
});

// POST /api/logout - Encerra a sessão
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ mensagem: 'Sessão encerrada.' });
});

// ============================================================================
// 2. CRUD COMPLETO DE CARDS DE POKÉMON
// ============================================================================

// READ: GET /api/meus-pokemons - Exibe os cards do usuário logado
app.get('/api/meus-pokemons', autenticarSessao, async (req, res) => {
  try {
    const [pokemons] = await db.execute(
      'SELECT * FROM pokemons WHERE usuario_id = ? ORDER BY id DESC',
      [req.session.usuarioId]
    );
    res.json(pokemons);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar Pokémons.' });
  }
});

// CREATE: POST /api/pokemons - Cadastra um novo card manualmente
app.post('/api/pokemons', autenticarSessao, async (req, res) => {
  const { nome, tipo, nivel, ataque, hp, sprite_url } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO pokemons (usuario_id, nome, tipo, nivel, ataque, hp, sprite_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.session.usuarioId, nome, tipo, nivel || 1, ataque, hp, sprite_url]
    );

    res.status(201).json({ id: result.insertId, mensagem: 'Card criado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar o card.' });
  }
});

// UPDATE: PUT /api/pokemons/:id - Atualiza os dados de um card do usuário
app.put('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;
  const { nivel, ataque, hp } = req.body;

  try {
    // Garante que o usuário só pode editar Pokémons que pertencem a ele!
    const [result] = await db.execute(
      'UPDATE pokemons SET nivel = ?, ataque = ?, hp = ? WHERE id = ? AND usuario_id = ?',
      [nivel, ataque, hp, id, req.session.usuarioId]
    );

    if (result.affectedRows === 0) {
      return res.status(403).json({ erro: 'Operação não permitida ou card não encontrado.' });
    }

    res.json({ mensagem: 'Pokémon atualizado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar o card.' });
  }
});

// DELETE: DELETE /api/pokemons/:id - Exclui um card
app.delete('/api/pokemons/:id', autenticarSessao, async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.execute(
      'DELETE FROM pokemons WHERE id = ? AND usuario_id = ?',
      [id, req.session.usuarioId]
    );

    if (result.affectedRows === 0) {
      return res.status(403).json({ erro: 'Operação não permitida.' });
    }

    res.json({ mensagem: 'Pokémon liberado da coleção com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao deletar Pokémon.' });
  }
});

// ============================================================================
// 3. MÓDULO DE TROCA DE CARDS ENTRE TREINADORES
// ============================================================================

// POST /api/trocas/propor - Propõe uma troca de Pokémons entre dois treinadores
app.post('/api/trocas/propor', autenticarSessao, async (req, res) => {
  const { pokemonOfertadoId, pokemonDesejadoId } = req.body;

  try {
    await db.execute(
      'INSERT INTO trocas (pokemon_ofertado_id, pokemon_desejado_id, status) VALUES (?, ?, "PENDENTE")',
      [pokemonOfertadoId, pokemonDesejadoId]
    );
    res.status(201).json({ mensagem: 'Proposta de troca enviada com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar proposta de troca.' });
  }
});

// POST /api/trocas/:id/aceitar - Executa a troca de donos dos Pokémons no BD
app.post('/api/trocas/:id/aceitar', autenticarSessao, async (req, res) => {
  const { id } = req.params;
  const conexao = await db.getConnection();

  try {
    await conexao.beginTransaction();

    // Busca a proposta de troca
    const [trocas] = await conexao.execute('SELECT * FROM trocas WHERE id = ? AND status = "PENDENTE"', [id]);

    if (trocas.length === 0) {
      return res.status(404).json({ erro: 'Proposta não encontrada ou já encerrada.' });
    }

    const troca = trocas[0];

    // Busca os donos atuais dos dois Pokémons
    const [poke1] = await conexao.execute('SELECT usuario_id FROM pokemons WHERE id = ?', [troca.pokemon_ofertado_id]);
    const [poke2] = await conexao.execute('SELECT usuario_id FROM pokemons WHERE id = ?', [troca.pokemon_desejado_id]);

    const dono1Id = poke1[0].usuario_id;
    const dono2Id = poke2[0].usuario_id;

    // INVERTE OS DONOS DOS POKÉMONS NO BANCO DE DADOS
    await conexao.execute('UPDATE pokemons SET usuario_id = ? WHERE id = ?', [dono2Id, troca.pokemon_ofertado_id]);
    await conexao.execute('UPDATE pokemons SET usuario_id = ? WHERE id = ?', [dono1Id, troca.pokemon_desejado_id]);

    // Atualiza o status da troca para ACEITA
    await conexao.execute('UPDATE trocas SET status = "ACEITA" WHERE id = ?', [id]);

    await conexao.commit();
    res.json({ mensagem: 'Troca de Pokémons concluída com sucesso!' });

  } catch (erro) {
    await conexao.rollback();
    res.status(500).json({ erro: 'Falha ao processar a troca.' });
  } finally {
    conexao.release();
  }
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Pokémon Trading App rodando em http://localhost:${PORT}`);
});

```

---

## 4.3 Front-End Interativo com JavaScript e Manipulação do DOM

Abaixo está o script JavaScript cliente (`public/app.js`) responsável por fazer as chamadas HTTP assíncronas via `fetch()` e renderizar dinamicamente os Cards do Bootstrap no HTML:

```javascript
// public/app.js - Lógica Front-End da Aplicação

document.addEventListener('DOMContentLoaded', () => {
  // Carrega a coleção de Pokémons logo ao abrir a página
  carregarMeusPokemons();

  // Captura o evento de submit do formulário de cadastro manual
  const formNovoPokemon = document.getElementById('form-novo-pokemon');
  if (formNovoPokemon) {
    formNovoPokemon.addEventListener('submit', cadastrarPokemon);
  }
});

// Função Assíncrona para buscar e renderizar os cards na tela
async function carregarMeusPokemons() {
  const containerGrid = document.getElementById('grid-pokemons');

  try {
    const resposta = await fetch('/api/meus-pokemons');
    
    if (resposta.status === 401) {
      alert('Sessão expirada. Redirecionando para o login...');
      window.location.href = '/login.html';
      return;
    }

    const pokemons = await resposta.json();
    containerGrid.innerHTML = ''; // Limpa a grade antes de renderizar

    if (pokemons.length === 0) {
      containerGrid.innerHTML = `<div class="col-12"><p class="text-center alert alert-warning">Sua coleção está vazia!</p></div>`;
      return;
    }

    // Percorre cada Pokémon e monta a estrutura HTML dos Cards do Bootstrap
    pokemons.forEach(poke => {
      const colHTML = `
        <div class="col-12 col-md-6 col-lg-4" id="card-pokemon-${poke.id}">
          <div class="card pokemon-card text-center h-100 shadow-sm border-0">
            <div class="card-header bg-white border-0 pt-3">
              <span class="badge bg-danger rounded-pill px-3 py-2">${poke.tipo}</span>
            </div>
            <img src="${poke.sprite_url}" class="card-img-top mt-2" alt="${poke.nome}">
            <div class="card-body">
              <h5 class="card-title fw-bold">${poke.nome}</h5>
              <p class="card-text text-muted mb-1">Nível: <strong id="nivel-val-${poke.id}">${poke.nivel}</strong></p>
              <div class="d-flex justify-content-center gap-3">
                <small><strong>Ataque:</strong> ${poke.ataque}</small>
                <small><strong>HP:</strong> ${poke.hp}</small>
              </div>
            </div>
            <div class="card-footer bg-white border-0 pb-3 d-flex justify-content-center gap-2">
              <button class="btn btn-primary btn-sm" onclick="subirNivel(${poke.id}, ${poke.nivel}, ${poke.ataque}, ${poke.hp})">⚡ Treinar (+1 Nível)</button>
              <button class="btn btn-outline-danger btn-sm" onclick="liberarPokemon(${poke.id})">🗑️ Liberar</button>
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

// Função Assíncrona para cadastrar um novo card (CREATE)
async function cadastrarPokemon(event) {
  event.preventDefault(); // Impede o recarregamento padrão da página

  const novoPoke = {
    nome: document.getElementById('nome').value,
    tipo: document.getElementById('tipo').value,
    nivel: parseInt(document.getElementById('nivel').value),
    ataque: parseInt(document.getElementById('ataque').value),
    hp: parseInt(document.getElementById('hp').value),
    sprite_url: document.getElementById('sprite_url').value || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  };

  try {
    const resposta = await fetch('/api/pokemons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoPoke)
    });

    if (resposta.ok) {
      alert('Novo Pokémon registrado na coleção!');
      carregarMeusPokemons(); // Recarrega a grade dinamicamente
    } else {
      alert('Erro ao cadastrar Pokémon.');
    }
  } catch (erro) {
    console.error('Erro no envio:', erro);
  }
}

// Função Assíncrona para atualizar os atributos do Pokémon (UPDATE)
async function subirNivel(id, nivelAtual, ataqueAtual, hpAtual) {
  const novoNivel = nivelAtual + 1;
  const novoAtaque = ataqueAtual + 5;
  const novoHp = hpAtual + 10;

  try {
    const resposta = await fetch(`/api/pokemons/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nivel: novoNivel, ataque: novoAtaque, hp: novoHp })
    });

    if (resposta.ok) {
      carregarMeusPokemons(); // Atualiza a tela sem recarregar a página!
    }
  } catch (erro) {
    console.error('Erro ao evoluir Pokémon:', erro);
  }
}

// Função Assíncrona para deletar um card (DELETE)
async function liberarPokemon(id) {
  if (!confirm('Deseja realmente soltar este Pokémon na natureza?')) return;

  try {
    const resposta = await fetch(`/api/pokemons/${id}`, {
      method: 'DELETE'
    });

    if (resposta.ok) {
      // Remove o elemento da árvore DOM diretamente para alta performance
      document.getElementById(`card-pokemon-${id}`).remove();
    }
  } catch (erro) {
    console.error('Erro ao liberar:', erro);
  }
}

```

---

### 5. ✏️ Exercício Prático Dirigido

Desenvolva uma nova rota no servidor Node.js (`POST /api/desafio/batalhar`) que simule uma mini-batalha entre o Pokémon do usuário logado e um Pokémon selvagem.

* **Regras de Negócio do Desafio:**
1. O cliente envia no corpo da requisição o `id` do seu Pokémon.
2. O servidor sorteia aleatoriamente os pontos do Pokémon selvagem (Ataque entre 10 e 80).
3. Se o ataque do Pokémon do usuário for maior que o do selvagem, o usuário vence e o sistema insere automaticamente o novo Pokémon selvagem na sua coleção.
4. O servidor deve retornar um JSON indicando se o usuário venceu ou perdeu a batalha.



---

### 6. ✅ Resposta e Explicação Passo a Passo

#### A) Código do Back-End em Node.js (`server.js`):

```javascript
// POST /api/desafio/batalhar - Mini-Jogo de Batalha Gamificado
app.post('/api/desafio/batalhar', autenticarSessao, async (req, res) => {
  const { meuPokemonId } = req.body;

  try {
    // 1. Busca os dados do Pokémon do Usuário no BD
    const [pokemons] = await db.execute(
      'SELECT * FROM pokemons WHERE id = ? AND usuario_id = ?',
      [meuPokemonId, req.session.usuarioId]
    );

    if (pokemons.length === 0) {
      return res.status(404).json({ erro: 'Seu Pokémon não foi encontrado.' });
    }

    const meuPokemon = pokemons[0];

    // 2. Sorteia os atributos do Pokémon Selvagem
    const ataqueSelvagem = Math.floor(Math.random() * 70) + 10;
    const vitoria = meuPokemon.ataque > ataqueSelvagem;

    if (vitoria) {
      // Sorteia um novo Pokémon de prêmio
      const novoPokemonNome = 'Mewtwo';
      const spritePrêmio = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png';

      await db.execute(
        'INSERT INTO pokemons (usuario_id, nome, tipo, nivel, ataque, hp, sprite_url) VALUES (?, ?, "Lendário", 50, 110, 106, ?)',
        [req.session.usuarioId, novoPokemonNome, spritePrêmio]
      );

      return res.json({
        resultado: 'VITÓRIA',
        mensagem: `Incrível! Seu ${meuPokemon.nome} (Ataque: ${meuPokemon.ataque}) venceu o Pokémon Selvagem (Ataque: ${ataqueSelvagem}). Você capturou um Mewtwo!`,
        vitoria: true
      });
    } else {
      return res.json({
        resultado: 'DERROTA',
        mensagem: `Que pena! O Pokémon Selvagem (Ataque: ${ataqueSelvagem}) era mais forte que seu ${meuPokemon.nome} (Ataque: ${meuPokemon.ataque}). Treine mais!`,
        vitoria: false
      });
    }

  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao processar batalha.' });
  }
});

```

#### B) Passo a Passo da Lógica Implementada:

1. **Verificação de Segurança:** A rota utiliza o middleware `autenticarSessao` para garantir que um visitante anônimo não consiga disparar batalhas.
2. **Consulta Parametrizada:** A busca SQL utiliza a sintaxe `WHERE id = ? AND usuario_id = ?` com *Prepared Statements* para impedir ataques de **SQL Injection** e garantir que o treinador só possa batalhar usando Pokémons que realmente pertençam a ele.
3. **Lógica de Sorteio Gamificado:** O método `Math.random()` do JavaScript gera o poder do adversário.
4. **Persistência do Prêmio:** Caso o jogador vença (`vitoria === true`), a instrução `INSERT INTO pokemons` grava o novo card lendário diretamente atrelado ao `usuario_id` da sessão ativa, garantindo atualização imediata do seu inventário no banco de dados.

---

## 🎓 CONSIDERAÇÕES FINAIS DO PROFESSOR

Parabéns por ter concluído este manual integral de **Desenvolvimento Web Full-Stack**!

Nesta disciplina, você percorreu toda a jornada da Engenharia de Software para a Web:

1. Compreendeu a **Arquitetura Cliente-Servidor**, o ciclo HTTP e o funcionamento da Internet.
2. Dominou a marcação semântica com **HTML5** e a estilização responsiva moderna com **CSS3 e Bootstrap 5**.
3. Construiu uma arquitetura completa no **Node.js com Express**, protegida por **Sessões e Validação de Transações**.
4. Projetou um banco de dados relacional resiliente em **MySQL** aplicando chaves e integridade referencial.
5. Desenvolveu a interatividade reativa do Front-end consumindo dados via **JavaScript Assíncrono (`fetch API`)**.

Continue praticando, expandindo o código do **Pokémon Trading App** e aplicando esses conceitos em seus novos projetos profissionais. O mercado de tecnologia busca profissionais que dominam não apenas as linguagens, mas a engenharia por trás do software!