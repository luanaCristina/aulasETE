# 🎓 Módulo I — Fundamentos Web & Lógica

## Projeto: Landing Page Responsiva — "Feira Criativa Recife"

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Iniciante  
> **Duração estimada:** 4 a 6 semanas  
> **Entrega final:** Site publicado no GitHub Pages

---

## 📖 História do Cliente / Problema a Resolver

### O Cliente

A **"Feira Criativa Recife"** é uma feira de artesanato e economia criativa que acontece todo último sábado do mês no bairro de Casa Forte. Reúne cerca de 40 artesãos locais que vendem produtos como cerâmica, macramê, bordados, velas artesanais e comidas típicas.

### O Problema

Dona Mércia, organizadora da feira há 3 anos, enfrenta os seguintes desafios:

1. **Divulgação limitada** — Toda comunicação é feita apenas por grupos de WhatsApp. Pessoas de fora do bairro não sabem que a feira existe.
2. **Sem catálogo dos artesãos** — Visitantes não conseguem ver antecipadamente quem estará na feira ou que tipo de produto encontrarão.
3. **Contato descentralizado** — Artesãos interessados em participar não têm um canal oficial para se inscrever.
4. **Sem identidade visual digital** — A feira não tem presença online profissional, o que dificulta parcerias com a prefeitura e patrocinadores.

### A Missão

Vocês foram contratados como equipe de desenvolvimento para criar a **primeira presença digital da Feira Criativa Recife**: uma Landing Page moderna, responsiva e acessível que resolva todos esses problemas.

---

## 📋 Requisitos Funcionais

### RF01 — Header com Navegação Fixa

| Item | Descrição |
|------|-----------|
| Logo | Nome estilizado "Feira Criativa Recife" |
| Menu | Links âncora: Início, Sobre, Artesãos, Próxima Edição, Contato |
| Mobile | Menu hambúrguer com animação de abertura/fechamento |
| Comportamento | Header fixo no topo durante scroll |

### RF02 — Seção Hero (Banner Principal)

| Item | Descrição |
|------|-----------|
| Visual | Imagem de fundo com overlay gradient |
| Texto | Título principal + subtítulo com data da próxima feira |
| CTA | Botão "Conheça Nossos Artesãos" → scroll para galeria |
| Animação | Fade-in sutil no carregamento da página |

### RF03 — Seção "Sobre a Feira"

| Item | Descrição |
|------|-----------|
| Texto | Breve história (2-3 parágrafos) |
| Números | Cards com métricas: "40+ Artesãos", "3 Anos de Tradição", "1.500+ Visitantes/mês" |
| Imagem | Foto da feira em funcionamento |

### RF04 — Galeria de Artesãos

| Item | Descrição |
|------|-----------|
| Layout | Grid responsivo: 1col (mobile), 2col (tablet), 3col (desktop) |
| Card | Foto do artesão, nome, tipo de produto, breve descrição |
| Interação | Hover com leve zoom na imagem e sombra elevada |
| Mínimo | 6 cards de artesãos fictícios |

### RF05 — Seção "Próxima Edição"

| Item | Descrição |
|------|-----------|
| Info | Data, horário (8h às 16h), endereço completo |
| Mapa | Embed do Google Maps ou imagem estática com link |
| Destaque | Atrações especiais (ex: "Música ao vivo", "Oficina de cerâmica") |

### RF06 — Formulário de Contato / Inscrição de Artesão

| Item | Descrição |
|------|-----------|
| Campos | Nome*, E-mail*, Telefone, Tipo de artesanato (select), Mensagem* |
| Validação JS | Campos obrigatórios, formato de e-mail, telefone com máscara |
| Feedback | Mensagem de sucesso (verde) ou erro (vermelho) sem recarregar página |
| Acessibilidade | Labels visíveis, mensagens de erro vinculadas via aria-describedby |

### RF07 — Seção "Como Participar"

| Item | Descrição |
|------|-----------|
| Cards | 3 opções: "Seja Expositor", "Seja Voluntário", "Seja Patrocinador" |
| Visual | Ícone + título + breve texto para cada opção |
| CTA | Cada card com botão que direciona ao formulário |

### RF08 — Footer Completo

| Item | Descrição |
|------|-----------|
| Redes | Ícones: Instagram, Facebook, WhatsApp (links fictícios) |
| Info | Endereço, e-mail de contato |
| Legal | "© 2025 Feira Criativa Recife — Todos os direitos reservados" |
| Nav | Links rápidos repetindo o menu principal |
| Extra | Botão "Voltar ao topo" com scroll suave |

---

## 🎨 Critérios de Aceite — UI/UX e Acessibilidade

### Design Mobile-First

```
Breakpoints obrigatórios:
├── Mobile:  320px - 767px  (layout padrão / base)
├── Tablet:  768px - 1023px (ajustes de grid)
└── Desktop: 1024px+        (layout completo)
```

- [ ] O CSS base (sem media query) atende mobile
- [ ] Media queries usam `min-width` (abordagem mobile-first)
- [ ] Touch targets (botões/links) têm no mínimo 44x44px
- [ ] Nenhum scroll horizontal em nenhuma resolução
- [ ] Imagens usam `max-width: 100%` e `height: auto`

### Acessibilidade (WCAG 2.1 — Nível AA)

- [ ] `<html lang="pt-BR">` declarado
- [ ] Estrutura com tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] Headings em ordem hierárquica (h1 → h2 → h3, sem pular níveis)
- [ ] Todas as imagens com atributo `alt` descritivo
- [ ] Contraste de texto ≥ 4.5:1 (verificar com ferramenta)
- [ ] Formulário com `<label for="id">` em todos os campos
- [ ] Focus visível em todos os elementos interativos
- [ ] Navegação completa possível apenas com teclado (Tab/Shift+Tab/Enter/Esc)
- [ ] Skip link: "Pular para o conteúdo principal" como primeiro elemento focável

### UX / Interação

- [ ] Scroll suave entre seções (`scroll-behavior: smooth`)
- [ ] Estados visuais em botões: hover, focus, active
- [ ] Formulário não recarrega a página ao enviar (usar `preventDefault()`)
- [ ] Feedback de loading se necessário
- [ ] Menu mobile fecha ao clicar em um link ou fora dele

---

## 🛠️ Tecnologias e Ferramentas

| Ferramenta | Propósito | Link |
|---|---|---|
| **HTML5** | Estrutura semântica | [MDN HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) |
| **CSS3** | Estilização (Flexbox + Grid) | [CSS Tricks](https://css-tricks.com/) |
| **JavaScript ES6+** | Validação e interações | [MDN JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| **Figma** | Protótipo visual | [figma.com](https://www.figma.com/) |
| **Google Fonts** | Tipografia | [fonts.google.com](https://fonts.google.com/) |
| **Font Awesome / Phosphor** | Ícones | [fontawesome.com](https://fontawesome.com/) |
| **Git + GitHub** | Versionamento | [github.com](https://github.com/) |
| **GitHub Pages** | Publicação | [pages.github.com](https://pages.github.com/) |
| **Lighthouse** | Auditoria de qualidade | DevTools do Chrome |

---

## 📁 Estrutura de Pastas do Projeto

```
feira-criativa-recife/
├── index.html              ← Página única (Landing Page)
├── css/
│   ├── reset.css           ← Reset de estilos padrão do navegador
│   ├── variables.css       ← Custom Properties (cores, fontes, espaçamentos)
│   ├── style.css           ← Estilos principais
│   └── responsive.css      ← Media queries (tablet e desktop)
├── js/
│   ├── menu.js             ← Lógica do menu hambúrguer
│   ├── scroll.js           ← Scroll suave e botão voltar ao topo
│   └── form.js             ← Validação do formulário
├── img/
│   ├── hero.jpg            ← Banner principal
│   ├── feira-sobre.jpg     ← Foto seção Sobre
│   └── artesaos/           ← Fotos dos artesãos (6+)
├── design/
│   └── wireframe.fig       ← Arquivo Figma ou link compartilhado
├── .gitignore
└── README.md               ← Documentação do projeto do aluno
```

---

## ✅ Checklist de Entrega do Aluno

### Fase 1 — Planejamento (Semana 1-2)

- [ ] Criar wireframe no Figma (versão mobile + desktop)
- [ ] Definir paleta de cores (máximo 5 cores, incluindo texto e fundo)
- [ ] Escolher 2 fontes no Google Fonts (título + corpo)
- [ ] Criar repositório no GitHub com README inicial
- [ ] Configurar `.gitignore`

### Fase 2 — Desenvolvimento (Semana 3-4)

- [ ] Estrutura HTML completa e semântica (validar no [W3C Validator](https://validator.w3.org/))
- [ ] CSS com variáveis, Flexbox e Grid
- [ ] Responsividade implementada nos 3 breakpoints
- [ ] Menu hambúrguer funcional
- [ ] Galeria de artesãos em grid
- [ ] Formulário com validação JavaScript
- [ ] Scroll suave e interações

### Fase 3 — Qualidade e Publicação (Semana 5-6)

- [ ] Testar em pelo menos 3 dispositivos/resoluções diferentes
- [ ] Rodar Lighthouse no Chrome DevTools:
  - Performance ≥ 80
  - Accessibility ≥ 90
  - Best Practices ≥ 80
  - SEO ≥ 80
- [ ] Verificar contraste com [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Zero erros no Console do navegador
- [ ] Publicar no GitHub Pages
- [ ] Mínimo de **10 commits** com mensagens descritivas
- [ ] README do repositório com: descrição, screenshot, link do site, tecnologias usadas

---

## 🏆 Critérios de Avaliação

| Critério | Peso | O que será avaliado |
|---|---|---|
| **HTML Semântico** | 20% | Tags corretas, hierarquia de headings, atributos de acessibilidade |
| **CSS Responsivo** | 25% | Mobile-first, uso de Flexbox/Grid, variáveis CSS, breakpoints |
| **JavaScript** | 15% | Validação funcional, menu, interações sem erros |
| **Acessibilidade** | 15% | Score Lighthouse, contraste, navegação por teclado, alt texts |
| **Design & UX** | 15% | Coerência visual, protótipo Figma, experiência do usuário |
| **Git & Organização** | 10% | Commits frequentes, README, estrutura de pastas, código limpo |

---

## 💡 Dicas para os Alunos

1. **Comece pelo HTML** — Escreva toda a estrutura antes de estilizar
2. **Mobile primeiro** — Estilize para celular, depois adapte para telas maiores
3. **Commit cedo, commit sempre** — A cada seção finalizada, faça um commit
4. **Use o DevTools** — F12 é seu melhor amigo para debug de CSS
5. **Não copie, adapte** — Pode se inspirar em sites reais, mas escreva seu próprio código
6. **Peça ajuda** — Travou? Tente por 15 min, depois pergunte ao professor

---

## 📚 Referências e Material de Apoio

- [Guia Flexbox - CSS Tricks (em inglês com exemplos visuais)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guia Grid - CSS Tricks (em inglês com exemplos visuais)](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN - Formulários HTML](https://developer.mozilla.org/pt-BR/docs/Learn/Forms)
- [JavaScript.info - Validação de Formulários](https://javascript.info/forms-controls)
- [Como publicar no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages)
- [Figma para Iniciantes (YouTube)](https://www.youtube.com/results?search_query=figma+para+iniciantes+pt)
- [Curso em Vídeo - HTML/CSS (YouTube)](https://www.youtube.com/c/CursoemV%C3%ADdeo)
