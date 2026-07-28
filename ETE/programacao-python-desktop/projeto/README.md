# 📚 Sistema de Gestão de Biblioteca

## Projeto Tutorial — Programação em Novas Tecnologias (Python Desktop)

**Escola Técnica Estadual de Pernambuco**
**Curso:** Desenvolvimento de Sistemas
**Disciplina:** Programação em Novas Tecnologias (Python Desktop)

---

## 📋 Descrição do Projeto

Neste projeto, vamos construir um **Sistema de Gestão de Biblioteca** completo, aplicando todos os conceitos estudados durante o curso:

- 🐍 **Python** como linguagem principal
- 🖼️ **Tkinter** para interface gráfica desktop
- 🐘 **PostgreSQL** como banco de dados relacional
- 🏗️ **Arquitetura em camadas** (Repository → Service → GUI)

O sistema permite o **CRUD completo** de livros: Cadastrar, Listar, Buscar, Editar e Excluir.

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Ferramenta | Versão mínima | Como verificar |
|------------|---------------|----------------|
| Python | 3.12+ | `python --version` |
| PostgreSQL | 14+ | `psql --version` |
| pip | 23+ | `pip --version` |

### Instalar dependência Python:

```bash
pip install psycopg2-binary==2.9.9
```

---

## 🏗️ Estrutura do Projeto

```
projeto/
├── README.md              ← Você está aqui!
├── requirements.txt       ← Dependências Python
├── database/
│   ├── 01-criar-banco.sql ← Script para criar o banco
│   └── 02-criar-tabelas.sql ← Script para criar tabelas
├── src/
│   ├── main.py            ← Ponto de entrada
│   ├── database/
│   │   └── connection.py  ← Conexão PostgreSQL
│   ├── repositories/
│   │   └── livro_repository.py ← Operações SQL
│   ├── services/
│   │   └── livro_service.py    ← Regras de negócio
│   └── gui/
│       └── app.py         ← Interface Tkinter
└── tests/
    └── test_livro_service.py ← Testes unitários
```

---

## 📐 Etapa 1 — Criar o Banco de Dados

### 🎓 O que estamos aplicando
- DDL (Data Definition Language): `CREATE DATABASE`, `CREATE TABLE`
- Tipos de dados PostgreSQL: `SERIAL`, `VARCHAR`, `INTEGER`, `BOOLEAN`, `TIMESTAMP`
- Constraints: `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`, `DEFAULT`
- Índices para performance

### 📝 Passo a passo

**1.1** Abra o terminal/psql e execute:

```bash
psql -U postgres -f database/01-criar-banco.sql
```

**1.2** Conecte-se ao novo banco e crie as tabelas:

```bash
psql -U postgres -d biblioteca_ete -f database/02-criar-tabelas.sql
```

### 🔍 Entendendo

```sql
-- SERIAL = auto-incremento (gera ID automaticamente)
-- FOREIGN KEY = garante integridade referencial
-- CHECK = validação no nível do banco
-- DEFAULT = valor padrão quando não informado

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,           -- ID automático
    titulo VARCHAR(300) NOT NULL,    -- Título obrigatório
    autor_id INTEGER NOT NULL,       -- Referência ao autor
    ativo BOOLEAN DEFAULT TRUE,      -- Soft delete
    CONSTRAINT fk_livro_autor
        FOREIGN KEY (autor_id) REFERENCES autores(id)
);
```

> 💡 **Dica:** Usamos `SERIAL` no PostgreSQL. Em MySQL seria `AUTO_INCREMENT`.

---

## 🔌 Etapa 2 — Camada de Conexão

### 🎓 O que estamos aplicando
- Módulo `psycopg2` para comunicação Python ↔ PostgreSQL
- Variáveis de ambiente com `os.getenv()`
- Tratamento de exceções (`try/except`)
- Boas práticas: separar configuração de código

### 📝 Código: `src/database/connection.py`

```python
import os
import psycopg2
from psycopg2 import OperationalError


def get_connection():
    """Cria e retorna uma conexão com o PostgreSQL."""
    try:
        connection = psycopg2.connect(
            host=os.getenv("DB_HOST", "localhost"),
            port=os.getenv("DB_PORT", "5432"),
            database=os.getenv("DB_NAME", "biblioteca_ete"),
            user=os.getenv("DB_USER", "postgres"),
            password=os.getenv("DB_PASSWORD", "postgres"),
        )
        return connection
    except OperationalError as erro:
        print(f"❌ Erro ao conectar ao banco: {erro}")
        raise
```

### 🔍 Entendendo

- `os.getenv("DB_HOST", "localhost")` → Busca variável de ambiente; se não existir, usa "localhost"
- `psycopg2.connect()` → Cria a conexão TCP com o PostgreSQL
- `OperationalError` → Exceção específica para erros de conexão
- `raise` → Re-lança a exceção para quem chamou tratar

> 💡 **Por que variáveis de ambiente?** Assim o mesmo código funciona em desenvolvimento (localhost) e produção (servidor real) sem alterar nada.

---

## 📦 Etapa 3 — Camada de Repositório (CRUD)

### 🎓 O que estamos aplicando
- Padrão Repository: isolar código SQL em um módulo dedicado
- Placeholders `%s` para prevenir SQL Injection
- `ILIKE` para busca case-insensitive
- `RETURNING id` para obter o ID recém-inserido
- Soft delete: marcar como inativo em vez de deletar

### 📝 Código: `src/repositories/livro_repository.py`

**Listar livros (com JOIN e filtro):**

```python
def listar_todos(filtro: str = "") -> list[dict]:
    """Lista todos os livros ativos com filtro opcional."""
    connection = get_connection()
    cursor = connection.cursor()

    query = """
        SELECT l.id, l.titulo, a.nome AS autor, c.nome AS categoria,
               l.isbn, l.ano_publicacao, l.quantidade_disponivel
        FROM livros l
        INNER JOIN autores a ON l.autor_id = a.id
        INNER JOIN categorias c ON l.categoria_id = c.id
        WHERE l.ativo = TRUE
    """

    if filtro:
        query += " AND l.titulo ILIKE %s"
        cursor.execute(query, (f"%{filtro}%",))
    else:
        cursor.execute(query)

    # Transformar resultado em lista de dicionários
    colunas = [desc[0] for desc in cursor.description]
    resultados = [dict(zip(colunas, linha)) for linha in cursor.fetchall()]
    connection.close()
    return resultados
```

**Inserir livro (INSERT RETURNING):**

```python
def inserir(titulo, autor_id, categoria_id, isbn, ano, quantidade):
    """Insere um novo livro e retorna o ID gerado."""
    connection = get_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO livros (titulo, autor_id, categoria_id, isbn,
                           ano_publicacao, quantidade_total,
                           quantidade_disponivel)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        RETURNING id
    """
    cursor.execute(query, (titulo, autor_id, categoria_id,
                           isbn, ano, quantidade, quantidade))
    livro_id = cursor.fetchone()[0]
    connection.commit()  # ⚠️ Importante: confirmar a transação!
    connection.close()
    return livro_id
```

**Exclusão lógica (Soft Delete):**

```python
def excluir(livro_id: int) -> bool:
    """Marca o livro como inativo (não deleta do banco)."""
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute("UPDATE livros SET ativo = FALSE WHERE id = %s",
                   (livro_id,))
    connection.commit()
    connection.close()
    return cursor.rowcount > 0
```

### 🔍 Entendendo

| Conceito | Explicação |
|----------|-----------|
| `%s` | Placeholder seguro — o psycopg2 faz o escape automático |
| `ILIKE` | Like case-insensitive (exclusivo do PostgreSQL) |
| `RETURNING id` | Retorna o valor gerado pelo SERIAL |
| `commit()` | Confirma as alterações no banco |
| `rollback()` | Desfaz as alterações em caso de erro |
| Soft Delete | Em vez de `DELETE`, fazemos `UPDATE SET ativo = FALSE` |

> ⚠️ **NUNCA** concatene strings para montar SQL! Sempre use `%s`.
> ```python
> # ❌ ERRADO (vulnerável a SQL Injection):
> cursor.execute(f"SELECT * FROM livros WHERE id = {id}")
>
> # ✅ CORRETO (seguro):
> cursor.execute("SELECT * FROM livros WHERE id = %s", (id,))
> ```

---

## 🧠 Etapa 4 — Camada de Serviço (Regras de Negócio)

### 🎓 O que estamos aplicando
- Separação de responsabilidades (Service ≠ Repository)
- Validação de dados antes de salvar
- Retorno padronizado com tuplas `(sucesso, mensagem)`
- Type hints para documentação do código

### 📝 Código: `src/services/livro_service.py`

```python
from datetime import datetime
from repositories import livro_repository


def validar_dados_livro(titulo: str, isbn: str, ano: int,
                        quantidade: int) -> tuple[bool, str]:
    """Valida os dados antes de inserir ou atualizar."""

    if not titulo or titulo.strip() == "":
        return False, "O título do livro é obrigatório."

    if isbn and (len(isbn) != 13 or not isbn.isdigit()):
        return False, "O ISBN deve conter exatamente 13 dígitos."

    ano_atual = datetime.now().year
    if ano < 1900 or ano > ano_atual + 1:
        return False, f"O ano deve estar entre 1900 e {ano_atual + 1}."

    if quantidade < 0:
        return False, "A quantidade não pode ser negativa."

    return True, ""


def cadastrar_livro(titulo, autor_id, categoria_id,
                    isbn, ano, quantidade) -> tuple[bool, str]:
    """Cadastra um novo livro após validar os dados."""
    valido, mensagem = validar_dados_livro(titulo, isbn, ano, quantidade)
    if not valido:
        return False, mensagem

    livro_id = livro_repository.inserir(
        titulo.strip(), autor_id, categoria_id, isbn, ano, quantidade)

    if livro_id:
        return True, f"✅ Livro cadastrado com sucesso! (ID: {livro_id})"
    return False, "❌ Erro ao cadastrar o livro."
```

### 🔍 Entendendo

- **Validação centralizada:** Toda regra de negócio fica em um único lugar
- **Tupla como retorno:** `(True, "mensagem de sucesso")` ou `(False, "erro")`
- **Verificação de empréstimos:** Antes de excluir, verificamos se há empréstimos ativos
- **Camadas não se misturam:** O Service não conhece SQL; o Repository não valida dados

> 💡 **Padrão de projeto:** Essa separação se chama **Layered Architecture** (Arquitetura em Camadas). É usada em empresas reais!

---

## 🖼️ Etapa 5 — Interface Gráfica (Tkinter)

### 🎓 O que estamos aplicando
- `tkinter` — biblioteca padrão do Python para GUIs
- `ttk` — widgets com visual moderno
- `Treeview` — tabela para exibir dados
- `Combobox` — seleção de valores (dropdown)
- `messagebox` — diálogos de confirmação/erro
- Programação orientada a objetos (classe `BibliotecaApp`)
- Eventos e callbacks

### 📝 Código: `src/gui/app.py`

**Estrutura da classe:**

```python
import tkinter as tk
from tkinter import ttk, messagebox
from services import livro_service


class BibliotecaApp:
    """Classe principal da interface gráfica."""

    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("📚 Sistema de Biblioteca — ETE")
        self.root.geometry("1000x700")

        # Variáveis de controle
        self.livro_selecionado_id = None

        # Construir interface
        self._criar_frame_formulario()
        self._criar_frame_busca()
        self._criar_frame_tabela()
        self._criar_frame_botoes()

        # Carregar dados iniciais
        self._carregar_combos()
        self._carregar_livros()
```

**Treeview (tabela de dados):**

```python
def _criar_frame_tabela(self):
    """Cria a tabela para exibir livros."""
    colunas = ("id", "titulo", "autor", "categoria", "isbn", "disponivel")
    self.tree = ttk.Treeview(frame, columns=colunas, show="headings")

    self.tree.heading("id", text="ID")
    self.tree.heading("titulo", text="Título")
    self.tree.heading("autor", text="Autor")
    # ... demais colunas

    # Evento: ao clicar em um livro
    self.tree.bind("<<TreeviewSelect>>", self._ao_selecionar_livro)
```

**MessageBox para feedback:**

```python
# Mensagem de sucesso
messagebox.showinfo("Sucesso", "Livro cadastrado com sucesso!")

# Mensagem de erro
messagebox.showwarning("Atenção", "Preencha todos os campos.")

# Confirmação antes de excluir
resposta = messagebox.askyesno("Confirmar", "Deseja excluir este livro?")
if resposta:
    # Executar exclusão
```

### 🔍 Entendendo

| Widget | Para que serve |
|--------|---------------|
| `tk.Tk()` | Janela principal |
| `ttk.LabelFrame` | Agrupamento visual com título |
| `ttk.Entry` | Campo de texto |
| `ttk.Combobox` | Lista suspensa (dropdown) |
| `ttk.Treeview` | Tabela de dados |
| `ttk.Button` | Botão clicável |
| `messagebox` | Diálogos popup |

> 💡 **Prefira `ttk` a `tk`:** Os widgets `ttk` (themed tk) têm visual mais moderno e se adaptam ao sistema operacional.

---

## 🔗 Etapa 6 — Integração (Conectando as Camadas)

### 🎓 O que estamos aplicando
- Fluxo de dados: GUI → Service → Repository → Banco
- `sys.path` para resolução de módulos
- Padrão de entrada (`__main__`)

### 📝 Código: `src/main.py`

```python
import sys
import os
import tkinter as tk

# Adicionar diretório src ao path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from gui.app import BibliotecaApp


def main():
    root = tk.Tk()
    app = BibliotecaApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()
```

### 🔍 Entendendo o fluxo completo

```
┌─────────────────────────────────────────────────────────┐
│  USUÁRIO clica "Salvar"                                  │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  GUI (app.py) → Coleta dados dos Entry/Combobox         │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  SERVICE (livro_service.py) → Valida dados              │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  REPOSITORY (livro_repository.py) → Executa SQL         │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  DATABASE (PostgreSQL) → Armazena dados                  │
└─────────────────────────────────────────────────────────┘
```

---

## 🧪 Etapa 7 — Testes Unitários

### 🎓 O que estamos aplicando
- Módulo `unittest` (biblioteca padrão do Python)
- Testes de validação sem depender do banco de dados
- Metodologia: testar cenários válidos e inválidos
- Assertions: `assertTrue`, `assertFalse`, `assertIn`

### 📝 Código: `tests/test_livro_service.py`

```python
import unittest
from services.livro_service import validar_dados_livro


class TestValidarDadosLivro(unittest.TestCase):

    def test_titulo_vazio_deve_falhar(self):
        valido, msg = validar_dados_livro("", "1234567890123", 2020, 5)
        self.assertFalse(valido)
        self.assertIn("título", msg.lower())

    def test_ano_invalido_deve_falhar(self):
        valido, msg = validar_dados_livro("Teste", "1234567890123", 1800, 5)
        self.assertFalse(valido)

    def test_quantidade_negativa_deve_falhar(self):
        valido, msg = validar_dados_livro("Teste", "1234567890123", 2020, -1)
        self.assertFalse(valido)

    def test_dados_validos_deve_passar(self):
        valido, msg = validar_dados_livro("Dom Casmurro", "1234567890123", 2020, 5)
        self.assertTrue(valido)
        self.assertEqual(msg, "")
```

### 🔍 Entendendo

- **Testes unitários** verificam partes isoladas do código
- Não precisam de banco de dados (testamos apenas a lógica)
- Cada método `test_*` é executado independentemente
- Se algum falhar, mostra qual teste e por quê

### Executar os testes:

```bash
cd projeto
python -m pytest tests/ -v
```

Ou sem pytest:
```bash
cd projeto/tests
python -m unittest test_livro_service -v
```

---

## 🚀 Como Executar o Projeto Completo

### Passo 1 — Instalar dependências

```bash
cd projeto
pip install -r requirements.txt
```

### Passo 2 — Criar o banco de dados

```bash
psql -U postgres -f database/01-criar-banco.sql
psql -U postgres -d biblioteca_ete -f database/02-criar-tabelas.sql
```

### Passo 3 — Executar a aplicação

```bash
cd src
python main.py
```

### Passo 4 — Executar testes

```bash
cd projeto
python -m pytest tests/ -v
```

---

## 🎯 Desafios Extras (para quem terminou)

1. **Adicionar CRUD de Leitores** — Criar nova aba/janela para gerenciar leitores
2. **Módulo de Empréstimos** — Registrar empréstimo e devolução de livros
3. **Relatórios** — Livros mais emprestados, leitores mais ativos
4. **Exportar para CSV** — Botão para exportar dados da tabela
5. **Login de Bibliotecário** — Tela de autenticação simples

---

## 📚 Conceitos Aplicados (Resumo)

| Conceito | Onde foi aplicado |
|----------|-------------------|
| SQL DDL/DML | Scripts database/ |
| Conexão com banco | connection.py |
| CRUD completo | livro_repository.py |
| Validação de dados | livro_service.py |
| Interface gráfica | app.py (Tkinter) |
| POO (Classes) | BibliotecaApp |
| Tratamento de erros | try/except em todo projeto |
| Type hints | Todas as funções |
| Testes unitários | test_livro_service.py |
| Arquitetura em camadas | Estrutura de pastas |
| Soft delete | Exclusão lógica |
| Prevenção SQL Injection | Placeholders %s |

---

## 👩‍🏫 Critérios de Avaliação

| Critério | Peso |
|----------|------|
| Banco de dados funcional | 20% |
| CRUD completo no repositório | 20% |
| Validações no serviço | 15% |
| Interface gráfica funcional | 25% |
| Testes unitários | 10% |
| Código limpo e documentado | 10% |

---

*Projeto desenvolvido para a disciplina de Programação em Novas Tecnologias — ETE Pernambuco*
