# 📘 Manual de Apoio ao Estudante — Edição de Imagens (40h)

**Escola Técnica Estadual de Pernambuco**
**Professora:** Luana Cristina
**Curso:** Desenvolvimento de Sistemas

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Pixel vs Vetor

As imagens digitais se dividem em dois tipos fundamentais:

**Imagem Raster (Pixel/Bitmap):**
- Formada por **milhões de pontinhos quadrados** (pixels)
- Ao ampliar muito, fica "pixelada" (serrilhada)
- Usada em: fotos, edições complexas, arte digital realista
- Programas: GIMP, Photoshop, Krita

**Imagem Vetorial:**
- Formada por **fórmulas matemáticas** (pontos, linhas, curvas)
- Pode ampliar **infinitamente** sem perder qualidade
- Usada em: logos, ícones, ilustrações, material para impressão
- Programas: Inkscape, Illustrator, CorelDRAW

> 🔍 **Analogia:** Imagine que uma imagem Raster é como um mosaico de pastilhas — de longe é bonito, mas de perto você vê cada pastilhinha. Já um vetor é como um desenho feito com uma caneta mágica que sempre mantém as linhas perfeitas, não importa o tamanho.

### 1.2 Formatos de Imagem

| Formato | Tipo | Transparência | Melhor para |
|---------|------|:---:|-----------|
| **JPG/JPEG** | Raster | ❌ | Fotos (tamanho pequeno, perda de qualidade) |
| **PNG** | Raster | ✅ | Logos, prints, imagens com fundo transparente |
| **GIF** | Raster | ✅ (parcial) | Animações simples, memes animados |
| **WebP** | Raster | ✅ | Web (moderno, menor que JPG e PNG) |
| **SVG** | Vetor | ✅ | Ícones, logos, gráficos para web |
| **PSD** | Raster | ✅ | Arquivo editável do Photoshop |
| **XCF** | Raster | ✅ | Arquivo editável do GIMP |

> 📷 **Analogia:** JPG é como um arquivo ZIP da foto — comprime para ficar leve, mas perde um pouco da qualidade. PNG é como guardar a foto original numa pasta — maior mas sem perda. GIF é um flipbook (livrinhos de animação que a gente folheia rápido).

### 1.3 RGB vs CMYK

| Modelo | Usado em | Cores base | Lógica |
|--------|---------|-----------|--------|
| **RGB** | Telas (celular, monitor, TV) | Red, Green, Blue | Luz somada: R+G+B = Branco |
| **CMYK** | Impressão (gráfica, papel) | Cyan, Magenta, Yellow, Key(Black) | Tinta subtraída: C+M+Y+K = Preto |

> 💡 **Analogia:** RGB é como holofotes coloridos no palco — quanto mais luz, mais claro. CMYK é como tinta na paleta — quanto mais mistura, mais escuro fica.

**Regra prática:**
- Vai aparecer na **tela**? → RGB
- Vai ser **impresso**? → CMYK (ou converta antes de mandar para gráfica)

### 1.4 DPI e Resolução

**DPI (Dots Per Inch)** = Quantos pontos de cor cabem em uma polegada.

| Uso | DPI recomendado |
|-----|:-:|
| Telas/web | 72 DPI |
| Impressão caseira | 150 DPI |
| Impressão profissional | 300 DPI |
| Outdoor/banner grande | 50-100 DPI |

> 📐 **Analogia:** DPI é como a "densidade" de um tecido. Um tecido com fios bem juntos (alta resolução) é macio e detalhado. Um tecido com fios espaçados (baixa resolução) parece grosseiro de perto, mas funciona de longe (outdoor).

**Resolução** = largura × altura em pixels (ex: 1920×1080)

### 1.5 Camadas (Layers)

Camadas são o conceito mais importante da edição de imagens. Permitem trabalhar em **partes separadas** da imagem sem afetar as outras.

> 📄 **Analogia das folhas transparentes empilhadas:** Imagine várias folhas de acetato (transparência) empilhadas. Em uma você desenha o fundo, em outra o personagem, em outra o texto. Você pode mover, apagar ou esconder qualquer folha sem mexer nas outras. No final, olhando de cima, parece uma imagem só.

**Operações com camadas:**
- **Criar** nova camada (vazia ou com conteúdo)
- **Reordenar** (quem fica na frente/atrás)
- **Opacidade** (quão transparente é a camada)
- **Modo de mesclagem** (como ela interage com a camada de baixo)
- **Agrupar** (organizar em pastas)
- **Mesclar** (juntar camadas — cuidado, é irreversível!)

### 1.6 Seleções

Seleções permitem **isolar uma área** da imagem para editar apenas ali.

**Ferramentas de seleção no GIMP:**
| Ferramenta | Atalho | Uso |
|-----------|--------|-----|
| Retangular | R | Selecionar áreas quadradas/retangulares |
| Elíptica | E | Selecionar áreas circulares/ovais |
| Livre (Laço) | F | Desenhar seleção à mão livre |
| Tesoura | I | Seleção inteligente que "gruda" nas bordas |
| Por Cor | Shift+O | Seleciona todos os pixels da mesma cor |
| Fuzzy (Varinha) | U | Seleciona área contínua de cor similar |

> ✂️ **Analogia:** Seleção é como usar fita crepe antes de pintar a parede. Você cobre o que NÃO quer pintar, e aí pode pintar livremente sem medo de borrar.

### 1.7 Máscaras

Máscara é uma forma **não-destrutiva** de esconder/mostrar partes de uma camada.

- **Branco** na máscara = visível
- **Preto** na máscara = escondido
- **Cinza** na máscara = parcialmente visível (transparência)

> 🎭 **Analogia:** É literalmente uma máscara de teatro. Onde a máscara cobre (preto), o rosto fica escondido. Onde tem abertura (branco), o rosto aparece. E você pode tirar/colocar a máscara sem mexer no rosto (não-destrutivo).

### 1.8 Filtros

Filtros são efeitos automáticos que modificam pixels da imagem.

**Categorias principais no GIMP:**
| Categoria | Exemplos | Uso comum |
|----------|---------|----------|
| Desfocar (Blur) | Gaussiano, Movimento | Suavizar, efeito de profundidade |
| Realçar (Sharpen) | Máscara de nitidez | Deixar foto mais nítida |
| Distorção | Ondulação, Esfera | Efeitos criativos |
| Luz e Sombra | Sombra projetada, Brilho | Destaque de elementos |
| Ruído | Adicionar/remover ruído | Efeito vintage, limpeza |
| Mapa | Deslocamento, Relevo | Texturas e efeitos 3D |

---

## Capítulo 2 — Exemplos de Processo Comentados (GIMP)

### 2.1 Tratar Foto — Brilho, Contraste e Cor

**Objetivo:** Melhorar uma foto escura e sem vida tirada com celular.

**Passo a passo:**

1. **Abrir a imagem**
   - Arquivo → Abrir (Ctrl+O) → selecione a foto

2. **Ajustar Níveis** (mais controle que brilho/contraste)
   - Cores → Níveis
   - Arraste o triângulo **preto** (sombras) para a direita até onde começa o histograma
   - Arraste o triângulo **branco** (luzes) para a esquerda
   - Ajuste o triângulo **cinza** do meio (meios-tons) para clarear/escurecer
   - Preview: ativado para ver em tempo real

3. **Ajustar Curvas** (ajuste fino)
   - Cores → Curvas
   - Crie um "S suave" na curva: puxe levemente para cima na parte superior (clareia luzes) e para baixo na parte inferior (escurece sombras)
   - Isso aumenta o contraste de forma elegante

4. **Saturação** (intensidade das cores)
   - Cores → Matiz/Saturação
   - Aumente levemente a saturação (+10 a +25) — não exagere!

5. **Nitidez** (foto de celular costuma ser suave)
   - Filtros → Realçar → Máscara de Nitidez (Unsharp Mask)
   - Quantidade: 50-80%
   - Raio: 1-3px
   - Limiar: 0

6. **Exportar**
   - Arquivo → Exportar Como (Shift+Ctrl+E)
   - Para web: JPG qualidade 80-85%
   - Para manter qualidade: PNG

### 2.2 Recortar Objeto — Remover Fundo

**Objetivo:** Isolar uma pessoa/objeto e remover o fundo (deixar transparente).

**Passo a passo:**

1. **Adicionar canal alfa** (permite transparência)
   - Camada → Transparência → Adicionar Canal Alfa

2. **Selecionar o objeto** (método 1: Seleção por Cor — fundo uniforme)
   - Ferramenta "Selecionar por Cor" (Shift+O)
   - Clique no fundo
   - Ajuste o "Limiar" (threshold) até selecionar só o fundo
   - Se o fundo for simples (ex: branco), esse método funciona bem

3. **Selecionar o objeto** (método 2: Caminhos — mais preciso)
   - Ferramenta "Caminhos" (B)
   - Clique ponto a ponto ao redor do objeto (contorno)
   - Em curvas, segure e arraste para criar curvas suaves
   - Feche o caminho clicando no primeiro ponto
   - No painel Caminhos: "Caminho para Seleção"

4. **Refinar a seleção**
   - Seleção → Suavizar (Feather) — 1-2px para bordas naturais
   - Use Ctrl+Z para desfazer e refazer se necessário

5. **Deletar o fundo**
   - Se selecionou o FUNDO: pressione Delete
   - Se selecionou o OBJETO: Seleção → Inverter (Ctrl+I) → Delete

6. **Exportar com transparência**
   - Arquivo → Exportar Como → formato PNG (JPG não suporta transparência!)

### 2.3 Criar Banner para YouTube

**Especificações oficiais do YouTube:**
- Tamanho recomendado: **2560 × 1440 px**
- Área segura (visível em todos os dispositivos): **1546 × 423 px** (centro)
- Formato: JPG ou PNG, máximo 6MB

**Passo a passo:**

1. **Criar nova imagem**
   - Arquivo → Nova (Ctrl+N)
   - Largura: 2560 | Altura: 1440
   - Preencher com: cor de fundo escolhida

2. **Definir área segura (guias)**
   - Imagem → Guias → Nova Guia
   - Horizontal: 508px e 932px (limites superior/inferior da área segura)
   - Vertical: 507px e 2053px (limites laterais da área segura)
   - O conteúdo IMPORTANTE deve ficar DENTRO dessas guias

3. **Adicionar fundo**
   - Importe uma imagem de fundo (Arquivo → Abrir Como Camadas)
   - Redimensione para cobrir o canvas (Ferramenta Escala)
   - Ou crie degradê: Ferramenta Degradê (G)

4. **Adicionar texto**
   - Ferramenta Texto (T)
   - Nome do canal: fonte grande e legível (40-80px)
   - Slogan/descrição: fonte menor abaixo (20-30px)
   - Posicione no CENTRO (área segura!)

5. **Adicionar elementos visuais**
   - Logo: importe como nova camada
   - Ícones de redes sociais: posicione na área segura
   - Dica: use sombra projetada para destacar texto sobre foto

6. **Exportar**
   - Arquivo → Exportar Como → banner-youtube.png
   - Verifique o tamanho do arquivo (máx 6MB)

### 2.4 Criar Post para Instagram

**Especificações do Instagram:**
| Formato | Dimensão | Proporção |
|---------|----------|-----------|
| Post Feed (quadrado) | 1080 × 1080 px | 1:1 |
| Post Feed (retrato) | 1080 × 1350 px | 4:5 |
| Story/Reels | 1080 × 1920 px | 9:16 |
| Carrossel | 1080 × 1080 px (cada slide) | 1:1 |

**Passo a passo (Post Feed 1080×1080):**

1. **Criar nova imagem**
   - Arquivo → Nova: 1080 × 1080px, 72 DPI, RGB

2. **Criar fundo**
   - Camada nova: preencha com cor sólida (Balde de Tinta - Shift+B)
   - Ou crie degradê com cores da sua paleta
   - Ou use foto como fundo (Abrir Como Camadas)

3. **Adicionar foto principal (se houver)**
   - Abrir Como Camadas → selecionar foto
   - Redimensionar: Ferramenta Escala (Shift+S)
   - Posicionar: Ferramenta Mover (M)
   - Opcional: aplicar forma redonda com máscara elíptica

4. **Adicionar texto principal (headline)**
   - Ferramenta Texto (T)
   - Tamanho: 60-100px (precisa ser legível no celular!)
   - Fonte: negrito/bold para destaque
   - Posicione na parte superior ou central
   - Cor: contraste alto com o fundo

5. **Adicionar texto secundário**
   - Nova camada de texto
   - Tamanho: 30-40px
   - Informações complementares, data, local

6. **Adicionar elementos decorativos**
   - Formas geométricas (seleção + preenchimento)
   - Linhas separadoras
   - Ícones (importados como camada)
   - Sombras: Filtros → Luz e Sombra → Sombra Projetada

7. **Verificar legibilidade**
   - Zoom para 50% — simula tela do celular
   - Todo texto deve ser legível nesse zoom!
   - Se não for legível, aumente o tamanho ou simplifique

8. **Exportar**
   - Arquivo → Exportar Como → post-instagram.jpg
   - Qualidade: 90-95% (Instagram recomprime, então envie com qualidade alta)

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Pronúncia Aproximada | Significado |
|----------------|---------------------|-------------|
| **Pixel** | píksel | Menor ponto de cor numa imagem digital (picture element) |
| **Raster** | ráster | Imagem formada por grade de pixels (bitmap) |
| **Vector** | véctor | Imagem formada por fórmulas matemáticas (escalável infinitamente) |
| **Resolution** | resolúxon | Quantidade de pixels por dimensão (ex: 1920×1080) |
| **DPI** | dí-pi-ái | Pontos por polegada — densidade de uma impressão |
| **Layer** | lêier | Camada — folha transparente independente na composição |
| **Mask** | mésc | Máscara — controle não-destrutivo de visibilidade (preto=oculto, branco=visível) |
| **Selection** | selécxon | Área isolada da imagem para edição localizada |
| **Filter** | fílter | Efeito automático aplicado aos pixels (desfoque, nitidez, distorção) |
| **Blend Mode** | blénd môud | Modo de mesclagem — como uma camada interage com a de baixo |
| **Opacity** | opáciti | Transparência de uma camada (0%=invisível, 100%=sólido) |
| **Channel** | txénel | Canal — componente de cor da imagem (Red, Green, Blue, Alpha) |
| **Alpha** | álfa | Canal de transparência (o "A" em RGBA) |
| **Crop** | króp | Cortar/recortar — remover bordas desnecessárias |
| **Transform** | transfórm | Transformar — redimensionar, rotacionar, distorcer |
| **Clone** | clôun | Ferramenta que copia pixels de uma área para outra (carimbo) |
| **Heal** | ríl | Ferramenta de correção que copia e mescla suavemente (remove espinhas, manchas) |
| **Gradient** | grêidient | Degradê — transição suave entre duas ou mais cores |
| **Brush** | bráx | Pincel — ferramenta para pintar com diferentes formas e texturas |
| **Path** | péth | Caminho/vetor — linha definida por pontos de ancoragem (Bézier) |
| **Export** | écsport | Exportar — salvar em formato final (JPG, PNG, WebP) |
| **Compression** | compréxon | Compressão — reduzir tamanho do arquivo |
| **Lossy** | lósi | Com perda — compressão que descarta dados (JPG) |
| **Lossless** | lóslés | Sem perda — compressão que mantém todos os dados (PNG) |
| **Thumbnail** | thâmb-nêil | Miniatura — versão pequena de uma imagem para preview |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### 🛠️ Software

| Ferramenta | Para quê | Link |
|-----------|---------|------|
| **GIMP** | Editor de imagens raster completo e gratuito | [gimp.org](https://www.gimp.org) |
| **Inkscape** | Editor de imagens vetoriais (complementar ao GIMP) | [inkscape.org](https://inkscape.org) |
| **Krita** | Pintura digital e ilustração | [krita.org](https://krita.org) |
| **Photopea** | Editor online (interface similar ao Photoshop) | [photopea.com](https://www.photopea.com) |
| **Remove.bg** | Remover fundo automaticamente com IA | [remove.bg](https://www.remove.bg) |

### 🎓 Cursos e Tutoriais (GIMP)

| Recurso | Descrição | Link |
|---------|----------|------|
| **Davies Media Design** | Canal YouTube com 500+ tutoriais de GIMP | [youtube.com/@DaviesMediaDesign](https://www.youtube.com/@DaviesMediaDesign) |
| **GIMP Docs (oficial)** | Manual oficial do GIMP em português | [docs.gimp.org/pt_BR](https://docs.gimp.org/2.10/pt_BR/) |
| **Logos By Nick** | Tutoriais de GIMP e Inkscape | [youtube.com/@LogosByNick](https://www.youtube.com/@LogosByNick) |
| **GIMP Brasil** | Comunidade brasileira no Facebook | Buscar "GIMP Brasil" no Facebook |
| **Curso em Vídeo — GIMP** | Curso de GIMP em português | [cursoemvideo.com](https://www.cursoemvideo.com) |

### 📷 Bancos de Imagens Gratuitos (Uso Livre)

| Banco | Licença | Link |
|-------|---------|------|
| **Pixabay** | Livre para uso comercial | [pixabay.com](https://pixabay.com) |
| **Pexels** | Livre para uso comercial | [pexels.com](https://www.pexels.com) |
| **Unsplash** | Livre para uso comercial | [unsplash.com](https://unsplash.com) |
| **Freepik** | Gratuito com atribuição | [freepik.com](https://www.freepik.com) |
| **StockSnap** | Domínio público (CC0) | [stocksnap.io](https://stocksnap.io) |

### 🎨 Ferramentas de Cor e Design

| Ferramenta | Para quê | Link |
|-----------|---------|------|
| **Coolors** | Gerar paletas de cores harmônicas | [coolors.co](https://coolors.co) |
| **Adobe Color** | Roda de cores e paletas | [color.adobe.com](https://color.adobe.com) |
| **TinyPNG** | Comprimir PNG/JPG sem perda visível | [tinypng.com](https://tinypng.com) |
| **Squoosh** | Comprimir e converter imagens (Google) | [squoosh.app](https://squoosh.app) |
| **Canva** | Criar posts, banners e apresentações rapidamente | [canva.com](https://www.canva.com) |

### 📐 Referências de Tamanhos (Social Media)

| Plataforma | Formato | Dimensão |
|-----------|---------|----------|
| Instagram Post | Quadrado | 1080 × 1080 px |
| Instagram Story | Vertical | 1080 × 1920 px |
| YouTube Banner | Horizontal | 2560 × 1440 px |
| YouTube Thumbnail | Horizontal | 1280 × 720 px |
| Facebook Capa | Horizontal | 820 × 312 px |
| LinkedIn Banner | Horizontal | 1584 × 396 px |
| Twitter/X Header | Horizontal | 1500 × 500 px |

### 📖 Livros Recomendados

- **"GIMP 2.10 — Guia Completo"** — vários autores (buscar atualizado)
- **"Designing with the Mind in Mind"** — Jeff Johnson (psicologia visual)
- **"Color and Light"** — James Gurney (teoria de cor para artistas)

---

> 📝 **Nota da Professora:** O GIMP é software livre e poderoso — não perde para softwares pagos no que precisamos neste módulo. Salvem sempre o arquivo .XCF (editável) antes de exportar o JPG/PNG final! 🎨
>
> — Profª Luana Cristina
