# 10 - Guia de Gestão de Produtos e Projetos (PM / PO / Tech Lead)

## Sumário

1. [Gerente de Produto (PM / PO)](#1-gerente-de-produto-pm--po)
2. [Gerente de Projetos (PM / Scrum Master / Tech Lead)](#2-gerente-de-projetos)
3. [Guia de Carreira](#3-guia-de-carreira)

---

## 1. Gerente de Produto (PM / PO)

### O Papel do Product Manager / Product Owner

O PM/PO é responsável pelo **sucesso do produto**. Ele define O QUE construir,
PARA QUEM e POR QUÊ — maximizando o valor entregue ao negócio e aos usuários.

```
┌─────────────────────────────────────────────────┐
│              PRODUCT MANAGER                     │
├─────────────────────────────────────────────────┤
│                                                 │
│   NEGÓCIO ←──→ PM/PO ←──→ TECNOLOGIA          │
│   (Viabilidade)  │        (Feasibility)        │
│                  │                              │
│                  ↓                              │
│             USUÁRIO                             │
│          (Desejabilidade)                       │
│                                                 │
│   Produto de sucesso = interseção dos três      │
└─────────────────────────────────────────────────┘
```

### Visão do Produto

Declaração de alto nível que define a direção estratégica:

**Template (Geoffrey Moore):**
```
PARA [público-alvo]
QUE [necessidade/problema]
O [nome do produto]
É UM [categoria do produto]
QUE [benefício principal]
DIFERENTE DE [concorrente/alternativa]
NOSSO PRODUTO [diferencial competitivo]
```

**Exemplo para o Expo Maps App:**
```
PARA moradores e turistas de grandes cidades brasileiras
QUE precisam descobrir pontos de interesse de forma rápida e visual
O ExploraCity
É UM aplicativo mobile de mapas interativos
QUE permite visualizar e explorar locais culturais, parques e serviços próximos
DIFERENTE DO Google Maps genérico
NOSSO PRODUTO foca em curadoria local e experiência gamificada de descoberta
```

### Roadmap de Produto

| Horizonte | Foco | Confiança |
|-----------|------|-----------|
| **Now** (0-3 meses) | Features comprometidas, bugs críticos | Alta (80%+) |
| **Next** (3-6 meses) | Features planejadas, melhorias | Média (50-80%) |
| **Later** (6-12 meses) | Exploração, visão de futuro | Baixa (<50%) |

### Métricas de Produto

#### OKRs (Objectives & Key Results)

```
OBJETIVO: Aumentar o engajamento dos usuários com o mapa

KR1: Aumentar tempo médio de sessão de 2min para 5min
KR2: Alcançar 70% de usuários que interagem com ≥3 marcadores por sessão
KR3: Atingir NPS de 50+ entre usuários ativos
```

#### KPIs Essenciais

| KPI | O que Mede | Meta Exemplo |
|-----|-----------|-------------|
| **DAU/MAU** | Engajamento (Daily/Monthly Active Users) | DAU/MAU > 30% |
| **Retention D7** | Retenção após 7 dias | > 40% |
| **CAC** | Custo de Aquisição de Cliente | < R$ 15 |
| **LTV** | Lifetime Value do cliente | LTV > 3x CAC |
| **Churn** | Taxa de cancelamento/abandono | < 5% mensal |
| **NPS** | Satisfação e recomendação | > 50 |
| **Time to Value** | Tempo até o "aha moment" | < 30 segundos |

### Frameworks de Priorização

#### RICE Score

```
RICE = (Reach × Impact × Confidence) / Effort
```

| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|-----------|--------|------|
| Busca de locais | 5000 | 3 | 90% | 3 semanas | 4500 |
| Modo offline | 2000 | 2 | 70% | 5 semanas | 560 |
| Rotas walking | 3000 | 2 | 80% | 4 semanas | 1200 |
| Dark mode | 4000 | 1 | 95% | 1 semana | 3800 |

#### MoSCoW

| Categoria | Significado | Exemplo |
|-----------|------------|---------|
| **Must** | Obrigatório para lançamento | Mapa interativo, marcadores |
| **Should** | Importante, pode esperar | Busca de locais, filtros |
| **Could** | Desejável, se houver tempo | Dark mode, compartilhamento |
| **Won't** | Fora deste ciclo | Realidade aumentada, social |

#### WSJF (Weighted Shortest Job First) — SAFe

```
WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size
```

Prioriza o que gera mais valor no menor tempo.

---

## 2. Gerente de Projetos

### O Papel do Project Manager / Scrum Master / Tech Lead

| Papel | Foco Principal | Pergunta-Chave |
|-------|---------------|---------------|
| **Project Manager** | Entrega no prazo, escopo e custo | "Estamos no caminho certo?" |
| **Scrum Master** | Processo, remoção de impedimentos | "O que está bloqueando o time?" |
| **Tech Lead** | Arquitetura, qualidade técnica | "Como construir da melhor forma?" |

### Metodologias Ágeis vs. Tradicionais

#### Scrum

```
Sprint (2 semanas)
┌──────────────────────────────────────────────┐
│ Planning → Daily → Dev → Review → Retro      │
│                                               │
│ Artefatos:                                    │
│ • Product Backlog (PO)                        │
│ • Sprint Backlog (Time)                       │
│ • Incremento (Entrega)                        │
│                                               │
│ Cerimônias:                                   │
│ • Sprint Planning (início)                    │
│ • Daily Standup (diário, 15min)               │
│ • Sprint Review (demo ao stakeholder)         │
│ • Sprint Retrospective (melhoria contínua)    │
└──────────────────────────────────────────────┘
```

#### Kanban

```
┌───────────┬───────────┬───────────┬───────────┬───────────┐
│  Backlog  │  To Do    │  In Prog  │  Review   │   Done    │
│           │  (WIP: 3) │  (WIP: 5) │  (WIP: 2) │           │
├───────────┼───────────┼───────────┼───────────┼───────────┤
│ Feature X │ Story A   │ Story C   │ Story E   │ Story G   │
│ Feature Y │ Story B   │ Story D   │           │ Story H   │
│ Bug Z     │           │ Bug W     │           │           │
└───────────┴───────────┴───────────┴───────────┴───────────┘

Regras:
• Limitar WIP (Work In Progress) por coluna
• Pull system (puxar quando há capacidade)
• Otimizar lead time (tempo do pedido até a entrega)
```

#### Waterfall / PMBOK (Tradicional)

```
Iniciação → Planejamento → Execução → Monitoramento → Encerramento
                                          ↕
                                    (controle contínuo)
```

**Quando usar:** Projetos com escopo fixo, requisitos estáveis, regulamentação rígida.

### Gestão de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|-------------|---------|-----------|
| API Google Maps ficar indisponível | Baixa | Alto | Cache offline + fallback Apple Maps |
| Performance degradada com muitos markers | Média | Médio | Clustering + lazy loading |
| Rejeição da App Store/Play Store | Baixa | Alto | Seguir guidelines, testes prévios |
| Turnover de desenvolvedor chave | Média | Alto | Documentação + pair programming |

### Velocity e Capacidade

```
Velocity = Story Points entregues por sprint (média últimas 3 sprints)

Exemplo:
Sprint 1: 21 pts
Sprint 2: 18 pts  
Sprint 3: 24 pts
Velocity média: 21 pts/sprint

Previsão para 45 pts restantes: ~2 sprints
```

### Gestão de Stakeholders

**Matriz Poder × Interesse:**

```
            Alto Poder
                │
    MANTER      │      GERENCIAR
    SATISFEITO  │      DE PERTO
                │
  ──────────────┼──────────────── Alto Interesse
                │
    MONITORAR   │      MANTER
                │      INFORMADO
                │
            Baixo Poder
```

---

## 3. Guia de Carreira

### Competências por Papel

#### Business Analyst

| Competência | Nível Júnior | Nível Pleno | Nível Sênior |
|-------------|-------------|------------|-------------|
| Elicitação | Entrevistas básicas | Workshops, Event Storming | Facilitação avançada |
| Documentação | User Stories simples | Casos de Uso, fluxos | Especificações complexas |
| Ferramentas | Jira, Confluence | Miro, Figma, SQL básico | Modelagem de dados |
| Comunicação | Reporta descobertas | Apresenta para stakeholders | Influencia decisões |
| Domínio | Aprende o negócio | Entende processos | Referência no domínio |

#### Product Owner / Product Manager

| Competência | Nível Júnior | Nível Pleno | Nível Sênior |
|-------------|-------------|------------|-------------|
| Estratégia | Executa roadmap dado | Propõe features, valida hipóteses | Define visão, influencia C-level |
| Métricas | Acompanha KPIs | Define e analisa métricas | Cria frameworks de medição |
| Priorização | Ordena backlog | Aplica RICE/MoSCoW | Equilibra múltiplos produtos |
| Discovery | Entrevistas com usuários | Testes A/B, protótipos | Research ops, data-driven |
| Técnico | Entende APIs e fluxos | Escreve specs técnicas | Define arquitetura de produto |

#### Gerente de Projetos

| Competência | Nível Júnior | Nível Pleno | Nível Sênior |
|-------------|-------------|------------|-------------|
| Planejamento | Cronograma simples | Múltiplas equipes, dependências | Portfolio, programa |
| Riscos | Identifica riscos óbvios | Análise quantitativa, mitigação | Gestão de crise |
| Stakeholders | Reporta status | Negocia escopo e prazo | Influencia executivos |
| Metodologia | Segue processo definido | Adapta metodologia ao contexto | Cria frameworks |
| Liderança | Coordena tarefas | Lidera equipe, remove bloqueios | Mentora outros PMs |

### Passo a Passo para Transição de Carreira

#### De Dev para BA

1. **Desenvolva escuta ativa** — Aprenda a perguntar "por quê?" antes de "como?"
2. **Estude domínios de negócio** — Finanças, saúde, logística, varejo
3. **Aprenda UML e BPMN** — Modelagem de processos e sistemas
4. **Pratique documentação** — Escreva User Stories e critérios de aceite
5. **Obtenha certificação** — CBAP (IIBA) ou PMI-PBA
6. **Contribua como BA** — Ofereça-se para escrever requisitos no seu time atual

#### De Dev/BA para PO/PM

1. **Pense em valor, não em features** — Sempre pergunte "qual problema isso resolve?"
2. **Aprenda métricas** — Analytics, A/B testing, cohort analysis
3. **Estude Product Discovery** — Jobs to Be Done, Design Thinking
4. **Pratique priorização** — Aplique RICE/MoSCoW no seu backlog
5. **Comunique com dados** — Apresentações baseadas em métricas, não opiniões
6. **Certificações** — CSPO (Scrum Alliance), Product School

#### De Dev/BA para Gerente de Projetos

1. **Aprenda gestão de tempo** — Cronograma, Gantt, Critical Path
2. **Estude riscos** — Análise qualitativa e quantitativa
3. **Pratique liderança servidora** — Remova impedimentos, não dê ordens
4. **Entenda financeiro** — Budget, ROI, TCO
5. **Certificações** — PSM (Scrum.org), PMP (PMI), SAFe
6. **Lidere projetos menores** — Ganhe experiência progressivamente

### Postura Profissional

| Princípio | Prática |
|-----------|---------|
| **Data-driven** | Baseie decisões em dados, não em achismos |
| **Customer-centric** | O usuário final é a bússola |
| **Transparência** | Comunique problemas cedo, não esconda riscos |
| **Continuous learning** | O mercado muda rápido — atualize-se constantemente |
| **Influência sem autoridade** | Convença com argumentos, não com cargo |
| **Ownership** | Assuma responsabilidade pelo resultado, não apenas pela tarefa |
| **Collaboration** | Sucesso é do time, fracasso é para aprender junto |

---

## Referências

- Inspired (Marty Cagan): https://www.svpg.com/inspired-how-to-create-products-customers-love/
- Shape Up (Basecamp): https://basecamp.com/shapeup
- Scrum Guide: https://scrumguides.org/
- PMBOK Guide (PMI): https://www.pmi.org/pmbok-guide-standards
- Product School: https://www.productschool.com/
- SAFe Framework: https://scaledagileframework.com/
- Mind the Product: https://www.mindtheproduct.com/
- IIBA BABOK: https://www.iiba.org/babok-guide/
