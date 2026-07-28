# 📘 Manual de Apoio ao Estudante — Ilustração Vetorial (40h)

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco | Profª Luana Cristina**
**Ferramenta principal: Inkscape**

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Vetor vs Raster

Existem dois tipos fundamentais de imagem digital:

| Característica | Vetor | Raster |
|---|---|---|
| Composição | Fórmulas matemáticas | Pixels (quadradinhos) |
| Zoom | Infinito sem perda | Fica pixelado |
| Peso do arquivo | Geralmente leve | Pode ser pesado |
| Exemplos | Logo, ícone, ilustração | Foto, textura |
| Formatos | SVG, AI, EPS | PNG, JPG, GIF |

**Analogia:** Imagine um desenho feito com **arame moldável** (vetor) vs um **mosaico de azulejos** (raster). O arame você estica e ele continua liso; o mosaico, se ampliar, vê cada peça separada.

### 1.2 SVG — Scalable Vector Graphics

SVG é o formato padrão aberto para vetores na web. É um arquivo de texto (XML) que descreve formas com coordenadas e propriedades.

**Vantagens do SVG:**
- Escalável sem perda de qualidade
- Editável com código (HTML/CSS/JS)
- Leve para a web
- Acessível (pode ter texto descritivo)
- Indexável por buscadores

### 1.3 Curvas de Bézier

As curvas de Bézier são a base de toda ilustração vetorial. Elas definem caminhos suaves usando pontos de controle.

**Analogia:** Imagine um **arame moldável** preso em dois pontos. Você puxa "alças" invisíveis que curvam o arame sem quebrá-lo. Quanto mais longe a alça, mais curva fica.

**Componentes:**
- **Nó (Node):** ponto fixo por onde o caminho passa
- **Alça (Handle):** controla a direção e intensidade da curva
- **Segmento:** a linha entre dois nós

### 1.4 Paths (Caminhos)

Um path é uma sequência de nós conectados por segmentos (retos ou curvos). Pode ser:
- **Aberto:** como uma linha (tem início e fim)
- **Fechado:** como um círculo (início e fim se encontram)

Todo objeto vetorial — círculos, retângulos, estrelas — pode ser convertido em path para edição avançada.

### 1.5 Tipografia

Tipografia é a arte de escolher e organizar fontes para comunicação visual eficiente.

**Conceitos-chave:**
- **Serifa (Serif):** fontes com "pézinhos" (ex: Times New Roman) — sensação clássica
- **Sem serifa (Sans-serif):** fontes limpas (ex: Arial, Roboto) — sensação moderna
- **Kerning:** espaço entre pares de letras específicos
- **Leading (entrelinha):** espaço vertical entre linhas de texto
- **Tracking:** espaço uniforme entre todas as letras

### 1.6 Princípios de Logo Design

Um bom logotipo deve ser:
1. **Simples** — reconhecível em 1 segundo
2. **Memorável** — fácil de lembrar
3. **Versátil** — funciona em qualquer tamanho e cor
4. **Atemporal** — não segue modas passageiras
5. **Apropriado** — comunica os valores da marca

**Tipos de logo:** Wordmark, Lettermark, Brandmark (símbolo), Combinado, Emblema.

### 1.7 Ícones e Grid

Ícones são representações visuais simplificadas de conceitos, objetos ou ações.

**Boas práticas:**
- Trabalhar em grid (geralmente 24×24px ou 48×48px)
- Manter espessura de traço consistente
- Usar formas geométricas simples como base
- Respeitar área de segurança (padding interno)
- Manter consistência visual entre ícones do mesmo conjunto

### 1.8 Design Systems

Um Design System é uma coleção de componentes reutilizáveis com regras claras de uso.

**Elementos visuais de um Design System:**
- Paleta de cores (primária, secundária, neutras)
- Tipografia (escala de tamanhos, pesos)
- Iconografia (estilo, grid, espessura)
- Espaçamento (múltiplos de 4px ou 8px)
- Componentes (botões, cards, inputs)

---

## Capítulo 2 — Exemplos de Código/Processo Comentados

### 2.1 Criar Forma Básica no Inkscape

**Passo a passo — Criar um círculo perfeito:**

1. Abra o Inkscape → Arquivo → Propriedades do Documento → defina tamanho (ex: 800×600px)
2. Selecione a ferramenta **Elipse** (tecla `E`)
3. Segure `Ctrl` enquanto arrasta para criar um **círculo perfeito**
4. No painel inferior, defina **Fill** (preenchimento) = cor desejada
5. Defina **Stroke** (contorno) = nenhum ou cor com espessura
6. Use `Ctrl+Shift+A` para alinhar ao centro da página

### 2.2 Usar a Ferramenta Bézier (Caneta)

**Passo a passo — Desenhar uma folha:**

1. Selecione a ferramenta **Bézier** (tecla `B`)
2. Clique para criar o primeiro nó (ponta inferior da folha)
3. Clique em outro ponto e **arraste** para criar uma curva suave (lado esquerdo)
4. Clique no topo e arraste para criar a ponta superior
5. Continue pelo lado direito
6. Feche o caminho clicando no primeiro nó
7. Selecione a ferramenta **Nó** (tecla `N`) para ajustar as curvas
8. Puxe as alças dos nós até conseguir a forma de folha desejada

**Dica:** segure `Ctrl` ao arrastar alças para restringir ângulos.

### 2.3 Operações Booleanas

As operações booleanas combinam ou subtraem formas para criar formas complexas.

**Passo a passo — Criar um ícone de lua (crescente):**

1. Crie um círculo grande (a lua cheia) → Cor amarela
2. Crie um círculo menor sobreposto (deslocado para a direita)
3. Selecione **ambos** os círculos (`Shift+Clique`)
4. Menu → **Caminho → Diferença** (`Ctrl+Menos`)
5. Resultado: forma de lua crescente!

**Operações disponíveis:**
| Operação | Atalho | Resultado |
|---|---|---|
| União | `Ctrl++` | Junta tudo em uma forma |
| Diferença | `Ctrl+-` | Subtrai a forma de cima |
| Interseção | `Ctrl+*` | Mantém só a área comum |
| Exclusão | `Ctrl+^` | Remove a área comum |
| Divisão | `Ctrl+/` | Corta a forma de baixo |

### 2.4 Criar Logo Simples

**Passo a passo — Logo com inicial estilizada:**

1. **Novo documento:** 1000×1000px, fundo transparente
2. **Forma base:** Crie um círculo de 600px (fundo do logo)
3. **Texto:** Ferramenta Texto (`T`), digite a inicial, fonte bold/geométrica
4. **Converter texto em path:** Selecione o texto → Caminho → Objeto para Caminho (`Shift+Ctrl+C`)
5. **Posicionar:** Centralize a letra sobre o círculo
6. **Cores:** Aplique esquema de cores contrastantes (fundo escuro + letra clara)
7. **Teste de redução:** Zoom out para verificar legibilidade em tamanhos pequenos
8. **Versões:** Duplique e crie versões monocromáticas (preto e branco)

### 2.5 Criar Ícone no Grid 24px

**Passo a passo — Ícone de casa:**

1. **Configurar documento:** Tamanho 24×24px
2. **Ativar grid:** Arquivo → Propriedades → Grids → Grid retangular 1px
3. **Ativar snap:** Ímã de snap ativo (barra superior)
4. **Estrutura base:** Desenhe um quadrado 14×10px (corpo da casa) com Bézier
5. **Telhado:** Triângulo 18×8px centralizado acima
6. **Porta:** Retângulo 4×6px centralizado na base
7. **Espessura de traço:** 2px para todos os elementos, sem preenchimento
8. **Padding:** Mantenha 2px de margem interna em cada lado
9. **Verificar:** Zoom em 100% para ver como fica em tamanho real

### 2.6 Exportar SVG Otimizado

**Passo a passo:**

1. **Limpar documento:** Remova objetos ocultos e camadas vazias
2. **Simplificar paths:** Caminho → Simplificar (`Ctrl+L`) — reduz nós desnecessários
3. **Salvar como SVG Otimizado:** Arquivo → Salvar como → SVG Otimizado
4. **Opções de otimização:**
   - ✅ Remover metadados do editor
   - ✅ Remover comentários
   - ✅ Encurtar valores de cor
   - ✅ Converter estilos CSS em atributos
5. **Otimização extra online:** Abra o arquivo no [SVGOMG](https://jakearchibald.github.io/svgomg/)
6. **Verificar resultado:** Abra o SVG no navegador para confirmar que está correto

**Resultado típico:** Redução de 40-70% no tamanho do arquivo.

### 2.7 Criar Paleta de Cores para Marca

**Passo a passo:**

1. **Defina a emoção:** Ex: "confiança e modernidade" → tons de azul
2. **Escolha a cor primária:** Use [Coolors](https://coolors.co/) → gere paletas até encontrar
3. **Monte a hierarquia:**
   - Primária: cor principal da marca (60% de uso)
   - Secundária: cor de destaque/contraste (30% de uso)
   - Acento: cor para CTAs e destaques (10% de uso)
   - Neutras: preto, branco, cinzas para textos e fundos
4. **No Inkscape:** Abra o painel de amostras (Shift+Ctrl+W)
5. **Crie Swatches:** Para cada cor, crie um quadrado e salve na paleta
6. **Teste de contraste:** Verifique legibilidade em [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
7. **Documente:** Anote os códigos HEX, RGB e CMYK de cada cor

**Regra 60-30-10:**
- 60% — Cor dominante (fundos, áreas grandes)
- 30% — Cor secundária (elementos de suporte)
- 10% — Cor de acento (botões, links, destaques)

### 2.8 Criar Ícone a Partir de Forma Geométrica

**Passo a passo — Ícone de coração:**

1. **Dois círculos:** Crie dois círculos iguais (12×12px) lado a lado
2. **Alinhar:** Sobreponha levemente (metade de cada)
3. **Quadrado rotacionado:** Crie um quadrado, gire 45° (Ctrl+])
4. **Posicione:** Coloque o quadrado abaixo dos círculos, formando a ponta
5. **Selecione tudo:** Ctrl+A
6. **União:** Caminho → União (Ctrl++)
7. **Ajuste nós:** Ferramenta Nó (N) para suavizar a junção se necessário
8. **Encaixe no grid:** Centralize no artboard 24×24px com padding de 2px

### 2.9 Princípios de Design System com Inkscape

**Organizando componentes para um Design System simples:**

1. **Criar página de componentes:**
   - Arquivo separado: `design-system-componentes.svg`
   - Organizar em seções: Tipografia, Cores, Ícones, Logos

2. **Tipografia:**
   - Título H1: Roboto Bold, 32px
   - Título H2: Roboto Medium, 24px
   - Corpo: Roboto Regular, 16px
   - Legenda: Roboto Light, 12px

3. **Escala de espaçamento:**
   - XS = 4px | S = 8px | M = 16px | L = 24px | XL = 32px | XXL = 48px

4. **Ícones:**
   - Todos em grid 24×24px
   - Mesma espessura de traço (2px)
   - Cantos arredondados consistentes (2px radius)
   - Exportar cada um como SVG individual

5. **Versionamento:**
   - Salvar versões: `v1.0`, `v1.1`, etc.
   - Documentar mudanças em CHANGELOG

### 2.10 Fluxo de Trabalho Profissional

**Pipeline completo de criação de logo:**

```
Briefing → Pesquisa → Sketches (papel) → Vetor (Inkscape) → 
Variações → Feedback → Refinamento → Exportação → Entrega
```

**Detalhamento:**

| Etapa | Tempo | Entregável |
|---|---|---|
| 1. Briefing | 30min | Documento com requisitos do cliente |
| 2. Pesquisa | 1-2h | Moodboard com referências visuais |
| 3. Sketches | 1-2h | 10-20 esboços rápidos no papel |
| 4. Digitalização | 2-4h | 3 opções vetorizadas no Inkscape |
| 5. Variações | 1h | Cor, P&B, horizontal, vertical, ícone |
| 6. Feedback | — | Apresentar ao "cliente" e coletar opiniões |
| 7. Refinamento | 1-2h | Versão final com ajustes |
| 8. Exportação | 30min | SVG, PNG (vários tamanhos), PDF |
| 9. Entrega | — | Pacote com todas as versões + guia de uso |

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Significado em Português |
|---|---|
| **Vector** | Imagem definida por fórmulas matemáticas, escalável sem perda |
| **Raster** | Imagem formada por pixels (pontos), perde qualidade ao ampliar |
| **Path** | Caminho vetorial — sequência de pontos e curvas que forma uma figura |
| **Node** | Nó — ponto de ancoragem por onde o caminho passa |
| **Bézier** | Tipo de curva matemática controlada por alças (handles) |
| **Stroke** | Contorno — a linha visível ao redor de uma forma |
| **Fill** | Preenchimento — a cor ou padrão dentro de uma forma |
| **Gradient** | Gradiente — transição suave entre duas ou mais cores |
| **SVG** | Scalable Vector Graphics — formato padrão aberto de vetor para web |
| **Scalable** | Escalável — pode mudar de tamanho sem perder qualidade |
| **Typography** | Tipografia — arte e técnica de organizar tipos (fontes) |
| **Font** | Fonte — conjunto de caracteres com estilo visual consistente |
| **Serif** | Serifa — pequenos "traços" nas extremidades das letras |
| **Sans-serif** | Sem serifa — fontes sem traços decorativos nas extremidades |
| **Kerning** | Ajuste de espaço entre pares específicos de letras |
| **Leading** | Entrelinha — espaço vertical entre linhas de texto |
| **Logo** | Logotipo — símbolo visual que representa uma marca |
| **Icon** | Ícone — representação visual simplificada de um conceito |
| **Grid** | Grade — estrutura de linhas guia para alinhar elementos |
| **Boolean** | Booleana — operação que combina/subtrai formas (união, diferença, etc.) |
| **Union** | União — operação que junta duas formas em uma só |
| **Intersection** | Interseção — mantém apenas a área onde duas formas se sobrepõem |
| **Difference** | Diferença — subtrai uma forma de outra |
| **Export** | Exportar — salvar o trabalho em formato específico para uso final |
| **Artboard** | Prancheta — área delimitada que define o "canvas" do documento |
| **Anchor Point** | Ponto de ancoragem — mesmo que Node, onde o path é fixado |
| **Handle** | Alça — controle que define a curvatura de um segmento Bézier |
| **Layer** | Camada — nível de organização que separa elementos no documento |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### Documentação Oficial
- 📖 [Inkscape — Documentação Oficial](https://inkscape.org/doc/)
- 📖 [Inkscape — Tutoriais Embutidos](https://inkscape.org/doc/tutorials/basic/tutorial-basic.html)

### Cursos e Canais em Vídeo
- 🎬 [Logos By Nick](https://www.youtube.com/c/LogosByNick) — Tutoriais Inkscape do básico ao avançado (inglês)
- 🎬 [Inkscape Brasil](https://www.youtube.com/@InkscapeBrasil) — Tutoriais em português
- 🎬 [TJ FREE](https://www.youtube.com/c/TJFree) — Design vetorial no Inkscape (inglês)

### Ferramentas Online
- 🛠️ [SVGOMG](https://jakearchibald.github.io/svgomg/) — Otimizador de SVG online
- 🛠️ [Google Fonts](https://fonts.google.com/) — Fontes gratuitas de alta qualidade
- 🛠️ [Coolors](https://coolors.co/) — Gerador de paletas de cores
- 🛠️ [Contrast Checker](https://webaim.org/resources/contrastchecker/) — Verificador de contraste

### Referências e Inspiração
- 🎨 [Flaticon](https://www.flaticon.com/) — Biblioteca de ícones gratuitos
- 🎨 [Dribbble](https://dribbble.com/) — Portfólios de designers profissionais
- 🎨 [Behance](https://www.behance.net/) — Projetos criativos de todo o mundo
- 🎨 [SVG Repo](https://www.svgrepo.com/) — SVGs gratuitos para uso comercial
- 🎨 [Noun Project](https://thenounproject.com/) — Ícones com conceitos universais

### Para Praticar
- ✏️ [Daily Logo Challenge](https://dailylogochallenge.com/) — Um desafio de logo por dia
- ✏️ [Inkscape Tutorials Blog](https://inkscapetutorials.org/) — Exercícios práticos

---

> **Dica da professora:** Pratique diariamente, mesmo que por 15 minutos. A habilidade com Bézier vem com repetição. Comece redesenhando logos simples que você admira! 🎯
