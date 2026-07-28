# 🛠️ GUIA 1 — Instalação do VS Code, Git e Extensões

> **Objetivo:** Deixar o editor de código 100% configurado para as aulas.  
> **Tempo estimado:** 20-30 minutos  
> **Pré-requisito:** Acesso à internet e permissão de administrador no PC

---

## 1️⃣ Instalação do Visual Studio Code

### Windows

1. Acesse: https://code.visualstudio.com/download
2. Clique em **"Windows"** (64-bit User Installer)
3. Execute o arquivo `.exe` baixado
4. **Flags OBRIGATÓRIAS no instalador** (marque todas):
   - ✅ Adicionar ação "Abrir com Code" ao menu de contexto de arquivo
   - ✅ Adicionar ação "Abrir com Code" ao menu de contexto de diretório
   - ✅ **Adicionar ao PATH** (importante!)
   - ✅ Registrar Code como editor padrão para tipos de arquivo suportados
5. Clique em "Instalar" e aguarde

**Verificar instalação (abra o PowerShell):**
```powershell
code --version
```

### macOS

1. Acesse: https://code.visualstudio.com/download
2. Clique em **"macOS"** (Universal ou Apple Silicon se Mac M1/M2/M3)
3. Abra o `.zip` baixado — o app será extraído
4. Arraste **Visual Studio Code.app** para a pasta **Aplicativos**
5. Abra o VS Code, pressione `Cmd + Shift + P` e digite:
   ```
   Shell Command: Install 'code' command in PATH
   ```
   Isso permite abrir o VS Code do terminal.

**Verificar instalação (abra o Terminal):**
```bash
code --version
```

### Linux (Ubuntu/Debian)

```bash
# Baixar e instalar via .deb (método oficial)
sudo apt update
sudo apt install -y wget gpg

wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg

echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list

sudo apt update
sudo apt install -y code
```

**Verificar instalação:**
```bash
code --version
```

---

## 2️⃣ Instalação e Configuração do Git

### Windows

1. Acesse: https://git-scm.com/download/win
2. Baixe o instalador (64-bit)
3. Execute o `.exe` — nas opções do instalador:
   - Editor padrão: selecione **Visual Studio Code**
   - Branch padrão: selecione **main** (não master)
   - Demais opções: manter padrão, clicar "Next"
4. Após instalar, abra o **Git Bash** ou **PowerShell**

### macOS

```bash
# O Git já vem com as ferramentas de linha de comando do Xcode
# Para garantir que está instalado:
xcode-select --install

# Ou via Homebrew (se já tiver):
brew install git
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install -y git
```

---

### Configuração Inicial (TODOS os sistemas)

Abra o terminal (PowerShell no Windows, Terminal no Mac/Linux):

```bash
# Configurar seu nome (aparece nos commits)
git config --global user.name "Seu Nome Completo"

# Configurar seu e-mail (mesmo do GitHub)
git config --global user.email "seuemail@exemplo.com"

# Definir branch padrão como "main"
git config --global init.defaultBranch main

# Definir VS Code como editor do Git
git config --global core.editor "code --wait"

# Verificar configurações
git config --list
```

**Verificar versão:**
```bash
git --version
# Esperado: git version 2.40+ (qualquer 2.x funciona)
```

---

## 3️⃣ Extensões Obrigatórias do VS Code

Instale de 2 formas:
- **Via VS Code:** Clique no ícone de extensões (Ctrl+Shift+X) e busque o nome
- **Via terminal:** Use os comandos abaixo

### Instalar todas de uma vez (terminal):

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ritwickdey.LiveServer
code --install-extension eamodio.gitlens
code --install-extension PKief.material-icon-theme
code --install-extension dracula-theme.theme-dracula
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
```

### Lista detalhada:

| Extensão | ID | Para que serve |
|----------|-----|----------------|
| **Prettier** | `esbenp.prettier-vscode` | Formata código automaticamente ao salvar |
| **ESLint** | `dbaeumer.vscode-eslint` | Detecta erros de JS/TS em tempo real |
| **Live Server** | `ritwickdey.LiveServer` | Abre HTML no navegador com reload automático |
| **GitLens** | `eamodio.gitlens` | Mostra quem editou cada linha + histórico |
| **Material Icon Theme** | `PKief.material-icon-theme` | Ícones bonitos para cada tipo de arquivo |
| **Dracula Theme** | `dracula-theme.theme-dracula` | Tema escuro confortável para os olhos |
| **TypeScript Next** | `ms-vscode.vscode-typescript-next` | Suporte avançado a TypeScript |

---

### Configurar Prettier como Formatador Padrão

No VS Code, pressione `Ctrl + Shift + P` (ou `Cmd + Shift + P` no Mac):
1. Digite: `Preferences: Open User Settings (JSON)`
2. Adicione/substitua o conteúdo:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Dracula"
}
```

---

## ❌ Erros Comuns e Soluções

### Windows

| Erro | Solução |
|------|---------|
| `'code' não é reconhecido como comando` | Reinstale VS Code marcando "Adicionar ao PATH" OU reinicie o PC |
| `'git' não é reconhecido` | Reinicie o terminal após instalar Git. Se persistir, adicione `C:\Program Files\Git\bin` ao PATH manualmente |
| PowerShell bloqueia scripts (ExecutionPolicy) | Execute como Admin: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |

### macOS

| Erro | Solução |
|------|---------|
| `command not found: code` | Abra VS Code → Cmd+Shift+P → "Shell Command: Install 'code'" |
| `xcrun: error: invalid active developer path` | Execute: `xcode-select --install` |
| Permissão negada ao instalar global | Use `sudo` ou configure npm sem sudo (pesquisar "npm global without sudo") |

### Linux

| Erro | Solução |
|------|---------|
| `E: Unable to locate package code` | Verifique se adicionou o repositório Microsoft corretamente |
| `Permission denied` ao instalar extensões | Não use `sudo code` — execute VS Code como usuário normal |
| VS Code não abre (tela preta) | Tente: `code --disable-gpu` |
