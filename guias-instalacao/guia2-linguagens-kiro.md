# 🛠️ GUIA 2 — Instalação de Node.js, TypeScript, Python e Kiro

> **Objetivo:** Instalar as linguagens e o Kiro para as aulas práticas.  
> **Tempo estimado:** 30-40 minutos  
> **Pré-requisito:** VS Code e Git já instalados (Guia 1)

---

## 1️⃣ Node.js + npm + TypeScript

### Windows

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (recomendada — número par, ex: 20.x ou 22.x)
3. Execute o instalador `.msi`:
   - ✅ Marque "Automatically install tools" (instala build tools)
   - Clique "Next" até finalizar
4. **Feche e reabra** o PowerShell

**Verificar:**
```powershell
node --version    # Esperado: v20.x.x ou v22.x.x
npm --version     # Esperado: 10.x.x
```

**Instalar TypeScript globalmente:**
```powershell
npm install -g typescript ts-node
tsc --version     # Esperado: Version 5.x.x
ts-node --version # Esperado: v10.x.x
```

---

### macOS

**Opção A — Instalador oficial:**
1. Acesse https://nodejs.org/ → Baixe versão LTS para macOS
2. Execute o `.pkg` e siga os passos

**Opção B — Via Homebrew (recomendado):**
```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js LTS
brew install node@22

# Adicionar ao PATH (se necessário)
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Verificar:**
```bash
node --version
npm --version
```

**Instalar TypeScript:**
```bash
npm install -g typescript ts-node
tsc --version
```

---

### Linux (Ubuntu/Debian)

```bash
# Instalar via NodeSource (versão LTS atualizada)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar
node --version
npm --version

# Instalar TypeScript
sudo npm install -g typescript ts-node
tsc --version
```

---

## 2️⃣ Python 3

### Windows

1. Acesse: https://www.python.org/downloads/
2. Baixe a versão mais recente (3.11+ ou 3.12+)
3. **IMPORTANTE no instalador:**
   - ✅ Marque **"Add python.exe to PATH"** (checkbox na PRIMEIRA tela!)
   - Clique em "Install Now"
4. Feche e reabra o PowerShell

**Verificar:**
```powershell
python --version    # Esperado: Python 3.11.x ou 3.12.x
pip --version       # Esperado: pip 24.x from ...
```

**Criar ambiente virtual (venv):**
```powershell
# Criar pasta de projeto
mkdir meu-projeto-python
cd meu-projeto-python

# Criar venv
python -m venv venv

# Ativar (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Ativar (Windows CMD)
venv\Scripts\activate.bat

# Verificar que está ativo (aparece (venv) no prompt)
python --version
pip list

# Desativar quando terminar
deactivate
```

---

### macOS

```bash
# macOS já vem com Python 3 (verificar)
python3 --version

# Se não tiver ou for antigo, instalar via Homebrew:
brew install python@3.12

# Verificar
python3 --version    # 3.12.x
pip3 --version

# Criar alias (opcional, para usar "python" ao invés de "python3")
echo 'alias python=python3' >> ~/.zshrc
echo 'alias pip=pip3' >> ~/.zshrc
source ~/.zshrc
```

**Criar ambiente virtual:**
```bash
mkdir meu-projeto-python && cd meu-projeto-python
python3 -m venv venv
source venv/bin/activate    # Ativar
# (venv) aparece no prompt
deactivate                  # Desativar
```

---

### Linux (Ubuntu/Debian)

```bash
# Python 3 geralmente já vem instalado
python3 --version

# Se não tiver:
sudo apt update
sudo apt install -y python3 python3-pip python3-venv

# Verificar
python3 --version
pip3 --version
```

**Criar ambiente virtual:**
```bash
mkdir meu-projeto-python && cd meu-projeto-python
python3 -m venv venv
source venv/bin/activate
deactivate
```

---

## 3️⃣ Instalação e Configuração do Kiro

### O que é o Kiro?

Kiro é um ambiente de desenvolvimento com IA integrada que ajuda a:
- Gerar código com contexto do projeto
- Criar specs e design de features
- Rodar ferramentas via MCP (Model Context Protocol)

### Pré-requisitos para o Kiro

Antes de instalar o Kiro, garanta que tem:
- ✅ Node.js 20+ instalado (para npx e servidores MCP)
- ✅ Python 3.11+ instalado (para uv/uvx e servidores MCP em Python)
- ✅ Git configurado

---

### Instalar o Kiro (Todos os sistemas)

1. Acesse: https://kiro.dev/download (ou o link fornecido pelo professor)
2. Baixe a versão para seu sistema operacional
3. Instale normalmente (arrastar para Applications no Mac, executar .exe no Windows, .deb no Linux)
4. Abra o Kiro e faça login com sua conta

---

### Instalar UV (gerenciador Python para servidores MCP)

UV é necessário para rodar servidores MCP baseados em Python (ex: `uvx`):

**Windows (PowerShell):**
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
# Fechar e reabrir o terminal
uv --version
```

**macOS:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
# Reiniciar terminal ou:
source $HOME/.cargo/env
uv --version
```

**Linux:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.cargo/env
uv --version
```

**Verificar uvx (vem junto com uv):**
```bash
uvx --version
```

---

### Configurar MCP no Kiro

Após instalar o Kiro, configure servidores MCP na pasta do usuário:

**Localização do arquivo de config:**
- Windows: `%USERPROFILE%\.kiro\settings\mcp.json`
- macOS/Linux: `~/.kiro/settings/mcp.json`

**Exemplo de configuração básica:**
```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-fetch"],
      "disabled": false,
      "autoApprove": ["fetch"]
    }
  }
}
```

**Teste:** Abra o Kiro, vá ao painel de MCP Servers (ícone no sidebar) e verifique se o servidor aparece como "Connected".

---

### Configuração Inicial do Kiro para o Curso

1. Abra o Kiro
2. Abra a pasta do projeto da aula (`File > Open Folder`)
3. No chat do Kiro, teste com uma pergunta simples:
   ```
   Kiro, crie um arquivo hello.js que exibe "Olá, Mundo!" no console.
   ```
4. Se ele criar o arquivo corretamente, está tudo funcionando! ✅

---

## ✅ Checklist Final — Ambiente Pronto

Execute no terminal e confirme que TUDO funciona:

```bash
# VS Code
code --version        # ✅ 1.90+

# Git
git --version         # ✅ 2.40+
git config user.name  # ✅ Seu nome aparece
git config user.email # ✅ Seu email aparece

# Node.js + npm
node --version        # ✅ v20+ ou v22+
npm --version         # ✅ 10+

# TypeScript
tsc --version         # ✅ 5.x
ts-node --version     # ✅ 10.x

# Python
python3 --version     # ✅ 3.11+
pip3 --version        # ✅ 24+

# UV (para MCP)
uv --version          # ✅ 0.4+
```

Se TODOS retornam versão, seu ambiente está pronto! 🎉

---
