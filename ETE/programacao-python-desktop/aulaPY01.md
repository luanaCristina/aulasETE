# 🐍 MANUAL INTEGRAL DE DESENVOLVIMENTO DESKTOP COM PYTHON E MYSQL

**Prof. Dr. em Ciência da Computação — Especialista em Desenvolvimento de Sistemas Desktop e Ecossistema Python**

---

## 🎯 NOTA DE BOAS-VINDAS E DIRETRIZ DIDÁTICA

Seja muito bem-vindo(a) a esta jornada de aprendizado focado na construção de sistemas desktop robustos, funcionais e integrados a bancos de dados relacionais.

Neste curso, nós não vamos nos limitar a digitar comandos isolados. Você aprenderá **como a máquina processa o Python**, o motivo pelo qual a linguagem se tornou a mais popular do mundo, como estruturar bancos de dados relacionais rigorosos no **MySQL** e, finalmente, como unir essas duas pontas criando uma **Aplicação Desktop Interativa**.

Prepare seu ambiente, instale o Python e o MySQL Workbench, e bons estudos!

---

# MÓDULO 1: Fundamentos da Linguagem Python

---

## 1.1 História, Filosofia (*Zen of Python*) e Paradigmas

### 📖 Explicação Expositiva e Detalhada

Python foi criado no final da década de 1980 por **Guido van Rossum** no CWI (*Centrum Wiskunde & Informatica*) na Holanda, lançado oficialmente em 1991. O nome da linguagem não veio da serpente, mas sim da trupe de comédia britânica *Monty Python's Flying Circus*.

Python é definido por quatro características estruturais:

1. **Multi-paradigma:** Suporta Programação Orientada a Objetos (POO), Programação Funcional e Programação Imperativa/Procedural.
2. **Interpretado:** O código Python é compilado para um formato intermediário chamado *bytecode* (`.pyc`), que é então executado pela **PVM (Python Virtual Machine)**.
3. **Tipagem Dinâmica e Forte:**
* *Dinâmica:* Você não precisa declarar o tipo da variável (`int`, `string`); o interpretador descobre o tipo em tempo de execução.
* *Forte:* O Python não realiza conversões implícitas perigosas entre tipos incompatíveis. O comando `'2' + 2` gera um erro de tipo (`TypeError`) em vez de tentar adivinhar a intenção do programador.


4. **O Zen do Python (*PEP 20*):** É a filosofia de design da linguagem. Ao executar `import this` no Python, você lê os 19 princípios orientadores. Os fundamentais são:
* *Bonito é melhor que feio.*
* *Explícito é melhor que implícito.*
* *Simples é melhor que complexo.*
* *Legibilidade conta.*



#### Áreas de Aplicação no Mercado:

* **Sistemas Desktop & Automação:** PySide/PyQt, Tkinter, PyAutoGUI.
* **Ciência de Dados & Inteligência Artificial:** Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow.
* **Desenvolvimento Web & APIs:** Django, Flask, FastAPI.

---

### 💡 Analogia do Mundo Real

Imagine que escrever em **Linguagem C** é como dirigir um **Carro de Corrida Manual com Câmbio Seco**: você tem controle total de cada engrenagem e da memória RAM, mas qualquer erro mínimo faz o motor fundir.

Escrever em **Python** é como dirigir um **Carro Elétrico de Luxo com Pilotagem Automática**: o carro gerencia a energia, o freio e a tração para você. O foco do motorista deixa de ser *como a engrenagem roda* e passa a ser *onde você quer chegar*.

---

### 🔍 Explicação Detalhada da Lógica do Ecossistema

```
 ┌────────────────┐      ┌──────────────────────────┐      ┌──────────────────────────┐
 │ Código Python  │ ───> │ Bytecode intermediário   │ ───> │ PVM (Virtual Machine)    │
 │   (`app.py`)   │      │       (`.pyc`)           │      │ Executa no SO (Win/Linux)│
 └────────────────┘      └──────────────────────────┘      └──────────────────────────┘

```

---

## 1.2 Ambiente, Instalação, `pip` e Ambientes Virtuais (`venv`)

### 📖 Explicação Expositiva e Detalhada

Para desenvolver em Python, precisamos instalar o **Interpretador oficial (Python 3.x)** e entender duas ferramentas vitais:

1. **`pip` (Package Installer for Python):** O gerenciador de pacotes oficial. Ele baixa e instala bibliotecas disponibilizadas no [PyPI](https://pypi.org/) (*Python Package Index*).
2. **`venv` (Virtual Environment):** Cria ambientes isolados para cada projeto Python. Sem o `venv`, todas as bibliotecas são instaladas globalmente no sistema operacional. Se o *Projeto A* precisa do módulo `mysql-connector` versão 8.0 e o *Projeto B* precisa da versão 2.0, haverá um conflito destrutivo no sistema.

---

### 💻 Passo a Passo no Terminal para Configuração do Ambiente

```bash
# 1. Verificar se o Python 3 está instalado corretamente
python --version   # Ou python3 --version no Linux/Mac

# 2. Criar um ambiente virtual isolado chamado 'env_projeto'
python -m venv env_projeto

# 3. Ativar o ambiente virtual:
# No Windows (Command Prompt):
env_projeto\Scripts\activate.bat
# No Windows (PowerShell):
env_projeto\Scripts\Activate.ps1
# No Linux/MacOS (Terminal):
source env_projeto/bin/activate

# (O terminal exibirá '(env_projeto)' no início do prompt indicando isolamento)

# 4. Instalar o conector do MySQL dentro do ambiente isolado
pip install mysql-connector-python streamlit

```

---

## 1.3 Variáveis, Tipos, I/O e Operadores Matemáticos/Comparação

### 📖 Explicação Expositiva e Detalhada

Em Python, **tudo é um objeto**. Quando você escreve `idade = 25`, o Python cria um objeto da classe `int` na memória e aponta o nome `idade` para esse endereço.

#### A) Convenção PEP 8:

* **Variáveis e Funções:** `snake_case` (ex: `nome_cliente`, `calcular_total()`).
* **Classes:** `PascalCase` (ex: `ClienteRepository`).
* **Simulação de Constantes:** Python não possui a palavra-chave `const`. Usamos letras **MAIÚSCULAS** por convenção social para avisar outros desenvolvedores que o valor não deve ser alterado (ex: `TAXA_JUROS = 0.05`).

#### B) Operadores Aritméticos e de Comparação em Python:

| Operador | Aritmético | Exemplo em Python | Resultado |
| --- | --- | --- | --- |
| `+` | Adição / Concatenação | `10 + 5` | `15` |
| `-` | Subtração | `10 - 5` | `5` |
| `*` | Multiplicação | `10 * 3` | `30` |
| `/` | Divisão Real | `10 / 4` | `2.5` |
| `//` | Divisão Inteira (descarta decimais) | `10 // 4` | `2` |
| `%` | Módulo (Resto da divisão) | `10 % 3` | `1` |
| `**` | Potenciação | `2 ** 3` | `8` |

---

### 💻 Código Prático Completo: Sintaxe, I/O, Operadores e Condicionais

```python
# ============================================================================
# DEMONSTRAÇÃO DE SINTAXE BÁSICA, I/O E ESTRUTURAS DE CONTROLE (PEP 8)
# ============================================================================

# Simulação de Constante (Convenção em Maiúsculas)
LIMITE_CREDITO_PADRAO = 1000.00

# Entrada de dados (input SEMPRE retorna uma String)
nome_cliente = input("Digite o nome do cliente: ")
idade_str = input("Digite a idade do cliente: ")

# Conversão explicita de tipo (Casting)
idade = int(idade_str)
renda_mensal = float(input("Digite a renda mensal do cliente (R$): "))

# Saída formatada com f-strings (Python 3.6+)
print(f"\n--- CADASTRO INICIAL DE: {nome_cliente.upper()} ---")
print(f"Idade informada: {idade} anos")

# Estrutura Condicional (if, elif, else) - Notar a INDENTAÇÃO obrigatória (4 espaços)
if idade < 18:
    print("⚠️ Alerta: Cliente menor de idade. Crédito negado.")
    limite_aprovado = 0.0
elif renda_mensal >= 5000.00:
    limite_aprovado = LIMITE_CREDITO_PADRAO * 3
    print("✅ Crédito VIP Aprovado!")
else:
    limite_aprovado = LIMITE_CREDITO_PADRAO
    print("✅ Crédito Padrão Aprovado.")

print(f"Limite final concedido: R$ {limite_aprovado:.2f}")

# Laço de Repetição 'for' iterando em uma lista
print("\n--- SIMULAÇÃO DE PARCELAMENTO ---")
for parcela in range(1, 7): # Iterará de 1 até 6
    valor_parcela = (limite_aprovado / parcela)
    print(f"Opção {parcela}x sem juros: R$ {valor_parcela:.2f} por mês")

# Laço de Repetição 'while'
contador = 3
print("\n--- CONTAGEM REGRESSIVA PARA LIBERAÇÃO ---")
while contador > 0:
    print(f"Processando sistema... {contador}")
    contador -= 1
print("Sistema Liberado com Sucesso!")

```

---

### 🔍 Explicação Detalhada da Lógica do Código

1. **`input()`:** A função pausa a execução do programa e aguarda o usuário digitar algo no terminal. Todo dado retornado por ela é do tipo `str` (String).
2. **Casting (`int()`, `float()`):** É a conversão manual de tipos. Se não convertermos a renda digitada para `float`, a verificação `>= 5000.00` falhará com erro de tipo.
3. **Indentação Obligatória:** Em Python **não existem chaves `{}**` para delimitar blocos de código. O escopo do `if`, `elif` e `for` é definido obrigatoriamente por 4 espaços de indentação.
4. **`range(1, 7)`:** A função `range(início, fim)` gera uma sequência numérica. O valor final é **exclusivo**, ou seja, `range(1, 7)` gera os números 1, 2, 3, 4, 5 e 6.

---

### ✏️ Exercício Prático Dirigido

Escreva um script Python que receba o preço de um produto e a quantidade comprada. Se o valor total da compra for maior que R$ 200,00, aplique um desconto de 10%. Exiba o valor original, o valor do desconto e o valor final a pagar formatados com duas casas decimais.

### ✅ Resposta e Explicação Passo a Passo

```python
# Resolução do Exercício
preco_unitario = float(input("Digite o preço unitário do produto (R$): "))
quantidade = int(input("Digite a quantidade comprada: "))

valor_total = preco_unitario * quantidade

if valor_total > 200.00:
    desconto = valor_total * 0.10
    print("🎉 Parabéns! Você ganhou 10% de desconto!")
else:
    desconto = 0.0

valor_final = valor_total - desconto

print("\n--- RESUMO DA COMPRA ---")
print(f"Valor Bruto:   R$ {valor_total:.2f}")
print(f"Desconto:      R$ {desconto:.2f}")
print(f"Valor Final:   R$ {valor_final:.2f}")

```

---

# MÓDULO 2: Modelagem e Criação do Banco de Dados (MySQL)

Neste módulo, estruturaremos a camada de persistência condizente com uma arquitetura corporativa real: um **Sistema de Gestão de Clientes e Pedidos**.

---

## 2.1 Diagrama Entidade-Relacionamento (DER)

### 📖 Explicação Expositiva e Detalhada

Para garantir a integridade dos dados, modelaremos um relacionamento de cardinalidade $1:N$ (Um para Muitos) entre **Clientes** e **Pedidos**.

* **Regras de Negócio:**
1. Um `Cliente` pode realizar **vários (N)** `Pedidos`.
2. Um `Pedido` pertence a obrigatoriamente **um (1)** único `Cliente`.
3. A chave primária (`id`) do Cliente é gravada como Chave Estrangeira (`cliente_id`) na tabela de Pedidos.



```
+───────────────────+                +───────────────────+
|     CLIENTES      |                |      PEDIDOS      |
+───────────────────+                +───────────────────+
| PK  id            | 1            N | PK  id            |
|     nome          |<───────────────| FK  cliente_id    |
|     email (UNIQUE)|                |     data_pedido   |
|     telefone      |                |     valor_total   |
+───────────────────+                |     status        |
                                     +───────────────────+

```

---

## 2.2 Script Físico SQL DDL no MySQL Workbench

Execute o script DDL abaixo no seu MySQL Workbench para criar a estrutura do banco:

```sql
-- 1. Criação da Base de Dados com codificação UTF8mb4
CREATE DATABASE IF NOT EXISTS vendas_desktop_db
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE vendas_desktop_db;

-- 2. Tabela de Clientes (Entidade Pai)
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 3. Tabela de Pedidos (Entidade Filha com Chave Estrangeira)
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) DEFAULT 'PENDENTE',
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_pedidos_clientes
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

```

---

# MÓDULO 3: Projeto Final Integrado (Python + MySQL + Streamlit)

Agora vamos construir do zero um **Sistema Desktop / Web Integrado com Interface Gráfica Interativa** aplicando o CRUD completo (Create, Read, Update, Delete) conectado ao MySQL.

---

## 3.1 Estrutura de Pastas e Arquivos do Projeto

Organize os arquivos do seu projeto na seguinte estrutura modular:

```
/sistema_vendas_desktop
  │── env_projeto/            <-- Ambiente virtual isolado (venv)
  │── /config
  │     └── database.py       <-- Módulo de conexão segura com MySQL
  │── /database
  │     └── schema.sql        <-- Script DDL de criação do MySQL
  │── app.py                  <-- Aplicação Principal (Interface Streamlit + CRUD)
  └── requirements.txt        <-- Lista de dependências do projeto

```

---

## 3.2 Módulo de Conexão com o Banco de Dados (`config/database.py`)

### 🔍 Explicação Detalhada da Lógica

Para garantir a segurança contra vazamentos de sockets e tratar falhas de rede, utilizamos o bloco `try...except...finally` com o conector `mysql.connector`.

```python
# config/database.py
import mysql.connector
from mysql.connector import Error

def obter_conexao():
    """
    Estabelece e retorna uma conexão ativa com o banco de dados MySQL.
    Aplica tratamento de exceções para proteger o sistema contra falhas de conexão.
    """
    try:
        conexao = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",  # Insira a senha do seu MySQL aqui se houver
            database="vendas_desktop_db",
            port=3306
        )
        if conexao.is_connected():
            return conexao
    except Error as e:
        print(f"❌ Erro crítico ao conectar ao MySQL: {e}")
        return None

```

---

## 3.3 Código Completo do Sistema Integrado (`app.py`)

Abaixo está o código completo da aplicação gráfica interativa utilizando **Streamlit** (framework Python para interfaces de sistemas desktop/web) conectado ao banco MySQL:

```python
# ============================================================================
# SISTEMA DE GESTÃO DE CLIENTES E PEDIDOS (CRUD COMPLETO EM PYTHON + MYSQL)
# ============================================================================

import streamlit as st
import pandas as pd
from config.database import obter_conexao

# Configuração da Página da Interface
st.set_page_config(
    page_title="Sistema de Gestão Desktop",
    page_icon="🖥️",
    layout="wide"
)

# ----------------------------------------------------------------------------
# FUNÇÕES DE LÓGICA DO CRUD (PERSISTÊNCIA NO MYSQL)
# ----------------------------------------------------------------------------

def cadastrar_cliente(nome, email, telefone):
    """CREATE: Insere um novo cliente no MySQL usando consultas parametrizadas."""
    conexao = obter_conexao()
    if conexao:
        try:
            cursor = conexao.cursor()
            # Uso de placeholders (%s) para evitar ataques de SQL Injection!
            sql = "INSERT INTO clientes (nome, email, telefone) VALUES (%s, %s, %s)"
            valores = (nome, email, telefone)
            cursor.execute(sql, valores)
            conexao.commit()
            return True
        except Exception as e:
            st.error(f"Erro ao inserir cliente no banco: {e}")
            return False
        finally:
            cursor.close()
            conexao.close()

def listar_clientes():
    """READ: Consulta e retorna todos os clientes cadastrados."""
    conexao = obter_conexao()
    if conexao:
        try:
            cursor = conexao.cursor(dictionary=True) # Retorna linhas como Dicionários
            cursor.execute("SELECT id, nome, email, telefone, data_cadastro FROM clientes ORDER BY id DESC")
            registros = cursor.fetchall()
            return registros
        finally:
            cursor.close()
            conexao.close()
    return []

def atualizar_cliente(id_cliente, novo_nome, novo_email, novo_telefone):
    """UPDATE: Atualiza os dados de um cliente existente pelo seu ID."""
    conexao = obter_conexao()
    if conexao:
        try:
            cursor = conexao.cursor()
            sql = "UPDATE clientes SET nome = %s, email = %s, telefone = %s WHERE id = %s"
            valores = (novo_nome, novo_email, novo_telefone, id_cliente)
            cursor.execute(sql, valores)
            conexao.commit()
            return cursor.rowcount > 0
        except Exception as e:
            st.error(f"Erro ao atualizar cliente: {e}")
            return False
        finally:
            cursor.close()
            conexao.close()

def deletar_cliente(id_cliente):
    """DELETE: Exclui um cliente do banco pelo seu ID."""
    conexao = obter_conexao()
    if conexao:
        try:
            cursor = conexao.cursor()
            sql = "DELETE FROM clientes WHERE id = %s"
            cursor.execute(sql, (id_cliente,))
            conexao.commit()
            return cursor.rowcount > 0
        except Exception as e:
            st.error(f"Erro ao excluir cliente: {e}")
            return False
        finally:
            cursor.close()
            conexao.close()

# ----------------------------------------------------------------------------
# INTERFACE GRÁFICA DO USUÁRIO (STREAMLIT UI)
# ----------------------------------------------------------------------------

st.title("💻 Sistema Desktop de Gestão de Clientes - MySQL")
st.markdown("---")

# Menu Lateral de Navegação
menu = st.sidebar.selectbox(
    "Selecione a Operação do CRUD:",
    ["1. Cadastrar Cliente (Create)", "2. Listar Clientes (Read)", "3. Editar Cliente (Update)", "4. Excluir Cliente (Delete)"]
)

# OPERAÇÃO 1: CREATE
if menu == "1. Cadastrar Cliente (Create)":
    st.subheader("➕ Novo Cadastro de Cliente")
    
    with st.form(key="form_cadastrar"):
        nome = st.text_input("Nome Completo:")
        email = st.text_input("E-mail:")
        telefone = st.text_input("Telefone de Contato:")
        botao_submit = st.form_submit_button("Salvar no MySQL")
        
        if botao_submit:
            if nome and email and telefone:
                sucesso = cadastrar_cliente(nome, email, telefone)
                if sucesso:
                    st.success(f"Cliente '{nome}' cadastrado com sucesso no banco de dados!")
            else:
                st.warning("Preencha todos os campos obrigatórios!")

# OPERAÇÃO 2: READ
elif menu == "2. Listar Clientes (Read)":
    st.subheader("📋 Clientes Cadastrados no Banco de Dados")
    
    dados = listar_clientes()
    if dados:
        # Converte a lista de dicionários do MySQL em um DataFrame do Pandas para exibição bonita em tabela
        df = pd.DataFrame(dados)
        st.dataframe(df, use_container_width=True)
    else:
        st.info("Nenhum cliente cadastrado até o momento.")

# OPERAÇÃO 3: UPDATE
elif menu == "3. Editar Cliente (Update)":
    st.subheader("✏️ Atualizar Dados do Cliente")
    
    dados = listar_clientes()
    if dados:
        # Lista suspensa com os IDs e Nomes dos clientes cadastrados
        opcoes_clientes = {f"ID: {c['id']} - {c['nome']}": c for c in dados}
        cliente_selecionado_label = st.selectbox("Escolha o cliente para editar:", list(opcoes_clientes.keys()))
        cliente_atual = opcoes_clientes[cliente_selecionado_label]
        
        with st.form(key="form_editar"):
            novo_nome = st.text_input("Nome:", value=cliente_atual["nome"])
            novo_email = st.text_input("E-mail:", value=cliente_atual["email"])
            novo_telefone = st.text_input("Telefone:", value=cliente_atual["telefone"])
            btn_atualizar = st.form_submit_button("Atualizar no Banco")
            
            if btn_atualizar:
                sucesso = atualizar_cliente(cliente_atual["id"], novo_nome, novo_email, novo_telefone)
                if sucesso:
                    st.success(f"Dados do Cliente ID {cliente_atual['id']} atualizados com sucesso!")
                    st.rerun() # Atualiza a tela
    else:
        st.info("Nenhum cliente disponível para edição.")

# OPERAÇÃO 4: DELETE
elif menu == "4. Excluir Cliente (Delete)":
    st.subheader("❌ Excluir Cliente do Banco")
    
    dados = listar_clientes()
    if dados:
        opcoes_clientes = {f"ID: {c['id']} - {c['nome']} ({c['email']})": c['id'] for c in dados}
        cliente_para_deletar_label = st.selectbox("Escolha o cliente que deseja EXCLUIR permanentemente:", list(opcoes_clientes.keys()))
        id_deletar = opcoes_clientes[cliente_para_deletar_label]
        
        if st.button("🔴 Confirmar Exclusão Definitiva", type="primary"):
            sucesso = deletar_cliente(id_deletar)
            if sucesso:
                st.success(f"Cliente ID {id_deletar} removido do MySQL com sucesso!")
                st.rerun()
    else:
        st.info("Nenhum cliente disponível para exclusão.")

```

---

### 🔍 Explicação Detalhada da Lógica de Prevenção contra SQL Injection

Note que nas funções `cadastrar_cliente` e `atualizar_cliente`, o SQL é escrito com marcadores de posição `%s`:

```python
# FORMA SEGURA (UTILIZADA NO CÓDIGO):
sql = "INSERT INTO clientes (nome, email, telefone) VALUES (%s, %s, %s)"
cursor.execute(sql, (nome, email, telefone))

```

**Por que fazemos isso?**
Se concatenássemos strings diretamente (`f"INSERT INTO clientes VALUES ('{nome}')"`), um usuário mal-intencionado poderia digitar `' ; DROP TABLE clientes; --` no campo Nome. O MySQL executaria a exclusão da tabela inteira. Ao passar a tupla de valores no `cursor.execute()`, o driver do MySQL trata e higieniza automaticamente todo o texto digitado como **dado literal**, impedindo qualquer injeção de comandos SQL destrutivos.

---

### 💻 Como Executar a Aplicação Interativa

1. Garanta que o serviço do MySQL está rodando na sua máquina e que o script SQL DDL do **Módulo 2** foi executado.
2. Abra o terminal na pasta do projeto e ative seu ambiente virtual (`venv`).
3. Execute o comando do Streamlit:

```bash
streamlit run app.py

```

O Streamlit abrirá automaticamente uma janela interativa no seu navegador padrão (`http://localhost:8501`) exibindo o painel do sistema desktop com o CRUD completo pronto para uso!

---

### ✏️ Exercício Prático Dirigido (Para Sala de Aula)

**Desafio:** Crie uma nova função no arquivo `app.py` chamada `cadastrar_pedido(cliente_id, descricao, valor_total)` e adicione uma nova opção no menu da interface do Streamlit para permitir o cadastro de Pedidos vinculados a um Cliente existente.

### ✅ Resposta e Explicação Passo a Passo

#### 1. Função Python de Cadastro do Pedido:

```python
def cadastrar_pedido(cliente_id, descricao, valor_total):
    """Insere um novo pedido vinculado a um cliente_id no MySQL."""
    conexao = obter_conexao()
    if conexao:
        try:
            cursor = conexao.cursor()
            sql = "INSERT INTO pedidos (cliente_id, descricao, valor_total) VALUES (%s, %s, %s)"
            valores = (cliente_id, descricao, valor_total)
            cursor.execute(sql, valores)
            conexao.commit()
            return True
        except Exception as e:
            st.error(f"Erro ao inserir pedido: {e}")
            return False
        finally:
            cursor.close()
            conexao.close()

```

#### 2. Adição da Interface de Cadastro de Pedidos na UI do Streamlit:

```python
# Trecho a ser adicionado na interface do app.py:
elif menu == "5. Cadastrar Pedido":
    st.subheader("🛒 Novo Pedido para Cliente")
    
    clientes = listar_clientes()
    if clientes:
        # Monta a lista de seleção dos clientes cadastrados
        mapa_clientes = {f"ID: {c['id']} - {c['nome']}": c['id'] for c in clientes}
        cliente_escolhido = st.selectbox("Selecione o Cliente Comprador:", list(mapa_clientes.keys()))
        cliente_id_selecionado = mapa_clientes[cliente_escolhido]
        
        with st.form(key="form_pedido"):
            descricao = st.text_input("Descrição do Pedido/Produto:")
            valor_total = st.number_input("Valor Total (R$):", min_value=0.0, step=10.0)
            btn_salvar_pedido = st.form_submit_button("Registrar Pedido no Banco")
            
            if btn_salvar_pedido:
                if descricao and valor_total > 0:
                    sucesso = cadastrar_pedido(cliente_id_selecionado, descricao, valor_total)
                    if sucesso:
                        st.success("Pedido registrado e vinculado ao cliente com sucesso!")
                else:
                    st.warning("Preencha a descrição e um valor válido!")
    else:
        st.warning("Cadastre um cliente primeiro antes de registrar pedidos.")

```

---

## 🎓 CONSIDERAÇÕES FINAIS DO PROFESSOR

Parabéns por concluir este manual integral de **Programação em Novas Tecnologias Desktop com Python e MySQL**!

Nesta disciplina, você percorreu a jornada completa de um desenvolvedor corporativo:

1. Compreendeu a **filosofia e a arquitetura do Python**, utilizando convenções profissionais (PEP 8) e ambientes virtuais (`venv`).
2. Projetou um **Banco de Dados Relacional Normalizado** no MySQL com integridade referencial ($1:N$).
3. Desenvolveu a camada de persistência com **tratamento de exceções e proteção contra SQL Injection**.
4. Construiu uma **Aplicação Integrada Interativa** executando o CRUD completo com atualização em tempo real.

Continue praticando, expandindo as tabelas do banco e criando novas interfaces visuais. O ecossistema Python abre portas para desktop, web e inteligência artificial!