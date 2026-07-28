<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Scrum-Ágil-6DB33F?style=for-the-badge&logo=scrumalliance&logoColor=white" alt="Scrum"/>
  <img src="https://img.shields.io/badge/Carga_Horária-40h-orange?style=for-the-badge" alt="40h"/>
  <img src="https://img.shields.io/badge/Módulo-1-blueviolet?style=for-the-badge" alt="Módulo 1"/>
</p>

<h1 align="center">📋 Projeto Integrador I</h1>
<p align="center"><strong>Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco</strong></p>
<p align="center"><em>Profª Luana Cristina</em></p>

---

## 📌 Informações da Disciplina

| Item | Detalhe |
|------|---------|
| **Disciplina** | Projeto Integrador I |
| **Módulo** | 1 |
| **Carga Horária** | 40 horas (2 aulas/semana × 20 semanas) |
| **Metodologia** | Aprendizagem Baseada em Projetos (PBL) + Scrum |
| **Pré-requisitos** | Cursando Lógica, Banco de Dados e Python (Módulo 1) |
| **Professora** | Profª Luana Cristina |

### 📝 Ementa

O Projeto Integrador I é uma disciplina prática que visa a **aplicação integrada** dos conhecimentos adquiridos nas demais disciplinas do Módulo 1:

- 🧠 **Lógica e Pensamento Computacional** → Algoritmos, estruturas de controle, funções
- 🗄️ **Administração de Bancos de Dados** → Modelagem, SQL, DDL/DML, normalização
- 🐍 **Programação Python Desktop** → Python + Tkinter, orientação a eventos, integração com BD

Os estudantes, organizados em equipes, desenvolverão uma **aplicação desktop completa** (Python + Tkinter + PostgreSQL) desde a concepção até a apresentação final, seguindo práticas ágeis (Scrum adaptado).

> 💡 **O PI1 é o momento de colocar tudo junto!** Aqui vocês provam que sabem transformar um problema real em software funcional.

---

## 📅 Cronograma Semana a Semana

| Semana | Aulas | Fase | Conteúdo/Atividade |
|:------:|:-----:|:----:|-------------------|
| 1 | 1-2 | 🚀 Planejamento | Apresentação da disciplina, formação de equipes (3-4 integrantes) |
| 2 | 3-4 | 🚀 Planejamento | Brainstorming de temas, análise de viabilidade |
| 3 | 5-6 | 🚀 Planejamento | Definição do tema, levantamento de requisitos (RF e RNF) |
| 4 | 7-8 | 🗄️ Modelagem | Modelagem conceitual — Diagrama Entidade-Relacionamento (DER) |
| 5 | 9-10 | 🗄️ Modelagem | Modelo lógico, normalização (1FN, 2FN, 3FN) |
| 6 | 11-12 | 🗄️ Modelagem | Scripts DDL (CREATE TABLE, constraints, relacionamentos) |
| 7 | 13-14 | 🐍 Backend | Estrutura do projeto Python, conexão com PostgreSQL (psycopg2) |
| 8 | 15-16 | 🐍 Backend | Camada de repositório — funções CRUD (INSERT, SELECT, UPDATE, DELETE) |
| 9 | 17-18 | 🐍 Backend | Camada de serviço — regras de negócio, validações |
| 10 | 19-20 | 🖥️ Interface | Introdução ao Tkinter — janelas, frames, widgets básicos |
| 11 | 21-22 | 🖥️ Interface | Formulários de cadastro (Entry, Label, Button, Combobox) |
| 12 | 23-24 | 🖥️ Interface | Listagem com Treeview, busca e filtros |
| 13 | 25-26 | 🖥️ Interface | Navegação entre telas, messagebox, tratamento de eventos |
| 14 | 27-28 | 🔗 Integração | Conectando GUI → Serviço → Repositório → Banco de Dados |
| 15 | 29-30 | 🔗 Integração | CRUD completo funcionando na interface gráfica |
| 16 | 31-32 | 🔗 Integração | Funcionalidades extras (relatórios, filtros avançados) |
| 17 | 33-34 | 🧪 Testes | Testes manuais, identificação e correção de bugs |
| 18 | 35-36 | 🧪 Testes | Documentação do projeto (README, manual do usuário) |
| 19 | 37-38 | 🎤 Apresentação | Ensaio das apresentações, ajustes finais |
| 20 | 39-40 | 🎤 Apresentação | **Apresentação final + Entrega do projeto** |

> ⚠️ **Atenção:** As entregas parciais (sprints) são obrigatórias e valem nota. Não deixe tudo para o final!

---

## 🎯 Guia do Projeto

### 💡 Temas Sugeridos

| # | Tema | Descrição | Entidades Sugeridas |
|:-:|------|-----------|-------------------|
| 1 | 🐾 **Sistema de Petshop** | Gerenciamento de clientes, pets, serviços e agendamentos | Cliente, Pet, Serviço, Agendamento |
| 2 | 📚 **Controle de Biblioteca** | Cadastro de livros, empréstimos, devoluções e multas | Livro, Autor, Leitor, Empréstimo |
| 3 | 🚗 **Estacionamento Inteligente** | Controle de vagas, entrada/saída de veículos e cobrança | Veículo, Vaga, Registro, Pagamento |
| 4 | 🎪 **Gestão de Eventos** | Organização de eventos, inscrições e certificados | Evento, Participante, Inscrição, Local |
| 5 | 🎮 **Loja de Games** | Catálogo de jogos, vendas, clientes e estoque | Jogo, Plataforma, Cliente, Venda |

> 💡 **Dica:** Vocês podem propor um tema próprio! Basta que tenha pelo menos **4 entidades relacionadas** e operações CRUD completas.

### 📋 Template de Requisitos

<details>
<summary><strong>📄 Clique para expandir o template de requisitos</strong></summary>

#### Requisitos Funcionais (RF)

| ID | Requisito | Prioridade |
|----|-----------|:----------:|
| RF01 | O sistema deve permitir cadastrar [entidade principal] | Alta |
| RF02 | O sistema deve permitir listar todos os [entidade] cadastrados | Alta |
| RF03 | O sistema deve permitir editar informações de [entidade] | Alta |
| RF04 | O sistema deve permitir excluir [entidade] | Média |
| RF05 | O sistema deve permitir buscar [entidade] por [critério] | Média |
| RF06 | O sistema deve gerar relatório de [informação] | Baixa |

#### Requisitos Não Funcionais (RNF)

| ID | Requisito | Categoria |
|----|-----------|:---------:|
| RNF01 | O sistema deve utilizar PostgreSQL como banco de dados | Tecnologia |
| RNF02 | A interface deve ser desenvolvida com Tkinter | Tecnologia |
| RNF03 | O sistema deve validar campos obrigatórios antes de salvar | Usabilidade |
| RNF04 | O sistema deve exibir mensagens de confirmação antes de excluir | Usabilidade |
| RNF05 | O código deve seguir o padrão de camadas (repositório/serviço/GUI) | Arquitetura |

</details>

### ✅ Checklist de Entregáveis

- [ ] 📊 Diagrama Entidade-Relacionamento (DER) — ferramenta: brModelo ou draw.io
- [ ] 📝 Scripts DDL (CREATE TABLE com PKs, FKs, constraints)
- [ ] 🐍 Código Python (camada de repositório + serviço)
- [ ] 🖥️ Interface Gráfica Tkinter (telas de CRUD + navegação)
- [ ] 🔗 Integração completa (GUI ↔ Python ↔ PostgreSQL)
- [ ] 📖 README.md do projeto (documentação seguindo o template)
- [ ] 🎤 Apresentação final (slides + demonstração ao vivo)
- [ ] 📁 Repositório organizado no GitHub

### 🏃 Planejamento de Sprints

<details>
<summary><strong>📅 Clique para expandir o planejamento de sprints</strong></summary>

#### Sprint 1 — Modelagem e Banco de Dados (Semanas 4-6)

| Tarefa | Responsável | Status |
|--------|:-----------:|:------:|
| Criar DER no brModelo/draw.io | | ⬜ |
| Definir modelo lógico (tabelas + tipos) | | ⬜ |
| Aplicar normalização (1FN, 2FN, 3FN) | | ⬜ |
| Escrever scripts DDL | | ⬜ |
| Inserir dados de teste (INSERT) | | ⬜ |

#### Sprint 2 — Backend Python (Semanas 7-9)

| Tarefa | Responsável | Status |
|--------|:-----------:|:------:|
| Configurar conexão com PostgreSQL (psycopg2) | | ⬜ |
| Criar funções de INSERT para cada entidade | | ⬜ |
| Criar funções de SELECT (listar e buscar) | | ⬜ |
| Criar funções de UPDATE | | ⬜ |
| Criar funções de DELETE | | ⬜ |
| Implementar regras de negócio (validações) | | ⬜ |

#### Sprint 3 — Interface Tkinter (Semanas 10-13)

| Tarefa | Responsável | Status |
|--------|:-----------:|:------:|
| Criar janela principal com menu/navegação | | ⬜ |
| Tela de cadastro (formulário) | | ⬜ |
| Tela de listagem (Treeview) | | ⬜ |
| Tela de edição/exclusão | | ⬜ |
| Tela de busca/filtros | | ⬜ |
| Tratamento de erros e mensagens ao usuário | | ⬜ |

#### Sprint 4 — Integração e Documentação (Semanas 14-18)

| Tarefa | Responsável | Status |
|--------|:-----------:|:------:|
| Integrar GUI com camada de serviço | | ⬜ |
| Testar fluxos completos (CRUD via interface) | | ⬜ |
| Corrigir bugs encontrados | | ⬜ |
| Escrever README.md do projeto | | ⬜ |
| Preparar apresentação (slides) | | ⬜ |
| Ensaiar demonstração ao vivo | | ⬜ |

</details>

---

## 📊 Rubrica de Avaliação

| Critério | Peso | 10 (Excelente) | 7 (Bom) | 4 (Insuficiente) |
|----------|:----:|----------------|----------|------------------|
| **🗄️ Modelagem BD** | 20% | DER completo, normalizado até 3FN, DDL sem erros, constraints corretas | DER com pequenas falhas, normalizado até 2FN, DDL funcional | DER incompleto, sem normalização, DDL com erros |
| **🐍 Backend Python** | 25% | CRUD completo, código organizado em camadas, validações robustas | CRUD funcional mas com pouca validação, organização parcial | CRUD incompleto, código desorganizado, sem validações |
| **🖥️ Interface Tkinter** | 25% | Todas as telas funcionais, boa usabilidade, navegação intuitiva | Telas principais funcionais, usabilidade aceitável | Telas incompletas, interface confusa, erros de navegação |
| **🔗 Integração BD+Python** | 15% | Integração perfeita, dados persistem corretamente, transações tratadas | Integração funcional com pequenas falhas na persistência | Integração parcial, dados não persistem corretamente |
| **📖 Documentação + Apresentação** | 15% | README completo, apresentação clara e objetiva, demonstração ao vivo | README básico, apresentação razoável, demonstração parcial | Sem README, apresentação confusa, sem demonstração |

### Como calcular a nota final:

```
Nota Final = (ModelagemBD × 0.20) + (Backend × 0.25) + (Interface × 0.25) + (Integração × 0.15) + (Documentação × 0.15)
```

> 💡 **Exemplo:** Se uma equipe tira 10 em Modelagem, 7 em Backend, 10 em Interface, 7 em Integração e 10 em Documentação:
> `(10×0.20) + (7×0.25) + (10×0.25) + (7×0.15) + (10×0.15) = 2.0 + 1.75 + 2.5 + 1.05 + 1.5 = **8.8**`

---

## 📝 Template de Documentação do Projeto

Cada equipe deve criar um `README.md` no repositório do projeto seguindo este modelo:

<details>
<summary><strong>📄 Clique para expandir o template do README</strong></summary>

```markdown
# 📦 [Nome do Projeto]

> Breve descrição em uma linha do que o sistema faz.

## 👥 Integrantes

| Nome | Função | GitHub |
|------|--------|--------|
| Nome 1 | Líder / Backend | @usuario1 |
| Nome 2 | Banco de Dados | @usuario2 |
| Nome 3 | Interface (GUI) | @usuario3 |
| Nome 4 | Testes / Docs | @usuario4 |

## 📖 Descrição

Descrição detalhada do projeto: qual problema resolve, quem são os usuários, 
quais as principais funcionalidades.

## 🛠️ Tecnologias

- Python 3.11+
- Tkinter (interface gráfica)
- PostgreSQL 16 (banco de dados)
- psycopg2 (conexão Python ↔ PostgreSQL)

## 🚀 Como Executar

1. Clone o repositório:
   git clone https://github.com/usuario/nome-do-projeto.git

2. Crie o banco de dados:
   psql -U postgres -f scripts/create_database.sql

3. Instale as dependências:
   pip install -r requirements.txt

4. Execute a aplicação:
   python main.py

## 📸 Screenshots

| Tela | Imagem |
|------|--------|
| Tela Principal | ![Principal](screenshots/principal.png) |
| Cadastro | ![Cadastro](screenshots/cadastro.png) |
| Listagem | ![Listagem](screenshots/listagem.png) |

## 🗄️ Estrutura do Banco de Dados

### Diagrama Entidade-Relacionamento
![DER](docs/der.png)

### Tabelas Principais
- **tabela1** — descrição
- **tabela2** — descrição
- **tabela3** — descrição

## ⚙️ Funcionalidades

- [x] Cadastro de [entidade]
- [x] Listagem com filtros
- [x] Edição de registros
- [x] Exclusão com confirmação
- [x] Busca por [critério]
- [ ] Relatório de [informação] (futuro)

## 📁 Estrutura de Pastas

nome-do-projeto/
├── main.py
├── requirements.txt
├── README.md
├── scripts/
│   └── create_database.sql
├── src/
│   ├── repositorio/
│   ├── servico/
│   └── gui/
├── docs/
│   └── der.png
└── screenshots/
```

</details>

---

## 🏆 Critérios de Avaliação por Sprint

A avaliação é **contínua e incremental**. Cada sprint tem entregas obrigatórias com peso na nota final:

| Sprint | Período | Entrega | Peso | O que é avaliado |
|:------:|:-------:|---------|:----:|-----------------|
| **Sprint 1** | Semanas 4-6 | Modelagem + DDL | **20%** | DER, modelo lógico, normalização, scripts DDL executáveis |
| **Sprint 2** | Semanas 7-9 | Backend Python | **25%** | Funções CRUD, organização em camadas, conexão com BD |
| **Sprint 3** | Semanas 10-13 | Interface Tkinter | **25%** | Telas completas, usabilidade, navegação, eventos |
| **Sprint 4** | Semanas 14-18 | Integração + Docs | **30%** | Sistema funcionando de ponta a ponta, README, apresentação |

### 📋 Detalhamento por Sprint

<details>
<summary><strong>🗄️ Sprint 1 — Modelagem e DDL (20%)</strong></summary>

**Entregáveis:**
- DER exportado como imagem (PNG/PDF)
- Documento descrevendo as entidades e relacionamentos
- Script SQL com todos os CREATE TABLE
- Script SQL com dados de teste (pelo menos 5 registros por tabela)

**Critérios de aceite:**
- ✅ Mínimo de 4 tabelas relacionadas
- ✅ Uso correto de PK, FK e constraints (NOT NULL, UNIQUE, CHECK)
- ✅ Normalização aplicada (sem redundância)
- ✅ Script executa sem erros no PostgreSQL

</details>

<details>
<summary><strong>🐍 Sprint 2 — Backend Python (25%)</strong></summary>

**Entregáveis:**
- Arquivo de conexão com banco (db_connection.py ou similar)
- Módulo de repositório com funções CRUD para cada entidade
- Módulo de serviço com regras de negócio/validações

**Critérios de aceite:**
- ✅ Conexão com PostgreSQL funcional
- ✅ CRUD completo (Create, Read, Update, Delete) para entidade principal
- ✅ Pelo menos 2 validações de regras de negócio
- ✅ Tratamento de exceções (try/except)
- ✅ Código organizado em arquivos separados

</details>

<details>
<summary><strong>🖥️ Sprint 3 — Interface Tkinter (25%)</strong></summary>

**Entregáveis:**
- Tela principal com menu ou navegação
- Tela de cadastro com formulário funcional
- Tela de listagem com Treeview
- Tela de edição/exclusão

**Critérios de aceite:**
- ✅ Interface responsiva e organizada (uso de grid/pack)
- ✅ Campos com labels descritivos
- ✅ Botões com ações corretas
- ✅ MessageBox para confirmações e erros
- ✅ Navegação entre telas sem travar

</details>

<details>
<summary><strong>🔗 Sprint 4 — Integração e Documentação (30%)</strong></summary>

**Entregáveis:**
- Sistema completo funcionando (GUI → Serviço → Repositório → BD)
- README.md seguindo o template fornecido
- Apresentação (slides + demo ao vivo)
- Repositório no GitHub organizado

**Critérios de aceite:**
- ✅ Cadastro via GUI salva no banco de dados
- ✅ Listagem via GUI busca dados reais do banco
- ✅ Edição e exclusão funcionam de ponta a ponta
- ✅ Sistema não apresenta erros críticos na demonstração
- ✅ Todos os integrantes participam da apresentação
- ✅ Demonstração ao vivo (não vale vídeo gravado)

</details>

> ⚠️ **Importante:** Equipes que não entregarem uma sprint no prazo terão **desconto de 2 pontos** na nota daquela sprint por semana de atraso. Após 2 semanas, a sprint é considerada não entregue (nota 0).

---

## 📚 Recursos de Apoio

| Recurso | Link/Descrição |
|---------|---------------|
| 🐍 Documentação Python | [docs.python.org](https://docs.python.org/3/) |
| 🖥️ Tkinter Tutorial | [TkDocs](https://tkdocs.com/tutorial/index.html) |
| 🗄️ PostgreSQL Docs | [postgresql.org/docs](https://www.postgresql.org/docs/) |
| 🔌 psycopg2 | [psycopg.org](https://www.psycopg.org/docs/) |
| 📊 brModelo | [sourceforge.net/projects/brmodelo](https://sourceforge.net/projects/brmodelo/) |
| 📐 Draw.io | [app.diagrams.net](https://app.diagrams.net/) |
| 📋 Trello (Scrum) | [trello.com](https://trello.com/) |

---

## 🤝 Regras de Convivência em Equipe

1. **Todos contribuem** — o Git mostra quem fez o quê (commits)
2. **Comunicação** — usem grupo no WhatsApp/Discord da equipe
3. **Divisão justa** — rodem os papéis a cada sprint
4. **Conflitos** — conversem entre si primeiro; se não resolver, procurem a professora
5. **Plágio** — projetos copiados de outras equipes ou da internet = nota 0 para TODOS

> 💡 **Dica profissional:** Em empresas reais, saber trabalhar em equipe é tão importante quanto saber programar. Aproveitem o PI para praticar isso!

---

## ❓ Perguntas Frequentes (FAQ)

<details>
<summary><strong>Posso usar um tema diferente dos sugeridos?</strong></summary>

Sim! Desde que tenha no mínimo 4 entidades relacionadas e operações CRUD completas. Apresente a ideia para a professora na Semana 2 para aprovação.

</details>

<details>
<summary><strong>Posso usar outro banco de dados além do PostgreSQL?</strong></summary>

Não. O PostgreSQL é obrigatório pois é a ferramenta trabalhada na disciplina de Banco de Dados do Módulo 1.

</details>

<details>
<summary><strong>A equipe pode ter mais de 4 integrantes?</strong></summary>

Não. O máximo é 4 e o mínimo é 3 integrantes. Equipes menores terão escopo reduzido ajustado pela professora.

</details>

<details>
<summary><strong>E se um integrante não contribuir?</strong></summary>

O histórico de commits no Git será analisado. Integrantes sem contribuição significativa podem ter nota individual diferente da equipe.

</details>

<details>
<summary><strong>Preciso instalar algo novo para essa disciplina?</strong></summary>

Não! Você já terá Python, PostgreSQL e VS Code instalados das outras disciplinas do Módulo 1. A única dependência adicional é o `psycopg2`, instalado via pip.

</details>

---

<p align="center">
  <strong>🚀 "Sozinhos vamos mais rápido, juntos vamos mais longe." 🚀</strong>
</p>
<p align="center">
  <em>Bom projeto a todas as equipes!</em><br>
  <strong>Profª Luana Cristina</strong> — ETE Pernambuco
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Feito_com-❤️_e_Python-blue?style=flat-square" alt="Feito com amor e Python"/>
</p>
