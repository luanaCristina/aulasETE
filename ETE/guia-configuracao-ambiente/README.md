<p align="center">
  <img src="https://img.shields.io/badge/Python-3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/VS%20Code-1.90+-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code">
  <img src="https://img.shields.io/badge/PostgreSQL-16+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/pgAdmin-4-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="pgAdmin 4">
</p>

<h1 align="center">🛠️ Guia de Configuração de Ambiente — Módulo 1</h1>

<p align="center">
  <strong>Curso Técnico em Desenvolvimento de Sistemas</strong><br>
  ETE Pernambuco — Profª Luana Cristina<br>
  <em>Módulo 1 • 2026.2</em>
</p>

---

## 📋 Antes de Começar

Antes de iniciar as instalações, verifique se você possui:

- [ ] 💻 Computador com Windows 10/11 ou macOS 12+
- [ ] 🌐 Conexão com a internet estável
- [ ] 🔑 Acesso de **administrador** no computador (necessário para instalar programas)
- [ ] 📝 Um bloco de notas para anotar senhas definidas durante a instalação

> ⏱️ **Tempo estimado:** aproximadamente 1 hora para instalar e configurar tudo.

> 💡 **Dica:** Instale as ferramentas **na ordem apresentada** neste guia. O VS Code precisa encontrar o Python já instalado, e o psycopg2 precisa do PostgreSQL disponível.

**Ordem de instalação:**
1. Python 3.12+ (linguagem de programação)
2. VS Code (editor de código)
3. PostgreSQL 16 + pgAdmin 4 (banco de dados)

---

## 1️⃣ Python 3.12+

O Python é a linguagem de programação principal do Módulo 1. Vamos usá-lo em Lógica de Programação e em Programação Desktop.

### 🪟 Windows

#### Passo 1 — Download

Acesse o site oficial: **https://www.python.org/downloads/**

Clique no botão amarelo **"Download Python 3.12.x"** (a versão mais recente da série 3.12).


#### Passo 2 — Instalação

Ao abrir o instalador, a **primeira tela** é a mais importante:

> ⚠️ **ATENÇÃO MÁXIMA — NÃO PULE ESTE PASSO!**
>
> Na parte inferior da primeira tela do instalador, **MARQUE** a opção:
>
> ✅ **"Add python.exe to PATH"**
>
> Se você não marcar esta opção, o Python não será reconhecido pelo terminal e você terá problemas em todas as disciplinas.

[Imagem: tela do instalador com a checkbox "Add python.exe to PATH" destacada em vermelho]

Depois de marcar, clique em **"Install Now"**.

#### Passo 3 — Desabilitar limite de PATH (opcional, recomendado)

Na última tela do instalador, se aparecer a opção **"Disable path length limit"**, clique nela. Isso evita problemas com caminhos longos de arquivos no Windows.

#### Passo 4 — Verificação

Abra o **Prompt de Comando** (pressione `Win + R`, digite `cmd`, pressione Enter) e execute:

```bash
python --version
```

**Saída esperada:**
```
Python 3.12.x
```

Verifique também o pip (gerenciador de pacotes):

```bash
pip --version
```

**Saída esperada:**
```
pip 24.x.x from C:\Users\SeuUsuario\...\pip (python 3.12)
```

#### Passo 5 — Instalar psycopg2-binary

Ainda no terminal, instale o conector Python ↔ PostgreSQL:

```bash
pip install psycopg2-binary
```


---

### 🍎 macOS

#### Opção A — Download pelo site oficial

1. Acesse **https://www.python.org/downloads/**
2. Baixe o arquivo `.pkg` para macOS
3. Abra o arquivo e siga o assistente de instalação (Next, Next, Install)

#### Opção B — Via Homebrew (recomendado para quem já usa terminal)

```bash
brew install python@3.12
```

> 💡 **IMPORTANTE para macOS:** No macOS, os comandos são `python3` e `pip3` (com o número 3). O comando `python` sem o 3 pode apontar para uma versão antiga do Python 2 que vem pré-instalada no sistema.

#### Verificação no macOS

```bash
python3 --version
```

**Saída esperada:**
```
Python 3.12.x
```

```bash
pip3 --version
```

**Saída esperada:**
```
pip 24.x.x from /Library/Frameworks/Python.framework/... (python 3.12)
```

#### Instalar psycopg2-binary no macOS

```bash
pip3 install psycopg2-binary
```

---

### 🔧 Solução de Problemas — Python

| Problema | Causa Provável | Solução |
|----------|---------------|---------|
| `'python' não é reconhecido como comando interno` | PATH não configurado | Reinstale marcando "Add python.exe to PATH" ou adicione manualmente (veja abaixo) |
| `'pip' is not recognized` | PATH não configurado ou pip não instalado | Execute `python -m ensurepip --upgrade` |
| `Permission denied` (macOS) | Falta de permissão | Use `pip3 install --user psycopg2-binary` ou `sudo pip3 install psycopg2-binary` |
| Python 2 abrindo ao invés de 3 (macOS) | macOS tem Python 2 pré-instalado | Sempre use `python3` e `pip3` |


#### 🛠️ Como adicionar Python ao PATH manualmente (Windows)

Se você esqueceu de marcar a checkbox durante a instalação:

1. Pressione `Win + S` e pesquise **"Variáveis de Ambiente"**
2. Clique em **"Editar as variáveis de ambiente do sistema"**
3. Clique no botão **"Variáveis de Ambiente..."**
4. Em **"Variáveis do sistema"**, encontre e selecione a variável `Path`, clique em **"Editar"**
5. Clique em **"Novo"** e adicione estes dois caminhos:
   ```
   C:\Users\SeuUsuario\AppData\Local\Programs\Python\Python312\
   C:\Users\SeuUsuario\AppData\Local\Programs\Python\Python312\Scripts\
   ```
   (substitua `SeuUsuario` pelo seu nome de usuário do Windows)
6. Clique **OK** em todas as janelas
7. **Feche e abra novamente** o Prompt de Comando
8. Teste com `python --version`

#### ✅ Verificação Visual

Quando tudo estiver certo, seu terminal deve mostrar algo assim:

```bash
C:\Users\Aluno> python --version
Python 3.12.7

C:\Users\Aluno> pip --version
pip 24.2 from C:\Users\Aluno\AppData\Local\Programs\Python\Python312\Lib\site-packages\pip (python 3.12)

C:\Users\Aluno> pip install psycopg2-binary
Successfully installed psycopg2-binary-2.9.9
```

---

## 2️⃣ Visual Studio Code (VS Code)

O VS Code é o editor de código que usaremos em **todas** as disciplinas do módulo.

### 🪟 Windows

#### Passo 1 — Download

Acesse: **https://code.visualstudio.com/**

Clique no botão azul **"Download for Windows"**.

#### Passo 2 — Instalação

Execute o instalador e nas opções adicionais, recomendo marcar:

- [x] **Adicionar ação "Abrir com Code" ao menu de contexto de arquivo**
- [x] **Adicionar ação "Abrir com Code" ao menu de contexto de diretório**
- [x] **Adicionar ao PATH** (para usar o comando `code` no terminal)
- [x] **Registrar Code como editor padrão para tipos de arquivo suportados**


#### Passo 3 — Instalar a Extensão Python

1. Abra o VS Code
2. Pressione `Ctrl + Shift + X` para abrir o painel de extensões
3. Na barra de pesquisa, digite **"Python"**
4. Instale a extensão **"Python"** da **Microsoft** (a que tem 90M+ de instalações)

[Imagem: painel de extensões com a extensão Python da Microsoft destacada]

#### Passo 4 — Configurar o interpretador Python

1. Pressione `Ctrl + Shift + P` para abrir a Paleta de Comandos
2. Digite **"Python: Select Interpreter"**
3. Selecione **Python 3.12.x** na lista

#### Passo 5 — Testar

1. Crie um arquivo chamado `teste.py`
2. Escreva o seguinte código:

```python
print("Olá, ETE! 🐍")
```

3. Clique com o botão direito no editor → **"Run Python File in Terminal"**
4. Você deve ver `Olá, ETE! 🐍` no terminal integrado

---

### 🍎 macOS

#### Passo 1 — Download

**Opção A:** Acesse **https://code.visualstudio.com/** e baixe o arquivo `.dmg`

**Opção B:** Via Homebrew:
```bash
brew install --cask visual-studio-code
```

#### Passo 2 — Instalação

Se baixou o `.dmg`, abra-o e arraste o **Visual Studio Code** para a pasta **Aplicativos**.

#### Passo 3 — Habilitar comando `code` no terminal

1. Abra o VS Code
2. Pressione `Cmd + Shift + P`
3. Digite **"Shell Command: Install 'code' command in PATH"**
4. Selecione e confirme

Agora você pode abrir qualquer pasta no VS Code pelo terminal:
```bash
code minha-pasta/
```

#### Passo 4 — Extensão Python e Teste

Siga os mesmos passos do Windows:
- `Cmd + Shift + X` → buscar "Python" → Instalar (Microsoft)
- `Cmd + Shift + P` → "Python: Select Interpreter" → Python 3.12
- Criar `teste.py` com `print("Olá, ETE! 🐍")` → Executar

---

### 🔧 Solução de Problemas — VS Code

| Problema | Causa Provável | Solução |
|----------|---------------|---------|
| Extensão Python não encontra o interpretador | Python não está no PATH ou versão errada | `Ctrl+Shift+P` → "Python: Select Interpreter" → selecione manualmente |
| Terminal mostra versão errada do Python | Múltiplas versões instaladas | Verifique com `where python` (Windows) ou `which python3` (macOS) |
| Erro "Module not found" ao executar | pip instalou em outro Python | Verifique se o interpretador no VS Code é o mesmo onde instalou o pacote |
| VS Code abre mas fica com tela branca | Problema de GPU/driver | Abra com `code --disable-gpu` ou atualize drivers de vídeo |
| Comando `code` não funciona no terminal | Não foi adicionado ao PATH | Windows: reinstale marcando PATH. macOS: `Cmd+Shift+P` → "Shell Command" |


> 💡 **Dica:** Extensões extras recomendadas para instalar depois:
> - **Portuguese (Brazil) Language Pack** — traduz a interface do VS Code
> - **Material Icon Theme** — ícones bonitos para arquivos
> - **Code Runner** — executar código com um clique

---

## 3️⃣ PostgreSQL 16+ e pgAdmin 4

O PostgreSQL é o banco de dados que usaremos na disciplina de Administração de Bancos de Dados. O pgAdmin 4 é a interface gráfica para gerenciá-lo.

### 🪟 Windows

#### Passo 1 — Download

Acesse: **https://www.enterprisedb.com/downloads/postgres-postgresql-downloads**

Baixe a versão **PostgreSQL 16.x** para **Windows x86-64**.

#### Passo 2 — Instalação

Execute o instalador e siga os passos:

1. **Diretório de instalação:** mantenha o padrão (`C:\Program Files\PostgreSQL\16`)
2. **Componentes:** marque **TODOS**:
   - ✅ PostgreSQL Server
   - ✅ pgAdmin 4
   - ✅ Stack Builder
   - ✅ Command Line Tools

#### Passo 3 — Senha do superusuário postgres

> ⚠️ **ATENÇÃO CRÍTICA — ANOTE ESTA SENHA!**
>
> Nesta tela, você vai definir a senha do usuário **postgres** (administrador do banco).
>
> 🔐 **Você vai precisar desta senha TODA VEZ que conectar ao banco de dados.**
>
> 📝 **Sugestão para a sala de aula:** use a senha `postgres` (igual ao nome do usuário).
>
> ❗ Se você esquecer esta senha, precisará editar o arquivo `pg_hba.conf` ou reinstalar o PostgreSQL.

Digite a senha, confirme e **ANOTE EM LUGAR SEGURO**.

#### Passo 4 — Porta

Mantenha a porta padrão: **5432**

> ⚠️ **NÃO altere a porta!** Todos os nossos projetos e configurações usam a porta 5432.

#### Passo 5 — Locale

Selecione **"Default locale"** e prossiga.


#### Passo 6 — Finalizar

Clique em **Next** até o final e aguarde a instalação. Quando terminar, pode desmarcar "Launch Stack Builder" e clicar em **Finish**.

#### Passo 7 — Abrir o pgAdmin 4

1. Abra o **pgAdmin 4** pelo Menu Iniciar
2. Na primeira abertura, defina uma **Master Password** para o pgAdmin
   - Essa é uma senha diferente da senha do PostgreSQL!
   - Serve para proteger suas configurações salvas no pgAdmin
   - 💡 Sugestão: use a mesma `postgres` para simplificar

#### Passo 8 — Conectar ao servidor local

1. No painel esquerdo, expanda **Servers**
2. Clique em **PostgreSQL 16**
3. Digite a senha do usuário postgres que você definiu no Passo 3
4. Marque **"Save Password"** para não precisar digitar toda vez

✅ Se conectou com sucesso, você verá os bancos de dados padrão (`postgres`, `template0`, `template1`).

#### Passo 9 — Verificação via terminal

Abra o Prompt de Comando e execute:

```bash
psql -U postgres -c "SELECT version();"
```

Se pedir senha, digite a senha que você definiu na instalação.

**Saída esperada:**
```
                          version
------------------------------------------------------------
 PostgreSQL 16.x on x86_64-windows, compiled by ...
(1 row)
```

> 💡 **Se o comando `psql` não for reconhecido:** Adicione ao PATH:
> `C:\Program Files\PostgreSQL\16\bin`
> (Siga o mesmo processo descrito na seção de Python para adicionar ao PATH)

---

### 🍎 macOS

#### Opção A — Via Homebrew (recomendado) 🏆

##### Passo 1 — Instalar PostgreSQL

```bash
brew install postgresql@16
```

##### Passo 2 — Iniciar o serviço

```bash
brew services start postgresql@16
```


##### Passo 3 — Verificar se está rodando

```bash
brew services list
```

Você deve ver `postgresql@16` com status **started**.

##### Passo 4 — Criar banco padrão e configurar senha

```bash
createdb
psql postgres
```

Dentro do psql, defina a senha:

```sql
ALTER USER postgres PASSWORD 'postgres';
\q
```

> 💡 **Nota:** No macOS via Homebrew, o PostgreSQL cria um usuário com o mesmo nome do seu usuário macOS. Se `postgres` não existir, crie com:
> ```bash
> createuser -s postgres
> ```

##### Passo 5 — Instalar pgAdmin 4

```bash
brew install --cask pgadmin4
```

##### Passo 6 — Configurar pgAdmin

1. Abra o pgAdmin pelo Spotlight (`Cmd + Space` → "pgAdmin")
2. Defina a Master Password
3. Clique com botão direito em **Servers** → **Register** → **Server**
4. Na aba **General**: Nome = `Local`
5. Na aba **Connection**:
   - Host: `localhost`
   - Port: `5432`
   - Username: `postgres` (ou seu nome de usuário macOS)
   - Password: `postgres`
   - ✅ Save Password
6. Clique em **Save**

#### Opção B — Instalador .dmg

Baixe o instalador em **https://www.enterprisedb.com/downloads/postgres-postgresql-downloads** e siga o mesmo processo descrito para Windows (a interface é muito similar).

#### Verificação no macOS

```bash
psql --version
```

**Saída esperada:**
```
psql (PostgreSQL) 16.x
```

Ou teste a conexão completa:

```bash
psql -U postgres -c "SELECT version();"
```

---

### 🔧 Solução de Problemas — PostgreSQL

| Problema | Causa Provável | Solução |
|----------|---------------|---------|
| `psql: connection refused` | Serviço não está rodando | **Windows:** `Win+R` → `services.msc` → encontre "postgresql" → Iniciar. **macOS:** `brew services start postgresql@16` |
| `FATAL: password authentication failed` | Senha incorreta | Edite `pg_hba.conf`: mude `md5` para `trust`, reinicie o serviço, altere a senha, mude de volta para `md5` |
| `port 5432 already in use` | Outra instância rodando | Encerre o processo na porta 5432 ou altere a porta em `postgresql.conf` |
| pgAdmin não abre | Problema de cache | Limpe o cache do pgAdmin (apague a pasta de dados do pgAdmin) ou reinstale |
| `role 'postgres' does not exist` (macOS) | Homebrew usa seu usuário macOS | Execute `createuser -s postgres` |
| Permission denied (macOS) | Permissões de pasta | Execute `sudo chown -R $(whoami) /usr/local/var/postgresql@16` |


#### 🛠️ Como verificar se o serviço PostgreSQL está rodando

**Windows:**
1. Pressione `Win + R`
2. Digite `services.msc` e pressione Enter
3. Procure por **"postgresql-x64-16"** na lista
4. O status deve mostrar **"Em Execução"** (Running)
5. Se estiver parado, clique com botão direito → **Iniciar**

**macOS:**
```bash
brew services list
```
Procure por `postgresql@16` — deve mostrar `started`.

Se estiver parado:
```bash
brew services start postgresql@16
```

#### 🛠️ Como resetar a senha do postgres (se esqueceu)

**Windows:**
1. Encontre o arquivo `pg_hba.conf`:
   - Normalmente em `C:\Program Files\PostgreSQL\16\data\pg_hba.conf`
2. Abra com um editor de texto **como administrador**
3. Encontre a linha: `host all all 127.0.0.1/32 md5`
4. Mude `md5` para `trust`
5. Reinicie o serviço PostgreSQL (services.msc)
6. Abra o terminal e execute:
   ```bash
   psql -U postgres
   ALTER USER postgres PASSWORD 'nova_senha';
   \q
   ```
7. Volte ao `pg_hba.conf` e mude `trust` de volta para `md5`
8. Reinicie o serviço novamente

---

## ✅ Verificação Final — Tudo Funcionando?

Execute os comandos abaixo no terminal para confirmar que todas as ferramentas estão instaladas corretamente.

### 🪟 Windows

```bash
echo === Verificando Python ===
python --version
pip --version

echo === Verificando PostgreSQL ===
psql --version
psql -U postgres -c "SELECT 'PostgreSQL OK!' AS status;"

echo === Verificando psycopg2 ===
python -c "import psycopg2; print('psycopg2 OK!')"

echo === Tudo certo! Parabens! ===
```

### 🍎 macOS

```bash
echo "=== Verificando Python ==="
python3 --version
pip3 --version

echo "=== Verificando PostgreSQL ==="
psql --version
psql -U postgres -c "SELECT 'PostgreSQL OK!' AS status;"

echo "=== Verificando psycopg2 ==="
python3 -c "import psycopg2; print('psycopg2 OK!')"

echo "=== Tudo certo! Parabéns! ==="
```


### 📋 Checklist Final

Marque cada item conforme for verificando:

- [ ] ✅ Python instalado e no PATH (`python --version` funciona)
- [ ] ✅ pip funcionando (`pip --version` funciona)
- [ ] ✅ VS Code instalado com extensão Python configurada
- [ ] ✅ PostgreSQL rodando na porta 5432
- [ ] ✅ pgAdmin 4 conectado ao servidor local
- [ ] ✅ psycopg2-binary instalado (`import psycopg2` sem erro)

> 🎉 **Se todos os itens estão marcados, seu ambiente está pronto para o Módulo 1!**

---

## 📚 Próximos Passos

Agora que seu ambiente está configurado, veja o que fazer em seguida em cada disciplina:

### 📖 Lógica e Pensamento Computacional
- 📁 [Ver README da disciplina](../logica-pensamento-computacional/README.md)
- 🚀 Primeira atividade: criar seu primeiro programa Python com `print()` e variáveis

### 💻 Programação Python Desktop
- 📁 [Ver README da disciplina](../programacao-python-desktop/README.md)
- 🚀 Primeira atividade: explorar tipos de dados e estruturas condicionais

### 🗄️ Administração de Bancos de Dados
- 📁 [Ver README da disciplina](../administracao-bancos-de-dados/README.md)
- 🚀 Primeira atividade: criar seu primeiro banco de dados no pgAdmin e executar `CREATE TABLE`

### 🏗️ Engenharia de Software
- 📁 [Ver README da disciplina](../engenharia-de-software/README.md)
- 🚀 Primeira atividade: entender o ciclo de vida do software e metodologias ágeis

---

## 🆘 Precisa de Ajuda?

Se mesmo seguindo este guia você encontrar problemas:

1. **Releia o passo** onde travou — muitas vezes é um detalhe pequeno
2. **Pesquise o erro exato** no Google (copie e cole a mensagem de erro)
3. **Pergunte no grupo da turma** — provavelmente um colega já resolveu
4. **Traga o notebook na próxima aula** — resolveremos juntos

> 💡 **Dica de ouro:** Quando buscar ajuda, sempre informe:
> - Qual sistema operacional você usa (Windows/macOS)
> - Qual passo exato você estava executando
> - A mensagem de erro completa (print screen ou copie o texto)

---

<p align="center">

**🌟 Parabéns por configurar seu ambiente de desenvolvimento! 🌟**

Este é o primeiro passo da sua jornada como desenvolvedor(a) de sistemas.
A partir de agora, você tem as ferramentas dos profissionais.

Bons estudos e bom código! 🚀

</p>

---

<p align="center">
  <sub>Guia elaborado para o Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco</sub><br>
  <sub>Profª Luana Cristina • Módulo 1 • 2026.2</sub><br>
  <sub>Última atualização: Julho/2025</sub>
</p>
