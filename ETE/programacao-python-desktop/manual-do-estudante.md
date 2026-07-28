# 📘 Manual de Apoio ao Estudante — Programação Python Desktop

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco — Profª Luana Cristina**
**Módulo 1 | Python + Tkinter + PostgreSQL**

---

## Sumário

1. [Resumo Teórico Essencial](#1-resumo-teórico-essencial)
2. [Exemplos de Código Comentados Linha a Linha](#2-exemplos-de-código-comentados-linha-a-linha)
3. [Glossário Técnico](#3-glossário-técnico)
4. [Links e Recursos Gratuitos Recomendados](#4-links-e-recursos-gratuitos-recomendados)

---

## 1. Resumo Teórico Essencial

### 1.1 Python — O idioma flexível

**Analogia: Idioma universal e flexível**

Python é como um idioma fácil de aprender e que funciona em muitos contextos — serve para web, automação, análise de dados, IA e aplicações desktop. Assim como o inglês é útil em qualquer país, Python é útil em qualquer área da tecnologia.

**Características principais:**
- Sintaxe limpa e legível (parece inglês)
- Usa indentação (espaços) para definir blocos de código
- Enorme comunidade e bibliotecas para tudo
- Gratuito e open source

### 1.2 Tipagem Dinâmica

**Analogia: Caixa que aceita qualquer coisa**

Em Python, as variáveis são como caixas sem rótulo fixo — você pode colocar um número, depois trocar por um texto. O Python descobre automaticamente o tipo pelo valor atribuído.

```python
x = 10        # Agora x é inteiro (int)
x = "texto"   # Agora x é string (str) — a mesma variável!
x = 3.14      # Agora x é decimal (float)
```

**⚠️ Cuidado:** Flexibilidade não significa bagunça! Boas práticas pedem consistência.

### 1.3 Listas

**Analogia: Lista de compras expansível**

Uma lista em Python é como sua lista de compras do supermercado: tem uma ordem, pode crescer ou diminuir, e aceita itens repetidos.

```python
compras = ["arroz", "feijão", "macarrão"]
compras.append("leite")      # Adiciona no final
compras.remove("feijão")     # Remove item específico
print(compras[0])            # Acessa o primeiro item: "arroz"
```

### 1.4 Dicionários

**Analogia: Agenda telefônica**

Um dicionário é como uma agenda: você procura pelo NOME (chave) e encontra o TELEFONE (valor). Não tem posição numérica — tem chave e valor.

```python
agenda = {
    "Maria": "81999991111",
    "João": "81988882222"
}
print(agenda["Maria"])  # "81999991111"
```

### 1.5 Funções

**Analogia: Máquina de café**

Uma função é como uma máquina de café: você coloca os ingredientes (parâmetros), ela executa o processo internamente, e entrega o resultado (retorno). Você não precisa saber como ela funciona por dentro — só usar!

```python
def fazer_cafe(tipo, acucar):     # Parâmetros: tipo e açúcar
    bebida = f"{tipo} com {acucar} de açúcar"
    return bebida                  # Retorno: a bebida pronta
```

### 1.6 Classes e Objetos

**Analogia: Planta de casa**

Uma classe é a PLANTA (projeto/molde) — define como algo deve ser. Um objeto é a CASA CONSTRUÍDA a partir daquela planta. De uma planta, você pode construir várias casas (objetos) diferentes.

```python
class Casa:              # Planta (classe)
    def __init__(self, cor, quartos):
        self.cor = cor
        self.quartos = quartos

minha_casa = Casa("azul", 3)   # Casa construída (objeto)
```


### 1.7 Tkinter — Interface Gráfica

**Analogia: Montagem de LEGO visual**

Tkinter é como montar uma interface com peças de LEGO: cada peça (widget) tem uma função — botão, caixa de texto, rótulo — e você posiciona onde quiser na janela.

**Widgets mais usados:**
| Widget | Função | Analogia |
|--------|--------|----------|
| `Label` | Exibir texto estático | Etiqueta |
| `Entry` | Campo para digitação | Formulário em papel |
| `Button` | Botão clicável | Botão de elevador |
| `Listbox` | Lista de itens | Menu de restaurante |
| `Frame` | Container/agrupador | Moldura de quadro |
| `Messagebox` | Caixa de diálogo | Pop-up de aviso |

### 1.8 psycopg2 — Conexão com PostgreSQL

**Analogia: Telefone para o banco**

O psycopg2 é como um telefone que conecta seu programa Python ao banco de dados PostgreSQL. Você "liga" (connect), "fala" (execute SQL), "ouve a resposta" (fetch) e "desliga" (close).

**Fluxo básico:**
1. `connect()` — Estabelecer conexão
2. `cursor()` — Criar um "canal de comunicação"
3. `execute()` — Enviar comando SQL
4. `fetchall()` — Receber os resultados
5. `commit()` — Confirmar alterações
6. `close()` — Encerrar conexão

### 1.9 Arquitetura em Camadas

**Analogia: Cozinha de restaurante**

Em um restaurante organizado:
- **Garçom** (Interface/Tkinter) → Recebe pedidos do cliente e entrega pratos
- **Chef** (Lógica/Funções) → Prepara os pratos seguindo receitas
- **Despensa** (Banco de dados/psycopg2) → Armazena os ingredientes

Cada um faz sua parte. O garçom não cozinha, o chef não estoca alimentos.

```
┌──────────────────────┐
│   Interface (Tkinter) │ ← O que o usuário vê e clica
├──────────────────────┤
│   Lógica de Negócio   │ ← Regras e processamento
├──────────────────────┤
│   Acesso a Dados      │ ← Comunicação com PostgreSQL
└──────────────────────┘
```

---

## 2. Exemplos de Código Comentados Linha a Linha

### 2.1 Variáveis, Input e F-Strings

```python
# Programa que demonstra variáveis, entrada de dados e formatação de texto

# input() exibe uma mensagem e espera o usuário digitar algo (sempre retorna texto/string)
nome = input("Qual é o seu nome? ")

# int() converte o texto digitado para número inteiro
idade = int(input("Qual é a sua idade? "))

# float() converte para número decimal
altura = float(input("Qual é sua altura (ex: 1.75)? "))

# Variável booleana: resultado de uma comparação
maior_de_idade = idade >= 18

# f-string: forma moderna de inserir variáveis dentro de texto
# Coloque 'f' antes das aspas e use {variável} para inserir valores
print(f"\n{'='*40}")
print(f"Nome: {nome}")
print(f"Idade: {idade} anos")
print(f"Altura: {altura:.2f} m")  # :.2f formata com 2 casas decimais
print(f"Maior de idade: {'Sim' if maior_de_idade else 'Não'}")
print(f"{'='*40}")

# Tipo de cada variável (para entender tipagem dinâmica)
print(f"\nTipo de 'nome': {type(nome)}")      # <class 'str'>
print(f"Tipo de 'idade': {type(idade)}")      # <class 'int'>
print(f"Tipo de 'altura': {type(altura)}")    # <class 'float'>
```


### 2.2 Função com Validação (Retorna Tupla)

```python
# Função que valida um CPF (simplificado) e retorna tupla (sucesso, mensagem)

def validar_cpf(cpf: str) -> tuple:
    """
    Valida formato básico de CPF.
    Parâmetro: cpf (string) - o CPF a ser validado
    Retorno: tupla (bool, str) - (é_válido, mensagem)
    """
    # strip() remove espaços no início e fim do texto
    cpf = cpf.strip()

    # replace() remove pontos e traços para ficar só com números
    cpf = cpf.replace(".", "").replace("-", "")

    # Verificar se tem exatamente 11 caracteres
    if len(cpf) != 11:
        # Retorna tupla: False (inválido) e a mensagem de erro
        return (False, "CPF deve ter 11 dígitos")

    # isdigit() verifica se todos os caracteres são números
    if not cpf.isdigit():
        return (False, "CPF deve conter apenas números")

    # Verificar se todos os dígitos são iguais (ex: 111.111.111-11)
    if cpf == cpf[0] * 11:
        return (False, "CPF com todos os dígitos iguais é inválido")

    # Se passou em todas as verificações
    return (True, "CPF válido!")


# Usando a função
cpf_digitado = input("Digite seu CPF: ")

# Desempacotando a tupla em duas variáveis separadas
valido, mensagem = validar_cpf(cpf_digitado)

# Exibindo resultado
if valido:
    print(f"✓ {mensagem}")
else:
    print(f"✗ Erro: {mensagem}")
```

### 2.3 Lista com List Comprehension

```python
# Demonstração de listas e list comprehension (forma compacta de criar listas)

# Lista simples de notas
notas = [8.5, 6.0, 9.2, 4.5, 7.8, 5.5, 10.0, 3.2]

# Forma tradicional: filtrar aprovados com loop
aprovados_loop = []
for nota in notas:
    if nota >= 7.0:
        aprovados_loop.append(nota)

# List comprehension: mesma coisa em UMA linha
# Leia: "para cada nota em notas, pegue nota SE nota >= 7.0"
aprovados = [nota for nota in notas if nota >= 7.0]

# Criar lista de situações usando operador ternário dentro da comprehension
situacoes = ["Aprovado" if n >= 7 else "Reprovado" for n in notas]

# Funções úteis para listas numéricas
print(f"Notas: {notas}")
print(f"Aprovados: {aprovados}")
print(f"Situações: {situacoes}")
print(f"Maior nota: {max(notas)}")           # max() retorna o maior valor
print(f"Menor nota: {min(notas)}")           # min() retorna o menor valor
print(f"Média: {sum(notas)/len(notas):.1f}") # sum() soma tudo, len() conta itens
print(f"Total de alunos: {len(notas)}")
print(f"Aprovados: {len(aprovados)} alunos")
```

### 2.4 Dicionário com Iteração

```python
# Sistema simples de cadastro usando dicionário

# Dicionário de alunos: chave = matrícula, valor = outro dicionário com dados
alunos = {
    "2025001": {"nome": "Maria Silva", "turma": "1A", "nota": 8.5},
    "2025002": {"nome": "João Santos", "turma": "1A", "nota": 6.0},
    "2025003": {"nome": "Ana Costa", "turma": "1B", "nota": 9.2},
    "2025004": {"nome": "Pedro Lima", "turma": "1B", "nota": 5.5},
}

# Iterando sobre o dicionário com .items() (retorna chave E valor)
print("=" * 50)
print(f"{'MATRÍCULA':<12}{'NOME':<20}{'TURMA':<8}{'NOTA':<6}{'SITUAÇÃO'}")
print("=" * 50)

for matricula, dados in alunos.items():
    # dados é um dicionário, acessamos com dados["chave"]
    situacao = "Aprovado" if dados["nota"] >= 7.0 else "Recuperação"

    # Formatação alinhada: < = esquerda, número = largura mínima
    print(f"{matricula:<12}{dados['nome']:<20}{dados['turma']:<8}{dados['nota']:<6}{situacao}")

# Filtrando: alunos da turma 1A
turma_1a = {mat: d for mat, d in alunos.items() if d["turma"] == "1A"}
print(f"\nAlunos na turma 1A: {len(turma_1a)}")

# Adicionando novo aluno
alunos["2025005"] = {"nome": "Lucas Souza", "turma": "1A", "nota": 7.5}
print(f"Novo aluno adicionado! Total: {len(alunos)} alunos")
```


### 2.5 Conexão PostgreSQL com psycopg2 (CRUD Completo)

```python
# Módulo de acesso a dados: CRUD completo com PostgreSQL usando psycopg2

import psycopg2  # Biblioteca que conecta Python ao PostgreSQL

# Função para criar a conexão com o banco de dados
def conectar():
    """Estabelece e retorna uma conexão com o PostgreSQL."""
    try:
        # connect() recebe os dados do servidor PostgreSQL
        conexao = psycopg2.connect(
            host="localhost",       # Endereço do servidor (local)
            database="escola",      # Nome do banco de dados
            user="postgres",        # Usuário do PostgreSQL
            password="postgres",    # Senha do usuário
            port="5432"             # Porta padrão do PostgreSQL
        )
        return conexao
    except psycopg2.Error as e:
        # Se falhar, exibe o erro e retorna None
        print(f"Erro ao conectar: {e}")
        return None


# CREATE — Inserir um novo aluno
def inserir_aluno(nome: str, cpf: str, nota: float) -> bool:
    """Insere um aluno no banco. Retorna True se sucesso, False se erro."""
    conexao = conectar()
    if not conexao:
        return False

    try:
        # cursor() cria o canal para enviar comandos SQL
        cursor = conexao.cursor()

        # execute() envia o SQL; %s são placeholders (evita SQL Injection!)
        # NUNCA use f-string para montar SQL — use placeholders!
        cursor.execute(
            "INSERT INTO alunos (nome, cpf, nota) VALUES (%s, %s, %s)",
            (nome, cpf, nota)  # Tupla com os valores que substituem os %s
        )

        # commit() confirma a operação no banco (salva definitivamente)
        conexao.commit()
        return True

    except psycopg2.Error as e:
        # rollback() desfaz alterações se algo der errado
        conexao.rollback()
        print(f"Erro ao inserir: {e}")
        return False

    finally:
        # finally SEMPRE executa: fecha cursor e conexão para liberar recursos
        cursor.close()
        conexao.close()


# READ — Buscar todos os alunos
def listar_alunos() -> list:
    """Retorna lista de todos os alunos cadastrados."""
    conexao = conectar()
    if not conexao:
        return []

    try:
        cursor = conexao.cursor()

        # SELECT retorna dados; fetchall() pega TODOS os resultados
        cursor.execute("SELECT id, nome, cpf, nota FROM alunos ORDER BY nome")
        resultados = cursor.fetchall()  # Lista de tuplas [(1,'Maria','123',8.5), ...]

        return resultados

    except psycopg2.Error as e:
        print(f"Erro ao listar: {e}")
        return []

    finally:
        cursor.close()
        conexao.close()


# UPDATE — Atualizar nota de um aluno
def atualizar_nota(aluno_id: int, nova_nota: float) -> bool:
    """Atualiza a nota de um aluno pelo ID."""
    conexao = conectar()
    if not conexao:
        return False

    try:
        cursor = conexao.cursor()
        cursor.execute(
            "UPDATE alunos SET nota = %s WHERE id = %s",
            (nova_nota, aluno_id)
        )
        # rowcount indica quantas linhas foram afetadas
        if cursor.rowcount == 0:
            print("Nenhum aluno encontrado com esse ID.")
            return False

        conexao.commit()
        return True

    except psycopg2.Error as e:
        conexao.rollback()
        print(f"Erro ao atualizar: {e}")
        return False

    finally:
        cursor.close()
        conexao.close()


# DELETE — Excluir um aluno
def excluir_aluno(aluno_id: int) -> bool:
    """Remove um aluno pelo ID."""
    conexao = conectar()
    if not conexao:
        return False

    try:
        cursor = conexao.cursor()
        cursor.execute("DELETE FROM alunos WHERE id = %s", (aluno_id,))
        conexao.commit()
        return cursor.rowcount > 0

    except psycopg2.Error as e:
        conexao.rollback()
        print(f"Erro ao excluir: {e}")
        return False

    finally:
        cursor.close()
        conexao.close()
```


### 2.6 Classe Tkinter Básica (Janela + Botão + Entry)

```python
# Aplicação desktop simples: Cadastro de aluno com Tkinter

import tkinter as tk                    # Biblioteca de interface gráfica (vem com Python)
from tkinter import messagebox          # Módulo para caixas de diálogo (alertas, confirmações)


class AppCadastroAluno:
    """Classe que representa a janela de cadastro de aluno."""

    def __init__(self):
        # Criando a janela principal (root = raiz da aplicação)
        self.janela = tk.Tk()

        # Definindo o título que aparece na barra superior da janela
        self.janela.title("Cadastro de Aluno — ETE Pernambuco")

        # Definindo o tamanho da janela (largura x altura)
        self.janela.geometry("400x300")

        # Impedindo que o usuário redimensione a janela
        self.janela.resizable(False, False)

        # Chamando método que cria todos os widgets (componentes visuais)
        self.criar_widgets()

    def criar_widgets(self):
        """Cria e posiciona todos os componentes da interface."""

        # --- CAMPO NOME ---
        # Label: texto estático (rótulo) que identifica o campo
        tk.Label(self.janela, text="Nome:").pack(pady=(20, 5))

        # Entry: campo de digitação; StringVar permite ler/alterar o valor
        self.var_nome = tk.StringVar()
        tk.Entry(self.janela, textvariable=self.var_nome, width=40).pack()

        # --- CAMPO CPF ---
        tk.Label(self.janela, text="CPF:").pack(pady=(10, 5))
        self.var_cpf = tk.StringVar()
        tk.Entry(self.janela, textvariable=self.var_cpf, width=40).pack()

        # --- CAMPO NOTA ---
        tk.Label(self.janela, text="Nota:").pack(pady=(10, 5))
        self.var_nota = tk.StringVar()
        tk.Entry(self.janela, textvariable=self.var_nota, width=40).pack()

        # --- BOTÃO SALVAR ---
        # Button: botão clicável; command define a função chamada ao clicar
        tk.Button(
            self.janela,
            text="💾 Salvar Aluno",
            command=self.salvar_aluno,   # Função chamada no clique (SEM parênteses!)
            bg="#4CAF50",                # Cor de fundo (verde)
            fg="white",                  # Cor do texto (branco)
            width=20
        ).pack(pady=20)

    def salvar_aluno(self):
        """Função chamada ao clicar no botão Salvar."""

        # .get() obtém o texto digitado nos campos
        nome = self.var_nome.get().strip()
        cpf = self.var_cpf.get().strip()
        nota = self.var_nota.get().strip()

        # Validação: verificar se todos os campos foram preenchidos
        if not nome or not cpf or not nota:
            messagebox.showwarning("Atenção", "Preencha todos os campos!")
            return

        # Tentar converter nota para número
        try:
            nota_float = float(nota)
        except ValueError:
            messagebox.showerror("Erro", "Nota deve ser um número válido!")
            return

        # Aqui você chamaria a função de banco: inserir_aluno(nome, cpf, nota_float)
        messagebox.showinfo("Sucesso", f"Aluno {nome} cadastrado com sucesso!")

        # Limpar os campos após salvar
        self.var_nome.set("")
        self.var_cpf.set("")
        self.var_nota.set("")

    def executar(self):
        """Inicia o loop principal da interface (mantém a janela aberta)."""
        # mainloop() mantém a janela visível e aguardando interações
        self.janela.mainloop()


# Ponto de entrada: só executa se este arquivo for o principal
if __name__ == "__main__":
    app = AppCadastroAluno()
    app.executar()
```

### 2.7 Try/Except para Tratamento de Erros

```python
# Demonstração completa de tratamento de erros (exceções) em Python

def dividir(a, b):
    """Divide a por b com tratamento de erros completo."""
    try:
        # O bloco TRY contém o código que PODE dar erro
        resultado = a / b
        return resultado

    except ZeroDivisionError:
        # Captura APENAS erro de divisão por zero
        print("❌ Erro: Não é possível dividir por zero!")
        return None

    except TypeError:
        # Captura erro de tipo (ex: dividir texto por número)
        print("❌ Erro: Os valores devem ser números!")
        return None

    except Exception as e:
        # Captura QUALQUER outro erro não previsto
        # 'as e' guarda o erro na variável 'e' para exibir detalhes
        print(f"❌ Erro inesperado: {e}")
        return None

    finally:
        # O bloco FINALLY SEMPRE executa, com ou sem erro
        # Útil para fechar conexões, arquivos, etc.
        print("🔄 Operação de divisão finalizada.")


# Função robusta de leitura de dados do usuário
def ler_numero(mensagem: str) -> float:
    """Pede um número ao usuário, repetindo até receber um valor válido."""
    while True:  # Loop infinito até conseguir
        try:
            valor = float(input(mensagem))
            return valor  # Se chegou aqui, a conversão deu certo
        except ValueError:
            # ValueError: quando float() não consegue converter o texto
            print("⚠️  Valor inválido! Digite um número (ex: 8.5)")


# Exemplo de uso com contexto real
def calcular_media_segura(notas: list) -> float:
    """Calcula média de uma lista com tratamento de erros."""
    try:
        if not notas:
            raise ValueError("A lista de notas está vazia!")

        if not all(isinstance(n, (int, float)) for n in notas):
            raise TypeError("Todos os itens devem ser números!")

        media = sum(notas) / len(notas)
        return round(media, 2)

    except ValueError as e:
        print(f"❌ Erro de valor: {e}")
        return 0.0

    except TypeError as e:
        print(f"❌ Erro de tipo: {e}")
        return 0.0


# Testando as funções
print("=== Testes de Tratamento de Erros ===\n")
print(f"10 / 2 = {dividir(10, 2)}")
print(f"10 / 0 = {dividir(10, 0)}")
print(f"Média [8, 7, 9]: {calcular_media_segura([8, 7, 9])}")
print(f"Média []: {calcular_media_segura([])}")
```


---

## 3. Glossário Técnico

| Termo em Inglês | Tradução/Explicação em Português |
|-----------------|----------------------------------|
| **Variable** | Variável — espaço nomeado na memória que armazena um valor |
| **String (str)** | Cadeia de texto — sequência de caracteres entre aspas |
| **Integer (int)** | Inteiro — número sem casas decimais |
| **Float** | Ponto flutuante — número com casas decimais |
| **Boolean (bool)** | Booleano — valor lógico: True (verdadeiro) ou False (falso) |
| **List** | Lista — coleção ordenada e mutável de valores (aceita repetições) |
| **Dictionary (dict)** | Dicionário — coleção de pares chave:valor (como agenda telefônica) |
| **Tuple** | Tupla — coleção ordenada e IMUTÁVEL (não pode alterar depois de criada) |
| **Function (def)** | Função — bloco de código nomeado e reutilizável |
| **Parameter** | Parâmetro — variável que a função recebe quando é chamada |
| **Return** | Retorno — valor que a função devolve ao código que a chamou |
| **Class** | Classe — molde/planta para criar objetos com atributos e métodos |
| **Object** | Objeto — instância concreta criada a partir de uma classe |
| **Method** | Método — função que pertence a uma classe |
| **Import** | Importar — carregar um módulo ou biblioteca para usar suas funções |
| **Module** | Módulo — um arquivo Python (.py) com funções e classes |
| **Package** | Pacote — pasta com vários módulos organizados (contém __init__.py) |
| **pip** | Gerenciador de pacotes do Python (instala bibliotecas: pip install nome) |
| **Virtual Environment (venv)** | Ambiente virtual — instalação isolada de pacotes para cada projeto |
| **Exception** | Exceção — erro que ocorre durante a execução do programa |
| **Try/Except** | Tentar/Exceto — estrutura para capturar e tratar erros sem travar |
| **Lambda** | Função anônima de uma linha (ex: lambda x: x * 2) |
| **Comprehension** | Compreensão — forma compacta de criar listas/dicionários com loop |
| **Decorator** | Decorador — função que modifica o comportamento de outra função (@) |
| **Type Hint** | Dica de tipo — anotação que indica o tipo esperado (def soma(a: int)) |
| **PEP8** | Guia de estilo oficial do Python (regras de formatação) |
| **Snake_case** | Estilo de nomeação do Python: palavras_separadas_por_underscore |
| **GUI** | Graphical User Interface — Interface Gráfica do Usuário |
| **Widget** | Componente visual da interface (botão, campo de texto, rótulo) |
| **Event** | Evento — ação do usuário (clique, tecla pressionada, mouse movido) |
| **Callback** | Função chamada automaticamente quando um evento ocorre |
| **Framework** | Estrutura pronta que fornece ferramentas para desenvolver software |
| **Library (Biblioteca)** | Conjunto de funções prontas para usar (ex: psycopg2, tkinter) |
| **API** | Interface de Programação — forma padronizada de se comunicar com um sistema |
| **CRUD** | Create, Read, Update, Delete — as 4 operações básicas de dados |
| **ORM** | Object-Relational Mapping — traduz objetos Python para tabelas SQL |

---

## 4. Links e Recursos Gratuitos Recomendados

### 📚 Documentação Oficial
- **Python Docs (PT-BR):** [https://docs.python.org/pt-br/3/](https://docs.python.org/pt-br/3/) — Documentação oficial em português
- **Tkinter Docs:** [https://docs.python.org/3/library/tkinter.html](https://docs.python.org/3/library/tkinter.html) — Referência oficial do Tkinter
- **psycopg2 Docs:** [https://www.psycopg.org/docs/](https://www.psycopg.org/docs/) — Documentação do driver PostgreSQL

### 🎓 Cursos Gratuitos
- **Curso em Vídeo — Python (Gustavo Guanabara):** [https://www.cursoemvideo.com/curso/python-3-mundo-1/](https://www.cursoemvideo.com/curso/python-3-mundo-1/) — Melhor curso de Python em português
- **freeCodeCamp — Python:** [https://www.freecodecamp.org/learn/scientific-computing-with-python/](https://www.freecodecamp.org/learn/scientific-computing-with-python/) — Certificação gratuita
- **Real Python:** [https://realpython.com/](https://realpython.com/) — Tutoriais excelentes (em inglês)
- **Automate the Boring Stuff:** [https://automatetheboringstuff.com/](https://automatetheboringstuff.com/) — Livro completo gratuito online

### 🏋️ Prática Interativa
- **Python Tutor (Visualizer):** [https://pythontutor.com/](https://pythontutor.com/) — Visualize a execução do código passo a passo
- **Exercism — Python Track:** [https://exercism.org/tracks/python](https://exercism.org/tracks/python) — Exercícios com mentoria gratuita
- **HackerRank — Python:** [https://www.hackerrank.com/domains/python](https://www.hackerrank.com/domains/python) — Desafios progressivos

### 🛠️ Ferramentas
- **VS Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/) — Editor de código recomendado (instale extensão Python)
- **Thonny:** [https://thonny.org/](https://thonny.org/) — IDE simples ideal para iniciantes em Python
- **DB Browser for SQLite:** [https://sqlitebrowser.org/](https://sqlitebrowser.org/) — Para testes rápidos de banco sem PostgreSQL
- **pgAdmin 4:** [https://www.pgadmin.org/](https://www.pgadmin.org/) — Interface gráfica para PostgreSQL

---

> 💡 **Dica da Profª Luana:** "Python Desktop combina três habilidades: lógica de programação, interface gráfica e banco de dados. Domine cada uma separadamente antes de juntar tudo. É como aprender a dirigir — primeiro o volante, depois a marcha, depois o trânsito!"

---

*Manual atualizado em 2025 | ETE Pernambuco — Curso Técnico em Desenvolvimento de Sistemas*
