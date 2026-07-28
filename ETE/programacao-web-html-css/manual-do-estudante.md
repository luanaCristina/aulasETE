# 📘 Manual de Apoio ao Estudante — Programação Web: HTML5 & CSS3 (160h)

**Escola Técnica Estadual de Pernambuco**
**Professora:** Luana Cristina
**Curso:** Desenvolvimento de Sistemas

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Como a Web Funciona

Quando você acessa um site, acontece algo parecido com **enviar uma carta pelo correio**:

1. **Você (navegador)** escreve o endereço (URL) — é como colocar o endereço no envelope
2. **DNS** traduz o nome (google.com) para o número IP — é como os Correios traduzindo o CEP para localização
3. **Requisição HTTP** viaja pela internet até o servidor — a carta viajando até o destino
4. **Servidor** processa e envia a resposta (HTML, CSS, JS) — o destinatário escreve a resposta
5. **Navegador** recebe e renderiza a página — você abre a carta de volta e lê

### 1.2 HTML — A Estrutura

HTML (HyperText Markup Language) é o **esqueleto** do site.

> 🦴 **Analogia:** HTML é como o esqueleto de um corpo humano. Define a estrutura — onde fica a cabeça, os braços, as pernas. Sem esqueleto, o corpo é um monte de gelatina sem forma.

**Conceitos fundamentais:**
- **Tags** — Instruções entre `< >` que definem elementos (ex: `<p>`, `<h1>`, `<img>`)
- **Elementos** — Tag de abertura + conteúdo + tag de fechamento
- **Atributos** — Informações extras dentro da tag (ex: `class`, `id`, `src`, `href`)
- **Semântica** — Usar tags que têm SIGNIFICADO (ex: `<header>` em vez de `<div>`)

**Tags semânticas principais:**
| Tag | Significado | Analogia |
|-----|-----------|----------|
| `<header>` | Cabeçalho | Topo da página do jornal |
| `<nav>` | Navegação | Índice do livro |
| `<main>` | Conteúdo principal | Texto do capítulo |
| `<article>` | Conteúdo independente | Uma notícia completa |
| `<section>` | Seção temática | Capítulo do livro |
| `<aside>` | Conteúdo lateral | Nota de rodapé |
| `<footer>` | Rodapé | Créditos no final do filme |

### 1.3 CSS — A Aparência

CSS (Cascading Style Sheets) define **como** os elementos aparecem.

> 👗 **Analogia:** Se HTML é o esqueleto, CSS é a roupa e maquiagem. Você pode vestir o mesmo corpo (HTML) com roupas completamente diferentes (CSS) — casual, formal, fantasia — e a pessoa parece outra.

**3 formas de usar CSS:**
1. **Inline** — Dentro da tag (não recomendado): `<p style="color: red">`
2. **Interno** — Dentro de `<style>` no `<head>` (para testes rápidos)
3. **Externo** — Arquivo `.css` separado (recomendado ✅)

### 1.4 Box Model

Todo elemento HTML é uma **caixa retangular** com 4 camadas.

> 🎁 **Analogia do presente embrulhado:**
> - **Content** = o presente em si
> - **Padding** = o isopor/proteção ao redor do presente dentro da caixa
> - **Border** = a caixa (papelão)
> - **Margin** = o espaço entre esta caixa e as outras na estante

```
┌─────────── margin ───────────┐
│  ┌──────── border ────────┐  │
│  │  ┌──── padding ────┐   │  │
│  │  │                  │   │  │
│  │  │    CONTENT       │   │  │
│  │  │                  │   │  │
│  │  └─────────────────-┘   │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

**Dica importante:** Use `box-sizing: border-box` para que padding e border não aumentem o tamanho total do elemento.

### 1.5 Flexbox

Flexbox é um sistema de **layout unidimensional** (linha OU coluna).

> 📚 **Analogia da estante de livros:** Imagine uma prateleira. Os livros são os itens flex. Você pode:
> - Alinhar todos à esquerda, ao centro, ou espalhados
> - Colocar espaço igual entre eles
> - Fazer um livro maior que os outros
> - Mudar a ordem sem tirar da estante

**Propriedades do container (pai):**
| Propriedade | O que faz |
|------------|----------|
| `display: flex` | Ativa o flexbox |
| `flex-direction` | row (linha) ou column (coluna) |
| `justify-content` | Alinha no eixo principal |
| `align-items` | Alinha no eixo cruzado |
| `flex-wrap` | Permite quebra de linha |
| `gap` | Espaço entre itens |

### 1.6 CSS Grid

Grid é um sistema de **layout bidimensional** (linhas E colunas ao mesmo tempo).

> 📊 **Analogia da planilha Excel:** Grid funciona como uma planilha — você define quantas linhas e colunas quer, e depois posiciona cada elemento em células específicas. Pode mesclar células como no Excel.

**Propriedades essenciais:**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 colunas iguais */
  grid-template-rows: auto;
  gap: 16px;
}
```

**Quando usar Flexbox vs Grid?**
- **Flexbox** → Layout em UMA direção (navbar, lista de cards)
- **Grid** → Layout em DUAS direções (página inteira, galeria de fotos)

### 1.7 Responsividade

Design responsivo faz o site **se adaptar** a qualquer tamanho de tela.

> 💧 **Analogia da água no copo:** A água não tem forma própria — ela se adapta ao recipiente. Seu site deve ser como água: se encaixar perfeitamente em qualquer tela (celular, tablet, desktop, TV).

**Ferramentas para responsividade:**
- `meta viewport` — Diz ao navegador para usar a largura do dispositivo
- Unidades relativas (`%`, `em`, `rem`, `vw`, `vh`)
- Media Queries — Regras CSS que mudam conforme a tela
- Flexbox e Grid — Layouts flexíveis nativamente
- Imagens responsivas (`max-width: 100%`)

**Mobile First:** Comece estilizando para celular e depois adicione estilos para telas maiores.

---

## Capítulo 2 — Exemplos de Código Comentados

### 2.1 Página Semântica Completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio — João Silva</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- CABEÇALHO: Logo + Navegação -->
    <header>
        <h1>João Silva</h1>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- CONTEÚDO PRINCIPAL -->
    <main>
        <!-- Seção Sobre -->
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <p>Estudante de Desenvolvimento de Sistemas na ETE Pernambuco.</p>
        </section>

        <!-- Seção Projetos (cada projeto é um article) -->
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <article>
                <h3>Calculadora Web</h3>
                <p>Calculadora feita com HTML, CSS e JavaScript.</p>
                <a href="#">Ver projeto</a>
            </article>
            <article>
                <h3>Landing Page</h3>
                <p>Página responsiva para barbearia fictícia.</p>
                <a href="#">Ver projeto</a>
            </article>
        </section>

        <!-- Conteúdo lateral -->
        <aside>
            <h3>Tecnologias</h3>
            <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>Figma</li>
            </ul>
        </aside>
    </main>

    <!-- RODAPÉ -->
    <footer id="contato">
        <p>Contato: joao@email.com</p>
        <p>&copy; 2025 João Silva. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

### 2.2 Formulário com Validação HTML5

```html
<form action="/enviar" method="POST">
    <!-- Campo obrigatório com placeholder -->
    <label for="nome">Nome Completo *</label>
    <input 
        type="text" 
        id="nome" 
        name="nome" 
        required 
        minlength="3"
        placeholder="Digite seu nome completo"
    >

    <!-- Email com validação automática -->
    <label for="email">E-mail *</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        placeholder="seu@email.com"
    >

    <!-- Telefone com padrão (regex) -->
    <label for="telefone">Telefone</label>
    <input 
        type="tel" 
        id="telefone" 
        name="telefone" 
        pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
        placeholder="81999998888"
    >

    <!-- Select (dropdown) -->
    <label for="assunto">Assunto *</label>
    <select id="assunto" name="assunto" required>
        <option value="">Selecione...</option>
        <option value="duvida">Dúvida</option>
        <option value="elogio">Elogio</option>
        <option value="reclamacao">Reclamação</option>
    </select>

    <!-- Textarea com limite -->
    <label for="mensagem">Mensagem *</label>
    <textarea 
        id="mensagem" 
        name="mensagem" 
        rows="5" 
        required 
        maxlength="500"
        placeholder="Escreva sua mensagem (máx. 500 caracteres)"
    ></textarea>

    <!-- Botão de envio -->
    <button type="submit">Enviar Mensagem</button>
</form>
```

### 2.3 Flexbox — Navbar + Cards

```html
<!-- NAVBAR COM FLEXBOX -->
<nav class="navbar">
    <div class="logo">DevJr</div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</nav>

<!-- SEÇÃO DE CARDS COM FLEXBOX -->
<section class="cards-container">
    <article class="card">
        <img src="projeto1.jpg" alt="Screenshot do projeto 1">
        <h3>Projeto 1</h3>
        <p>Descrição breve do projeto.</p>
        <a href="#" class="btn">Ver mais</a>
    </article>
    <article class="card">
        <img src="projeto2.jpg" alt="Screenshot do projeto 2">
        <h3>Projeto 2</h3>
        <p>Descrição breve do projeto.</p>
        <a href="#" class="btn">Ver mais</a>
    </article>
    <article class="card">
        <img src="projeto3.jpg" alt="Screenshot do projeto 3">
        <h3>Projeto 3</h3>
        <p>Descrição breve do projeto.</p>
        <a href="#" class="btn">Ver mais</a>
    </article>
</section>
```

```css
/* === NAVBAR === */
.navbar {
    display: flex;                   /* Ativa flexbox */
    justify-content: space-between;  /* Logo à esquerda, links à direita */
    align-items: center;             /* Centraliza verticalmente */
    padding: 1rem 2rem;
    background-color: #1a1a2e;
    color: white;
}

.nav-links {
    display: flex;       /* Links em linha */
    list-style: none;    /* Remove bolinhas */
    gap: 2rem;           /* Espaço entre links */
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links a:hover {
    color: #e94560;      /* Cor ao passar o mouse */
}

/* === CARDS === */
.cards-container {
    display: flex;
    flex-wrap: wrap;          /* Permite quebrar linha */
    justify-content: center;  /* Centraliza os cards */
    gap: 2rem;
    padding: 2rem;
}

.card {
    flex: 1 1 300px;          /* Cresce, encolhe, base de 300px */
    max-width: 350px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);  /* Sobe ao passar mouse */
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card h3, .card p {
    padding: 0 1rem;
}

.btn {
    display: inline-block;
    margin: 1rem;
    padding: 0.5rem 1.5rem;
    background-color: #e94560;
    color: white;
    border-radius: 6px;
    text-decoration: none;
}
```

### 2.4 Grid Layout Responsivo

```css
/* Layout de página completa com Grid */
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;       /* Sidebar fixa + conteúdo flexível */
    grid-template-rows: 80px 1fr 60px;      /* Header + main + footer */
    grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
    min-height: 100vh;
}

.header  { grid-area: header;  background: #1a1a2e; }
.sidebar { grid-area: sidebar; background: #16213e; }
.content { grid-area: content; padding: 2rem; }
.footer  { grid-area: footer;  background: #0f3460; }

/* Responsivo: em telas pequenas, sidebar vira linha */
@media (max-width: 768px) {
    .page-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "sidebar"
            "content"
            "footer";
    }
}
```

### 2.5 Media Queries — Mobile First

```css
/* === MOBILE FIRST: Estilos base para celular === */
.container {
    padding: 1rem;
    font-size: 16px;
}

.grid-projetos {
    display: grid;
    grid-template-columns: 1fr;  /* Uma coluna no celular */
    gap: 1rem;
}

/* === TABLET (768px+) === */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 720px;
        margin: 0 auto;
    }

    .grid-projetos {
        grid-template-columns: 1fr 1fr;  /* Duas colunas no tablet */
    }
}

/* === DESKTOP (1024px+) === */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }

    .grid-projetos {
        grid-template-columns: repeat(3, 1fr);  /* Três colunas no desktop */
        gap: 2rem;
    }
}

/* === DESKTOP GRANDE (1440px+) === */
@media (min-width: 1440px) {
    .grid-projetos {
        grid-template-columns: repeat(4, 1fr);  /* Quatro colunas */
    }
}
```

### 2.6 Animação CSS

```css
/* Animação de entrada com @keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicando a animação nos cards */
.card {
    animation: fadeInUp 0.6s ease forwards;
}

/* Atraso escalonado para cada card */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }

/* Botão com transição suave */
.btn {
    transition: all 0.3s ease;
    /* all = todas as propriedades */
    /* 0.3s = duração */
    /* ease = aceleração suave */
}

.btn:hover {
    background-color: #c0392b;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(233, 69, 96, 0.4);
}

/* Loading spinner */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #e94560;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

---

## Capítulo 3 — Glossário Técnico

| Termo | Pronúncia | Significado |
|-------|-----------|-------------|
| **HTML** | êitch-ti-ême-él | Linguagem de Marcação de Hipertexto — estrutura da página |
| **CSS** | ci-éss-éss | Folhas de Estilo em Cascata — aparência visual |
| **Tag** | tég | Instrução HTML entre `< >` que define um elemento |
| **Element** | élement | Tag + conteúdo + fechamento (ex: `<p>texto</p>`) |
| **Attribute** | atríbiut | Informação extra na tag (ex: `class="btn"`) |
| **Selector** | seléctor | Indica QUAL elemento será estilizado no CSS |
| **Property** | própérti | O QUE será estilizado (ex: `color`, `font-size`) |
| **Value** | váliu | O valor da propriedade (ex: `red`, `16px`) |
| **Class** | cléss | Atributo para agrupar elementos (reutilizável) |
| **ID** | ái-dí | Identificador único para um elemento específico |
| **Semantic** | semântic | Tags com significado (ex: `<nav>` vs `<div>`) |
| **Responsive** | rispônsiv | Design que se adapta a qualquer tela |
| **Viewport** | viú-port | Área visível da tela do dispositivo |
| **Breakpoint** | brêik-point | Largura onde o layout muda (ex: 768px) |
| **Flexbox** | flécs-bócs | Sistema de layout em uma direção (linha ou coluna) |
| **Grid** | gríd | Sistema de layout em duas direções (linhas + colunas) |
| **Box Model** | bócs módel | Modelo de caixa: content + padding + border + margin |
| **Margin** | márdjin | Espaço externo ao redor do elemento |
| **Padding** | pédin | Espaço interno entre o conteúdo e a borda |
| **Border** | bórder | Linha ao redor do elemento |
| **Display** | displéi | Como o elemento se comporta no layout (block, flex, grid) |
| **Position** | pozíxon | Posicionamento do elemento (static, relative, absolute, fixed) |
| **Float** | flôut | Faz elemento "flutuar" (legado — use flexbox/grid) |
| **Specificity** | espescifísiti | Peso de um seletor CSS (ID > classe > tag) |
| **Cascade** | cascêid | Ordem em que CSS aplica estilos (último vence) |
| **Inheritance** | inrêritans | Propriedades que passam de pai para filho |
| **Pseudo-class** | siúdo-cléss | Estado especial (`:hover`, `:focus`, `:first-child`) |
| **Pseudo-element** | siúdo-élement | Parte do elemento (`::before`, `::after`) |
| **Media Query** | mídia cuéri | Regra CSS condicional por tamanho de tela |
| **Mobile First** | móbail fêrst | Estratégia: estilizar celular primeiro, depois telas maiores |
| **Framework** | frêim-uórc | Conjunto pronto de CSS (ex: Bootstrap, Tailwind) |
| **Preprocessor** | pri-prósessor | Ferramenta que adiciona recursos ao CSS (ex: SASS) |
| **Variable** | vériábol | Valor reutilizável (`--cor-primaria: #e94560`) |
| **Animation** | animêixon | Movimento/transição com `@keyframes` |
| **Transition** | tranzíxon | Mudança suave entre dois estados |
| **Transform** | transfórm | Altera forma/posição (rotate, scale, translate) |
| **Gradient** | grêidient | Degradê de cores (linear ou radial) |
| **Opacity** | opáciti | Transparência (0 = invisível, 1 = sólido) |
| **z-index** | zí-índecs | Camada de empilhamento (quem fica "na frente") |
| **Accessibility** | acessibíliti | Práticas para tornar o site usável por todos |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### 📚 Documentação e Referência

| Recurso | Descrição | Link |
|---------|----------|------|
| **MDN Web Docs** | Documentação oficial e completa (Mozilla) | [developer.mozilla.org](https://developer.mozilla.org/pt-BR/) |
| **CSS-Tricks** | Guias visuais de Flexbox, Grid e mais | [css-tricks.com](https://css-tricks.com) |
| **W3Schools** | Tutoriais interativos com "Try it" | [w3schools.com](https://www.w3schools.com) |
| **Can I Use** | Verifica compatibilidade entre navegadores | [caniuse.com](https://caniuse.com) |
| **W3C Validator** | Valida se seu HTML está correto | [validator.w3.org](https://validator.w3.org) |

### 🎮 Aprenda Jogando

| Jogo | O que ensina | Link |
|------|-------------|------|
| **Flexbox Froggy** | Flexbox (posicione os sapos!) | [flexboxfroggy.com](https://flexboxfroggy.com) |
| **Grid Garden** | CSS Grid (regue o jardim!) | [cssgridgarden.com](https://cssgridgarden.com) |
| **Flexbox Defense** | Flexbox com torre de defesa | [flexboxdefense.com](http://www.flexboxdefense.com) |
| **CSS Diner** | Seletores CSS (selecione os pratos!) | [flukeout.github.io](https://flukeout.github.io) |
| **Codepip** | Vários jogos de CSS | [codepip.com](https://codepip.com) |

### 🛠️ Ferramentas

| Ferramenta | Para quê | Link |
|-----------|---------|------|
| **CodePen** | Testar HTML/CSS/JS no navegador | [codepen.io](https://codepen.io) |
| **VS Code** | Editor de código principal | [code.visualstudio.com](https://code.visualstudio.com) |
| **Live Server** | Extensão VS Code para preview ao vivo | Buscar nas extensões do VS Code |
| **Google Fonts** | Fontes gratuitas para web | [fonts.google.com](https://fonts.google.com) |
| **Coolors** | Gerar paletas de cores | [coolors.co](https://coolors.co) |
| **Font Awesome** | Ícones gratuitos | [fontawesome.com](https://fontawesome.com) |

### 🎓 Cursos e Canais Gratuitos

| Recurso | Plataforma | Link |
|---------|-----------|------|
| HTML5 e CSS3 | Curso em Vídeo (Gustavo Guanabara) | [cursoemvideo.com](https://www.cursoemvideo.com) |
| freeCodeCamp (Responsive Web Design) | freeCodeCamp | [freecodecamp.org](https://www.freecodecamp.org) |
| Kevin Powell (CSS avançado) | YouTube | [youtube.com/@KevinPowell](https://www.youtube.com/@KevinPowell) |
| Frontend Mentor (desafios práticos) | Frontend Mentor | [frontendmentor.io](https://www.frontendmentor.io) |
| Rocketseat Discover | Rocketseat | [rocketseat.com.br](https://www.rocketseat.com.br/discover) |

### 📖 Referências Visuais (Guias)

- **Flexbox Cheatsheet:** [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid Cheatsheet:** [css-tricks.com/snippets/css/complete-guide-grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **HTML Reference:** [htmlreference.io](https://htmlreference.io)
- **CSS Reference:** [cssreference.io](https://cssreference.io)

---

> 📝 **Nota da Professora:** Programação se aprende PRATICANDO. Não adianta só ler — abra o VS Code e reproduza cada exemplo. Erre, quebre, conserte. É assim que se aprende! 💪
>
> — Profª Luana Cristina
