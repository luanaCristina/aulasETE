# 📘 Apostila: Git e GitHub — Do Zero ao Primeiro Push

> **Curso Técnico em Desenvolvimento de Sistemas**
> Duração estimada: 2h (teoria + prática)

---

## Parte A: Conceitos Básicos & A Analogia Didática

### 🎯 O Problema que o Git Resolve

Imagine o cenário **sem Git**:

```
projeto-final.zip
projeto-final-v2.zip
projeto-final-CORRIGIDO.zip
projeto-final-AGORA-VAI.zip
projeto-final-ESSE-É-O-CERTO.zip
```

Quem nunca? Empresas grandes com 50+ desenvolvedores não podem trabalhar assim. Precisam de **controle de versão**.

---

### 🧠 A Analogia: Pendrive vs. Google Drive

| Conceito | Analogia do Dia a Dia | No Git/GitHub |
|----------|----------------------|---------------|
| **Git** | Câmera fotográfica + álbum local | Ferramenta instalada no seu PC que tira "fotos" (commits) do seu código |
| **GitHub** | Google Drive / Nuvem | Site na internet que guarda seu álbum de fotos (repositório) na nuvem |
| **Working Directory** | Arquivo aberto no Word, ainda editando | Seus arquivos no PC enquanto você programa |
| **Staging Area (add)** | Selecionar quais fotos vão pro álbum | Escolher quais mudanças entram no próximo "save" |
| **Commit** | Colar a foto no álbum com legenda | Salvar um ponto no histórico com mensagem descritiva |
| **Push** | Fazer upload do álbum pro Google Drive | Enviar seus commits locais para o GitHub |
| **Pull** | Baixar a versão atualizada do Drive | Trazer as mudanças que outros fizeram |
| **Clone** | Baixar pasta compartilhada do Drive pela 1ª vez | Copiar um repositório do GitHub para seu PC |

---

### 💡 Por que empresas usam Git/GitHub em vez de e-mail/pendrive?

| Método antigo | Problema | Solução com Git |
|---------------|----------|-----------------|
| Enviar código por e-mail | Ninguém sabe qual versão é a mais recente | Histórico linear com data e autor |
| Pendrive compartilhado | Dois devs editam o mesmo arquivo = um perde o trabalho | Sistema de merge que junta alterações |
| Pasta no Drive | Sem histórico de quem mudou o quê | `git log` mostra cada mudança com autor e data |
| "Não mexe no meu código!" | Medo de quebrar algo | Branches permitem trabalhar em paralelo |

---

## Parte B: Criando e Configurando a Conta

### Passo 1 — Criar conta no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **Sign Up**
3. Preencha: e-mail, senha, nome de usuário
4. Verifique o e-mail recebido
5. Pronto! Sua "nuvem de código" está criada ✅

> 💡 **Dica:** Use um nome de usuário profissional. Recrutadores vão ver isso!

---

### Passo 2 — Configurar identidade no terminal

Abra o terminal (Git Bash no Windows / Terminal no Mac/Linux) e execute:

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seuemail@exemplo.com"
```

**Verificar se deu certo:**

```bash
git config --global user.name
git config --global user.email
```

> ⚠️ Use o **mesmo e-mail** da conta GitHub. Assim seus commits ficam vinculados ao seu perfil.

---

## Parte C: Os Comandos Essenciais (Do Zero ao Push)

### Fluxo completo em ordem de execução:

```
[Editar arquivos] → git add → git commit → git push
     (PC)          (prepara)   (salva local)  (envia nuvem)
```

---

### 1. `git init` — Inicializar repositório

```bash
git init
```

**O que faz:** Cria a pasta oculta `.git/` que transforma uma pasta comum em um repositório Git.

**Analogia:** Comprar um álbum de fotos novo (vazio).

---

### 2. `git status` — Verificar o estado atual

```bash
git status
```

**O que faz:** Mostra quais arquivos foram modificados, quais estão prontos para commit e quais não estão sendo rastreados.

**Analogia:** Olhar na mesa quais fotos ainda não foram coladas no álbum.

---

### 3. `git add` — Adicionar ao staging

```bash
# Adicionar um arquivo específico
git add index.html

# Adicionar TODOS os arquivos modificados
git add .
```

**O que faz:** Move arquivos para a "área de preparação" (staging area).

**Analogia:** Selecionar quais fotos vão para o álbum.

---

### 4. `git commit` — Salvar ponto no histórico

```bash
git commit -m "Cria página inicial com título e parágrafo"
```

**O que faz:** Grava um snapshot (fotografia) do projeto com data, autor e mensagem.

**Analogia:** Colar as fotos no álbum e escrever uma legenda.

> 💡 **Boas mensagens de commit:**
> - ✅ `"Adiciona formulário de contato"`
> - ✅ `"Corrige bug no cálculo de frete"`
> - ❌ `"alterações"`
> - ❌ `"asdfg"`

---

### 5. `git remote add` — Conectar ao GitHub

```bash
git remote add origin https://github.com/seu-usuario/nome-do-repo.git
```

**O que faz:** Diz ao Git local qual é o endereço do repositório na nuvem.

**Analogia:** Colocar o endereço do Google Drive para onde o álbum será enviado.

---

### 6. `git branch -M main` — Nomear a branch principal

```bash
git branch -M main
```

**O que faz:** Renomeia a branch padrão para `main` (padrão atual do GitHub).

---

### 7. `git push` — Enviar para a nuvem

```bash
git push -u origin main
```

**O que faz:** Envia todos os commits locais para o GitHub.

**Analogia:** Fazer upload do álbum para o Google Drive.

> O `-u` configura o rastreamento. Depois, basta `git push`.

---

### 8. `git log` — Ver histórico

```bash
git log --oneline
```

**O que faz:** Mostra a lista de commits (cada "foto" tirada, com data e mensagem).

---

### 📋 Resumo rápido (cola pro dia a dia)

```bash
git init                    # Só na primeira vez
git add .                   # Prepara tudo
git commit -m "mensagem"    # Salva localmente
git push                    # Envia pro GitHub
```

---

## Parte D: O Arquivo `.gitignore`

### O que é?

Um arquivo especial chamado `.gitignore` na raiz do projeto que lista tudo que o Git deve **ignorar** (não rastrear, não subir).

### Por que é importante?

| O que NUNCA deve subir | Motivo |
|------------------------|--------|
| `node_modules/` | Pasta pesada (milhares de arquivos). Qualquer pessoa pode recriar com `npm install` |
| `.env` | Contém senhas, chaves de API, dados secretos |
| `.DS_Store` | Arquivo do macOS sem utilidade no código |
| `dist/` ou `build/` | Código compilado. É gerado automaticamente |
| `*.log` | Logs de debug temporários |

### Como criar:

```bash
# Na raiz do projeto, criar o arquivo
touch .gitignore
```

### Exemplo de conteúdo:

```gitignore
# Dependências
node_modules/

# Variáveis de ambiente (SEGREDOS!)
.env
.env.local

# Sistema operacional
.DS_Store
Thumbs.db

# Build/Compilação
dist/
build/

# Logs
*.log

# IDE
.vscode/
.idea/
```

> ⚠️ **Regra de ouro:** Se contém senha ou é gerado automaticamente, vai no `.gitignore`.

---

## Parte E: Atividade Prática — Mão na Massa (45 min)

### 🎯 Objetivo

Cada aluno vai criar um mini-projeto, versionar com Git e publicar no GitHub.

---

### Passo 1 — Criar o repositório no GitHub (5 min)

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** → **"New repository"**
3. Configure:
   - Nome: `meu-primeiro-repo`
   - Descrição: `Minha primeira página versionada com Git`
   - Visibilidade: **Public**
   - ⚠️ **NÃO** marque "Add a README file"
4. Clique em **Create repository**
5. Copie a URL HTTPS que aparece (ex: `https://github.com/seu-usuario/meu-primeiro-repo.git`)

---

### Passo 2 — Criar o projeto local (5 min)

```bash
# Criar e entrar na pasta
mkdir meu-primeiro-repo
cd meu-primeiro-repo

# Criar arquivo HTML
touch index.html
```

Abra o `index.html` no editor e cole:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Repo</title>
</head>
<body>
    <h1>Olá, Git!</h1>
    <p>Este é meu primeiro projeto versionado.</p>
</body>
</html>
```

---

### Passo 3 — Inicializar e fazer o primeiro commit (5 min)

```bash
# Inicializar o Git
git init

# Verificar o estado
git status

# Adicionar o arquivo
git add index.html

# Fazer o commit
git commit -m "Cria página inicial com título e parágrafo"
```

---

### Passo 4 — Conectar e enviar ao GitHub (5 min)

```bash
# Conectar ao repositório remoto (cole SUA url)
git remote add origin https://github.com/seu-usuario/meu-primeiro-repo.git

# Renomear branch para main
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

> 🔐 Na primeira vez, o Git pode pedir login. Siga as instruções na tela.

---

### Passo 5 — Editar e repetir o fluxo (10 min)

Edite o `index.html` adicionando uma lista:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Repo</title>
</head>
<body>
    <h1>Olá, Git!</h1>
    <p>Este é meu primeiro projeto versionado.</p>

    <h2>O que aprendi hoje:</h2>
    <ul>
        <li>Git é diferente de GitHub</li>
        <li>Commit é como tirar uma foto do código</li>
        <li>Push envia para a nuvem</li>
    </ul>
</body>
</html>
```

Agora execute o fluxo completo:

```bash
# 1. Ver o que mudou
git status

# 2. Preparar as mudanças
git add .

# 3. Salvar com mensagem descritiva
git commit -m "Adiciona lista de aprendizados na página"

# 4. Enviar para o GitHub
git push
```

---

### Passo 6 — Criar o .gitignore (5 min)

```bash
touch .gitignore
```

Adicione este conteúdo ao `.gitignore`:

```gitignore
# Sistema
.DS_Store

# Ambiente
.env

# Dependências (para projetos futuros)
node_modules/
```

Commit e push:

```bash
git add .gitignore
git commit -m "Adiciona .gitignore com regras básicas"
git push
```

---

### Passo 7 — Verificar no GitHub (5 min)

1. Acesse seu repositório no GitHub
2. Confira que os arquivos estão lá
3. Clique em **"X commits"** para ver o histórico
4. Clique em um commit para ver exatamente o que mudou (diff em verde/vermelho)

---

### ✅ Checklist de Conclusão

| # | Tarefa | Feito? |
|---|--------|--------|
| 1 | Conta no GitHub criada | ☐ |
| 2 | `git config` configurado | ☐ |
| 3 | Repositório criado no GitHub | ☐ |
| 4 | Pasta local com `index.html` | ☐ |
| 5 | `git init` executado | ☐ |
| 6 | Primeiro commit realizado | ☐ |
| 7 | Push para o GitHub funcionou | ☐ |
| 8 | Segunda edição + commit + push | ☐ |
| 9 | `.gitignore` criado e enviado | ☐ |
| 10 | Histórico verificado no site | ☐ |

---

## 🗺️ Mapa Mental do Fluxo

```
┌─────────────────────────────────────────────────────┐
│                  SEU COMPUTADOR                       │
│                                                      │
│  ┌──────────┐    git add    ┌──────────┐            │
│  │ Working  │ ───────────▶ │ Staging  │            │
│  │Directory │              │  Area    │            │
│  │(editando)│ ◀─────────── │(preparado)│            │
│  └──────────┘   (editar)   └──────────┘            │
│                                  │                   │
│                            git commit                │
│                                  ▼                   │
│                          ┌──────────────┐           │
│                          │ Repositório  │           │
│                          │    Local     │           │
│                          │  (.git/)     │           │
│                          └──────────────┘           │
└──────────────────────────────────┼───────────────────┘
                                   │
                              git push
                                   ▼
┌─────────────────────────────────────────────────────┐
│                    GITHUB (Nuvem)                     │
│          ┌──────────────────────────┐               │
│          │   Repositório Remoto      │               │
│          │   (origin)                │               │
│          └──────────────────────────┘               │
└─────────────────────────────────────────────────────┘
```

---

## 📚 Para Estudar Depois

| Comando | O que faz |
|---------|-----------|
| `git pull` | Baixa atualizações do GitHub para o PC |
| `git clone <url>` | Copia um repositório remoto pela primeira vez |
| `git branch nome` | Cria uma ramificação (branch) |
| `git checkout nome` | Muda para outra branch |
| `git merge nome` | Junta duas branches |
| `git diff` | Mostra as diferenças antes de commitar |

---

> **Lembre-se:** Git é como andar de bicicleta — parece difícil no começo, mas depois vira automático. O segredo é praticar todo dia! 🚴‍♂️
