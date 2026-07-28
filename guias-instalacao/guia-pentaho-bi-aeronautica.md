# 📘 Material Didático: Business Intelligence com Pentaho — Ocorrências Aeronáuticas (CENIPA)

> **Disciplina:** Business Intelligence e Data Warehousing
> **Repositório de Referência:** `pentahoAeronatica.git`
> **Metodologia:** Kimball — The Data Warehouse Toolkit
> **Stack:** Pentaho PDI 9.x + PostgreSQL + Saiku Analytics

---

## MÓDULO 1: Preparação do Ambiente e Infraestrutura

### 1.1 Instalação do Java (JDK 8)

O Pentaho PDI 9.x exige **Java 8 (JDK 1.8)**. Versões superiores causam erros de compatibilidade.

#### Windows:

1. Baixe o JDK 8 em: [Adoptium/Temurin JDK 8](https://adoptium.net/temurin/releases/?version=8)
2. Execute o instalador (ex: `OpenJDK8U-jdk_x64_windows_hotspot_8uXXX.msi`)
3. Anote o caminho de instalação (ex: `C:\Program Files\Eclipse Adoptium\jdk-8.0.XXX.X-hotspot`)

#### Configurar Variáveis de Ambiente (Windows):

1. Abra **Painel de Controle → Sistema → Configurações avançadas → Variáveis de Ambiente**
2. Crie ou edite as variáveis:

```
JAVA_HOME = C:\Program Files\Eclipse Adoptium\jdk-8.0.XXX.X-hotspot
PENTAHO_JAVA_HOME = C:\Program Files\Eclipse Adoptium\jdk-8.0.XXX.X-hotspot
```

3. Adicione `%JAVA_HOME%\bin` à variável `PATH`
4. Verifique no terminal:

```bash
java -version
# Deve retornar: openjdk version "1.8.0_XXX"
```

#### Linux/macOS:

```bash
# Adicione ao ~/.bashrc ou ~/.zshrc
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PENTAHO_JAVA_HOME=$JAVA_HOME
export PATH=$JAVA_HOME/bin:$PATH

# Recarregue
source ~/.bashrc
```

> ⚠️ **Erro comum:** Se você tem Java 11+ instalado, o Pentaho pode ignorar o `JAVA_HOME`. Defina `PENTAHO_JAVA_HOME` explicitamente apontando para o JDK 8.

---

### 1.2 Otimização de Memória no Spoon (PDI)

O Spoon (interface gráfica do PDI) por padrão usa pouca memória. Para processar os CSVs do CENIPA sem travar:

#### Windows (`Spoon.bat`):

Abra o arquivo `data-integration/Spoon.bat` e localize/altere:

```bat
REM Configuração de memória JVM
set PENTAHO_DI_JAVA_OPTIONS="-Xms3072m" "-Xmx4096m" "-XX:MaxPermSize=256m"
```

#### Linux/macOS (`spoon.sh`):

```bash
# Abra data-integration/spoon.sh e edite:
PENTAHO_DI_JAVA_OPTIONS="-Xms3072m -Xmx4096m -XX:MaxPermSize=256m"
export PENTAHO_DI_JAVA_OPTIONS
```

| Parâmetro | Significado | Valor Recomendado |
|-----------|-------------|-------------------|
| `-Xms` | Memória inicial da JVM | 3072m (3 GB) |
| `-Xmx` | Memória máxima da JVM | 4096m (4 GB) |
| `-XX:MaxPermSize` | Espaço para metadados de classe | 256m |

> 💡 Se sua máquina tem 16 GB de RAM, pode usar `-Xms4096m -Xmx8192m` para melhor performance.

---

### 1.3 PostgreSQL e pgAdmin 4

#### Instalação:

1. Baixe o PostgreSQL 14+ em: [postgresql.org/download](https://www.postgresql.org/download/)
2. Durante a instalação, defina a senha do usuário `postgres`
3. O pgAdmin 4 geralmente é instalado junto

#### Criar os bancos de dados:

```sql
-- Conectar como superusuário postgres
CREATE DATABASE stage_aeronautica
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8';

CREATE DATABASE dw_aeronautica
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8';
```

#### Driver JDBC para o Pentaho:

1. Baixe o driver: [postgresql-42.7.x.jar](https://jdbc.postgresql.org/download/)
2. Copie o `.jar` para os seguintes diretórios:

```
# PDI (Spoon)
data-integration/lib/postgresql-42.7.x.jar

# Pentaho Server
pentaho-server/tomcat/lib/postgresql-42.7.x.jar

# Schema Workbench
schema-workbench/drivers/postgresql-42.7.x.jar
```

3. Reinicie o Spoon e o Pentaho Server após copiar o driver.

> ⚠️ **Erro comum:** `"Driver class 'org.postgresql.Driver' could not be found"` → O `.jar` não está no diretório correto ou o Spoon não foi reiniciado.

---

### 1.4 Pentaho Server 9.x + Saiku Analytics

#### Instalação do Server:

1. Baixe o Pentaho Server Community Edition (CE) 9.x
2. Extraia para um diretório (ex: `C:\pentaho-server` ou `/opt/pentaho-server`)
3. Inicie o servidor:

```bash
# Windows
cd pentaho-server
start-pentaho.bat

# Linux/macOS
cd pentaho-server
./start-pentaho.sh
```

4. Acesse: `http://localhost:8080/pentaho`
5. Login padrão: `admin` / `password`

#### Instalação do Plugin Saiku Analytics:

1. Baixe o plugin Saiku CE (compatível com Pentaho 9.x)
2. Extraia o conteúdo para:

```
pentaho-server/pentaho-solutions/system/saiku/
```

3. Reinicie o Pentaho Server
4. Acesse via menu: **File → New → Saiku Analytics**

> 💡 **Verificação:** Após login no Pentaho Server, o menu "New" deve listar "Saiku Analytics" como opção.

---

## MÓDULO 2: Modelagem Multidimensional & Análise de Dados

### 2.1 Os 4 Passos de Kimball Aplicados ao Projeto

Seguindo a metodologia do *The Data Warehouse Toolkit* (Ralph Kimball), o design dimensional segue 4 passos obrigatórios:

| Passo | Pergunta-Chave | Resposta no Projeto |
|-------|----------------|---------------------|
| **1. Processo de Negócio** | "Qual processo estamos medindo?" | Registro de ocorrências aeronáuticas (fauna) no Brasil |
| **2. Granularidade** | "O que representa UMA linha na tabela fato?" | Uma aeronave envolvida em uma ocorrência específica |
| **3. Dimensões** | "Como descrevemos cada fato?" | Por aeronave, localidade, espécie, data, horário, tipo de ocorrência |
| **4. Fatos (Métricas)** | "O que medimos numericamente?" | Quantidade de assentos, total de aeronaves, total de recomendações, contagem de ocorrências |

---

### 2.2 Star Schema — Modelo Lógico

```
                    ┌──────────────┐
                    │  dim_data    │
                    │  (SK, dia,   │
                    │   mês, ano,  │
                    │   trimestre) │
                    └──────┬───────┘
                           │
┌──────────────┐    ┌──────┴───────────────┐    ┌───────────────────┐
│ dim_aeronave │    │   fato_ocorrencia    │    │  dim_localidade   │
│ (SK, modelo, │────│                      │────│  (SK, uf, cidade, │
│  fabricante, │    │  sk_aeronave (FK)    │    │   aeródromo,      │
│  motor,      │    │  sk_localidade (FK)  │    │   região)         │
│  assentos)   │    │  sk_especie (FK)     │    └───────────────────┘
└──────────────┘    │  sk_data (FK)        │
                    │  sk_time (FK)        │    ┌───────────────────┐
┌──────────────┐    │  sk_ocorrencia (FK)  │    │    dim_especie    │
│  dim_time    │    │  sk_junk (FK)        │────│  (SK, especie,    │
│  (SK, hora,  │────│                      │    │   tamanho, peso)  │
│   minuto,    │    │  qtd_assentos (fato) │    └───────────────────┘
│   período)   │    │  qtd_aeronaves (fato)│
└──────────────┘    │  qtd_recomend (fato) │    ┌───────────────────────────┐
                    │  qtd_ocorrencia(fato)│    │ dim_junk_aeronave_ocorr   │
                    │                      │────│ (SK, fase_operação,       │
                    └──────────────────────┘    │  tipo_ocorrencia,         │
                           │                    │  classificação,           │
                    ┌──────┴───────────┐        │  dano_aeronave,           │
                    │ dim_ocorrencia   │        │  efeito_fauna)            │
                    │ _aeronave        │        └───────────────────────────┘
                    │ (SK, código,     │
                    │  tipo, status)   │
                    └──────────────────┘
```

---

### 2.3 Detalhamento das Tabelas

#### Tabela Fato: `fato_ocorrencia`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `sk_fato` | SERIAL PK | Surrogate Key da fato |
| `sk_aeronave` | INTEGER FK | Chave para dim_aeronave |
| `sk_localidade` | INTEGER FK | Chave para dim_localidade |
| `sk_especie` | INTEGER FK | Chave para dim_especie |
| `sk_ocorrencia_aeronave` | INTEGER FK | Chave para dim_ocorrencia_aeronave |
| `sk_junk` | INTEGER FK | Chave para dim_junk |
| `sk_data` | INTEGER FK | Role-Playing: data da ocorrência |
| `sk_time` | INTEGER FK | Role-Playing: horário da ocorrência |
| `qtd_assentos` | INTEGER | Quantidade de assentos da aeronave |
| `qtd_aeronaves` | INTEGER | Total de aeronaves na ocorrência |
| `qtd_recomendacoes` | INTEGER | Total de recomendações emitidas |
| `qtd_ocorrencia` | INTEGER | Contagem (sempre 1, para somatórios) |

#### Tabelas Dimensão:

| Dimensão | Colunas Principais | Padrão Aplicado |
|----------|-------------------|-----------------|
| `dim_aeronave` | sk, modelo, fabricante, tipo_motor, qtd_motores, peso_max | Dimensão convencional (SCD Type 1) |
| `dim_localidade` | sk, uf, municipio, aerodromo, regiao, latitude, longitude | Dimensão convencional com hierarquia geográfica |
| `dim_especie` | sk, especie_ave, tamanho, peso_medio, grupo | Dimensão convencional |
| `dim_ocorrencia_aeronave` | sk, codigo_ocorrencia, tipo_ocorrencia, classificacao | Dimensão convencional |
| `dim_junk_aeronave_ocorrencia` | sk, fase_operacao, tipo_dano, efeito_fauna, qtd_colisoes, parte_atingida | **Junk Dimension** (flags e categorias de baixa cardinalidade combinadas) |
| `dim_data` | sk, data_completa, dia, mes, ano, trimestre, semestre, dia_semana | **Role-Playing Dimension** (mesma estrutura, FK diferentes na fato) |
| `dim_time` | sk, hora, minuto, periodo_dia (manhã/tarde/noite) | **Role-Playing Dimension** para horário |

---

### 2.4 Conceitos Avançados Aplicados

#### Junk Dimension (`dim_junk_aeronave_ocorrencia`)

**O que é:** Uma dimensão que agrupa múltiplos atributos de baixa cardinalidade (flags, categorias sim/não) que individualmente não justificam uma dimensão própria.

**Por que usar:** Os dados do CENIPA possuem várias colunas categóricas binárias ou de poucas opções (fase de operação, tipo de dano, efeito sobre voo). Criar uma dimensão para cada uma poluiria o modelo. A Junk agrupa todas em uma única tabela.

**Exemplo prático:**

```sql
CREATE TABLE dw_aeronautica.dim_junk_aeronave_ocorrencia (
    sk_junk SERIAL PRIMARY KEY,
    fase_operacao VARCHAR(100),     -- Ex: 'Decolagem', 'Cruzeiro', 'Pouso'
    tipo_dano VARCHAR(50),          -- Ex: 'Nenhum', 'Leve', 'Substancial'
    efeito_voo VARCHAR(80),         -- Ex: 'Nenhum', 'Pouso Precautório'
    parte_aeronave_atingida VARCHAR(100),
    quantidade_colisoes VARCHAR(20) -- Ex: '1', '2-10', '11+'
);
```

#### Role-Playing Dimensions (`dim_data` e `dim_time`)

**O que é:** Uma mesma dimensão física que participa da tabela fato em múltiplos papéis (roles) com FKs diferentes.

**Exemplo:** A `dim_data` pode ser referenciada como `sk_data_ocorrencia`, `sk_data_notificacao`, `sk_data_investigacao` — todas apontam para a mesma tabela, mas representam datas diferentes do processo.

#### Surrogate Keys (SKs)

**O que é:** Chaves artificiais numéricas (sequenciais) que substituem as chaves naturais do sistema de origem.

**Por que usar:**
- Independência do sistema fonte (se o CENIPA mudar seus códigos, o DW não quebra)
- Performance em joins (inteiros são mais rápidos que strings)
- Suporte a Slowly Changing Dimensions (múltiplas versões do mesmo registro)

---

## MÓDULO 3: Engenharia de ETL com Pentaho Data Integration (PDI)

### 3.1 Steps do PDI Utilizados no Projeto

| Step | Categoria | Função no Projeto |
|------|-----------|-------------------|
| **CSV file input** | Input | Lê os arquivos `.csv` do CENIPA (separador `;`, encoding UTF-8) |
| **Replace in string** | Transform | Limpa caracteres especiais, normaliza textos (ex: "SAO PAULO" → "São Paulo"), trata nulos |
| **Select values** | Transform | Renomeia colunas, altera tipos de dados (String→Date, String→Integer), remove colunas desnecessárias |
| **Calculator** | Transform | Cria campos calculados (ex: extrair ano/mês de uma data, calcular faixas) |
| **Sort rows** | Transform | Ordena registros por chave antes do Merge Join (obrigatório) |
| **Sorted Merge** | Transform | Combina dois fluxos já ordenados em um único stream ordenado |
| **Merge Join** | Joins | Realiza INNER/LEFT/RIGHT JOIN entre dois fluxos (similar ao SQL JOIN) |
| **Dimension lookup/update** | Data Warehouse | Busca ou cria a Surrogate Key na dimensão; implementa SCD Type 1 ou 2 |
| **Table Output** | Output | Insere registros no PostgreSQL (tabelas stage ou fato) |

---

### 3.2 Fluxo de Staging (Extração e Limpeza)

O fluxo de Staging é a **primeira camada** do ETL: pega os dados brutos e os limpa para uma base intermediária.

#### Transformação: `stg_ocorrencia.ktr`

```
[CSV file input]          [CSV file input]
 ocorrencia.csv            aeronave.csv
      │                         │
      ▼                         ▼
[Replace in string]       [Replace in string]
 - Remove "***"           - Normaliza fabricante
 - Trata "NULL" → vazio   - Limpa espaços duplos
      │                         │
      ▼                         ▼
[Select values]           [Select values]
 - Renomeia colunas        - Converte tipos
 - String → Date           - Remove cols extras
 - String → Integer
      │                         │
      ▼                         ▼
[Table Output]            [Table Output]
 stage.stg_ocorrencia      stage.stg_aeronave
```

#### Configuração do CSV file input:

| Parâmetro | Valor |
|-----------|-------|
| Separator | `;` (ponto e vírgula) |
| Enclosure | `"` |
| Encoding | `UTF-8` |
| Header row present | ✅ Sim |
| Lazy conversion | ❌ Não (para evitar erros de tipo) |

#### Configuração do Replace in string:

| Campo | Buscar | Substituir por | Tipo |
|-------|--------|----------------|------|
| todos | `***` | (vazio) | Simples |
| todos | `NULL` | (vazio) | Simples |
| todos | `####` | (vazio) | Simples |
| uf | espaços extras | trim | Regex `\s+` → ` ` |

#### Scripts SQL para criação do banco Stage:

```sql
-- Conectar ao banco stage_aeronautica

CREATE SCHEMA IF NOT EXISTS stage;

CREATE TABLE stage.stg_ocorrencia (
    codigo_ocorrencia VARCHAR(20),
    classificacao VARCHAR(100),
    tipo_ocorrencia VARCHAR(100),
    localidade VARCHAR(200),
    uf VARCHAR(2),
    municipio VARCHAR(150),
    aerodromo VARCHAR(100),
    dia_ocorrencia DATE,
    horario_ocorrencia TIME,
    total_recomendacoes INTEGER DEFAULT 0
);

CREATE TABLE stage.stg_aeronave (
    codigo_ocorrencia VARCHAR(20),
    matricula VARCHAR(20),
    equipamento VARCHAR(100),
    fabricante VARCHAR(150),
    modelo VARCHAR(100),
    tipo_motor VARCHAR(50),
    quantidade_motores INTEGER,
    peso_maximo_decolagem VARCHAR(50),
    quantidade_assentos INTEGER,
    fase_operacao VARCHAR(100),
    tipo_dano VARCHAR(50),
    especie VARCHAR(150),
    quantidade_colisoes VARCHAR(20),
    parte_atingida VARCHAR(100),
    efeito_voo VARCHAR(100)
);
```

---

### 3.3 Fluxo de DW (Cruzamento e Carga Dimensional)

O fluxo de DW pega os dados limpos do Stage, cruza as tabelas, gera Surrogate Keys e carrega nas dimensões e fato.

#### Transformação: `dw_carga_dimensoes.ktr`

```
[Table Input]              [Table Input]
 stage.stg_ocorrencia       stage.stg_aeronave
      │                          │
      ▼                          ▼
[Sort rows]                [Sort rows]
 por codigo_ocorrencia      por codigo_ocorrencia
      │                          │
      └────────────┬─────────────┘
                   ▼
          [Merge Join]
           INNER JOIN ON
           codigo_ocorrencia
                   │
                   ▼
          [Calculator]
           - Extrair ano, mês, dia
           - Calcular período do dia
                   │
         ┌─────────┼─────────────────────┐
         ▼         ▼                     ▼
[Dimension     [Dimension          [Dimension
 lookup/update] lookup/update]      lookup/update]
 dim_aeronave   dim_localidade      dim_especie
 → retorna SK   → retorna SK        → retorna SK
         │         │                     │
         └─────────┼─────────────────────┘
                   ▼
          [Dimension lookup/update]
           dim_junk_aeronave_ocorrencia
           → retorna SK
                   │
                   ▼
          [Dimension lookup/update]
           dim_data → retorna SK
                   │
                   ▼
          [Dimension lookup/update]
           dim_time → retorna SK
                   │
                   ▼
          [Table Output]
           dw.fato_ocorrencia
```

#### Configuração do Dimension Lookup/Update (exemplo: `dim_aeronave`):

| Parâmetro | Valor |
|-----------|-------|
| Schema | `dw` |
| Table | `dim_aeronave` |
| Technical Key | `sk_aeronave` (Auto increment) |
| Lookup Keys | `modelo`, `fabricante` (Natural Key) |
| Fields to update | `tipo_motor`, `quantidade_motores`, `peso_max`, `quantidade_assentos` |
| Update Type | Insert (SCD Type 1 — sobrescreve) |

#### Scripts SQL para criação do banco DW:

```sql
-- Conectar ao banco dw_aeronautica

CREATE SCHEMA IF NOT EXISTS dw;

-- Dimensão Aeronave
CREATE TABLE dw.dim_aeronave (
    sk_aeronave SERIAL PRIMARY KEY,
    modelo VARCHAR(100),
    fabricante VARCHAR(150),
    tipo_motor VARCHAR(50),
    quantidade_motores INTEGER,
    peso_maximo_decolagem VARCHAR(50),
    quantidade_assentos INTEGER,
    version INTEGER DEFAULT 1,
    date_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_to TIMESTAMP
);

-- Dimensão Localidade
CREATE TABLE dw.dim_localidade (
    sk_localidade SERIAL PRIMARY KEY,
    uf VARCHAR(2),
    municipio VARCHAR(150),
    aerodromo VARCHAR(100),
    regiao VARCHAR(20),
    version INTEGER DEFAULT 1,
    date_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_to TIMESTAMP
);

-- Dimensão Espécie
CREATE TABLE dw.dim_especie (
    sk_especie SERIAL PRIMARY KEY,
    especie VARCHAR(150),
    tamanho VARCHAR(30),
    grupo VARCHAR(80),
    version INTEGER DEFAULT 1,
    date_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_to TIMESTAMP
);

-- Dimensão Data (Role-Playing)
CREATE TABLE dw.dim_data (
    sk_data SERIAL PRIMARY KEY,
    data_completa DATE,
    dia INTEGER,
    mes INTEGER,
    ano INTEGER,
    trimestre INTEGER,
    semestre INTEGER,
    dia_semana VARCHAR(20),
    nome_mes VARCHAR(20)
);

-- Dimensão Hora (Role-Playing)
CREATE TABLE dw.dim_time (
    sk_time SERIAL PRIMARY KEY,
    hora INTEGER,
    minuto INTEGER,
    periodo_dia VARCHAR(20) -- 'Madrugada','Manhã','Tarde','Noite'
);

-- Junk Dimension
CREATE TABLE dw.dim_junk_aeronave_ocorrencia (
    sk_junk SERIAL PRIMARY KEY,
    fase_operacao VARCHAR(100),
    tipo_dano VARCHAR(50),
    efeito_voo VARCHAR(80),
    parte_atingida VARCHAR(100),
    quantidade_colisoes VARCHAR(20)
);

-- Dimensão Ocorrência Aeronave
CREATE TABLE dw.dim_ocorrencia_aeronave (
    sk_ocorrencia_aeronave SERIAL PRIMARY KEY,
    codigo_ocorrencia VARCHAR(20),
    tipo_ocorrencia VARCHAR(100),
    classificacao VARCHAR(100),
    version INTEGER DEFAULT 1,
    date_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_to TIMESTAMP
);

-- Tabela Fato
CREATE TABLE dw.fato_ocorrencia (
    sk_fato SERIAL PRIMARY KEY,
    sk_aeronave INTEGER REFERENCES dw.dim_aeronave(sk_aeronave),
    sk_localidade INTEGER REFERENCES dw.dim_localidade(sk_localidade),
    sk_especie INTEGER REFERENCES dw.dim_especie(sk_especie),
    sk_ocorrencia_aeronave INTEGER REFERENCES dw.dim_ocorrencia_aeronave(sk_ocorrencia_aeronave),
    sk_junk INTEGER REFERENCES dw.dim_junk_aeronave_ocorrencia(sk_junk),
    sk_data INTEGER REFERENCES dw.dim_data(sk_data),
    sk_time INTEGER REFERENCES dw.dim_time(sk_time),
    qtd_assentos INTEGER DEFAULT 0,
    qtd_aeronaves INTEGER DEFAULT 1,
    qtd_recomendacoes INTEGER DEFAULT 0,
    qtd_ocorrencia INTEGER DEFAULT 1
);

-- Índices para performance nas consultas OLAP
CREATE INDEX idx_fato_aeronave ON dw.fato_ocorrencia(sk_aeronave);
CREATE INDEX idx_fato_localidade ON dw.fato_ocorrencia(sk_localidade);
CREATE INDEX idx_fato_especie ON dw.fato_ocorrencia(sk_especie);
CREATE INDEX idx_fato_data ON dw.fato_ocorrencia(sk_data);
CREATE INDEX idx_fato_junk ON dw.fato_ocorrencia(sk_junk);
```

---

### 3.4 Job de Orquestração (`job_etl_completo.kjb`)

O Job é o orquestrador que executa as transformações na ordem correta:

```
[START]
   │
   ▼
[Transformation: stg_ocorrencia.ktr]
   │
   ▼
[Transformation: stg_aeronave.ktr]
   │
   ▼
[Transformation: dw_carga_dimensoes.ktr]
   │
   ▼
[Transformation: dw_carga_fato.ktr]
   │
   ▼
[SUCCESS / MAIL on failure]
```

> 💡 **Dica:** Configure o Job com "Log level: Basic" para monitorar quantas linhas cada step processou. Se algum step retorna 0 linhas, há erro na extração.

---

## MÓDULO 4: OLAP, Schema Workbench e Publicação no Pentaho Server

### 4.1 Criação do Schema Mondrian no Pentaho Schema Workbench (PSW)

O Schema Mondrian é um arquivo XML que mapeia as tabelas físicas do DW para a navegação multidimensional OLAP.

#### Passo a passo:

1. Abra o Schema Workbench (`workbench.bat` / `workbench.sh`)
2. Configure a conexão JDBC:
   - Driver: `org.postgresql.Driver`
   - URL: `jdbc:postgresql://localhost:5432/dw_aeronautica`
   - User: `postgres` / Password: (sua senha)
3. Crie um novo Schema: **File → New → Schema**

#### Estrutura do Schema XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Schema name="OcorrenciasAeronauticas">

  <!-- Cubo Principal -->
  <Cube name="Ocorrencias" visible="true">
    <Table name="fato_ocorrencia" schema="dw"/>

    <!-- Dimensão Localidade -->
    <Dimension name="Localidade" foreignKey="sk_localidade">
      <Hierarchy name="Geografia" hasAll="true" allMemberName="Todos"
                 primaryKey="sk_localidade">
        <Table name="dim_localidade" schema="dw"/>
        <Level name="Região" column="regiao" uniqueMembers="false"/>
        <Level name="UF" column="uf" uniqueMembers="false"/>
        <Level name="Município" column="municipio" uniqueMembers="false"/>
        <Level name="Aeródromo" column="aerodromo" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- Dimensão Data (Role-Playing) -->
    <Dimension name="Data Ocorrência" foreignKey="sk_data">
      <Hierarchy name="Calendário" hasAll="true" allMemberName="Todos"
                 primaryKey="sk_data">
        <Table name="dim_data" schema="dw"/>
        <Level name="Ano" column="ano" uniqueMembers="true"/>
        <Level name="Trimestre" column="trimestre" uniqueMembers="false"/>
        <Level name="Mês" column="nome_mes" ordinalColumn="mes" uniqueMembers="false"/>
        <Level name="Dia" column="dia" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- Dimensão Espécie -->
    <Dimension name="Espécie" foreignKey="sk_especie">
      <Hierarchy name="Taxonomia" hasAll="true" primaryKey="sk_especie">
        <Table name="dim_especie" schema="dw"/>
        <Level name="Grupo" column="grupo" uniqueMembers="false"/>
        <Level name="Espécie" column="especie" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- Dimensão Aeronave -->
    <Dimension name="Aeronave" foreignKey="sk_aeronave">
      <Hierarchy name="Equipamento" hasAll="true" primaryKey="sk_aeronave">
        <Table name="dim_aeronave" schema="dw"/>
        <Level name="Fabricante" column="fabricante" uniqueMembers="false"/>
        <Level name="Modelo" column="modelo" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- Dimensão Horário -->
    <Dimension name="Horário" foreignKey="sk_time">
      <Hierarchy name="Período" hasAll="true" primaryKey="sk_time">
        <Table name="dim_time" schema="dw"/>
        <Level name="Período do Dia" column="periodo_dia" uniqueMembers="false"/>
        <Level name="Hora" column="hora" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- Dimensão Junk (Características da Ocorrência) -->
    <Dimension name="Características" foreignKey="sk_junk">
      <Hierarchy name="Detalhes" hasAll="true" primaryKey="sk_junk">
        <Table name="dim_junk_aeronave_ocorrencia" schema="dw"/>
        <Level name="Fase Operação" column="fase_operacao" uniqueMembers="false"/>
        <Level name="Tipo Dano" column="tipo_dano" uniqueMembers="false"/>
        <Level name="Efeito Voo" column="efeito_voo" uniqueMembers="false"/>
      </Hierarchy>
    </Dimension>

    <!-- MEDIDAS (FATOS) -->
    <Measure name="Qtd Ocorrências" column="qtd_ocorrencia"
             aggregator="sum" formatString="#,###"/>
    <Measure name="Total Aeronaves" column="qtd_aeronaves"
             aggregator="sum" formatString="#,###"/>
    <Measure name="Assentos Aeronave" column="qtd_assentos"
             aggregator="sum" formatString="#,###"/>
    <Measure name="Total Recomendações" column="qtd_recomendacoes"
             aggregator="sum" formatString="#,###"/>

  </Cube>
</Schema>
```

---

### 4.2 Publicação do Schema no Pentaho Server

1. No Schema Workbench: **File → Publish**
2. Configure:
   - Pentaho URL: `http://localhost:8080/pentaho`
   - User: `admin` / Password: `password`
   - Data Source (JNDI): Criar conexão no servidor apontando para `dw_aeronautica`
3. Clique em **Publish**
4. Verifique no Pentaho Server: **Manage Data Sources** → o schema aparece listado

#### Configurar Data Source JNDI no Server:

Edite `pentaho-server/pentaho-solutions/system/simple-jndi/jdbc.properties`:

```properties
dw_aeronautica/type=javax.sql.DataSource
dw_aeronautica/driver=org.postgresql.Driver
dw_aeronautica/url=jdbc:postgresql://localhost:5432/dw_aeronautica
dw_aeronautica/user=postgres
dw_aeronautica/password=postgres
```

Reinicie o Pentaho Server após a edição.

---

### 4.3 Consultas Analíticas no Saiku Analytics

Após publicação, acesse: **Pentaho → New → Saiku Analytics**

#### Análises sugeridas:

| Análise | Linhas (Rows) | Colunas (Columns) | Filtro | Medida |
|---------|---------------|-------------------|--------|--------|
| Ocorrências por UF | Localidade → UF | — | — | Qtd Ocorrências |
| Ocorrências por mês/ano | Data → Ano, Mês | — | — | Qtd Ocorrências |
| Espécies mais frequentes | Espécie → Espécie | — | Top 10 | Qtd Ocorrências |
| Dano por tipo de aeronave | Aeronave → Fabricante | Características → Tipo Dano | — | Total Aeronaves |
| Horário crítico | Horário → Período do Dia | — | — | Qtd Ocorrências |

> 💡 **Insight esperado:** A maioria das colisões com fauna ocorre no período da manhã, durante a fase de decolagem, com espécies de aves de médio porte (quero-quero, urubu).

---

## MÓDULO 5: Roteiro Prático de Reprodução (Hands-On Lab)

### ✅ Checklist Completo — Do Clone ao Dashboard

#### Fase 0: Pré-requisitos (instalar antes da aula)

- [ ] Java JDK 8 instalado e `JAVA_HOME` configurado
- [ ] PostgreSQL 14+ instalado e rodando
- [ ] pgAdmin 4 instalado
- [ ] Pentaho Data Integration (PDI/Spoon) 9.x extraído
- [ ] Pentaho Server 9.x extraído
- [ ] Pentaho Schema Workbench extraído
- [ ] Driver JDBC (`postgresql-42.x.jar`) copiado nos 3 diretórios `/lib`
- [ ] Memória do Spoon configurada (`-Xms3072m -Xmx4096m`)

---

#### Fase 1: Clonar Repositório e Preparar Dados (10 min)

```bash
# 1. Clonar o repositório
git clone https://github.com/luanaCristina/pentahoAeronatica.git
cd pentahoAeronatica

# 2. Verificar estrutura
ls -la
# Esperado: pastas como /csv, /transformacoes, /jobs, /scripts-sql, /schema
```

- [ ] Repositório clonado com sucesso
- [ ] Arquivos CSV do CENIPA presentes na pasta `/csv` (ou `/dados`)
- [ ] Arquivos `.ktr` (transformações) presentes
- [ ] Arquivos `.kjb` (jobs) presentes
- [ ] Scripts SQL presentes

---

#### Fase 2: Criar Bancos de Dados (5 min)

1. Abra o pgAdmin 4
2. Conecte ao servidor local (localhost:5432)
3. Execute os scripts SQL:

```bash
# Via terminal (alternativa ao pgAdmin)
psql -U postgres -f scripts-sql/create_stage.sql
psql -U postgres -f scripts-sql/create_dw.sql
```

- [ ] Banco `stage_aeronautica` criado
- [ ] Banco `dw_aeronautica` criado
- [ ] Schemas e tabelas criados sem erro

---

#### Fase 3: Configurar Conexão no Spoon (5 min)

1. Abra o Spoon (`spoon.bat` ou `spoon.sh`)
2. Abra uma transformação `.ktr` do repositório
3. Clique duas vezes no step de conexão ao banco (ou vá em **View → Database Connections**)
4. Configure:

| Campo | Valor |
|-------|-------|
| Connection Name | `stage_aeronautica` |
| Connection Type | PostgreSQL |
| Host | `localhost` |
| Database | `stage_aeronautica` |
| Port | `5432` |
| Username | `postgres` |
| Password | (sua senha) |

5. Clique em **Test** → deve retornar "Connection successful"
6. Repita para `dw_aeronautica`

- [ ] Conexão `stage_aeronautica` testada com sucesso
- [ ] Conexão `dw_aeronautica` testada com sucesso

---

#### Fase 4: Executar ETL de Staging (15 min)

1. Abra a transformação de staging (ex: `stg_ocorrencia.ktr`)
2. Verifique se o path do CSV está correto (edite o step "CSV file input" se necessário)
3. Execute: **Action → Run** (ou F9)
4. Observe o log — deve mostrar linhas processadas sem erros
5. Repita para `stg_aeronave.ktr`

- [ ] `stg_ocorrencia.ktr` executada (X linhas processadas)
- [ ] `stg_aeronave.ktr` executada (X linhas processadas)
- [ ] Verificar no pgAdmin: `SELECT COUNT(*) FROM stage.stg_ocorrencia;`

---

#### Fase 5: Executar ETL de Data Warehouse (15 min)

1. Abra a transformação de DW (ex: `dw_carga_dimensoes.ktr`)
2. Execute: **Action → Run**
3. Verifique que as dimensões foram populadas:

```sql
SELECT COUNT(*) FROM dw.dim_aeronave;
SELECT COUNT(*) FROM dw.dim_localidade;
SELECT COUNT(*) FROM dw.dim_especie;
SELECT COUNT(*) FROM dw.dim_data;
SELECT COUNT(*) FROM dw.fato_ocorrencia;
```

- [ ] Dimensões populadas com dados
- [ ] Tabela fato com registros
- [ ] Nenhum erro de "key not found" no log

---

#### Fase 6: Publicar Schema e Analisar no Saiku (15 min)

1. Abra o Schema Workbench
2. Abra o arquivo `.xml` do schema Mondrian do repositório
3. Publique no Pentaho Server
4. Acesse `http://localhost:8080/pentaho`
5. **New → Saiku Analytics**
6. Selecione o cubo "Ocorrencias"
7. Arraste dimensões e medidas para montar uma análise

- [ ] Schema publicado sem erro
- [ ] Cubo aparece no Saiku
- [ ] Conseguiu montar pelo menos 1 análise (ex: Ocorrências por UF)
- [ ] Dados fazem sentido (SP e RJ com mais ocorrências)

---

### 🚨 Resolução de Erros Comuns

| Erro | Causa Provável | Solução |
|------|----------------|---------|
| `"Could not find driver class"` | Driver JDBC não está no `/lib` | Copiar `postgresql-42.x.jar` e reiniciar Spoon |
| `"Java heap space"` / OutOfMemory | Memória insuficiente | Aumentar `-Xmx` no `spoon.bat/sh` |
| `"Connection refused"` | PostgreSQL não está rodando | Iniciar o serviço: `pg_ctl start` |
| `"Merge Join requires sorted input"` | Dados não foram ordenados antes do Merge | Adicionar step "Sort rows" ANTES do Merge Join |
| `"Key not found in dimension"` | Natural Key veio nula ou com espaço | Verificar Replace in string no fluxo de Staging |
| `"Table does not exist"` | Schema/tabela não criados | Executar scripts SQL da Fase 2 |
| Saiku não aparece no menu | Plugin não instalado corretamente | Verificar pasta `system/saiku/` e reiniciar server |
| Schema não publica | URL ou credenciais erradas | Verificar URL do server e user/password |
| Dados duplicados na fato | ETL rodou 2 vezes sem truncate | `TRUNCATE dw.fato_ocorrencia;` e re-executar |

---

### 📊 Validação Final — Queries de Verificação

Execute estas consultas no pgAdmin para confirmar que tudo está correto:

```sql
-- Top 5 UFs com mais ocorrências
SELECT l.uf, SUM(f.qtd_ocorrencia) as total
FROM dw.fato_ocorrencia f
JOIN dw.dim_localidade l ON f.sk_localidade = l.sk_localidade
GROUP BY l.uf
ORDER BY total DESC
LIMIT 5;

-- Ocorrências por ano
SELECT d.ano, SUM(f.qtd_ocorrencia) as total
FROM dw.fato_ocorrencia f
JOIN dw.dim_data d ON f.sk_data = d.sk_data
GROUP BY d.ano
ORDER BY d.ano;

-- Espécies mais envolvidas em colisões
SELECT e.especie, SUM(f.qtd_ocorrencia) as total
FROM dw.fato_ocorrencia f
JOIN dw.dim_especie e ON f.sk_especie = e.sk_especie
WHERE e.especie IS NOT NULL AND e.especie != ''
GROUP BY e.especie
ORDER BY total DESC
LIMIT 10;

-- Horários mais críticos
SELECT t.periodo_dia, SUM(f.qtd_ocorrencia) as total
FROM dw.fato_ocorrencia f
JOIN dw.dim_time t ON f.sk_time = t.sk_time
GROUP BY t.periodo_dia
ORDER BY total DESC;
```

---

> **Parabéns!** Se chegou até aqui, você construiu um Data Warehouse completo: da extração bruta de CSVs até um dashboard OLAP navegável. Esse é o ciclo real de um projeto de Business Intelligence. 🎯
