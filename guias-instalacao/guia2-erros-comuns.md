# ❌ Erros Comuns e Soluções — Guia 2

---

## Windows

| # | Erro | Causa | Solução |
|---|------|-------|---------|
| 1 | `python não é reconhecido` | Não marcou "Add to PATH" | Reinstalar Python marcando a checkbox OU adicionar manualmente: `C:\Users\SEU_USER\AppData\Local\Programs\Python\Python312\` ao PATH |
| 2 | `npm : O arquivo não pode ser carregado pois a execução de scripts foi desabilitada` | ExecutionPolicy do PowerShell | Abrir PowerShell como **Admin** e executar: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| 3 | `EACCES: permission denied` ao npm install -g | Permissão do npm global | Opção 1: Abrir terminal como Admin. Opção 2: `npm config set prefix ~/.npm-global` e adicionar ao PATH |
| 4 | `'tsc' não é reconhecido` | TypeScript instalado mas terminal antigo | Fechar e reabrir o terminal (PATH atualiza ao abrir) |
| 5 | `node: command not found` no Git Bash | Git Bash não herdou PATH | Usar PowerShell ao invés de Git Bash, ou reinstalar Node marcando "Add to PATH" |
| 6 | VS Code abre em inglês | Idioma não configurado | Ctrl+Shift+P → "Configure Display Language" → Instalar Portuguese (Brazil) |
| 7 | Python abre a Microsoft Store | Alias "python" redireciona para Store | Configurações → Apps → Aliases de execução → desativar "python.exe" e "python3.exe" |
| 8 | `venv\Scripts\Activate.ps1 : O arquivo não pode ser carregado` | ExecutionPolicy | Mesmo do erro 2: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |

---

## macOS

| # | Erro | Causa | Solução |
|---|------|-------|---------|
| 1 | `zsh: command not found: node` | Node instalado mas PATH não atualizado | `source ~/.zshrc` ou fechar/reabrir Terminal |
| 2 | `xcrun: error: invalid active developer path` | Faltam Command Line Tools | `xcode-select --install` |
| 3 | Brew avisa sobre PATH no M1/M2/M3 | Homebrew no Apple Silicon usa `/opt/homebrew` | Adicionar ao ~/.zshrc: `eval "$(/opt/homebrew/bin/brew shellenv)"` |
| 4 | `Permission denied` ao instalar com npm -g | macOS protege /usr/local | Usar `sudo npm install -g` OU configurar npm prefix |
| 5 | Python 2 vs Python 3 | macOS antigo tem Python 2 como padrão | SEMPRE usar `python3` e `pip3` (ou criar alias) |
| 6 | VS Code não abre do terminal (`code: command not found`) | Comando `code` não instalado | Abrir VS Code → Cmd+Shift+P → "Shell Command: Install 'code' command in PATH" |
| 7 | Conflito ARM vs x86 (Node/Python) | Instalou versão Intel em Mac Apple Silicon | Baixar versão ARM64/Apple Silicon. Verificar com: `uname -m` (deve ser `arm64`) |
| 8 | `uv: command not found` após instalar | PATH não foi carregado | `source $HOME/.cargo/env` e adicionar ao ~/.zshrc |

---

## Linux (Ubuntu/Debian)

| # | Erro | Causa | Solução |
|---|------|-------|---------|
| 1 | `E: Unable to locate package nodejs` | Repositório NodeSource não adicionado | Seguir instruções com `curl -fsSL https://deb.nodesource.com/...` |
| 2 | Versão antiga do Node (12.x ou 14.x) | Usando repositório padrão do Ubuntu | Remover: `sudo apt remove nodejs` → instalar via NodeSource |
| 3 | `EACCES: permission denied, mkdir /usr/lib/node_modules` | npm global precisa de sudo | `sudo npm install -g typescript` OU configurar npm prefix no home |
| 4 | `python: command not found` mas `python3` funciona | Ubuntu não cria alias python→python3 | `sudo apt install python-is-python3` OU criar alias manual |
| 5 | `externally-managed-environment` ao usar pip | Python do sistema é protegido (Ubuntu 23+) | SEMPRE usar venv: `python3 -m venv venv && source venv/bin/activate` → então use pip normalmente |
| 6 | VS Code não inicia (tela preta ou crash) | Problema de GPU | `code --disable-gpu` OU atualizar drivers |
| 7 | `git: command not found` | Não instalado | `sudo apt install git` |
| 8 | Porto 3000 em uso | Outro processo usando a porta | `lsof -i :3000` para ver qual processo → `kill -9 PID` |

---

## 🆘 Dica Universal: "Nada funciona, e agora?"

1. **Reinicie o terminal** (muitos problemas de PATH se resolvem assim)
2. **Reinicie o computador** (sério, resolve 80% dos problemas pós-instalação)
3. **Verifique o PATH** — O programa está instalado mas o sistema não sabe onde:
   ```bash
   # Ver PATH atual:
   echo $PATH            # Mac/Linux
   echo $env:PATH        # Windows PowerShell
   
   # Encontrar onde o programa está:
   which node            # Mac/Linux
   where.exe node        # Windows
   ```
4. **Desinstale e reinstale** — Às vezes é mais rápido que debugar
5. **Peça ajuda** — Print do erro + sistema operacional → envie ao professor

---

## 🎯 Teste Final: Tudo Funcionando?

Crie este arquivo `teste-ambiente.js` e execute:

```javascript
// teste-ambiente.js — Verifica se o ambiente está configurado
const os = require('os');

console.log('='.repeat(40));
console.log('🎉 SEU AMBIENTE ESTÁ FUNCIONANDO!');
console.log('='.repeat(40));
console.log(`Sistema: ${os.type()} ${os.arch()}`);
console.log(`Node.js: ${process.version}`);
console.log(`Diretório: ${process.cwd()}`);
console.log('='.repeat(40));
console.log('✅ Pronto para as aulas de programação!');
```

```bash
node teste-ambiente.js
```

Se aparecer "SEU AMBIENTE ESTÁ FUNCIONANDO!", está tudo certo! 🚀
