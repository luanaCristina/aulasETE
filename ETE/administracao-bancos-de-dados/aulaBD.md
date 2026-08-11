Olá novamente! É um prazer continuar nossa jornada acadêmica. Como seu professor, fico entusiasmado ao ver você dar este passo fundamental.

Projetar um **Diagrama Entidade-Relacionamento (DER)** é a etapa mais crítica no desenvolvimento de um sistema. Um erro cometido na modelagem conceitual custará dez vezes mais caro para ser corrigido após o código e o banco de dados estarem em produção.

Nesta aula, dominaremos os conceitos do DER através do estudo de caso real de um **Supermercado**. Prepare seu papel, sua ferramenta de desenho e vamos ao trabalho!

---

## 1. 🛠️ Ferramentas de Modelagem Recomendadas

Para desenhar diagramas conceituais e lógicos de forma profissional, utilizamos **Ferramentas CASE** (*Computer-Aided Software Engineering*). Cada uma atende a um perfil específico de uso:

| Ferramenta | Tipo | Pontos Fortes | Indicação de Uso |
| --- | --- | --- | --- |
| **brModelo** | Desktop / Web Gratuito | Totalmente aderente à notação acadêmica brasileira (Peter Chen). Extremamente leve. | **Academia e Ensino Técnico** |
| **MySQL Workbench** | Desktop Gratuito | Modelagem física direta, gera scripts SQL automaticamente e faz Engenharia Reversa. | **Desenvolvimento MySQL** |
| **Lucidchart** | Web (Freemium) | Interface moderna, colaboração em tempo real, excelente estética visual. | **Projetos Corporativos** |
| **dbdiagram.io** | Web Gratuito | Desenha diagramas a partir de código (*DSL - Domain Specific Language*). | **Desenvolvedores ágeis** |
| **Draw.io (diagrams.net)** | Web/Desktop Gratuito | 100% gratuito, sem limitações, integra-se ao Google Drive/GitHub. | **Uso Geral e Documentação** |

> 💡 **Recomendação do Professor para Iniciantes:**
> Para fixar a teoria acadêmica e fazer exercícios de sala de aula, utilize o **brModelo** (ou sua versão web *brModelo Next*). Ele adota estritamente os padrões conceituais de Peter Chen ensinados nas universidades. Quando passar para a prática física direta no MySQL, utilize o **MySQL Workbench**.

---

---

## 2. 🔣 Notação Gráfica e Simbologia do DER (Peter Chen)

O modelo conceitual clássico foi proposto por Peter Chen em 1976. Ele utiliza figuras geométricas específicas para representar cada elemento do mundo real:

```
               [ ENTIDADE ]           <--- Retângulo (Ex: CLIENTE)
                    │
                    ◇  (RELACIONAMENTO) <--- Losango (Ex: REALIZA)
                    │
              ( Atributo )            <--- Elipse/Oval (Ex: Nome, CPF)

```

### 🔹 Retângulos: Entidades

Representam os objetos ou atores do mundo real que possuem existência independente e sobre os quais queremos guardar dados.

* **Entidade Forte:** Existe por si só. Ex: `PRODUTO`, `CLIENTE`.
* **Entidade Fraca:** Sua existência depende totalmente de outra entidade pai. Ex: `DEPENDENTE` (só existe se houver um `FUNCIONARIO` associado).

### 🔹 Elipses / Ovais: Atributos

Representam as características ou propriedades de uma entidade.

* **Atributo Simples (Atômico):** Não pode ser dividido em partes menores. Ex: `Preço`, `Quantidade`.
* **Atributo Chave (Identificador / PK):** Sublinhado no diagrama. Identifica unicamente cada instância da entidade. Ex: `<u>CPF</u>`, `<u>ID_Produto</u>`.
* **Atributo Multivalorado:** Pode conter múltiplos valores para uma mesma instância. Representado por **elipse dupla**. Ex: `Telefone` (uma pessoa pode ter 3 telefones).
* **Atributo Composto:** Pode ser subdividido em atributos menores. Ex: `Endereço` (subdividido em *Rua*, *Número*, *CEP*, *Bairro*).
* **Atributo Derivado:** Seu valor é calculado a partir de outro dado. Representado por **elipse tracejada**. Ex: `Idade` (calculada a partir da *Data de Nascimento*).

### 🔹 Losangos: Relacionamentos

Representam a associação ou ação existente entre duas ou mais entidades. Ex: O Cliente (*Entidade*) **REALIZA** (*Relacionamento*) uma Venda (*Entidade*).

### 🔹 Linhas e Conectores: Cardinalidades

As linhas conectam as entidades aos relacionamentos. A **cardinalidade** estabelece os limites mínimo e máximo de participação das instâncias no relacionamento:

```
+───────────────────+─────────────────────────────────────────────────────────────+
| Cardinalidade     | Significado Prático no Negócio                              |
+───────────────────+─────────────────────────────────────────────────────────────+
| 1:1 (Um para Um)  | Cada elemento A relaciona-se com no máximo UM elemento B.   |
| 1:N (Um para N)   | Um elemento A relaciona-se com VÁRIOS elementos B.          |
| N:M (N para M)    | VÁRIOS elementos A relacionam-se com VÁRIOS elementos B.    |
+───────────────────+─────────────────────────────────────────────────────────────+

```

#### 💡 Analogia do Semáforo para Cardinalidades:

* **(1,1):** Parada obrigatória. O registro **deve existir** e ser **único** (ex: Cada CPF pertence a exatamente *uma* pessoa).
* **(0,N):** Sinal verde. A associação é **opcional** e pode ocorrer **múltiplas vezes** (ex: Um cliente recém-cadastrado pode ter *zero* compras ou *várias* compras).

---

---

## 3. 🛒 Estudo de Caso: Modelando um Supermercado Passo a Passo

### 📜 Levantamento de Requisitos (Narrativa do Mundo Real)

> *"O Supermercado 'Preço Bom' precisa de um novo sistema de gestão. O gerente nos informou que o mercado comercializa diversos **Produtos**, e cada produto pertence a uma única **Categoria** (ex: Laticínios, Limpeza, Padaria). Os produtos são comprados de **Fornecedores** cadastrados (um fornecedor pode fornecer vários produtos, e um produto pode ser fornecido por diferentes fornecedores). O supermercado atende **Clientes** identificados pelo CPF para o programa de pontuação. As **Vendas** são registradas pelos **Funcionários** (caixas). Uma venda é composta por vários **Itens de Venda** (produtos e suas quantidades), possui um valor total e uma data."*

---

### Etapa 1: Identificação das Entidades

Analisando os substantivos do levantamento de requisitos, extraímos as entidades principais:

1. `CATEGORIA`: Agrupamento dos produtos.
2. `PRODUTO`: Itens comercializados no mercado.
3. `FORNECEDOR`: Empresas que vendem os produtos ao mercado.
4. `CLIENTE`: Consumidores finais.
5. `FUNCIONARIO`: Operadores que registram as vendas.
6. `VENDA`: O ato da transação comercial.

---

### Etapa 2: Mapeamento dos Atributos

Definimos os atributos e destacamos as **Chaves Primárias (PK)** de cada entidade:

* **CATEGORIA:** `<u>id_categoria</u>`, `nome_categoria`.
* **PRODUTO:** `<u>id_produto</u>`, `nome_produto`, `preco_venda`, `quantidade_estoque`.
* **FORNECEDOR:** `<u>cnpj</u>`, `razao_social`, `telefone`.
* **CLIENTE:** `<u>cpf</u>`, `nome_cliente`, `email`.
* **FUNCIONARIO:** `<u>id_funcionario</u>`, `nome_funcionario`, `matricula`, `cargo`.
* **VENDA:** `<u>id_venda</u>`, `data_hora`, `valor_total`.

---

### Etapa 3: Definição dos Relacionamentos e Cardinalidades

Analisamos o comportamento do negócio aplicando as perguntas de cardinalidade:

#### A) Categoria x Produto

* *Um produto pertence a quantas categorias?* Apenas **1** categoria.
* *Uma categoria pode ter quantos produtos?* **Vários (N)** produtos.
* **Resultado:** Relacionamento **1:N** (*PERTENCE*).

#### B) Fornecedor x Produto

* *Um fornecedor fornece quantos produtos?* **Vários (N)** produtos.
* *Um produto pode ser fornecido por quantos fornecedores?* **Vários (M)** fornecedores.
* **Resultado:** Relacionamento **N:M** (*FORNECE*).

#### C) Funcionario x Venda

* *Um funcionário (caixa) realiza quantas vendas?* **Várias (N)** vendas.
* *Uma venda é registrada por quantos funcionários?* Por apenas **1** funcionário.
* **Resultado:** Relacionamento **1:N** (*REGISTRA*).

#### D) Cliente x Venda

* *Um cliente pode realizar quantas vendas?* **Várias (N)** vendas (ou nenhuma, caso seja visitante).
* *Uma venda pertence a quantos clientes?* A no máximo **1** cliente identificado.
* **Resultado:** Relacionamento **1:N** (*REALIZA*).

#### E) Venda x Produto

* *Uma venda contém quantos produtos?* **Vários (N)** produtos.
* *Um produto pode estar presente em quantas vendas?* Em **Várias (M)** vendas.
* **Resultado:** Relacionamento **N:M** (*CONTÉM*).
> ⚠️ **Atenção:** Como uma venda pode conter o mesmo produto com quantidades diferentes (ex: 5 pacotes de arroz), o relacionamento *CONTÉM* possui um atributo próprio: `quantidade` e `preco_unitario_momento`.



---

### Etapa 4: Representação Textual / Diagrama Estruturado

Abaixo está a representação conceitual completa do DER do Supermercado utilizando a notação textual estruturada (diagrama de entidade-relacionamento equivalente):

```
+─────────────────+         1:N (PERTENCE)        +─────────────────+
|    CATEGORIA    | 1 ────────────────────────── N |     PRODUTO     |
+─────────────────+                               +─────────────────+
| <u>id_categoria</u>   |                               | <u>id_produto</u>    |
| nome_categoria  |                               | nome_produto    |
+─────────────────+                               | preco_venda     |
                                                  | qtd_estoque     |
                                                  +─────────────────+
                                                           │
                                                           │ N
                                                           │
                                                       (FORNECE)  [Relacionamento N:M]
                                                           │
                                                           │ M
                                                           │
                                                  +─────────────────+
                                                  |   FORNECEDOR    |
                                                  +─────────────────+
                                                  | <u>cnpj</u>            |
                                                  | razao_social    |
                                                  | telefone        |
                                                  +─────────────────+

+─────────────────+         1:N (REALIZA)         +─────────────────+
|     CLIENTE     | 1 ────────────────────────── N |      VENDA      |
+─────────────────+                               +─────────────────+
| <u>cpf</u>             |                               | <u>id_venda</u>        |
| nome_cliente    |                               | data_hora       |
| email           |                               | valor_total     |
+─────────────────+                               +─────────────────+
                                                           │
                                                           │ 1
                                                           │
                                                      (REGISTRA)  [Relacionamento 1:N]
                                                           │
                                                           │ N
                                                           │
+─────────────────+                               +─────────────────+
|   FUNCIONARIO   | 1 ────────────────────────────┤   FUNCIONARIO   | (Operador do Caixa)
+─────────────────+                               +─────────────────+
| <u>id_funcionario</u> |
| matricula       |
| nome            |
+─────────────────+

=====================================================================
 RELACIONAMENTO N:M RESOLVIDO ENTRE VENDA E PRODUTO (ITENS DA VENDA)
=====================================================================

+───────────────+          1:N          +──────────────────+          N:1          +───────────────+
|     VENDA     | 1 ────────────────── N|   ITEM_VENDA     |N ────────────────── 1 |    PRODUTO    |
+───────────────+                       +──────────────────+                       +───────────────+
| <u>id_venda</u>     |                       | <u>id_venda (FK)</u>    |                       | <u>id_produto</u>    |
+───────────────+                       | <u>id_produto (FK)</u>  |                       +───────────────+
                                        | quantidade       |
                                        | preco_unitario   |
                                        +──────────────────+

```

---

---

## 4. 💻 Tradução do DER para o Banco de Dados Físico (MySQL)

Abaixo temos o script SQL completo derivado do nosso DER, pronto para ser executado no MySQL Workbench:

```sql
-- 1. Criação do Banco de Dados
CREATE DATABASE db_supermercado
    DEFAULT CHARACTER SET utf8mb4 
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE db_supermercado;

-- 2. Tabela CATEGORIA (Entidade Forte)
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- 3. Tabela PRODUTO (Relacionamento 1:N com Categoria)
CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco_venda DECIMAL(10,2) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0,
    id_categoria INT NOT NULL,
    CONSTRAINT fk_produtos_categorias 
        FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- 4. Tabela FORNECEDOR (Entidade Forte)
CREATE TABLE fornecedores (
    cnpj VARCHAR(18) PRIMARY KEY,
    razao_social VARCHAR(100) NOT NULL,
    telefone VARCHAR(20)
) ENGINE=InnoDB;

-- 5. Tabela Associativa PRODUTO_FORNECEDOR (Resolve a relação N:M entre Produto e Fornecedor)
CREATE TABLE produto_fornecedor (
    id_produto INT NOT NULL,
    cnpj_fornecedor VARCHAR(18) NOT NULL,
    PRIMARY KEY (id_produto, cnpj_fornecedor),
    CONSTRAINT fk_pf_produto 
        FOREIGN KEY (id_produto) REFERENCES produtos(id_produto) ON DELETE CASCADE,
    CONSTRAINT fk_pf_fornecedor 
        FOREIGN KEY (cnpj_fornecedor) REFERENCES fornecedores(cnpj) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. Tabela CLIENTE (Entidade Forte)
CREATE TABLE clientes (
    cpf VARCHAR(14) PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100)
) ENGINE=InnoDB;

-- 7. Tabela FUNCIONARIO (Entidade Forte)
CREATE TABLE funcionarios (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(20) NOT NULL UNIQUE,
    nome_funcionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL DEFAULT 'Caixa'
) ENGINE=InnoDB;

-- 8. Tabela VENDA (Possui Chaves Estrangeiras para Cliente e Funcionario)
CREATE TABLE vendas (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    cpf_cliente VARCHAR(14), -- Pode ser NULL se o cliente não quiser CPF na nota
    id_funcionario INT NOT NULL,
    CONSTRAINT fk_vendas_clientes 
        FOREIGN KEY (cpf_cliente) REFERENCES clientes(cpf) ON DELETE SET NULL,
    CONSTRAINT fk_vendas_funcionarios 
        FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario)
) ENGINE=InnoDB;

-- 9. Tabela ITEM_VENDA (Tabela Associativa que resolve N:M entre Venda e Produto)
CREATE TABLE itens_venda (
    id_venda INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL, -- Registra o preço do dia da venda
    PRIMARY KEY (id_venda, id_produto),
    CONSTRAINT fk_iv_venda 
        FOREIGN KEY (id_venda) REFERENCES vendas(id_venda) ON DELETE CASCADE,
    CONSTRAINT fk_iv_produto 
        FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
) ENGINE=InnoDB;

```

---

---

## 5. ✏️ Exercício Prático Dirigido (Para Sala de Aula)

### 🎯 O Desafio

O gerente do Supermercado solicitou uma nova funcionalidade no sistema: **O Módulo de Cupons de Desconto**.

* **Regras de Negócio:**
1. O supermercado cadastrará **Cupons de Desconto** (ex: "PARABENS10", "BLACKFRIDAY").
2. Cada cupom possui um código único, um percentual de desconto (ex: 10%) e uma data de validade.
3. Uma **Venda** pode utilizar no máximo **1 Cupom de Desconto**.
4. O mesmo Cupom de Desconto pode ser utilizado em **Várias Vendas** por clientes diferentes até sua data de expiração.



**Sua Tarefa:**

1. Determine a cardinalidade entre `CUPOM` e `VENDA`.
2. Identifique onde deve ficar a Chave Estrangeira ($FK$).
3. Escreva os comandos SQL para criar a nova tabela e atualizar a tabela de vendas no MySQL.

---

### ✅ Gabarito Completo do Exercício

#### Passo 1: Análise de Cardinalidade

* *Uma Venda aceita quantos Cupons?* No máximo **1** Cupom ($1$).
* *Um Cupom pode ser aplicado em quantas Vendas?* Em **Várias** Vendas ($N$).
* **Resultado:** Relacionamento **1:N** entre `CUPOM` (Lado 1) e `VENDA` (Lado N).

#### Passo 2: Regra da Chave Estrangeira

No relacionamento $1:N$, a Chave Estrangeira ($FK$) sempre deve ser colocada no **Lado N** da relação. Portanto, a coluna `id_cupom` deve ser adicionada como $FK$ dentro da tabela `VENDA`.

#### Passo 3: Script SQL de Resolução (MySQL)

```sql
-- 1. Criação da nova entidade CUPOM
CREATE TABLE cupons (
    id_cupom INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    percentual_desconto DECIMAL(5,2) NOT NULL CHECK (percentual_desconto > 0 AND percentual_desconto <= 100),
    data_validade DATE NOT NULL
) ENGINE=InnoDB;

-- 2. Alteração na tabela VENDA para incluir a Chave Estrangeira (DDL)
ALTER TABLE vendas 
ADD COLUMN id_cupom INT NULL,
ADD CONSTRAINT fk_vendas_cupons 
    FOREIGN KEY (id_cupom) REFERENCES cupons(id_cupom) 
    ON DELETE SET NULL;

```

**Explicação Didática do Gabarito:**

1. Criamos a tabela `cupons` com uma restrição `CHECK` para garantir que o desconto esteja entre $0\%$ e $100\%$.
2. Utilizamos o comando `ALTER TABLE vendas ADD COLUMN id_cupom INT NULL` para permitir que o campo aceite valores nulos (já que o uso do cupom na venda é opcional).
3. Definimos a restrição `ON DELETE SET NULL`: se um cupom for apagado do sistema, o histórico de vendas passadas que usaram aquele cupom não será deletado; apenas o campo da $FK$ ficará marcado como nulo.