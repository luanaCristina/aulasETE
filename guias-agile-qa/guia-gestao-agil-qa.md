# 🚀 Guia Prático — Gestão de Projetos Ágeis & Qualidade de Software

> **Curso:** Técnico em Desenvolvimento de Sistemas — Turno Noturno  
> **Aplicação:** Projeto prático em equipe (3-5 alunos)  
> **Formato:** Apostila + referência rápida para consulta durante o semestre

---

## 1. 🎯 Por Que Aprender Isso? (A Realidade do Mercado)

### O cenário nas empresas de TI

Toda empresa de tecnologia — do iFood à startup de 5 pessoas — organiza seu
trabalho com **metodologias ágeis**. Não é opcional. É o padrão.

Um dev júnior que chega sabendo:
- Escrever user stories → **entende o que precisa construir**
- Organizar um board Kanban → **sabe priorizar e se auto-gerenciar**
- Escrever cenários de teste → **entrega código com qualidade**
- Participar de dailies → **comunica bloqueios antes de virar problema**

Isso diferencia quem **recebe oferta de emprego** de quem fica mandando
currículo sem retorno.

### O que acontece SEM agilidade?

```
❌ "Fiz a feature errada porque não entendi o que era pra fazer"
❌ "O código quebrou em produção porque ninguém testou"
❌ "Ninguém sabia que o colega estava travado há 3 dias"
❌ "O projeto atrasou 2 meses e ninguém sabe por quê"
```

### O que acontece COM agilidade?

```
✅ User Story clara → dev sabe exatamente o que construir
✅ Critérios de aceite → QA sabe exatamente o que testar
✅ Board atualizado → todo mundo vê o progresso em tempo real
✅ Daily de 5 min → impedimentos resolvidos no mesmo dia
```

---

## 2. 📋 Metodologias Ágeis na Prática

### Kanban — Fluxo Contínuo

**Conceito:** Visualizar TODO o trabalho em um quadro, limitar o que está
em andamento (WIP) e identificar gargalos.

```
┌─────────┐  ┌─────────┐  ┌───────────┐  ┌────────┐  ┌──────┐
│ BACKLOG │→│  TO DO  │→│IN PROGRESS│→│   QA   │→│ DONE │
│         │  │ (max 5) │  │  (max 3)  │  │(max 2) │  │      │
│ ● ● ● ● │  │ ● ● ●   │  │ ● ●       │  │ ●      │  │ ● ● ●│
└─────────┘  └─────────┘  └───────────┘  └────────┘  └──────┘
```

**Regra de ouro:** Limite de WIP (Work In Progress)
- Se a coluna "In Progress" tem limite 3, NINGUÉM pode puxar novo card até um sair.
- Isso FORÇA a terminar antes de começar algo novo.

**Quando usar:** Manutenção contínua, suporte, bugs, fluxo constante.

---

### Scrum — Ciclos (Sprints)

**Conceito:** Trabalhar em ciclos curtos (1-2 semanas) com entregas frequentes.

#### Papéis

| Papel | Quem é | O que faz |
|-------|--------|-----------|
| **Product Owner (PO)** | Dono do produto | Prioriza o que será feito (backlog) |
| **Scrum Master** | Facilitador | Remove impedimentos, garante o processo |
| **Developers** | Time de dev | Constrói o produto |

> **Na sala de aula:** Professor = PO (define requisitos) + Scrum Master (facilita). Alunos = Developers.

#### Artefatos

| Artefato | O que é | Analogia |
|----------|---------|----------|
| **Product Backlog** | Lista TOTAL de tudo que precisa ser feito | Lista de compras do mês |
| **Sprint Backlog** | O que será feito NESTA sprint | Lista do que comprar HOJE |
| **Incremento** | Código pronto e testado ao final da sprint | Sacola com as compras feitas |

#### Eventos (Cerimônias)

| Evento | Quando | Duração | O que acontece |
|--------|--------|---------|----------------|
| Sprint Planning | Início da sprint | 30-60 min | Equipe escolhe tarefas para a sprint |
| Daily Scrum | Todo dia | 5-15 min | 3 perguntas: fiz, farei, impedimento |
| Sprint Review | Fim da sprint | 30 min | Demo do que foi construído |
| Retrospectiva | Fim da sprint | 20 min | O que melhorar no processo |

---

### Scrum vs Kanban — Quando Usar?

| Critério | Scrum | Kanban |
|----------|-------|--------|
| Ciclos | Sprints fixos (1-2 sem) | Fluxo contínuo |
| Planejamento | A cada sprint | Sob demanda |
| Papéis | PO, SM, Devs | Não obriga papéis |
| Melhor para | Projetos novos, features | Manutenção, suporte, bugs |
| Na sala de aula | ✅ Recomendado | Complementar |

---

## 3. 🛠️ Criando o Quadro do Projeto (Passo a Passo)

### Opção A: GitHub Projects (Gratuito — Recomendado)

1. Acesse github.com e entre na organização/repositório do projeto
2. Clique na aba **"Projects"** → **"New Project"**
3. Escolha template **"Board"** (Kanban)
4. Renomeie as colunas para:

```
📥 Backlog | 📋 To Do | 🔨 In Progress | 🔍 Code Review / QA | ✅ Done
```

5. Para cada tarefa: clique **"+ Add Item"** → preencha título e descrição
6. Converta itens em **Issues** (clicando "Convert to Issue") para ter:
   - Assignee (quem vai fazer)
   - Labels (bug, feature, enhancement)
   - Milestone (sprint)

### Opção B: Trello (Gratuito)

1. Acesse trello.com → criar conta → "Criar Quadro"
2. Colunas: Backlog → To Do → In Progress → QA → Done
3. Cada card = 1 user story ou tarefa
4. Membros: adicionar colegas de equipe
5. Labels: usar cores para tipo (feature=verde, bug=vermelho, doc=azul)

---

### Estrutura Padrão das Colunas

| Coluna | Significado | WIP Limit |
|--------|-------------|-----------|
| **Backlog** | Tudo que precisa ser feito (não priorizado) | Sem limite |
| **To Do** | Priorizado para esta sprint/semana | 5 |
| **In Progress** | Alguém está trabalhando AGORA | 3 |
| **Code Review / QA** | Código pronto, aguardando revisão/teste | 2 |
| **Done** | Testado, aprovado e entregue | Sem limite |

> **Regra de sala:** Card só vai para "Done" quando o COLEGA revisar o código E os testes passarem.

---

## 4. ✍️ User Stories e Critérios de Aceite

### Template da User Story

```
Como [tipo de usuário],
eu quero [funcionalidade/ação],
para que [benefício/valor de negócio].
```

### ✅ Certo vs ❌ Errado

| ❌ Errado (vago) | ✅ Certo (específico) |
|---|---|
| "Fazer login" | "Como paciente, eu quero fazer login com e-mail e senha para acessar meus agendamentos" |
| "Tela de cadastro" | "Como atendente, eu quero cadastrar novos pacientes com nome, CPF e telefone para agendar consultas" |
| "Arrumar o banco" | "Como dev, eu quero adicionar índice na tabela de agendamentos para que a busca por data seja mais rápida" |

### Critérios INVEST (User Story boa)

| Letra | Significa | Validação |
|-------|-----------|-----------|
| **I** | Independente | Pode ser feita sem depender de outra |
| **N** | Negociável | Detalhes podem ser ajustados |
| **V** | Valiosa | Entrega valor para o usuário |
| **E** | Estimável | Time consegue estimar o esforço |
| **S** | Small (Pequena) | Cabe em 1 sprint (1-2 semanas) |
| **T** | Testável | Dá para verificar se está pronta |

---

### Critérios de Aceite (BDD: Dado-Quando-Então)

Template:
```gherkin
DADO QUE [pré-condição / estado inicial]
QUANDO [ação do usuário]
ENTÃO [resultado esperado]
```

**Exemplo para "Login":**
```gherkin
✅ Cenário: Login com sucesso
DADO QUE o paciente possui cadastro com email "joao@email.com" e senha "Abc@1234"
QUANDO ele preenche email e senha corretamente e clica em "Entrar"
ENTÃO o sistema redireciona para a página de agendamentos
E exibe a mensagem "Bem-vindo, João!"

❌ Cenário: Login com senha incorreta
DADO QUE o paciente possui cadastro
QUANDO ele digita uma senha errada e clica em "Entrar"
ENTÃO o sistema exibe "E-mail ou senha incorretos"
E não permite acesso ao sistema
```

---

## 5. 🧪 Qualidade de Software — Cenários de Teste

### Por que testar?

- **Sem testes:** "Parece que funciona" → quebra em produção → cliente reclama
- **Com testes:** "Comprovadamente funciona" → confiança para fazer deploy

### Estrutura de um Caso de Teste

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **ID** | Identificador único | TC-001 |
| **Título** | O que está testando | Login com credenciais válidas |
| **Pré-condições** | O que precisa existir antes | Usuário cadastrado no sistema |
| **Passos** | Ações passo a passo | 1. Abrir /login 2. Digitar email 3. Digitar senha 4. Clicar "Entrar" |
| **Dados de Entrada** | Valores específicos | email: joao@email.com, senha: Abc@1234 |
| **Resultado Esperado** | O que DEVE acontecer | Redirecionar para /dashboard com msg "Bem-vindo" |
| **Status** | Pass ✅ / Fail ❌ | (preenchido na execução) |

### Conectando Teste ↔ Critério de Aceite

```
User Story: "Como paciente, quero fazer login..."
  └── Critério de Aceite 1: Login com sucesso
       └── TC-001: Login válido (cenário positivo) ✅
  └── Critério de Aceite 2: Login com senha errada
       └── TC-002: Senha incorreta (cenário negativo) ❌→ mensagem de erro
  └── Critério de Aceite 3: Campos vazios
       └── TC-003: Campos obrigatórios (validação) ❌→ erro de validação
```

> **Regra:** Cada critério de aceite gera pelo menos 1 cenário de teste.

---

## 6. 🏃 Cerimônias na Sala de Aula

### Sprint Planning (Início de cada sprint/semana)

**No mercado:** Reunião de 1-2h onde o time seleciona tarefas do backlog.
**Na sala (15 min no início da primeira aula da semana):**

1. Professor apresenta as prioridades da semana (simula o PO)
2. Cada equipe puxa 3-5 cards do Backlog → move para "To Do"
3. Atribui responsáveis (quem vai fazer o quê)
4. Estima complexidade: 🟢 Fácil (1h) | 🟡 Médio (2-3h) | 🔴 Difícil (4h+)

---

### Daily Scrum (Toda aula — 5 minutos)

**No mercado:** Reunião em pé, máximo 15 min, todo dia.
**Na sala (5 min no INÍCIO de cada aula):**

Cada membro responde EM PÉ, rapidamente:

| Pergunta | Exemplo de resposta |
|----------|---------------------|
| **O que fiz desde a última aula?** | "Terminei o endpoint de cadastro e fiz o front do formulário" |
| **O que farei hoje?** | "Vou integrar o front com a API e começar os testes" |
| **Tem algum impedimento?** | "Estou travado na conexão com o banco, preciso de ajuda" |

**Regras da Daily:**
- ⏱️ Máximo 1 minuto por pessoa
- 🚫 NÃO é para resolver problemas (isso é depois)
- 🚫 NÃO é para o professor avaliar (é para o TIME se organizar)
- Se alguém tem impedimento → professor/colega ajuda APÓS a daily

---

### Sprint Review (Fim da sprint/semana)

**No mercado:** Time mostra o software funcionando para stakeholders.
**Na sala (15-20 min na última aula da semana):**

1. Cada equipe faz uma **demo rápida** (3-5 min) do que construiu
2. Mostra no navegador/emulador — código funcionando, não slides!
3. Professor e colegas dão feedback: "Legal!", "E se fizesse X?"
4. Mover cards para "Done" ao vivo no board

---

### Retrospectiva (Após a Review — 10 min)

**No mercado:** Time discute o PROCESSO (não o produto).
**Na sala:** Cada equipe responde no quadro/post-it:

| 😊 O que funcionou bem? | 😐 O que pode melhorar? | 💡 Ação para próxima sprint |
|---|---|---|
| "Dividimos bem as tarefas" | "Comunicação travou no meio da semana" | "Criar grupo no WhatsApp só do projeto" |
| "Daily ajudou a destravar" | "Começamos a testar só no último dia" | "Escrever testes junto com o código" |

---

## 7. 💡 Projeto Exemplo: Clínica Comunitária

### User Story 1: Cadastro de Paciente

```
CARD NO BOARD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 US-001: Cadastro de Paciente
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏷️ Labels: feature, back-end, front-end
👤 Assignee: @maria, @carlos
📅 Sprint: Sprint 1
⏱️ Estimativa: 🟡 Médio (3h)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**User Story:**
```
Como atendente da clínica,
eu quero cadastrar novos pacientes com seus dados pessoais,
para que eles possam agendar consultas no sistema.
```

**Critérios de Aceite:**
```gherkin
CA-1: Cadastro com sucesso
DADO QUE o atendente está na tela de cadastro
QUANDO preenche Nome, CPF, Telefone e Data de Nascimento corretamente
E clica em "Cadastrar"
ENTÃO o sistema salva o paciente e exibe "Paciente cadastrado com sucesso!"
E o paciente aparece na lista de pacientes

CA-2: CPF duplicado
DADO QUE já existe um paciente com CPF "123.456.789-00"
QUANDO o atendente tenta cadastrar outro com o mesmo CPF
ENTÃO o sistema exibe "CPF já cadastrado no sistema"
E NÃO salva o registro duplicado

CA-3: Campos obrigatórios
DADO QUE o atendente está na tela de cadastro
QUANDO tenta cadastrar sem preencher o campo Nome (obrigatório)
ENTÃO o sistema destaca o campo em vermelho
E exibe "Nome é obrigatório"
```

---

### User Story 2: Agendamento de Consulta

**User Story:**
```
Como paciente cadastrado,
eu quero agendar uma consulta escolhendo médico, data e horário,
para que eu possa ser atendido na clínica sem precisar ir presencialmente para marcar.
```

**Critérios de Aceite:**
```gherkin
CA-1: Agendamento com sucesso
DADO QUE o paciente está logado e na tela de agendamento
QUANDO seleciona Dr. Silva, dia 15/08 às 09:00 e clica "Agendar"
ENTÃO o sistema confirma "Consulta agendada para 15/08 às 09:00 com Dr. Silva"
E a consulta aparece em "Meus Agendamentos"

CA-2: Horário já ocupado
DADO QUE Dr. Silva já tem consulta dia 15/08 às 09:00
QUANDO outro paciente tenta agendar no mesmo horário
ENTÃO o sistema exibe "Horário indisponível. Escolha outro."
E NÃO cria agendamento duplicado

CA-3: Data no passado
DADO QUE a data atual é 10/08/2025
QUANDO o paciente tenta agendar para 05/08/2025 (passado)
ENTÃO o sistema exibe "Não é possível agendar em datas passadas"
```

---

### Cenários de Teste Completos

#### TC-001: Cadastro de Paciente — Fluxo Principal (Positivo)

| Campo | Valor |
|-------|-------|
| **ID** | TC-001 |
| **Título** | Cadastrar paciente com todos os dados válidos |
| **User Story** | US-001 |
| **Pré-condições** | Atendente logado no sistema; CPF ainda não cadastrado |
| **Passos** | 1. Acessar /pacientes/novo |
|  | 2. Preencher Nome: "Maria da Silva" |
|  | 3. Preencher CPF: "123.456.789-00" |
|  | 4. Preencher Telefone: "(81) 99999-0000" |
|  | 5. Preencher Data Nasc.: "15/03/1985" |
|  | 6. Clicar botão "Cadastrar" |
| **Dados de Entrada** | nome="Maria da Silva", cpf="12345678900", tel="81999990000", nasc="1985-03-15" |
| **Resultado Esperado** | Sistema exibe toast "Paciente cadastrado com sucesso!", redireciona para lista, paciente aparece na lista |
| **Status** | ⬜ (preencher na execução) |

---

#### TC-002: Agendamento — Fluxo de Exceção (Negativo)

| Campo | Valor |
|-------|-------|
| **ID** | TC-002 |
| **Título** | Tentar agendar em horário já ocupado |
| **User Story** | US-002 |
| **Pré-condições** | Paciente logado; Dr. Silva já tem consulta em 15/08 às 09:00 |
| **Passos** | 1. Acessar /agendamentos/novo |
|  | 2. Selecionar médico: "Dr. Silva" |
|  | 3. Selecionar data: 15/08/2025 |
|  | 4. Selecionar horário: 09:00 |
|  | 5. Clicar "Confirmar Agendamento" |
| **Dados de Entrada** | medico_id=1, data="2025-08-15", hora="09:00" |
| **Resultado Esperado** | Sistema retorna erro 409 (Conflict), exibe "Horário indisponível", NÃO cria o agendamento |
| **Status** | ⬜ |

---

## 8. 📊 Rubrica de Avaliação — Gestão do Projeto (0 a 10)

### Tabela de Critérios para o Professor

| Critério | Peso | 0-3 (Insuficiente) | 4-6 (Regular) | 7-8 (Bom) | 9-10 (Excelente) |
|----------|------|---------------------|----------------|------------|-------------------|
| **Organização do Board** | 25% | Board não existe ou sem colunas padrão | Colunas criadas mas cards sem atribuição | Cards atribuídos, labels, WIP respeitado | Board completo, atualizado diariamente, milestones |
| **User Stories** | 25% | Frases vagas sem formato | Formato "Como..quero..para" mas genéricas | Stories INVEST, com critérios de aceite | Stories perfeitas + DoD + estimativa + prioridade |
| **Cenários de Teste** | 25% | Sem testes documentados | Testes genéricos sem passos | Testes com passos e dados, cenário positivo | Positivo + negativo + edge cases + resultado esperado |
| **Dailies e Participação** | 25% | Não participou das dailies | Participou mas respostas vagas | Respondeu as 3 perguntas com clareza | Participou ativamente + ajudou colegas com impedimentos |

---

### Nota Final: Cálculo

```
Nota = (Board × 0.25) + (Stories × 0.25) + (Testes × 0.25) + (Dailies × 0.25)
```

### Exemplos de Nota

| Aluno | Board | Stories | Testes | Dailies | NOTA |
|-------|-------|---------|--------|---------|------|
| Ana | 9 | 8 | 9 | 10 | **9.0** |
| Carlos | 6 | 5 | 4 | 7 | **5.5** |
| Diego | 3 | 2 | 0 | 4 | **2.3** |

---

## 9. 📎 Card Completo — Como Fica no Board

### Formato de Card (GitHub Projects / Trello / Jira)

```
┌─────────────────────────────────────────────────────┐
│ 🏷️ feature  |  📌 Sprint 1  |  ⏱️ 🟡 Médio (3h)   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📋 US-002: Agendamento de Consulta                 │
│                                                     │
│  Como paciente cadastrado,                          │
│  eu quero agendar consulta escolhendo médico,       │
│  data e horário, para ser atendido sem ir           │
│  presencialmente.                                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ✅ Critérios de Aceite:                            │
│  □ CA-1: Agendamento com sucesso                    │
│  □ CA-2: Horário ocupado → erro                     │
│  □ CA-3: Data passada → erro                        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  🧪 Testes Vinculados:                              │
│  □ TC-003: Agendar com sucesso                      │
│  □ TC-004: Horário duplicado (409)                  │
│  □ TC-005: Data no passado (400)                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  👤 Assignees: @maria (back) @carlos (front)        │
│  📎 Branch: feature/us-002-agendamento              │
│  🔗 PR: #15                                         │
└─────────────────────────────────────────────────────┘
```

---

## 10. 🎯 Resumo — Cola Rápida para a Aula

### Fluxo do Card na Sprint

```
1. PO escreve User Story no Backlog
2. Sprint Planning: time puxa para To Do
3. Dev move para In Progress e cria branch
4. Dev conclui → abre PR → move para Code Review
5. Colega revisa código + QA executa testes
6. Testes passam ✅ → move para Done
7. Sprint Review: demo ao vivo do que ficou pronto
```

### Fórmula de Sucesso

```
User Story clara
  + Critérios de Aceite BDD
    + Cenários de Teste mapeados
      + Board atualizado
        + Daily diária
          = PROJETO ENTREGUE COM QUALIDADE 🏆
```

---

> 💬 **Lembrete final:** Não existe código perfeito. Existe código **testado,
> organizado e entregue no prazo**. Esse é o profissional que o mercado busca.
> Vocês estão aprendendo isso ANTES de entrar no mercado — isso é uma vantagem enorme. 🚀
