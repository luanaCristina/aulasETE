# 04 - SEO Audit Tool

## Descrição

Script utilitário em Python que realiza uma auditoria básica de SEO em qualquer
página web, verificando:

- ✅ Meta tags (title, description, viewport, robots)
- ✅ Tags de cabeçalho (H1-H6) e hierarquia
- ✅ Imagens sem atributo `alt` (acessibilidade)
- ✅ Links internos e externos
- ✅ Estrutura semântica (header, main, footer, nav, article)
- ✅ Open Graph e Twitter Cards
- ✅ Pontuação geral de SEO

## Papel Executivo

Este script traduz os conceitos do Guia de SEO para o CEO em uma
**ferramenta prática de diagnóstico**. Ele permite que a equipe técnica
identifique rapidamente problemas de SEO On-Page e Técnico, gerando
um relatório claro com pontuação e recomendações.

**Para o CEO:** É como um "check-up de saúde" do site — identifica o que
está funcionando e o que precisa de atenção para melhorar o posicionamento
nas buscas.

## Pré-requisitos

```bash
# Python 3.8+
python3 --version

# Instalar dependências
pip install requests beautifulsoup4
```

## Como Executar

### Auditar uma URL específica

```bash
cd aula/guias-fullstack/04-seo-audit-tool/
python3 seo_checker.py https://exemplo.com.br
```

### Auditar um arquivo HTML local

```bash
python3 seo_checker.py ../01-bootstrap-web/index.html --local
```

### Exemplos de saída

```
═══════════════════════════════════════════════
  SEO AUDIT REPORT — https://exemplo.com.br
═══════════════════════════════════════════════

📋 META TAGS
  ✅ Title: "Minha Empresa - Soluções Digitais" (42 chars)
  ✅ Description: "Oferecemos soluções..." (148 chars)
  ✅ Viewport configurado
  ⚠️  Robots: não definido (usando default)

📰 HEADINGS
  ✅ H1 encontrado: 1 (ideal: exatamente 1)
  ℹ️  H2: 4 | H3: 8 | H4: 2

🖼️  IMAGENS
  ⚠️  3 de 12 imagens SEM atributo alt
  → img src="banner.jpg" (linha ~45)
  → img src="team.png" (linha ~89)

🔗 LINKS
  ✅ Links internos: 15
  ✅ Links externos: 4

🏗️  ESTRUTURA SEMÂNTICA
  ✅ <header> presente
  ✅ <main> presente
  ✅ <footer> presente
  ⚠️  <nav> não encontrado

📊 PONTUAÇÃO: 78/100 — BOM
═══════════════════════════════════════════════
```

## Estrutura

```
04-seo-audit-tool/
├── seo_checker.py    # Script principal de auditoria
└── README.md         # Este arquivo
```

## Referências

- Google Search Central: https://developers.google.com/search
- Web.dev SEO: https://web.dev/learn/seo
- BeautifulSoup Docs: https://www.crummy.com/software/BeautifulSoup/bs4/doc/
