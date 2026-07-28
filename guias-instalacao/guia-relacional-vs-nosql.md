# 🔄 Banco de Dados Relacional vs NoSQL — Guia Comparativo

> **Para:** Alunos que estão aprendendo quando usar cada tipo  
> **Resumo:** Relacional = dados estruturados com relacionamentos. NoSQL = flexibilidade e escala.

---

## 1. Visão Geral: O que são?

### Banco Relacional (SQL)
Armazena dados em **tabelas** com linhas e colunas fixas. Todas as linhas
de uma tabela têm os mesmos campos. Relacionamentos são feitos com chaves
estrangeiras (FK). Exemplos: **PostgreSQL, MySQL, SQL Server, Oracle**.

### Banco Não-Relacional (NoSQL)
Armazena dados em formatos flexíveis: **documentos** (JSON), **chave-valor**,
**grafos** ou **colunas largas**. Cada registro pode ter campos diferentes.
Exemplos: **MongoDB, Redis, DynamoDB, Cassandra, Neo4j**.

---

## 2. Comparação Visual

### Mesmo dado nas duas abordagens:

**Relacional (PostgreSQL) — Tabela `alunos`:**
```
+----+---------------+-------+------------------+
| id | nome          | idade | email            |
+----+---------------+-------+------------------+
| 1  | Maria Silva   | 20    | maria@email.com  |
| 2  | João Santos   | 22    | joao@email.com   |
| 3  | Ana Costa     | 19    | NULL             |
+----+---------------+-------+------------------+
```
- Todos têm os MESMOS campos
- `id 3` tem email NULL (campo existe mas está vazio)
- Schema RÍGIDO: não pode adicionar campo só para 1 registro

**NoSQL (MongoDB) — Collection `alunos`:**
```javascript
// Documento 1
{ "_id": "abc1", "nome": "Maria Silva", "idade": 20, "email": "maria@email.com" }

// Documento 2 — TEM campo extra (curso) que os outros não têm!
{ "_id": "abc2", "nome": "João Santos", "idade": 22, "email": "joao@email.com", "curso": "ADS" }

// Documento 3 — NÃO TEM email (simplesmente não existe)
{ "_id": "abc3", "nome": "Ana Costa", "idade": 19, "hobbies": ["leitura", "games"] }
```
- Cada documento pode ter campos DIFERENTES
- Schema FLEXÍVEL: pode adicionar campos sem alterar os outros
- Pode ter arrays e objetos aninhados

---

## 3. Tabela Comparativa Completa

| Aspecto | Relacional (SQL) | NoSQL (MongoDB) |
|---------|-----------------|-----------------|
| **Estrutura** | Tabelas com schema fixo | Documentos com schema flexível |
| **Linguagem** | SQL (SELECT, INSERT, JOIN) | Métodos JS (find, insert, aggregate) |
| **Relacionamentos** | JOINs entre tabelas (FK) | Documentos embutidos ou referências |
| **Schema** | Definido ANTES de inserir | Pode mudar a qualquer momento |
| **Transações** | ACID completo (forte) | Suporte a transações (a partir da v4) |
| **Escalabilidade** | Vertical (máquina maior) | Horizontal (mais máquinas) |
| **Consistência** | Forte (dados sempre corretos) | Eventual (pode haver delay) |
| **Melhor para** | Dados estruturados, financeiro | Big data, apps, dados variáveis |
| **Performance em JOIN** | Excelente (otimizado para isso) | Ruim (prefere desnormalizar) |
| **Exemplos** | PostgreSQL, MySQL, Oracle | MongoDB, Redis, DynamoDB |

---

## 4. Exemplos Práticos Lado a Lado

### Exemplo 1: Criar estrutura

**SQL (PostgreSQL):**
```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50),
    estoque INTEGER DEFAULT 0
);
```

**MongoDB:**
```javascript
// Não precisa criar! Basta inserir:
db.produtos.insertOne({
    nome: "Notebook",
    preco: 3500.00,
    categoria: "eletronico",
    estoque: 5
})
// A collection é criada automaticamente no primeiro insert
```

---

### Exemplo 2: Inserir dados

**SQL:**
```sql
INSERT INTO produtos (nome, preco, categoria, estoque)
VALUES ('Notebook', 3500.00, 'eletronico', 5);
```

**MongoDB:**
```javascript
db.produtos.insertOne({
    nome: "Notebook",
    preco: 3500.00,
    categoria: "eletronico",
    estoque: 5,
    specs: { ram: "16GB", ssd: "512GB" }  // campo extra que SQL não permitiria!
})
```

---

### Exemplo 3: Buscar dados

**SQL:**
```sql
-- Todos os eletrônicos com preço > 1000
SELECT nome, preco FROM produtos
WHERE categoria = 'eletronico' AND preco > 1000
ORDER BY preco DESC;
```

**MongoDB:**
```javascript
db.produtos.find(
    { categoria: "eletronico", preco: { $gt: 1000 } },
    { nome: 1, preco: 1, _id: 0 }
).sort({ preco: -1 })
```

---

### Exemplo 4: Atualizar

**SQL:**
```sql
UPDATE produtos SET preco = 2999.00, estoque = estoque - 1
WHERE nome = 'Notebook';
```

**MongoDB:**
```javascript
db.produtos.updateOne(
    { nome: "Notebook" },
    { $set: { preco: 2999.00 }, $inc: { estoque: -1 } }
)
```

---

### Exemplo 5: Relacionamentos

**SQL (3 tabelas com JOINs):**
```sql
-- Tabelas separadas
CREATE TABLE autores (id SERIAL PRIMARY KEY, nome VARCHAR(100));
CREATE TABLE livros (id SERIAL PRIMARY KEY, titulo VARCHAR(200), autor_id INTEGER REFERENCES autores(id));

-- Buscar com JOIN
SELECT l.titulo, a.nome AS autor
FROM livros l
INNER JOIN autores a ON l.autor_id = a.id;
```

**MongoDB (documento embutido — sem JOIN):**
```javascript
// Tudo no mesmo documento (desnormalizado)
db.livros.insertOne({
    titulo: "Dom Casmurro",
    autor: {
        nome: "Machado de Assis",
        nascimento: 1839
    },
    generos: ["romance", "clássico"]
})

// Buscar — sem JOIN necessário!
db.livros.find({ "autor.nome": "Machado de Assis" })
```

---

## 5. Quando Usar Cada Um?

### ✅ Use RELACIONAL (PostgreSQL/MySQL) quando:

- Dados têm **estrutura fixa** (sempre os mesmos campos)
- Precisa de **JOINs complexos** (relatórios cruzando dados)
- **Transações financeiras** (débito e crédito devem ser atômicos)
- **Integridade referencial** é crítica (FK impede dados órfãos)
- Exemplos: sistema bancário, ERP, e-commerce (pedidos), folha de pagamento

### ✅ Use NoSQL (MongoDB) quando:

- Dados têm **estrutura variável** (cada item pode ter campos diferentes)
- Precisa de **alta velocidade de leitura/escrita**
- Aplicação precisa **escalar horizontalmente** (milhões de usuários)
- Dados são **semi-estruturados** (logs, eventos, configurações)
- Exemplos: rede social (posts), IoT (sensores), catálogo de produtos, chat em tempo real

### 🤝 Na prática, empresas usam os DOIS juntos:

```
┌──────────────────────────────────────────────┐
│ Sistema de E-commerce Real:                   │
│                                              │
│ PostgreSQL → Pedidos, Pagamentos, Usuários   │
│              (dados financeiros, transações)  │
│                                              │
│ MongoDB → Catálogo de produtos, Reviews      │
│           (schema flexível, muitas leituras) │
│                                              │
│ Redis → Cache, Sessões, Carrinho temporário  │
│         (ultra-rápido, key-value)            │
└──────────────────────────────────────────────┘
```

---

## 6. Exercício Comparativo para o Aluno

### Cenário: Sistema de uma escola

**Modelar estes dados nas DUAS formas:**
- Alunos (nome, matrícula, turma)
- Professores (nome, disciplina)
- Turmas (código, série, sala)
- Notas (aluno, disciplina, bimestre, valor)

**No relacional:** Desenhar MER com 4 tabelas + FKs + SQL de criação
**No MongoDB:** Definir como seria o documento do aluno (com notas embutidas ou separadas?) + justificar a escolha

---

## 7. Resumo para Colar na Parede

```
┌──────────────────────────────────────────┐
│        SQL vs NoSQL — Cola Rápida        │
├──────────────────────────────────────────┤
│                                          │
│  SQL (Relacional)    NoSQL (MongoDB)     │
│  ─────────────────   ─────────────────   │
│  Tabelas fixas       Documentos livres   │
│  JOIN                Embed ou Reference  │
│  Schema obrigatório  Schema opcional     │
│  ACID forte          Escalável           │
│  Vertical            Horizontal          │
│                                          │
│  Financeiro ✅        Social/Catálogo ✅  │
│  Relatórios ✅        Tempo real ✅       │
│  Integridade ✅       Flexibilidade ✅    │
│                                          │
│  "Preciso de regras rígidas"             │
│  → Use SQL                               │
│                                          │
│  "Preciso de velocidade e flexibilidade" │
│  → Use NoSQL                             │
│                                          │
│  "Preciso dos dois?"                     │
│  → Use os dois! (Polyglot Persistence)   │
│                                          │
└──────────────────────────────────────────┘
```
