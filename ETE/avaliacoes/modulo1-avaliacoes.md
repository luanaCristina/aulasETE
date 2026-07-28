# 📋 Pacote de Avaliações — Módulo 1

| Informação | Detalhe |
|---|---|
| **Curso** | Técnico em Desenvolvimento de Sistemas |
| **Instituição** | ETE Pernambuco |
| **Módulo** | 1 — Fundamentos |
| **Professora** | Profª Luana Cristina |
| **Disciplinas** | Administração de Bancos de Dados • Lógica e Pensamento Computacional • Programação Python Desktop • Design Centrado no Usuário • Design Thinking • Engenharia de Software |

---

## 1. Lista de Exercícios Práticos

> 10 questões progressivas cobrindo todas as disciplinas do módulo.

---

### 🟢 Questões Fáceis

**Questão 1** — [🟢 Fácil] — Administração de Bancos de Dados

Escreva um comando SQL (PostgreSQL) que crie uma tabela chamada `alunos` com as seguintes colunas:
- `id` (inteiro, chave primária, auto incremento)
- `nome` (texto, não nulo, máximo 100 caracteres)
- `email` (texto, único)
- `data_nascimento` (data)

**Esperado:** Comando `CREATE TABLE` completo e funcional no PostgreSQL.

---

**Questão 2** — [🟢 Fácil] — Lógica e Pensamento Computacional

Escreva um algoritmo em Portugol que leia dois números inteiros do usuário e exiba qual deles é o maior. Caso sejam iguais, exiba a mensagem "Os números são iguais".

**Esperado:** Algoritmo completo com declaração de variáveis, leitura, condicional (se/senão) e escrita.

---

**Questão 3** — [🟢 Fácil] — Design Centrado no Usuário

Defina o que é uma **Persona** no contexto de UX Design e liste os 5 elementos essenciais que toda persona deve conter.

**Esperado:** Definição conceitual + lista dos elementos (nome fictício, foto, dados demográficos, objetivos/necessidades, frustrações/dores).

---

**Questão 4** — [🟢 Fácil] — Design Thinking

Quais são os **3 pilares** do Design Thinking? Explique cada um em uma frase.

**Esperado:** Empatia, Colaboração e Experimentação — com explicação resumida de cada pilar.

---

### 🟡 Questões Médias

**Questão 5** — [🟡 Médio] — Administração de Bancos de Dados

Dada a seguinte estrutura de tabelas:

```sql
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2),
    departamento_id INTEGER REFERENCES departamentos(id)
);
```

Escreva uma consulta SQL que retorne o **nome do departamento** e a **média salarial** dos funcionários de cada departamento, exibindo apenas departamentos com média salarial superior a R$ 3.000,00. Ordene do maior para o menor.

**Esperado:** SELECT com JOIN, GROUP BY, HAVING e ORDER BY corretos.

---

**Questão 6** — [🟡 Médio] — Lógica e Pensamento Computacional

Escreva um algoritmo em Portugol que preencha um vetor de 10 posições com números digitados pelo usuário e, ao final, exiba:
- A soma de todos os números
- A média aritmética
- O maior valor do vetor

**Esperado:** Uso correto de vetor, laço `para`, variáveis acumuladoras e lógica de busca do maior.

---

**Questão 7** — [🟡 Médio] — Programação Python Desktop

Crie uma função Python chamada `validar_cpf(cpf: str) -> bool` que receba uma string e verifique se ela possui exatamente 11 dígitos numéricos (sem pontos ou traços). A função deve retornar `True` se for válida e `False` caso contrário.

**Esperado:** Função com validação de tamanho e verificação se todos os caracteres são dígitos usando métodos de string.

---

**Questão 8** — [🟡 Médio] — Engenharia de Software

Desenhe um **Diagrama de Classes UML** simplificado para um sistema de biblioteca com as seguintes entidades: `Livro`, `Autor` e `Emprestimo`. Inclua:
- Atributos principais de cada classe
- Métodos relevantes
- Relacionamentos com cardinalidade

**Esperado:** Diagrama em notação UML com atributos, métodos, associações e multiplicidades corretas.

---

### 🔴 Questões Difíceis

**Questão 9** — [🔴 Difícil] — Integração: Banco de Dados + Python + Engenharia de Software

Você precisa criar um módulo Python que se conecte a um banco de dados PostgreSQL usando `psycopg2` e implemente o padrão **Repository** para a entidade `Produto`. A tabela no banco é:

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INTEGER DEFAULT 0
);
```

Implemente a classe `ProdutoRepository` com os métodos:
- `buscar_todos() -> list`
- `buscar_por_id(id: int) -> dict`
- `inserir(nome: str, preco: float, estoque: int) -> int` (retorna o id criado)
- `atualizar_estoque(id: int, novo_estoque: int) -> bool`

**Esperado:** Classe completa com conexão psycopg2, tratamento de exceções, uso de parameterized queries (contra SQL Injection) e fechamento adequado de cursor/conexão.

---

**Questão 10** — [🔴 Difícil] — Integração: Design Thinking + UX + Lógica

Uma startup de saúde deseja criar um aplicativo para agendamento de consultas médicas. Utilizando as metodologias estudadas:

1. **Crie uma declaração POV** (Point of View) para o problema
2. **Formule 3 perguntas HMW** (How Might We) a partir do POV
3. **Elabore uma persona** do usuário principal
4. **Descreva um fluxo lógico** (em pseudocódigo/Portugol) do processo de agendamento: o usuário escolhe especialidade → seleciona médico → escolhe data/horário → confirma agendamento

**Esperado:** POV no formato "[Usuário] precisa de [necessidade] porque [insight]"; 3 HMWs relevantes; persona completa; algoritmo com condicionais e validações.

---

## 2. Guia de Revisão Rápida para Prova

### Tabela de Revisão

| Tópico | O que cai | Dica de estudo |
|--------|-----------|----------------|
| **SQL — DDL** | CREATE TABLE, ALTER TABLE, DROP, constraints (PK, FK, UNIQUE, NOT NULL) | Pratique criando tabelas com todos os tipos de constraints |
| **SQL — DML** | INSERT, UPDATE com WHERE, DELETE, SELECT simples | Nunca esqueça o WHERE no UPDATE/DELETE! |
| **SQL — Consultas** | JOIN (INNER, LEFT), GROUP BY, HAVING, ORDER BY, funções de agregação | Monte consultas passo a passo: primeiro o FROM/JOIN, depois WHERE, GROUP BY |
| **Normalização** | 1FN, 2FN, 3FN — identificar anomalias e dependências | Decore: 1FN=atômico, 2FN=sem dep. parcial, 3FN=sem dep. transitiva |
| **Portugol — Estruturas** | Variáveis, tipos, entrada/saída, condicionais (se/senão/escolha) | Trace o algoritmo mentalmente com valores de teste |
| **Portugol — Repetição** | enquanto, para, faça-enquanto, contadores e acumuladores | Identifique: quando usar PARA (sabe qtd) vs ENQUANTO (não sabe) |
| **Portugol — Vetores** | Declaração, preenchimento, busca, ordenação simples | Pratique percorrer vetores com laço PARA |
| **Portugol — Funções** | Declaração, parâmetros, retorno, escopo de variáveis | Funções = reutilização. Sempre defina tipo de retorno |
| **Python — Básico** | Funções, listas, dicionários, tratamento de exceções (try/except) | Python usa indentação — cuidado com tabs vs espaços |
| **Python — Tkinter** | Widgets (Label, Entry, Button), layout (pack/grid), eventos | Memorize: `from tkinter import *` e padrão de janela básica |
| **Python — psycopg2** | Conexão, cursor, execute, fetchall, commit, close | Sempre use `%s` para parâmetros (nunca f-string em SQL!) |
| **UX — Personas** | Estrutura, dados demográficos, objetivos, dores, cenário | Persona ≠ público-alvo. Persona é UM personagem fictício específico |
| **UX — Gestalt** | Proximidade, similaridade, continuidade, fechamento, figura-fundo | Associe cada princípio a um exemplo visual real |
| **UX — Jornada** | Etapas, pontos de contato, emoções, oportunidades | Mapa de jornada = linha do tempo da experiência do usuário |
| **Design Thinking — Etapas** | Empatizar, Definir, Idear, Prototipar, Testar | As 5 etapas NÃO são lineares — são iterativas! |
| **Design Thinking — Ferramentas** | POV, HMW, Brainstorming, MVP, Pitch | POV = síntese do problema; HMW = reformular como oportunidade |
| **Eng. Software — Scrum** | Papéis (PO, SM, Dev), cerimônias (Sprint, Daily, Review, Retro), artefatos | Sprint = tempo fixo (1-4 semanas). Daily = 15 min em pé |
| **Eng. Software — UML** | Diagrama de Classes, Casos de Uso — notação básica | Classe = retângulo dividido em 3 (nome, atributos, métodos) |
| **Eng. Software — Padrões** | Singleton, Factory Method — quando usar cada um | Singleton = única instância. Factory = criar objetos sem expor lógica |

---

### ⚠️ Pegadinhas Comuns

| Pegadinha | Explicação |
|-----------|-----------|
| `UPDATE` sem `WHERE` | Atualiza TODAS as linhas da tabela — desastre! |
| `DELETE` sem `WHERE` | Apaga TODOS os registros — irreversível em produção |
| Confundir `WHERE` com `HAVING` | WHERE filtra linhas ANTES do agrupamento; HAVING filtra DEPOIS |
| `LEFT JOIN` vs `INNER JOIN` | LEFT traz registros mesmo sem correspondência; INNER exige match |
| Variável não inicializada em Portugol | Acumuladores e contadores devem começar em 0 |
| Índice de vetor começando em 0 ou 1 | Em Portugol Studio começa em 1; em Python começa em 0! |
| Escopo de variável em função | Variável declarada dentro da função NÃO existe fora dela |
| `=` vs `==` em Python | `=` é atribuição; `==` é comparação. Trocar causa erro! |
| f-string em queries SQL | NUNCA use f-string com psycopg2 — causa SQL Injection |
| Confundir Persona com Público-alvo | Persona é um personagem específico; público-alvo é um grupo demográfico |
| Esquecer que Design Thinking é iterativo | As 5 etapas não são sequenciais — você pode voltar a qualquer etapa |
| Daily Scrum ≠ reunião de status | Daily é para o TIME se sincronizar, não para reportar ao chefe |
| Sprint Review ≠ Sprint Retrospective | Review = demonstrar o incremento; Retro = melhorar o processo |

---

## 3. Avaliações Oficiais

---

### 📝 PROVA A — Avaliação Regular

**Valor total: 10,0 pontos**
- Questões objetivas (1-5): 0,5 ponto cada = 2,5 pontos
- Questões práticas (6-8): 2,5 pontos cada = 7,5 pontos

---

#### Questões Objetivas (Múltipla Escolha)

**1.** (0,5 pt) — Administração de Bancos de Dados

Qual comando SQL é utilizado para adicionar uma nova coluna a uma tabela já existente?

a) `INSERT INTO tabela ADD COLUMN nome VARCHAR(50);`
b) `ALTER TABLE tabela ADD COLUMN nome VARCHAR(50);`
c) `UPDATE TABLE tabela ADD nome VARCHAR(50);`
d) `CREATE COLUMN nome VARCHAR(50) IN tabela;`
e) `MODIFY TABLE tabela NEW COLUMN nome VARCHAR(50);`

---

**2.** (0,5 pt) — Lógica e Pensamento Computacional

Analise o trecho em Portugol:
```
inteiro x = 10
enquanto (x > 0) {
    x = x - 3
}
escreva(x)
```
Qual valor será exibido na tela?

a) 0
b) 1
c) -2
d) 3
e) -1

---

**3.** (0,5 pt) — Design Centrado no Usuário

Qual princípio da Gestalt explica por que elementos visuais próximos uns dos outros são percebidos como pertencentes ao mesmo grupo?

a) Similaridade
b) Continuidade
c) Proximidade
d) Fechamento
e) Figura-fundo

---

**4.** (0,5 pt) — Design Thinking

Na etapa de **Definir** do Design Thinking, utilizamos uma ferramenta chamada POV (Point of View). Qual é a estrutura correta de uma declaração POV?

a) "O problema é [X] e a solução é [Y]"
b) "[Usuário] precisa de [necessidade] porque [insight]"
c) "Como podemos [desafio] para [benefício]?"
d) "[Produto] resolve [problema] para [mercado]"
e) "Se [hipótese], então [resultado esperado]"

---

**5.** (0,5 pt) — Engenharia de Software

No framework Scrum, qual é a duração máxima recomendada para a cerimônia Daily Scrum?

a) 30 minutos
b) 1 hora
c) 15 minutos
d) 45 minutos
e) Sem limite definido

---

#### Questões Práticas / Dissertativas

**6.** (2,5 pts) — Administração de Bancos de Dados + SQL

Considere o seguinte modelo de dados para um sistema de vendas:

```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    data_pedido DATE NOT NULL,
    valor_total DECIMAL(10,2)
);
```

**Realize as seguintes tarefas:**

a) (1,0 pt) Escreva uma consulta que retorne o nome do cliente e o valor total de TODOS os seus pedidos realizados em 2024, ordenados pelo valor total decrescente.

b) (0,75 pt) Escreva um comando UPDATE que aplique um desconto de 10% no `valor_total` de todos os pedidos do cliente com `id = 5` realizados após '2024-06-01'.

c) (0,75 pt) Explique o que aconteceria se tentássemos excluir um registro da tabela `clientes` que possui pedidos associados na tabela `pedidos`, e como resolver isso com `ON DELETE CASCADE`.

---

**7.** (2,5 pts) — Lógica e Pensamento Computacional

Escreva um algoritmo em Portugol que implemente um sistema de **caixa registradora simplificado**:

1. O programa deve solicitar o nome e o preço de produtos repetidamente até que o usuário digite "SAIR" como nome do produto
2. Ao final, deve exibir:
   - Quantidade total de produtos
   - Valor total da compra
   - O produto mais caro (nome e preço)
3. Utilize uma **função** separada chamada `calcularDesconto(valor: real, percentual: real) : real` que retorne o valor com desconto aplicado
4. Se o total da compra for maior que R$ 100,00, aplique 5% de desconto usando a função

**Esperado:** Algoritmo completo com laço de repetição (enquanto), função com retorno, variáveis acumuladoras e lógica de seleção do maior.

---

**8.** (2,5 pts) — Programação Python Desktop

Crie um programa Python com interface gráfica usando **Tkinter** que funcione como uma calculadora de IMC (Índice de Massa Corporal):

1. A janela deve ter:
   - Campo de entrada para peso (kg)
   - Campo de entrada para altura (m)
   - Botão "Calcular"
   - Label para exibir o resultado
2. Ao clicar no botão, calcule o IMC (peso / altura²) e exiba a classificação:
   - < 18.5: "Abaixo do peso"
   - 18.5 a 24.9: "Peso normal"
   - 25.0 a 29.9: "Sobrepeso"
   - ≥ 30.0: "Obesidade"
3. Trate erros de entrada inválida (valores não numéricos ou negativos)

**Esperado:** Código Python funcional com Tkinter, organização com funções, tratamento de exceções e interface amigável.

---

### 📝 PROVA B — Substitutiva / Segunda Chamada

**Valor total: 10,0 pontos**
- Questões objetivas (1-5): 0,5 ponto cada = 2,5 pontos
- Questões práticas (6-8): 2,5 pontos cada = 7,5 pontos

---

#### Questões Objetivas (Múltipla Escolha)

**1.** (0,5 pt) — Administração de Bancos de Dados

Qual é a diferença principal entre `INNER JOIN` e `LEFT JOIN`?

a) INNER JOIN é mais rápido que LEFT JOIN
b) LEFT JOIN retorna apenas registros que possuem correspondência em ambas as tabelas
c) INNER JOIN retorna apenas registros com correspondência em ambas as tabelas, enquanto LEFT JOIN retorna todos da tabela à esquerda mesmo sem correspondência
d) LEFT JOIN só funciona com chaves primárias
e) Não há diferença funcional, apenas de performance

---

**2.** (0,5 pt) — Lógica e Pensamento Computacional

Em Portugol, qual estrutura de repetição é mais adequada quando **não sabemos** previamente quantas vezes o laço será executado?

a) para (de 1 até 10)
b) enquanto (condição)
c) escolha (variável)
d) se (condição)
e) para cada (elemento em lista)

---

**3.** (0,5 pt) — Design Centrado no Usuário

O Mapa de Jornada do Usuário é uma ferramenta de UX que representa:

a) O organograma da empresa e seus departamentos
b) A linha do tempo da experiência do usuário com um produto/serviço, incluindo ações, emoções e pontos de contato
c) O fluxo de dados entre sistemas internos
d) A arquitetura de informação do site
e) O plano de testes de usabilidade

---

**4.** (0,5 pt) — Design Thinking

Qual das alternativas abaixo descreve corretamente uma pergunta HMW (How Might We)?

a) É uma pergunta fechada que define a solução do problema
b) É uma reformulação do problema como oportunidade criativa, começando com "Como poderíamos..."
c) É uma métrica de sucesso do projeto
d) É o mesmo que um requisito funcional do sistema
e) É uma técnica exclusiva da etapa de Teste

---

**5.** (0,5 pt) — Engenharia de Software

No padrão de projeto **Singleton**, qual é o principal objetivo?

a) Criar múltiplas instâncias de uma classe para melhorar performance
b) Garantir que uma classe tenha apenas uma instância e fornecer um ponto global de acesso a ela
c) Separar a interface da implementação
d) Permitir que objetos se comuniquem sem acoplamento
e) Encapsular a criação de famílias de objetos relacionados

---

#### Questões Práticas / Dissertativas

**6.** (2,5 pts) — Administração de Bancos de Dados + Normalização

Dada a seguinte tabela NÃO normalizada:

| id_pedido | cliente | telefone_cliente | produto | qtd | preco_unit | total |
|-----------|---------|-----------------|---------|-----|-----------|-------|
| 1 | Maria | 81999001122 | Mouse, Teclado | 1, 1 | 50.00, 80.00 | 130.00 |
| 2 | João | 81988776655 | Monitor | 1 | 900.00 | 900.00 |

**Realize as seguintes tarefas:**

a) (1,0 pt) Identifique TODAS as violações das formas normais (1FN, 2FN e 3FN) presentes nesta tabela.

b) (1,0 pt) Normalize a tabela até a 3ª Forma Normal, apresentando as novas tabelas com suas respectivas chaves primárias e estrangeiras.

c) (0,5 pt) Escreva os comandos `CREATE TABLE` para as tabelas normalizadas.

---

**7.** (2,5 pts) — Lógica e Pensamento Computacional

Escreva um algoritmo em Portugol que implemente um jogo de **adivinhação de números**:

1. O programa deve sortear um número aleatório entre 1 e 50
2. O usuário tem no máximo 7 tentativas para adivinhar
3. A cada tentativa, informe se o número secreto é MAIOR ou MENOR que o palpite
4. Utilize uma **função** chamada `verificarPalpite(palpite: inteiro, secreto: inteiro) : cadeia` que retorne "MAIOR", "MENOR" ou "ACERTOU"
5. Ao final, exiba se o jogador ganhou ou perdeu e quantas tentativas usou

**Esperado:** Algoritmo com função, laço controlado por duas condições (tentativas E não acertou), geração de número aleatório.

---

**8.** (2,5 pts) — Programação Python Desktop + Banco de Dados

Crie uma classe Python chamada `AlunoDAO` que utilize **psycopg2** para realizar operações CRUD na tabela:

```sql
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(20) UNIQUE NOT NULL,
    nota_final DECIMAL(4,2)
);
```

A classe deve conter os métodos:
- `__init__(self)` — estabelece conexão com o banco
- `inserir(self, nome, matricula, nota_final)` — insere um novo aluno
- `listar_aprovados(self)` — retorna alunos com nota_final >= 7.0
- `atualizar_nota(self, matricula, nova_nota)` — atualiza a nota de um aluno
- `fechar_conexao(self)` — fecha a conexão

**Esperado:** Classe com psycopg2, queries parametrizadas, tratamento de exceções com try/except e commit/rollback.

---

### 📝 PROVA DE RECUPERAÇÃO

**Valor total: 10,0 pontos**
- Questões objetivas (1-5): 0,5 ponto cada = 2,5 pontos
- Questões práticas (6-8): 2,5 pontos cada = 7,5 pontos

> Foco nos conteúdos mais essenciais — sem pegadinhas ou casos extremos.

---

#### Questões Objetivas (Múltipla Escolha)

**1.** (0,5 pt) — Administração de Bancos de Dados

Qual comando SQL é utilizado para inserir um novo registro em uma tabela?

a) `ADD INTO alunos VALUES (...);`
b) `INSERT INTO alunos VALUES (...);`
c) `CREATE INTO alunos VALUES (...);`
d) `PUT INTO alunos VALUES (...);`
e) `NEW RECORD alunos VALUES (...);`

---

**2.** (0,5 pt) — Lógica e Pensamento Computacional

Qual é a saída do seguinte trecho em Portugol?

```
inteiro soma = 0
para (inteiro i = 1; i <= 5; i++) {
    soma = soma + i
}
escreva(soma)
```

a) 10
b) 15
c) 5
d) 20
e) 0

---

**3.** (0,5 pt) — Design Centrado no Usuário

Um teste de usabilidade serve para:

a) Verificar se o código está livre de bugs
b) Medir a performance do servidor
c) Observar usuários reais utilizando o produto para identificar problemas de interação
d) Validar os requisitos de segurança do sistema
e) Testar a compatibilidade entre navegadores

---

**4.** (0,5 pt) — Design Thinking

Qual das alternativas representa corretamente a ordem das 5 etapas do Design Thinking?

a) Testar → Prototipar → Idear → Definir → Empatizar
b) Empatizar → Definir → Idear → Prototipar → Testar
c) Definir → Empatizar → Prototipar → Idear → Testar
d) Idear → Definir → Empatizar → Testar → Prototipar
e) Empatizar → Idear → Definir → Testar → Prototipar

---

**5.** (0,5 pt) — Engenharia de Software

No Scrum, quem é responsável por priorizar o Product Backlog?

a) Scrum Master
b) Time de Desenvolvimento
c) Product Owner
d) Stakeholders
e) Gerente de Projeto

---

#### Questões Práticas / Dissertativas

**6.** (2,5 pts) — Administração de Bancos de Dados

Dada a tabela `produtos`:

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    estoque INTEGER
);
```

Escreva as seguintes consultas SQL:

a) (0,5 pt) Selecione todos os produtos da categoria 'Eletrônicos' com preço menor que R$ 500,00.

b) (0,5 pt) Atualize o estoque para 0 de todos os produtos com preço maior que R$ 1000,00.

c) (0,75 pt) Selecione a categoria e a quantidade de produtos em cada categoria, mostrando apenas categorias com mais de 3 produtos.

d) (0,75 pt) Insira um novo produto: "Fone Bluetooth", categoria "Eletrônicos", preço 89.90, estoque 50.

---

**7.** (2,5 pts) — Lógica e Pensamento Computacional

Escreva um algoritmo em Portugol que funcione como um **conversor de notas para conceitos**:

1. Solicite ao usuário que digite 5 notas (de 0 a 10)
2. Armazene as notas em um vetor
3. Para cada nota, exiba o conceito correspondente:
   - 9.0 a 10.0: "A — Excelente"
   - 7.0 a 8.9: "B — Bom"
   - 5.0 a 6.9: "C — Regular"
   - 3.0 a 4.9: "D — Insuficiente"
   - 0.0 a 2.9: "E — Reprovado"
4. Ao final, exiba a média das 5 notas e o conceito da média

**Esperado:** Algoritmo com vetor, laço para, condicionais encadeadas e cálculo de média.

---

**8.** (2,5 pts) — Programação Python Desktop

Crie uma função Python chamada `gerenciar_lista_compras()` que implemente um sistema simples usando **listas**:

1. Exiba um menu com as opções:
   - 1 — Adicionar item
   - 2 — Remover item
   - 3 — Exibir lista
   - 4 — Sair
2. O programa deve repetir até o usuário escolher "Sair"
3. Trate o caso de tentar remover um item que não existe
4. Ao exibir a lista, mostre os itens numerados

**Esperado:** Função com laço while, listas (append, remove), menu com condicionais e tratamento de erros.

---

## 4. Simulado do Semestre — Avaliação Integrada

> 15 questões INÉDITAS integrando TODAS as disciplinas do Módulo 1.

---

**Questão 1** — (Múltipla Escolha) — SQL + Engenharia de Software

Em um projeto Scrum, o time decidiu usar PostgreSQL. Durante a Sprint Review, o PO solicita uma consulta que retorne todos os projetos com mais de 3 tarefas concluídas. Qual consulta está correta?

```sql
-- Tabelas: projetos(id, nome) e tarefas(id, projeto_id, status)
```

a) `SELECT p.nome FROM projetos p JOIN tarefas t ON p.id = t.projeto_id WHERE t.status = 'concluida' GROUP BY p.nome HAVING COUNT(*) > 3;`
b) `SELECT p.nome FROM projetos p JOIN tarefas t ON p.id = t.projeto_id WHERE t.status = 'concluida' AND COUNT(*) > 3;`
c) `SELECT p.nome, COUNT(*) FROM projetos p, tarefas t WHERE t.status = 'concluida' HAVING COUNT(*) > 3;`
d) `SELECT nome FROM projetos WHERE tarefas.status = 'concluida' GROUP BY nome HAVING COUNT > 3;`
e) `SELECT p.nome FROM projetos p LEFT JOIN tarefas t ON p.id = t.projeto_id WHERE COUNT(t.status = 'concluida') > 3;`

---

**Questão 2** — (Múltipla Escolha) — UX + Design Thinking

Uma equipe está na etapa de **Empatizar** do Design Thinking e precisa entender a experiência do usuário. Qual combinação de ferramentas de UX é MAIS adequada para esta etapa?

a) Wireframes de alta fidelidade + Testes A/B
b) Entrevistas com usuários + Mapa de Empatia + Observação contextual
c) Diagrama de Classes UML + Casos de Uso
d) Brainstorming + Prototipagem rápida + MVP
e) Matriz de priorização + Roadmap do produto

---

**Questão 3** — (Múltipla Escolha) — Python + Banco de Dados

Qual é a forma CORRETA e SEGURA de executar uma consulta parametrizada com psycopg2?

a) `cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")`
b) `cursor.execute("SELECT * FROM users WHERE id = " + str(user_id))`
c) `cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))`
d) `cursor.execute("SELECT * FROM users WHERE id = ?", [user_id])`
e) `cursor.execute("SELECT * FROM users WHERE id = ${user_id}")`

---

**Questão 4** — (Múltipla Escolha) — Lógica + Engenharia de Software

Um algoritmo precisa verificar se uma senha atende aos requisitos: mínimo 8 caracteres, pelo menos 1 número e pelo menos 1 letra maiúscula. Em um diagrama de atividades UML, qual estrutura representa melhor essa validação?

a) Uma sequência linear de três ações
b) Um nó de decisão (diamond) com três condições encadeadas usando AND lógico
c) Três raias (swimlanes) paralelas
d) Um loop infinito com break
e) Uma única condição com OR lógico

---

**Questão 5** — (Múltipla Escolha) — Design Thinking + Engenharia de Software

Durante a etapa de **Prototipar**, a equipe criou um MVP (Mínimo Produto Viável). No Scrum, em qual artefato esse MVP seria melhor representado?

a) Sprint Backlog
b) Definition of Done
c) Product Backlog como épico principal
d) Burndown Chart
e) Impediment Log

---

**Questão 6** — (Múltipla Escolha) — UX + Lógica

Ao aplicar o princípio de Gestalt da **Similaridade** em um formulário web, um desenvolvedor decide agrupar campos visualmente. Qual abordagem lógica um algoritmo de validação deve adotar para manter a consistência com o design?

a) Validar todos os campos de uma vez, sem distinção de grupo
b) Validar cada grupo de campos de forma independente, na mesma ordem visual apresentada ao usuário
c) Validar apenas os campos obrigatórios, ignorando os opcionais
d) Aplicar a mesma regra de validação para todos os campos
e) Validar de baixo para cima (inverso da ordem visual)

---

**Questão 7** — (Múltipla Escolha) — SQL + Python

Qual trecho Python realiza corretamente uma transação com psycopg2, garantindo que ou TODAS as operações são confirmadas ou NENHUMA é persistida?

a)
```python
cursor.execute("INSERT INTO pedidos ...")
cursor.execute("UPDATE estoque ...")
conn.commit()
```

b)
```python
try:
    cursor.execute("INSERT INTO pedidos ...")
    cursor.execute("UPDATE estoque ...")
    conn.commit()
except:
    conn.rollback()
```

c)
```python
cursor.execute("BEGIN")
cursor.execute("INSERT INTO pedidos ...")
cursor.execute("COMMIT")
```

d)
```python
cursor.execute("INSERT INTO pedidos ...")
conn.save()
cursor.execute("UPDATE estoque ...")
conn.save()
```

e)
```python
cursor.execute("INSERT INTO pedidos ...")
cursor.execute("UPDATE estoque ...")
conn.close()
```

---

**Questão 8** — (Múltipla Escolha) — Design Thinking + UX

Qual é a principal diferença entre um **wireframe de baixa fidelidade** e um **protótipo de alta fidelidade**?

a) Wireframe é digital e protótipo é em papel
b) Wireframe foca na estrutura e layout sem detalhes visuais; protótipo de alta fidelidade inclui cores, tipografia e interações realistas
c) Wireframe é feito pelo desenvolvedor e protótipo pelo designer
d) Não há diferença, são sinônimos
e) Wireframe é para mobile e protótipo é para desktop

---

**Questão 9** — (Prática — Código/Modelagem) — Banco de Dados + Python Integrados

Uma clínica veterinária precisa de um sistema. Realize TODAS as tarefas:

**a)** (1,0 pt) Modele o banco de dados com as tabelas: `tutores` (id, nome, telefone), `animais` (id, nome, especie, tutor_id) e `consultas` (id, animal_id, data_consulta, diagnostico). Escreva os comandos `CREATE TABLE` com todas as constraints.

**b)** (1,5 pt) Crie uma classe Python `ConsultaRepository` com os métodos:
- `agendar_consulta(animal_id, data, diagnostico)` — insere nova consulta
- `buscar_consultas_por_tutor(tutor_id)` — retorna todas as consultas dos animais de um tutor (use JOIN)
- Utilize psycopg2 com queries parametrizadas e tratamento de exceções

---

**Questão 10** — (Prática — Código/Modelagem) — Lógica + Python + Tkinter

Crie um programa completo em Python que funcione como um **Quiz Interativo** com interface gráfica Tkinter:

1. (0,5 pt) Defina uma lista de pelo menos 5 perguntas (cada uma com 4 alternativas e a resposta correta)
2. (1,0 pt) Crie a interface com: Label para pergunta, 4 botões para alternativas, Label para pontuação
3. (1,0 pt) Ao clicar na alternativa, verifique se está correta, atualize a pontuação e avance para a próxima pergunta. Ao final, exiba o resultado.

**Esperado:** Código funcional com estrutura de dados para perguntas, navegação entre elas e feedback visual.

---

**Questão 11** — (Prática — Código/Modelagem) — UML + Engenharia de Software

Um sistema de e-commerce precisa dos seguintes padrões de projeto:
- **Singleton** para gerenciar a conexão com o banco de dados
- **Factory Method** para criar diferentes tipos de pagamento (Pix, Cartão, Boleto)

**a)** (1,0 pt) Desenhe o diagrama de classes UML mostrando a implementação de ambos os padrões, com todos os atributos, métodos e relacionamentos.

**b)** (1,5 pt) Implemente em Python a classe `DatabaseConnection` usando Singleton e a fábrica `PagamentoFactory` usando Factory Method.

---

**Questão 12** — (Prática — Código/Modelagem) — Design Thinking + UX + SQL

Uma escola técnica deseja melhorar o sistema de controle de frequência dos alunos. Aplicando Design Thinking e UX:

**a)** (0,5 pt) Crie uma **Persona** completa do usuário principal (professor).

**b)** (0,5 pt) Elabore uma declaração **POV** e 2 perguntas **HMW**.

**c)** (0,75 pt) Descreva brevemente um wireframe de baixa fidelidade da tela principal (pode ser textual/esquemático).

**d)** (0,75 pt) Modele a tabela SQL `frequencia` que suportaria esse sistema, com pelo menos 5 colunas relevantes e constraints apropriadas.

---

**Questão 13** — (Dissertativa/Análise) — Engenharia de Software + Design Thinking

Compare as abordagens **Scrum** e **Design Thinking** respondendo:

a) (0,5 pt) Em que momento do desenvolvimento de um produto digital o Design Thinking é mais valioso? E o Scrum?

b) (0,75 pt) Como os artefatos do Design Thinking (Persona, POV, Protótipo) podem alimentar os artefatos do Scrum (Product Backlog, User Stories, Sprint Backlog)?

c) (0,75 pt) Dê um exemplo prático de como uma equipe usaria AMBAS as metodologias em conjunto para desenvolver um aplicativo de delivery de comida.

---

**Questão 14** — (Dissertativa/Análise) — UX + Lógica + Python

Analise o seguinte cenário: Uma pesquisa de usabilidade revelou que 70% dos usuários abandonam um formulário de cadastro na segunda etapa (dados de endereço).

a) (0,75 pt) Utilizando princípios de UX e Gestalt, proponha 3 melhorias de design para reduzir o abandono.

b) (0,75 pt) Escreva um algoritmo em Portugol que valide um CEP (8 dígitos numéricos) e, caso inválido, exiba uma mensagem de erro amigável ao usuário.

c) (0,5 pt) Como o princípio de **Progressão** (mostrar ao usuário em qual etapa ele está) pode ser implementado tanto no design visual quanto na lógica do programa?

---

**Questão 15** — (Dissertativa/Análise) — Integração Total

Você foi contratado como desenvolvedor full-stack para criar um sistema de **gestão de biblioteca escolar**. O sistema deve permitir: cadastro de livros, cadastro de alunos, empréstimo e devolução de livros.

Apresente um **plano completo** abordando TODAS as disciplinas:

a) (0,5 pt) **Design Thinking:** Escreva o POV e 2 HMWs para o problema.

b) (0,5 pt) **UX:** Descreva a persona principal e liste 3 princípios de Gestalt que aplicaria na interface.

c) (0,5 pt) **Engenharia de Software:** Defina 3 User Stories no formato Scrum e escolha um padrão de projeto adequado (justifique).

d) (0,5 pt) **Banco de Dados:** Modele as tabelas em SQL (pelo menos 3 tabelas com relacionamentos).

e) (0,5 pt) **Python:** Escreva a função `realizar_emprestimo(aluno_id, livro_id)` que verifique se o livro está disponível e registre o empréstimo no banco (use psycopg2).

---

## 5. Gabarito Comentado e Detalhado

---

### Gabarito — Lista de Exercícios Práticos

---

#### Questão 1 — [🟢 Fácil] — SQL CREATE TABLE

**Resposta:**

```sql
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    data_nascimento DATE
);
```

**Explicação:** 
- `SERIAL` cria uma sequência auto-incremento (equivalente a `INTEGER` + `DEFAULT nextval(...)` no PostgreSQL)
- `PRIMARY KEY` garante unicidade e cria índice automaticamente
- `NOT NULL` impede valores nulos na coluna nome
- `UNIQUE` garante que não haverá emails duplicados
- `DATE` armazena data no formato YYYY-MM-DD

**Pontuação parcial:** 
- Tabela com estrutura correta mas sem SERIAL: -0,25
- Faltou NOT NULL no nome: -0,25
- Faltou UNIQUE no email: -0,25

---

#### Questão 2 — [🟢 Fácil] — Portugol Condicional

**Resposta:**

```
programa {
    funcao inicio() {
        inteiro num1, num2
        
        escreva("Digite o primeiro número: ")
        leia(num1)
        escreva("Digite o segundo número: ")
        leia(num2)
        
        se (num1 > num2) {
            escreva("O maior é: ", num1)
        } senao se (num2 > num1) {
            escreva("O maior é: ", num2)
        } senao {
            escreva("Os números são iguais")
        }
    }
}
```

**Explicação:**
- Declaração das variáveis com tipo `inteiro`
- Leitura com `leia()` para capturar entrada do usuário
- Estrutura `se/senao se/senao` para tratar os 3 casos possíveis
- O caso de igualdade é coberto pelo último `senao`

**Pontuação parcial:**
- Lógica correta mas sintaxe com pequenos erros: -0,25
- Não tratou o caso de igualdade: -0,5

---

#### Questão 3 — [🟢 Fácil] — Persona UX

**Resposta:**

**Definição:** Persona é uma representação fictícia e detalhada do usuário ideal de um produto/serviço, criada a partir de dados reais de pesquisa. Serve para guiar decisões de design centradas no ser humano.

**5 elementos essenciais:**
1. **Nome fictício e foto** — humaniza o personagem
2. **Dados demográficos** — idade, profissão, localização, escolaridade
3. **Objetivos e necessidades** — o que a persona quer alcançar
4. **Dores e frustrações** — problemas que enfrenta atualmente
5. **Cenário/Contexto** — como e quando interage com o produto

**Pontuação parcial:**
- Definição correta mas incompleta: -0,25
- Listou 3-4 elementos em vez de 5: -0,25 por elemento faltante

---

#### Questão 4 — [🟢 Fácil] — Design Thinking Pilares

**Resposta:**

Os 3 pilares do Design Thinking são:

1. **Empatia** — Capacidade de se colocar no lugar do usuário para compreender profundamente suas necessidades, desejos e limitações reais.

2. **Colaboração** — Trabalho multidisciplinar em equipe, reunindo diferentes perspectivas e expertises para gerar soluções mais completas e inovadoras.

3. **Experimentação** — Filosofia de "aprender fazendo", testando ideias rapidamente através de protótipos antes de investir em soluções definitivas.

**Pontuação parcial:**
- Citou os 3 pilares mas não explicou: -0,5
- Confundiu pilares com etapas: -1,0

---

#### Questão 5 — [🟡 Médio] — SQL com JOIN e Agregação

**Resposta:**

```sql
SELECT d.nome AS departamento, 
       AVG(f.salario) AS media_salarial
FROM departamentos d
INNER JOIN funcionarios f ON d.id = f.departamento_id
GROUP BY d.nome
HAVING AVG(f.salario) > 3000.00
ORDER BY media_salarial DESC;
```

**Explicação:**
- `INNER JOIN` conecta as tabelas pela chave estrangeira
- `GROUP BY d.nome` agrupa os resultados por departamento
- `AVG(f.salario)` calcula a média salarial por grupo
- `HAVING` filtra APÓS o agrupamento (diferente de WHERE)
- `ORDER BY ... DESC` ordena do maior para o menor

**Por que as alternativas comuns estão erradas:**
- Usar WHERE em vez de HAVING para filtrar agregação → erro de sintaxe
- Esquecer o GROUP BY → erro lógico
- Usar LEFT JOIN incluiria departamentos sem funcionários (média NULL)

**Pontuação parcial:**
- JOIN correto mas HAVING errado: -0,75
- Faltou ORDER BY: -0,25
- Usou WHERE em vez de HAVING: -0,75

---

#### Questão 6 — [🟡 Médio] — Portugol com Vetores

**Resposta:**

```
programa {
    funcao inicio() {
        inteiro numeros[10]
        inteiro soma = 0, maior
        real media
        
        // Preenchimento do vetor
        para (inteiro i = 0; i < 10; i++) {
            escreva("Digite o ", i+1, "º número: ")
            leia(numeros[i])
            soma = soma + numeros[i]
        }
        
        // Encontrar o maior
        maior = numeros[0]
        para (inteiro i = 1; i < 10; i++) {
            se (numeros[i] > maior) {
                maior = numeros[i]
            }
        }
        
        // Calcular média
        media = soma / 10.0
        
        escreva("Soma: ", soma, "\n")
        escreva("Média: ", media, "\n")
        escreva("Maior valor: ", maior, "\n")
    }
}
```

**Explicação:**
- Vetor declarado com 10 posições
- Laço `para` percorre o vetor preenchendo e acumulando a soma
- O maior é encontrado comparando cada elemento com o atual maior
- Divisão por 10.0 (não 10) para obter resultado real

**Pontuação parcial:**
- Vetor e preenchimento corretos, mas lógica do maior errada: -0,75
- Não inicializou `maior` com `numeros[0]`: -0,5
- Média com divisão inteira (10 em vez de 10.0): -0,25

---

#### Questão 7 — [🟡 Médio] — Python validar_cpf

**Resposta:**

```python
def validar_cpf(cpf: str) -> bool:
    # Remove espaços em branco
    cpf = cpf.strip()
    
    # Verifica se tem exatamente 11 caracteres
    if len(cpf) != 11:
        return False
    
    # Verifica se todos os caracteres são dígitos
    if not cpf.isdigit():
        return False
    
    return True
```

**Explicação:**
- `strip()` remove espaços acidentais no início/fim
- `len()` verifica o tamanho exato (11 dígitos)
- `isdigit()` verifica se TODOS os caracteres são numéricos (rejeita pontos, traços, letras)
- Retorno booleano direto sem variável intermediária

**Solução alternativa aceita:**
```python
def validar_cpf(cpf: str) -> bool:
    return len(cpf.strip()) == 11 and cpf.strip().isdigit()
```

**Pontuação parcial:**
- Lógica correta mas sem type hints: -0,25
- Não tratou espaços: aceitável (não era requisito explícito)
- Usou regex corretamente: pontuação total

---

#### Questão 8 — [🟡 Médio] — Diagrama de Classes UML

**Resposta esperada (descrição textual):**

```
+------------------+       +------------------+       +------------------+
|      Livro       |       |      Autor       |       |   Emprestimo     |
+------------------+       +------------------+       +------------------+
| - id: int        |       | - id: int        |       | - id: int        |
| - titulo: String |       | - nome: String   |       | - livro: Livro   |
| - isbn: String   |       | - pais: String   |       | - dataEmprestimo |
| - anoPublicacao  |       | - dataNasc: Date |       | - dataDevolucao  |
| - disponivel:bool|       +------------------+       | - devolvido: bool|
+------------------+       | + getNome()      |       +------------------+
| + emprestar()    |       | + getLivros()    |       | + registrar()    |
| + devolver()     |       +------------------+       | + devolver()     |
| + getDetalhes()  |                                  | + calcularMulta()|
+------------------+                                  +------------------+

Relacionamentos:
- Autor "1" ----< "N" Livro (um autor tem muitos livros)
- Livro "1" ----< "N" Emprestimo (um livro tem muitos empréstimos)
```

**Pontuação parcial:**
- Classes com atributos mas sem métodos: -0,75
- Faltou cardinalidade: -0,5
- Relacionamentos corretos mas sem notação UML: -0,5

---

#### Questão 9 — [🔴 Difícil] — ProdutoRepository com psycopg2

**Resposta:**

```python
import psycopg2
from psycopg2 import Error

class ProdutoRepository:
    def __init__(self):
        try:
            self.conexao = psycopg2.connect(
                host="localhost",
                database="loja",
                user="postgres",
                password="postgres",
                port="5432"
            )
            self.cursor = self.conexao.cursor()
        except Error as e:
            print(f"Erro ao conectar: {e}")
            raise
    
    def buscar_todos(self) -> list:
        try:
            self.cursor.execute("SELECT id, nome, preco, estoque FROM produtos")
            registros = self.cursor.fetchall()
            produtos = []
            for registro in registros:
                produtos.append({
                    "id": registro[0],
                    "nome": registro[1],
                    "preco": float(registro[2]),
                    "estoque": registro[3]
                })
            return produtos
        except Error as e:
            print(f"Erro ao buscar produtos: {e}")
            return []
    
    def buscar_por_id(self, id: int) -> dict:
        try:
            self.cursor.execute(
                "SELECT id, nome, preco, estoque FROM produtos WHERE id = %s",
                (id,)
            )
            registro = self.cursor.fetchone()
            if registro:
                return {
                    "id": registro[0],
                    "nome": registro[1],
                    "preco": float(registro[2]),
                    "estoque": registro[3]
                }
            return None
        except Error as e:
            print(f"Erro ao buscar produto: {e}")
            return None
    
    def inserir(self, nome: str, preco: float, estoque: int) -> int:
        try:
            self.cursor.execute(
                "INSERT INTO produtos (nome, preco, estoque) VALUES (%s, %s, %s) RETURNING id",
                (nome, preco, estoque)
            )
            self.conexao.commit()
            return self.cursor.fetchone()[0]
        except Error as e:
            self.conexao.rollback()
            print(f"Erro ao inserir: {e}")
            return -1
    
    def atualizar_estoque(self, id: int, novo_estoque: int) -> bool:
        try:
            self.cursor.execute(
                "UPDATE produtos SET estoque = %s WHERE id = %s",
                (novo_estoque, id)
            )
            self.conexao.commit()
            return self.cursor.rowcount > 0
        except Error as e:
            self.conexao.rollback()
            print(f"Erro ao atualizar: {e}")
            return False
    
    def __del__(self):
        if hasattr(self, 'cursor') and self.cursor:
            self.cursor.close()
        if hasattr(self, 'conexao') and self.conexao:
            self.conexao.close()
```

**Explicação:**
- Usa `%s` para parametrização (previne SQL Injection)
- `RETURNING id` retorna o ID gerado pelo SERIAL
- `commit()` após operações de escrita; `rollback()` em caso de erro
- `rowcount` verifica se a atualização afetou alguma linha
- Destrutor `__del__` fecha recursos automaticamente

**Pontuação parcial:**
- Conexão correta + 1 método correto: mínimo 1,0
- Sem parametrização (usa f-string): -1,0
- Sem try/except: -0,75
- Sem commit/rollback: -0,5
- Sem fechamento de conexão: -0,25

---

#### Questão 10 — [🔴 Difícil] — Integração DT + UX + Lógica

**Resposta:**

**a) Declaração POV:**
"Pacientes de clínicas médicas precisam de uma forma rápida e transparente de agendar consultas porque atualmente enfrentam longas esperas por telefone, falta de visibilidade de horários disponíveis e cancelamentos sem aviso prévio."

**b) 3 Perguntas HMW:**
1. "Como poderíamos permitir que pacientes visualizem horários disponíveis em tempo real sem precisar ligar para a clínica?"
2. "Como poderíamos reduzir o número de faltas notificando pacientes de forma inteligente antes da consulta?"
3. "Como poderíamos dar ao paciente controle total sobre seu agendamento, incluindo remarcação e cancelamento simplificados?"

**c) Persona:**
- **Nome:** Carlos Eduardo, 35 anos
- **Profissão:** Analista de TI, trabalha 8h/dia em escritório
- **Localização:** Recife-PE
- **Objetivos:** Agendar consultas de forma rápida, sem precisar ligar durante horário comercial
- **Dores:** Não consegue ligar durante o expediente; já perdeu consultas por falta de lembrete; frustrado com a demora para ser atendido pelo telefone
- **Cenário:** Precisa agendar retorno com cardiologista mas só tem tempo livre à noite

**d) Fluxo lógico (pseudocódigo):**

```
algoritmo agendamento
    // Passo 1: Escolher especialidade
    escreva("Escolha a especialidade:")
    escreva("1-Cardiologia 2-Dermatologia 3-Pediatria")
    leia(opcao_esp)
    
    se (opcao_esp < 1 OU opcao_esp > 3) {
        escreva("Especialidade inválida!")
        pare
    }
    
    // Passo 2: Listar e escolher médico
    listar_medicos(opcao_esp)
    escreva("Escolha o médico (número): ")
    leia(opcao_med)
    
    se (medico_invalido(opcao_med)) {
        escreva("Médico não encontrado!")
        pare
    }
    
    // Passo 3: Escolher data e horário
    listar_horarios_disponiveis(opcao_med)
    escreva("Escolha data e horário: ")
    leia(opcao_horario)
    
    se (horario_indisponivel(opcao_horario)) {
        escreva("Horário não disponível. Tente outro.")
        pare
    }
    
    // Passo 4: Confirmar agendamento
    escreva("Confirmar agendamento? (S/N): ")
    leia(confirmacao)
    
    se (confirmacao == "S") {
        registrar_agendamento(opcao_med, opcao_horario)
        escreva("Consulta agendada com sucesso!")
    } senao {
        escreva("Agendamento cancelado.")
    }
fim_algoritmo
```

**Pontuação parcial:**
- POV no formato correto: 0,5 / HMWs relevantes: 0,5 cada
- Persona completa: 0,75 / Persona incompleta: 0,25-0,5
- Algoritmo com fluxo lógico correto: 1,0 / Sem validações: -0,5

---

### Gabarito — PROVA A

---

#### Objetivas

| Questão | Resposta | Justificativa |
|---------|----------|---------------|
| 1 | **b)** | `ALTER TABLE` é o comando DDL para modificar estrutura de tabelas existentes. `ADD COLUMN` adiciona nova coluna. |
| 2 | **c) -2** | Trace: x=10→7→4→1→-2. Quando x=1, a condição x>0 é verdadeira, então x=1-3=-2. Agora x=-2, condição falsa, sai do laço. |
| 3 | **c)** | Proximidade: elementos visuais próximos são percebidos como grupo. Similaridade é por aparência igual. |
| 4 | **b)** | POV segue o formato "[Usuário] precisa de [necessidade] porque [insight]". A alternativa c) é HMW, não POV. |
| 5 | **c)** | Daily Scrum tem time-box de 15 minutos. É uma reunião rápida de sincronização. |

**Por que as outras estão erradas:**

**Q1:** a) INSERT é para dados, não estrutura; c) UPDATE modifica dados; d) e e) não existem em SQL.

**Q2:** a) 0 seria se parasse em x=0, mas 10→7→4→1→(-2), nunca passa por 0; b) 1 é o valor antes da última subtração; d) 3 seria x-3 sem atribuição.

**Q3:** a) Similaridade = elementos parecidos formam grupo; b) Continuidade = elementos alinhados; d) Fechamento = cérebro completa formas; e) Figura-fundo = separar objeto do fundo.

**Q4:** a) Não é POV, é declaração de problema/solução; c) Essa é a estrutura HMW; d) Estrutura de value proposition; e) Estrutura de hipótese.

**Q5:** a) 30 min é para Sprint Planning de 1 semana; b) 1h é para Sprint Review; d) 45 min não é padrão; e) Sempre há time-box no Scrum.

---

#### Questão 6 — Prática SQL (2,5 pts)

**a) Consulta com JOIN (1,0 pt):**

```sql
SELECT c.nome, SUM(p.valor_total) AS total_pedidos
FROM clientes c
INNER JOIN pedidos p ON c.id = p.cliente_id
WHERE p.data_pedido BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY c.nome
ORDER BY total_pedidos DESC;
```

**b) UPDATE com desconto (0,75 pt):**

```sql
UPDATE pedidos
SET valor_total = valor_total * 0.90
WHERE cliente_id = 5
  AND data_pedido > '2024-06-01';
```

**c) Explicação ON DELETE CASCADE (0,75 pt):**

Sem ON DELETE CASCADE, o banco retornará um erro de violação de chave estrangeira (foreign key constraint violation), pois existem registros na tabela `pedidos` que referenciam o cliente. O PostgreSQL protege a integridade referencial.

Com `ON DELETE CASCADE` na definição da FK:
```sql
cliente_id INTEGER REFERENCES clientes(id) ON DELETE CASCADE
```
Ao deletar o cliente, todos os seus pedidos seriam automaticamente excluídos em cascata.

---

#### Questão 7 — Prática Portugol (2,5 pts)

**Resposta:**

```
programa {
    funcao real calcularDesconto(real valor, real percentual) {
        retorne valor - (valor * percentual / 100.0)
    }
    
    funcao inicio() {
        cadeia nomeProduto, nomeMaisCaro = ""
        real preco, totalCompra = 0.0, precoMaisCaro = 0.0
        inteiro qtdProdutos = 0
        
        escreva("=== CAIXA REGISTRADORA ===\n")
        escreva("Digite o nome do produto (ou SAIR para finalizar): ")
        leia(nomeProduto)
        
        enquanto (nomeProduto != "SAIR") {
            escreva("Digite o preço: R$ ")
            leia(preco)
            
            qtdProdutos = qtdProdutos + 1
            totalCompra = totalCompra + preco
            
            // Verifica se é o mais caro
            se (preco > precoMaisCaro) {
                precoMaisCaro = preco
                nomeMaisCaro = nomeProduto
            }
            
            escreva("Digite o nome do produto (ou SAIR para finalizar): ")
            leia(nomeProduto)
        }
        
        // Exibir resultados
        escreva("\n=== RESUMO DA COMPRA ===\n")
        escreva("Quantidade de produtos: ", qtdProdutos, "\n")
        escreva("Produto mais caro: ", nomeMaisCaro, " - R$ ", precoMaisCaro, "\n")
        
        se (totalCompra > 100.0) {
            real totalComDesconto = calcularDesconto(totalCompra, 5.0)
            escreva("Subtotal: R$ ", totalCompra, "\n")
            escreva("Desconto de 5% aplicado!\n")
            escreva("Total final: R$ ", totalComDesconto, "\n")
        } senao {
            escreva("Total: R$ ", totalCompra, "\n")
        }
    }
}
```

**Pontuação parcial:**
- Função calcularDesconto correta: 0,5 pt
- Laço enquanto com condição de parada: 0,5 pt
- Acumuladores (soma, contador): 0,5 pt
- Lógica do maior (produto mais caro): 0,5 pt
- Aplicação condicional do desconto: 0,5 pt

---

#### Questão 8 — Prática Python Tkinter (2,5 pts)

**Resposta:**

```python
import tkinter as tk
from tkinter import messagebox

def calcular_imc():
    try:
        peso = float(entry_peso.get())
        altura = float(entry_altura.get())
        
        if peso <= 0 or altura <= 0:
            messagebox.showerror("Erro", "Valores devem ser positivos!")
            return
        
        imc = peso / (altura ** 2)
        
        if imc < 18.5:
            classificacao = "Abaixo do peso"
        elif imc < 25.0:
            classificacao = "Peso normal"
        elif imc < 30.0:
            classificacao = "Sobrepeso"
        else:
            classificacao = "Obesidade"
        
        resultado = f"IMC: {imc:.2f} — {classificacao}"
        label_resultado.config(text=resultado)
        
    except ValueError:
        messagebox.showerror("Erro", "Digite apenas valores numéricos!")

# Criar janela principal
janela = tk.Tk()
janela.title("Calculadora de IMC")
janela.geometry("300x200")

# Widgets
tk.Label(janela, text="Peso (kg):").pack(pady=5)
entry_peso = tk.Entry(janela)
entry_peso.pack()

tk.Label(janela, text="Altura (m):").pack(pady=5)
entry_altura = tk.Entry(janela)
entry_altura.pack()

tk.Button(janela, text="Calcular", command=calcular_imc).pack(pady=10)

label_resultado = tk.Label(janela, text="", font=("Arial", 12, "bold"))
label_resultado.pack(pady=10)

janela.mainloop()
```

**Pontuação parcial:**
- Janela criada com widgets corretos: 0,75 pt
- Cálculo do IMC correto: 0,5 pt
- Classificação com condicionais: 0,5 pt
- Tratamento de erros (try/except + valores negativos): 0,5 pt
- Exibição do resultado na Label: 0,25 pt

---

### Gabarito — PROVA B (Substitutiva)

---

#### Objetivas

| Questão | Resposta | Justificativa |
|---------|----------|---------------|
| 1 | **c)** | INNER JOIN exige correspondência em AMBAS as tabelas. LEFT JOIN retorna tudo da esquerda, com NULL onde não há match à direita. |
| 2 | **b)** | `enquanto` é para repetições com condição indeterminada. `para` é quando se sabe a quantidade de iterações. |
| 3 | **b)** | Mapa de Jornada documenta toda a experiência do usuário ao longo do tempo, com ações, emoções e touchpoints. |
| 4 | **b)** | HMW reformula problemas como oportunidades criativas. Começa com "Como poderíamos..." e é aberta (não define solução). |
| 5 | **b)** | Singleton garante instância única + acesso global. Factory cria objetos (alt. e). Observer comunica sem acoplamento (alt. d). |

---

#### Questão 6 — Normalização (2,5 pts)

**a) Violações identificadas (1,0 pt):**

- **1FN violada:** Coluna `produto` contém valores multivalorados ("Mouse, Teclado") e coluna `qtd`/`preco_unit` também. Valores devem ser atômicos.
- **2FN violada:** `telefone_cliente` depende apenas de `cliente` (dependência parcial), não da chave completa do pedido.
- **3FN violada:** `total` é calculado a partir de `qtd * preco_unit` (dependência transitiva — campo derivado).

**b) Tabelas normalizadas (1,0 pt):**

```
clientes (id PK, nome, telefone)
produtos (id PK, nome, preco_unitario)
pedidos (id PK, cliente_id FK→clientes)
itens_pedido (id PK, pedido_id FK→pedidos, produto_id FK→produtos, quantidade)
```

**c) CREATE TABLE (0,5 pt):**

```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id)
);

CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade INTEGER NOT NULL DEFAULT 1
);
```

---

#### Questão 7 — Portugol Jogo de Adivinhação (2,5 pts)

**Resposta:**

```
programa {
    inclua biblioteca Util
    
    funcao cadeia verificarPalpite(inteiro palpite, inteiro secreto) {
        se (palpite > secreto) {
            retorne "MENOR"  // secreto é menor que o palpite
        } senao se (palpite < secreto) {
            retorne "MAIOR"  // secreto é maior que o palpite
        } senao {
            retorne "ACERTOU"
        }
    }
    
    funcao inicio() {
        inteiro secreto = Util.sorteia(1, 50)
        inteiro palpite, tentativas = 0
        inteiro maxTentativas = 7
        logico acertou = falso
        cadeia resultado
        
        escreva("=== JOGO DE ADIVINHAÇÃO ===\n")
        escreva("Adivinhe o número entre 1 e 50!\n")
        escreva("Você tem ", maxTentativas, " tentativas.\n\n")
        
        enquanto (tentativas < maxTentativas E nao acertou) {
            tentativas = tentativas + 1
            escreva("Tentativa ", tentativas, "/", maxTentativas, ": ")
            leia(palpite)
            
            resultado = verificarPalpite(palpite, secreto)
            
            se (resultado == "ACERTOU") {
                acertou = verdadeiro
                escreva("PARABÉNS! Você acertou em ", tentativas, " tentativas!\n")
            } senao {
                escreva("O número secreto é ", resultado, " que ", palpite, "\n")
            }
        }
        
        se (nao acertou) {
            escreva("GAME OVER! O número era: ", secreto, "\n")
        }
    }
}
```

---

#### Questão 8 — Python AlunoDAO (2,5 pts)

**Resposta:**

```python
import psycopg2
from psycopg2 import Error

class AlunoDAO:
    def __init__(self):
        try:
            self.conn = psycopg2.connect(
                host="localhost",
                database="escola",
                user="postgres",
                password="postgres"
            )
            self.cursor = self.conn.cursor()
        except Error as e:
            print(f"Erro na conexão: {e}")
            raise
    
    def inserir(self, nome: str, matricula: str, nota_final: float):
        try:
            self.cursor.execute(
                "INSERT INTO alunos (nome, matricula, nota_final) VALUES (%s, %s, %s)",
                (nome, matricula, nota_final)
            )
            self.conn.commit()
            print("Aluno inserido com sucesso!")
        except Error as e:
            self.conn.rollback()
            print(f"Erro ao inserir: {e}")
    
    def listar_aprovados(self) -> list:
        try:
            self.cursor.execute(
                "SELECT nome, matricula, nota_final FROM alunos WHERE nota_final >= %s",
                (7.0,)
            )
            return self.cursor.fetchall()
        except Error as e:
            print(f"Erro ao buscar aprovados: {e}")
            return []
    
    def atualizar_nota(self, matricula: str, nova_nota: float):
        try:
            self.cursor.execute(
                "UPDATE alunos SET nota_final = %s WHERE matricula = %s",
                (nova_nota, matricula)
            )
            self.conn.commit()
            if self.cursor.rowcount == 0:
                print("Matrícula não encontrada.")
            else:
                print("Nota atualizada com sucesso!")
        except Error as e:
            self.conn.rollback()
            print(f"Erro ao atualizar: {e}")
    
    def fechar_conexao(self):
        if self.cursor:
            self.cursor.close()
        if self.conn:
            self.conn.close()
        print("Conexão fechada.")
```

---

### Gabarito — PROVA DE RECUPERAÇÃO

---

#### Objetivas

| Questão | Resposta | Justificativa |
|---------|----------|---------------|
| 1 | **b)** | `INSERT INTO` é o comando DML padrão SQL para inserir registros. Nenhuma outra sintaxe existe em SQL. |
| 2 | **b) 15** | Trace: i=1→soma=1; i=2→soma=3; i=3→soma=6; i=4→soma=10; i=5→soma=15. Soma de 1 a 5 = 15. |
| 3 | **c)** | Teste de usabilidade observa usuários REAIS interagindo com o produto para identificar problemas de UX. |
| 4 | **b)** | A ordem correta é: Empatizar → Definir → Idear → Prototipar → Testar. |
| 5 | **c)** | O Product Owner é responsável por manter e priorizar o Product Backlog no Scrum. |

---

#### Questão 6 — SQL Prática (2,5 pts)

**a) (0,5 pt):**
```sql
SELECT * FROM produtos
WHERE categoria = 'Eletrônicos' AND preco < 500.00;
```

**b) (0,5 pt):**
```sql
UPDATE produtos
SET estoque = 0
WHERE preco > 1000.00;
```

**c) (0,75 pt):**
```sql
SELECT categoria, COUNT(*) AS qtd_produtos
FROM produtos
GROUP BY categoria
HAVING COUNT(*) > 3;
```

**d) (0,75 pt):**
```sql
INSERT INTO produtos (nome, categoria, preco, estoque)
VALUES ('Fone Bluetooth', 'Eletrônicos', 89.90, 50);
```

---

#### Questão 7 — Portugol Conversor de Notas (2,5 pts)

**Resposta:**

```
programa {
    funcao inicio() {
        real notas[5]
        real soma = 0.0, media
        
        // Leitura das notas
        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite a nota ", i+1, " (0 a 10): ")
            leia(notas[i])
        }
        
        // Exibir conceitos e calcular soma
        escreva("\n=== CONCEITOS ===\n")
        para (inteiro i = 0; i < 5; i++) {
            soma = soma + notas[i]
            escreva("Nota ", i+1, ": ", notas[i], " — ")
            
            se (notas[i] >= 9.0) {
                escreva("A — Excelente\n")
            } senao se (notas[i] >= 7.0) {
                escreva("B — Bom\n")
            } senao se (notas[i] >= 5.0) {
                escreva("C — Regular\n")
            } senao se (notas[i] >= 3.0) {
                escreva("D — Insuficiente\n")
            } senao {
                escreva("E — Reprovado\n")
            }
        }
        
        // Média e conceito final
        media = soma / 5.0
        escreva("\nMédia: ", media, " — ")
        
        se (media >= 9.0) {
            escreva("Conceito final: A\n")
        } senao se (media >= 7.0) {
            escreva("Conceito final: B\n")
        } senao se (media >= 5.0) {
            escreva("Conceito final: C\n")
        } senao se (media >= 3.0) {
            escreva("Conceito final: D\n")
        } senao {
            escreva("Conceito final: E\n")
        }
    }
}
```

---

#### Questão 8 — Python Lista de Compras (2,5 pts)

**Resposta:**

```python
def gerenciar_lista_compras():
    lista = []
    
    while True:
        print("\n=== LISTA DE COMPRAS ===")
        print("1 - Adicionar item")
        print("2 - Remover item")
        print("3 - Exibir lista")
        print("4 - Sair")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            item = input("Nome do item: ")
            lista.append(item)
            print(f"'{item}' adicionado!")
            
        elif opcao == "2":
            item = input("Nome do item a remover: ")
            if item in lista:
                lista.remove(item)
                print(f"'{item}' removido!")
            else:
                print(f"Erro: '{item}' não está na lista!")
                
        elif opcao == "3":
            if len(lista) == 0:
                print("A lista está vazia.")
            else:
                print("\nItens na lista:")
                for i, item in enumerate(lista, 1):
                    print(f"  {i}. {item}")
                    
        elif opcao == "4":
            print("Saindo... Até logo!")
            break
        else:
            print("Opção inválida! Tente novamente.")

# Executar
gerenciar_lista_compras()
```

---

### Gabarito — Simulado do Semestre

---

#### Questões de Múltipla Escolha (1-8)

| Questão | Resposta | Justificativa |
|---------|----------|---------------|
| 1 | **a)** | Usa JOIN + WHERE para filtrar status + GROUP BY + HAVING COUNT(*) > 3. É a única com sintaxe SQL válida para agregação filtrada. |
| 2 | **b)** | Na etapa Empatizar, o objetivo é entender o usuário. Entrevistas, Mapa de Empatia e Observação são ferramentas de pesquisa qualitativa. |
| 3 | **c)** | `%s` com tupla é a parametrização correta do psycopg2. Previne SQL Injection. `?` é SQLite, f-string é inseguro. |
| 4 | **b)** | Um nó de decisão com condições encadeadas (AND) permite verificar múltiplos critérios sequencialmente antes de prosseguir. |
| 5 | **c)** | O MVP pode ser representado como um épico no Product Backlog, contendo as user stories mínimas para validar a proposta de valor. |
| 6 | **b)** | Consistência entre design visual e lógica: se campos estão agrupados visualmente, a validação deve respeitar essa mesma organização. |
| 7 | **b)** | O try/except com commit no sucesso e rollback no erro garante atomicidade da transação (tudo ou nada). |
| 8 | **b)** | Wireframe baixa fidelidade = estrutura/layout esquemático. Protótipo alta fidelidade = visual completo com interações. |

**Explicações detalhadas das erradas:**

**Q1:** b) COUNT(*) no WHERE é erro de sintaxe; c) Falta JOIN explícito e GROUP BY; d) Não usa notação de tabela.coluna correta; e) COUNT no WHERE é inválido.

**Q3:** a) f-string é vulnerável a SQL Injection; b) Concatenação é vulnerável; d) `?` é placeholder do SQLite, não PostgreSQL; e) Sintaxe inexistente.

**Q7:** a) Sem try/except, se a segunda query falhar, a primeira já foi commitada (inconsistência); c) BEGIN/COMMIT manual funciona mas não tem rollback automático em erro; d) `conn.save()` não existe; e) `close()` sem commit perde os dados.

---

#### Questão 9 — Clínica Veterinária (2,5 pts)

**a) CREATE TABLE (1,0 pt):**

```sql
CREATE TABLE tutores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

CREATE TABLE animais (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(30) NOT NULL,
    tutor_id INTEGER NOT NULL REFERENCES tutores(id)
);

CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    animal_id INTEGER NOT NULL REFERENCES animais(id),
    data_consulta DATE NOT NULL,
    diagnostico TEXT
);
```

**b) Classe ConsultaRepository (1,5 pt):**

```python
import psycopg2
from psycopg2 import Error

class ConsultaRepository:
    def __init__(self):
        self.conn = psycopg2.connect(
            host="localhost", database="veterinaria",
            user="postgres", password="postgres"
        )
        self.cursor = self.conn.cursor()
    
    def agendar_consulta(self, animal_id: int, data: str, diagnostico: str):
        try:
            self.cursor.execute(
                """INSERT INTO consultas (animal_id, data_consulta, diagnostico)
                   VALUES (%s, %s, %s)""",
                (animal_id, data, diagnostico)
            )
            self.conn.commit()
            return True
        except Error as e:
            self.conn.rollback()
            print(f"Erro: {e}")
            return False
    
    def buscar_consultas_por_tutor(self, tutor_id: int) -> list:
        try:
            self.cursor.execute(
                """SELECT c.data_consulta, a.nome AS animal, c.diagnostico
                   FROM consultas c
                   JOIN animais a ON c.animal_id = a.id
                   WHERE a.tutor_id = %s
                   ORDER BY c.data_consulta DESC""",
                (tutor_id,)
            )
            return self.cursor.fetchall()
        except Error as e:
            print(f"Erro: {e}")
            return []
```

---

#### Questão 10 — Quiz Interativo Tkinter (2,5 pts)

**Resposta:**

```python
import tkinter as tk
from tkinter import messagebox

class QuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Quiz - Módulo 1")
        self.root.geometry("500x350")
        
        self.perguntas = [
            {
                "pergunta": "Qual comando SQL insere dados?",
                "alternativas": ["SELECT", "INSERT INTO", "UPDATE", "CREATE"],
                "correta": 1
            },
            {
                "pergunta": "Em Python, listas começam no índice:",
                "alternativas": ["1", "0", "-1", "Nenhum"],
                "correta": 1
            },
            {
                "pergunta": "Qual NÃO é um pilar do Design Thinking?",
                "alternativas": ["Empatia", "Colaboração", "Documentação", "Experimentação"],
                "correta": 2
            },
            {
                "pergunta": "No Scrum, quem prioriza o Backlog?",
                "alternativas": ["Dev Team", "Scrum Master", "Product Owner", "Stakeholder"],
                "correta": 2
            },
            {
                "pergunta": "Qual princípio de Gestalt agrupa por semelhança?",
                "alternativas": ["Proximidade", "Similaridade", "Fechamento", "Continuidade"],
                "correta": 1
            }
        ]
        
        self.indice_atual = 0
        self.pontuacao = 0
        
        # Widgets
        self.lbl_pontos = tk.Label(root, text="Pontos: 0/5", font=("Arial", 10))
        self.lbl_pontos.pack(anchor="e", padx=10, pady=5)
        
        self.lbl_pergunta = tk.Label(root, text="", font=("Arial", 14), wraplength=450)
        self.lbl_pergunta.pack(pady=20)
        
        self.botoes = []
        for i in range(4):
            btn = tk.Button(root, text="", width=40, command=lambda idx=i: self.verificar(idx))
            btn.pack(pady=5)
            self.botoes.append(btn)
        
        self.mostrar_pergunta()
    
    def mostrar_pergunta(self):
        if self.indice_atual < len(self.perguntas):
            q = self.perguntas[self.indice_atual]
            self.lbl_pergunta.config(text=f"Q{self.indice_atual+1}: {q['pergunta']}")
            for i, alt in enumerate(q["alternativas"]):
                self.botoes[i].config(text=alt, state="normal")
        else:
            self.finalizar()
    
    def verificar(self, idx):
        correta = self.perguntas[self.indice_atual]["correta"]
        if idx == correta:
            self.pontuacao += 1
        
        self.indice_atual += 1
        self.lbl_pontos.config(text=f"Pontos: {self.pontuacao}/5")
        self.mostrar_pergunta()
    
    def finalizar(self):
        self.lbl_pergunta.config(text=f"Fim! Você acertou {self.pontuacao} de 5!")
        for btn in self.botoes:
            btn.config(state="disabled")

# Executar
root = tk.Tk()
app = QuizApp(root)
root.mainloop()
```

---

#### Questão 11 — Padrões de Projeto UML + Python (2,5 pts)

**a) Diagrama de Classes (descrição):**

```
+-------------------------------+
|    DatabaseConnection         |  <<Singleton>>
+-------------------------------+
| - _instance: DatabaseConnection (static)
| - _conexao: connection        |
+-------------------------------+
| + get_instance(): DatabaseConnection (static)
| + get_conexao(): connection   |
| - __init__()                  |
+-------------------------------+

         +------------------+
         |   Pagamento      |  <<Interface/Abstrata>>
         +------------------+
         | + processar()    |
         | + get_tipo()     |
         +------------------+
              /    |    \
             /     |     \
+--------+ +--------+ +--------+
|PagPix  | |PagCartao| |PagBoleto|
+--------+ +--------+ +--------+

+-------------------------------+
|    PagamentoFactory           |  <<Factory Method>>
+-------------------------------+
| + criar_pagamento(tipo): Pagamento (static)
+-------------------------------+
```

**b) Implementação Python (1,5 pt):**

```python
import psycopg2

class DatabaseConnection:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._conexao = psycopg2.connect(
                host="localhost", database="ecommerce",
                user="postgres", password="postgres"
            )
        return cls._instance
    
    def get_conexao(self):
        return self._conexao


class Pagamento:
    def processar(self, valor: float):
        raise NotImplementedError
    
    def get_tipo(self) -> str:
        raise NotImplementedError


class PagamentoPix(Pagamento):
    def processar(self, valor: float):
        return f"Pix de R${valor:.2f} processado. Chave gerada."
    
    def get_tipo(self):
        return "PIX"


class PagamentoCartao(Pagamento):
    def processar(self, valor: float):
        return f"Cartão: R${valor:.2f} aprovado em 3x."
    
    def get_tipo(self):
        return "CARTAO"


class PagamentoBoleto(Pagamento):
    def processar(self, valor: float):
        return f"Boleto de R${valor:.2f} gerado. Vence em 3 dias."
    
    def get_tipo(self):
        return "BOLETO"


class PagamentoFactory:
    @staticmethod
    def criar_pagamento(tipo: str) -> Pagamento:
        tipos = {
            "pix": PagamentoPix,
            "cartao": PagamentoCartao,
            "boleto": PagamentoBoleto
        }
        classe = tipos.get(tipo.lower())
        if classe is None:
            raise ValueError(f"Tipo de pagamento '{tipo}' não suportado.")
        return classe()
```

---

#### Questão 12 — Design Thinking + UX + SQL (2,5 pts)

**a) Persona (0,5 pt):**

- **Nome:** Prof. Ricardo Alves, 42 anos
- **Profissão:** Professor de Matemática, leciona em 3 turmas do ensino médio
- **Localização:** Escola técnica estadual em Recife-PE
- **Objetivos:** Registrar frequência de forma rápida no início da aula, sem perder tempo de conteúdo
- **Dores:** Chamada em papel demora 10+ minutos; perde diários; não consegue ver padrões de ausência facilmente
- **Cenário:** Chega à sala com 40 alunos, precisa começar o conteúdo rápido. Quer registrar em 2 minutos.

**b) POV e HMW (0,5 pt):**

**POV:** "Professores de escolas técnicas precisam de uma forma rápida e digital de registrar e acompanhar a frequência dos alunos porque o método em papel é lento, sujeito a perdas e dificulta a identificação de alunos com risco de reprovação por faltas."

**HMW:**
1. "Como poderíamos permitir que o professor registre a presença de 40 alunos em menos de 2 minutos?"
2. "Como poderíamos alertar automaticamente a coordenação quando um aluno atingir 20% de faltas?"

**c) Wireframe textual (0,75 pt):**

```
+------------------------------------------+
| [Logo Escola]  CONTROLE DE FREQUÊNCIA    |
+------------------------------------------+
| Turma: [Dropdown ▼]  Data: [01/07/2025] |
| Disciplina: [Dropdown ▼]                 |
+------------------------------------------+
| Nº | Nome do Aluno     | P | F | J      |
|----|-------------------|---|---|---------|
| 1  | Ana Silva         | ● |   |         |
| 2  | Bruno Santos      |   | ● |         |
| 3  | Carla Oliveira    |   |   | ●       |
| .. | ...               |   |   |         |
+------------------------------------------+
| [SALVAR FREQUÊNCIA]  [RELATÓRIO]         |
+------------------------------------------+
| Resumo: 35 Presentes | 3 Faltas | 2 Just|
+------------------------------------------+
```

Princípios de Gestalt aplicados:
- **Proximidade:** Campos de filtro agrupados no topo
- **Similaridade:** Botões P/F/J com mesma forma, diferenciados por cor
- **Continuidade:** Lista de alunos em fluxo contínuo vertical

**d) SQL da tabela (0,75 pt):**

```sql
CREATE TABLE frequencia (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    disciplina_id INTEGER NOT NULL REFERENCES disciplinas(id),
    data_aula DATE NOT NULL,
    status CHAR(1) NOT NULL CHECK (status IN ('P', 'F', 'J')),
    observacao TEXT,
    registrado_por INTEGER REFERENCES professores(id),
    UNIQUE(aluno_id, disciplina_id, data_aula)
);
```

---

#### Questão 13 — Scrum vs Design Thinking (2,0 pts)

**a) (0,5 pt):**
- **Design Thinking** é mais valioso no início — na fase de descoberta e definição do problema, ANTES de começar a desenvolver. Ajuda a entender se estamos resolvendo o problema certo.
- **Scrum** é mais valioso na fase de execução — quando já sabemos O QUE construir e precisamos de um framework para gerenciar o COMO, iterativamente.

**b) (0,75 pt):**
- **Persona** → informa a criação de **User Stories** ("Como [persona], eu quero...")
- **POV** → define o problema que vai gerar **Épicos** no Product Backlog
- **Protótipo validado** → gera itens refinados no **Sprint Backlog** (features confirmadas pelo teste)
- A pesquisa do Empatizar fornece contexto para o PO priorizar o Backlog

**c) (0,75 pt):**

Exemplo app de delivery:
1. **Design Thinking (Semanas 1-3):** Entrevistar entregadores e clientes (Empatizar) → Definir POV ("Clientes com restrições alimentares precisam de filtros confiáveis porque não confiam nas descrições genéricas dos restaurantes") → Idear soluções → Prototipar telas no Figma → Testar com 5 usuários
2. **Scrum (Sprints 1-N):** Converter protótipo validado em User Stories → Sprint 1: Tela de cadastro + Filtro de alérgenos → Sprint 2: Sistema de pedidos → Daily Scrum diária para sincronizar → Sprint Review para validar com stakeholders → Retro para melhorar

---

#### Questão 14 — UX + Lógica + Python (2,0 pts)

**a) 3 melhorias de UX (0,75 pt):**

1. **Indicador de progresso (Continuidade/Gestalt):** Adicionar barra de progresso com etapas claras ("Etapa 2 de 3 — Endereço") para que o usuário saiba onde está e quanto falta.
2. **Auto-preenchimento por CEP (Redução de carga cognitiva):** Ao digitar o CEP, preencher automaticamente rua, bairro e cidade — reduzindo o esforço e erros de digitação.
3. **Agrupamento visual (Proximidade/Gestalt):** Separar visualmente o bloco "Endereço" do bloco "Complemento/Referência" com espaçamento e títulos, tornando o formulário menos intimidador.

**b) Algoritmo validação de CEP (0,75 pt):**

```
programa {
    funcao logico validarCEP(cadeia cep) {
        // Verificar tamanho
        se (comprimento(cep) != 8) {
            retorne falso
        }
        
        // Verificar se todos são dígitos
        para (inteiro i = 0; i < 8; i++) {
            caractere c = cep[i]
            se (c < '0' OU c > '9') {
                retorne falso
            }
        }
        retorne verdadeiro
    }
    
    funcao inicio() {
        cadeia cep
        escreva("Digite seu CEP (apenas números, 8 dígitos): ")
        leia(cep)
        
        se (validarCEP(cep)) {
            escreva("CEP válido! Buscando endereço...\n")
        } senao {
            escreva("⚠️ CEP inválido! Por favor, digite 8 números sem traço.\n")
            escreva("Exemplo correto: 50710500\n")
        }
    }
}
```

**c) Progressão no design e na lógica (0,5 pt):**

- **No design visual:** Usar uma barra com 3 círculos numerados (①②③), destacando o atual em cor e os próximos em cinza. Mostra o caminho completo (Gestalt — Continuidade).
- **Na lógica do programa:** Implementar uma variável `etapa_atual` que controla qual bloco de campos é exibido. Cada clique em "Próximo" incrementa `etapa_atual` e valida os campos da etapa antes de avançar. Isso garante consistência entre o que o usuário VÊ e o que o código PROCESSA.

---

#### Questão 15 — Integração Total: Biblioteca Escolar (2,5 pts)

**a) Design Thinking — POV e HMW (0,5 pt):**

**POV:** "Bibliotecários de escolas técnicas precisam de um sistema digital para gerenciar empréstimos porque o controle manual em caderno causa perda de livros, atrasos não monitorados e impossibilidade de saber quais títulos estão disponíveis em tempo real."

**HMW:**
1. "Como poderíamos facilitar a busca de livros disponíveis para que alunos não percam tempo procurando títulos emprestados?"
2. "Como poderíamos lembrar alunos automaticamente sobre prazos de devolução para reduzir atrasos?"

**b) UX — Persona e Gestalt (0,5 pt):**

**Persona:** Dona Marta, 55 anos, bibliotecária há 20 anos. Não é muito familiarizada com tecnologia. Precisa de interface simples e intuitiva. Dor principal: não sabe quantos livros estão emprestados sem contar manualmente.

**3 Princípios de Gestalt:**
1. **Proximidade:** Agrupar informações do livro (título, autor, status) juntas no card
2. **Similaridade:** Livros disponíveis em verde, emprestados em vermelho — mesma forma, cor diferencia status
3. **Fechamento:** Cards com bordas arredondadas para cada livro, criando unidades visuais completas

**c) Engenharia de Software — User Stories e Padrão (0,5 pt):**

**User Stories:**
1. "Como bibliotecária, quero cadastrar novos livros com título, autor e ISBN para manter o acervo atualizado."
2. "Como aluno, quero buscar livros por título ou autor para verificar disponibilidade rapidamente."
3. "Como bibliotecária, quero registrar empréstimos vinculando aluno e livro para controlar devoluções."

**Padrão:** Repository Pattern — separa a lógica de acesso ao banco da lógica de negócio. Justificativa: permite trocar o banco de dados no futuro sem alterar a lógica do sistema, e facilita testes unitários com mocks.

**d) Banco de Dados — SQL (0,5 pt):**

```sql
CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    disponivel BOOLEAN DEFAULT TRUE
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE emprestimos (
    id SERIAL PRIMARY KEY,
    livro_id INTEGER NOT NULL REFERENCES livros(id),
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    data_emprestimo DATE NOT NULL DEFAULT CURRENT_DATE,
    data_devolucao DATE,
    devolvido BOOLEAN DEFAULT FALSE
);
```

**e) Python — Função empréstimo (0,5 pt):**

```python
import psycopg2
from datetime import date

def realizar_emprestimo(aluno_id: int, livro_id: int) -> bool:
    try:
        conn = psycopg2.connect(
            host="localhost", database="biblioteca",
            user="postgres", password="postgres"
        )
        cursor = conn.cursor()
        
        # Verificar se livro está disponível
        cursor.execute(
            "SELECT disponivel FROM livros WHERE id = %s",
            (livro_id,)
        )
        resultado = cursor.fetchone()
        
        if resultado is None:
            print("Livro não encontrado!")
            return False
        
        if not resultado[0]:
            print("Livro não está disponível para empréstimo.")
            return False
        
        # Registrar empréstimo
        cursor.execute(
            """INSERT INTO emprestimos (livro_id, aluno_id, data_emprestimo)
               VALUES (%s, %s, %s)""",
            (livro_id, aluno_id, date.today())
        )
        
        # Atualizar disponibilidade do livro
        cursor.execute(
            "UPDATE livros SET disponivel = FALSE WHERE id = %s",
            (livro_id,)
        )
        
        conn.commit()
        print("Empréstimo realizado com sucesso!")
        return True
        
    except psycopg2.Error as e:
        conn.rollback()
        print(f"Erro no empréstimo: {e}")
        return False
    finally:
        cursor.close()
        conn.close()
```

---

## 📌 Observações Finais

- **Critério de correção:** Valorizamos o raciocínio lógico mesmo quando a sintaxe não está 100% perfeita.
- **Pontuação parcial:** Todas as questões práticas aceitam pontuação parcial conforme descrito em cada gabarito.
- **Recursos permitidos nas provas:** Nenhum (provas fechadas). Para a lista de exercícios e simulado, podem consultar material.
- **Tempo de prova:** 2 horas para Prova A, B e Recuperação. 3 horas para o Simulado.

---

> 📝 **Documento elaborado por Profª Luana Cristina**  
> 📅 Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco  
> 🎯 Módulo 1 — Fundamentos
