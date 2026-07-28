# 06 - Guia Completo de QA / QE (Quality Assurance & Quality Engineering)

## Sumário

1. [Papel do QA/QE](#1-papel-do-qaqe)
2. [Tipos de Teste](#2-tipos-de-teste)
3. [Técnicas de Design de Testes](#3-técnicas-de-design-de-testes)
4. [Estratégia e Plano de Teste](#4-estratégia-e-plano-de-teste)
5. [Aplicação Prática nos Projetos](#5-aplicação-prática-nos-projetos)

---

## 1. Papel do QA/QE

### Analista de QA vs. Test Engineer (QE)

| Aspecto | Analista de QA | Quality Engineer (QE) |
|---------|---------------|----------------------|
| **Foco** | Processos, prevenção de defeitos, documentação | Automação, tooling, infraestrutura de testes |
| **Atividades** | Planos de teste, casos de teste, execução manual, revisão de requisitos | Scripts de automação, CI/CD pipelines, frameworks de teste |
| **Ferramentas** | Jira, TestRail, Zephyr, planilhas | Playwright, Cypress, Jest, Selenium, k6 |
| **Perfil** | Mais analítico e orientado ao negócio | Mais técnico e orientado à engenharia |
| **Entregáveis** | Relatórios de qualidade, métricas, RTM | Suítes automatizadas, relatórios de cobertura, dashboards |

### Atuação no SDLC/STLC

```
┌─────────────────────────────────────────────────────────────────┐
│                    SOFTWARE DEVELOPMENT LIFECYCLE                │
├──────────┬──────────┬──────────┬──────────┬──────────┬─────────┤
│ Requisitos│ Design  │ Develop  │  Test    │ Deploy   │ Maintain│
├──────────┼──────────┼──────────┼──────────┼──────────┼─────────┤
│ QA atua: │ QA atua: │ QA atua: │ QA atua: │ QA atua: │QA atua: │
│ Revisão  │ Review   │ Unit     │ Execução │ Smoke    │ Regres- │
│ de req.  │ de arch. │ tests    │ completa │ tests    │ são     │
│ RTM      │ Testabi- │ TDD/BDD  │ Report   │ Sanity   │ Monitor │
│          │ lidade   │          │          │          │         │
└──────────┴──────────┴──────────┴──────────┴──────────┴─────────┘
```

**Shift-Left Testing:** QA participa desde os requisitos, não apenas na fase de teste. Quanto mais cedo um defeito é encontrado, menor o custo de correção (regra 1:10:100).

---

## 2. Tipos de Teste

### 2.1 Testes Funcionais

Validam se o sistema faz o que deveria fazer conforme os requisitos.

| Tipo | Objetivo | Quando Executar |
|------|----------|----------------|
| **Unitário** | Testar funções/métodos isoladamente | A cada commit |
| **Integração** | Testar comunicação entre módulos | A cada PR/merge |
| **Sistema** | Testar o sistema completo end-to-end | A cada release candidate |
| **Aceitação (UAT)** | Validar critérios de aceite do negócio | Antes do go-live |

### 2.2 Testes Não-Funcionais

Validam COMO o sistema se comporta (qualidade de serviço).

| Tipo | O que Mede | Ferramentas |
|------|-----------|-------------|
| **Performance** | Tempo de resposta, throughput | k6, JMeter, Artillery |
| **Carga (Load)** | Comportamento sob carga normal | k6, Gatling |
| **Estresse** | Ponto de quebra do sistema | k6, Locust |
| **Segurança** | Vulnerabilidades (OWASP Top 10) | OWASP ZAP, Burp Suite |
| **Acessibilidade (a11y)** | Conformidade WCAG 2.1 | axe-core, Lighthouse |
| **Usabilidade** | Experiência do usuário | Testes com usuários, heurísticas |

### 2.3 Testes de Suporte ao Processo

| Tipo | Objetivo | Escopo |
|------|----------|--------|
| **Smoke (Fumaça)** | Verificar se build não está "quebrado" | Funcionalidades críticas |
| **Sanidade** | Verificar correção específica após fix | Área alterada |
| **Regressão** | Garantir que nada quebrou após mudanças | Suite completa |
| **Exploratório** | Descobrir defeitos sem roteiro fixo | Áreas de risco |

---

## 3. Técnicas de Design de Testes

### 3.1 Particionamento por Equivalência

Divide os dados de entrada em classes onde o comportamento é equivalente.

**Exemplo (campo idade):**
- Classe válida: 1–120
- Classe inválida inferior: ≤ 0
- Classe inválida superior: > 120

**Casos de teste mínimos:** Um valor de cada classe (ex: -1, 25, 150)

### 3.2 Análise de Valor Limite (BVA)

Testa nos limites das classes de equivalência, onde erros são mais frequentes.

**Exemplo (campo idade 1-120):**
- Limites: 0, 1, 2, 119, 120, 121

### 3.3 Tabela de Decisão

Para combinações de condições que afetam o resultado.

| Condição | R1 | R2 | R3 | R4 |
|----------|----|----|----|----|
| Usuário logado | S | S | N | N |
| Produto em estoque | S | N | S | N |
| **Resultado** | Compra OK | Sem estoque | Fazer login | Fazer login |

### 3.4 Transição de Estados

Modela comportamento que depende do estado atual + evento.

```
[Disponível] --reservar--> [Reservado] --confirmar--> [Confirmado]
     ↑                          |                          |
     |                     cancelar                    cancelar
     |                          |                          |
     +----------<--------------+----------<--------------+
```

### 3.5 Testes Baseados em Casos de Uso

Derivam cenários de teste dos fluxos principais e alternativos dos casos de uso.

- **Fluxo principal:** Caminho feliz (Happy Path)
- **Fluxos alternativos:** Variações válidas
- **Fluxos de exceção:** Erros e edge cases

---

## 4. Estratégia e Plano de Teste

### 4.1 Estratégia de Testes

Documento de alto nível que define a abordagem geral:

```
ESTRATÉGIA DE TESTES
├── Escopo (o que será e não será testado)
├── Tipos de teste aplicáveis
├── Critérios de entrada e saída
├── Ambientes de teste
├── Ferramentas e infraestrutura
├── Riscos e mitigações
├── Métricas e KPIs de qualidade
└── Responsabilidades (RACI)
```

### 4.2 Matriz de Rastreabilidade (RTM)

Garante que todo requisito tem ao menos um caso de teste.

| Requisito | Caso de Teste | Status | Prioridade |
|-----------|--------------|--------|-----------|
| RF-001: Login com email | CT-001, CT-002, CT-003 | Aprovado | Alta |
| RF-002: Buscar localização | CT-010, CT-011 | Pendente | Alta |
| RNF-001: Resposta < 2s | CT-050 | Em execução | Média |

### 4.3 Gerenciamento de Defeitos

**Ciclo de vida do Bug:**
```
Novo → Atribuído → Em Correção → Corrigido → Verificado → Fechado
                         ↓                        ↓
                    Reaberto ←──────────── Rejeitado
```

**Informações de um bom Bug Report:**
1. Título descritivo
2. Ambiente (OS, browser, versão)
3. Pré-condições
4. Passos para reproduzir
5. Resultado esperado vs. obtido
6. Evidências (screenshots, logs)
7. Severidade e Prioridade

---

## 5. Aplicação Prática nos Projetos

### Matriz de Testes por Projeto

#### 01-bootstrap-web (Aplicação Web)

| Tipo de Teste | Aplicação | Ferramenta Sugerida |
|--------------|-----------|-------------------|
| Funcional UI | Navegação, modal, formulário, carousel | Playwright |
| Responsividade | Grid em múltiplos breakpoints | Playwright (viewports) |
| Acessibilidade | ARIA, contraste, navegação por teclado | axe-core, Lighthouse |
| Cross-browser | Chrome, Firefox, Safari | Playwright (browsers) |
| Visual Regression | Screenshots comparativas | Playwright + pixelmatch |
| Performance | Tempo de carregamento, LCP, CLS | Lighthouse CI |
| Smoke | Página carrega sem erros JS | Playwright |

#### 04-seo-audit-tool (Script Python)

| Tipo de Teste | Aplicação | Ferramenta Sugerida |
|--------------|-----------|-------------------|
| Unitário | Cada método do SEOAuditor isoladamente | pytest |
| Integração | Fluxo completo com HTML real | pytest + fixtures |
| Mutação | Validar qualidade dos testes | mutmut |
| BVA | Limites de caracteres (title: 30-60) | pytest parametrize |
| Equivalência | Classes de HTML válido/inválido/vazio | pytest |
| Regressão | Garantir estabilidade após refatorações | pytest + CI |

#### 05-expo-maps-app (App Mobile)

| Tipo de Teste | Aplicação | Ferramenta Sugerida |
|--------------|-----------|-------------------|
| Unitário | Funções de cálculo, formatação | Jest |
| Componente | Renderização do MapView, Markers | React Native Testing Library |
| Integração | Fluxo de permissão + localização | Detox ou Maestro |
| E2E Mobile | Interação completa no dispositivo | Detox |
| Performance | Tempo de renderização do mapa | React Native Performance |
| Usabilidade | Gestos, zoom, tap em markers | Teste manual exploratório |

---

## Referências

- ISTQB Foundation Syllabus: https://www.istqb.org/certifications/certified-tester-foundation-level
- Software Testing Help: https://www.softwaretestinghelp.com/
- Ministry of Testing: https://www.ministryoftesting.com/
- Google Testing Blog: https://testing.googleblog.com/
- Playwright Docs: https://playwright.dev/docs/intro
- pytest Docs: https://docs.pytest.org/
