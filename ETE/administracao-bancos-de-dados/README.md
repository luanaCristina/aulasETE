<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/pgAdmin_4-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="pgAdmin4"/>
  <img src="https://img.shields.io/badge/SQL-DD6B20?style=for-the-badge&logo=amazondocumentdb&logoColor=white" alt="SQL"/>
  <img src="https://img.shields.io/badge/Carga_Horária-80h-green?style=for-the-badge" alt="80h"/>
  <img src="https://img.shields.io/badge/Módulo-1-blue?style=for-the-badge" alt="Módulo 1"/>
</p>

<h1 align="center">📊 Administração de Bancos de Dados</h1>

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
| **Disciplina** | Administração de Bancos de Dados |
| **Módulo** | 1 |
| **Carga Horária** | 80 horas (4 aulas/semana) |
| **Duração** | 20 semanas |
| **SGBD utilizado** | PostgreSQL 16+ |
| **Ferramenta visual** | pgAdmin 4 |

### Ementa

Fundamentos de Banco de Dados • SGBD Relacional • Modelagem Conceitual, Lógica e Física (DER/MER) • Normalização de Tabelas (1FN, 2FN, 3FN) • DDL: CREATE, DROP, ALTER • DML: SELECT, INSERT, UPDATE, DELETE

### Competências a Desenvolver

- ✅ Compreender o papel dos bancos de dados em sistemas de informação
- ✅ Projetar modelos conceituais, lógicos e físicos
- ✅ Aplicar normalização até a 3ª Forma Normal
- ✅ Escrever SQL para criação e manipulação de dados
- ✅ Resolver problemas reais usando bancos relacionais

---

## 🛠️ Instalação do Ambiente

> 💡 **Dica:** Reserve 30-45 minutos para instalar tudo com calma. Anote suas senhas!

### 🪟 Windows

#### Passo 1 — Download do Instalador

1. Acesse: **https://www.enterprisedb.com/downloads/postgres-postgresql-downloads**
2. Escolha a versão **16.x** (ou a mais recente) para **Windows x86-64**
3. Clique em **Download** e aguarde o arquivo `.exe`

#### Passo 2 — Instalação

1. Execute o arquivo `.exe` baixado como **Administrador**
2. Clique em **Next** na tela de boas-vindas
3. **Diretório de instalação:** mantenha o padrão (`C:\Program Files\PostgreSQL\16`)
4. **Componentes:** marque TODOS:
   - ✅ PostgreSQL Server
   - ✅ pgAdmin 4
   - ✅ Stack Builder
   - ✅ Command Line Tools
5. **Diretório de dados:** mantenha o padrão
6. Clique **Next**

#### Passo 3 — Senha do Superusuário (CRÍTICO!)

> ⚠️ **ATENÇÃO — PONTO MAIS IMPORTANTE DA INSTALAÇÃO:**
>
> Nesta tela você definirá a senha do usuário `postgres` (o superusuário do banco).
> - **ANOTE ESSA SENHA** em um lugar seguro!
> - Se esquecer, precisará reinstalar ou resetar o serviço.
> - **Sugestão para aula:** use `postgres` como senha (fácil de lembrar no ambiente de estudo).

1. Digite a senha escolhida
2. Confirme a senha
3. Clique **Next**

#### Passo 4 — Porta e Locale

| Configuração | Valor Recomendado |
|---|---|
| **Porta** | `5432` (padrão — não altere!) |
| **Locale** | `[Default locale]` ou `Portuguese, Brazil` |

1. Mantenha porta `5432`
2. Locale: pode deixar o padrão
3. Clique **Next** → **Next** → **Finish**

#### Passo 5 — Primeira Conexão no pgAdmin 4

1. Abra o **Menu Iniciar** → procure **pgAdmin 4**
2. Na primeira abertura, será pedido uma **Master Password** (senha do pgAdmin — pode ser diferente da do PostgreSQL)
3. No painel esquerdo, expanda: **Servers** → **PostgreSQL 16**
4. Será pedida a senha do `postgres` (aquela que você definiu no Passo 3)
5. Se conectou? Você verá os bancos `postgres`, `template0` e `template1` 🎉

> 💡 **Dica:** Se aparecer erro de conexão, verifique se o serviço está rodando:
> - Abra **Serviços do Windows** (Win+R → `services.msc`)
> - Procure **postgresql-x64-16** → Status deve ser **Em Execução**

---

### 🍎 macOS

#### Opção 1 — Instalador Gráfico (Mais simples)

1. Acesse: **https://www.enterprisedb.com/downloads/postgres-postgresql-downloads**
2. Baixe a versão **16.x** para **macOS**
3. Abra o arquivo `.dmg` e siga o assistente (mesmo processo do Windows)
4. Para o pgAdmin: baixe separadamente em **https://www.pgadmin.org/download/pgadmin-4-macos/**

#### Opção 2 — Via Terminal com Homebrew (Recomendado para devs)

> 💡 **Pré-requisito:** Ter o Homebrew instalado. Se não tiver:
> ```bash
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> ```

**Passo 1 — Instalar o PostgreSQL:**

```bash
# Instalar PostgreSQL 16
brew install postgresql@16

# Iniciar o serviço automaticamente
brew services start postgresql@16

# Verificar se está rodando
brew services list
# Deve mostrar: postgresql@16  started
```

**Passo 2 — Configurar acesso:**

```bash
# Criar o banco padrão (se necessário)
createdb

# Acessar o PostgreSQL via terminal
psql postgres

# Dentro do psql, definir senha para o user postgres:
ALTER USER postgres PASSWORD 'postgres';

# Sair do psql
\q
```

**Passo 3 — Instalar o pgAdmin 4:**

```bash
brew install --cask pgadmin4
```

**Passo 4 — Conectar o pgAdmin ao servidor local:**

1. Abra o pgAdmin via **Spotlight** (`Cmd + Espaço` → digite "pgAdmin")
2. Defina uma Master Password na primeira abertura
3. Clique com botão direito em **Servers** → **Register** → **Server...**
4. Na aba **General**: Nome = `Local`
5. Na aba **Connection**:
   - Host: `localhost`
   - Port: `5432`
   - Username: `postgres` (ou seu usuário macOS)
   - Password: `postgres`
6. Clique **Save** — conectado! 🎉

---

### ✅ Teste Rápido — Verifique se tudo funciona

Abra o **Query Tool** no pgAdmin (clique no banco `postgres` → Tools → Query Tool) e execute:

```sql
SELECT version();
```

Se retornar algo como `PostgreSQL 16.x on ...`, seu ambiente está pronto! ✅

---

## 🗓️ Cronograma Semana a Semana

### BLOCO 1 — FUNDAMENTOS (Semanas 1–3)

#### 📅 Semana 1: Introdução a Bancos de Dados

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | O que é um Banco de Dados? Histórico e evolução | Compreender o conceito e importância nos sistemas modernos |
| 2 | Tipos de BD (Relacional, NoSQL, Grafos, Documento) | Diferenciar tipos de bancos e seus casos de uso |
| 3 | SGBD: conceito, exemplos (PostgreSQL, MySQL, SQL Server) | Identificar o papel do SGBD como intermediário |
| 4 | **Lab:** Instalação do PostgreSQL + pgAdmin | Configurar o ambiente de trabalho local |

#### 📅 Semana 2: Conceitos do Modelo Relacional

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Modelo Relacional: Tabelas, Linhas, Colunas | Compreender a estrutura tabular de dados |
| 2 | Chaves Primárias (PK) e Chaves Estrangeiras (FK) | Aplicar restrições de integridade |
| 3 | Tipos de Dados (INTEGER, VARCHAR, DATE, BOOLEAN, DECIMAL) | Escolher tipos adequados para cada cenário |
| 4 | **Prática:** Modelar tabela de Clientes | Criar primeira tabela no pgAdmin |

#### 📅 Semana 3: Integridade e Relacionamentos

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Restrições: NOT NULL, UNIQUE, DEFAULT, CHECK | Garantir qualidade dos dados no esquema |
| 2 | Relacionamentos: 1:1, 1:N, N:M | Modelar associações entre entidades |
| 3 | Tabelas associativas (N:M) | Implementar relacionamentos muitos-para-muitos |
| 4 | **Exercício:** Modelar sistema de Biblioteca | Consolidar conceitos de relacionamentos |

---

### BLOCO 2 — MODELAGEM DE DADOS (Semanas 4–7)

#### 📅 Semana 4: Modelagem Conceitual — DER

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | DER: entidades, atributos, relacionamentos | Identificar elementos do diagrama |
| 2 | Cardinalidade e participação (total/parcial) | Definir restrições de participação |
| 3 | **Lab:** Ferramenta brModelo ou draw.io | Criar DERs com ferramentas visuais |
| 4 | **Exercício:** DER de Clínica Médica | Aplicar modelagem em cenário real |

#### 📅 Semana 5: Modelagem Lógica — MER

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Do DER ao Modelo Lógico: regras de mapeamento | Converter modelo conceitual em lógico |
| 2 | Atributos multivalorados e compostos | Tratar atributos complexos |
| 3 | Herança/Generalização no modelo lógico | Mapear hierarquias de entidades |
| 4 | **Exercício:** MER da Clínica Médica | Gerar modelo lógico do DER anterior |

#### 📅 Semana 6: Normalização (Parte 1)

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Por que normalizar? Anomalias de dados | Compreender problemas de dados não normalizados |
| 2 | 1ª Forma Normal (1FN): atomicidade | Eliminar grupos repetitivos |
| 3 | 2ª Forma Normal (2FN): dependência funcional total | Remover dependências parciais |
| 4 | **Exercício:** Normalizar planilha de Vendas até 2FN | Aplicar 1FN e 2FN em dados reais |

#### 📅 Semana 7: Normalização (Parte 2) + Modelo Físico

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | 3ª Forma Normal (3FN): dependências transitivas | Eliminar dependências transitivas |
| 2 | Exercício completo: Normalizar até 3FN | Aplicar todas as formas normais |
| 3 | Modelo Físico: traduzir MER para scripts SQL | Converter modelo lógico em DDL |
| 4 | 🎯 **Entrega: Projeto Intermediário** | Modelagem completa de um sistema |

---

### BLOCO 3 — DDL: Linguagem de Definição de Dados (Semanas 8–10)

#### 📅 Semana 8: CREATE TABLE

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Sintaxe do CREATE TABLE com restrições | Criar tabelas com PKs, FKs e constraints |
| 2 | Tipos de dados no PostgreSQL (SERIAL, TEXT, TIMESTAMP) | Escolher tipos específicos do SGBD |
| 3 | **Prática:** Criar schema completo da Clínica | Implementar modelo físico no banco |
| 4 | REFERENCES e integridade referencial | Criar tabelas interligadas |

#### 📅 Semana 9: ALTER e DROP

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | ALTER TABLE: ADD, DROP, RENAME colunas | Modificar estrutura existente |
| 2 | ALTER TABLE: ADD/DROP CONSTRAINT | Gerenciar restrições pós-criação |
| 3 | DROP TABLE, DROP DATABASE, TRUNCATE | Entender operações destrutivas |
| 4 | **Exercício:** Evoluir schema com ALTER (migrações) | Simular evolução de banco |

#### 📅 Semana 10: Índices e Boas Práticas

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | CREATE INDEX: conceito e quando usar | Otimizar consultas |
| 2 | Tipos de índice (B-tree, Hash) | Entender mecanismos internos |
| 3 | Boas práticas de nomenclatura e organização | Padronizar nomes |
| 4 | Revisão DDL + Quiz interativo | Consolidar DDL |

---

### BLOCO 4 — DML: Linguagem de Manipulação de Dados (Semanas 11–16)

#### 📅 Semana 11: INSERT

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | INSERT INTO: sintaxe básica | Inserir registros em tabelas |
| 2 | INSERT com múltiplas linhas e DEFAULT | Otimizar inserções |
| 3 | INSERT com SELECT (subquery) | Popular tabelas via consultas |
| 4 | **Prática:** Popular banco da Clínica | Criar massa de dados |

#### 📅 Semana 12: SELECT Básico

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | SELECT *, colunas específicas, aliases (AS) | Consultar dados |
| 2 | WHERE: operadores de comparação e lógicos | Filtrar registros |
| 3 | ORDER BY, LIMIT, OFFSET | Ordenar e paginar |
| 4 | DISTINCT, IN, BETWEEN, LIKE, IS NULL | Filtros especiais |

#### 📅 Semana 13: SELECT Avançado

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Funções de agregação: COUNT, SUM, AVG, MIN, MAX | Calcular estatísticas |
| 2 | GROUP BY e HAVING | Agrupar e filtrar grupos |
| 3 | INNER JOIN | Combinar múltiplas tabelas |
| 4 | LEFT JOIN, RIGHT JOIN, FULL JOIN | Variações de junção |

#### 📅 Semana 14: SELECT com Subqueries

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Subqueries no WHERE (escalar e lista) | Filtros complexos aninhados |
| 2 | Subqueries no FROM (tabelas derivadas) | Fontes temporárias de dados |
| 3 | EXISTS e NOT EXISTS | Verificar existência |
| 4 | **Exercício:** Relatórios complexos da Clínica | Combinar JOINs + agregações + subqueries |

#### 📅 Semana 15: UPDATE e DELETE

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | UPDATE: sintaxe e WHERE obrigatório | Atualizar com segurança |
| 2 | UPDATE com JOIN e subquery | Atualizações baseadas em outras tabelas |
| 3 | DELETE vs TRUNCATE | Excluir controladamente |
| 4 | Transações: BEGIN, COMMIT, ROLLBACK | Garantir atomicidade |

#### 📅 Semana 16: Prática Intensiva + Simulado

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Desafio: 10 consultas de nível mercado | Resolver problemas reais |
| 2 | Views: CREATE VIEW | Encapsular consultas |
| 3 | Revisão geral DML | Consolidar DML |
| 4 | 📝 **Simulado Preparatório** | Preparar para prova |

---

### BLOCO 5 — AVALIAÇÃO E PROJETO FINAL (Semanas 17–20)

#### 📅 Semana 17: Avaliação Oficial

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1–2 | 📝 **PROVA REGIMENTAL** | Avaliar domínio dos conteúdos |
| 3 | Correção coletiva + feedback | Identificar pontos de melhoria |
| 4 | Introdução ao Projeto Final | Apresentar escopo e requisitos |

#### 📅 Semana 18: Projeto Final — Modelagem

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Levantamento de requisitos | Identificar entidades e regras |
| 2 | Construção do DER | Criar modelo conceitual |
| 3 | Mapeamento para Modelo Lógico | Converter DER em MER |
| 4 | Revisão com feedback docente | Refinar modelo |

#### 📅 Semana 19: Projeto Final — Implementação

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1 | Scripts DDL completos | Implementar schema |
| 2 | Scripts DML: popular dados | Criar massa de dados |
| 3 | Consultas para relatórios (mín. 5 queries) | Demonstrar domínio SELECT |
| 4 | Documentação do projeto | Organizar entregáveis |

#### 📅 Semana 20: Apresentação e Encerramento

| Aula | Tópico | Objetivo de Aprendizagem |
|:----:|--------|--------------------------|
| 1–2 | 🎤 **Apresentação dos Projetos Finais** | Comunicar soluções técnicas |
| 3 | Feedback final + autoavaliação | Refletir sobre aprendizado |
| 4 | Encerramento + Panorama próximo módulo | Conectar BD com programação |

---

## 📖 Material Teórico e Prático

### 1️⃣ Fundamentos de Banco de Dados

#### O que é um Banco de Dados?

Imagine que você tem uma agenda telefônica gigante. Se ela estiver em um caderno, apenas uma pessoa pode consultar por vez, você não consegue buscar rápido, e se o caderno queimar... perdeu tudo.

Um **Banco de Dados** resolve todos esses problemas. É uma coleção **organizada** de dados armazenada eletronicamente, que permite:

| Problema da Planilha/Caderno | Solução do Banco de Dados |
|-----|-----|
| Só 1 pessoa acessa por vez | **Concorrência** — milhares de acessos simultâneos |
| Dados duplicados e inconsistentes | **Integridade** — regras automáticas que impedem dados errados |
| Sem controle de quem mexe | **Segurança** — permissões por usuário |
| Se der problema, perdeu | **Recuperação** — backup automático, restore |
| Busca lenta | **Índices** — busca em milissegundos entre milhões de registros |

#### O que é um SGBD?

O **SGBD (Sistema Gerenciador de Banco de Dados)** é o "software guardião" que fica entre você e os dados. Você nunca acessa os arquivos diretamente — sempre conversa com o SGBD usando **SQL**.

```
┌─────────────┐         ┌──────────┐         ┌──────────────┐
│  Você (SQL) │ ──────► │   SGBD   │ ──────► │  Arquivos no │
│             │ ◄────── │(PostgreSQL)│ ◄────── │    disco     │
└─────────────┘         └──────────┘         └──────────────┘
     Pergunta            Interpreta,            Dados brutos
     e comando           otimiza e              armazenados
                         executa
```

> 💡 **Analogia:** O SGBD é como um bibliotecário. Você não vai direto à estante (arquivos) — pede ao bibliotecário (SGBD) que encontra, organiza e entrega o que precisa.

#### Por que PostgreSQL?

| Critério | PostgreSQL | MySQL | SQL Server |
|----------|:----------:|:-----:|:----------:|
| Gratuito e Open Source | ✅ | ✅ | ❌ (licença cara) |
| Conformidade com SQL padrão | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Recursos avançados (JSON, Arrays) | ✅ | Parcial | ✅ |
| Usado em empresas grandes | ✅ | ✅ | ✅ |
| Comunidade e documentação em PT | ✅ | ✅ | Parcial |

> 💡 **Por que usamos PostgreSQL neste curso?** É gratuito, robusto, muito usado no mercado pernambucano e brasileiro, e segue fielmente o padrão SQL — o que você aprender aqui funciona em qualquer SGBD.

---

### 2️⃣ Modelo Relacional — Conceitos Fundamentais

#### Anatomia de uma Tabela

```
                    TABELA: pacientes
    ┌─────┬──────────────┬─────────────┬────────────┐
    │ id  │    nome      │     cpf     │  telefone  │  ← COLUNAS (atributos)
    ├─────┼──────────────┼─────────────┼────────────┤
    │  1  │ Maria Silva  │ 12345678901 │ 81999991234│  ← LINHA (registro/tupla)
    │  2  │ João Santos  │ 98765432100 │ 81988882222│
    │  3  │ Ana Costa    │ 11122233344 │ 81977773333│
    └─────┴──────────────┴─────────────┴────────────┘
         ↑
    CHAVE PRIMÁRIA (PK)
    Identifica UNICAMENTE cada linha
```

**Conceitos-chave:**
- **Tabela (Relação):** Estrutura que armazena dados sobre um assunto (ex: pacientes)
- **Coluna (Atributo):** Uma característica do assunto (ex: nome, cpf)
- **Linha (Tupla/Registro):** Um item específico (ex: dados da Maria)
- **Chave Primária (PK):** Coluna(s) que identifica cada linha de forma ÚNICA

#### Chave Primária vs Chave Estrangeira

```
  TABELA: medicos                        TABELA: consultas
  ┌────┬────────────┐                   ┌────┬────────────┬───────────┐
  │ id │   nome     │                   │ id │ medico_id  │  data     │
  ├────┼────────────┤                   ├────┼────────────┼───────────┤
  │ 1  │ Dr. Carlos │◄──────────────────│ 1  │     1      │ 2026-08-10│
  │ 2  │ Dra. Ana   │◄────────┐        │ 2  │     1      │ 2026-08-11│
  └────┴────────────┘         └────────│ 3  │     2      │ 2026-08-12│
    ↑ PK                               └────┴────────────┴───────────┘
                                                  ↑ FK (Chave Estrangeira)
                                          "Aponta" para o id do médico
```

> 🔑 **Chave Primária (PK):** "Quem sou eu?" — identifica unicamente o registro
> 🔗 **Chave Estrangeira (FK):** "A quem pertenço?" — cria ligação entre tabelas

---

### 3️⃣ Modelagem Conceitual — DER (Diagrama Entidade-Relacionamento)

#### O que é?

O DER é o **"mapa do tesouro"** antes de construir o banco. Ele mostra QUAIS dados existem e COMO se relacionam — sem se preocupar (ainda) com tipos de dados ou SQL.

#### Elementos do DER

| Símbolo | Elemento | Exemplo |
|:-------:|----------|---------|
| 🟦 Retângulo | **Entidade** (coisa do mundo real) | Paciente, Médico, Consulta |
| 🟡 Elipse | **Atributo** (característica) | nome, CPF, data_nascimento |
| 🔷 Losango | **Relacionamento** (verbo entre entidades) | "realiza", "atende" |
| Números | **Cardinalidade** (quantos de cada lado) | (1,N), (0,1), (N,M) |

#### Exemplo Completo: Sistema de Clínica Médica

```
┌────────────────────┐                              ┌────────────────────┐
│     PACIENTE       │                              │      MÉDICO        │
├────────────────────┤                              ├────────────────────┤
│ • id (PK)          │         CONSULTA             │ • id (PK)          │
│ • nome             │    ┌────────────────┐        │ • nome             │
│ • cpf (UNIQUE)     │───►│ • id (PK)      │◄──────│ • crm (UNIQUE)     │
│ • data_nascimento  │1,N │ • data_hora    │ 1,N   │ • especialidade    │
│ • telefone         │    │ • tipo         │        │ • telefone         │
│ • email            │    │ • status       │        │ • email            │
└────────────────────┘    │ • observações  │        └────────────────────┘
                          └────────────────┘

Leitura das cardinalidades:
• Um PACIENTE pode ter 1 ou MUITAS consultas (1,N)
• Um MÉDICO pode atender 1 ou MUITAS consultas (1,N)  
• Cada CONSULTA pertence a exatamente 1 paciente E 1 médico
```

> 💡 **Dica de ouro:** Para descobrir entidades, grife os **substantivos** do texto de requisitos. Para descobrir relacionamentos, grife os **verbos**.

---

### 4️⃣ Normalização — Passo a Passo

#### Por que normalizar?

Imagine esta tabela de uma loja:

| pedido | cliente | cidade | produto | preço | qtd |
|--------|---------|--------|---------|-------|-----|
| 1 | Ana | Recife | Mouse | 80 | 2 |
| 1 | Ana | Recife | Teclado | 150 | 1 |
| 2 | Ana | Recife | Mouse | 80 | 1 |

**Problemas (anomalias):**
- 🔴 **Atualização:** Se Ana mudar de cidade, preciso alterar em TODAS as linhas dela
- 🔴 **Inserção:** Não consigo cadastrar um produto novo se ninguém comprou ele ainda
- 🔴 **Exclusão:** Se deletar o pedido 2, perco a informação de que Ana mora em Recife

**Solução:** Normalizar! Separar dados em tabelas especializadas.

#### 1ª Forma Normal (1FN) — Atomicidade

> **Regra:** Todo valor deve ser atômico (indivisível). Nada de listas ou grupos repetitivos.

❌ **Viola 1FN:**
| aluno | telefones |
|-------|-----------|
| Maria | 81999991111, 81988882222 |

✅ **Em 1FN:**
| aluno | telefone |
|-------|----------|
| Maria | 81999991111 |
| Maria | 81988882222 |

#### 2ª Forma Normal (2FN) — Dependência Total da PK

> **Regra:** Todo atributo NÃO-chave deve depender de TODA a chave primária (não só de parte dela).
> ⚠️ Só se aplica quando a PK é COMPOSTA (mais de uma coluna).

❌ **Viola 2FN:** (PK = matricula + disciplina)
| matricula | disciplina | aluno_nome | nota |
|-----------|-----------|-----------|------|
| `aluno_nome` depende SÓ de `matricula`, não de `disciplina` → dependência PARCIAL |

✅ **Em 2FN:** Separe em duas tabelas:
```
ALUNOS(matricula PK, aluno_nome)
NOTAS(matricula FK, disciplina, nota) → PK(matricula, disciplina)
```

#### 3ª Forma Normal (3FN) — Sem Dependências Transitivas

> **Regra:** Nenhum atributo não-chave pode depender de OUTRO atributo não-chave.
> Em outras palavras: A → B → C é proibido se B não for chave.

❌ **Viola 3FN:**
| matricula (PK) | aluno_nome | curso | coordenador_curso |
| `coordenador_curso` depende de `curso`, que depende de `matricula` → transitiva! |

✅ **Em 3FN:**
```
CURSOS(curso_id PK, nome_curso, coordenador)
ALUNOS(matricula PK, aluno_nome, curso_id FK)
```

> 💡 **Macete para lembrar:**
> - **1FN** = "Cada célula com UM valor só"
> - **2FN** = "Tudo depende da chave INTEIRA"
> - **3FN** = "Tudo depende da chave E NADA MAIS"

---

### 5️⃣ DDL — Linguagem de Definição de Dados

#### CREATE TABLE — Criando Tabelas

```sql
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(15),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 🔍 Entendendo o Código passo a passo

| Linha | Código | O que faz | Por quê? |
|:-----:|--------|-----------|----------|
| 1 | `CREATE TABLE pacientes (` | Inicia a criação da tabela chamada "pacientes" | Nome sempre no plural (convenção) |
| 2 | `id SERIAL PRIMARY KEY` | Cria coluna `id` que auto-incrementa (1,2,3...) e é a chave primária | `SERIAL` evita que você tenha que gerar IDs manualmente — o banco cuida disso |
| 3 | `nome VARCHAR(100) NOT NULL` | Texto de até 100 caracteres, obrigatório | `NOT NULL` = campo obrigatório. Sem isso, poderiam cadastrar paciente sem nome! |
| 4 | `cpf CHAR(11) UNIQUE NOT NULL` | Exatamente 11 caracteres, único e obrigatório | `CHAR(11)` = tamanho fixo (CPF sempre tem 11 dígitos). `UNIQUE` impede dois pacientes com mesmo CPF |
| 5 | `data_nascimento DATE` | Armazena apenas a data (sem hora) | Tipo `DATE` é otimizado para cálculos de idade, filtros por período |
| 6 | `email VARCHAR(100)` | Texto até 100 caracteres, **opcional** | Sem `NOT NULL` = pode ficar vazio. Nem todo paciente tem email |
| 7 | `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | Data/hora preenchida automaticamente | Útil para auditoria — saber quando o registro foi criado sem precisar informar |

> ⚠️ **SERIAL vs INTEGER:** Use `SERIAL` quando o banco deve gerar o valor automaticamente (IDs). Use `INTEGER` quando VOCÊ vai informar o valor (ex: quantidade, idade).

#### ALTER TABLE — Modificando Estruturas

```sql
-- Adicionar uma coluna nova
ALTER TABLE pacientes ADD COLUMN convenio VARCHAR(50);

-- Remover uma coluna
ALTER TABLE pacientes DROP COLUMN convenio;

-- Renomear uma coluna
ALTER TABLE pacientes RENAME COLUMN telefone TO celular;

-- Adicionar uma constraint depois
ALTER TABLE pacientes ADD CONSTRAINT chk_cpf_length CHECK (LENGTH(cpf) = 11);
```

#### 🔍 Entendendo o Código passo a passo

| Comando | Quando usar |
|---------|-------------|
| `ADD COLUMN` | Percebeu que falta uma informação? Adicione sem recriar a tabela |
| `DROP COLUMN` | Coluna não é mais necessária (cuidado: dados são perdidos!) |
| `RENAME COLUMN` | Nome confuso ou padronização mudou |
| `ADD CONSTRAINT` | Esqueceu de validar algo na criação? Adicione a regra depois |

> ⚠️ **Cuidado com DROP:** Ao remover coluna/tabela, os dados são **PERMANENTEMENTE** excluídos. Sempre faça backup antes!

---

### 6️⃣ DML — Linguagem de Manipulação de Dados

#### Schema Completo para Prática

Antes dos exemplos DML, vamos criar o schema que usaremos em todos os exercícios:

```sql
-- ============================================
-- 🏥 SCHEMA: SISTEMA DE CLÍNICA MÉDICA
-- Execute este bloco inteiro para criar o ambiente
-- ============================================

CREATE DATABASE clinica_medica;
-- (Conecte-se ao banco clinica_medica antes de continuar)

CREATE TABLE especialidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT
);

CREATE TABLE medicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    crm VARCHAR(15) NOT NULL UNIQUE,
    especialidade_id INTEGER NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_especialidade
        FOREIGN KEY (especialidade_id) REFERENCES especialidades(id)
);

CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    endereco TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    medico_id INTEGER NOT NULL,
    data_hora TIMESTAMP NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('primeira_vez', 'retorno')),
    status VARCHAR(20) NOT NULL DEFAULT 'agendada'
        CHECK (status IN ('agendada', 'confirmada', 'realizada', 'cancelada')),
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_paciente FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    CONSTRAINT fk_medico FOREIGN KEY (medico_id) REFERENCES medicos(id),
    CONSTRAINT uk_medico_horario UNIQUE (medico_id, data_hora)
);

CREATE INDEX idx_consultas_data ON consultas(data_hora);
CREATE INDEX idx_consultas_paciente ON consultas(paciente_id);
```

#### 🔍 Entendendo as Decisões de Design

| Decisão | Motivo |
|---------|--------|
| `CHECK (tipo IN ('primeira_vez', 'retorno'))` | Impede valores inválidos no banco — tipo só pode ser um dos dois |
| `UNIQUE (medico_id, data_hora)` | Dois pacientes NÃO podem agendar com o mesmo médico no mesmo horário |
| `DEFAULT 'agendada'` | Se não informar status, assume "agendada" automaticamente |
| `CREATE INDEX idx_consultas_data` | Buscas por data são muito frequentes — índice acelera 10x a 100x |
| `ON DELETE` não especificado | Se tentar deletar um médico que tem consultas, o banco BLOQUEIA (segurança) |

#### INSERT — Adicionando Dados

```sql
-- Inserir especialidades
INSERT INTO especialidades (nome, descricao) VALUES
    ('Cardiologia', 'Doenças do coração e sistema circulatório'),
    ('Dermatologia', 'Doenças de pele, cabelo e unhas'),
    ('Pediatria', 'Saúde infantil de 0 a 18 anos'),
    ('Ortopedia', 'Sistema músculo-esquelético');

-- Inserir médicos
INSERT INTO medicos (nome, crm, especialidade_id, telefone, email) VALUES
    ('Dr. Carlos Mendes', 'CRM-PE 12345', 1, '81988881111', 'carlos@clinica.com'),
    ('Dra. Ana Costa', 'CRM-PE 23456', 2, '81988882222', 'ana@clinica.com'),
    ('Dr. Pedro Lima', 'CRM-PE 34567', 3, '81988883333', 'pedro@clinica.com'),
    ('Dra. Julia Rocha', 'CRM-PE 45678', 1, '81988884444', 'julia@clinica.com');

-- Inserir pacientes
INSERT INTO pacientes (nome, cpf, data_nascimento, telefone, email) VALUES
    ('João Oliveira', '11122233344', '1985-03-20', '81977771111', 'joao@email.com'),
    ('Maria Santos', '55566677788', '1992-08-10', '81977772222', 'maria@email.com'),
    ('Ana Paula Reis', '99900011122', '2000-12-05', '81977773333', 'anapaula@email.com'),
    ('Carlos Ferreira', '44455566677', '1978-11-30', '81977774444', NULL),
    ('Lucia Almeida', '77788899900', '1965-01-15', '81977775555', 'lucia@email.com');

-- Inserir consultas (várias de uma vez)
INSERT INTO consultas (paciente_id, medico_id, data_hora, tipo, status) VALUES
    (1, 1, '2026-08-10 09:00', 'primeira_vez', 'agendada'),
    (2, 1, '2026-08-10 10:00', 'primeira_vez', 'confirmada'),
    (1, 2, '2026-08-11 14:00', 'retorno', 'agendada'),
    (3, 3, '2026-08-12 08:30', 'primeira_vez', 'realizada'),
    (2, 2, '2026-08-05 11:00', 'primeira_vez', 'cancelada'),
    (4, 1, '2026-08-13 09:30', 'primeira_vez', 'confirmada'),
    (5, 4, '2026-08-14 15:00', 'retorno', 'agendada'),
    (1, 3, '2026-07-20 10:00', 'primeira_vez', 'realizada');
```

#### 🔍 Entendendo o INSERT

| Detalhe | Explicação |
|---------|-----------|
| `INSERT INTO tabela (colunas) VALUES (valores)` | Sempre listar as colunas evita erros quando a tabela muda |
| Não incluímos `id` | Porque é `SERIAL` — o banco gera automaticamente |
| Não incluímos `created_at` | Porque tem `DEFAULT CURRENT_TIMESTAMP` |
| Múltiplos `VALUES` separados por vírgula | Mais eficiente que vários INSERTs separados |
| `NULL` no email do Carlos | Permitido porque `email` não é `NOT NULL` |

> ⚠️ **Erro comum:** Se tentar inserir CPF duplicado, o banco rejeita com erro de UNIQUE violation. Isso é BOM — a constraint está funcionando!

---

#### SELECT — Consultando Dados

##### Nível 1 — Básico

```sql
-- Todos os pacientes
SELECT * FROM pacientes;

-- Apenas nome e telefone
SELECT nome, telefone FROM pacientes;

-- Renomear colunas na saída (alias)
SELECT nome AS "Nome do Paciente", telefone AS "Contato"
FROM pacientes;

-- Filtrar com WHERE
SELECT * FROM consultas WHERE status = 'agendada';

-- Ordenar resultados
SELECT nome, data_nascimento
FROM pacientes
ORDER BY nome ASC;  -- ASC = A→Z (padrão), DESC = Z→A

-- Limitar quantidade
SELECT * FROM consultas
ORDER BY data_hora DESC
LIMIT 5;  -- Apenas as 5 consultas mais recentes
```

##### Nível 2 — Filtros Avançados

```sql
-- IN: vários valores possíveis
SELECT * FROM consultas
WHERE status IN ('agendada', 'confirmada');

-- BETWEEN: intervalo de datas
SELECT * FROM consultas
WHERE data_hora BETWEEN '2026-08-01' AND '2026-08-31';

-- LIKE: busca por padrão
SELECT * FROM pacientes
WHERE nome LIKE 'Maria%';     -- Começa com "Maria"
-- '%Silva' = termina com "Silva"
-- '%ana%' = contém "ana" em qualquer posição

-- IS NULL / IS NOT NULL
SELECT nome, email FROM pacientes
WHERE email IS NULL;  -- Pacientes sem email cadastrado

-- Combinando condições
SELECT * FROM consultas
WHERE status = 'agendada'
  AND data_hora > CURRENT_TIMESTAMP
  AND medico_id IN (1, 2);
```

##### Nível 3 — JOINs (Combinando Tabelas)

```sql
-- INNER JOIN: Consultas com nomes do paciente e médico
SELECT
    c.id AS consulta_id,
    p.nome AS paciente,
    m.nome AS medico,
    e.nome AS especialidade,
    c.data_hora,
    c.tipo,
    c.status
FROM consultas c
INNER JOIN pacientes p ON c.paciente_id = p.id
INNER JOIN medicos m ON c.medico_id = m.id
INNER JOIN especialidades e ON m.especialidade_id = e.id
ORDER BY c.data_hora;
```

#### 🔍 Entendendo o JOIN passo a passo

```
   consultas (c)          pacientes (p)          medicos (m)
┌────┬────────────┐    ┌────┬────────────┐    ┌────┬────────────┐
│ id │paciente_id │    │ id │   nome     │    │ id │   nome     │
├────┼────────────┤    ├────┼────────────┤    ├────┼────────────┤
│ 1  │     1      │───►│ 1  │ João       │    │ 1  │ Dr. Carlos │
│ 2  │     2      │───►│ 2  │ Maria      │    │    │            │
└────┴────────────┘    └────┴────────────┘    └────┴────────────┘
        │ medico_id                                      ▲
        │     1    ──────────────────────────────────────┘
        
O JOIN "cola" as tabelas pela condição ON:
  c.paciente_id = p.id  →  "traga o nome do paciente"
  c.medico_id = m.id    →  "traga o nome do médico"
```

> 💡 **INNER JOIN** = traz apenas registros que têm correspondência em AMBAS as tabelas.
> **LEFT JOIN** = traz TODOS da tabela à esquerda, mesmo que não tenha correspondência na direita (preenche com NULL).

##### Nível 4 — Agregações

```sql
-- Quantas consultas cada médico tem?
SELECT
    m.nome AS medico,
    COUNT(c.id) AS total_consultas,
    COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) AS canceladas,
    COUNT(CASE WHEN c.status = 'realizada' THEN 1 END) AS realizadas
FROM medicos m
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY m.id, m.nome
ORDER BY total_consultas DESC;
```

#### 🔍 Entendendo GROUP BY e Agregações

| Função | O que faz | Exemplo resultado |
|--------|-----------|-------------------|
| `COUNT(*)` | Conta linhas | 8 |
| `COUNT(coluna)` | Conta valores NÃO nulos | 7 (se 1 for NULL) |
| `SUM(coluna)` | Soma valores | 1500.00 |
| `AVG(coluna)` | Média | 187.50 |
| `MIN(coluna)` | Menor valor | 50.00 |
| `MAX(coluna)` | Maior valor | 500.00 |

> ⚠️ **Regra de ouro do GROUP BY:** Toda coluna no SELECT que NÃO está dentro de uma função de agregação (COUNT, SUM...) DEVE estar no GROUP BY.

---

#### UPDATE — Atualizando Dados

```sql
-- Confirmar uma consulta
UPDATE consultas
SET status = 'confirmada'
WHERE id = 1;

-- Atualizar telefone de paciente
UPDATE pacientes
SET telefone = '81966661234', email = 'joao.novo@email.com'
WHERE cpf = '11122233344';
```

> ⚠️ **REGRA #1 DO UPDATE: NUNCA esqueça o WHERE!**
>
> ```sql
> -- ❌ PERIGO! Isso altera TODOS os pacientes!
> UPDATE pacientes SET telefone = '00000000000';
>
> -- ✅ CORRETO: Altera apenas 1 paciente específico
> UPDATE pacientes SET telefone = '00000000000' WHERE id = 5;
> ```
>
> **Dica profissional:** Antes de rodar um UPDATE, rode um SELECT com o mesmo WHERE para ver quais linhas serão afetadas.

---

#### DELETE — Excluindo Dados

```sql
-- Excluir uma consulta específica
DELETE FROM consultas WHERE id = 5;

-- Excluir consultas canceladas antigas
DELETE FROM consultas
WHERE status = 'cancelada'
  AND data_hora < CURRENT_DATE - INTERVAL '6 months';
```

> ⚠️ **Mesma regra do UPDATE — NUNCA sem WHERE!**
>
> **DELETE vs TRUNCATE vs DROP:**
> | Comando | O que faz | Pode usar WHERE? | Reversível com ROLLBACK? |
> |---------|-----------|:----:|:----:|
> | `DELETE` | Remove linhas específicas | ✅ | ✅ |
> | `TRUNCATE` | Remove TODAS as linhas (mais rápido) | ❌ | ❌* |
> | `DROP TABLE` | Remove a tabela INTEIRA (estrutura + dados) | ❌ | ❌ |

---

## 📝 Exercícios Práticos

### Módulo A — Modelagem de Dados

#### 🟢 Exercício A1 (Fácil)

**Enunciado:** Modele um DER para um sistema de **Biblioteca** com estas regras:
- A biblioteca possui livros, autores e leitores
- Um livro pode ter vários autores e um autor pode ter vários livros (N:M)
- Um empréstimo envolve um livro e um leitor com datas de retirada e devolução

<details>
<summary>📋 Ver Gabarito Comentado</summary>

**Entidades e Atributos:**
```
LIVRO: id(PK), titulo, isbn(UNIQUE), ano_publicacao, editora
AUTOR: id(PK), nome, nacionalidade
LEITOR: id(PK), nome, cpf(UNIQUE), telefone
EMPRESTIMO: id(PK), livro_id(FK), leitor_id(FK), data_retirada, data_devolucao_prevista, data_devolucao_real, status
LIVRO_AUTOR: livro_id(FK), autor_id(FK) → PK composta (tabela associativa para N:M)
```

**Por que LIVRO_AUTOR é necessária?** Porque o relacionamento é N:M (muitos para muitos). No modelo relacional, N:M não existe diretamente — precisamos de uma tabela intermediária que "quebre" em dois 1:N.

</details>

---

#### 🟡 Exercício A2 (Médio)

**Enunciado:** Normalize a seguinte tabela até a 3FN. Mostre cada passo:

| matricula | aluno | curso | coordenador | disciplina | nota |
|-----------|-------|-------|-------------|-----------|------|
| 001 | Ana | ADS | Prof. Silva | BD | 8.5 |
| 001 | Ana | ADS | Prof. Silva | Lógica | 7.0 |
| 002 | João | Redes | Prof. Costa | Redes I | 9.0 |

<details>
<summary>📋 Ver Gabarito Comentado</summary>

**1FN:** ✅ Já está (valores atômicos, sem listas).
- PK candidata: (matricula, disciplina)

**2FN:** Verificar dependências parciais:
- `aluno`, `curso`, `coordenador` → dependem SÓ de `matricula` (parte da PK) ❌

```
ALUNOS(matricula PK, aluno, curso, coordenador)
NOTAS(matricula FK, disciplina, nota) → PK(matricula, disciplina)
```

**3FN:** Verificar transitivas em ALUNOS:
- `coordenador` depende de `curso`, não de `matricula` diretamente (matricula → curso → coordenador) ❌

```sql
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    coordenador VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    matricula VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso_id INTEGER REFERENCES cursos(id)
);

CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE notas (
    aluno_matricula VARCHAR(10) REFERENCES alunos(matricula),
    disciplina_id INTEGER REFERENCES disciplinas(id),
    nota DECIMAL(4,2) CHECK (nota >= 0 AND nota <= 10),
    PRIMARY KEY (aluno_matricula, disciplina_id)
);
```

</details>

---

#### 🟡 Exercício A3 (Médio)

**Enunciado:** Crie o DDL para um sistema de **E-commerce** com: Clientes, Produtos, Pedidos e Itens de Pedido. Inclua constraints para: preço > 0, estoque >= 0, quantidade > 0, status válido.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco > 0),
    estoque INTEGER NOT NULL DEFAULT 0 CHECK (estoque >= 0),
    categoria VARCHAR(50)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL REFERENCES clientes(id),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pendente'
        CHECK (status IN ('pendente','pago','enviado','entregue','cancelado')),
    valor_total DECIMAL(10,2) DEFAULT 0
);

CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL REFERENCES pedidos(id) ON DELETE CASCADE,
    produto_id INTEGER NOT NULL REFERENCES produtos(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,
    UNIQUE (pedido_id, produto_id)
);
```

**Por que `ON DELETE CASCADE` em itens_pedido?** Se um pedido for deletado, seus itens devem sumir junto. Faz sentido — não existem itens "órfãos".

**Por que `UNIQUE (pedido_id, produto_id)`?** O mesmo produto não deve aparecer duas vezes no mesmo pedido — se quiser mais, aumente a `quantidade`.

</details>

---

#### 🔴 Exercício A4 (Desafiador)

**Enunciado:** Uma escola de idiomas precisa controlar: alunos, turmas, professores, idiomas, matrículas, aulas e frequência. Regras:
- Professores podem lecionar vários idiomas
- Alunos podem estar em várias turmas simultaneamente
- Cada turma tem horários fixos (dia + horário)
- Controlar presença/falta por aula

Crie: DER + DDL completo normalizado em 3FN.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```sql
CREATE TABLE idiomas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- Tabela associativa (N:M entre professor e idioma)
CREATE TABLE professor_idioma (
    professor_id INTEGER REFERENCES professores(id),
    idioma_id INTEGER REFERENCES idiomas(id),
    PRIMARY KEY (professor_id, idioma_id)
);

CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    idioma_id INTEGER NOT NULL REFERENCES idiomas(id),
    professor_id INTEGER NOT NULL REFERENCES professores(id),
    nivel VARCHAR(20) NOT NULL CHECK (nivel IN ('basico','intermediario','avancado')),
    dia_semana VARCHAR(15) NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    max_alunos INTEGER DEFAULT 20
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(15)
);

-- Tabela associativa (N:M entre aluno e turma)
CREATE TABLE matriculas (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    turma_id INTEGER NOT NULL REFERENCES turmas(id),
    data_matricula DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'ativa' CHECK (status IN ('ativa','trancada','concluida')),
    UNIQUE (aluno_id, turma_id)
);

CREATE TABLE aulas (
    id SERIAL PRIMARY KEY,
    turma_id INTEGER NOT NULL REFERENCES turmas(id),
    data_aula DATE NOT NULL,
    conteudo TEXT
);

CREATE TABLE frequencias (
    matricula_id INTEGER NOT NULL REFERENCES matriculas(id),
    aula_id INTEGER NOT NULL REFERENCES aulas(id),
    presente BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (matricula_id, aula_id)
);
```

</details>

---

### Módulo B — SQL (DDL e DML)

#### 🟢 Exercício B1 (Fácil)

**Enunciado:** Usando o schema da Clínica Médica, escreva:
1. Listar todos os médicos ativos ordenados por nome
2. Contar quantos pacientes estão cadastrados
3. Buscar consultas agendadas para agosto/2026

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```sql
-- 1. Médicos ativos
SELECT nome, crm, email
FROM medicos
WHERE ativo = TRUE
ORDER BY nome;

-- 2. Total de pacientes
SELECT COUNT(*) AS total_pacientes FROM pacientes;

-- 3. Consultas de agosto/2026
SELECT *
FROM consultas
WHERE data_hora >= '2026-08-01'
  AND data_hora < '2026-09-01'
  AND status = 'agendada'
ORDER BY data_hora;
```

> 💡 **Por que não usar `MONTH(data_hora) = 8`?** Porque no PostgreSQL a sintaxe é `EXTRACT(MONTH FROM data_hora)`, mas usar comparação de datas com `>=` e `<` é MAIS EFICIENTE — permite usar índices!

</details>

---

#### 🟡 Exercício B2 (Médio)

**Enunciado:** Escreva consultas usando JOIN e agregações:
1. Todas as consultas com nome do paciente, médico e especialidade
2. Quantidade de consultas por especialidade
3. Paciente com mais consultas realizadas

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```sql
-- 1. Consultas detalhadas com JOINs
SELECT
    c.id,
    p.nome AS paciente,
    m.nome AS medico,
    e.nome AS especialidade,
    c.data_hora,
    c.status
FROM consultas c
JOIN pacientes p ON c.paciente_id = p.id
JOIN medicos m ON c.medico_id = m.id
JOIN especialidades e ON m.especialidade_id = e.id
ORDER BY c.data_hora DESC;

-- 2. Consultas por especialidade (LEFT JOIN para incluir especialidades sem consultas)
SELECT
    e.nome AS especialidade,
    COUNT(c.id) AS total_consultas
FROM especialidades e
LEFT JOIN medicos m ON e.id = m.especialidade_id
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY e.id, e.nome
ORDER BY total_consultas DESC;

-- 3. Paciente com mais consultas realizadas
SELECT
    p.nome,
    COUNT(c.id) AS total
FROM pacientes p
JOIN consultas c ON p.id = c.paciente_id
WHERE c.status = 'realizada'
GROUP BY p.id, p.nome
ORDER BY total DESC
LIMIT 1;
```

</details>

---

#### 🔴 Exercício B3 (Desafiador)

**Enunciado:** Crie um relatório gerencial que mostre:
1. Para cada mês de 2026, a quantidade de consultas por status
2. A taxa de cancelamento por médico (canceladas / total * 100)
3. Os 3 horários mais procurados para agendamento
4. Pacientes com consulta agendada com mais de um médico diferente

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```sql
-- 1. Consultas por mês e status (pivot simples com CASE)
SELECT
    TO_CHAR(data_hora, 'YYYY-MM') AS mes,
    COUNT(CASE WHEN status = 'agendada' THEN 1 END) AS agendadas,
    COUNT(CASE WHEN status = 'confirmada' THEN 1 END) AS confirmadas,
    COUNT(CASE WHEN status = 'realizada' THEN 1 END) AS realizadas,
    COUNT(CASE WHEN status = 'cancelada' THEN 1 END) AS canceladas,
    COUNT(*) AS total
FROM consultas
WHERE EXTRACT(YEAR FROM data_hora) = 2026
GROUP BY TO_CHAR(data_hora, 'YYYY-MM')
ORDER BY mes;

-- 2. Taxa de cancelamento por médico
SELECT
    m.nome AS medico,
    COUNT(c.id) AS total_consultas,
    COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) AS canceladas,
    ROUND(
        COUNT(CASE WHEN c.status = 'cancelada' THEN 1 END) * 100.0 /
        NULLIF(COUNT(c.id), 0), 2
    ) AS taxa_cancelamento_pct
FROM medicos m
LEFT JOIN consultas c ON m.id = c.medico_id
GROUP BY m.id, m.nome
ORDER BY taxa_cancelamento_pct DESC;

-- 3. Horários mais procurados
SELECT
    EXTRACT(HOUR FROM data_hora) AS hora,
    COUNT(*) AS total_agendamentos
FROM consultas
GROUP BY EXTRACT(HOUR FROM data_hora)
ORDER BY total_agendamentos DESC
LIMIT 3;

-- 4. Pacientes com múltiplos médicos
SELECT
    p.nome,
    COUNT(DISTINCT c.medico_id) AS qtd_medicos
FROM pacientes p
JOIN consultas c ON p.id = c.paciente_id
WHERE c.status IN ('agendada', 'confirmada')
GROUP BY p.id, p.nome
HAVING COUNT(DISTINCT c.medico_id) > 1;
```

> 💡 **Por que `NULLIF(COUNT(c.id), 0)`?** Para evitar divisão por zero! Se um médico tem 0 consultas, `100.0 / 0` daria erro. `NULLIF` transforma o 0 em NULL, e qualquer operação com NULL retorna NULL (evitando o crash).

</details>

---

## 🚀 Projetos Orientados

### 🎯 Projeto Intermediário (Entrega: Semana 7)

**Tema:** Sistema de Agendamento de um **Salão de Beleza**

#### Cenário

Você foi contratado(a) para projetar o banco de dados de um salão de beleza. O sistema deve gerenciar profissionais, clientes, serviços oferecidos, agendamentos e pagamentos.

#### Requisitos Funcionais

| ID | Requisito |
|----|-----------|
| RF01 | Cadastrar profissionais com suas especialidades (cabeleireiro, manicure, etc.) |
| RF02 | Cadastrar clientes com dados de contato |
| RF03 | Cadastrar serviços com duração estimada e preço |
| RF04 | Realizar agendamento vinculando cliente + profissional + serviço + horário |
| RF05 | Registrar pagamento (dinheiro, cartão, PIX) vinculado ao agendamento |

#### Requisitos Não-Funcionais

| ID | Requisito |
|----|-----------|
| RNF01 | Um profissional NÃO pode ter dois agendamentos no mesmo horário |
| RNF02 | Manter histórico de preços (não apagar preço antigo ao atualizar) |
| RNF03 | CPF e telefone obrigatórios para clientes |

#### Entregáveis

1. ✅ DER (Diagrama Entidade-Relacionamento) em ferramenta visual
2. ✅ Modelo Lógico (tabelas com PKs, FKs, tipos de dados)
3. ✅ Demonstração que está em 3FN (justificar cada tabela)

#### Rubrica de Avaliação

| Critério | Peso | Excelente (10) | Bom (7) | Insuficiente (4) |
|----------|:----:|----------------|---------|------------------|
| DER correto | 30% | Todas entidades, atributos e cardinalidades | Pequenas falhas de cardinalidade | Falta entidades ou relações |
| Modelo Lógico | 30% | Mapeamento completo com constraints | Faltam 1-2 constraints | Mapeamento incompleto |
| Normalização 3FN | 20% | Em 3FN com justificativa clara | Em 2FN ou sem justificativa | Não normalizado |
| Apresentação visual | 20% | Diagrama limpo, nomenclatura padrão | Legível mas inconsistências | Difícil de entender |

---

### 🏆 Projeto Final (Entrega: Semanas 18–20)

**Tema:** Sistema de Gestão para **Restaurante Delivery** *(ou tema livre aprovado pela professora)*

#### Escopo

Entregar um banco de dados **funcional** no PostgreSQL contemplando todo o ciclo: modelagem → implementação → consultas.

#### Entregáveis Obrigatórios

| # | Entregável | Descrição | Peso |
|:-:|-----------|-----------|:----:|
| 1 | DER | Diagrama conceitual (mín. 5 entidades) | 15% |
| 2 | Modelo Lógico | Tabelas normalizadas até 3FN | 10% |
| 3 | Script DDL | CREATE TABLE com todas as constraints | 20% |
| 4 | Script DML - INSERT | Mín. 10 registros por tabela principal | 10% |
| 5 | Script DML - SELECT | Mín. 5 consultas complexas (JOIN, GROUP BY, subquery) | 25% |
| 6 | Script DML - UPDATE/DELETE | Mín. 2 de cada com WHERE | 5% |
| 7 | README.md | Descrição do sistema + regras de negócio | 5% |
| 8 | Apresentação oral | 5-8 minutos | 10% |

#### Passo a Passo para os Alunos

```
Semana 18:
  Aula 1 → Escolha do tema + listar 5+ regras de negócio
  Aula 2 → Construir DER (mín. 5 entidades, 4 relacionamentos)
  Aula 3 → Mapear para modelo lógico + verificar 3FN
  Aula 4 → Revisão obrigatória com a professora ✅

Semana 19:
  Aula 1 → Script DDL: criar TODAS as tabelas no PostgreSQL
  Aula 2 → Script DML: popular com dados realistas
  Aula 3 → Queries: responder 5 "perguntas de negócio"
  Aula 4 → Documentação + preparar apresentação

Semana 20:
  Aulas 1-2 → Apresentação oral (5-8 min por aluno/grupo)
  Aula 3 → Feedback + autoavaliação
  Aula 4 → Encerramento
```

#### Sugestões de "Perguntas de Negócio" (tema Restaurante)

- 🍕 Qual prato vende mais em cada dia da semana?
- 🛵 Qual entregador tem melhor tempo médio de entrega?
- 💰 Qual o ticket médio por bairro?
- 📅 Quais clientes não pedem há mais de 30 dias?
- 📊 Qual o faturamento mensal por categoria de produto?

---

## 📋 Simulado Preparatório

> 📅 **Aplicação:** Semana 16, Aula 4
> ⏱️ **Duração sugerida:** 50 minutos
> 📊 **Composição:** 5 objetivas + 2 práticas

---

### Questões Objetivas (0,5 ponto cada = 2,5 pontos)

**Q1.** Qual alternativa representa corretamente a **2ª Forma Normal (2FN)**?

- a) Todos os atributos devem ser atômicos
- b) Não pode haver dependências transitivas
- c) **Todo atributo não-chave deve depender totalmente da chave primária** ✅
- d) A tabela deve ter pelo menos uma chave candidata
- e) Toda coluna deve ser NOT NULL

> 💡 **Explicação:** A 2FN elimina **dependências parciais** — atributos que dependem apenas de PARTE de uma chave primária composta.

---

**Q2.** Qual tipo de subquery está sendo utilizado?
```sql
SELECT * FROM medicos
WHERE especialidade_id IN (SELECT id FROM especialidades WHERE nome = 'Cardiologia');
```

- a) Subquery escalar
- b) **Subquery de lista (retorna múltiplos valores)** ✅
- c) Subquery correlacionada
- d) Subquery no FROM
- e) CTE (Common Table Expression)

> 💡 **Explicação:** O operador `IN` espera uma **lista** de valores. A subquery retorna potencialmente vários IDs.

---

**Q3.** Qual a diferença fundamental entre `DELETE` e `TRUNCATE`?

- a) **DELETE é DML e TRUNCATE é DDL; TRUNCATE não ativa triggers e não aceita WHERE** ✅
- b) Não há diferença, são sinônimos
- c) DELETE é mais rápido que TRUNCATE
- d) TRUNCATE pode ter cláusula WHERE
- e) DELETE remove a estrutura da tabela

---

**Q4.** Em um relacionamento N:M entre ALUNO e DISCIPLINA, qual a solução correta no modelo relacional?

- a) Adicionar array em ALUNO com IDs das disciplinas
- b) **Criar tabela associativa com FKs para ambas as tabelas** ✅
- c) Adicionar FK em DISCIPLINA apontando para ALUNO
- d) Usar herança entre as tabelas
- e) Duplicar registros em ambas

> 💡 **Explicação:** N:M sempre vira tabela associativa com duas FKs (e geralmente uma PK composta).

---

**Q5.** Qual constraint garante que um médico não tenha duas consultas no mesmo horário?

- a) `PRIMARY KEY (medico_id, data_hora)`
- b) **`UNIQUE (medico_id, data_hora)` na tabela de consultas** ✅
- c) `CHECK (data_hora IS NOT NULL)`
- d) `FOREIGN KEY (medico_id) REFERENCES medicos(id)`
- e) `NOT NULL` na coluna data_hora

> 💡 **Explicação:** A constraint UNIQUE na combinação (médico + horário) impede duplicatas. PK não seria adequada pois a tabela já tem seu próprio `id` como PK.

---

### Questões Práticas (3,75 pontos cada = 7,5 pontos)

**QP1.** Normalize esta tabela até a 3FN. Mostre CADA passo com justificativa:

| pedido | data | cliente | cidade | estado | produto | categoria | preco | qtd |
|--------|------|---------|--------|--------|---------|-----------|-------|-----|
| 101 | 2026-01-15 | Ana | Recife | PE | Notebook | Eletrônicos | 3500 | 1 |
| 101 | 2026-01-15 | Ana | Recife | PE | Mouse | Periféricos | 80 | 2 |
| 102 | 2026-01-16 | João | Olinda | PE | Notebook | Eletrônicos | 3500 | 1 |

<details>
<summary>📋 Ver Gabarito</summary>

**1FN:** ✅ Já atende. PK candidata: (pedido, produto)

**2FN:** Dependências parciais (PK = pedido + produto):
- `data, cliente, cidade, estado` dependem SÓ de `pedido` → parcial!
- `categoria, preco` dependem SÓ de `produto` → parcial!
- `qtd` depende de ambos → OK

```
PEDIDOS(pedido PK, data, cliente, cidade, estado)
PRODUTOS(produto PK, categoria, preco)
ITENS_PEDIDO(pedido FK, produto FK, qtd) → PK(pedido, produto)
```

**3FN:** Dependências transitivas em PEDIDOS:
- pedido → cliente → cidade → estado (transitiva!)

```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(100),
    estado CHAR(2)
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    cliente_id INTEGER REFERENCES clientes(id)
);

CREATE TABLE itens_pedido (
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    preco_unitario DECIMAL(10,2) NOT NULL,  -- snapshot do preço na hora da compra
    PRIMARY KEY (pedido_id, produto_id)
);
```

**Critério:** 1,5 pt por cada FN correta com justificativa | 0,75 pt pelo DDL final

</details>

---

**QP2.** Escreva as seguintes consultas SQL (schema da Clínica Médica):

a) **Top 3 médicos** com mais consultas realizadas no 1º semestre de 2026 (nome, especialidade, total)

b) **Pacientes** que tiveram consulta cancelada E que também têm consulta agendada futura

<details>
<summary>📋 Ver Gabarito</summary>

```sql
-- a) Top 3 médicos 1º semestre 2026
SELECT
    m.nome AS medico,
    e.nome AS especialidade,
    COUNT(c.id) AS total_realizadas
FROM medicos m
JOIN consultas c ON m.id = c.medico_id
JOIN especialidades e ON m.especialidade_id = e.id
WHERE c.status = 'realizada'
  AND c.data_hora >= '2026-01-01'
  AND c.data_hora < '2026-07-01'
GROUP BY m.id, m.nome, e.nome
ORDER BY total_realizadas DESC
LIMIT 3;

-- b) Pacientes com cancelamento + agendamento futuro
SELECT DISTINCT
    p.nome,
    c_cancel.data_hora AS data_cancelada,
    c_futura.data_hora AS data_futura
FROM pacientes p
JOIN consultas c_cancel ON p.id = c_cancel.paciente_id
    AND c_cancel.status = 'cancelada'
JOIN consultas c_futura ON p.id = c_futura.paciente_id
    AND c_futura.status IN ('agendada', 'confirmada')
    AND c_futura.data_hora > CURRENT_TIMESTAMP
ORDER BY p.nome;
```

**Critério:** 1,875 pt por query correta. -0,5 para erros de sintaxe que não alteram a lógica.

</details>

---

## 📝 Prova Regimental

> 📅 **Aplicação:** Semana 17, Aulas 1-2
> ⏱️ **Duração:** 100 minutos (2 aulas)
> 📊 **Valor:** 10,0 pontos
> 📌 **Material:** Consulta fechada

---

### PARTE 1 — Questões Objetivas (2,5 pontos | 0,5 cada)

**1.** Qual comando SQL é classificado como **DDL** (Data Definition Language)?

- a) SELECT
- b) INSERT
- c) UPDATE
- d) **ALTER TABLE** ✅
- e) DELETE

> DDL = Define/modifica **estrutura** (CREATE, ALTER, DROP). DML = Manipula **dados** (SELECT, INSERT, UPDATE, DELETE).

---

**2.** Uma chave estrangeira (FK) serve para:

- a) Identificar unicamente cada registro
- b) **Estabelecer ligação de integridade referencial entre tabelas** ✅
- c) Impedir valores nulos
- d) Criar índices automáticos
- e) Permitir herança entre tabelas

---

**3.** Se a subquery em `WHERE campo = (SELECT ...)` retornar mais de uma linha:

- a) Retorna o primeiro resultado
- b) **Gera erro de execução** ✅
- c) Funciona normalmente
- d) Retorna NULL
- e) Escolhe aleatoriamente

> Para múltiplos valores, usar `IN` em vez de `=`.

---

**4.** Qual problema representa uma **anomalia de atualização**?

- a) Ser obrigado a cadastrar disciplina ao inserir aluno
- b) Perder dados da disciplina ao deletar último aluno
- c) **Alterar nome do curso em TODAS as linhas dos alunos** ✅
- d) Performance ruim nas consultas
- e) Falta de chave primária

---

**5.** Diferença entre `LEFT JOIN` e `INNER JOIN`:

- a) LEFT JOIN só retorna da esquerda
- b) **LEFT JOIN traz todos da esquerda + correspondentes da direita (NULL se não houver)** ✅
- c) INNER JOIN inclui registros sem match
- d) Não há diferença
- e) LEFT JOIN é mais rápido

---

### PARTE 2 — Questões Práticas (7,5 pontos)

**Schema fornecido na prova:**

```sql
-- FUNCIONARIOS(id PK, nome, cargo, salario, departamento_id FK, data_admissao)
-- DEPARTAMENTOS(id PK, nome, andar, gerente_id FK→FUNCIONARIOS)
-- PROJETOS(id PK, nome, orcamento, departamento_id FK→DEPARTAMENTOS)
-- ALOCACOES(funcionario_id FK, projeto_id FK, horas_semanais) → PK composta
```

---

**6.** (2,5 pts) Escreva o **DDL completo** para criar as 4 tabelas com:
- Tipos de dados adequados
- Todas as PKs e FKs
- Constraints: salário > 0, horas_semanais entre 1 e 40
- Pelo menos 1 índice

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```sql
CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    andar INTEGER,
    gerente_id INTEGER  -- FK adicionada depois (referência circular)
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL CHECK (salario > 0),
    departamento_id INTEGER NOT NULL REFERENCES departamentos(id),
    data_admissao DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Resolver referência circular
ALTER TABLE departamentos
ADD CONSTRAINT fk_gerente FOREIGN KEY (gerente_id) REFERENCES funcionarios(id);

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    orcamento DECIMAL(12,2) DEFAULT 0,
    departamento_id INTEGER NOT NULL REFERENCES departamentos(id)
);

CREATE TABLE alocacoes (
    funcionario_id INTEGER NOT NULL REFERENCES funcionarios(id),
    projeto_id INTEGER NOT NULL REFERENCES projetos(id),
    horas_semanais INTEGER NOT NULL CHECK (horas_semanais BETWEEN 1 AND 40),
    PRIMARY KEY (funcionario_id, projeto_id)
);

CREATE INDEX idx_func_depto ON funcionarios(departamento_id);
```

**Critérios:** 1,0 pt tabelas corretas | 0,5 pt constraints (CHECK) | 0,5 pt FK circular resolvida | 0,5 pt índice

</details>

---

**7.** (2,5 pts) Escreva consultas SQL para:

a) Nome de cada departamento + quantidade de funcionários + média salarial (incluir departamentos sem funcionários)

b) Funcionários que trabalham em mais de 2 projetos simultaneamente

c) Projeto com maior orçamento de cada departamento

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```sql
-- a) Departamentos com estatísticas
SELECT
    d.nome AS departamento,
    COUNT(f.id) AS qtd_funcionarios,
    COALESCE(ROUND(AVG(f.salario), 2), 0) AS media_salarial
FROM departamentos d
LEFT JOIN funcionarios f ON d.id = f.departamento_id
GROUP BY d.id, d.nome
ORDER BY qtd_funcionarios DESC;

-- b) Funcionários em mais de 2 projetos
SELECT
    f.nome,
    f.cargo,
    COUNT(a.projeto_id) AS total_projetos,
    SUM(a.horas_semanais) AS total_horas
FROM funcionarios f
JOIN alocacoes a ON f.id = a.funcionario_id
GROUP BY f.id, f.nome, f.cargo
HAVING COUNT(a.projeto_id) > 2;

-- c) Maior orçamento por departamento
SELECT
    d.nome AS departamento,
    p.nome AS projeto,
    p.orcamento
FROM projetos p
JOIN departamentos d ON p.departamento_id = d.id
WHERE p.orcamento = (
    SELECT MAX(p2.orcamento)
    FROM projetos p2
    WHERE p2.departamento_id = p.departamento_id
)
ORDER BY p.orcamento DESC;
```

**Critérios:** ~0,83 pt por query. -0,25 por erros menores de sintaxe.

</details>

---

**8.** (2,5 pts) **Modelagem:** Uma empresa de transporte precisa controlar:
- Motoristas (CNH com categoria e validade)
- Veículos (placa, modelo, capacidade em kg)
- Viagens (motorista, veículo, origem, destino, data, status)
- Regra: motorista NÃO pode fazer duas viagens no mesmo dia
- Manutenções (data, tipo, custo)

**Crie o DDL completo.**

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```sql
CREATE TABLE motoristas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    cnh VARCHAR(20) UNIQUE NOT NULL,
    cnh_categoria CHAR(2) NOT NULL
        CHECK (cnh_categoria IN ('A','B','C','D','E','AB','AC','AD','AE')),
    cnh_validade DATE NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    placa VARCHAR(8) UNIQUE NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    ano INTEGER,
    capacidade_kg DECIMAL(8,2) NOT NULL CHECK (capacidade_kg > 0),
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE viagens (
    id SERIAL PRIMARY KEY,
    motorista_id INTEGER NOT NULL REFERENCES motoristas(id),
    veiculo_id INTEGER NOT NULL REFERENCES veiculos(id),
    origem VARCHAR(200) NOT NULL,
    destino VARCHAR(200) NOT NULL,
    data_viagem DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'programada'
        CHECK (status IN ('programada','em_andamento','concluida','cancelada')),
    km_percorridos DECIMAL(8,2),
    UNIQUE (motorista_id, data_viagem)  -- ← Garante 1 viagem/dia por motorista
);

CREATE TABLE manutencoes (
    id SERIAL PRIMARY KEY,
    veiculo_id INTEGER NOT NULL REFERENCES veiculos(id),
    data_manutencao DATE NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descricao TEXT,
    custo DECIMAL(10,2) NOT NULL CHECK (custo >= 0),
    proxima_manutencao DATE
);

CREATE INDEX idx_viagens_data ON viagens(data_viagem);
CREATE INDEX idx_manutencoes_veiculo ON manutencoes(veiculo_id);
```

**Critérios:** 1,0 pt tabelas + tipos | 0,5 pt PKs/FKs | 0,5 pt constraint motorista/dia (UNIQUE) | 0,5 pt manutenções corretas

</details>

---

## ✅ Critérios Gerais de Correção

| Aspecto | Desconto |
|---------|----------|
| Erro de sintaxe menor (não impede compreensão) | -0,25 |
| Falta de `;` | -0,1 |
| Tipo de dado inadequado mas funcional | -0,25 |
| Falta de constraint explicitamente pedida | -0,5 |
| Lógica completamente incorreta | 0 na questão |
| Query correta mas sem alias/formatação | Sem desconto |
| Solução alternativa válida | Aceita integralmente |

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

> 💡 **Conceito:** Alunos usam seus próprios celulares para praticar SQL e modelagem de dados.

#### Ferramentas Mobile para Bancos de Dados

| Ferramenta | Sistema | Link | Melhor Para |
|-----------|---------|------|-------------|
| **Replit Mobile** | Android/iOS | App ou navegador | SQL online com PostgreSQL |
| **DB Fiddle** | Qualquer | dbfiddle.uk (navegador) | Testar queries SQL rapidamente |
| **Khan Academy SQL** | Qualquer | khanacademy.org (navegador) | Exercícios guiados de SQL |
| **SQLiteOnline** | Qualquer | sqliteonline.com (navegador) | Praticar DDL e DML no celular |

#### Atividades Adaptadas para Smartphone

| Atividade | Duração | Ferramenta | Semanas Aplicáveis |
|-----------|---------|------------|-------------------|
| Escrever queries SELECT no DB Fiddle | 30 min | DB Fiddle | 12-14 |
| Exercícios interativos Khan Academy SQL | 40 min | Khan Academy | 11-13 |
| Criar tabelas via DDL no Replit | 30 min | Replit Mobile | 8-10 |
| Quiz de normalização (Kahoot/Google Forms) | 20 min | Navegador | 6-7 |
| Analisar schemas no GitHub Mobile | 20 min | GitHub App | 4-7 |

#### 📋 Roteiro da Professora (Opção A)

```
DURAÇÃO TOTAL: 50 minutos

1. [5 min]  Anunciar atividade BYOD — alunos acessam ferramenta no celular
2. [5 min]  Projetar QR Code / escrever URL no quadro (DB Fiddle ou Khan Academy)
3. [5 min]  Explicar o desafio SQL do dia no quadro (tabela + perguntas)
4. [25 min] Alunos resolvem queries no celular — professora circula e auxilia
5. [5 min]  Alunos compartilham soluções no quadro (ditam ou escrevem)
6. [5 min]  Fechamento: conceitos-chave revisados, dúvidas respondidas
```

#### 📋 Guia do Aluno (para projetar ou escrever no quadro)

> 🎯 **Hoje a aula é no celular!**
> 1. Acesse o link/QR Code fornecido pela professora
> 2. Leia o enunciado no quadro (tabela e perguntas)
> 3. Escreva suas queries SQL na ferramenta
> 4. Teste executando e verifique o resultado
> 5. Anote a query final no caderno

---

### 📝 Opção B: Atividades Desplugadas (Unplugged)

> 💡 **Conceito:** Aprender modelagem e SQL sem computador, usando materiais físicos e dinâmicas corporais.

#### Atividade B1 — Modelagem DER em Cartolina com Post-its 🟢

**Semanas aplicáveis:** 4–7

**Materiais:** Cartolina A2, post-its coloridos (3 cores), barbante, caneta pilot

**Dinâmica:**
- Post-its **amarelos** = Entidades (retângulos do DER)
- Post-its **verdes** = Atributos
- Post-its **rosa** = Relacionamentos (losango)
- **Barbante** = Linhas de conexão (cardinalidade escrita com pilot)

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Dividir turma em grupos de 4-5 alunos
2. [5 min]  Apresentar o cenário/problema no quadro (ex: "Sistema de Delivery")
3. [3 min]  Distribuir materiais (cartolina + post-its + barbante)
4. [20 min] Grupos modelam o DER colando post-its e conectando com barbante
5. [10 min] Cada grupo apresenta seu modelo (2 min por grupo)
6. [7 min]  Professora corrige coletivamente no quadro — apontar erros comuns
```

#### Atividade B2 — "SQL Humano" 🟡

**Semanas aplicáveis:** 11–14

**Conceito:** Alunos SÃO os registros de uma tabela. A professora "executa" queries e os alunos respondem fisicamente.

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir cartões de "registro" para cada aluno:
            Exemplo: "Nome: Ana | Idade: 22 | Cidade: Recife | Curso: ADS"

2. [3 min]  Desenhar no quadro a estrutura da "tabela":
            alunos(nome, idade, cidade, curso)

3. [20 min] Executar queries — alunos reagem:
            
            Professora grita: "SELECT * FROM alunos WHERE cidade = 'Recife'"
            → Alunos de Recife se LEVANTAM
            
            "SELECT nome FROM alunos WHERE idade > 20 ORDER BY nome"
            → Alunos com idade > 20 levantam E se organizam em fila alfabética
            
            "SELECT cidade, COUNT(*) FROM alunos GROUP BY cidade"
            → Alunos se agrupam por cidade, contam quantos são

4. [10 min] Alunos CRIAM queries no caderno para os colegas executarem
5. [7 min]  Duplas trocam queries e "executam" uma da outra
6. [5 min]  Fechamento: conceito de SELECT, WHERE, ORDER BY, GROUP BY
```

#### Atividade B3 — Teste de Mesa SQL 🟡

**Semanas aplicáveis:** 12–16

**Materiais:** Folhas impressas com tabelas de dados + queries para resolver à mão

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir folha com tabela impressa (8-10 registros) e 5 queries
2. [3 min]  Explicar: "Vocês SÃO o PostgreSQL. Leiam a query e escrevam
             o resultado que o banco retornaria."
3. [25 min] Alunos resolvem individualmente (podem consultar resumo SQL)
4. [10 min] Correção coletiva no quadro — professora "executa" passo a passo
5. [7 min]  Discussão: "Qual query foi mais difícil? Por quê?"
```

**Exemplo de exercício impresso:**

| id | nome | cidade | salario |
|----|------|--------|---------|
| 1 | Ana | Recife | 3500 |
| 2 | Carlos | Olinda | 4200 |
| 3 | Maria | Recife | 5100 |
| 4 | João | Caruaru | 2800 |
| 5 | Paula | Recife | 3900 |

> **Query 1:** `SELECT nome, salario FROM funcionarios WHERE cidade = 'Recife' ORDER BY salario DESC;`
> **Query 2:** `SELECT cidade, AVG(salario) FROM funcionarios GROUP BY cidade HAVING AVG(salario) > 3500;`

#### Atividade B4 — Normalização com Cartões 🔴

**Semanas aplicáveis:** 6–7

**Materiais:** Cartões de papel (tamanho carta de baralho) com nomes de atributos

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir conjunto de cartões para cada grupo (ex: 15 atributos
            de uma tabela denormalizada: pedido_id, cliente_nome, cliente_cpf,
            produto_nome, produto_preco, quantidade, etc.)
2. [3 min]  Explicar: "Esta tabela está na Forma NÃO Normal. Separem os
            cartões em grupos que formem tabelas na 3FN."
3. [20 min] Grupos organizam cartões em "tabelas" sobre a mesa
            — Identificar chaves primárias (virar cartão de cor diferente)
            — Identificar chaves estrangeiras (conectar com setas de caneta)
4. [10 min] Fotografar soluções dos grupos (professora projeta / mostra)
5. [7 min]  Correção: mostrar a solução ideal no quadro
6. [5 min]  Discussão: "Quais dependências funcionais vocês identificaram?"
```

#### 📋 Guia do Aluno (Opção B — para escrever no quadro)

> 🎯 **Hoje trabalhamos SEM COMPUTADOR!**
> - Nas atividades com post-its: modele como se fosse o draw.io, mas com as mãos
> - No "SQL Humano": preste atenção nos comandos — VOCÊ é o banco de dados!
> - No teste de mesa: leia a query como o PostgreSQL leria — passo a passo, da esquerda para a direita
> - Na normalização: pense "este atributo depende de TODA a chave ou só de parte?"

---

### 💼 Opção C: Estudo de Caso / PBL (Problem-Based Learning)

> 💡 **Conceito:** Resolver problemas reais de modelagem e dados usando análise, debate e raciocínio crítico — sem precisar de computador.

#### Caso C1 — "Como o iFood organiza seus dados?" 🟡

**Semanas aplicáveis:** 4–7

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Apresentar o problema: "O iFood tem milhões de restaurantes,
            pedidos e entregas. Como será o banco de dados deles?"
2. [10 min] Alunos discutem em grupos: identificar ENTIDADES
            (Restaurante, Pedido, Entregador, Cliente, Prato, Avaliação...)
3. [15 min] Cada grupo desenha um DER parcial em folha A3
4. [10 min] Apresentação: cada grupo mostra 1 relacionamento que identificou
5. [5 min]  Professora consolida no quadro o modelo "ideal simplificado"
6. [5 min]  Reflexão: "Quais decisões de modelagem afetam a performance?"
```

#### Caso C2 — Refatoração de Banco Denormalizado 🔴

**Semanas aplicáveis:** 6–7, 17

**Material impresso:** Tabela com dados redundantes e anomalias evidentes

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir folha com tabela "denormalizada" de uma loja virtual:
            (pedido_id, cliente_nome, cliente_email, cliente_cidade,
             produto_nome, produto_categoria, preco, qtd, data_pedido)

2. [5 min]  Perguntar: "O que acontece se o cliente mudar de cidade?
            Quantas linhas precisam ser atualizadas?"

3. [15 min] Alunos identificam anomalias e propõem normalização até 3FN
            — Desenhar no caderno as tabelas resultantes
            — Indicar PKs e FKs

4. [10 min] Duplas trocam soluções e fazem "code review" da normalização

5. [10 min] Correção coletiva — professora mostra solução no quadro

6. [5 min]  Conexão: "Esta refatoração é o que empresas reais fazem
            quando o sistema cresce e fica lento/inconsistente"
```

#### 📋 Guia do Aluno (Opção C — para escrever no quadro)

> 🎯 **Hoje somos consultores de banco de dados!**
> 1. Leia o caso apresentado pela professora
> 2. Identifique: Quais são as entidades? Quais os relacionamentos?
> 3. Desenhe o modelo (DER ou tabelas normalizadas) no caderno
> 4. Prepare-se para defender suas decisões de modelagem para a turma

---

### 📊 Rubrica de Avaliação Adaptada (Aulas de Contingência)

| Critério | Peso | 10 (Excelente) | 7 (Bom) | 4 (Insuficiente) |
|----------|:----:|:--------------:|:--------:|:-----------------:|
| **Participação ativa** | 30% | Engajou em todas as etapas, contribuiu com ideias | Participou mas com pouca iniciativa | Ficou passivo/não contribuiu |
| **Correção técnica** | 30% | Modelagem/SQL sem erros lógicos, normalização correta | Pequenos erros que não comprometem o conceito | Erros graves de compreensão (FK incorretas, violação de FN) |
| **Trabalho em equipe** | 20% | Colaborou ativamente, ouviu e contribuiu | Participou quando solicitado | Não interagiu com o grupo |
| **Registro escrito** | 20% | Caderno organizado com DER/queries completos | Resolução parcial mas legível | Sem registro ou ilegível |

> 🎯 **Nota:** Atividades de contingência têm o MESMO PESO que aulas regulares no conceito de participação.

---

### 🖨️ Kit de Materiais para Impressão

> 💡 **Dica:** Mantenha estes materiais impressos na pasta da disciplina para uso imediato quando necessário.

| Material | Quantidade | Uso |
|----------|-----------|-----|
| Tabelas de dados para teste de mesa SQL (5 exercícios) | 20 cópias | Atividade B3 — Teste de Mesa |
| Cartões de atributos para normalização (1 jogo = 20 cartões) | 5 jogos | Atividade B4 — Normalização |
| Cartões de "registro" para SQL Humano (dados fictícios) | 30 cartões | Atividade B2 — SQL Humano |
| Tabela denormalizada de loja virtual (1 página) | 20 cópias | Caso C2 — Refatoração |
| Resumo de comandos SQL (DDL + DML — 1 página frente/verso) | 40 cópias | Apoio para todas as atividades |
| Caso iFood simplificado (enunciado + requisitos) | 20 cópias | Caso C1 — Estudo de Caso |

---

<p align="center">
  <strong>📚 Bons estudos! Qualquer dúvida, procure a professora no horário de atendimento.</strong><br/>
  <em>Material elaborado para a disciplina de Administração de Bancos de Dados — ETE Pernambuco — 2026.2</em>
</p>

site para diagrama: https://mermaid.ai/app/projects/15148759-7f3f-4d95-8dd9-fdb185a8ac49/diagrams/1beba850-7de1-46ea-baf9-a9194f4984b9/version/v0.1/edit 

O python é esse:
https://www.jdoodle.com/python3-programming-online

mysql https://onecompiler.com/mysql/44xypwjrq 