# Guia Completo: Bootstrap, Emmet, Kiro MCP, SEO e React Native Maps

> Material de estudo e guia prático — Arquitetura de Software, Front-end, Engenharia de Prompt e SEO

---

## Sumário

1. [Bootstrap Prático e Avançado](#tópico-1-bootstrap-prático-e-avançado)
2. [Dominando o Emmet](#tópico-2-dominando-o-emmet)
3. [Kiro com MCP e Recursos Avançados](#tópico-3-kiro-com-mcp-e-recursos-avançados)
4. [Guia Executivo de SEO para o CEO](#tópico-4-guia-executivo-de-seo-para-o-ceo)
5. [Integração de Mapas no React Native com Expo](#tópico-5-integração-de-mapas-no-react-native-com-expo)

---

## Tópico 1: Bootstrap Prático e Avançado

### 1.1 Sistema de Grid

O Bootstrap utiliza um sistema de grid baseado em **Flexbox** com 12 colunas. Ele é composto por três elementos fundamentais:

| Elemento | Função |
|----------|--------|
| `.container` | Centraliza e limita a largura máxima do conteúdo |
| `.row` | Cria uma linha flexbox para alinhar colunas |
| `.col-*` | Define a largura proporcional (1 a 12) |

#### Breakpoints

| Breakpoint | Classe | Largura mínima |
|------------|--------|----------------|
| Extra small | `.col-` | < 576px |
| Small | `.col-sm-` | ≥ 576px |
| Medium | `.col-md-` | ≥ 768px |
| Large | `.col-lg-` | ≥ 992px |
| Extra large | `.col-xl-` | ≥ 1200px |
| XXL | `.col-xxl-` | ≥ 1400px |

#### Exemplo de Grid Responsivo

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Coluna 1</div>
    <div class="col-12 col-md-6 col-lg-4">Coluna 2</div>
    <div class="col-12 col-md-12 col-lg-4">Coluna 3</div>
  </div>
</div>
```


### 1.2 Componentes Mais Utilizados no Mercado

#### Cards

```html
<div class="card" style="width: 18rem;">
  <img src="imagem.jpg" class="card-img-top" alt="Descrição da imagem">
  <div class="card-body">
    <h5 class="card-title">Título do Card</h5>
    <p class="card-text">Descrição breve do conteúdo.</p>
    <a href="#" class="btn btn-primary">Ação</a>
  </div>
</div>
```

#### Modal

```html
<!-- Botão que dispara o modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meuModal">
  Abrir Modal
</button>

<!-- Estrutura do Modal -->
<div class="modal fade" id="meuModal" tabindex="-1" aria-labelledby="meuModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="meuModalLabel">Título</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>
      <div class="modal-body">
        Conteúdo do modal aqui.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>
```

#### Navbar Responsiva

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MinhaMarca</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contato</a></li>
      </ul>
    </div>
  </div>
</nav>
```


#### Badges e Buttons

```html
<!-- Badges -->
<span class="badge bg-primary">Novo</span>
<span class="badge bg-success">Ativo</span>
<span class="badge bg-danger">Urgente</span>
<span class="badge rounded-pill bg-warning text-dark">Pendente</span>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-secondary">Outline</button>
<button class="btn btn-success btn-lg">Grande</button>
<button class="btn btn-danger btn-sm">Pequeno</button>
```

#### Forms

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com">
  </div>
  <div class="mb-3">
    <label for="senha" class="form-label">Senha</label>
    <input type="password" class="form-control" id="senha">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="lembrar">
    <label class="form-check-label" for="lembrar">Lembrar-me</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

### 1.3 Carousel em Detalhes

O **Bootstrap Carousel** é um componente de slideshow que alterna entre imagens ou conteúdo de forma automática ou manual.

**Funcionamento:**
- Usa classes CSS para transição (`slide` ou `carousel-fade`)
- JavaScript do Bootstrap controla o ciclo automático e os controles
- Atributos `data-bs-*` configuram comportamento sem JS customizado
- Suporta indicadores, controles (prev/next) e legendas

#### Exemplo Completo de Carousel com Acessibilidade

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carousel Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .carousel-item img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    .carousel-caption {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      padding: 1rem;
    }
  </style>
</head>
<body>

  <div class="container my-5">
    <!-- Carousel com fade, autoplay e acessibilidade -->
    <div id="carouselDemo" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000"
      role="region" aria-roledescription="carousel" aria-label="Galeria de imagens">

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="0"
          class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div class="carousel-item active" role="group" aria-roledescription="slide" aria-label="1 de 3">
          <img src="https://picsum.photos/1200/400?random=1" class="d-block w-100" alt="Paisagem montanhosa">
          <div class="carousel-caption d-none d-md-block">
            <h5>Primeiro Slide</h5>
            <p>Descrição do primeiro conteúdo.</p>
          </div>
        </div>
        <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 de 3">
          <img src="https://picsum.photos/1200/400?random=2" class="d-block w-100" alt="Vista do oceano">
          <div class="carousel-caption d-none d-md-block">
            <h5>Segundo Slide</h5>
            <p>Descrição do segundo conteúdo.</p>
          </div>
        </div>
        <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 de 3">
          <img src="https://picsum.photos/1200/400?random=3" class="d-block w-100" alt="Floresta tropical">
          <div class="carousel-caption d-none d-md-block">
            <h5>Terceiro Slide</h5>
            <p>Descrição do terceiro conteúdo.</p>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselDemo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselDemo" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```


**Pontos de acessibilidade aplicados:**
- `role="region"` e `aria-roledescription="carousel"` no container
- `aria-label` em cada slide e nos indicadores
- `aria-current="true"` no indicador ativo
- `.visually-hidden` nos textos de controle (anterior/próximo)

### 1.4 Referências — Bootstrap

- Documentação Oficial: https://getbootstrap.com/docs/5.3/
- Grid System: https://getbootstrap.com/docs/5.3/layout/grid/
- Carousel: https://getbootstrap.com/docs/5.3/components/carousel/
- Components: https://getbootstrap.com/docs/5.3/components/
- Accessibility: https://getbootstrap.com/docs/5.3/getting-started/accessibility/

---

## Tópico 2: Dominando o Emmet

### 2.1 Emmet para HTML

O Emmet é um plugin de expansão de abreviações que transforma expressões curtas em código completo.

#### Sintaxe Fundamental

| Abreviação | Resultado | Descrição |
|------------|-----------|-----------|
| `div` | `<div></div>` | Elemento simples |
| `div.classe` | `<div class="classe"></div>` | Classe CSS |
| `div#id` | `<div id="id"></div>` | ID |
| `div.a.b` | `<div class="a b"></div>` | Múltiplas classes |
| `ul>li*5` | 5 `<li>` dentro de `<ul>` | Filhos e multiplicação |
| `div+p+span` | Irmãos na sequência | Operador irmão |
| `div>(header>h1)+main+footer` | Agrupamento | Parênteses |
| `a[href="#" target="_blank"]` | Link com atributos | Custom attributes |
| `ul>li.item$*3` | Classes numeradas (item1, item2, item3) | Numeração |
| `p{Texto aqui}` | `<p>Texto aqui</p>` | Texto inline |
| `!` | HTML5 boilerplate completo | Documento base |

#### Exemplos Práticos HTML

```
<!-- Abreviação: -->
nav.navbar>ul.nav-list>li.nav-item*4>a.nav-link[href="#"]{Item $}

<!-- Resultado: -->
<nav class="navbar">
  <ul class="nav-list">
    <li class="nav-item"><a href="#" class="nav-link">Item 1</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Item 2</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Item 3</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Item 4</a></li>
  </ul>
</nav>
```

```
<!-- Abreviação: -->
form.login-form>div.form-group*2>(label[for="field$"]>{Campo $})+input#field$[type="text" placeholder="Digite..."]+div.mb-3>button.btn.btn-primary{Enviar}

<!-- Resultado: formulário completo com labels, inputs e botão -->
```


### 2.2 Emmet para CSS

| Abreviação | Resultado |
|------------|-----------|
| `m10` | `margin: 10px;` |
| `p20-30` | `padding: 20px 30px;` |
| `w100p` | `width: 100%;` |
| `h50vh` | `height: 50vh;` |
| `df` | `display: flex;` |
| `jcc` | `justify-content: center;` |
| `aic` | `align-items: center;` |
| `fz16` | `font-size: 16px;` |
| `fw700` | `font-weight: 700;` |
| `bgc#333` | `background-color: #333;` |
| `bd1-s-#ccc` | `border: 1px solid #ccc;` |
| `br8` | `border-radius: 8px;` |
| `pos-r` | `position: relative;` |
| `trf` | `transform: ;` |
| `trs` | `transition: ;` |

### 2.3 Snippets Rápidos para JavaScript e TypeScript

Embora o Emmet nativo seja voltado para HTML/CSS, IDEs como VS Code e Kiro oferecem **snippets de expansão rápida** para JS/TS que funcionam de forma similar:

#### JavaScript — Snippets Comuns (VS Code / Kiro)

| Prefixo | Resultado |
|---------|-----------|
| `clg` | `console.log()` |
| `fn` | `function name() {}` |
| `afn` | `const name = () => {}` |
| `imp` | `import module from 'module'` |
| `exp` | `export default` |
| `forEach` | `.forEach((item) => {})` |
| `map` | `.map((item) => {})` |
| `prom` | `new Promise((resolve, reject) => {})` |
| `trycatch` | Bloco try/catch completo |

#### TypeScript — Snippets de Produtividade

```typescript
// Snippet: interface rápida
// Prefixo: intf
interface NomeDaInterface {
  propriedade: tipo;
}

// Snippet: Express route handler
// Prefixo: route
router.get('/endpoint', async (req: Request, res: Response) => {
  try {
    // lógica
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Snippet: Zod schema
// Prefixo: zschema
const nomeSchema = z.object({
  campo: z.string().min(1),
});
type NomeType = z.infer<typeof nomeSchema>;
```

### 2.4 Snippets para Python

```python
# Snippet: Flask route
# Prefixo: froute
@app.route('/endpoint', methods=['GET'])
def nome_funcao():
    return jsonify({'status': 'ok'})

# Snippet: try/except
# Prefixo: tryex
try:
    # lógica
    pass
except Exception as e:
    print(f"Erro: {e}")

# Snippet: class com init
# Prefixo: cls
class NomeDaClasse:
    def __init__(self, param):
        self.param = param

    def metodo(self):
        pass
```


### 2.5 Projeto Prático Combinado — Landing Page Rápida com Emmet

Demonstração de como construir uma página completa usando apenas abreviações Emmet:

```
<!-- Passo 1: Estrutura base (abreviação: !) -->
<!-- Passo 2: Container principal -->
<!-- Abreviação completa: -->

div.container>(header.hero>(h1{Bem-vindo ao Projeto}+p.lead{Construído com Emmet em segundos}+a.btn.btn-primary[href="#features"]{Saiba Mais}))+section#features.py-5>(h2.text-center{Funcionalidades}+div.row>(div.col-md-4>div.card>(div.card-body>(h5.card-title{Feature $}+p.card-text{Descrição da feature $})))*3)+footer.bg-dark.text-white.text-center.py-3>p{© 2026 Meu Projeto}
```

**Resultado:** Uma landing page completa com hero section, 3 cards de features e footer — tudo gerado em uma única expansão.

### 2.6 Benefícios no Desenvolvimento

| Benefício | Impacto Real |
|-----------|-------------|
| **Velocidade** | Redução de 60-80% no tempo de escrita de markup |
| **Menos erros** | Tags sempre fechadas corretamente |
| **Consistência** | Padrão de nomenclatura mantido pela sintaxe |
| **Foco na lógica** | Menos tempo em boilerplate, mais em funcionalidade |
| **Refatoração ágil** | Estruturas complexas recriadas em segundos |
| **Aprendizado** | Reforça a estrutura semântica do HTML |

### 2.7 Referências — Emmet

- Documentação Oficial: https://docs.emmet.io/
- Cheat Sheet: https://docs.emmet.io/cheat-sheet/
- Abreviações CSS: https://docs.emmet.io/css-abbreviations/
- VS Code Emmet: https://code.visualstudio.com/docs/editor/emmet

---

## Tópico 3: Kiro com MCP (Model Context Protocol) e Recursos Avançados

### 3.1 O que é o MCP

O **Model Context Protocol (MCP)** é um protocolo aberto que padroniza a comunicação entre assistentes de IA (como o Kiro) e ferramentas externas (servidores MCP). Ele funciona como uma "ponte universal" que permite ao Kiro:

- Acessar APIs externas (AWS, GitHub, bancos de dados, etc.)
- Executar operações em serviços remotos
- Consultar documentação em tempo real
- Interagir com sistemas de terceiros de forma segura

**Analogia:** Se o Kiro é um desenvolvedor, o MCP é como dar a ele acesso a ferramentas especializadas — ele pode consultar a documentação da AWS, criar issues no GitHub, ou buscar informações em tempo real sem sair do editor.

### 3.2 Guia de Instalação e Configuração

#### Pré-requisito: Instalar o `uv` (gerenciador Python necessário para servidores MCP)

```bash
# macOS (via Homebrew)
brew install uv

# Ou via pip
pip install uv

# Verificar instalação
uvx --version
```

#### Configuração do MCP no Kiro

Os servidores MCP são configurados via arquivo JSON:

**Nível de usuário (global):** `~/.kiro/settings/mcp.json`
**Nível de workspace:** `.kiro/settings/mcp.json`


#### Exemplo de Configuração Completa

```json
{
  "mcpServers": {
    "aws-docs": {
      "command": "uvx",
      "args": ["awslabs.aws-documentation-mcp-server@latest"],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR"
      },
      "disabled": false,
      "autoApprove": []
    },
    "github": {
      "command": "uvx",
      "args": ["mcp-server-github@latest"],
      "env": {
        "GITHUB_TOKEN": "ghp_seu_token_aqui"
      },
      "disabled": false,
      "autoApprove": ["search_repositories", "list_issues"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch@latest"],
      "env": {},
      "disabled": false,
      "autoApprove": ["fetch"]
    }
  }
}
```

**Campos importantes:**
- `command`: Executor do servidor (geralmente `uvx`)
- `args`: Pacote e versão do servidor MCP
- `env`: Variáveis de ambiente (tokens, configs)
- `disabled`: Ativar/desativar sem remover
- `autoApprove`: Lista de ferramentas aprovadas automaticamente (sem pedir confirmação)

#### Passo a Passo de Instalação

1. **Abra o Kiro** e acesse o Command Palette (`Cmd+Shift+P`)
2. Busque por **"MCP"** para ver os comandos disponíveis
3. Crie/edite o arquivo `.kiro/settings/mcp.json` no workspace
4. Adicione os servidores desejados no formato JSON acima
5. Os servidores reconectam automaticamente ao salvar o arquivo
6. Verifique o status no painel **MCP Server** na barra lateral do Kiro

### 3.3 Workflows Práticos com MCP

#### Workflow 1: Consultar Documentação AWS em tempo real

```
Prompt: "Qual é a sintaxe do AWS Lambda handler em Node.js 20?"
→ O Kiro usa o MCP aws-docs para buscar a documentação atualizada
→ Retorna exemplo de código com a versão mais recente
```

#### Workflow 2: Gerenciamento de Issues GitHub

```
Prompt: "Crie uma issue no repo meu-projeto com título 'Bug no login' e label 'bug'"
→ O Kiro usa o MCP github para criar a issue diretamente
→ Retorna o link da issue criada
```

#### Workflow 3: Fetch de conteúdo web

```
Prompt: "Busque as novidades do React 19 no blog oficial"
→ O Kiro usa o MCP fetch para acessar a URL e extrair o conteúdo
→ Resume as informações relevantes
```

### 3.4 Recursos Avançados do Kiro

| Recurso | Descrição |
|---------|-----------|
| **Steering** | Regras persistentes em `.kiro/steering/*.md` que guiam o comportamento |
| **Specs** | Fluxo estruturado: Requisitos → Design → Tarefas → Implementação |
| **Hooks** | Automações disparadas por eventos (salvar arquivo, enviar prompt, etc.) |
| **Sub-agents** | Agentes especializados para tarefas específicas (context-gatherer, etc.) |
| **Autopilot** | Modo autônomo que executa tarefas completas sem interrupção |
| **Supervised** | Modo supervisionado com aprovação a cada mudança |

### 3.5 Referências — Kiro e MCP

- Kiro Documentation: https://kiro.dev/docs
- MCP Specification: https://modelcontextprotocol.io/
- MCP Servers Registry: https://github.com/modelcontextprotocol/servers
- UV Installation: https://docs.astral.sh/uv/getting-started/installation/

---


## Tópico 4: Guia Executivo de SEO para o CEO

### O que precisamos fazer para que nosso site apareça no início das buscas?

Para posicionar nosso site nas primeiras posições do Google, precisamos atuar em quatro frentes estratégicas simultâneas. SEO não é uma ação pontual — é um processo contínuo de otimização que gera resultados compostos ao longo do tempo.

---

### 4.1 SEO On-Page — Otimização Interna do Site

**O que é:** Tudo que controlamos diretamente dentro do nosso site.

| Ação | Impacto | Prioridade |
|------|---------|-----------|
| **Palavras-chave estratégicas** | Identificar os termos que nosso público busca e usá-los naturalmente em títulos, textos e URLs | Alta |
| **Tags semânticas (title, h1, meta description)** | O Google lê essas tags para entender do que se trata cada página | Alta |
| **Core Web Vitals** | Páginas que carregam em menos de 2.5s têm 24% menos abandono | Alta |
| **Experiência do Usuário (UX)** | Sites fáceis de navegar mantêm usuários por mais tempo — sinal positivo para o Google | Média |
| **URLs limpas e descritivas** | `/servicos/consultoria` é melhor que `/page?id=123` | Média |
| **Imagens otimizadas com alt text** | Reduz tempo de carga e melhora acessibilidade | Média |

**Resultado esperado:** O Google entende claramente o que cada página oferece e a exibe para as buscas corretas.

---

### 4.2 SEO Off-Page — Autoridade e Reputação

**O que é:** Como o mercado e outros sites enxergam o nosso.

| Estratégia | O que significa |
|-----------|----------------|
| **Link Building** | Outros sites de qualidade apontando para o nosso (como "recomendações digitais") |
| **Autoridade de Domínio** | Quanto mais sites confiáveis nos referenciam, mais o Google confia em nós |
| **Presença Digital** | Perfis ativos em redes, diretórios e Google Business Profile |
| **Menções de marca** | Mesmo sem link, menções em portais e mídia aumentam relevância |

**Resultado esperado:** O Google nos vê como uma fonte confiável e autoridade no nosso segmento.

---

### 4.3 SEO Técnico — Infraestrutura Otimizada

**O que é:** A base técnica que permite ao Google encontrar, ler e indexar nosso conteúdo.

| Requisito | Função |
|-----------|--------|
| **Sitemap XML** | Mapa do site enviado ao Google para indexação rápida |
| **Robots.txt** | Arquivo que orienta quais páginas o Google deve ou não acessar |
| **Responsividade mobile** | Google prioriza sites que funcionam bem no celular (Mobile-First Indexing) |
| **HTTPS (certificado SSL)** | Segurança é fator de ranqueamento desde 2014 |
| **Dados estruturados (Schema.org)** | Permite rich snippets (estrelas, preços, FAQs) nos resultados de busca |
| **Velocidade de servidor** | Tempo de resposta do servidor abaixo de 200ms |

**Resultado esperado:** O Google consegue rastrear e indexar todas as nossas páginas sem obstáculos.

---


### 4.4 Estratégia de Conteúdo — Atrair pelo Valor

**O que é:** Produzir conteúdo que responde às perguntas reais do nosso público-alvo.

**Princípio central:** O Google quer mostrar o resultado que melhor responde à *intenção de busca* do usuário.

| Tipo de Intenção | Exemplo de Busca | O que produzir |
|-----------------|-----------------|----------------|
| Informacional | "como funciona agendamento online" | Artigos, guias, tutoriais |
| Transacional | "agendar consulta dermatologista SP" | Landing pages otimizadas |
| Navegacional | "clínica XYZ telefone" | Página institucional completa |
| Comparativa | "melhor sistema de agendamento" | Comparativos, reviews |

**Frequência recomendada:** Publicar conteúdo novo regularmente (mínimo 2-4 artigos/mês) com palavras-chave pesquisadas e relevantes.

**Resultado esperado:** Tráfego orgânico crescente, com visitantes qualificados que já estão buscando o que oferecemos.

---

### 4.5 Resumo Executivo — Prioridades

```
┌─────────────────────────────────────────────────────────┐
│  CURTO PRAZO (1-3 meses)                                │
│  → SEO Técnico + On-Page básico                         │
│  → Core Web Vitals + Mobile + HTTPS                     │
├─────────────────────────────────────────────────────────┤
│  MÉDIO PRAZO (3-6 meses)                                │
│  → Estratégia de conteúdo + Dados estruturados          │
│  → Google Business Profile otimizado                    │
├─────────────────────────────────────────────────────────┤
│  LONGO PRAZO (6-12 meses)                               │
│  → Link building + Autoridade de domínio                │
│  → Expansão de conteúdo + Novos mercados                │
└─────────────────────────────────────────────────────────┘
```

**ROI esperado:** SEO bem executado gera redução de 40-60% no custo de aquisição de cliente (CAC) comparado a mídia paga, com resultados que se acumulam ao longo do tempo.

### 4.6 Referências — SEO

- Google Search Central: https://developers.google.com/search
- Core Web Vitals: https://web.dev/vitals/
- Schema.org: https://schema.org/
- Google Search Console: https://search.google.com/search-console
- Ahrefs SEO Guide: https://ahrefs.com/blog/seo-basics/

---

## Tópico 5: Integração de Mapas no React Native com Expo

### 5.1 Visão Geral

O `react-native-maps` é a biblioteca padrão para renderizar mapas interativos em aplicações React Native. No ecossistema Expo, ela é suportada nativamente via `expo-location` (para geolocalização) e integração direta com Google Maps (Android) e Apple Maps (iOS).

**Características:**
- Renderiza mapas nativos (não WebView)
- Suporta marcadores (Markers), polígonos, polilinhas, círculos
- Eventos de interação (tap, drag, zoom)
- Customização de estilo do mapa (JSON styling)
- Performance nativa em ambas plataformas

### 5.2 Passo a Passo de Implementação

#### Passo 1: Criar projeto Expo

```bash
npx create-expo-app@latest MeuAppMapas
cd MeuAppMapas
```

#### Passo 2: Instalar dependências

```bash
npx expo install react-native-maps expo-location
```


#### Passo 3: Configurar chaves de API

**Para Android (Google Maps):**

1. Acesse https://console.cloud.google.com/
2. Crie um projeto ou selecione existente
3. Ative a API "Maps SDK for Android"
4. Crie uma chave de API em "Credenciais"
5. Adicione ao `app.json`:

```json
{
  "expo": {
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "SUA_CHAVE_GOOGLE_MAPS_AQUI"
        }
      }
    }
  }
}
```

**Para iOS (Apple Maps):**

Apple Maps funciona automaticamente no iOS sem chave de API. Se preferir Google Maps no iOS, adicione:

```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "SUA_CHAVE_GOOGLE_MAPS_AQUI"
      }
    }
  }
}
```

#### Passo 4: Configurar permissões de localização

Adicione ao `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Permitir que o app acesse sua localização."
        }
      ]
    ]
  }
}
```

### 5.3 Código Exemplo Completo

```javascript
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Coordenadas iniciais (São Paulo - Av. Paulista)
  const initialRegion = {
    latitude: -23.5613,
    longitude: -46.6560,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // Marcadores de exemplo
  const markers = [
    {
      id: 1,
      title: 'Escritório Principal',
      description: 'Sede da empresa na Av. Paulista',
      coordinate: { latitude: -23.5613, longitude: -46.6560 },
    },
    {
      id: 2,
      title: 'Filial',
      description: 'Unidade do Ibirapuera',
      coordinate: { latitude: -23.5874, longitude: -46.6576 },
    },
  ];

  useEffect(() => {
    (async () => {
      // Solicitar permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      // Obter localização atual
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        zoomControlEnabled={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor="#e74c3c"
            onPress={() => Alert.alert(marker.title, marker.description)}
          />
        ))}
      </MapView>

      {/* Informação de localização */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {errorMsg
            ? errorMsg
            : location
            ? `Lat: ${location.coords.latitude.toFixed(4)}, Lng: ${location.coords.longitude.toFixed(4)}`
            : 'Obtendo localização...'}
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});
```

#### Executar o projeto

```bash
# Iniciar com Expo Go
npx expo start

# Ou gerar build de desenvolvimento
npx expo run:android
npx expo run:ios
```

### 5.4 Propriedades Importantes do MapView

| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| `provider` | `PROVIDER_GOOGLE` ou `null` | Define o provedor de mapa |
| `initialRegion` | `Region` | Posição e zoom iniciais |
| `showsUserLocation` | `boolean` | Mostra ponto azul do usuário |
| `showsMyLocationButton` | `boolean` | Botão para centralizar no usuário |
| `showsCompass` | `boolean` | Mostra bússola ao rotacionar |
| `zoomControlEnabled` | `boolean` | Botões de zoom (Android) |
| `mapType` | `standard/satellite/hybrid/terrain` | Tipo visual do mapa |
| `onRegionChange` | `function` | Callback ao mover o mapa |
| `onPress` | `function` | Callback ao tocar no mapa |

### 5.5 Referências — React Native Maps e Expo

- Expo Maps Docs: https://docs.expo.dev/versions/latest/sdk/map-view/
- react-native-maps GitHub: https://github.com/react-native-maps/react-native-maps
- Expo Location: https://docs.expo.dev/versions/latest/sdk/location/
- Google Maps Platform: https://developers.google.com/maps
- Google Cloud Console: https://console.cloud.google.com/

---

## Considerações Finais

Este guia cobre cinco áreas essenciais para o desenvolvimento web e mobile moderno:

1. **Bootstrap** — Prototipagem rápida e responsiva com componentes prontos
2. **Emmet** — Produtividade extrema na escrita de código
3. **Kiro + MCP** — IA assistida com acesso a ferramentas externas
4. **SEO** — Visibilidade orgânica como estratégia de negócio
5. **React Native Maps** — Funcionalidade de geolocalização em apps móveis

Cada tópico é independente e pode ser consultado separadamente conforme a necessidade do projeto ou estudo.
