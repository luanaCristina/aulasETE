# 08 - Automação de Testes E2E e UI

## Descrição

Suítes de automação de testes para os projetos existentes usando Playwright,
aplicando o padrão Page Object Model (POM) e cobrindo funcionalidades críticas.

## A Pirâmide de Testes

```
           /\
          /  \        E2E / UI Tests (poucos, lentos, caros)
         /    \       Testam fluxos completos do usuário
        /------\
       /        \     Integration Tests (médios)
      /          \    Testam comunicação entre módulos
     /------------\
    /              \   Unit Tests (muitos, rápidos, baratos)
   /________________\  Testam funções isoladamente
```

**Regra de ouro:** Quanto mais alto na pirâmide, menos testes (mais lentos e frágeis).
Quanto mais baixo, mais testes (rápidos e estáveis).

## Por que Automatizar?

| Benefício | Impacto |
|-----------|---------|
| **Velocidade** | Execução em minutos vs. horas de teste manual |
| **Consistência** | Mesmo teste, mesmo resultado, sempre |
| **Regressão** | Detecta quebras a cada commit automaticamente |
| **CI/CD** | Integra no pipeline de deploy |
| **Confiança** | Equipe deploy com segurança |
| **Documentação viva** | Testes documentam o comportamento esperado |

## Escolha do Framework: Playwright

| Critério | Playwright | Cypress | Selenium |
|----------|-----------|---------|----------|
| Multi-browser | ✅ Chrome, Firefox, Safari | ⚠️ Chrome, Firefox, Edge | ✅ Todos |
| Velocidade | ⚡ Muito rápido | ⚡ Rápido | 🐢 Mais lento |
| Mobile emulation | ✅ Nativo | ❌ Limitado | ⚠️ Via grid |
| Paralelismo | ✅ Nativo | ⚠️ Pago | ⚠️ Configuração |
| Auto-wait | ✅ Inteligente | ✅ Bom | ❌ Manual |
| API testing | ✅ Integrado | ✅ cy.request | ❌ Não |
| Linguagens | JS/TS, Python, Java, .NET | JS/TS | Todas |

## Estrutura

```
08-test-automation/
├── playwright.config.ts          # Configuração do Playwright
├── package.json                  # Dependências
├── pages/
│   ├── BasePage.ts              # Page Object base (métodos compartilhados)
│   ├── HomePage.ts              # Page Object da página principal
│   ├── CarouselComponent.ts     # Componente do Carousel
│   └── ModalComponent.ts       # Componente do Modal
├── tests/
│   ├── homepage.spec.ts         # Testes da página principal
│   ├── carousel.spec.ts        # Testes do Carousel
│   ├── responsive.spec.ts      # Testes de responsividade
│   ├── accessibility.spec.ts   # Testes de acessibilidade
│   └── api-maps.spec.ts        # Testes de API para Maps
└── README.md                    # Este arquivo
```

## Como Executar

### 1. Instalar dependências

```bash
cd aula/guias-fullstack/08-test-automation/
npm install
npx playwright install
```

### 2. Servir a aplicação web (em outro terminal)

```bash
cd ../01-bootstrap-web/
python3 -m http.server 8080
```

### 3. Executar testes

```bash
# Todos os testes (headless)
npx playwright test

# Com interface visual (modo headed)
npx playwright test --headed

# Modo UI interativo (recomendado para debug)
npx playwright test --ui

# Teste específico
npx playwright test tests/carousel.spec.ts

# Gerar relatório HTML
npx playwright show-report
```

### 4. Executar em múltiplos browsers

```bash
# Todos os browsers
npx playwright test --project=chromium --project=firefox --project=webkit
```

## Padrão Page Object Model (POM)

O POM encapsula a interação com a UI em classes reutilizáveis:

```
Teste → chama → Page Object → interage com → Página Real
```

**Benefícios:**
- Manutenção centralizada (seletor muda? Atualiza em 1 lugar)
- Código de teste legível e focado no comportamento
- Reutilização entre múltiplos testes

## Referências

- Playwright Docs: https://playwright.dev/docs/intro
- Page Object Model: https://playwright.dev/docs/pom
- Accessibility Testing: https://playwright.dev/docs/accessibility-testing
- CI Integration: https://playwright.dev/docs/ci
