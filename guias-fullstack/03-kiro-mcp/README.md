# 03 - Kiro com MCP (Model Context Protocol)

## Descrição

Guia prático de configuração e uso do MCP no Kiro, incluindo:
- Arquivo de configuração pronto para uso
- Exemplos de workflows reais
- Passo a passo de instalação completo

## Pré-requisitos

### 1. Instalar o `uv` (gerenciador Python para servidores MCP)

```bash
# macOS via Homebrew (recomendado)
brew install uv

# Ou via pip
pip install uv

# Ou via script oficial
curl -LsSf https://astral.sh/uv/install.sh | sh

# Verificar instalação
uv --version
uvx --version
```

### 2. Ter o Kiro instalado

Baixe em: https://kiro.dev

### 3. Token GitHub (opcional, para MCP GitHub)

1. Acesse https://github.com/settings/tokens
2. Gere um token com permissões: `repo`, `read:org`
3. Copie o token para usar na configuração

## Configuração

### Passo 1: Criar o arquivo de configuração

Copie o arquivo `mcp.json` deste diretório para:

- **Nível de workspace:** `.kiro/settings/mcp.json` (dentro do projeto)
- **Nível global:** `~/.kiro/settings/mcp.json` (para todos os projetos)

```bash
# Para o workspace atual
mkdir -p .kiro/settings
cp aula/guias-fullstack/03-kiro-mcp/mcp.json .kiro/settings/mcp.json
```

### Passo 2: Configurar variáveis de ambiente

Edite o `mcp.json` e substitua os placeholders:
- `SEU_TOKEN_GITHUB_AQUI` → seu token GitHub real

### Passo 3: Verificar conexão

1. Abra o Kiro
2. Acesse o painel lateral → **MCP Servers**
3. Verifique se os servidores aparecem com status ✅ (conectado)
4. Se algum estiver ❌, clique para reconectar

## Workflows Práticos

### Workflow 1: Buscar conteúdo web

```
Prompt no Kiro: "Busque a documentação do Express.js sobre middleware"
→ O MCP Fetch acessa a URL e retorna o conteúdo
```

### Workflow 2: Gerenciar repositório GitHub

```
Prompt: "Liste as issues abertas do repositório meu-usuario/meu-repo"
→ O MCP GitHub consulta a API e retorna as issues

Prompt: "Crie uma issue com título 'Implementar cache' e label 'enhancement'"
→ O MCP GitHub cria a issue e retorna o link
```

### Workflow 3: Pesquisar documentação AWS

```
Prompt: "Qual a configuração do API Gateway para Lambda proxy?"
→ O MCP AWS Docs busca na documentação oficial e retorna exemplos
```

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| `uvx: command not found` | Instale o `uv` conforme instruções acima |
| Servidor não conecta | Verifique se o `mcp.json` tem JSON válido |
| Erro de autenticação GitHub | Regenere o token com permissões corretas |
| Timeout na conexão | Verifique sua conexão com a internet |

## Referências

- Kiro Docs: https://kiro.dev/docs
- MCP Specification: https://modelcontextprotocol.io/
- Servidores MCP disponíveis: https://github.com/modelcontextprotocol/servers
- UV Installation: https://docs.astral.sh/uv/getting-started/installation/
