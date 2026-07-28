# 📖 Revisões — HTML5/CSS3 (3 Avaliações)

---

## REVISÃO AV1 — HTML Semântico + Formulários

### Resumo Rápido
- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Headings em ORDEM: h1 → h2 → h3 (nunca pule!)
- Formulários: todo `<input>` precisa de `<label for="id">`
- Atributos: required, placeholder, type (email, tel, date, password)
- `<img>` SEMPRE com `alt="descrição"`

### Erros Comuns
1. Usar `<div>` para tudo — use tags semânticas!
2. `<img>` sem alt — falha de acessibilidade
3. `<label>` sem `for` — leitor de tela não associa
4. Esquecer `<meta viewport>` — site não responsivo
5. `<br>` para espaçamento — use CSS margin/padding

### Exercícios (5)
1. Estruturar página com header+nav+main+footer semânticos
2. Criar form com 6 tipos de input diferentes + validação HTML5
3. Corrigir HTML dado com 5 erros de semântica
4. Criar lista de definições (`<dl><dt><dd>`) para glossário
5. Tabela acessível com `<caption>`, `<thead>`, `<th scope>`

---

## REVISÃO AV2 — Flexbox + Grid + Responsividade

### Resumo Rápido
```css
/* FLEXBOX — 1 dimensão (linha OU coluna) */
display: flex;
justify-content: center;     /* eixo principal */
align-items: center;         /* eixo cruzado */
gap: 1rem;                   /* espaço entre itens */
flex-wrap: wrap;             /* quebrar linha */

/* GRID — 2 dimensões (linhas E colunas) */
display: grid;
grid-template-columns: repeat(3, 1fr);   /* 3 colunas iguais */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* responsivo! */
gap: 1rem;

/* MOBILE-FIRST */
/* CSS base = mobile, depois: */
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
```

### Erros Comuns
1. Usar Flexbox para grid 2D — use Grid!
2. Larguras fixas em px — use %, rem, fr, min/max
3. Media queries com max-width — use min-width (mobile-first)
4. Imagens estourando container — `max-width: 100%; height: auto`
5. Esquecer `box-sizing: border-box` — padding soma na largura

### Exercícios (5)
1. Header: logo à esquerda + nav à direita com Flexbox
2. Grid de 6 cards que vai de 1→2→3 colunas
3. Layout Holy Grail (header + sidebar + main + footer) com Grid
4. Card responsivo: imagem em cima (mobile) e ao lado (desktop)
5. Footer com 4 colunas que vira 2+2 no tablet e 1 coluna no mobile

---

## REVISÃO AV3 — Consolidação Total

### Checklist Final
- [ ] HTML semântico validado no W3C
- [ ] CSS com custom properties (variáveis)
- [ ] Flexbox para componentes (header, card, nav)
- [ ] Grid para layouts (página toda, galerias)
- [ ] 3 breakpoints mobile-first
- [ ] Acessibilidade: alt, label, contraste, focus
- [ ] Animações: transition + hover states

### Exercício Final
Criar landing page completa em 90 min: hero + sobre + cards + form + footer.
Responsiva, acessível, com variáveis CSS, Flexbox E Grid.
