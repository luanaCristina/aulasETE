# 📘 Manual de Apoio ao Estudante — Design de Interfaces Mobile (40h)

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco | Profª Luana Cristina**
**Ferramentas: Figma + Material Design**

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 UI Mobile vs Desktop

Diferenças fundamentais que impactam o design:

| Aspecto | Mobile | Desktop |
|---|---|---|
| Tela | Pequena (5-7") | Grande (13-32") |
| Interação | Toque (dedos) | Mouse + teclado |
| Contexto | Em movimento, distrações | Sentado, focado |
| Navegação | Bottom tabs, gestos | Menu superior, sidebar |
| Conteúdo | Priorizar o essencial | Mais espaço disponível |
| Tipografia mínima | 14-16sp | 12-14px |

**Regra de ouro mobile:** Menos é mais. Cada pixel importa.

### 1.2 Material Design 3

Material Design é o sistema de design do Google — um conjunto de diretrizes, componentes e ferramentas para criar interfaces consistentes.

**Analogia:** Material Design é como um **manual de arquitetura** para construir casas. Define padrões de portas (botões), janelas (cards), corredores (navegação) e decoração (cores/tipografia). Seguindo o manual, todas as casas (apps) ficam bonitas e funcionais de forma consistente.

**Princípios MD3:**
- **Personalização** — Dynamic Color adapta a paleta ao wallpaper do usuário
- **Acessibilidade** — Contraste, touch targets, leitores de tela
- **Responsividade** — Adapta para mobile, tablet, desktop, wearable

### 1.3 Thumb Zone (Zona do Polegar)

A maioria das pessoas usa o celular com uma mão. O polegar tem alcance limitado.

**Analogia:** Imagine o **alcance do polegar** como um arco-íris parcial na tela. O centro-inferior é fácil, os cantos superiores são difíceis.

```
┌─────────────────┐
│  ⚠️ Difícil     │  ← Cantos superiores
│                 │
│   😐 OK         │  ← Centro
│                 │
│  ✅ Fácil       │  ← Parte inferior
└─────────────────┘
```

**Boas práticas:**
- Ações principais na parte inferior (FAB, bottom navigation)
- Ações destrutivas longe da zona fácil
- Menu hamburger é problemático (canto superior esquerdo = difícil)

### 1.4 Touch Targets

Tamanho mínimo de áreas tocáveis para evitar erros de toque.

**Recomendações:**
- Material Design: mínimo **48×48dp**
- Apple HIG: mínimo **44×44pt**
- Espaçamento entre alvos: mínimo **8dp**

### 1.5 Components (Componentes)

Componentes são elementos de UI reutilizáveis com comportamento e aparência padronizados.

**Analogia:** São como **peças de LEGO padronizadas**. Cada peça (botão, card, input) tem formato definido, encaixa com outras peças, e pode ser usada em diferentes construções (telas) mantendo consistência.

**Componentes essenciais Material:**
- Button (Filled, Outlined, Text, FAB)
- TextField (Filled, Outlined)
- Card (Elevated, Filled, Outlined)
- Navigation Bar (Bottom)
- Top App Bar
- Chips, Dialogs, Snackbars

### 1.6 Auto Layout (Figma)

Auto Layout permite criar frames que se redimensionam automaticamente conforme o conteúdo.

**Analogia:** Auto Layout é como uma **prateleira que se ajusta**. Se você coloca mais livros, ela alarga. Se tira livros, ela encolhe. O espaçamento entre livros é sempre o mesmo.

**Propriedades:**
- **Direction** — Horizontal ou vertical
- **Padding** — Espaço interno (como moldura)
- **Gap** — Espaço entre itens
- **Alignment** — Onde os itens se posicionam dentro do frame
- **Resizing** — Hug (abraça o conteúdo) ou Fill (preenche o espaço)

### 1.7 Variants (Variantes)

Variants agrupam diferentes estados de um componente em uma única estrutura.

**Analogia:** São como **sabores do mesmo sorvete**. O componente é "sorvete" e as variantes são "chocolate", "morango", "baunilha". Mesmo recipiente, apresentações diferentes.

**Uso comum:**
- Botão: Default, Hover, Pressed, Disabled
- Input: Empty, Filled, Error, Focused
- Card: Small, Medium, Large

### 1.8 Prototyping

Prototipar é criar uma simulação interativa da interface, sem código.

**Fluxo de prototipagem no Figma:**
1. Criar telas (frames)
2. Conectar elementos a destinos (clique → vai para tela X)
3. Definir transições (Smart Animate, Dissolve, Slide)
4. Testar no modo Preview ou no celular

### 1.9 Acessibilidade Mobile

Design acessível garante que todos possam usar o app, incluindo pessoas com deficiências.

**Checklist básico:**
- ✅ Contraste mínimo 4.5:1 (texto normal) / 3:1 (texto grande)
- ✅ Touch targets de no mínimo 48×48dp
- ✅ Labels descritivos para elementos interativos
- ✅ Não usar cor como único indicador de estado
- ✅ Suportar aumento de fonte do sistema
- ✅ Hierarquia visual clara

### 1.10 Handoff (Entrega para Desenvolvimento)

Handoff é o processo de entregar o design pronto para os desenvolvedores implementarem.

**Analogia:** É como **entregar uma receita detalhada ao cozinheiro**. A receita tem medidas exatas (espaçamentos em dp), ingredientes (cores hex), instruções de preparo (interações) e foto do prato pronto (mockup).

**O que entregar:**
- Specs (espaçamentos, tamanhos, cores)
- Assets exportados (ícones, imagens)
- Tokens de design (variáveis de cor, tipografia)
- Notas de interação (animações, estados)
- Protótipo funcional

---

## Capítulo 2 — Exemplos de Código/Processo Comentados

### 2.1 Criar Frame Mobile no Figma

**Passo a passo:**

1. Abra o Figma → Novo arquivo de design
2. Pressione `F` (Frame tool) ou clique no ícone de frame
3. No painel direito, escolha preset: **Android Small (360×640)** ou **iPhone 14 (390×844)**
4. Renomeie o frame: clique duplo no nome → "Tela - Login"
5. Defina cor de fundo: selecione o frame → Fill → `#FFFFFF` ou cor do tema
6. Organize na página: mantenha frames lado a lado com 100px de espaço

**Dica:** Use a convenção de nomes: `Tela - [Nome]` para organizar.

### 2.2 Setup Grid 8px

**Passo a passo:**

1. Selecione o frame mobile
2. Painel direito → seção **Layout Grid** → clique `+`
3. Configure o grid:
   - Tipo: **Grid**
   - Size: **8px** (base do Material Design)
   - Color: rosa com 10% opacidade
4. Adicione um segundo grid para colunas:
   - Tipo: **Columns**
   - Count: **4** (mobile padrão)
   - Margin: **16px** (margem lateral)
   - Gutter: **16px** (espaço entre colunas)
5. Atalho `Ctrl+G` para mostrar/esconder o grid

**Por que 8px?** Todos os espaçamentos são múltiplos de 8 (8, 16, 24, 32, 48...), criando ritmo visual consistente.

### 2.3 Criar Botão com Auto Layout

**Passo a passo:**

1. Crie um texto: ferramenta Text (`T`), digite "Entrar"
   - Font: Roboto Medium, 14px, cor `#FFFFFF`
2. Selecione o texto → `Shift+A` (Add Auto Layout)
3. Configure o Auto Layout:
   - Direction: Horizontal
   - Padding horizontal: **24px**
   - Padding vertical: **12px**
4. Estilize o container:
   - Fill: `#6750A4` (Primary do Material 3)
   - Corner Radius: **20px** (rounded)
5. Adicione ícone (opcional):
   - Insira ícone antes do texto
   - Gap entre ícone e texto: **8px**
6. Transforme em componente: selecione tudo → `Ctrl+Alt+K`
7. Renomeie: "Button / Filled / Default"

### 2.4 Criar Variantes (States)

**Passo a passo:**


1. Selecione o componente "Button / Filled / Default" criado
2. No painel direito → clique **Add Variant** (`+`)
3. Uma cópia será criada dentro de um frame roxo tracejado (Component Set)
4. Renomeie a propriedade: "State" com valores:
   - `Default` — cor normal `#6750A4`
   - `Pressed` — cor mais escura `#4A3780`
   - `Disabled` — cor cinza `#E0E0E0`, texto `#9E9E9E`
   - `Hover` — leve overlay branco 8% sobre a cor primária
5. Para cada variante, ajuste:
   - Cor de fundo
   - Cor do texto
   - Opacidade (se aplicável)
   - Elevation/sombra (se aplicável)
6. Adicione nova propriedade: "Size" = `Small`, `Medium`, `Large`
   - Small: padding 8/16, font 12px
   - Medium: padding 12/24, font 14px
   - Large: padding 16/32, font 16px

**Resultado:** Um componente botão com combinações State × Size.

### 2.5 Conectar Protótipo (Smart Animate)

**Passo a passo:**

1. Mude para a aba **Prototype** (painel direito)
2. Selecione o botão "Entrar" na tela de Login
3. Arraste o ponto azul (connection point) até a tela de destino "Tela - Home"
4. Configure a interação:
   - Trigger: **On Tap**
   - Action: **Navigate to** → "Tela - Home"
   - Animation: **Smart Animate**
   - Easing: **Ease Out**
   - Duration: **300ms**
5. Para animação de bottom sheet:
   - Trigger: On Tap
   - Action: **Open Overlay**
   - Position: Bottom center
   - Animation: **Slide In** (bottom)
6. Teste: clique **Play** (▶️) no canto superior direito
7. Compartilhe: clique **Share Prototype** para gerar link

### 2.6 Exportar para Dev (Dev Mode)

**Passo a passo:**

1. Ative o **Dev Mode** (toggle no topo do Figma — ícone `</>`)
2. Em Dev Mode, selecione qualquer elemento para ver:
   - **Propriedades CSS** (cores, tamanhos, espaçamentos)
   - **Código** — opção Android (XML) ou iOS (SwiftUI)
   - **Assets** — ícones e imagens para exportar
3. Para exportar assets:
   - Selecione o elemento → painel direito → **Export**
   - Formatos: SVG (ícones), PNG @1x @2x @3x (imagens)
   - Para Android: marque "Android" → gera mdpi/hdpi/xhdpi/xxhdpi
4. Para copiar specs:
   - Clique no elemento → veja medidas em dp/sp
   - Clique entre elementos → veja distâncias
5. Para exportar tokens:
   - Use plugins como "Figma Tokens" ou "Style Dictionary"
   - Exporta cores, tipografia, espaçamentos como JSON/XML

### 2.7 Criar Navigation Bar (Bottom Navigation)

**Passo a passo:**

1. Crie um frame: 360×56px (largura da tela × altura padrão da nav)
2. Aplique Auto Layout: horizontal, padding 0, gap 0
3. Posicione na parte inferior do frame de tela
4. Para cada item da nav (3-5 itens):
   - Crie frame 72×56px com Auto Layout vertical
   - Adicione ícone (24×24px) + label (12sp)
   - Gap entre ícone e label: 4px
   - Alinhamento: center
5. Cor de fundo: Surface (`#FFFBFE`)
6. Item ativo: ícone preenchido + indicator pill (`#E8DEF8`)
7. Item inativo: ícone outline + texto `#49454F`
8. Transforme em componente com variants:
   - Property "Active Item": `Home`, `Search`, `Profile`, `Settings`
9. Teste: verifique que cada item tem área tocável ≥ 48×48dp

### 2.8 Organizar Projeto no Figma

**Estrutura recomendada de páginas:**

| Página | Conteúdo |
|---|---|
| 🎨 Cover | Thumbnail do projeto com título e status |
| 📐 Design System | Cores, tipografia, componentes, ícones |
| 📱 Wireframes | Estrutura básica das telas (baixa fidelidade) |
| ✨ UI Final | Telas prontas em alta fidelidade |
| 🔗 Protótipo | Fluxos conectados e interações |
| 📝 Documentação | Notas para devs, specs, decisões |

**Convenção de nomes para layers:**
- Frames de tela: `Tela / [Nome]` (ex: `Tela / Login`)
- Componentes: `[Tipo] / [Variação] / [Estado]` (ex: `Button / Filled / Default`)
- Ícones: `Icon / [Nome]` (ex: `Icon / Heart`)

**Boas práticas:**
- Use cores e texto como **Styles** (não hardcode)
- Agrupe elementos relacionados em frames nomeados
- Mantenha componentes na página "Design System"
- Use Sections para organizar telas por fluxo

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Significado em Português |
|---|---|
| **UI** | Interface do Usuário — elementos visuais com os quais o usuário interage |
| **Mobile** | Dispositivo móvel (smartphone, tablet) |
| **Responsive** | Design que se adapta a diferentes tamanhos de tela |
| **Material Design** | Sistema de design do Google para interfaces consistentes |
| **HIG** | Human Interface Guidelines — diretrizes de design da Apple |
| **Thumb Zone** | Zona do polegar — área de fácil alcance ao usar com uma mão |
| **Touch Target** | Área mínima tocável para interação precisa (48×48dp) |
| **Component** | Elemento de UI reutilizável com propriedades definidas |
| **Instance** | Cópia vinculada de um componente (herda propriedades) |
| **Variant** | Variação de um componente (estados, tamanhos, tipos) |
| **Auto Layout** | Sistema de layout automático do Figma baseado em regras |
| **Frame** | Container principal no Figma (equivale a div/ViewGroup) |
| **Constraint** | Restrição que define como elemento se comporta ao redimensionar |
| **Prototype** | Simulação interativa do design sem código real |
| **Flow** | Sequência de telas que o usuário percorre para completar tarefa |
| **Interaction** | Ação do usuário + resposta da interface (tap → navigate) |
| **Transition** | Animação entre estados ou telas durante navegação |
| **Smart Animate** | Recurso do Figma que anima diferenças entre frames automaticamente |
| **Micro-interaction** | Pequena animação de feedback (like, loading, toggle) |
| **Accessibility** | Design inclusivo para pessoas com deficiências |
| **Contrast** | Diferença de luminosidade entre texto e fundo |
| **WCAG** | Diretrizes de Acessibilidade para Conteúdo Web |
| **Screen Reader** | Software que lê a tela em voz alta para deficientes visuais |
| **Handoff** | Processo de entregar specs do design para desenvolvimento |
| **Spec** | Especificação técnica (medidas, cores, comportamentos) |
| **Token** | Variável nomeada de design (cor, fonte, espaçamento) |
| **Design System** | Conjunto completo de componentes + regras de uso |
| **Breakpoint** | Largura de tela onde o layout muda de comportamento |
| **dp** | Density-independent Pixel — unidade Android para layouts |
| **sp** | Scale-independent Pixel — unidade Android para texto |
| **pt** | Point — unidade iOS para medidas de interface |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### Documentação e Guidelines
- 📖 [Material Design 3](https://m3.material.io/) — Guidelines oficiais do Google
- 📖 [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) — Guidelines da Apple
- 📖 [Figma Learn](https://help.figma.com/) — Documentação do Figma

### Comunidade e Inspiração
- 🎨 [Figma Community](https://www.figma.com/community) — Templates e plugins gratuitos
- 🎨 [Mobbin](https://mobbin.com/) — Biblioteca de padrões de UI reais
- 🎨 [Laws of UX](https://lawsofux.com/) — Princípios psicológicos do design

### Acessibilidade
- ♿ [Stark Plugin (Figma)](https://www.figma.com/community/plugin/732603254453395948) — Verificador de acessibilidade
- ♿ [Contrast Checker](https://webaim.org/resources/contrastchecker/) — Verificar contraste WCAG
- ♿ [Inclusive Design](https://inclusive.microsoft.design/) — Princípios de design inclusivo

### Ferramentas Complementares
- 🛠️ [Material Theme Builder](https://m3.material.io/theme-builder) — Gerar temas Material 3
- 🛠️ [Figma Mirror](https://www.figma.com/mirror) — Visualizar protótipos no celular
- 🛠️ [Color Hunt](https://colorhunt.co/) — Paletas de cores curadas
- 🛠️ [Phosphor Icons](https://phosphoricons.com/) — Biblioteca de ícones para Figma

---

> **Dica da professora:** Antes de abrir o Figma, esboce no papel. 5 minutos de sketch economizam 1 hora de design. E sempre teste seus protótipos com pessoas reais — seu olhar já está viciado! ✏️
