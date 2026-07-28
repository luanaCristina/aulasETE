# 02 - Emmet Snippets — Projetos Práticos

## Descrição

Exemplos práticos demonstrando como o Emmet e snippets de expansão rápida
aceleram o desenvolvimento em múltiplas linguagens:

- **HTML** — Página completa gerada via abreviações Emmet
- **JavaScript** — API server Express com snippets de produtividade
- **TypeScript** — Módulo tipado com interfaces e validação
- **Python** — Aplicação Flask com rotas e estrutura profissional

## Como Ativar o Emmet

### VS Code / Kiro

O Emmet vem **ativado por padrão** para HTML e CSS. Para outras linguagens:

1. Abra Settings (`Cmd+,`)
2. Busque por `emmet.includeLanguages`
3. Adicione:

```json
{
  "emmet.includeLanguages": {
    "javascript": "html",
    "typescript": "html"
  }
}
```

### Usando Expansões

1. Digite a abreviação Emmet (ex: `div.container>h1{Título}+p{Texto}`)
2. Pressione `Tab` para expandir
3. O código completo é gerado automaticamente

### Snippets Customizados

Para criar seus próprios snippets:
1. `Cmd+Shift+P` → "Configure User Snippets"
2. Escolha a linguagem
3. Adicione no formato JSON:

```json
{
  "Express Route": {
    "prefix": "exroute",
    "body": [
      "router.${1:get}('/${2:endpoint}', async (req, res) => {",
      "  try {",
      "    $0",
      "    res.json({ success: true });",
      "  } catch (error) {",
      "    res.status(500).json({ error: error.message });",
      "  }",
      "});"
    ]
  }
}
```

## Como Executar os Scripts

### HTML (projeto-rapido.html)

```bash
# Opção 1: Live Server (VS Code/Kiro)
# Botão direito → Open with Live Server

# Opção 2: Servidor local
cd aula/guias-fullstack/02-emmet-snippets/
python3 -m http.server 8080
# Acesse http://localhost:8080/projeto-rapido.html
```

### JavaScript (app.js)

```bash
cd aula/guias-fullstack/02-emmet-snippets/
node app.js
# Servidor rodando em http://localhost:3001
```

### TypeScript (app.ts)

```bash
cd aula/guias-fullstack/02-emmet-snippets/
npx ts-node app.ts
# Ou compile: npx tsc app.ts && node app.js
```

### Python (app.py)

```bash
cd aula/guias-fullstack/02-emmet-snippets/
pip install flask
python3 app.py
# Servidor rodando em http://localhost:5000
```

## Estrutura

```
02-emmet-snippets/
├── projeto-rapido.html   # Landing page gerada via Emmet
├── app.js                # API Express (JavaScript)
├── app.ts                # Módulo tipado (TypeScript)
├── app.py                # Servidor Flask (Python)
└── README.md             # Este arquivo
```
