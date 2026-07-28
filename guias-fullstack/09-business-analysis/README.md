# 09 - Guia Executivo de Business Analysis (BA)

## Sumário

1. [O Papel do BA](#1-o-papel-do-ba)
2. [Levantamento e Gestão de Requisitos](#2-levantamento-e-gestão-de-requisitos)
3. [Modelagem e Documentação](#3-modelagem-e-documentação)
4. [Aplicação Prática: Expo Maps App](#4-aplicação-prática-expo-maps-app)

---

## 1. O Papel do BA

### O que faz um Business Analyst?

O BA é a **ponte** entre as necessidades do negócio e a equipe técnica. Ele traduz
problemas de negócio em requisitos claros e acionáveis para desenvolvimento.

```
┌───────────┐        ┌─────────┐        ┌───────────────┐
│ Stakeholder│ ──→   │   BA    │  ──→   │ Equipe Técnica│
│ (Negócio)  │ ←──   │ (Ponte) │  ←──   │ (Dev/QA/UX)  │
└───────────┘        └─────────┘        └───────────────┘
     Problemas            Requisitos          Soluções
     Necessidades         User Stories        Software
     Restrições           Protótipos          Entregas
```

### Responsabilidades Principais

| Área | Atividades |
|------|-----------|
| **Elicitação** | Entrevistas, workshops, observação, análise de documentos |
| **Análise** | Identificar gaps, conflitos, dependências entre requisitos |
| **Documentação** | User Stories, Casos de Uso, fluxos, diagramas |
| **Validação** | Garantir que a solução atende a necessidade real |
| **Comunicação** | Facilitar entendimento entre áreas técnicas e não-técnicas |
| **Priorização** | Ajudar PO/PM na priorização com visão de negócio |

### BA vs. PO vs. PM

| Aspecto | Business Analyst | Product Owner | Project Manager |
|---------|-----------------|---------------|-----------------|
| **Foco** | Requisitos e processos | Valor do produto | Prazo e execução |
| **Pergunta** | "O que precisa ser feito?" | "O que gera mais valor?" | "Quando estará pronto?" |
| **Entrega** | Especificações, fluxos | Backlog priorizado | Cronograma, status |
| **Stakeholder** | Usuários e negócio | Negócio e time | Todos |

---

## 2. Levantamento e Gestão de Requisitos

### 2.1 Técnicas de Elicitação

| Técnica | Quando Usar | Vantagem |
|---------|------------|----------|
| **Entrevistas** | Início do projeto, poucos stakeholders | Profundidade |
| **Workshops** | Múltiplos stakeholders, alinhamento | Consenso rápido |
| **Benchmarking** | Produto novo, entender mercado | Referências de mercado |
| **Event Storming** | Sistemas complexos, domínios novos | Visão holística |
| **Shadowing** | Processos existentes, entender "como é hoje" | Realidade do usuário |
| **Questionários** | Muitos usuários, dados quantitativos | Escala |
| **Análise de Documentos** | Sistemas legados, migrações | Base existente |
| **Prototipação** | Requisitos visuais, UX | Feedback rápido |

### 2.2 Tipos de Requisitos

#### Requisitos Funcionais (RF)

Descrevem **O QUE** o sistema deve fazer.

| ID | Requisito | Prioridade |
|----|-----------|-----------|
| RF-001 | O sistema deve exibir um mapa interativo | Alta |
| RF-002 | O usuário deve poder buscar localizações | Alta |
| RF-003 | O sistema deve exibir marcadores nos pontos de interesse | Alta |
| RF-004 | O usuário deve poder visualizar detalhes de cada marcador | Média |
| RF-005 | O sistema deve centralizar o mapa na localização do usuário | Média |

#### Requisitos Não-Funcionais (RNF)

Descrevem **COMO** o sistema deve se comportar (qualidade).

| ID | Requisito | Categoria |
|----|-----------|-----------|
| RNF-001 | O mapa deve carregar em menos de 3 segundos | Performance |
| RNF-002 | O app deve funcionar em iOS 15+ e Android 10+ | Compatibilidade |
| RNF-003 | A localização deve ter precisão de até 10 metros | Precisão |
| RNF-004 | O app deve funcionar offline (cache do último mapa) | Disponibilidade |
| RNF-005 | Dados de localização não devem ser compartilhados | Segurança |

#### Regras de Negócio (RN)

Descrevem **restrições e condições** que governam o comportamento.

| ID | Regra |
|----|-------|
| RN-001 | A permissão de localização deve ser solicitada antes de acessar GPS |
| RN-002 | Se a permissão for negada, exibir mapa na localização padrão (São Paulo) |
| RN-003 | Marcadores devem ser agrupados (clustered) quando zoom < 12 |
| RN-004 | Máximo de 50 marcadores visíveis simultaneamente por performance |

---

## 3. Modelagem e Documentação

### 3.1 Caso de Uso: Buscar Localização no Mapa

```
CASO DE USO: Buscar Localização
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ator Principal: Usuário do App
Pré-condição: App aberto com mapa carregado
Pós-condição: Mapa centralizado na localização buscada

FLUXO PRINCIPAL:
1. Usuário toca no campo de busca
2. Sistema exibe teclado e campo de texto
3. Usuário digita o endereço ou ponto de interesse
4. Sistema exibe sugestões em tempo real (autocomplete)
5. Usuário seleciona uma sugestão
6. Sistema centraliza o mapa na coordenada selecionada
7. Sistema exibe um marcador na localização

FLUXOS ALTERNATIVOS:
3a. Usuário digita coordenadas diretamente (lat, lng)
    → Sistema valida o formato e centraliza no ponto

5a. Nenhuma sugestão corresponde à busca
    → Sistema exibe mensagem "Nenhum resultado encontrado"

FLUXO DE EXCEÇÃO:
4a. Sem conexão com internet
    → Sistema exibe mensagem "Sem conexão. Tente novamente."
    → Busca offline no cache local (se disponível)
```

### 3.2 User Stories com Critérios de Aceite (BDD/Gherkin)

Formato: **Como [persona], eu quero [ação], para que [benefício].**

---

## 4. Aplicação Prática: Expo Maps App

### User Story 1: Visualizar Mapa

```
COMO usuário do aplicativo,
EU QUERO ver um mapa interativo ao abrir o app,
PARA QUE eu possa explorar pontos de interesse na minha região.
```

**Critérios de Aceite (BDD):**

```gherkin
Feature: Visualização do Mapa Interativo

  Scenario: Mapa carrega com localização do usuário
    Given o usuário concedeu permissão de localização
    And o GPS está ativo
    When o aplicativo é aberto
    Then o mapa deve ser exibido centralizado na posição atual do usuário
    And um indicador azul deve mostrar a posição do usuário

  Scenario: Mapa carrega sem permissão de localização
    Given o usuário NÃO concedeu permissão de localização
    When o aplicativo é aberto
    Then o mapa deve ser exibido na localização padrão (São Paulo)
    And uma mensagem deve informar "Permissão de localização negada"

  Scenario: Usuário interage com o mapa (zoom e pan)
    Given o mapa está carregado
    When o usuário faz pinch-to-zoom
    Then o nível de zoom deve aumentar ou diminuir suavemente
    And os marcadores devem se reposicionar conforme a nova visão
```

### User Story 2: Interagir com Marcadores

```
COMO usuário do aplicativo,
EU QUERO tocar em marcadores no mapa,
PARA QUE eu possa ver informações sobre cada ponto de interesse.
```

**Critérios de Aceite (BDD):**

```gherkin
Feature: Interação com Marcadores

  Scenario: Exibir informações ao tocar em um marcador
    Given o mapa está carregado com marcadores visíveis
    When o usuário toca em um marcador
    Then um callout deve aparecer com o título do local
    And o callout deve mostrar a descrição do ponto de interesse

  Scenario: Marcadores customizados por categoria
    Given existem marcadores de diferentes categorias (museus, parques, restaurantes)
    When o mapa é exibido
    Then cada categoria deve ter uma cor de pin diferente
    And a legenda de cores deve ser acessível

  Scenario: Fechar callout ao tocar fora
    Given um callout está aberto sobre um marcador
    When o usuário toca em uma área vazia do mapa
    Then o callout deve ser fechado
```

### User Story 3: Centralizar na Minha Localização

```
COMO usuário do aplicativo,
EU QUERO um botão para voltar à minha localização,
PARA QUE eu possa me reorientar após navegar pelo mapa.
```

**Critérios de Aceite (BDD):**

```gherkin
Feature: Botão de Centralização

  Scenario: Centralizar com GPS ativo
    Given o usuário navegou para uma região diferente no mapa
    And o GPS está ativo com posição atualizada
    When o usuário toca no botão de centralização (📌)
    Then o mapa deve animar suavemente até a posição atual
    And o zoom deve retornar ao nível padrão (0.01 delta)

  Scenario: Centralizar sem GPS
    Given o GPS está desativado ou sem sinal
    When o usuário toca no botão de centralização
    Then uma mensagem deve informar "Aguardando localização do GPS..."
    And o mapa não deve se mover

  Scenario: Atualização de posição em tempo real
    Given o usuário está em movimento
    When a posição GPS é atualizada
    Then o indicador azul deve se mover para a nova posição
    And o info box deve atualizar as coordenadas exibidas
```

### User Story 4: Visualizar Coordenadas

```
COMO usuário do aplicativo,
EU QUERO ver minhas coordenadas atuais no rodapé do mapa,
PARA QUE eu saiba exatamente onde estou (útil para emergências).
```

**Critérios de Aceite (BDD):**

```gherkin
Feature: Exibição de Coordenadas

  Scenario: Exibir coordenadas quando localização disponível
    Given a permissão de localização foi concedida
    And o GPS retornou uma posição válida
    When o info box é renderizado
    Then deve exibir "📍 Lat: -XX.XXXX | Lng: -XX.XXXX"
    And deve exibir a quantidade de marcadores no mapa

  Scenario: Exibir mensagem de carregamento
    Given a permissão foi concedida
    And o GPS ainda não retornou posição
    When o info box é renderizado
    Then deve exibir "🔍 Obtendo localização..."

  Scenario: Exibir erro de permissão
    Given a permissão de localização foi negada
    When o info box é renderizado
    Then deve exibir "⚠️ Permissão de localização negada"
```

---

## Referências

- BABOK Guide (IIBA): https://www.iiba.org/babok-guide/
- Agile Alliance — User Stories: https://www.agilealliance.org/glossary/user-stories/
- BDD com Gherkin: https://cucumber.io/docs/gherkin/
- Event Storming: https://www.eventstorming.com/
- IIBA Certifications: https://www.iiba.org/business-analysis-certifications/
