<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/Tkinter-GUI_Desktop-FF6F00?style=for-the-badge&logo=python&logoColor=white" alt="Tkinter"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VSCode"/>
  <img src="https://img.shields.io/badge/Carga_Horária-80h-green?style=for-the-badge" alt="80h"/>
  <img src="https://img.shields.io/badge/Módulo-1-blue?style=for-the-badge" alt="Módulo 1"/>
</p>

<h1 align="center">🐍 Programação em Novas Tecnologias (Python Desktop)</h1>

<p align="center">
  <strong>Curso Técnico Subsequente em Desenvolvimento de Sistemas</strong><br/>
  ETE Pernambuco — 2026.2<br/>
  Profª Luana Cristina
</p>

---

## 📑 Índice

1. [Informações da Disciplina](#-informações-da-disciplina)
2. [Instalação do Ambiente](#-instalação-do-ambiente)
3. [Cronograma Semana a Semana](#-cronograma-semana-a-semana)
4. [Material Teórico e Prático](#-material-teórico-e-prático)
5. [Exercícios Práticos](#-exercícios-práticos)
6. [Projetos Orientados](#-projetos-orientados)
7. [Simulado Preparatório](#-simulado-preparatório)
8. [Prova Regimental](#-prova-regimental)

---

## 📋 Informações da Disciplina

| Item | Detalhe |
|------|---------|
| **Disciplina** | Programação em Novas Tecnologias (Desktop - Python) |
| **Módulo** | 1 |
| **Carga Horária** | 80 horas (4 aulas/semana) |
| **Duração** | 20 semanas |
| **Linguagem** | Python 3.12+ |
| **IDE** | VS Code com extensão Python |
| **GUI** | Tkinter (nativo do Python) |
| **Banco de Dados** | PostgreSQL (via psycopg2) |

### Ementa

Conceitos de Python • Sintaxe e Indentação • Variáveis e Tipos • Operadores • Estruturas Condicionais e de Repetição • Funções (parâmetros e retornos) • Listas e Dicionários • Conexão com Banco de Dados (PostgreSQL) • Interface Gráfica com Tkinter • Projeto Final Desktop

### Competências a Desenvolver

- ✅ Escrever programas Python com boas práticas
- ✅ Aplicar os conceitos de lógica aprendidos em Portugol na sintaxe Python
- ✅ Criar funções reutilizáveis com parâmetros e retornos
- ✅ Manipular estruturas de dados (listas, tuplas, dicionários)
- ✅ Conectar Python ao PostgreSQL para operações CRUD
- ✅ Criar interfaces gráficas desktop com Tkinter
- ✅ Desenvolver um projeto completo integrando GUI + Banco de Dados

> 💡 **Conexão com as outras disciplinas:** Tudo que você aprendeu em Lógica (variáveis, condicionais, loops, vetores) será reescrito em Python. E o banco de dados da disciplina de BD será acessado por código Python. É aqui que tudo se conecta!

---

## 🛠️ Instalação do Ambiente

### 🪟 Windows

#### Passo 1 — Instalar Python 3.12+

1. Acesse: **https://www.python.org/downloads/**
2. Clique no botão amarelo **"Download Python 3.12.x"**
3. Execute o instalador `.exe`

> ⚠️ **PONTO CRÍTICO — Marque esta opção antes de clicar em Install:**
>
> ✅ **"Add python.exe to PATH"** (checkbox na parte inferior da tela!)
>
> Sem isso, o terminal não reconhecerá o comando `python`. Se esquecer, terá que reinstalar ou configurar manualmente.

4. Clique em **"Install Now"** (instalação padrão)
5. Ao terminar, clique em **"Disable path length limit"** (opcional mas recomendado)

**Verificar instalação:**
```bash
# Abra o Prompt de Comando (cmd) ou PowerShell
python --version
# Deve mostrar: Python 3.12.x

pip --version
# Deve mostrar: pip 24.x.x
```

#### Passo 2 — Instalar VS Code

1. Acesse: **https://code.visualstudio.com/**
2. Baixe e instale normalmente
3. Abra o VS Code e instale a extensão **Python** (Microsoft):
   - Clique no ícone de extensões (Ctrl+Shift+X)
   - Pesquise "Python"
   - Instale a primeira (autor: Microsoft)

#### Passo 3 — Instalar biblioteca de conexão com PostgreSQL

```bash
pip install psycopg2-binary
```

> 💡 `psycopg2-binary` é a versão pré-compilada — instala sem precisar de compilador C.

---

### 🍎 macOS

#### Passo 1 — Instalar Python

**Opção A — Via Homebrew (Recomendado):**
```bash
brew install python@3.12
```

**Opção B — Instalador gráfico:**
1. Acesse: **https://www.python.org/downloads/**
2. Baixe o `.pkg` para macOS e instale

**Verificar:**
```bash
python3 --version
# Python 3.12.x

pip3 --version
```

> ⚠️ **No macOS, use `python3` e `pip3`** (sem o "3" pode chamar o Python 2 do sistema).

#### Passo 2 — Instalar VS Code

```bash
brew install --cask visual-studio-code
```

Ou baixe em: https://code.visualstudio.com/

#### Passo 3 — Instalar psycopg2

```bash
pip3 install psycopg2-binary
```

---

### ✅ Teste Rápido — Tudo funcionando?

Crie um arquivo `teste.py` no VS Code e execute:

```python
# teste.py — Verifique se Python está configurado corretamente

print("=" * 40)
print("🐍 Python está funcionando!")
print("=" * 40)

# Testar input/output
nome = input("Qual é o seu nome? ")
print(f"Olá, {nome}! Bem-vindo(a) ao curso de Python!")

# Testar Tkinter (interface gráfica)
import tkinter as tk
root = tk.Tk()
root.title("Teste Tkinter")
label = tk.Label(root, text="✅ Tkinter funcionando!", font=("Arial", 16))
label.pack(padx=20, pady=20)
root.after(3000, root.destroy)  # Fecha após 3 segundos
root.mainloop()

print("\n✅ Todos os testes passaram!")
```

**Para executar:**
```bash
# No terminal do VS Code (Ctrl + `)
python teste.py       # Windows
python3 teste.py      # macOS/Linux
```

Se o programa roda, exibe a mensagem no console E abre uma janelinuha com "Tkinter funcionando!" — ambiente pronto! 🎉

---

## 🗓️ Cronograma Semana a Semana

### BLOCO 1 — FUNDAMENTOS PYTHON (Semanas 1–5)

#### 📅 Semana 1: De Portugol para Python — Primeiros Passos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Por que Python? Mercado, uso, filosofia (Zen of Python) | Motivar e contextualizar |
| 2 | Sintaxe: indentação, comentários, print(), input() | Entender a "cara" do Python |
| 3 | **Comparativo Portugol vs Python** (lado a lado) | Traduzir conhecimento prévio |
| 4 | **Lab:** Reescrever 3 programas de Lógica em Python | Praticar a transição |

#### 📅 Semana 2: Variáveis, Tipos e Operadores

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Variáveis: tipagem dinâmica, nomeação (snake_case) | Declarar variáveis à moda Python |
| 2 | Tipos: int, float, str, bool + type() e conversões | Identificar e converter tipos |
| 3 | Operadores aritméticos, relacionais e lógicos | Calcular e comparar |
| 4 | **Prática:** Calculadora de IMC + conversor de temperatura | Aplicar entrada/processamento/saída |

#### 📅 Semana 3: Estruturas Condicionais

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | `if`, `elif`, `else` — sintaxe com indentação | Implementar decisões |
| 2 | Operador ternário e match/case (Python 3.10+) | Alternativas compactas |
| 3 | **Prática:** Classificador de notas + calculadora de frete | Condicionais reais |
| 4 | **Prática:** Validador de CPF (apenas dígitos, 11 chars) | Validação de dados |

#### 📅 Semana 4: Estruturas de Repetição

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | `while` — sintaxe, contadores, sentinela | Loops condicionais |
| 2 | `for` com `range()` — iteração numérica | Loops com contagem |
| 3 | `for` com listas e strings — iteração sobre coleções | Percorrer dados |
| 4 | **Prática:** Jogo da adivinhação + gerador de tabuada | Combinar loops com input |

#### 📅 Semana 5: Funções

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | `def`: criar funções, parâmetros, return | Modularizar código |
| 2 | Parâmetros opcionais (default), *args, **kwargs | Flexibilizar funções |
| 3 | Escopo de variáveis (local vs global) | Evitar bugs de escopo |
| 4 | **Prática:** Biblioteca de funções úteis (validar_cpf, calcular_media, formatar_moeda) | Criar módulo reutilizável |

---

### BLOCO 2 — ESTRUTURAS DE DADOS (Semanas 6–8)

#### 📅 Semana 6: Listas e Tuplas

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Listas: criação, acesso, métodos (append, remove, sort) | Manipular coleções mutáveis |
| 2 | List comprehension — criação elegante de listas | Escrever código pythonico |
| 3 | Tuplas: imutabilidade e quando usar | Dados que não devem mudar |
| 4 | **Prática:** Sistema de notas com lista (mesmo exercício de Lógica, agora em Python) | Migrar conceito para linguagem real |

#### 📅 Semana 7: Dicionários e Conjuntos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Dicionários: chave-valor, acesso, métodos | Estruturar dados nomeados |
| 2 | Iterando: .keys(), .values(), .items() | Percorrer dicionários |
| 3 | Conjuntos (set): unicidade, operações | Eliminar duplicatas |
| 4 | **Prática:** Agenda de contatos com dicionário | CRUD em memória |

#### 📅 Semana 8: Manipulação de Strings e Arquivos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Strings: f-strings, métodos (split, join, strip, replace) | Formatar e processar texto |
| 2 | Leitura e escrita de arquivos (open, with) | Persistir dados em .txt/.csv |
| 3 | Tratamento de erros: try/except | Lidar com exceções graciosamente |
| 4 | 🎯 **Entrega: Projeto Intermediário** | Sistema CRUD em arquivo |

---

### BLOCO 3 — INTERFACE GRÁFICA COM TKINTER (Semanas 9–13)

#### 📅 Semana 9: Introdução ao Tkinter

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é GUI? Desktop vs Web vs Mobile | Contextualizar interfaces |
| 2 | Tkinter: Tk(), mainloop(), Label, Button | Criar primeira janela |
| 3 | Entry (campo de texto), StringVar, IntVar | Capturar dados do usuário |
| 4 | **Prática:** Calculadora visual básica (2 campos + botão + resultado) | Primeira GUI funcional |

#### 📅 Semana 10: Layout e Widgets

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Gerenciadores: pack(), grid(), place() | Posicionar elementos na tela |
| 2 | Widgets: Frame, LabelFrame, Radiobutton, Checkbutton | Organizar e agrupar |
| 3 | Combobox, Listbox, Scrollbar | Seleção de opções |
| 4 | **Prática:** Formulário de cadastro visual completo | Combinar múltiplos widgets |

#### 📅 Semana 11: Eventos e Messagebox

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | command= (callback de botão), bind() (eventos) | Responder a ações do usuário |
| 2 | messagebox: showinfo, showwarning, askyesno | Diálogos de feedback |
| 3 | Validação de formulários na GUI | Impedir dados inválidos |
| 4 | **Prática:** Formulário com validação + mensagens de erro/sucesso | UX básica |

#### 📅 Semana 12: Treeview (Tabela de Dados)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Treeview: criar tabela, colunas, inserir dados | Exibir dados em grid |
| 2 | Selecionar, editar e excluir da Treeview | Operações CRUD na tabela |
| 3 | Integrar formulário + Treeview (cadastra → aparece na tabela) | Fluxo completo de cadastro |
| 4 | **Prática:** CRUD de Produtos (nome, preço, estoque) em memória | Sistema visual funcional |

#### 📅 Semana 13: Tkinter — Refinamentos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Estilização: ttk, cores, fontes | Melhorar visual |
| 2 | Múltiplas janelas (Toplevel) e abas (Notebook) | Organizar telas complexas |
| 3 | Estrutura de projeto: separar lógica da interface (MVC simplificado) | Código limpo e manutenível |
| 4 | **Prática:** Refatorar CRUD de Produtos com separação de camadas | Boas práticas de arquitetura |

---

### BLOCO 4 — CONEXÃO COM BANCO DE DADOS (Semanas 14–17)

#### 📅 Semana 14: Python + PostgreSQL (psycopg2)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | psycopg2: connect(), cursor(), execute() | Conectar Python ao PostgreSQL |
| 2 | SELECT: buscar dados e exibir no console | Ler dados do banco |
| 3 | INSERT: inserir dados via Python | Gravar dados no banco |
| 4 | **Prática:** Script que lê pacientes e exibe formatado | Primeira integração real |

#### 📅 Semana 15: CRUD Completo via Python

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | UPDATE e DELETE via Python | Completar operações CRUD |
| 2 | Parâmetros seguros (%s placeholders) — prevenir SQL Injection | Segurança obrigatória |
| 3 | Tratamento de erros de conexão (try/except/finally) | Robustez |
| 4 | **Prática:** CRUD completo de pacientes no terminal | Todas operações funcionando |

#### 📅 Semana 16: Integrando GUI + Banco de Dados

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Arquitetura: GUI (Tkinter) → Service → Repository (psycopg2) | Separar responsabilidades |
| 2 | Formulário de cadastro que GRAVA no banco | INSERT via interface |
| 3 | Treeview que CARREGA dados do banco | SELECT via interface |
| 4 | 📝 **Simulado Preparatório** | Preparar para prova |

#### 📅 Semana 17: Avaliação + Início Projeto Final

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1–2 | 📝 **PROVA REGIMENTAL** | Avaliar domínio |
| 3 | Correção + feedback | Identificar gaps |
| 4 | Introdução ao Projeto Final Desktop | Definir escopo |

---

### BLOCO 5 — PROJETO FINAL (Semanas 18–20)

#### 📅 Semana 18: Projeto Final — Planejamento e Base

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Definição do tema + requisitos | Planejar o projeto |
| 2 | Criar banco de dados (reusando conhecimento de BD) | Modelar e implementar schema |
| 3 | Implementar camada de Repository (acesso ao banco) | Funções de CRUD |
| 4 | Implementar camada de Service (regras de negócio) | Lógica da aplicação |

#### 📅 Semana 19: Projeto Final — Interface

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Criar tela principal com menu/abas | Estrutura da GUI |
| 2 | Formulário de cadastro + Treeview conectados ao banco | Fluxo completo |
| 3 | Funcionalidades extras (busca, filtro, relatório) | Diferencial |
| 4 | Testes e ajustes finais | Qualidade |

#### 📅 Semana 20: Apresentação e Encerramento

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1–2 | 🎤 **Apresentação dos Projetos Finais** | Comunicar soluções |
| 3 | Feedback final + autoavaliação | Refletir |
| 4 | Encerramento: de Python para o mundo (web, mobile, data) | Inspirar próximos passos |

---

## 📖 Material Teórico e Prático

### 1️⃣ De Portugol para Python — Tabela Comparativa

> 💡 **Boa notícia:** Você já sabe a LÓGICA! Agora é apenas uma nova SINTAXE. É como saber o conteúdo de uma carta e precisar reescrever em outro idioma.

| Conceito | Portugol | Python |
|----------|----------|--------|
| Exibir na tela | `escreva("Olá")` | `print("Olá")` |
| Ler do teclado | `leia(nome)` | `nome = input("Digite: ")` |
| Declarar inteiro | `inteiro x = 10` | `x = 10` (infere o tipo!) |
| Declarar real | `real nota = 8.5` | `nota = 8.5` |
| Declarar texto | `cadeia nome = "Ana"` | `nome = "Ana"` |
| Se/senão | `se (x > 5) { } senao { }` | `if x > 5:` ... `else:` |
| Para | `para (i=0; i<10; i++)` | `for i in range(10):` |
| Enquanto | `enquanto (x < 10) { }` | `while x < 10:` |
| Função | `funcao inteiro soma(...)` | `def soma(...) -> int:` |
| Vetor | `inteiro v[5]` | `v = [0] * 5` ou `v = []` |

#### Exemplo lado a lado: Calcular média

**Portugol:**
```
programa {
    funcao inicio() {
        real n1, n2, media
        escreva("Nota 1: ")
        leia(n1)
        escreva("Nota 2: ")
        leia(n2)
        media = (n1 + n2) / 2.0
        escreva("Média: ", media)
    }
}
```

**Python:**
```python
# Calcular média de 2 notas
n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))
media = (n1 + n2) / 2
print(f"Média: {media:.1f}")
```

#### 🔍 Diferenças-chave entre Portugol e Python

| Aspecto | Portugol | Python |
|---------|----------|--------|
| Blocos de código | Delimitados por `{ }` | Delimitados por **indentação** (espaços) |
| Tipagem | Explícita (`inteiro x`) | Dinâmica (`x = 10` — Python descobre) |
| Ponto-e-vírgula | Não obrigatório | **Nunca** usa! |
| input() retorna | Tipo declarado | Sempre **string** (precisa converter) |
| Arrays | Tamanho fixo (`int v[5]`) | Listas dinâmicas (`v = []`, cresce sozinha) |

> ⚠️ **O erro #1 de quem vem de Portugol:** Esquecer de converter o `input()`:
> ```python
> # ❌ ERRADO: input retorna string! "5" + "3" = "53" (concatena texto!)
> idade = input("Idade: ")
>
> # ✅ CORRETO: converter para inteiro
> idade = int(input("Idade: "))
> ```

---

### 2️⃣ Variáveis e Tipos em Python

#### Tipagem Dinâmica — O que significa?

Em Python, você **não declara o tipo** — ele é inferido automaticamente pelo valor atribuído.

```python
# Python descobre o tipo sozinho
nome = "Maria"         # str (texto)
idade = 25             # int (inteiro)
altura = 1.68          # float (decimal)
ativo = True           # bool (lógico)

# Verificar o tipo
print(type(nome))      # <class 'str'>
print(type(idade))     # <class 'int'>

# A MESMA variável pode mudar de tipo (mas evite fazer isso!)
x = 10        # int
x = "agora sou texto"  # str — funciona, mas é confuso!
```

#### Conversões de Tipo (Casting)

```python
# String → Número
idade = int("25")         # 25 (inteiro)
preco = float("19.90")    # 19.9 (decimal)

# Número → String
texto = str(100)          # "100"

# CUIDADO com conversões inválidas:
# int("abc")  → ❌ ValueError: invalid literal
# int("3.14") → ❌ ValueError (use float primeiro, depois int)
```

> 💡 **Boa prática:** Sempre converta input() imediatamente:
> ```python
> idade = int(input("Idade: "))      # Garante inteiro
> salario = float(input("Salário: ")) # Garante decimal
> ```

---

### 3️⃣ Funções em Python

#### Por que usar funções?

> Imagine que você precisa validar CPF em 5 lugares diferentes do programa. Sem funções, copia o mesmo código 5 vezes. Se encontrar um bug... precisa corrigir 5 vezes. Com função: corrige 1 vez, todas as 5 chamadas ficam corretas.

```python
# DEFINIR uma função
def calcular_media(notas: list) -> float:
    """Calcula a média aritmética de uma lista de notas."""
    if len(notas) == 0:
        return 0.0
    return sum(notas) / len(notas)


# CHAMAR a função
minhas_notas = [8.5, 7.0, 9.2, 6.8]
resultado = calcular_media(minhas_notas)
print(f"Média: {resultado:.2f}")  # Média: 7.88
```

#### 🔍 Anatomia de uma Função Python

```python
def calcular_desconto(valor: float, percentual: float = 10) -> float:
#│   │                  │              │                │       │
#│   │                  │              │                │       └─ RETORNO: tipo do que devolve
#│   │                  │              │                └─ PARÂMETRO com valor DEFAULT
#│   │                  │              └─ TYPE HINT: sugestão de tipo (não obriga)
#│   │                  └─ PARÂMETRO obrigatório
#│   └─ NOME da função (snake_case!)
#└─ PALAVRA-CHAVE que define função

    """Aplica desconto percentual sobre um valor."""  # DOCSTRING: documentação
    desconto = valor * (percentual / 100)
    valor_final = valor - desconto
    return valor_final  # RETURN: devolve o resultado para quem chamou


# Chamadas:
print(calcular_desconto(200, 15))   # 170.0 (15% de desconto)
print(calcular_desconto(200))        # 180.0 (usa default: 10%)
```

> 💡 **Type Hints** (`: float`, `-> float`) são OPCIONAIS em Python — servem como documentação e ajudam o VS Code a dar autocomplete. O código funciona sem eles, mas é boa prática usar.

---

### 4️⃣ Listas — Os "Vetores Turbinados" do Python

```python
# Criar lista
notas = [8.5, 7.0, 9.2, 6.8, 8.0]

# Acessar (índice começa em 0, igual vetor!)
print(notas[0])    # 8.5 (primeiro)
print(notas[-1])   # 8.0 (último — índice negativo!)

# Adicionar
notas.append(9.5)  # Adiciona no final → [8.5, 7.0, 9.2, 6.8, 8.0, 9.5]

# Remover
notas.remove(6.8)  # Remove pelo valor
del notas[0]       # Remove pela posição

# Tamanho
print(len(notas))  # Quantos elementos tem

# Ordenar
notas.sort()              # Ordem crescente (modifica a lista)
notas.sort(reverse=True)  # Ordem decrescente

# Percorrer
for nota in notas:
    print(f"Nota: {nota}")

# List Comprehension (criar lista filtrada em 1 linha!)
aprovados = [n for n in notas if n >= 7.0]
```

> 💡 **Diferença de vetor (Portugol) para lista (Python):**
> - Vetor: tamanho FIXO, um só tipo → `inteiro v[5]`
> - Lista: tamanho DINÂMICO, pode misturar tipos → `v = [1, "dois", 3.0, True]`

---

### 5️⃣ Conexão com PostgreSQL (psycopg2)

```python
import psycopg2

# ══════════════════════════════════════
# 🔌 CONECTAR AO BANCO
# ══════════════════════════════════════
def conectar():
    """Cria e retorna uma conexão com o PostgreSQL."""
    return psycopg2.connect(
        host="localhost",
        port="5432",
        database="clinica_medica",
        user="postgres",
        password="postgres"
    )


# ══════════════════════════════════════
# 📖 SELECT — Buscar dados
# ══════════════════════════════════════
def listar_pacientes():
    """Retorna todos os pacientes do banco."""
    conn = conectar()
    cursor = conn.cursor()

    cursor.execute("SELECT id, nome, cpf, telefone FROM pacientes ORDER BY nome")
    pacientes = cursor.fetchall()  # Lista de tuplas

    cursor.close()
    conn.close()
    return pacientes


# ══════════════════════════════════════
# ➕ INSERT — Adicionar dados
# ══════════════════════════════════════
def cadastrar_paciente(nome: str, cpf: str, nascimento: str, telefone: str):
    """Insere um novo paciente no banco."""
    conn = conectar()
    cursor = conn.cursor()

    # ⚠️ SEMPRE use %s (placeholder) — NUNCA concatene strings!
    sql = """
        INSERT INTO pacientes (nome, cpf, data_nascimento, telefone)
        VALUES (%s, %s, %s, %s)
    """
    cursor.execute(sql, (nome, cpf, nascimento, telefone))

    conn.commit()  # SALVAR as alterações no banco!
    cursor.close()
    conn.close()
    print(f"✅ Paciente {nome} cadastrado com sucesso!")


# ══════════════════════════════════════
# USO
# ══════════════════════════════════════
cadastrar_paciente("Teste Silva", "00011122233", "1995-06-15", "81999990000")

for paciente in listar_pacientes():
    print(f"ID: {paciente[0]} | Nome: {paciente[1]} | CPF: {paciente[2]}")
```

#### 🔍 Entendendo a Conexão passo a passo

| Etapa | Código | Analogia |
|-------|--------|----------|
| 1. Conectar | `psycopg2.connect(...)` | Discar o telefone do banco |
| 2. Cursor | `conn.cursor()` | Pegar um "lápis" para escrever comandos |
| 3. Executar | `cursor.execute(sql)` | Entregar o comando SQL para o banco |
| 4. Buscar | `cursor.fetchall()` | Receber a resposta (no SELECT) |
| 5. Confirmar | `conn.commit()` | Carimbar "APROVADO" (no INSERT/UPDATE/DELETE) |
| 6. Fechar | `cursor.close()`, `conn.close()` | Desligar o telefone |

> ⚠️ **SEGURANÇA — SQL Injection:**
> ```python
> # ❌ JAMAIS faça isso (vulnerável a ataque!):
> cursor.execute(f"SELECT * FROM pacientes WHERE cpf = '{cpf}'")
>
> # ✅ SEMPRE use placeholders:
> cursor.execute("SELECT * FROM pacientes WHERE cpf = %s", (cpf,))
> ```
> Com placeholders, o psycopg2 escapa caracteres perigosos automaticamente.

---

### 6️⃣ Interface Gráfica com Tkinter — Exemplo Completo

```python
import tkinter as tk
from tkinter import ttk, messagebox

# ══════════════════════════════════════
# 🖥️ CRUD DE PRODUTOS — Interface Desktop
# ══════════════════════════════════════

class AppProdutos:
    def __init__(self, root):
        self.root = root
        self.root.title("📦 Gerenciador de Produtos")
        self.root.geometry("600x400")

        # Lista em memória (depois substituir por banco)
        self.produtos = []

        self._criar_formulario()
        self._criar_tabela()

    def _criar_formulario(self):
        """Cria os campos de entrada."""
        frame = ttk.LabelFrame(self.root, text="Cadastrar Produto", padding=10)
        frame.pack(fill="x", padx=10, pady=5)

        ttk.Label(frame, text="Nome:").grid(row=0, column=0, sticky="w")
        self.entry_nome = ttk.Entry(frame, width=30)
        self.entry_nome.grid(row=0, column=1, padx=5)

        ttk.Label(frame, text="Preço:").grid(row=0, column=2, sticky="w")
        self.entry_preco = ttk.Entry(frame, width=15)
        self.entry_preco.grid(row=0, column=3, padx=5)

        btn = ttk.Button(frame, text="Adicionar", command=self._adicionar)
        btn.grid(row=0, column=4, padx=10)

    def _criar_tabela(self):
        """Cria a Treeview (tabela visual)."""
        frame = ttk.Frame(self.root, padding=10)
        frame.pack(fill="both", expand=True)

        colunas = ("nome", "preco")
        self.tree = ttk.Treeview(frame, columns=colunas, show="headings", height=10)
        self.tree.heading("nome", text="Produto")
        self.tree.heading("preco", text="Preço (R$)")
        self.tree.column("nome", width=300)
        self.tree.column("preco", width=150)
        self.tree.pack(fill="both", expand=True)

    def _adicionar(self):
        """Valida e adiciona produto à tabela."""
        nome = self.entry_nome.get().strip()
        preco_texto = self.entry_preco.get().strip()

        # Validação
        if not nome:
            messagebox.showwarning("Atenção", "Informe o nome do produto!")
            return
        try:
            preco = float(preco_texto)
            if preco <= 0:
                raise ValueError
        except ValueError:
            messagebox.showerror("Erro", "Preço deve ser um número positivo!")
            return

        # Adicionar à tabela visual
        self.tree.insert("", "end", values=(nome, f"{preco:.2f}"))
        self.produtos.append({"nome": nome, "preco": preco})

        # Limpar campos
        self.entry_nome.delete(0, "end")
        self.entry_preco.delete(0, "end")
        self.entry_nome.focus()

        messagebox.showinfo("Sucesso", f"Produto '{nome}' adicionado!")


# Iniciar aplicação
if __name__ == "__main__":
    root = tk.Tk()
    app = AppProdutos(root)
    root.mainloop()
```

#### 🔍 Entendendo a Estrutura da GUI

```
┌───────────────────────────────────────────────────┐
│  📦 Gerenciador de Produtos                   [X] │
├───────────────────────────────────────────────────┤
│  ┌─ Cadastrar Produto ─────────────────────────┐  │
│  │ Nome: [__________]  Preço: [______] [Adicionar] │
│  └─────────────────────────────────────────────┘  │
│                                                   │
│  ┌─────────────────────┬─────────────────────┐   │
│  │     Produto          │    Preço (R$)       │   │
│  ├─────────────────────┼─────────────────────┤   │
│  │ Mouse Gamer         │        89.90        │   │
│  │ Teclado Mecânico    │       249.00        │   │
│  │ Monitor 24"         │       899.90        │   │
│  └─────────────────────┴─────────────────────┘   │
└───────────────────────────────────────────────────┘
```

> 💡 **Padrão de organização:** Cada "tela" é uma classe. Cada botão chama um método. Dados ficam em atributos (`self.produtos`). Isso prepara para conectar com o banco depois.

---

## 📝 Exercícios Práticos

### Módulo A — Fundamentos Python (Semanas 1–5)

#### 🟢 Exercício A1 (Fácil)

**Enunciado:** Crie um programa que leia o nome, idade e salário de uma pessoa. Calcule e exiba: o salário anual (×12), o imposto simplificado (15% se salário > 3000, senão 7.5%), e uma mensagem "Maior de idade" ou "Menor de idade".

<details>
<summary>📋 Ver Gabarito</summary>

```python
nome = input("Nome: ")
idade = int(input("Idade: "))
salario = float(input("Salário mensal: R$ "))

salario_anual = salario * 12

if salario > 3000:
    imposto = salario * 0.15
    faixa = "15%"
else:
    imposto = salario * 0.075
    faixa = "7.5%"

maioridade = "Maior de idade" if idade >= 18 else "Menor de idade"

print(f"\n{'='*40}")
print(f"Nome: {nome}")
print(f"Idade: {idade} anos ({maioridade})")
print(f"Salário mensal: R$ {salario:.2f}")
print(f"Salário anual: R$ {salario_anual:.2f}")
print(f"Imposto ({faixa}): R$ {imposto:.2f}")
print(f"Líquido mensal: R$ {salario - imposto:.2f}")
```

</details>

---

#### 🟡 Exercício A2 (Médio)

**Enunciado:** Crie uma função `analisar_lista(numeros)` que receba uma lista de inteiros e retorne um dicionário com: soma, media, maior, menor, quantidade de pares e quantidade de ímpares. Teste com a lista `[12, 7, 3, 18, 5, 22, 9, 14]`.

<details>
<summary>📋 Ver Gabarito</summary>

```python
def analisar_lista(numeros: list) -> dict:
    """Analisa uma lista de números e retorna estatísticas."""
    if not numeros:
        return {"erro": "Lista vazia!"}

    pares = [n for n in numeros if n % 2 == 0]
    impares = [n for n in numeros if n % 2 != 0]

    return {
        "soma": sum(numeros),
        "media": sum(numeros) / len(numeros),
        "maior": max(numeros),
        "menor": min(numeros),
        "pares": len(pares),
        "impares": len(impares),
        "total": len(numeros)
    }


# Teste
dados = [12, 7, 3, 18, 5, 22, 9, 14]
resultado = analisar_lista(dados)

print(f"📊 Análise de {dados}")
print(f"{'─'*30}")
for chave, valor in resultado.items():
    if isinstance(valor, float):
        print(f"  {chave}: {valor:.2f}")
    else:
        print(f"  {chave}: {valor}")
```

**Conceitos:** Funções com retorno (dict), list comprehension, built-ins (sum, max, min, len).

</details>

---

#### 🔴 Exercício A3 (Desafiador)

**Enunciado:** Crie um sistema de **agenda de contatos** usando dicionários e funções. Funcionalidades:
1. Adicionar contato (nome, telefone, email)
2. Buscar contato por nome (busca parcial, case insensitive)
3. Listar todos os contatos ordenados por nome
4. Remover contato
5. Salvar contatos em arquivo .txt e carregar ao iniciar

<details>
<summary>📋 Ver Gabarito</summary>

```python
import os

ARQUIVO = "contatos.txt"


def carregar_contatos() -> list:
    """Carrega contatos do arquivo."""
    contatos = []
    if os.path.exists(ARQUIVO):
        with open(ARQUIVO, "r", encoding="utf-8") as f:
            for linha in f:
                partes = linha.strip().split("|")
                if len(partes) == 3:
                    contatos.append({
                        "nome": partes[0],
                        "telefone": partes[1],
                        "email": partes[2]
                    })
    return contatos


def salvar_contatos(contatos: list):
    """Salva contatos no arquivo."""
    with open(ARQUIVO, "w", encoding="utf-8") as f:
        for c in contatos:
            f.write(f"{c['nome']}|{c['telefone']}|{c['email']}\n")


def adicionar(contatos: list):
    """Adiciona novo contato."""
    nome = input("Nome: ").strip()
    telefone = input("Telefone: ").strip()
    email = input("Email: ").strip()

    if not nome or not telefone:
        print("❌ Nome e telefone são obrigatórios!")
        return

    contatos.append({"nome": nome, "telefone": telefone, "email": email})
    salvar_contatos(contatos)
    print(f"✅ Contato '{nome}' adicionado!")


def buscar(contatos: list):
    """Busca contatos por nome (parcial, case insensitive)."""
    termo = input("Buscar por nome: ").strip().lower()
    encontrados = [c for c in contatos if termo in c["nome"].lower()]

    if encontrados:
        print(f"\n📋 {len(encontrados)} contato(s) encontrado(s):")
        for c in encontrados:
            print(f"  {c['nome']} | {c['telefone']} | {c['email']}")
    else:
        print("❌ Nenhum contato encontrado.")


def listar(contatos: list):
    """Lista todos os contatos ordenados."""
    if not contatos:
        print("📭 Agenda vazia!")
        return

    ordenados = sorted(contatos, key=lambda c: c["nome"].lower())
    print(f"\n📋 {len(ordenados)} contato(s):")
    print(f"{'Nome':<25} {'Telefone':<15} {'Email'}")
    print("─" * 60)
    for c in ordenados:
        print(f"{c['nome']:<25} {c['telefone']:<15} {c['email']}")


def remover(contatos: list):
    """Remove contato por nome exato."""
    nome = input("Nome exato do contato a remover: ").strip()
    for i, c in enumerate(contatos):
        if c["nome"].lower() == nome.lower():
            contatos.pop(i)
            salvar_contatos(contatos)
            print(f"✅ Contato '{nome}' removido!")
            return
    print("❌ Contato não encontrado.")


def main():
    contatos = carregar_contatos()
    print(f"📱 Agenda carregada ({len(contatos)} contatos)")

    while True:
        print("\n═══════════════════════")
        print("  📱 AGENDA DE CONTATOS")
        print("═══════════════════════")
        print("1 - Adicionar")
        print("2 - Buscar")
        print("3 - Listar todos")
        print("4 - Remover")
        print("5 - Sair")
        opcao = input("Opção: ").strip()

        match opcao:
            case "1": adicionar(contatos)
            case "2": buscar(contatos)
            case "3": listar(contatos)
            case "4": remover(contatos)
            case "5":
                print("👋 Até logo!")
                break
            case _:
                print("❌ Opção inválida!")


if __name__ == "__main__":
    main()
```

</details>

---

### Módulo B — Tkinter + Banco de Dados (Semanas 9–16)

#### 🟡 Exercício B1 (Médio)

**Enunciado:** Crie uma interface Tkinter com um formulário de **login** (usuário + senha). Se as credenciais forem "admin"/"1234", mostre messagebox de sucesso. Senão, mostre erro. Após 3 tentativas erradas, desabilite o botão.

<details>
<summary>📋 Ver Gabarito</summary>

```python
import tkinter as tk
from tkinter import ttk, messagebox


class TelaLogin:
    def __init__(self, root):
        self.root = root
        self.root.title("🔐 Login")
        self.root.geometry("300x200")
        self.tentativas = 0

        ttk.Label(root, text="Usuário:").pack(pady=(20, 5))
        self.entry_user = ttk.Entry(root, width=25)
        self.entry_user.pack()

        ttk.Label(root, text="Senha:").pack(pady=(10, 5))
        self.entry_senha = ttk.Entry(root, width=25, show="*")
        self.entry_senha.pack()

        self.btn_login = ttk.Button(root, text="Entrar", command=self.verificar)
        self.btn_login.pack(pady=20)

        self.lbl_tentativas = ttk.Label(root, text="")
        self.lbl_tentativas.pack()

    def verificar(self):
        usuario = self.entry_user.get().strip()
        senha = self.entry_senha.get().strip()

        if usuario == "admin" and senha == "1234":
            messagebox.showinfo("Sucesso", "✅ Login realizado com sucesso!")
            self.root.destroy()
        else:
            self.tentativas += 1
            restantes = 3 - self.tentativas
            messagebox.showerror("Erro", f"❌ Credenciais inválidas!\nTentativas restantes: {restantes}")
            self.lbl_tentativas.config(text=f"Tentativas: {self.tentativas}/3")

            if self.tentativas >= 3:
                self.btn_login.config(state="disabled")
                messagebox.showwarning("Bloqueado", "🔒 Acesso bloqueado!")


if __name__ == "__main__":
    root = tk.Tk()
    app = TelaLogin(root)
    root.mainloop()
```

</details>

---

#### 🔴 Exercício B2 (Desafiador)

**Enunciado:** Crie uma aplicação Tkinter que se conecte ao PostgreSQL (banco `clinica_medica`) e permita:
1. Listar pacientes em uma Treeview
2. Cadastrar novo paciente via formulário
3. Excluir paciente selecionado (com confirmação)
4. Buscar paciente por nome (filtro na Treeview)

<details>
<summary>📋 Ver Gabarito</summary>

```python
import tkinter as tk
from tkinter import ttk, messagebox
import psycopg2


# ═══ CAMADA DE DADOS ═══
def conectar():
    return psycopg2.connect(
        host="localhost", port="5432",
        database="clinica_medica", user="postgres", password="postgres"
    )

def buscar_pacientes(filtro_nome: str = ""):
    conn = conectar()
    cur = conn.cursor()
    if filtro_nome:
        cur.execute(
            "SELECT id, nome, cpf, telefone FROM pacientes WHERE nome ILIKE %s ORDER BY nome",
            (f"%{filtro_nome}%",)
        )
    else:
        cur.execute("SELECT id, nome, cpf, telefone FROM pacientes ORDER BY nome")
    dados = cur.fetchall()
    cur.close()
    conn.close()
    return dados

def inserir_paciente(nome, cpf, nascimento, telefone):
    conn = conectar()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO pacientes (nome, cpf, data_nascimento, telefone) VALUES (%s, %s, %s, %s)",
        (nome, cpf, nascimento, telefone)
    )
    conn.commit()
    cur.close()
    conn.close()

def excluir_paciente(paciente_id):
    conn = conectar()
    cur = conn.cursor()
    cur.execute("DELETE FROM pacientes WHERE id = %s", (paciente_id,))
    conn.commit()
    cur.close()
    conn.close()


# ═══ INTERFACE ═══
class AppPacientes:
    def __init__(self, root):
        self.root = root
        self.root.title("🏥 Gestão de Pacientes")
        self.root.geometry("700x500")
        self._criar_formulario()
        self._criar_busca()
        self._criar_tabela()
        self._criar_botoes()
        self._atualizar_tabela()

    def _criar_formulario(self):
        frame = ttk.LabelFrame(self.root, text="Novo Paciente", padding=10)
        frame.pack(fill="x", padx=10, pady=5)

        campos = [("Nome:", 25), ("CPF:", 12), ("Nascimento (AAAA-MM-DD):", 12), ("Telefone:", 15)]
        self.entries = {}
        for i, (label, width) in enumerate(campos):
            ttk.Label(frame, text=label).grid(row=0, column=i*2, sticky="w", padx=2)
            entry = ttk.Entry(frame, width=width)
            entry.grid(row=0, column=i*2+1, padx=2)
            self.entries[label] = entry

        ttk.Button(frame, text="💾 Cadastrar", command=self._cadastrar).grid(row=0, column=8, padx=10)

    def _criar_busca(self):
        frame = ttk.Frame(self.root, padding=5)
        frame.pack(fill="x", padx=10)
        ttk.Label(frame, text="🔍 Buscar:").pack(side="left")
        self.entry_busca = ttk.Entry(frame, width=30)
        self.entry_busca.pack(side="left", padx=5)
        ttk.Button(frame, text="Filtrar", command=self._filtrar).pack(side="left")
        ttk.Button(frame, text="Limpar", command=self._atualizar_tabela).pack(side="left", padx=5)

    def _criar_tabela(self):
        frame = ttk.Frame(self.root, padding=10)
        frame.pack(fill="both", expand=True)
        colunas = ("id", "nome", "cpf", "telefone")
        self.tree = ttk.Treeview(frame, columns=colunas, show="headings", height=12)
        for col in colunas:
            self.tree.heading(col, text=col.upper())
        self.tree.column("id", width=50)
        self.tree.column("nome", width=250)
        self.tree.column("cpf", width=120)
        self.tree.column("telefone", width=120)
        self.tree.pack(fill="both", expand=True)

    def _criar_botoes(self):
        frame = ttk.Frame(self.root, padding=5)
        frame.pack(fill="x", padx=10)
        ttk.Button(frame, text="🗑️ Excluir Selecionado", command=self._excluir).pack(side="right")

    def _atualizar_tabela(self, filtro=""):
        for item in self.tree.get_children():
            self.tree.delete(item)
        for paciente in buscar_pacientes(filtro):
            self.tree.insert("", "end", values=paciente)

    def _cadastrar(self):
        valores = {k: e.get().strip() for k, e in self.entries.items()}
        if not all(valores.values()):
            messagebox.showwarning("Atenção", "Preencha todos os campos!")
            return
        try:
            inserir_paciente(valores["Nome:"], valores["CPF:"],
                           valores["Nascimento (AAAA-MM-DD):"], valores["Telefone:"])
            messagebox.showinfo("Sucesso", "✅ Paciente cadastrado!")
            for e in self.entries.values():
                e.delete(0, "end")
            self._atualizar_tabela()
        except Exception as ex:
            messagebox.showerror("Erro", f"❌ {ex}")

    def _filtrar(self):
        termo = self.entry_busca.get().strip()
        self._atualizar_tabela(termo)

    def _excluir(self):
        selecionado = self.tree.selection()
        if not selecionado:
            messagebox.showwarning("Atenção", "Selecione um paciente!")
            return
        item = self.tree.item(selecionado[0])
        nome = item["values"][1]
        if messagebox.askyesno("Confirmar", f"Excluir paciente '{nome}'?"):
            excluir_paciente(item["values"][0])
            self._atualizar_tabela()
            messagebox.showinfo("Sucesso", "✅ Paciente excluído!")


if __name__ == "__main__":
    root = tk.Tk()
    app = AppPacientes(root)
    root.mainloop()
```

</details>

---

## 🚀 Projetos Orientados

### 🎯 Projeto Intermediário (Entrega: Semana 8)

**Tema:** Sistema de **Controle de Estoque** em arquivo (sem banco, sem GUI)

#### Cenário

Uma pequena loja precisa controlar seu estoque. Crie um sistema em Python (terminal) que permita gerenciar produtos, com persistência em arquivo.

#### Requisitos Funcionais

| ID | Requisito | Conceitos Python |
|----|-----------|-----------------|
| RF01 | Cadastrar produto (nome, preço, quantidade) | Dicionários, funções |
| RF02 | Listar produtos formatado | f-strings, for |
| RF03 | Buscar produto por nome | List comprehension, lower() |
| RF04 | Atualizar estoque (entrada/saída) | Validação, condicionais |
| RF05 | Salvar/carregar dados em arquivo .txt ou .csv | open(), read, write |
| RF06 | Menu interativo com while | Loop + match/case |

#### Entregáveis

1. ✅ Código Python funcional (`.py`)
2. ✅ Arquivo de dados gerado pelo programa (`.txt` ou `.csv`)
3. ✅ 3 prints do programa rodando com dados diferentes

#### Rubrica

| Critério | Peso | 10 | 7 | 4 |
|----------|:----:|:--:|:--:|:--:|
| Funcionalidades (6 RFs) | 40% | 5-6 funcionando | 3-4 funcionando | < 3 |
| Uso de funções | 20% | Cada RF em função separada | Algumas funções | Tudo em sequência |
| Persistência em arquivo | 20% | Salva e carrega corretamente | Salva mas não carrega | Sem persistência |
| Código limpo (nomes, comentários) | 10% | Padrão PEP8, comentado | Parcialmente | Sem padrão |
| Tratamento de erros (try/except) | 10% | Entradas inválidas tratadas | Parcial | Sem tratamento |

---

### 🏆 Projeto Final (Entrega: Semanas 18–20)

**Tema:** Aplicação Desktop com **Tkinter + PostgreSQL** — CRUD Completo

**Sugestões de tema:**
- 🏥 Sistema de Agendamento de Consultas (integra com disciplina de BD!)
- 📚 Sistema de Biblioteca (empréstimos, devoluções)
- 🛒 Ponto de Venda (PDV) simplificado
- 🏋️ Sistema de Academia (alunos, planos, mensalidades)
- 🎬 Locadora de Filmes (catálogo, aluguéis)

#### Requisitos Obrigatórios

| # | Requisito | Detalhamento |
|:-:|-----------|-------------|
| 1 | Interface gráfica com Tkinter | Mín. 2 telas/abas |
| 2 | Formulário de cadastro | Entry + Button + validação |
| 3 | Treeview com dados do banco | SELECT + exibição |
| 4 | CRUD completo (Create, Read, Update, Delete) | 4 operações funcionais |
| 5 | Conexão com PostgreSQL (psycopg2) | Não aceitar dados em memória/arquivo |
| 6 | Validação de dados | Campos obrigatórios, tipos corretos |
| 7 | Mensagens de feedback (messagebox) | Sucesso, erro, confirmação |
| 8 | Busca/filtro funcional | Filtrar dados na Treeview |
| 9 | Código organizado (funções/classes) | Separar GUI de lógica |
| 10 | README.md documentando o projeto | Instruções de uso + screenshots |

#### Passo a Passo

```
Semana 18:
  Aula 1 → Escolher tema + definir tabelas no PostgreSQL
  Aula 2 → Criar banco (pode reusar modelo da disciplina de BD!)
  Aula 3 → Camada Repository: funções de CRUD em Python
  Aula 4 → Testar CRUD no terminal antes de criar GUI

Semana 19:
  Aula 1 → Criar janela principal + layout
  Aula 2 → Formulário de cadastro + integrar com Repository
  Aula 3 → Treeview + busca + exclusão
  Aula 4 → Testes finais + README

Semana 20:
  Aulas 1-2 → Apresentação (demonstrar app rodando + explicar código)
  Aula 3 → Feedback
  Aula 4 → Encerramento
```

#### Rubrica do Projeto Final

| Critério | Peso | 10 | 7 | 4 |
|----------|:----:|:--:|:--:|:--:|
| GUI funcional (Tkinter) | 25% | Interface completa e intuitiva | Funcional com falhas visuais | Não abre ou trava |
| CRUD com PostgreSQL | 30% | 4 operações corretas e seguras | 2-3 operações | Não conecta ao banco |
| Validação e UX | 15% | Validações + mensagens claras | Validação parcial | Sem validação |
| Organização do código | 15% | Classes/funções, nomes claros, PEP8 | Parcialmente organizado | Código "macarrão" |
| Apresentação + README | 15% | Demo ao vivo + documentação clara | Apresentação básica | Não demonstra |

---

## 📋 Simulado Preparatório

> 📅 **Aplicação:** Semana 16, Aula 4
> ⏱️ **Duração:** 50 minutos
> 📊 **Composição:** 5 objetivas + 2 práticas

---

### Questões Objetivas (0,5 ponto cada = 2,5 pontos)

**Q1.** Qual o resultado de `print(type(input("Valor: ")))` quando o usuário digita `42`?

- a) `<class 'int'>`
- b) **`<class 'str'>`** ✅
- c) `<class 'float'>`
- d) `<class 'NoneType'>`
- e) Erro de execução

> 💡 `input()` SEMPRE retorna string, independente do que o usuário digitar. Precisa converter explicitamente com `int()` ou `float()`.

---

**Q2.** O que acontece ao executar: `lista = [1, 2, 3]; lista.append([4, 5])`?

- a) `[1, 2, 3, 4, 5]`
- b) **`[1, 2, 3, [4, 5]]`** ✅
- c) Erro: append aceita apenas um valor
- d) `[1, 2, 3, 4, 5, [4, 5]]`
- e) `[[1, 2, 3], [4, 5]]`

> 💡 `append()` adiciona O ITEM inteiro. Para "achatar" a lista, use `extend()`: `lista.extend([4, 5])` → `[1, 2, 3, 4, 5]`.

---

**Q3.** Qual a forma SEGURA de inserir dados no PostgreSQL via psycopg2?

- a) `cursor.execute(f"INSERT INTO t VALUES ('{nome}')")`
- b) `cursor.execute("INSERT INTO t VALUES (" + nome + ")")`
- c) **`cursor.execute("INSERT INTO t VALUES (%s)", (nome,))`** ✅
- d) `cursor.execute("INSERT INTO t VALUES (?)", [nome])`
- e) Todas estão corretas

> 💡 Usar `%s` com tupla de parâmetros previne **SQL Injection**. As alternativas A e B são vulneráveis a ataques!

---

**Q4.** Em Tkinter, qual widget é usado para exibir dados em formato de tabela (linhas e colunas)?

- a) Listbox
- b) Canvas
- c) Text
- d) **Treeview** ✅
- e) Frame

---

**Q5.** O que a função abaixo retorna quando chamada com `dobrar(5)`?

```python
def dobrar(x):
    resultado = x * 2
    print(resultado)
```

- a) 10
- b) `resultado`
- c) **None** ✅
- d) Erro: variável não definida
- e) 5

> 💡 A função usa `print()` (exibe na tela) mas NÃO tem `return`. Sem return, toda função Python retorna `None` implicitamente. `print ≠ return`!

---

### Questões Práticas (3,75 pontos cada = 7,5 pontos)

**QP1.** Crie uma função `validar_cadastro(nome, email, idade)` que:
- Retorne `True` se todos os dados forem válidos
- Nome: mínimo 3 caracteres, não pode ser vazio
- Email: deve conter "@" e "."
- Idade: entre 0 e 150

Teste com 3 chamadas: uma válida, uma com email inválido, uma com idade fora do range.

<details>
<summary>📋 Ver Gabarito</summary>

```python
def validar_cadastro(nome: str, email: str, idade: int) -> tuple[bool, str]:
    """Valida dados de cadastro. Retorna (valido, mensagem)."""
    
    # Validar nome
    if not nome or len(nome.strip()) < 3:
        return False, "Nome deve ter no mínimo 3 caracteres"
    
    # Validar email
    if "@" not in email or "." not in email:
        return False, "Email inválido (deve conter @ e .)"
    
    # Validar idade
    if not isinstance(idade, int) or idade < 0 or idade > 150:
        return False, "Idade deve ser um inteiro entre 0 e 150"
    
    return True, "✅ Cadastro válido!"


# Testes
testes = [
    ("Maria Silva", "maria@email.com", 25),    # Válido
    ("João", "joao-sem-arroba.com", 30),        # Email inválido
    ("Ana", "ana@email.com", 200),              # Idade fora do range
]

for nome, email, idade in testes:
    valido, msg = validar_cadastro(nome, email, idade)
    status = "✅" if valido else "❌"
    print(f"{status} ({nome}, {email}, {idade}) → {msg}")
```

**Saída:**
```
✅ (Maria Silva, maria@email.com, 25) → ✅ Cadastro válido!
❌ (João, joao-sem-arroba.com, 30) → Email inválido (deve conter @ e .)
❌ (Ana, ana@email.com, 200) → Idade deve ser um inteiro entre 0 e 150
```

</details>

---

**QP2.** Escreva um programa Python que se conecte ao PostgreSQL (banco `clinica_medica`) e:
1. Exiba todos os médicos ativos com sua especialidade (JOIN)
2. Mostre a quantidade de consultas por status
3. Insira um novo paciente recebido via `input()` — com tratamento de erro para CPF duplicado

<details>
<summary>📋 Ver Gabarito</summary>

```python
import psycopg2


def conectar():
    return psycopg2.connect(
        host="localhost", port="5432",
        database="clinica_medica", user="postgres", password="postgres"
    )


def listar_medicos():
    """1. Médicos ativos com especialidade."""
    conn = conectar()
    cur = conn.cursor()
    cur.execute("""
        SELECT m.nome, m.crm, e.nome AS especialidade
        FROM medicos m
        JOIN especialidades e ON m.especialidade_id = e.id
        WHERE m.ativo = TRUE
        ORDER BY m.nome
    """)
    medicos = cur.fetchall()
    cur.close()
    conn.close()

    print("\n🩺 MÉDICOS ATIVOS:")
    print(f"{'Nome':<25} {'CRM':<15} {'Especialidade'}")
    print("─" * 55)
    for nome, crm, esp in medicos:
        print(f"{nome:<25} {crm:<15} {esp}")


def consultas_por_status():
    """2. Quantidade de consultas por status."""
    conn = conectar()
    cur = conn.cursor()
    cur.execute("""
        SELECT status, COUNT(*) as total
        FROM consultas
        GROUP BY status
        ORDER BY total DESC
    """)
    resultados = cur.fetchall()
    cur.close()
    conn.close()

    print("\n📊 CONSULTAS POR STATUS:")
    for status, total in resultados:
        print(f"  {status:<15} → {total} consulta(s)")


def cadastrar_paciente():
    """3. Inserir paciente com tratamento de erro."""
    print("\n➕ CADASTRAR PACIENTE:")
    nome = input("  Nome: ").strip()
    cpf = input("  CPF (11 dígitos): ").strip()
    nascimento = input("  Nascimento (AAAA-MM-DD): ").strip()
    telefone = input("  Telefone: ").strip()

    conn = conectar()
    cur = conn.cursor()
    try:
        cur.execute(
            "INSERT INTO pacientes (nome, cpf, data_nascimento, telefone) VALUES (%s,%s,%s,%s)",
            (nome, cpf, nascimento, telefone)
        )
        conn.commit()
        print(f"  ✅ Paciente '{nome}' cadastrado com sucesso!")
    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        print(f"  ❌ ERRO: CPF '{cpf}' já está cadastrado!")
    except psycopg2.Error as e:
        conn.rollback()
        print(f"  ❌ ERRO: {e}")
    finally:
        cur.close()
        conn.close()


# Executar
if __name__ == "__main__":
    listar_medicos()
    consultas_por_status()
    cadastrar_paciente()
```

**Critérios:** 1,25 pt médicos com JOIN | 1,0 pt agrupamento | 1,5 pt insert com try/except UniqueViolation

</details>

---

## 📝 Prova Regimental

> 📅 **Aplicação:** Semana 17, Aulas 1–2
> ⏱️ **Duração:** 100 minutos
> 📊 **Valor:** 10,0 pontos
> 📌 **Material:** Consulta fechada

---

### PARTE 1 — Questões Objetivas (2,5 pontos | 0,5 cada)

**1.** Em Python, qual a diferença entre `=` e `==`?

- a) Não há diferença
- b) **`=` é atribuição (guardar valor); `==` é comparação (verificar igualdade)** ✅
- c) `==` é atribuição; `=` é comparação
- d) `=` funciona com números; `==` com texto
- e) `==` é usado apenas em loops

---

**2.** Qual o resultado de `[x**2 for x in range(5)]`?

- a) `[1, 4, 9, 16, 25]`
- b) **`[0, 1, 4, 9, 16]`** ✅
- c) `[0, 2, 4, 6, 8]`
- d) `[1, 2, 3, 4, 5]`
- e) Erro de sintaxe

> `range(5)` = 0,1,2,3,4. Cada um elevado ao quadrado: 0,1,4,9,16.

---

**3.** Por que é obrigatório chamar `conn.commit()` após um INSERT no psycopg2?

- a) Para fechar a conexão
- b) Para verificar se o SQL está correto
- c) **Para confirmar a transação e salvar as alterações permanentemente no banco** ✅
- d) Para liberar memória
- e) Não é obrigatório, é apenas boa prática

> Sem `commit()`, o INSERT fica em uma transação pendente e é descartado quando a conexão fecha.

---

**4.** Em Tkinter, o que `self.entry_nome.get()` retorna?

- a) O widget Entry inteiro
- b) O nome da variável
- c) **O texto digitado pelo usuário naquele campo** ✅
- d) A posição do cursor
- e) None

---

**5.** O que acontece se uma função Python não tem `return`?

- a) Erro de compilação
- b) Retorna 0
- c) Retorna string vazia
- d) **Retorna None** ✅
- e) O programa trava

---

### PARTE 2 — Questões Práticas (7,5 pontos)

---

**6.** (2,5 pts) Escreva uma função `processar_vendas(vendas: list[dict]) -> dict` que receba uma lista de dicionários no formato `{"produto": str, "valor": float, "quantidade": int}` e retorne um dicionário com:
- `total_vendas`: soma de (valor × quantidade) de todos os itens
- `produto_mais_vendido`: nome do produto com maior quantidade total
- `ticket_medio`: total_vendas / número de itens vendidos

Teste com pelo menos 4 vendas.

<details>
<summary>📋 Ver Gabarito</summary>

```python
def processar_vendas(vendas: list[dict]) -> dict:
    """Processa lista de vendas e retorna estatísticas."""
    if not vendas:
        return {"erro": "Nenhuma venda informada"}

    total_vendas = 0.0
    contagem_produtos = {}  # produto → quantidade total
    total_itens = 0

    for venda in vendas:
        subtotal = venda["valor"] * venda["quantidade"]
        total_vendas += subtotal
        total_itens += venda["quantidade"]

        produto = venda["produto"]
        contagem_produtos[produto] = contagem_produtos.get(produto, 0) + venda["quantidade"]

    # Produto mais vendido (maior quantidade)
    mais_vendido = max(contagem_produtos, key=contagem_produtos.get)

    return {
        "total_vendas": round(total_vendas, 2),
        "produto_mais_vendido": mais_vendido,
        "quantidade_mais_vendido": contagem_produtos[mais_vendido],
        "ticket_medio": round(total_vendas / total_itens, 2)
    }


# Teste
vendas = [
    {"produto": "Mouse", "valor": 89.90, "quantidade": 5},
    {"produto": "Teclado", "valor": 159.90, "quantidade": 3},
    {"produto": "Mouse", "valor": 89.90, "quantidade": 2},
    {"produto": "Monitor", "valor": 899.90, "quantidade": 1},
]

resultado = processar_vendas(vendas)
print("📊 Relatório de Vendas:")
for chave, valor in resultado.items():
    print(f"  {chave}: {valor}")
```

**Critérios:** 1,0 pt lógica correta (total) | 0,75 pt mais vendido (dict acumulador) | 0,75 pt ticket médio

</details>

---

**7.** (2,5 pts) Escreva um programa que:
1. Conecte ao PostgreSQL (banco `clinica_medica`)
2. Execute uma query que retorne: nome do médico, especialidade e total de consultas realizadas no mês atual
3. Trate o erro de conexão (servidor off) com try/except
4. Exiba os resultados formatados com f-strings

<details>
<summary>📋 Ver Gabarito</summary>

```python
import psycopg2
from datetime import datetime


def relatorio_mensal():
    """Gera relatório de consultas do mês atual por médico."""
    mes_atual = datetime.now().strftime("%Y-%m")

    try:
        conn = psycopg2.connect(
            host="localhost", port="5432",
            database="clinica_medica", user="postgres", password="postgres"
        )
    except psycopg2.OperationalError:
        print("❌ ERRO: Não foi possível conectar ao PostgreSQL!")
        print("   Verifique se o serviço está rodando.")
        return

    try:
        cur = conn.cursor()
        cur.execute("""
            SELECT
                m.nome,
                e.nome AS especialidade,
                COUNT(c.id) AS total_consultas
            FROM medicos m
            JOIN especialidades e ON m.especialidade_id = e.id
            LEFT JOIN consultas c ON m.id = c.medico_id
                AND c.status = 'realizada'
                AND TO_CHAR(c.data_hora, 'YYYY-MM') = %s
            GROUP BY m.id, m.nome, e.nome
            ORDER BY total_consultas DESC
        """, (mes_atual,))

        resultados = cur.fetchall()

        print(f"\n📊 RELATÓRIO - {mes_atual}")
        print(f"{'Médico':<25} {'Especialidade':<20} {'Consultas'}")
        print("─" * 55)

        total_geral = 0
        for nome, esp, total in resultados:
            print(f"{nome:<25} {esp:<20} {total}")
            total_geral += total

        print("─" * 55)
        print(f"{'TOTAL':<45} {total_geral}")

    except psycopg2.Error as e:
        print(f"❌ Erro na query: {e}")
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    relatorio_mensal()
```

**Critérios:** 0,75 pt conexão com try/except | 1,0 pt query com JOIN + GROUP BY | 0,75 pt formatação

</details>

---

**8.** (2,5 pts) Descreva (em pseudocódigo ou Python comentado) a **arquitetura** de uma aplicação Desktop com Tkinter + PostgreSQL para um sistema de "Cadastro de Livros". Inclua:
- Separação em camadas (GUI / Service / Repository)
- Quais funções cada camada teria
- O fluxo completo de quando o usuário clica "Salvar" no formulário

<details>
<summary>📋 Ver Gabarito</summary>

```python
# ══════════════════════════════════════════════════════════════
# ARQUITETURA EM CAMADAS — CADASTRO DE LIVROS
# ══════════════════════════════════════════════════════════════

# ═══ CAMADA 1: REPOSITORY (acesso ao banco) ═══
# Arquivo: repository.py
# Responsabilidade: SOMENTE SQL e conexão
#
# def conectar() -> connection
# def inserir_livro(titulo, autor, isbn, ano, preco) -> int  (retorna ID)
# def listar_livros(filtro="") -> list[tuple]
# def buscar_livro_por_id(livro_id) -> tuple
# def atualizar_livro(livro_id, titulo, autor, isbn, ano, preco) -> bool
# def excluir_livro(livro_id) -> bool


# ═══ CAMADA 2: SERVICE (regras de negócio) ═══
# Arquivo: service.py
# Responsabilidade: validações, regras, orquestração
#
# def cadastrar_livro(titulo, autor, isbn, ano, preco) -> tuple[bool, str]
#   - Valida: título não vazio, ISBN com 13 dígitos, preço > 0, ano válido
#   - Se válido: chama repository.inserir_livro()
#   - Retorna: (True, "Sucesso") ou (False, "Mensagem de erro")
#
# def obter_livros(busca="") -> list[dict]
#   - Chama repository.listar_livros()
#   - Converte tuplas em dicionários
#
# def remover_livro(livro_id) -> tuple[bool, str]
#   - Verifica se livro existe
#   - Chama repository.excluir_livro()


# ═══ CAMADA 3: GUI (interface gráfica) ═══
# Arquivo: app.py
# Responsabilidade: SOMENTE exibição e captura de dados
#
# class AppLivros:
#   def __init__(self, root):
#       - Cria formulário (Entry: titulo, autor, isbn, ano, preco)
#       - Cria Treeview (tabela de livros)
#       - Cria botões (Salvar, Excluir, Buscar)
#
#   def _salvar(self):
#       1. Captura dados: titulo = self.entry_titulo.get()
#       2. Chama service: sucesso, msg = service.cadastrar_livro(titulo, ...)
#       3. Se sucesso: messagebox.showinfo() + limpa campos + atualiza tabela
#       4. Se erro: messagebox.showerror(msg)
#
#   def _atualizar_tabela(self):
#       1. Limpa Treeview
#       2. Chama service: livros = service.obter_livros()
#       3. Para cada livro: tree.insert(...)


# ═══ FLUXO COMPLETO: Usuário clica "Salvar" ═══
#
# [Usuário preenche formulário e clica "Salvar"]
#     │
#     ▼
# GUI: _salvar() captura dados dos Entry widgets
#     │
#     ▼
# SERVICE: cadastrar_livro() valida os dados
#     │
#     ├── Dados inválidos → retorna (False, "Erro: ISBN inválido")
#     │                         │
#     │                         ▼
#     │                    GUI: messagebox.showerror("Erro: ISBN inválido")
#     │
#     └── Dados válidos → chama REPOSITORY
#                             │
#                             ▼
#                    REPOSITORY: inserir_livro() executa INSERT no PostgreSQL
#                             │
#                             ├── commit() → sucesso → retorna ID
#                             │                           │
#                             │                           ▼
#                             │                  SERVICE: retorna (True, "Sucesso")
#                             │                           │
#                             │                           ▼
#                             │                  GUI: messagebox.showinfo()
#                             │                       + limpa campos
#                             │                       + _atualizar_tabela()
#                             │
#                             └── exceção (CPF duplicado, etc)
#                                            │
#                                            ▼
#                                   SERVICE: retorna (False, "ISBN já existe")
#                                            │
#                                            ▼
#                                   GUI: messagebox.showerror()
```

**Critérios:**
- 0,75 pt por camada descrita corretamente (×3 = 2,25)
- 0,25 pt pelo fluxo "clique Salvar" completo

</details>

---

## ✅ Critérios Gerais de Correção

| Aspecto | Desconto |
|---------|----------|
| Erro de indentação (Python é sensível!) | -0,5 |
| Falta de conversão de input() | -0,25 |
| SQL sem placeholder (%s) — concatenação de strings | -0,5 |
| Falta de conn.commit() em INSERT/UPDATE/DELETE | -0,5 |
| Código funcional mas com nome de variável ruim | -0,1 |
| Solução alternativa válida | Aceita integralmente |
| Import correto de bibliotecas | Obrigatório (sem import = -0,25) |

---

## 🚨 Plano de Contingência Pedagógica (Aulas Práticas sem Laboratório)

> ⚠️ **Quando usar este plano:** Laboratório indisponível (manutenção, queda de energia, falta de internet, máquinas com defeito). O objetivo é manter o aprendizado ativo e produtivo mesmo sem computadores.

### 🔀 Fluxograma de Decisão Rápida

```
┌─────────────────────────────────────────────┐
│  🚨 LABORATÓRIO INDISPONÍVEL — E AGORA?     │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │ Alunos têm smartphones com  │
        │ internet disponível?        │
        └──────────────┬──────────────┘
               ┌───────┴───────┐
               │               │
            SIM ▼           NÃO ▼
  ┌──────────────────┐  ┌──────────────────────────┐
  │ ▶ OPÇÃO A: BYOD  │  │ Professora tem materiais │
  │ (Smartphone)     │  │ impressos / quadro?      │
  └──────────────────┘  └────────────┬─────────────┘
                              ┌──────┴──────┐
                              │             │
                           SIM ▼          NÃO ▼
                 ┌───────────────────┐  ┌──────────────────┐
                 │ ▶ OPÇÃO B:        │  │ ▶ OPÇÃO C:       │
                 │ DESPLUGADA        │  │ ESTUDO DE CASO   │
                 │ (Unplugged)       │  │ / PBL            │
                 └───────────────────┘  └──────────────────┘
```

---

### 📱 Opção A: BYOD (Bring Your Own Device — Smartphone)

> 💡 **Conceito:** Alunos usam seus próprios celulares como ambiente de programação Python.

#### Ferramentas Mobile para Python

| Ferramenta | Sistema | Link | Melhor Para |
|-----------|---------|------|-------------|
| **Pydroid 3** | Android | Google Play | IDE completa com suporte a bibliotecas |
| **Pythonista** | iOS | App Store | IDE nativa para iPhone/iPad |
| **Replit Mobile** | Android/iOS | App ou navegador | Ambiente cloud com colaboração |
| **Google Colab** | Qualquer | navegador mobile | Notebooks interativos, zero instalação |

#### Atividades Adaptadas para Smartphone

| Atividade | Duração | Ferramenta | Semanas Aplicáveis |
|-----------|---------|------------|-------------------|
| Mini-exercícios de lógica (if/else, loops) | 30 min | Pydroid 3 / Replit | 3-5 |
| Desafios de list comprehension | 20 min | Google Colab | 6-7 |
| Criar funções e testar no console | 40 min | Replit Mobile | 5 |
| Quiz interativo de Python (Kahoot) | 20 min | Navegador | 1-8 |
| Leitura e análise de código no GitHub Mobile | 30 min | GitHub App | 9-13 |

#### 📋 Roteiro para a Professora (Opção A)

```
1. [5 min]  Anunciar atividade BYOD — alunos abrem ferramenta no celular
2. [5 min]  Projetar QR Code com link direto para o exercício/Colab
3. [30 min] Atividade prática guiada — professora circula e auxilia
4. [10 min] Alunos compartilham soluções (telão ou ditam código)
5. [5 min]  Fechamento: conceitos-chave revisados no quadro
```

#### 📋 Guia do Aluno (Opção A)

> 🎯 **Hoje a aula é no celular!** Abra a ferramenta indicada pela professora e siga o roteiro. Trabalhe em dupla se preferir — um digita, outro revisa.

---

### 📝 Opção B: Atividades Desplugadas (Unplugged)

> 💡 **Conceito:** Aprender programação sem computador, usando papel, caneta e dinâmicas corporais.

#### Atividade B1 — "Teste de Mesa Python" 🟢

| Item | Detalhe |
|------|---------|
| **Objetivo** | Executar código Python mentalmente, rastreando variáveis |
| **Materiais** | Folha impressa com código + tabela de variáveis em branco |
| **Duração** | 30–40 minutos |
| **Semanas** | 2-5 (fundamentos) |

**Roteiro da Professora:**
1. Distribuir folha com 3 trechos de código Python (crescente dificuldade)
2. Alunos preenchem tabela de variáveis linha a linha
3. Corrigir coletivamente no quadro
4. Discutir onde a maioria errou

**Guia do Aluno:**
> 🎯 Você é o computador! Execute cada linha mentalmente e anote o valor de CADA variável após cada passo. Sem pular linhas!

**Exemplo de exercício:**
```python
x = 10
y = 3
x = x + y      # x = ? , y = ?
y = x - y      # x = ? , y = ?
x = x - y      # x = ? , y = ?
print(x, y)    # Saída: ?
```

| Linha | x | y |
|-------|---|---|
| 1 | 10 | — |
| 2 | 10 | 3 |
| 3 | 13 | 3 |
| 4 | 13 | 10 |
| 5 | 3 | 10 |

---

#### Atividade B2 — "Code Review Humano" 🟡

| Item | Detalhe |
|------|---------|
| **Objetivo** | Identificar e corrigir bugs em código Python impresso |
| **Materiais** | Código impresso com bugs intencionais + caneta vermelha |
| **Duração** | 30 minutos |
| **Semanas** | 3-8 |

**Roteiro da Professora:**
1. Imprimir 3 programas Python com 3-5 bugs cada (indentação, tipo, lógica)
2. Alunos circulam erros em caneta vermelha e escrevem correção ao lado
3. Duplas trocam folhas e validam as correções do colega
4. Correção coletiva no quadro

**Guia do Aluno:**
> 🎯 Você é o revisor de código! Encontre TODOS os bugs, circule em vermelho e escreva a correção. Depois, confira com seu colega.

---

#### Atividade B3 — "Pseudocódigo → Python" 🟢

| Item | Detalhe |
|------|---------|
| **Objetivo** | Traduzir problemas do dia a dia em código Python no caderno |
| **Materiais** | Caderno + quadro com enunciados |
| **Duração** | 40 minutos |
| **Semanas** | 1-5 |

**Roteiro da Professora:**
1. Ditar/projetar 3 problemas em linguagem natural
2. Alunos escrevem solução em Python no caderno
3. 2-3 voluntários vão ao quadro escrever suas soluções
4. Turma compara abordagens diferentes

---

#### Atividade B4 — "Dinâmica da Função" 🟡

| Item | Detalhe |
|------|---------|
| **Objetivo** | Entender parâmetros, processamento e retorno de funções |
| **Materiais** | Cartões de papel (parâmetros e retornos), crachás |
| **Duração** | 25 minutos |
| **Semanas** | 5 |

**Roteiro da Professora:**
1. Cada aluno recebe crachá com nome de função (ex: `calcular_media`, `validar_cpf`)
2. Professora entrega cartão com parâmetros de entrada
3. Aluno "processa" mentalmente e devolve cartão com resultado
4. Turma valida se o retorno está correto

**Guia do Aluno:**
> 🎯 Você É uma função! Receba os parâmetros no cartão, faça o processamento mental e devolva o resultado escrito.

---

#### Atividade B5 — "Debug em Dupla" 🟡

| Item | Detalhe |
|------|---------|
| **Objetivo** | Praticar leitura de código e rastreamento de variáveis em voz alta |
| **Materiais** | Código impresso (1 cópia por dupla) + folha de anotação |
| **Duração** | 30 minutos |
| **Semanas** | 3-8 |

**Roteiro da Professora:**
1. Formar duplas — Aluno A lê código em voz alta, Aluno B anota variáveis
2. A cada 5 linhas, trocam os papéis
3. Ao final, comparam resultado com gabarito
4. Discutir onde houve divergência

---

#### Atividade B6 — "Dicionário/Lista Humana" 🟡

| Item | Detalhe |
|------|---------|
| **Objetivo** | Representar fisicamente estruturas de dados Python |
| **Materiais** | Cartões de papel, barbante, fita adesiva |
| **Duração** | 25 minutos |
| **Semanas** | 6-7 |

**Roteiro da Professora:**
1. Cada aluno segura um cartão = um elemento da lista/dicionário
2. Para LISTA: alunos ficam em fila (índice = posição)
3. Para DICIONÁRIO: alunos ficam em pares (chave:valor)
4. Professora dá comandos: `.append()`, `.remove()`, `.pop()`, `del`
5. Alunos se movem fisicamente conforme o comando

**Guia do Aluno:**
> 🎯 Você é um ELEMENTO de uma estrutura de dados! Siga as instruções da professora — quando ela disser `lista.append("novo")`, um colega entra no final da fila.

---

### 💼 Opção C: Estudo de Caso / PBL (Problem-Based Learning)

> 💡 **Conceito:** Aprender Python analisando como grandes empresas usam a linguagem para resolver problemas reais.

#### Caso 1 — "Como Python é usado na Netflix" (Recomendação)

| Item | Detalhe |
|------|---------|
| **Tema** | Algoritmos de recomendação baseados em dados do usuário |
| **Conexão** | Listas, dicionários, funções, lógica condicional |
| **Duração** | 50 minutos |
| **Formato** | Leitura + debate + esboço de solução no caderno |

**Roteiro:**
1. [10 min] Professora apresenta: "A Netflix usa Python para recomendar filmes"
2. [15 min] Turma discute: Que DADOS a Netflix coleta? Como classificar preferências?
3. [20 min] Em trios, esboçar no caderno: pseudocódigo de um mini-recomendador
4. [5 min] Compartilhar soluções

---

#### Caso 2 — "Automação com Python no Banco Itaú" (Scripts)

| Item | Detalhe |
|------|---------|
| **Tema** | Scripts Python para automação de tarefas repetitivas |
| **Conexão** | Funções, loops, manipulação de arquivos |
| **Duração** | 50 minutos |
| **Formato** | Apresentação + brainstorm + prototipação em papel |

**Roteiro:**
1. [10 min] Contexto: O Itaú automatizou 1.500 processos manuais com Python
2. [15 min] Brainstorm: "Que tarefas repetitivas no SEU dia poderiam ser automatizadas?"
3. [20 min] Cada grupo esboça no caderno a lógica de automação de 1 tarefa
4. [5 min] Apresentar e votar na melhor ideia

---

#### Caso 3 — "Bug que custou $440 milhões — Knight Capital" (Testes)

| Item | Detalhe |
|------|---------|
| **Tema** | A importância de testes e code review em código de produção |
| **Conexão** | Boas práticas, try/except, validação de dados |
| **Duração** | 50 minutos |
| **Formato** | Narrativa + análise + debate ético |

**Roteiro:**
1. [15 min] Professora narra o caso: Um código Python/C++ com deploy errado perdeu $440M em 45 minutos
2. [15 min] Debate: "O que poderia ter evitado?" (testes, code review, deploy gradual)
3. [15 min] Alunos escrevem no caderno: 5 "regras de ouro" para código seguro
4. [5 min] Compartilhar as melhores regras

---

### 📊 Rubrica de Avaliação Adaptada (Aulas de Contingência)

| Critério | Peso | 10 (Excelente) | 7 (Bom) | 4 (Insuficiente) |
|----------|:----:|:--------------:|:--------:|:-----------------:|
| **Participação ativa** | 30% | Engajou em todas as etapas, contribuiu com ideias | Participou mas com pouca iniciativa | Ficou passivo/não contribuiu |
| **Correção técnica** | 30% | Código/raciocínio sem erros lógicos | Pequenos erros que não comprometem a lógica | Erros graves de compreensão |
| **Trabalho em equipe** | 20% | Colaborou ativamente, ouviu e contribuiu | Participou quando solicitado | Não interagiu com o grupo |
| **Registro escrito** | 20% | Caderno organizado com resolução completa | Resolução parcial mas legível | Sem registro ou ilegível |

> 🎯 **Nota:** Atividades de contingência têm o MESMO PESO que aulas regulares no conceito de participação.

---

### 🖨️ Kit de Materiais para Impressão

> 💡 **Dica:** Mantenha estes materiais impressos na pasta da disciplina para uso imediato quando necessário.

| Material | Quantidade | Uso |
|----------|-----------|-----|
| Trechos de código Python com bugs (5 exercícios) | 20 cópias | Atividade B2 — Code Review |
| Tabelas de Teste de Mesa em branco (template) | 40 cópias | Atividade B1 — Teste de Mesa |
| Cartões de funções (parâmetros/retornos) | 1 jogo (30 cartões) | Atividade B4 — Dinâmica da Função |
| Enunciados "Pseudocódigo → Python" | 20 cópias | Atividade B3 |
| Resumo de sintaxe Python (cola permitida) | 40 cópias | Apoio para todas as atividades |
| Caso Netflix/Itaú/Knight Capital (1 página cada) | 20 cópias | Opção C — Estudo de Caso |

---

<p align="center">
  <strong>🐍 Python é uma das linguagens mais requisitadas do mercado. Domine-a!</strong><br/>
  <em>Material elaborado para Programação em Novas Tecnologias — ETE Pernambuco — 2026.2</em>
</p>
