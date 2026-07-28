# 📋 Pacote de Avaliações — Módulo 2
## Curso Técnico em Desenvolvimento de Sistemas | ETE Pernambuco
### Profª Luana Cristina

---

**Disciplinas do Módulo 2:**
| Disciplina | Carga Horária |
|---|---|
| Programação Web — HTML5 & CSS3 | 160h |
| Cultura do Mundo Digital | 40h |
| Edição de Imagens (GIMP) | 40h |
| Ilustração Vetorial (Inkscape) | 40h |
| Projeto de Vida | 40h |

---

## 1. 📝 Lista de Exercícios Práticos

### Questões Fáceis (1 a 4)

**Exercício 1 — Estrutura Básica HTML (Programação Web)**
Nível: ⭐ Fácil

Crie a estrutura básica de uma página HTML5 que contenha:
- Declaração DOCTYPE correta
- Tag `<html>` com atributo `lang="pt-BR"`
- Seção `<head>` com meta charset UTF-8, viewport e título "Minha Primeira Página"
- Seção `<body>` com um cabeçalho `<h1>`, um parágrafo `<p>` e uma imagem `<img>`

**Critérios de avaliação:**
- Estrutura semântica correta (0,5 pt)
- Atributos obrigatórios presentes (0,5 pt)
- Indentação organizada (0,5 pt)
- Tags fechadas corretamente (0,5 pt)

---

**Exercício 2 — Seletores CSS (Programação Web)**
Nível: ⭐ Fácil

Dado o seguinte HTML:

```html
<header class="topo">
  <nav id="menu-principal">
    <ul>
      <li class="item-menu ativo">Home</li>
      <li class="item-menu">Sobre</li>
      <li class="item-menu">Contato</li>
    </ul>
  </nav>
</header>
```

Escreva os seletores CSS para:
a) Selecionar todos os itens do menu
b) Selecionar apenas o item com a classe "ativo"
c) Selecionar o `<nav>` pelo seu ID
d) Selecionar o primeiro `<li>` dentro do `<ul>`

---

**Exercício 3 — Formatos de Imagem (Edição de Imagens)**
Nível: ⭐ Fácil

Associe cada situação ao formato de imagem mais adequado (JPG, PNG, GIF ou SVG):

| Situação | Formato |
|---|---|
| a) Fotografia para um site de viagens | _____ |
| b) Logo com fundo transparente | _____ |
| c) Ícone simples que precisa escalar sem perda | _____ |
| d) Animação curta para redes sociais | _____ |
| e) Print de tela para tutorial | _____ |

Justifique cada escolha em uma frase.

---

**Exercício 4 — Análise SWOT Pessoal (Projeto de Vida)**
Nível: ⭐ Fácil

Preencha sua matriz SWOT pessoal voltada para a carreira em TI:

| | Positivo | Negativo |
|---|---|---|
| **Interno** | Forças: (liste 3) | Fraquezas: (liste 3) |
| **Externo** | Oportunidades: (liste 3) | Ameaças: (liste 3) |

Em seguida, responda:
a) Como uma de suas forças pode aproveitar uma oportunidade listada?
b) Como você pode minimizar uma fraqueza diante de uma ameaça?

---

### Questões Médias (5 a 8)

**Exercício 5 — Layout com Flexbox (Programação Web)**
Nível: ⭐⭐ Médio

Crie um layout de galeria de cards usando Flexbox com as seguintes especificações:
- Container com `display: flex`, `flex-wrap: wrap` e `gap: 20px`
- Cada card deve ter largura mínima de 280px e crescer igualmente
- Os cards devem centralizar na linha quando não preencherem toda a largura
- Dentro de cada card: imagem no topo, título, descrição e botão no rodapé
- O botão deve ficar sempre no final do card (use `margin-top: auto`)

Entregue o HTML e CSS completos para 4 cards.

---

**Exercício 6 — Identificando Fake News (Cultura do Mundo Digital)**
Nível: ⭐⭐ Médio

Analise a seguinte notícia fictícia e identifique pelo menos 5 red flags (sinais de alerta) que indicam que pode ser uma fake news:

> **"URGENTE!!! Cientistas comprovam que tomar 3 litros de suco de limão por dia cura qualquer doença!!! Compartilhe antes que apaguem!!!"**
> Publicado por: SaúdeVerdade2024.blog.net
> Sem data de publicação | Sem autor identificado | Imagem genérica de banco de imagens

Para cada red flag identificada:
a) Aponte qual elemento da notícia é suspeito
b) Explique por que esse elemento é um sinal de desinformação
c) Sugira como verificar a informação (fact-checking)

---

**Exercício 7 — Processo de Edição no GIMP (Edição de Imagens)**
Nível: ⭐⭐ Médio

Descreva o passo a passo detalhado para realizar a seguinte tarefa no GIMP:

**Tarefa:** Criar um banner para redes sociais (1200x630px) com:
- Foto de fundo com filtro de desfoque gaussiano
- Texto principal com sombra
- Logo sobreposto com transparência parcial

Seu passo a passo deve incluir:
1. Menu/ferramenta utilizada
2. Configurações importantes (valores de filtros, opacidade, etc.)
3. Ordem correta das camadas
4. Formato de exportação e configurações recomendadas

---

**Exercício 8 — Meta SMART (Projeto de Vida)**
Nível: ⭐⭐ Médio

Transforme o seguinte objetivo vago em uma meta SMART completa:

**Objetivo vago:** "Quero aprender programação"

Preencha cada critério:
| Critério | Sua Meta |
|---|---|
| **S** (Específica) | O quê exatamente? |
| **M** (Mensurável) | Como medir o progresso? |
| **A** (Alcançável) | É realista? Por quê? |
| **R** (Relevante) | Como se conecta à sua carreira? |
| **T** (Temporal) | Prazo definido? |

Depois, crie um cronograma semanal de 4 semanas com ações concretas para alcançar essa meta.

---

### Questões Difíceis (9 e 10)

**Exercício 9 — Página Responsiva Completa (Programação Web)**
Nível: ⭐⭐⭐ Difícil

Desenvolva uma página responsiva completa para um portfólio pessoal com:

**Requisitos HTML:**
- Header com navegação (logo + menu hambúrguer em mobile)
- Seção "Hero" com nome, título profissional e foto
- Seção "Sobre" com texto e habilidades (barras de progresso CSS)
- Seção "Projetos" com grid de cards (mínimo 6)
- Footer com links de redes sociais e copyright

**Requisitos CSS:**
- Mobile-first (estilos base para mobile)
- Breakpoints: 768px (tablet) e 1024px (desktop)
- Usar CSS Grid para a seção de projetos
- Usar Flexbox para header e footer
- Pelo menos 2 animações CSS (hover em cards e scroll-reveal simulado)
- Variáveis CSS para cores e fontes
- Nenhum framework externo

**Critérios de avaliação (10 pontos):**
- HTML semântico correto (2 pts)
- Responsividade funcional nos 3 breakpoints (3 pts)
- Uso correto de Grid e Flexbox (2 pts)
- Animações e transições (1,5 pts)
- Organização e boas práticas CSS (1,5 pts)

---

**Exercício 10 — Projeto Integrado Multidisciplinar**
Nível: ⭐⭐⭐ Difícil

**Contexto:** Você foi contratado como freelancer para criar a identidade visual e landing page de uma campanha de conscientização sobre segurança digital para jovens.

**Etapa 1 — Ilustração Vetorial (Inkscape):**
- Crie um logo vetorial para a campanha "NavegueSeguro"
- Descreva: conceito, cores escolhidas (com códigos hex), tipografia, estilo visual
- O logo deve funcionar em versões colorida, monocromática e reduzida (favicon)

**Etapa 2 — Edição de Imagens (GIMP):**
- Crie 3 banners para redes sociais (Instagram post 1080x1080, Story 1080x1920, Facebook cover 820x312)
- Descreva o processo de criação de cada um, incluindo tratamento de imagens, composição e exportação

**Etapa 3 — Programação Web (HTML + CSS):**
- Desenvolva a landing page da campanha usando o logo e banners criados
- A página deve ter: hero section, seção de dicas de segurança, depoimentos e call-to-action
- Deve ser 100% responsiva

**Etapa 4 — Cultura Digital (Texto):**
- Escreva o copy (texto) da campanha abordando: engenharia social, LGPD, e proteção de dados pessoais
- Mínimo 300 palavras

**Critérios de avaliação (20 pontos):**
- Logo vetorial (4 pts): conceito, execução técnica, versatilidade
- Banners GIMP (4 pts): composição, tratamento, adequação aos formatos
- Landing page HTML/CSS (8 pts): semântica, responsividade, integração visual
- Texto da campanha (4 pts): conteúdo, argumentação, adequação ao público

---

## 2. 📚 Guia de Revisão Rápida para Prova

### Programação Web — HTML5 & CSS3 (160h)

**O que cai:**
- Estrutura semântica HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`
- Formulários: `<input>` types (text, email, password, number, date, checkbox, radio), `<select>`, `<textarea>`, atributos (required, placeholder, pattern)
- CSS Box Model: margin, border, padding, content; diferença entre `box-sizing: content-box` e `border-box`
- Flexbox: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `flex-wrap`, `gap`, `flex-grow/shrink/basis`
- Grid: `display: grid`, `grid-template-columns/rows`, `grid-gap`, `fr` unit, `repeat()`, `minmax()`, `grid-area`
- Responsividade: viewport meta tag, media queries (`@media`), unidades relativas (%, em, rem, vw, vh)
- Seletores: classe (`.`), ID (`#`), descendente, filho direto (`>`), pseudo-classes (`:hover`, `:nth-child`)

**Dica:** Sempre comece pelo mobile-first. Escreva o CSS base para telas pequenas e use `min-width` nas media queries para telas maiores.

---

### Cultura do Mundo Digital (40h)

**O que cai:**
- Evolução da Web: Web 1.0 (estática/leitura) → Web 2.0 (interação/redes sociais) → Web 3.0 (descentralização/IA/blockchain)
- Fake News: como identificar, fact-checking, bolhas algorítmicas, câmaras de eco
- Algoritmos de recomendação: como funcionam, viés algorítmico, impacto na democracia
- LGPD: princípios, direitos do titular, dados pessoais vs sensíveis, consentimento, bases legais
- Engenharia Social: phishing, pretexting, baiting, quid pro quo
- Ética Digital: privacidade, pegada digital, cyberbullying, direito ao esquecimento

**Dica:** Memorize os 10 princípios da LGPD (finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização).

---

### Edição de Imagens — GIMP (40h)

**O que cai:**
- Formatos: JPG (lossy, fotos), PNG (lossless, transparência), GIF (animação, 256 cores), TIFF (impressão), WebP (web moderno)
- Cores: RGB (digital, aditivo, 0-255) vs CMYK (impressão, subtrativo, 0-100%)
- Resolução: 72 DPI (tela) vs 300 DPI (impressão)
- Camadas: conceito, ordem, modos de mesclagem, opacidade, máscara de camada
- Ferramentas de seleção: retangular, elíptica, laço, varinha mágica, por cor, tesoura inteligente
- Filtros: desfoque gaussiano, nitidez, posterizar, mapa de relevo

**Dica:** RGB é para tela (Red, Green, Blue = luz). CMYK é para impressão (Ciano, Magenta, Yellow, Key/Preto = tinta). NÃO confunda os contextos!

---

### Ilustração Vetorial — Inkscape (40h)

**O que cai:**
- Vetor vs Raster: vetor (matemático, escalável, .svg/.ai) vs raster (pixels, perde qualidade, .jpg/.png)
- SVG: formato padrão web, XML, escalável, editável por código
- Curvas de Bézier: nós, alças de controle, curvas suaves vs pontiagudas
- Tipografia: serif vs sans-serif, kerning, leading, tracking, converter texto em caminho
- Criação de logos: princípios (simplicidade, versatilidade, memorabilidade, atemporalidade)
- Operações booleanas: união, diferença, interseção, exclusão

**Dica:** Logo profissional = funciona em preto e branco, funciona pequeno (favicon), funciona grande (outdoor). Sempre teste nessas 3 situações!

---

### Projeto de Vida (40h)

**O que cai:**
- SWOT pessoal: Strengths, Weaknesses, Opportunities, Threats (ambiente interno vs externo)
- Metas SMART: Specific, Measurable, Achievable, Relevant, Time-bound
- Carreiras em TI: frontend, backend, fullstack, mobile, DevOps, UX/UI, dados, segurança, IA
- Gestão de tempo: Matriz de Eisenhower (urgente/importante), Pomodoro, time-blocking
- LinkedIn: perfil profissional, headline, resumo, competências, networking
- Soft Skills: comunicação, trabalho em equipe, resolução de problemas, adaptabilidade

**Dica:** Na prova, ao criar uma meta SMART, use números concretos e datas específicas. "Quero melhorar em CSS" NÃO é SMART. "Vou completar 5 projetos responsivos no freeCodeCamp até 30/03/2025" É SMART.

---

### ⚠️ Pegadinhas Comuns

| Pegadinha | Explicação |
|---|---|
| `box-sizing: content-box` vs `border-box` | `content-box` é o padrão — width NÃO inclui padding/border. Use `border-box` para width incluir tudo! |
| CMYK vs RGB | RGB = tela digital. CMYK = impressão. Entregar arquivo para gráfica em RGB é ERRO! |
| `margin: auto` | Só funciona horizontalmente em elementos block com width definida. Para centralizar vertical, use Flexbox. |
| JPG com transparência | NÃO EXISTE! JPG não suporta transparência. Use PNG ou WebP. |
| Vetor com foto | Fotos são RASTER. Vetorizar uma foto no Inkscape gera resultado artificial. Vetor é para ilustrações, logos, ícones. |
| Web 2.0 = redes sociais | Não é só redes sociais! É a web participativa: blogs, wikis, comentários, compartilhamento. |
| `display: flex` no filho | Flexbox se aplica ao CONTAINER (pai), não aos itens (filhos). Os filhos são flex-items automaticamente. |
| DPI em tela | DPI (dots per inch) só importa para IMPRESSÃO. Na tela, o que importa é resolução em pixels. |

---

## 3. 📄 Avaliações Formais

---

### PROVA A — Módulo 2

**ETE Pernambuco | Curso Técnico em Desenvolvimento de Sistemas**
**Disciplinas:** Programação Web, Cultura Digital, Edição de Imagens, Ilustração Vetorial, Projeto de Vida
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**

---

#### Parte I — Questões de Múltipla Escolha (5 questões × 0,8 = 4,0 pontos)

**Questão 1.** Qual é a tag HTML5 semanticamente correta para envolver o menu de navegação principal de um site?

a) `<div class="menu">`
b) `<nav>`
c) `<menu>`
d) `<header>`
e) `<aside>`

---

**Questão 2.** Considere o seguinte CSS:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

O que acontece quando os flex-items não cabem em uma única linha?

a) Os itens diminuem proporcionalmente e ficam todos na mesma linha
b) Os itens transbordam o container sem quebrar linha
c) Os itens quebram para a próxima linha mantendo o espaçamento entre eles
d) O container aumenta de largura automaticamente
e) Os itens ficam sobrepostos uns aos outros

---

**Questão 3.** Um designer precisa enviar um logo para uma gráfica imprimir em camisetas. Qual combinação de formato e modo de cor é a CORRETA?

a) PNG em RGB, 72 DPI
b) SVG em RGB, 300 DPI
c) PDF vetorial em CMYK, 300 DPI
d) JPG em CMYK, 150 DPI
e) GIF em RGB, 96 DPI

---

**Questão 4.** Sobre a LGPD (Lei Geral de Proteção de Dados), assinale a alternativa INCORRETA:

a) Dados pessoais sensíveis incluem informações sobre saúde, orientação sexual e convicção religiosa
b) O titular dos dados tem direito de solicitar a exclusão de seus dados pessoais
c) Qualquer empresa pode coletar dados pessoais desde que informe o usuário, mesmo sem consentimento explícito
d) O encarregado (DPO) é responsável por mediar a comunicação entre titular, controlador e ANPD
e) O princípio da finalidade determina que dados só podem ser tratados para propósitos legítimos e informados ao titular

---

**Questão 5.** Na criação de um logo no Inkscape, qual operação booleana você usaria para "recortar" uma forma usando outra como molde, mantendo apenas a área de interseção?

a) União (Union)
b) Diferença (Difference)
c) Interseção (Intersection)
d) Exclusão (Exclusion)
e) Divisão (Division)

---

#### Parte II — Questões Práticas (3 questões = 6,0 pontos)

**Questão 6 — Código HTML + CSS (2,5 pontos)**

Crie um card de produto responsivo com as seguintes especificações:

- O card deve conter: imagem do produto, nome, preço, descrição curta e botão "Comprar"
- Use HTML semântico (article, figure, etc.)
- Em telas até 768px: card ocupa 100% da largura
- Em telas acima de 768px: card ocupa no máximo 350px com sombra
- O botão deve ter efeito hover com transição suave
- Use variáveis CSS para as cores principais

**Critérios:**
- HTML semântico (0,5 pt)
- CSS responsivo com media query (1,0 pt)
- Transição hover no botão (0,5 pt)
- Variáveis CSS e organização (0,5 pt)

---

**Questão 7 — Design e Imagem (1,5 ponto)**

Descreva o processo completo no GIMP para criar uma thumbnail (miniatura) para YouTube com as dimensões 1280x720px, contendo:
- Uma foto de fundo com brilho reduzido
- Texto grande e impactante com contorno
- Um recorte de pessoa (removendo fundo)

Para cada etapa, indique:
1. A ferramenta ou menu utilizado
2. As configurações principais
3. A ordem das camadas (de baixo para cima)

---

**Questão 8 — Questão Discursiva (2,0 pontos)**

**Tema:** "As bolhas algorítmicas e seu impacto na formação de opinião dos jovens"

Escreva um texto dissertativo-argumentativo (mínimo 20 linhas) abordando:
- O que são bolhas algorítmicas e como os algoritmos de recomendação as criam
- Exemplos concretos de como isso afeta jovens (redes sociais, YouTube, TikTok)
- Relação com fake news e polarização
- Propostas de como o indivíduo pode "furar" sua bolha

**Critérios:**
- Domínio conceitual (0,5 pt)
- Argumentação com exemplos (0,5 pt)
- Propostas fundamentadas (0,5 pt)
- Coesão e coerência textual (0,5 pt)

---
---

### PROVA B — Módulo 2

**ETE Pernambuco | Curso Técnico em Desenvolvimento de Sistemas**
**Disciplinas:** Programação Web, Cultura Digital, Edição de Imagens, Ilustração Vetorial, Projeto de Vida
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**

---

#### Parte I — Questões de Múltipla Escolha (5 questões × 0,8 = 4,0 pontos)

**Questão 1.** Qual propriedade CSS é utilizada para criar um layout de grade com 3 colunas de tamanhos iguais?

a) `display: flex; flex-columns: 3;`
b) `display: grid; grid-template-columns: repeat(3, 1fr);`
c) `display: grid; columns: 3;`
d) `display: block; column-count: 3;`
e) `display: flex; grid-columns: 1fr 1fr 1fr;`

---

**Questão 2.** Sobre media queries em CSS, qual abordagem é considerada "mobile-first"?

a) Usar `@media (max-width: 768px)` para definir estilos mobile
b) Escrever estilos desktop primeiro e usar `@media (max-width)` para mobile
c) Escrever estilos mobile como padrão e usar `@media (min-width)` para telas maiores
d) Usar JavaScript para detectar o tamanho da tela
e) Usar `@media (device-width)` para cada dispositivo específico

---

**Questão 3.** No GIMP, qual é a diferença principal entre "Exportar Como" e "Salvar Como"?

a) Não há diferença, ambos fazem a mesma coisa
b) "Salvar Como" mantém o formato .xcf nativo com camadas; "Exportar Como" converte para formatos como JPG/PNG
c) "Exportar Como" é mais rápido mas perde qualidade
d) "Salvar Como" é para web e "Exportar Como" é para impressão
e) "Exportar Como" só funciona com imagens vetoriais

---

**Questão 4.** A Web 3.0 é caracterizada por:

a) Sites estáticos com informações apenas para leitura
b) Surgimento das redes sociais e conteúdo gerado pelo usuário
c) Descentralização, inteligência artificial, blockchain e web semântica
d) Apenas a popularização dos smartphones e aplicativos móveis
e) A substituição completa de sites por aplicativos nativos

---

**Questão 5.** Na construção de um currículo para a área de TI, qual das seguintes práticas é INADEQUADA?

a) Incluir link para portfólio no GitHub
b) Listar tecnologias e ferramentas dominadas com nível de proficiência
c) Usar um template genérico com foto 3x4 formal e pretensão salarial
d) Adaptar o currículo para cada vaga, destacando competências relevantes
e) Incluir projetos pessoais e contribuições open source

---

#### Parte II — Questões Práticas (3 questões = 6,0 pontos)

**Questão 6 — Código HTML + CSS (2,5 pontos)**

Crie um formulário de contato responsivo com as seguintes especificações:

```
Campos: Nome (text), E-mail (email), Assunto (select com 3 opções), Mensagem (textarea), Botão Enviar
```

Requisitos:
- Usar HTML5 semântico com `<form>`, `<fieldset>`, `<legend>`, `<label>`
- Validação HTML5 nativa (required, type, pattern para telefone)
- Layout: em mobile, campos ocupam 100% da largura; em desktop (>768px), nome e email ficam lado a lado
- Estilização: bordas arredondadas, foco com outline colorido, botão com gradiente
- Acessibilidade: labels associados aos inputs, placeholder descritivo

**Critérios:**
- HTML semântico e validação (0,8 pt)
- Layout responsivo (0,8 pt)
- Estilização e transições (0,5 pt)
- Acessibilidade (0,4 pt)

---

**Questão 7 — Design e Imagem (1,5 ponto)**

Descreva o processo completo no Inkscape para criar um ícone vetorial de "escudo de segurança digital" para a campanha de uma empresa de cybersegurança:

1. Que formas geométricas básicas você usaria como ponto de partida?
2. Quais operações booleanas aplicaria e em qual ordem?
3. Como trabalharia as curvas de Bézier para suavizar os cantos?
4. Que cores e gradientes escolheria? Justifique com psicologia das cores.
5. Como exportaria para uso em: site (SVG), app (PNG múltiplos tamanhos), impressão (PDF)?

---

**Questão 8 — Questão Discursiva (2,0 pontos)**

**Tema:** "Meu plano de carreira em Tecnologia: próximos 5 anos"

Elabore um plano de carreira detalhado para os próximos 5 anos na área de TI, incluindo:

a) **Autoconhecimento:** Qual área de TI mais te atrai e por quê? (frontend, backend, mobile, UX, dados, segurança, etc.)
b) **Metas SMART:** Defina pelo menos 3 metas SMART (curto, médio e longo prazo)
c) **Desenvolvimento de competências:** Quais hard skills e soft skills precisa desenvolver?
d) **Plano de ação:** Cronograma com marcos trimestrais para o primeiro ano
e) **Networking:** Como pretende construir sua rede profissional? (LinkedIn, eventos, comunidades)

**Critérios:**
- Autoconhecimento demonstrado (0,5 pt)
- Metas SMART bem formuladas (0,5 pt)
- Plano de ação realista e detalhado (0,5 pt)
- Visão integrada de carreira (0,5 pt)

---
---

### PROVA DE RECUPERAÇÃO — Módulo 2

**ETE Pernambuco | Curso Técnico em Desenvolvimento de Sistemas**
**Disciplinas:** Programação Web, Cultura Digital, Edição de Imagens, Ilustração Vetorial, Projeto de Vida
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**
**⚠️ Avaliação substitutiva — abrange todo o conteúdo do módulo**

---

#### Parte I — Questões de Múltipla Escolha (5 questões × 0,8 = 4,0 pontos)

**Questão 1.** Qual a diferença entre as tags `<section>` e `<article>` no HTML5?

a) Não há diferença, são sinônimos
b) `<section>` é para agrupamentos temáticos genéricos; `<article>` é para conteúdo independente e autocontido
c) `<article>` só pode ser usado para blogs; `<section>` para qualquer conteúdo
d) `<section>` é inline e `<article>` é block
e) `<article>` é obsoleto no HTML5 e deve ser substituído por `<section>`

---

**Questão 2.** Analise o código CSS abaixo:

```css
* {
  box-sizing: border-box;
}
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

Qual é a largura TOTAL que `.box` ocupa no fluxo do documento (incluindo margin)?

a) 300px
b) 320px
c) 350px
d) 360px
e) 370px

---

**Questão 3.** Um colega compartilhou uma imagem PNG de 5000x3000px e 72 DPI para ser usada como fundo de uma página web. Qual análise está CORRETA?

a) A imagem está perfeita para uso web, não precisa de ajustes
b) Os 72 DPI estão corretos para web, mas a resolução em pixels é excessiva e deve ser reduzida para melhorar o carregamento
c) A imagem precisa ser convertida para 300 DPI antes de usar na web
d) PNG nunca deve ser usado como fundo de página, apenas JPG
e) A imagem precisa ser convertida de RGB para CMYK para exibição em monitores

---

**Questão 4.** Sobre Engenharia Social, associe corretamente:

| Técnica | Descrição |
|---|---|
| 1. Phishing | ( ) Oferecer algo em troca de informações |
| 2. Pretexting | ( ) E-mail falso imitando empresa legítima |
| 3. Baiting | ( ) Criar cenário falso para obter dados |
| 4. Quid pro quo | ( ) Deixar dispositivo infectado em local público |

A sequência correta é:
a) 4, 1, 2, 3
b) 3, 1, 2, 4
c) 4, 2, 1, 3
d) 2, 1, 3, 4
e) 3, 2, 1, 4

---

**Questão 5.** Na Matriz de Eisenhower para gestão de tempo, uma tarefa "importante mas NÃO urgente" deve ser:

a) Feita imediatamente
b) Agendada para fazer com calma e planejamento
c) Delegada para outra pessoa
d) Eliminada da lista
e) Feita apenas se sobrar tempo

---

#### Parte II — Questões Práticas (3 questões = 6,0 pontos)

**Questão 6 — Código HTML + CSS (2,5 pontos)**

Crie uma navbar responsiva completa com as seguintes características:

**Desktop (acima de 768px):**
- Logo à esquerda
- Links de navegação centralizados (Home, Serviços, Portfólio, Contato)
- Botão "Orçamento" à direita com destaque visual
- Flexbox para o layout

**Mobile (até 768px):**
- Logo à esquerda, botão hambúrguer (☰) à direita
- Menu em coluna quando "aberto" (simule com classe `.active`)
- Links empilhados verticalmente com padding

**Requisitos técnicos:**
- Variáveis CSS para cores
- Transição suave na mudança de estado
- Sombra no header (box-shadow)
- Fonte legível e espaçamento adequado

**Critérios:**
- HTML semântico (nav, ul, li, a) (0,5 pt)
- Layout desktop com Flexbox (0,7 pt)
- Responsividade mobile (0,8 pt)
- Estilização e boas práticas (0,5 pt)

---

**Questão 7 — Design e Imagem (1,5 ponto)**

**Cenário integrado:** Você precisa criar um ícone de aplicativo (app icon) para um aplicativo de delivery de comida saudável chamado "VerdeFit".

Parte A (Inkscape — 0,75 pt):
- Descreva o conceito visual do ícone (que elementos representariam "verde" + "fit" + "delivery")
- Explique o processo vetorial: formas base, operações booleanas, cores (com códigos hex)
- Como garantir que funciona em 1024x1024 e em 16x16 (favicon)?

Parte B (GIMP — 0,75 pt):
- Após criar o vetor, como você geraria as versões raster necessárias?
- Descreva o processo para criar versões em: 1024x1024 (App Store), 512x512 (Play Store), 192x192 (PWA), 48x48 (toolbar)
- Que ajustes de nitidez/contraste seriam necessários para tamanhos menores?

---

**Questão 8 — Questão Discursiva (2,0 pontos)**

**Tema:** "LGPD na prática: como um desenvolvedor de sistemas deve proteger os dados dos usuários"

Escreva um texto técnico-argumentativo (mínimo 20 linhas) abordando:

a) Os princípios da LGPD mais relevantes para desenvolvedores (mínimo 4 princípios)
b) Exemplos práticos de implementação: como um sistema web deve tratar dados pessoais (coleta, armazenamento, compartilhamento, exclusão)
c) Consequências legais e éticas do não cumprimento
d) Relação entre LGPD e boas práticas de desenvolvimento (criptografia, anonimização, privacy by design)

**Critérios:**
- Conhecimento dos princípios LGPD (0,5 pt)
- Exemplos práticos de implementação (0,5 pt)
- Argumentação sobre consequências (0,5 pt)
- Visão técnica integrada (0,5 pt)

---

## 4. 🎯 Simulado Integrado (15 questões)

**Tema Gerador:** Crie uma landing page para a campanha "TechPE" — um evento fictício de tecnologia em Pernambuco que promove inclusão digital para jovens da periferia.

---

**Questão 1 (Programação Web)** — Escreva a estrutura HTML5 semântica completa da landing page com as seções: Hero, Sobre o Evento, Palestrantes, Programação, Inscrição e Footer. Use tags semânticas adequadas para cada seção.

**Questão 2 (Programação Web)** — Crie o CSS para a seção Hero usando:
- Background com gradiente linear sobrepondo uma imagem
- Texto centralizado vertical e horizontalmente com Flexbox
- Animação de fade-in no título ao carregar a página

**Questão 3 (Programação Web)** — Implemente a seção "Palestrantes" usando CSS Grid:
- Desktop: 4 cards por linha
- Tablet: 2 cards por linha
- Mobile: 1 card por linha
- Cada card com foto circular, nome, cargo e mini-bio

**Questão 4 (Programação Web)** — Crie o formulário de inscrição com:
- Campos: nome completo, email, telefone (com máscara), cidade, "como soube do evento" (select)
- Validação HTML5 + pattern regex para telefone
- Estilização acessível (labels, focus-visible, mensagens de erro)

**Questão 5 (Programação Web)** — Escreva as media queries necessárias para tornar TODA a página responsiva. Explique sua estratégia de breakpoints e por que escolheu esses valores.

---

**Questão 6 (Edição de Imagens)** — Descreva o processo no GIMP para criar o banner principal do evento (1920x600px para desktop, 768x500px para mobile). Inclua:
- Tratamento da foto de fundo (correção de cor, brilho/contraste)
- Composição com elementos gráficos
- Texto com efeitos
- Exportação otimizada para web (JPG vs WebP, qualidade, tamanho final)

**Questão 7 (Edição de Imagens)** — Como você criaria os cards de palestrantes no GIMP?
- Recorte circular da foto (máscara de camada)
- Tratamento de cor uniforme (mesmo tom para todas as fotos)
- Exportação em PNG com transparência
- Tamanho ideal em pixels para não estourar em tela retina

---

**Questão 8 (Ilustração Vetorial)** — Projete o logo do evento "TechPE" no Inkscape:
- Descreva o conceito (o que representa tecnologia + Pernambuco + inclusão)
- Quais formas e operações booleanas usaria?
- Tipografia: que família de fonte e por quê?
- Paleta de cores: quais e por quê? (códigos hex)
- Versões: colorida, monocromática (P&B), versão horizontal e vertical

**Questão 9 (Ilustração Vetorial)** — Crie um conjunto de 5 ícones vetoriais para a seção de "Trilhas" do evento (Web, Mobile, Dados, Design, Games). Para cada ícone:
- Descreva o conceito visual
- Explique quais formas geométricas primitivas usaria
- Como manter consistência visual entre os 5 ícones? (stroke, tamanho, estilo)

---

**Questão 10 (Cultura Digital)** — O evento "TechPE" precisa de uma estratégia de divulgação digital. Considerando o público-alvo (jovens 15-20 anos da periferia de Recife):
a) Quais plataformas digitais priorizar e por quê?
b) Como evitar que a campanha caia em bolhas algorítmicas e alcance quem realmente precisa?
c) Que cuidados com a LGPD são necessários no formulário de inscrição?
d) Como combater desinformação que possa surgir sobre o evento?

**Questão 11 (Cultura Digital)** — Analise o cenário: alguém criou um perfil falso no Instagram fingindo ser organizador do "TechPE" e está pedindo dados pessoais dos inscritos.
a) Que tipo de engenharia social está sendo praticada?
b) Quais sinais os jovens devem observar para identificar o golpe?
c) Que medidas preventivas a organização real deveria ter tomado?
d) Quais direitos da LGPD foram violados nesse caso?

---

**Questão 12 (Projeto de Vida)** — Imagine que você é um dos jovens beneficiados pelo "TechPE" e decidiu seguir carreira em desenvolvimento web frontend. Elabore:
a) Análise SWOT pessoal para essa escolha de carreira
b) 3 metas SMART para os próximos 12 meses
c) Como o evento "TechPE" se encaixa no seu plano de desenvolvimento?

**Questão 13 (Projeto de Vida)** — Monte seu perfil LinkedIn ideal como se já tivesse completado o curso técnico. Inclua:
- Headline profissional (máximo 120 caracteres)
- Resumo (About) com máximo 200 palavras
- 5 principais competências técnicas
- 3 soft skills
- 2 experiências (podem ser estágios ou projetos acadêmicos)

---

**Questão 14 (Integração Total)** — Escreva um briefing criativo completo para o projeto "TechPE" integrando todas as disciplinas:
- Identidade visual (cores, tipografia, tom de voz)
- Peças gráficas necessárias (lista com dimensões)
- Estrutura da landing page (wireframe textual)
- Estratégia digital (canais, frequência, métricas)
- Cronograma de produção (usando gestão de tempo)

**Questão 15 (Integração Total — Reflexão)** — Em um texto de 15 a 20 linhas, reflita:
"Como as 5 disciplinas deste módulo se complementam na formação de um profissional de tecnologia completo? Use o projeto TechPE como exemplo prático de como HTML/CSS, design gráfico, cultura digital e planejamento de carreira trabalham juntos no mundo real."

---

## 5. ✅ Gabarito Comentado Completo

---

### Gabarito — Lista de Exercícios Práticos

**Exercício 1 — Estrutura Básica HTML**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Primeira Página</title>
</head>
<body>
  <h1>Bem-vindo ao meu site</h1>
  <p>Este é o meu primeiro parágrafo em HTML5.</p>
  <img src="imagem.jpg" alt="Descrição da imagem">
</body>
</html>
```

**Comentário:** O `<!DOCTYPE html>` declara o documento como HTML5. O atributo `lang="pt-BR"` ajuda na acessibilidade e SEO. A meta viewport é obrigatória para responsividade. A tag `<img>` deve sempre ter o atributo `alt` para acessibilidade.

---

**Exercício 2 — Seletores CSS**

```css
/* a) Todos os itens do menu */
.item-menu {
  /* seleciona por classe */
}

/* b) Apenas o item ativo */
.item-menu.ativo {
  /* seletor composto: elemento com ambas as classes */
}

/* c) Nav pelo ID */
#menu-principal {
  /* seletor de ID */
}

/* d) Primeiro li dentro do ul */
ul li:first-child {
  /* pseudo-classe :first-child */
}
/* OU */
ul li:nth-child(1) {
  /* pseudo-classe :nth-child */
}
```

**Comentário:** Seletores de classe (`.`) podem ser reutilizados; seletores de ID (`#`) devem ser únicos na página. O seletor `.item-menu.ativo` (sem espaço) seleciona elementos que possuem AMBAS as classes. Com espaço seria um descendente.

---

**Exercício 3 — Formatos de Imagem**

| Situação | Formato | Justificativa |
|---|---|---|
| a) Fotografia para site | **JPG** | Melhor compressão para fotos com muitas cores e gradientes |
| b) Logo com transparência | **PNG** | Suporta transparência (canal alpha) sem perda de qualidade |
| c) Ícone escalável | **SVG** | Formato vetorial, escala infinitamente sem pixelização |
| d) Animação curta | **GIF** | Suporta animação simples (ou APNG/WebP animado como alternativa moderna) |
| e) Print de tela | **PNG** | Ideal para imagens com texto/bordas nítidas, compressão sem perda |

---

**Exercício 4 — SWOT Pessoal**

Exemplo de resposta esperada:

| | Positivo | Negativo |
|---|---|---|
| **Interno** | Forças: Lógica, criatividade, facilidade com tecnologia | Fraquezas: Procrastinação, inglês intermediário, pouca experiência |
| **Externo** | Oportunidades: Alta demanda por devs, curso técnico gratuito, home office | Ameaças: Concorrência, evolução rápida da tecnologia, IA substituindo tarefas |

**Rubrica:** Aceitar qualquer resposta que demonstre autoconhecimento genuíno e coerência entre os quadrantes. O cruzamento (força × oportunidade, fraqueza × ameaça) deve mostrar pensamento estratégico.

---

**Exercício 5 — Layout Flexbox**

```html
<section class="galeria">
  <article class="card">
    <img src="projeto1.jpg" alt="Projeto 1">
    <h3>Título do Projeto</h3>
    <p>Descrição breve do projeto com detalhes relevantes.</p>
    <a href="#" class="btn">Ver mais</a>
  </article>
  <!-- Repetir para 4 cards -->
</section>
```

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.card {
  flex: 1 1 280px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3, .card p {
  padding: 0 16px;
}

.card .btn {
  margin-top: auto;
  margin: auto 16px 16px;
  padding: 10px 20px;
  background: #2563eb;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
}
```

**Comentário:** O `flex: 1 1 280px` faz cada card ter mínimo 280px e crescer igualmente. O `margin-top: auto` no botão empurra-o para o final do card, independente da altura do conteúdo.

---

**Exercício 6 — Fake News (Red Flags)**

Red flags esperadas:
1. **"URGENTE!!!"** — Uso de urgência e apelo emocional para impedir pensamento crítico
2. **"Compartilhe antes que apaguem"** — Pressão para viralizar sem verificar, técnica de manipulação
3. **"cura qualquer doença"** — Afirmação absoluta sem base científica, generalizações impossíveis
4. **Domínio suspeito** (SaúdeVerdade2024.blog.net) — Site não reconhecido, não institucional, domínio genérico
5. **Sem data de publicação** — Impossível verificar atualidade da informação
6. **Sem autor identificado** — Sem responsabilização jornalística
7. **Imagem genérica** — Banco de imagens para simular credibilidade
8. **Pontuação excessiva (!!!)** — Sensacionalismo típico de desinformação

**Verificação sugerida:** Checar em agências como Lupa, Aos Fatos, Boatos.org; buscar a informação em sites de instituições científicas (OMS, Fiocruz); verificar se outros veículos confiáveis publicaram a mesma notícia.

---

**Exercício 7 — Processo GIMP (Banner para Redes Sociais)**

Passo a passo esperado:

1. **Criar novo arquivo:** Arquivo > Novo > 1200×630px, 72 DPI, RGB
2. **Importar foto de fundo:** Arquivo > Abrir como camadas > selecionar foto
3. **Redimensionar foto:** Ferramenta Redimensionar > ajustar à tela
4. **Desfoque gaussiano:** Filtros > Desfocar > Desfoque Gaussiano > Raio: 5-8px
5. **Nova camada para texto:** Camadas > Nova Camada > Transparente
6. **Adicionar texto:** Ferramenta Texto > fonte bold grande (60-80px) > cor branca
7. **Sombra no texto:** Filtros > Luz e Sombra > Sombra projetada > X:3, Y:3, Raio:5, Opacidade:60%
8. **Importar logo:** Arquivo > Abrir como camadas > posicionar com Ferramenta Mover
9. **Ajustar opacidade do logo:** Painel Camadas > Opacidade: 70-80%
10. **Ordem das camadas (baixo→cima):** Fundo desfocado → Texto com sombra → Logo

**Exportação:** Arquivo > Exportar Como > formato PNG (para manter qualidade) ou JPG qualidade 85% (para menor tamanho de arquivo).

---

**Exercício 8 — Meta SMART**

Exemplo de resposta aceita:

| Critério | Meta |
|---|---|
| **S** | Completar o curso "Responsive Web Design" do freeCodeCamp (300h de conteúdo HTML/CSS) |
| **M** | Concluir 5 projetos certificados e publicar no GitHub |
| **A** | Sim, dedicando 1h/dia = 7h/semana, são ~10 semanas para completar |
| **R** | HTML/CSS é a base do módulo 2 e essencial para qualquer carreira frontend |
| **T** | Iniciar em 01/02 e concluir até 15/04/2025 |

**Cronograma:**
- Semana 1: Módulos HTML básico e aplicado
- Semana 2: CSS básico e Box Model
- Semana 3: Flexbox e Grid
- Semana 4: Projeto final + publicação no GitHub

**Rubrica:** A meta deve ter números, datas, e ser verificável. Aceitar variações desde que todos os 5 critérios estejam presentes e coerentes.

---

### Gabarito — Prova A

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| 1 | **b) `<nav>`** | É a tag semântica específica para navegação no HTML5 |
| 2 | **c)** | `flex-wrap: wrap` permite quebra de linha; `space-between` mantém espaçamento |
| 3 | **c) PDF vetorial em CMYK, 300 DPI** | Impressão = CMYK + alta resolução; vetor mantém qualidade em qualquer tamanho |
| 4 | **c)** | INCORRETA — a LGPD exige base legal (consentimento é uma delas, mas não basta "informar") |
| 5 | **c) Interseção** | Mantém apenas a área onde as duas formas se sobrepõem |

---

**Questão 6 — Prova A (Código HTML+CSS — Card de Produto)**

```html
<article class="card-produto">
  <figure>
    <img src="produto.jpg" alt="Tênis esportivo azul">
  </figure>
  <div class="card-conteudo">
    <h2 class="card-nome">Tênis Runner Pro</h2>
    <p class="card-preco">R$ 299,90</p>
    <p class="card-descricao">Tênis leve e confortável, ideal para corridas de longa distância.</p>
    <button class="btn-comprar">Comprar</button>
  </div>
</article>
```

```css
:root {
  --cor-primaria: #2563eb;
  --cor-primaria-hover: #1d4ed8;
  --cor-texto: #1f2937;
  --cor-fundo: #ffffff;
  --sombra: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-produto {
  width: 100%;
  background: var(--cor-fundo);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.card-produto figure {
  margin: 0;
}

.card-produto img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-conteudo {
  padding: 16px;
}

.card-nome {
  font-size: 1.2rem;
  color: var(--cor-texto);
  margin: 0 0 8px;
}

.card-preco {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--cor-primaria);
  margin: 0 0 8px;
}

.card-descricao {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0 0 16px;
}

.btn-comprar {
  width: 100%;
  padding: 12px;
  background: var(--cor-primaria);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-comprar:hover {
  background: var(--cor-primaria-hover);
  transform: translateY(-2px);
}

/* Responsividade */
@media (min-width: 768px) {
  .card-produto {
    max-width: 350px;
    box-shadow: var(--sombra);
  }

  .card-produto:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}
```

**Rubrica detalhada:**
- HTML semântico (`<article>`, `<figure>`, alt na img): 0,5 pt
- Media query correta com `min-width` (mobile-first): 0,5 pt
- Max-width e sombra em desktop: 0,5 pt
- Transição hover funcional e suave: 0,5 pt
- Variáveis CSS e organização: 0,5 pt

---

**Questão 7 — Prova A (Thumbnail YouTube no GIMP)**

Resposta esperada (processo):

1. **Criar documento:** 1280×720px, 72 DPI, RGB
2. **Camada 1 — Fundo:** Importar foto como camada > Cores > Brilho-Contraste > reduzir brilho (-40)
3. **Camada 2 — Overlay escuro:** Nova camada preta > Opacidade 40% (para texto legível)
4. **Camada 3 — Recorte de pessoa:**
   - Abrir foto da pessoa como camada
   - Ferramenta de Seleção por Cor ou Tesoura Inteligente para selecionar fundo
   - Selecionar > Inverter (para selecionar a pessoa)
   - Editar > Copiar > Editar > Colar como nova camada
   - Redimensionar e posicionar
5. **Camada 4 — Texto:**
   - Ferramenta Texto > fonte bold (Impact ou Montserrat Black) > 72-96px
   - Cor branca ou amarela (#FFDE21)
   - Filtros > Alfa para logotipo > Contorno básico (3px, cor preta)
6. **Ordem final (baixo→cima):** Fundo escurecido → Overlay → Pessoa recortada → Texto com contorno
7. **Exportação:** Arquivo > Exportar Como > .jpg qualidade 90% (tamanho ~200-400KB ideal para YouTube)

---

**Questão 8 — Prova A (Discursiva: Bolhas Algorítmicas)**

**Rubrica de correção:**

| Critério | 0,5 pt (completo) | 0,25 pt (parcial) | 0 pt |
|---|---|---|---|
| Domínio conceitual | Define bolha algorítmica e explica mecanismo de recomendação | Define mas não explica mecanismo | Não define ou define incorretamente |
| Exemplos concretos | Cita 2+ exemplos reais com plataformas específicas | Cita 1 exemplo vago | Sem exemplos |
| Relação fake news | Conecta bolhas → desinformação → polarização com lógica | Menciona relação sem desenvolver | Não menciona |
| Propostas | Apresenta 2+ propostas fundamentadas | 1 proposta genérica | Sem propostas |

**Elementos esperados na resposta:**
- Bolha algorítmica = quando o algoritmo mostra apenas conteúdo que reforça nossas crenças
- Algoritmos analisam: tempo de visualização, likes, compartilhamentos, perfil demográfico
- Exemplos: feed do Instagram mostra apenas um tipo de conteúdo; YouTube auto-play radicaliza; TikTok For You Page cria nicho extremo
- Propostas: diversificar fontes, seguir perfis com opiniões diferentes, usar modo anônimo, checar fontes, consciência digital

---

### Gabarito — Prova B

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| 1 | **b)** | `grid-template-columns: repeat(3, 1fr)` cria 3 colunas de frações iguais |
| 2 | **c)** | Mobile-first: estilos base são para mobile, `min-width` adiciona para telas maiores |
| 3 | **b)** | .xcf preserva camadas/histórico; Exportar converte para formatos finais |
| 4 | **c)** | Web 3.0 = descentralização + IA + blockchain + semântica |
| 5 | **c)** | Template genérico com foto 3x4 e pretensão salarial é prática ultrapassada |

---

**Questão 6 — Prova B (Formulário de Contato)**

```html
<form action="/enviar" method="POST" class="form-contato">
  <fieldset>
    <legend>Entre em Contato</legend>
    
    <div class="form-row">
      <div class="form-group">
        <label for="nome">Nome completo *</label>
        <input type="text" id="nome" name="nome" required 
               placeholder="Seu nome completo">
      </div>
      
      <div class="form-group">
        <label for="email">E-mail *</label>
        <input type="email" id="email" name="email" required 
               placeholder="seu@email.com">
      </div>
    </div>
    
    <div class="form-group">
      <label for="assunto">Assunto *</label>
      <select id="assunto" name="assunto" required>
        <option value="">Selecione um assunto</option>
        <option value="orcamento">Orçamento</option>
        <option value="suporte">Suporte Técnico</option>
        <option value="parceria">Parceria</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="mensagem">Mensagem *</label>
      <textarea id="mensagem" name="mensagem" rows="5" required
                placeholder="Escreva sua mensagem aqui..."></textarea>
    </div>
    
    <button type="submit" class="btn-enviar">Enviar Mensagem</button>
  </fieldset>
</form>
```

```css
.form-contato {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-contato fieldset {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.form-contato legend {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0 8px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.btn-enviar {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.btn-enviar:hover {
  opacity: 0.9;
}

/* Desktop: nome e email lado a lado */
@media (min-width: 768px) {
  .form-row {
    display: flex;
    gap: 16px;
  }
  .form-row .form-group {
    flex: 1;
  }
}
```

---

**Questão 7 — Prova B (Ícone Vetorial no Inkscape)**

Resposta esperada:

1. **Formas base:** Retângulo com cantos arredondados (forma de escudo) + círculo interno + forma de cadeado ou chave
2. **Operações booleanas:**
   - Criar escudo: retângulo + triângulo invertido → União → arredondar cantos com extensão
   - Criar símbolo interno: círculo + retângulo → União (para cadeado) → Diferença do escudo (para criar vazado)
3. **Bézier:** Selecionar nós dos cantos do escudo > converter para nós suaves > ajustar alças para curvas orgânicas
4. **Cores:** Azul escuro (#1e3a5f) para confiança e segurança; Verde (#10b981) para proteção; Gradiente linear do azul ao verde para modernidade
5. **Exportação:**
   - Site: Arquivo > Salvar como SVG (vetorial, leve, escalável via código)
   - App: Arquivo > Exportar PNG > configurar 48px, 96px, 144px, 192px, 512px
   - Impressão: Arquivo > Salvar como PDF (vetorial, CMYK se possível)

---

**Questão 8 — Prova B (Discursiva: Plano de Carreira)**

**Rubrica de correção:**

| Critério | 0,5 pt (completo) | 0,25 pt (parcial) | 0 pt |
|---|---|---|---|
| Autoconhecimento | Escolha fundamentada com razões pessoais e de mercado | Escolhe mas não justifica profundamente | Não demonstra reflexão |
| Metas SMART | 3 metas com TODOS os 5 critérios preenchidos | 1-2 metas ou critérios incompletos | Metas vagas sem critérios |
| Plano de ação | Cronograma trimestral com ações específicas | Ações genéricas sem cronograma | Sem plano |
| Visão integrada | Conecta hard+soft skills, networking e autodesenvolvimento | Menciona parcialmente | Visão fragmentada |

---

### Gabarito — Prova de Recuperação

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| 1 | **b)** | `<section>` = agrupamento temático; `<article>` = conteúdo independente (pode existir fora do contexto) |
| 2 | **b) 320px** | Com `border-box`, width (300px) inclui padding e border. Margin (10px × 2 = 20px) é FORA do box-sizing. Total = 300 + 20 = 320px |
| 3 | **b)** | 72 DPI está correto para web (DPI é irrelevante na tela), mas 5000×3000px é muito pesado; deve redimensionar para ~1920px de largura |
| 4 | **a) 4, 1, 2, 3** | Quid pro quo=troca, Phishing=email falso, Pretexting=cenário falso, Baiting=isca física |
| 5 | **b)** | Matriz de Eisenhower: importante+não urgente = AGENDAR (é onde ficam crescimento pessoal, planejamento, estudos) |

---

**Questão 6 — Recuperação (Navbar Responsiva)**

```html
<header class="header">
  <nav class="navbar">
    <a href="/" class="logo">MinhaMarca</a>
    
    <button class="menu-toggle" aria-label="Abrir menu">☰</button>
    
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    
    <a href="#orcamento" class="btn-destaque">Orçamento</a>
  </nav>
</header>
```

```css
:root {
  --cor-primaria: #2563eb;
  --cor-escura: #1e293b;
  --cor-clara: #f8fafc;
  --sombra-header: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header {
  background: var(--cor-clara);
  box-shadow: var(--sombra-header);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--cor-escura);
  text-decoration: none;
}

.menu-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-links {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  flex-direction: column;
}

.nav-links.active {
  display: flex;
}

.nav-links li a {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: var(--cor-escura);
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.3s ease;
}

.nav-links li a:hover {
  background: #e2e8f0;
}

.btn-destaque {
  display: none;
}

/* Desktop */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    width: auto;
    gap: 8px;
  }

  .nav-links li a {
    border-bottom: none;
    padding: 8px 16px;
    border-radius: 6px;
  }

  .btn-destaque {
    display: inline-block;
    padding: 10px 20px;
    background: var(--cor-primaria);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .btn-destaque:hover {
    background: #1d4ed8;
  }
}
```

**Comentário:** Em mobile, o menu está oculto (`display: none`) e aparece com a classe `.active` (controlada por JavaScript). Em desktop, o toggle desaparece e os links ficam em linha com Flexbox.

---

**Questão 7 — Recuperação (App Icon VerdeFit)**

**Parte A — Inkscape:**

Conceito: Folha verde estilizada + garfo/colher formando um "V" + seta de delivery (velocidade)

Processo:
1. Círculo base (fundo verde gradiente: #10b981 → #059669)
2. Criar "V" com a ferramenta Caneta Bézier (duas linhas curvas)
3. Transformar as linhas do "V" em garfo (esquerda) e faca (direita) usando nós e alças
4. Adicionar folha: elipse + operação Interseção com cópia rotacionada
5. Seta sutil no canto: triângulo + arredondar cantos

Escalabilidade:
- Em 1024×1024: todos os detalhes visíveis
- Em 16×16: simplificar — usar apenas o "V" verde sobre fundo branco/circular
- Criar versão "favicon" separada com menos elementos

**Parte B — GIMP:**

1. Abrir SVG exportado do Inkscape em 1024×1024
2. Imagem > Redimensionar para cada tamanho necessário:
   - 512×512: Imagem > Escalar > 512px > Interpolação Cúbica
   - 192×192: mesma técnica
   - 48×48: escalar + Filtros > Realçar > Máscara de Nitidez (Raio:1, Quantidade:0.5)
3. Em tamanhos menores (48px, 16px): aumentar contraste e nitidez pois detalhes se perdem
4. Exportar cada tamanho como PNG-24 com transparência

---

**Questão 8 — Recuperação (Discursiva: LGPD para Desenvolvedores)**

**Rubrica de correção:**

| Critério | 0,5 pt (completo) | 0,25 pt (parcial) | 0 pt |
|---|---|---|---|
| Princípios LGPD | Cita e explica 4+ princípios corretamente | 2-3 princípios ou sem explicação | Menos de 2 ou incorretos |
| Exemplos práticos | 3+ exemplos de implementação técnica | 1-2 exemplos vagos | Sem exemplos técnicos |
| Consequências | Aborda multas, reputação e aspectos éticos | Menciona apenas multas | Não aborda |
| Visão técnica | Conecta LGPD com privacy by design e práticas de dev | Menciona superficialmente | Não conecta |

**Elementos esperados:**
- Princípios: finalidade, necessidade, transparência, segurança, prevenção, não discriminação
- Práticas: criptografia em trânsito (HTTPS) e em repouso, hash de senhas (bcrypt), consentimento explícito em formulários, botão de exclusão de conta, logs de acesso, minimização de dados
- Consequências: multa de até 2% do faturamento (máx R$50mi), dano reputacional, processos judiciais
- Privacy by Design: pensar em proteção desde a arquitetura, não como "patch" posterior

---

### Gabarito — Simulado Integrado (Questões Selecionadas)

**Questão 1 — Estrutura HTML5 Semântica**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechPE — Tecnologia para Todos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <nav class="navbar"><!-- navegação --></nav>
    <div class="hero-content">
      <h1>TechPE 2025</h1>
      <p>Inclusão digital para jovens de Pernambuco</p>
      <a href="#inscricao" class="btn-cta">Inscreva-se Grátis</a>
    </div>
  </header>

  <main>
    <section id="sobre">
      <h2>Sobre o Evento</h2>
      <p>Descrição do evento...</p>
    </section>

    <section id="palestrantes">
      <h2>Palestrantes</h2>
      <div class="grid-palestrantes">
        <!-- cards dos palestrantes -->
      </div>
    </section>

    <section id="programacao">
      <h2>Programação</h2>
      <!-- cronograma -->
    </section>

    <section id="inscricao">
      <h2>Inscrição</h2>
      <form><!-- formulário --></form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 TechPE. Todos os direitos reservados.</p>
    <nav class="social-links"><!-- redes sociais --></nav>
  </footer>
</body>
</html>
```

---

**Questão 2 — Hero com Gradiente e Animação**

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  min-height: 100vh;
  background: 
    linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(124, 58, 237, 0.85)),
    url('hero-bg.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  animation: fadeIn 1s ease-out;
}

.hero p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  animation: fadeIn 1s ease-out 0.3s both;
}

.btn-cta {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 32px;
  background: #ffffff;
  color: #2563eb;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  animation: fadeIn 1s ease-out 0.6s both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

---

**Questão 3 — Grid de Palestrantes**

```css
.grid-palestrantes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .grid-palestrantes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-palestrantes {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card-palestrante {
  text-align: center;
  padding: 24px;
  border-radius: 12px;
  background: #f8fafc;
  transition: transform 0.3s ease;
}

.card-palestrante:hover {
  transform: translateY(-5px);
}

.card-palestrante img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2563eb;
  margin-bottom: 12px;
}

.card-palestrante h3 {
  margin: 8px 0 4px;
  font-size: 1.1rem;
}

.card-palestrante .cargo {
  color: #6b7280;
  font-size: 0.9rem;
}
```

---

**Questão 5 — Estratégia de Breakpoints**

```css
/* 
  ESTRATÉGIA MOBILE-FIRST:
  - Base (0-767px): Mobile — 1 coluna, empilhado, touch-friendly
  - 768px+: Tablet — 2 colunas, mais espaço lateral
  - 1024px+: Desktop — layout completo, 3-4 colunas, hover states
  - 1200px+: Wide — max-width no container, conteúdo não estica infinitamente
  
  POR QUE ESSES VALORES:
  - 768px = largura padrão de tablets em retrato (iPad)
  - 1024px = tablets em paisagem e laptops pequenos
  - 1200px = telas desktop padrão (contém 1140px de conteúdo + margens)
*/

/* Base: Mobile (todos os estilos sem media query) */
body {
  font-size: 16px;
  line-height: 1.6;
}

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 0 40px; }
  .grid-palestrantes { grid-template-columns: repeat(2, 1fr); }
  .form-row { flex-direction: row; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { padding: 0 60px; }
  .grid-palestrantes { grid-template-columns: repeat(4, 1fr); }
  .navbar .nav-links { display: flex; }
  .menu-toggle { display: none; }
}

/* Wide */
@media (min-width: 1200px) {
  .container { max-width: 1140px; margin: 0 auto; }
}
```

---

**Questão 10 — Cultura Digital (Estratégia de Divulgação)**

Resposta esperada:

a) **Plataformas:**
- Instagram/TikTok (público 15-20 anos é majoritário)
- WhatsApp (comunidades e grupos de escola/bairro — alcance direto)
- YouTube Shorts (conteúdo educativo curto)
- NÃO priorizar Facebook (baixa penetração nessa faixa etária)

b) **Furar bolhas algorítmicas:**
- Parcerias com influenciadores de diferentes nichos (não só tech)
- Mídia offline: cartazes em escolas públicas, rádios comunitárias
- Programa de embaixadores: jovens do público-alvo divulgam para seus círculos
- Investir em tráfego pago com segmentação geográfica (comunidades periféricas de Recife)

c) **LGPD no formulário:**
- Coletar apenas dados necessários (princípio da necessidade)
- Informar finalidade clara do tratamento
- Checkbox de consentimento explícito (não pré-marcado)
- Link para política de privacidade
- Opção de exclusão de dados pós-evento
- Menores de 18: necessário consentimento do responsável

d) **Combater desinformação:**
- Perfis verificados e linkados ao site oficial
- Comunicação clara: "Nossos ÚNICOS canais são: @techpe_oficial"
- Resposta rápida a denúncias de perfis falsos
- Equipe de monitoramento durante a campanha

---

**Questão 13 — LinkedIn (Projeto de Vida)**

Exemplo de resposta aceita:

**Headline:** Desenvolvedor Frontend Jr | HTML5, CSS3, JavaScript | Técnico em Desenvolvimento de Sistemas — ETE-PE

**Resumo (About):**
Recém-formado no Curso Técnico em Desenvolvimento de Sistemas pela ETE Pernambuco, com foco em desenvolvimento web frontend. Apaixonado por criar interfaces responsivas, acessíveis e com boa experiência do usuário. Conhecimento sólido em HTML5 semântico, CSS3 (Flexbox, Grid, animações), e design de interfaces. Experiência com ferramentas de design como GIMP e Inkscape para criação de assets visuais. Busco minha primeira oportunidade como desenvolvedor frontend para aplicar e expandir meus conhecimentos em projetos reais.

**5 Competências Técnicas:** HTML5, CSS3, Responsive Design, Git/GitHub, UI Design

**3 Soft Skills:** Trabalho em equipe, Comunicação visual, Resolução de problemas

**Experiências:**
1. Projeto Integrador — ETE-PE (6 meses): Desenvolveu landing page responsiva para campanha de inclusão digital, incluindo identidade visual e assets gráficos.
2. Freelancer — Portfólio pessoal (3 meses): Criou 3 sites responsivos para pequenos negócios locais usando HTML, CSS e boas práticas de acessibilidade.

---

**Questão 15 — Reflexão Integrada**

**Rubrica:**
| Critério | Pontuação |
|---|---|
| Conecta todas as 5 disciplinas de forma coerente | 2,0 pts |
| Conecta 3-4 disciplinas com exemplos | 1,5 pts |
| Conecta 2 disciplinas ou sem exemplos | 1,0 pt |
| Resposta superficial sem integração | 0,5 pt |

**Elementos esperados:**
- HTML/CSS = estrutura e aparência do produto digital
- GIMP/Inkscape = criação dos assets visuais (fotos, ícones, logos) que vão no site
- Cultura Digital = entender o contexto, público, ética, legislação que envolve o projeto
- Projeto de Vida = planejamento profissional para executar tudo isso como carreira
- A integração: um profissional de TI completo não é só quem programa, mas quem entende design, comunicação, ética e sabe gerir sua carreira

---

## 📊 Tabela de Distribuição de Pontos por Disciplina

| Disciplina | Prova A | Prova B | Recuperação | Simulado |
|---|---|---|---|---|
| Programação Web (160h) | 4,1 pts | 4,1 pts | 4,1 pts | 5 questões |
| Cultura do Mundo Digital (40h) | 2,8 pts | 0,8 pt | 2,8 pts | 2 questões |
| Edição de Imagens (40h) | 1,5 pts | 0,8 pt | 0,75 pt | 2 questões |
| Ilustração Vetorial (40h) | 0,8 pt | 2,3 pts | 0,75 pt | 2 questões |
| Projeto de Vida (40h) | 0,8 pt | 2,0 pts | 1,6 pts | 2 questões |
| **Total** | **10,0** | **10,0** | **10,0** | **15 questões** |

> **Nota:** A disciplina de Programação Web possui peso proporcionalmente maior em todas as avaliações por representar 50% da carga horária do módulo (160h de 320h totais).

---

## 📎 Instruções para Aplicação

### Para a Professora:

1. **Provas A e B:** Aplicar em datas diferentes. Usar Prova A para turma principal e Prova B como segunda chamada ou turma alternativa.

2. **Recuperação:** Aplicar apenas para estudantes que não atingiram média. Abrange todo o conteúdo como avaliação substitutiva.

3. **Simulado Integrado:** Pode ser usado como:
   - Trabalho em grupo (equipes de 3-4)
   - Projeto final do módulo (entrega em etapas)
   - Avaliação formativa (sem nota, para diagnóstico)

4. **Lista de Exercícios:** Recomendado como:
   - Atividade de fixação semanal (1-2 exercícios por semana)
   - Preparação para prova (semana anterior)
   - Atividade extra para estudantes avançados (questões 9 e 10)

5. **Questões práticas de código:** Aceitar variações válidas! O gabarito é uma referência, não a única resposta correta. O importante é que o código funcione e atenda aos requisitos.

---

## 🏷️ Taxonomia de Bloom — Classificação das Questões

| Nível | Tipo de Questão | Exemplos neste pacote |
|---|---|---|
| **Lembrar** | Múltipla escolha conceitual | Tags semânticas, formatos de imagem |
| **Compreender** | Identificar e explicar | Red flags de fake news, diferenças entre conceitos |
| **Aplicar** | Código e processos | Escrever HTML/CSS, passo a passo GIMP |
| **Analisar** | Cenários e casos | Análise SWOT, estratégia de divulgação |
| **Avaliar** | Argumentação crítica | Dissertativas sobre LGPD, bolhas algorítmicas |
| **Criar** | Projetos integrados | Landing page completa, logo + campanha |

---

*Documento elaborado por Profª Luana Cristina para o Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco.*
*Módulo 2 — Todas as disciplinas integradas.*
