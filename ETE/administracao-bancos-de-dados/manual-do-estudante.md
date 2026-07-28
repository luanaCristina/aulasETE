# 📘 Manual de Apoio ao Estudante — Administração de Bancos de Dados

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco — Profª Luana Cristina**
**Módulo 1 | PostgreSQL & SQL**

---

## Sumário

1. [Resumo Teórico Essencial](#1-resumo-teórico-essencial)
2. [Exemplos de Código Comentados Linha a Linha](#2-exemplos-de-código-comentados-linha-a-linha)
3. [Glossário Técnico](#3-glossário-técnico)
4. [Links e Recursos Gratuitos Recomendados](#4-links-e-recursos-gratuitos-recomendados)

---

## 1. Resumo Teórico Essencial

### 1.1 O que é um Banco de Dados?

**Analogia: Armário de fichas**

Imagine um armário com várias gavetas etiquetadas. Cada gaveta guarda fichas de um assunto específico (clientes, produtos, vendas). Um banco de dados funciona exatamente assim: é um local organizado para guardar informações de forma estruturada, onde cada "gaveta" é uma tabela e cada "ficha" é um registro (linha).

**Definição técnica:** Um Banco de Dados (BD) é uma coleção organizada de dados inter-relacionados, armazenados de forma persistente e acessíveis eletronicamente.

### 1.2 O que é um SGBD?

**Analogia: O bibliotecário**

Se o banco de dados é a biblioteca, o SGBD é o bibliotecário. Ele sabe onde cada livro está, controla quem pode pegar emprestado, garante que ninguém rasgue as páginas e mantém tudo organizado. Você não mexe nas estantes diretamente — pede ao bibliotecário.

**Definição técnica:** O Sistema Gerenciador de Banco de Dados (SGBD) é o software que gerencia o acesso, a segurança, a integridade e a manipulação dos dados. Exemplos: PostgreSQL, MySQL, Oracle, SQL Server.

### 1.3 Tabelas, Linhas e Colunas

| Conceito | Analogia | Descrição |
|----------|----------|-----------|
| **Tabela** | Planilha do Excel | Estrutura que armazena dados sobre um assunto |
| **Coluna** | Cabeçalho da planilha | Define o tipo de informação (nome, idade, CPF) |
| **Linha (Registro)** | Uma linha preenchida | Um item completo de dados |


### 1.4 Chave Primária (PK) e Chave Estrangeira (FK)

**Chave Primária (Primary Key — PK):**
É como o CPF de cada registro — um valor único que identifica aquela linha sem ambiguidade. Nenhuma tabela pode ter duas linhas com a mesma PK.

**Chave Estrangeira (Foreign Key — FK):**
É como uma referência cruzada. Imagine que na ficha de um pedido você anota o CPF do cliente. Esse CPF é a FK — ele "aponta" para o registro completo do cliente em outra tabela.

### 1.5 Tipos de Dados Comuns no PostgreSQL

| Tipo | Uso | Exemplo |
|------|-----|---------|
| `INTEGER` | Números inteiros | idade, quantidade |
| `SERIAL` | Inteiro auto-incrementável | id |
| `VARCHAR(n)` | Texto com limite | nome, email |
| `TEXT` | Texto sem limite | descrição longa |
| `NUMERIC(p,s)` | Números decimais precisos | preço, salário |
| `DATE` | Datas | data_nascimento |
| `TIMESTAMP` | Data e hora | criado_em |
| `BOOLEAN` | Verdadeiro/Falso | ativo |

### 1.6 Normalização — Organizando sem repetição

**Analogia geral:** Normalizar é como organizar uma mudança — cada caixa só deve ter itens de uma categoria, sem repetir o mesmo item em várias caixas.

**1ª Forma Normal (1FN) — "Cada célula com um único valor"**
- Analogia: Numa lista telefônica, cada linha tem UM nome e UM telefone. Não vale colocar "João: 9999, 8888" na mesma célula.
- Regra: Eliminar grupos repetitivos e atributos multivalorados.

**2ª Forma Normal (2FN) — "Tudo depende da chave inteira"**
- Analogia: Se a ficha é identificada por "Matrícula + Disciplina", o nome do aluno depende SÓ da matrícula, não do par completo. Então o nome vai para outra tabela.
- Regra: Eliminar dependências parciais (só se aplica com chave composta).

**3ª Forma Normal (3FN) — "Nada depende de algo que não é chave"**
- Analogia: Se na ficha do aluno você coloca "cidade" e "estado", o estado depende da cidade, não do aluno. Separe cidade em outra tabela.
- Regra: Eliminar dependências transitivas.

### 1.7 DDL vs DML

| Categoria | Significado | Comandos | O que faz |
|-----------|-------------|----------|-----------|
| **DDL** | Data Definition Language | CREATE, ALTER, DROP | Define/modifica estrutura |
| **DML** | Data Manipulation Language | INSERT, UPDATE, DELETE | Manipula os dados |
| **DQL** | Data Query Language | SELECT | Consulta os dados |


### 1.8 JOINs — Juntando tabelas

**Analogia: Juntar duas planilhas pelo CPF**

Imagine que você tem uma planilha de "Clientes" (com CPF, nome, email) e outra de "Pedidos" (com número do pedido, CPF do cliente, produto). Para saber o nome do cliente que fez cada pedido, você precisa JUNTAR as planilhas usando o CPF como ponte. Isso é um JOIN!

| Tipo de JOIN | O que retorna |
|--------------|---------------|
| **INNER JOIN** | Só os registros que existem nas DUAS tabelas |
| **LEFT JOIN** | Todos da tabela da esquerda + correspondências da direita (NULL se não houver) |
| **RIGHT JOIN** | Todos da tabela da direita + correspondências da esquerda |
| **FULL JOIN** | Todos de ambas (NULL onde não houver correspondência) |

### 1.9 Funções de Agregação

Funções que operam sobre um **grupo** de linhas e retornam um único valor:

| Função | O que faz | Exemplo |
|--------|-----------|---------|
| `COUNT(*)` | Conta quantas linhas existem | `SELECT COUNT(*) FROM alunos` |
| `SUM(coluna)` | Soma os valores | `SELECT SUM(nota_final) FROM alunos` |
| `AVG(coluna)` | Calcula a média | `SELECT AVG(nota_final) FROM alunos` |
| `MAX(coluna)` | Retorna o maior valor | `SELECT MAX(nota_final) FROM alunos` |
| `MIN(coluna)` | Retorna o menor valor | `SELECT MIN(nota_final) FROM alunos` |

**GROUP BY:** Agrupa resultados por uma coluna antes de aplicar a função.

**HAVING:** Filtra APÓS o agrupamento (WHERE filtra ANTES do agrupamento).

### 1.10 Transações — Tudo ou Nada

**Analogia: Transferência bancária**

Quando você transfere dinheiro de uma conta para outra, DUAS operações precisam acontecer: debitar da conta A e creditar na conta B. Se só uma acontecer, há um problema grave! Uma transação garante que AMBAS aconteçam ou NENHUMA.

**Propriedades ACID:**
- **A**tomicidade: Tudo ou nada — todas as operações são executadas, ou nenhuma é
- **C**onsistência: O banco nunca fica em estado inválido
- **I**solamento: Transações simultâneas não interferem entre si
- **D**urabilidade: Dados confirmados são permanentes (sobrevivem a quedas de energia)

### 1.11 Índices — Acelerando Buscas

**Analogia: Índice remissivo de um livro**

Sem índice, para achar um assunto no livro você precisa ler página por página. Com índice, você vai direto à página correta. No banco de dados, um índice acelera buscas em colunas específicas.

**Quando usar:** Colunas frequentemente usadas em WHERE, JOIN ou ORDER BY.
**Quando NÃO usar:** Tabelas pequenas ou colunas raramente consultadas (índice ocupa espaço e deixa INSERT/UPDATE mais lento).

---

## 2. Exemplos de Código Comentados Linha a Linha

### 2.1 CREATE TABLE completo com constraints

```sql
-- Criando a tabela de alunos com todas as restrições necessárias
CREATE TABLE alunos (
    -- Coluna 'id': chave primária auto-incrementável (SERIAL gera números sequenciais)
    id SERIAL PRIMARY KEY,

    -- Coluna 'nome': texto obrigatório com máximo de 100 caracteres
    nome VARCHAR(100) NOT NULL,

    -- Coluna 'cpf': texto único de 11 caracteres (não pode repetir entre alunos)
    cpf CHAR(11) UNIQUE NOT NULL,

    -- Coluna 'email': texto opcional com máximo de 150 caracteres
    email VARCHAR(150),

    -- Coluna 'data_nascimento': armazena apenas a data (sem hora)
    data_nascimento DATE NOT NULL,

    -- Coluna 'nota_final': número decimal com 1 casa, deve estar entre 0 e 10
    nota_final NUMERIC(4,1) CHECK (nota_final >= 0 AND nota_final <= 10),

    -- Coluna 'ativo': valor lógico com padrão TRUE (aluno começa ativo)
    ativo BOOLEAN DEFAULT TRUE,

    -- Coluna 'turma_id': chave estrangeira que referencia a tabela 'turmas'
    turma_id INTEGER REFERENCES turmas(id),

    -- Coluna 'criado_em': registra automaticamente quando o registro foi criado
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2.2 INSERT com múltiplas linhas

```sql
-- Inserindo vários alunos de uma só vez na tabela
INSERT INTO alunos (nome, cpf, email, data_nascimento, turma_id)
VALUES
    -- Primeiro aluno: Maria, turma 1
    ('Maria Silva', '12345678901', 'maria@email.com', '2005-03-15', 1),

    -- Segundo aluno: João, turma 1
    ('João Santos', '98765432100', 'joao@email.com', '2004-11-20', 1),

    -- Terceiro aluno: Ana, turma 2
    ('Ana Oliveira', '45678912300', 'ana@email.com', '2005-07-08', 2),

    -- Quarto aluno: Pedro, sem email (campo opcional), turma 2
    ('Pedro Costa', '78912345600', NULL, '2005-01-30', 2);
```


### 2.3 SELECT com WHERE, ORDER BY, LIMIT

```sql
-- Buscando alunos com filtros, ordenação e limite de resultados
SELECT
    -- Selecionando apenas as colunas que queremos ver
    nome,
    email,
    nota_final
FROM
    -- Tabela de onde vêm os dados
    alunos
WHERE
    -- Filtro 1: apenas alunos ativos
    ativo = TRUE
    -- Filtro 2: nota final maior ou igual a 7 (operador AND combina condições)
    AND nota_final >= 7.0
ORDER BY
    -- Ordenando por nota do maior para menor (DESC = descendente)
    nota_final DESC
LIMIT
    -- Retornando apenas os 10 primeiros resultados
    10;
```

### 2.4 JOIN (INNER e LEFT) com 3 tabelas

```sql
-- Consulta que junta 3 tabelas: alunos, turmas e professores
-- Objetivo: listar aluno, sua turma e o professor responsável
SELECT
    -- Da tabela alunos: nome do aluno (usamos alias 'a' para abreviar)
    a.nome AS nome_aluno,
    -- Da tabela alunos: nota final
    a.nota_final,
    -- Da tabela turmas: nome da turma (alias 't')
    t.nome AS nome_turma,
    -- Da tabela professores: nome do professor (alias 'p')
    p.nome AS nome_professor
FROM
    -- Tabela principal: alunos (apelidada de 'a')
    alunos a
-- INNER JOIN: só retorna alunos que TÊM turma cadastrada
INNER JOIN turmas t
    -- Condição de junção: turma_id do aluno = id da turma
    ON a.turma_id = t.id
-- LEFT JOIN: retorna todas as turmas, mesmo sem professor designado
LEFT JOIN professores p
    -- Condição: professor_id da turma = id do professor
    ON t.professor_id = p.id
WHERE
    -- Filtro: apenas turmas do turno da manhã
    t.turno = 'manhã'
ORDER BY
    -- Ordenando pelo nome da turma, depois pelo nome do aluno
    t.nome, a.nome;
```

### 2.5 UPDATE com WHERE (⚠️ Cuidado!)

```sql
-- ⚠️ ATENÇÃO: NUNCA esqueça o WHERE no UPDATE!
-- Sem WHERE, TODOS os registros da tabela serão alterados!

-- Exemplo CORRETO: atualizando a nota de um aluno específico
UPDATE alunos
SET
    -- Alterando a nota final para 8.5
    nota_final = 8.5,
    -- Registrando quando foi a última atualização (NOW() = data/hora atual)
    atualizado_em = NOW()
WHERE
    -- Condição: apenas o aluno com CPF específico será alterado
    cpf = '12345678901';

-- ❌ EXEMPLO PERIGOSO (NÃO FAÇA ISSO):
-- UPDATE alunos SET ativo = FALSE;
-- Isso desativaria TODOS os alunos da tabela!
```

### 2.6 CREATE VIEW

```sql
-- VIEW é uma "consulta salva" que funciona como uma tabela virtual
-- Útil para consultas complexas que você usa com frequência

-- Criando uma view que mostra o boletim resumido de cada aluno
CREATE VIEW vw_boletim_resumido AS
SELECT
    -- Nome do aluno
    a.nome AS aluno,
    -- Turma do aluno
    t.nome AS turma,
    -- Nota final
    a.nota_final,
    -- Coluna calculada: situação do aluno baseada na nota
    CASE
        WHEN a.nota_final >= 7.0 THEN 'Aprovado'
        WHEN a.nota_final >= 5.0 THEN 'Recuperação'
        ELSE 'Reprovado'
    END AS situacao
FROM
    alunos a
INNER JOIN turmas t ON a.turma_id = t.id
WHERE
    a.ativo = TRUE;

-- Agora podemos consultar a view como se fosse uma tabela:
-- SELECT * FROM vw_boletim_resumido WHERE situacao = 'Aprovado';
```

### 2.7 GROUP BY com Funções de Agregação

```sql
-- Relatório: quantidade de alunos e média de notas por turma
SELECT
    -- Nome da turma (vem da tabela turmas via JOIN)
    t.nome AS turma,

    -- COUNT(*) conta quantos alunos estão em cada turma
    COUNT(*) AS total_alunos,

    -- AVG() calcula a média das notas; ROUND() arredonda para 2 casas
    ROUND(AVG(a.nota_final), 2) AS media_turma,

    -- MAX() e MIN() encontram a maior e menor nota do grupo
    MAX(a.nota_final) AS maior_nota,
    MIN(a.nota_final) AS menor_nota

FROM alunos a
INNER JOIN turmas t ON a.turma_id = t.id
WHERE
    -- Considerar apenas alunos ativos
    a.ativo = TRUE
-- GROUP BY: agrupa os resultados por turma (obrigatório com funções de agregação)
GROUP BY t.nome
-- HAVING: filtra APÓS agrupar (diferente do WHERE que filtra ANTES)
HAVING COUNT(*) >= 5
-- Ordenando pela média (descendente)
ORDER BY media_turma DESC;
```

### 2.8 Transação (BEGIN, COMMIT, ROLLBACK)

```sql
-- Transação: transferir aluno de uma turma para outra
-- Garantimos que AMBAS as operações aconteçam ou NENHUMA

-- BEGIN inicia a transação (a partir daqui, nada é definitivo até o COMMIT)
BEGIN;

-- Passo 1: Registrar a saída do aluno na turma anterior (log/histórico)
INSERT INTO historico_turmas (aluno_id, turma_anterior, turma_nova, data_mudanca)
VALUES (42, 1, 2, CURRENT_DATE);

-- Passo 2: Atualizar a turma do aluno
UPDATE alunos
SET turma_id = 2
WHERE id = 42;

-- Se tudo deu certo: COMMIT confirma ambas as operações definitivamente
COMMIT;

-- Se algo deu errado: use ROLLBACK para desfazer TUDO desde o BEGIN
-- ROLLBACK;
```

---

## 3. Glossário Técnico

| Termo em Inglês | Tradução/Explicação em Português |
|-----------------|----------------------------------|
| **Database** | Banco de dados — local onde os dados são armazenados de forma organizada |
| **Table** | Tabela — estrutura com linhas e colunas que armazena dados de um assunto |
| **Row (Record)** | Linha (Registro) — um conjunto completo de dados na tabela |
| **Column (Field)** | Coluna (Campo) — define o tipo de informação armazenada |
| **Primary Key (PK)** | Chave Primária — identificador único de cada registro (como o CPF) |
| **Foreign Key (FK)** | Chave Estrangeira — referência a um registro de outra tabela |
| **Constraint** | Restrição — regra aplicada a uma coluna (NOT NULL, UNIQUE, CHECK) |
| **Query** | Consulta — comando para buscar ou manipular dados |
| **Schema** | Esquema — estrutura lógica que organiza tabelas e outros objetos |
| **Index** | Índice — estrutura que acelera buscas (como o índice de um livro) |
| **Trigger** | Gatilho — ação automática executada quando algo acontece na tabela |
| **View** | Visão — consulta salva que se comporta como uma tabela virtual |
| **Transaction** | Transação — conjunto de operações que devem ser executadas por completo ou canceladas |
| **Commit** | Confirmar — salvar definitivamente as alterações de uma transação |
| **Rollback** | Reverter — desfazer todas as alterações de uma transação |
| **DDL** | Data Definition Language — comandos que definem estrutura (CREATE, ALTER, DROP) |
| **DML** | Data Manipulation Language — comandos que manipulam dados (INSERT, UPDATE, DELETE) |
| **DQL** | Data Query Language — comando de consulta (SELECT) |
| **CRUD** | Create, Read, Update, Delete — as 4 operações básicas de dados |
| **Normalize** | Normalizar — processo de organizar tabelas para evitar redundância |
| **Join** | Junção — combinar dados de duas ou mais tabelas relacionadas |
| **Alias** | Apelido — nome temporário dado a uma tabela ou coluna (AS) |
| **Aggregate** | Agregação — funções que operam sobre grupos (COUNT, SUM, AVG, MAX, MIN) |
| **Subquery** | Subconsulta — uma consulta SELECT dentro de outra consulta |
| **Clause** | Cláusula — parte de um comando SQL (WHERE, ORDER BY, GROUP BY) |
| **Statement** | Instrução/Comando — um comando SQL completo |
| **Migration** | Migração — script que altera a estrutura do banco de forma versionada |
| **Seed** | Semeadura — script que insere dados iniciais/de teste no banco |
| **Dump** | Despejo — exportação completa do banco (dados + estrutura) para arquivo |
| **Backup** | Cópia de segurança — salvamento dos dados para recuperação futura |

---

## 4. Links e Recursos Gratuitos Recomendados

### 📚 Documentação Oficial
- **PostgreSQL Docs (PT-BR):** [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/) — Documentação completa e oficial
- **pgAdmin 4:** [https://www.pgadmin.org/](https://www.pgadmin.org/) — Interface gráfica gratuita para gerenciar PostgreSQL

### 🎓 Cursos Gratuitos
- **Curso em Vídeo — MySQL (Gustavo Guanabara):** [https://www.cursoemvideo.com/curso/mysql/](https://www.cursoemvideo.com/curso/mysql/) — Conceitos de SQL aplicáveis ao PostgreSQL
- **Khan Academy — Intro to SQL:** [https://www.khanacademy.org/computing/computer-programming/sql](https://www.khanacademy.org/computing/computer-programming/sql)

### 🏋️ Prática Interativa
- **SQLBolt:** [https://sqlbolt.com/](https://sqlbolt.com/) — Exercícios interativos de SQL no navegador
- **W3Schools SQL Tutorial:** [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/) — Tutorial com editor online
- **Mode Analytics SQL Tutorial:** [https://mode.com/sql-tutorial](https://mode.com/sql-tutorial) — Do básico ao avançado

### 🛠️ Ferramentas
- **DB Fiddle:** [https://www.db-fiddle.com/](https://www.db-fiddle.com/) — Teste SQL no navegador sem instalar nada
- **DrawSQL:** [https://drawsql.app/](https://drawsql.app/) — Desenhe diagramas de banco gratuitamente
- **SQL Formatter:** [https://www.dpriver.com/pp/sqlformat.htm](https://www.dpriver.com/pp/sqlformat.htm) — Formate seu SQL automaticamente

---

> 💡 **Dica da Profª Luana:** "Banco de dados é como aprender a organizar uma casa — no início parece muita regra, mas depois que você entende a lógica, tudo fica mais fácil de encontrar e manter!"

---

*Manual atualizado em 2025 | ETE Pernambuco — Curso Técnico em Desenvolvimento de Sistemas*
