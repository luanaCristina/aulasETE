Que projeto incrível para demonstrar na prática a união entre **Engenharia de Software (Agile/Scrum/Git)**, **Design/UI** e **Desenvolvimento Web Front-End (HTML/CSS/JS)**!

Abaixo, estruturei um guia completo, pronto para ser apresentado em sala de aula, dividindo o processo em etapas bem definidas.

---

## 🎨 Parte 1: Código Completo da Calculadora (HTML, CSS e JS)

O código abaixo implementa uma calculadora inspirada no design do Windows, utilizando uma paleta pastel em **Rosa (`#ffc6ff`), Purple (`#7b2cbf`) e Branco (`#ffffff`)**. Todos os trechos de código estão etiquetados com os **IDs dos Cards do Jira** correspondentes.

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora Windows - Pink & Purple Edition</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- [CALC-01] HU01: Interface Principal da Calculadora -->
  <div class="calculator-container">
    
    <!-- Barra de Título / Cabeçalho da Janela estilo Windows -->
    <div class="calculator-header">
      <span class="app-title">Calculadora Padrão</span>
      <div class="window-controls">
        <button class="win-btn minimize" title="Minimizar">—</button>
        <button class="win-btn maximize" title="Maximizar">□</button>
        <button class="win-btn close" title="Fechar">✕</button>
      </div>
    </div>

    <!-- Tela do Display (Histórico e Valor Atual) -->
    <div class="display-container">
      <div id="history-display" class="history-display"></div>
      <div id="current-display" class="current-display">0</div>
    </div>

    <!-- Teclado de Botões da Calculadora -->
    <div class="keypad">
      <!-- Linha 1 -->
      <button class="btn fn-btn" data-action="clear-entry">CE</button>
      <button class="btn fn-btn" data-action="clear">C</button>
      <button class="btn fn-btn" data-action="backspace">⌫</button>
      <button class="btn op-btn" data-action="op" data-value="/">÷</button>

      <!-- Linha 2 -->
      <button class="btn num-btn" data-value="7">7</button>
      <button class="btn num-btn" data-value="8">8</button>
      <button class="btn num-btn" data-value="9">9</button>
      <button class="btn op-btn" data-action="op" data-value="*">×</button>

      <!-- Linha 3 -->
      <button class="btn num-btn" data-value="4">4</button>
      <button class="btn num-btn" data-value="5">5</button>
      <button class="btn num-btn" data-value="6">6</button>
      <button class="btn op-btn" data-action="op" data-value="-">-</button>

      <!-- Linha 4 -->
      <button class="btn num-btn" data-value="1">1</button>
      <button class="btn num-btn" data-value="2">2</button>
      <button class="btn num-btn" data-value="3">3</button>
      <button class="btn op-btn" data-action="op" data-value="+">+</button>

      <!-- Linha 5 -->
      <button class="btn fn-btn" data-action="toggle-sign">±</button>
      <button class="btn num-btn" data-value="0">0</button>
      <button class="btn fn-btn" data-action="decimal">,</button>
      <button class="btn equals-btn" data-action="equals">=</button>
    </div>

  </div>

  <script src="script.js"></script>
</body>
</html>

```

---

### 🎨 `style.css`

```css
/* ==========================================================================
   [CALC-01] HU01: Estilização Visual da Calculadora (Rosa, Purple e Branco)
   ========================================================================== */

:root {
  --bg-gradient-start: #3c096c;
  --bg-gradient-end: #10002b;
  --calc-bg: #240046;
  --pink-primary: #ff85a2;
  --pink-light: #ffc6ff;
  --purple-main: #7b2cbf;
  --purple-dark: #5a189a;
  --white: #ffffff;
  --gray-text: #e0aaff;
  --display-bg: #10002b;
  --border-color: #9d4edd;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
}

body {
  background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculator-container {
  width: 340px;
  background-color: var(--calc-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Header Estilo Windows */
.calculator-header {
  background-color: var(--purple-dark);
  color: var(--pink-light);
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.window-controls .win-btn {
  background: none;
  border: none;
  color: var(--pink-light);
  padding: 2px 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.window-controls .win-btn:hover {
  background-color: rgba(255, 198, 255, 0.2);
}

.window-controls .win-btn.close:hover {
  background-color: #ff4d6d;
  color: var(--white);
}

/* Display */
.display-container {
  background-color: var(--display-bg);
  padding: 20px 16px;
  text-align: right;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.history-display {
  color: var(--gray-text);
  font-size: 0.9rem;
  min-height: 1.2rem;
  margin-bottom: 4px;
}

.current-display {
  color: var(--white);
  font-size: 2.5rem;
  font-weight: 600;
  word-wrap: break-word;
  word-break: break-all;
}

/* Teclado */
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 8px;
  background-color: var(--calc-bg);
}

.btn {
  height: 55px;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.num-btn {
  background-color: var(--purple-main);
  color: var(--white);
}

.num-btn:hover {
  background-color: #9d4edd;
}

.op-btn, .fn-btn {
  background-color: rgba(255, 198, 255, 0.15);
  color: var(--pink-light);
}

.op-btn:hover, .fn-btn:hover {
  background-color: rgba(255, 198, 255, 0.3);
}

.equals-btn {
  background-color: var(--pink-primary);
  color: var(--calc-bg);
  font-weight: bold;
}

.equals-btn:hover {
  background-color: #ffb3c1;
  box-shadow: 0 0 10px var(--pink-primary);
}

.btn:active {
  transform: scale(0.96);
}

```

---

### ⚡ `script.js`

```javascript
// ==========================================================================
// Lógica de Operações e Manipulação da Calculadora
// ==========================================================================

class Calculator {
  constructor(historyElement, currentElement) {
    this.historyElement = historyElement;
    this.currentElement = currentElement;
    this.clear();
  }

  // [CALC-02] HU02: Operações Aritméticas Básicas
  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = false;
    this.updateDisplay();
  }

  clearEntry() {
    this.currentOperand = '0';
    this.updateDisplay();
  }

  delete() {
    if (this.shouldResetScreen) return;
    if (this.currentOperand.length === 1 || this.currentOperand === 'Erro') {
      this.currentOperand = '0';
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
    this.updateDisplay();
  }

  appendNumber(number) {
    if (this.currentOperand === 'Erro') this.clear();
    if (this.shouldResetScreen) {
      this.currentOperand = '';
      this.shouldResetScreen = false;
    }
    if (number === ',' && this.currentOperand.includes(',')) return;
    if (this.currentOperand === '0' && number !== ',') {
      this.currentOperand = number;
    } else {
      this.currentOperand += number;
    }
    this.updateDisplay();
  }

  chooseOperation(operation) {
    if (this.currentOperand === 'Erro') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.shouldResetScreen = true;
    this.updateDisplay();
  }

  // [CALC-03] HU03: Tratamento de Erros e Divisão por Zero
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand.replace(',', '.'));
    const current = parseFloat(this.currentOperand.replace(',', '.'));

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        // [CALC-03] Tratamento explicito do erro de Divisão por Zero
        if (current === 0) {
          this.currentOperand = 'Erro';
          this.previousOperand = '';
          this.operation = undefined;
          this.shouldResetScreen = true;
          this.updateDisplay();
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString().replace('.', ',');
    this.operation = undefined;
    this.previousOperand = '';
    this.shouldResetScreen = true;
    this.updateDisplay();
  }

  toggleSign() {
    if (this.currentOperand === '0' || this.currentOperand === 'Erro') return;
    if (this.currentOperand.startsWith('-')) {
      this.currentOperand = this.currentOperand.substring(1);
    } else {
      this.currentOperand = '-' + this.currentOperand;
    }
    this.updateDisplay();
  }

  updateDisplay() {
    this.currentElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.historyElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.historyElement.innerText = '';
    }
  }
}

// Inicialização e Event Listeners
const historyElement = document.getElementById('history-display');
const currentElement = document.getElementById('current-display');
const calculator = new Calculator(historyElement, currentElement);

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');

    if (button.classList.contains('num-btn')) {
      calculator.appendNumber(value);
    } else if (action === 'op') {
      calculator.chooseOperation(value);
    } else if (action === 'equals') {
      calculator.compute();
    } else if (action === 'clear') {
      calculator.clear();
    } else if (action === 'clear-entry') {
      calculator.clearEntry();
    } else if (action === 'backspace') {
      calculator.delete();
    } else if (action === 'decimal') {
      calculator.appendNumber(',');
    } else if (action === 'toggle-sign') {
      calculator.toggleSign();
    }
  });
});

```

---

## 📋 Parte 2: Estrutura do Jira, Board Kanban e Histórias de Usuário (User Stories)

### 📊 Estrutura do Board Kanban no Jira

O quadro é organizado nas seguintes colunas de transição:

1. **Backlog** (Demandas aprovadas e priorizadas)
2. **To Do** (Prontas para iniciar na Sprint)
3. **In Progress** (Em desenvolvimento pelos Desenvolvedores)
4. **Code Review / PR** (Em revisão de código no GitHub)
5. **Testing / QA** (Em validação de testes pelo Analista de Qualidade)
6. **Done** (Aprovadas e prontas para entrega/Demo)

---

### 📝 Cards do Jira: Histórias de Usuário, Critérios de Aceite e Cenários de Testes

#### 🔹 CARD 01: [CALC-01] Interface Visual Windows em Rosa e Purple

* **História de Usuário:**
> **Como** Maya, uma estudante de design que ama personalizações elegantes, **quero** visualizar uma calculadora no estilo Windows com a paleta de cores rosa, purple e branco, **para que** eu possa realizar minhas contas diárias em uma interface agradável e moderna.


* **Critérios de Aceite:**
1. A interface deve possuir um container centralizado simulando uma janela do Windows, com barra de título e botões de controle (`—`, `□`, `✕`).
2. A paleta de cores primária deve utilizar estritamente os tons Rosa (`#ff85a2`/`#ffc6ff`), Purple (`#7b2cbf`/`#240046`) e Branco (`#ffffff`).
3. Todos os botões numerados e de operações devem ter efeitos visuais interativos ao passar o mouse (`hover`) e ao clicar (`active`).
4. O display deve exibir a entrada atual com tamanho fonte mínimo de `2.5rem` com alinhamento à direita.


* **Cenários de Testes:**
* **Caminho Feliz (Happy Path):**
* *Dado* que a página da aplicação é carregada no navegador,
* *Quando* o usuário visualiza o layout,
* *Então* o container do aplicativo exibe o cabeçalho Windows, o display zerado e a paleta nas cores rosa, purple e branco.


* **Caminho Alternativo:**
* *Dado* que o usuário redimensiona a tela do navegador para dispositivos móveis,
* *Quando* a interface se ajusta,
* *Então* a calculadora mantém centralização, proporções dos botões e legibilidade do display.


* **Caminho de Exceção:**
* *Dado* que um estilo CSS falha ao carregar,
* *Quando* a estrutura DOM é renderizada,
* *Então* a calculadora mantém sua estrutura HTML legível sem quebrar o fluxo do teclado.


* **Caminho de Ponta a Ponta (E2E):**
* *Dado* que a aplicação abre,
* *Quando* Maya interage com todos os botões visuais passando o mouse e clicando,
* *Então* todos os elementos respondem com feedback visual (efeito hover e escala) nas cores especificadas.





---

#### 🔹 CARD 02: [CALC-02] Operações Aritméticas Básicas

* **História de Usuário:**
> **Como** Lucas, um profissional autônomo que realiza orçamentos rápidos, **quero** executar operações de soma, subtração, multiplicação e divisão, **para que** eu possa calcular meus custos diários com precisão.


* **Critérios de Aceite:**
1. A calculadora deve permitir a digitação de números e a aplicação encadeada dos operadores `+`, `-`, `×` e `÷`.
2. O botão `=` deve processar a expressão e exibir o resultado final no display principal.
3. O display de histórico superior deve exibir a operação que está sendo realizada antes do pressionamento do botão `=`.
4. O sistema deve suportar números decimais inseridos via vírgula (`,`).


* **Cenários de Testes:**
* **Caminho Feliz (Happy Path):**
* *Dado* que o usuário insere a sequência `1`, `5`, `+`, `5`, `=`,
* *Quando* a tecla `=` é clicada,
* *Então* o display exibe o resultado exato `20`.


* **Caminho Alternativo:**
* *Dado* que o usuário digita `10`, `,`, `5`, `×`, `2`, `=`,
* *Quando* o cálculo é processado,
* *Então* o resultado `21` é exibido corretamente.


* **Caminho de Exceção:**
* *Dado* que o usuário pressiona múltiplas vírgulas em um mesmo número (`5`, `,`, `,`, `2`),
* *Quando* o segundo ponto/vírgula é acionado,
* *Então* a calculadora ignora a entrada duplicada, mantendo `5,2`.


* **Caminho de Ponta a Ponta (E2E):**
* *Dado* que Lucas inicia a calculadora zerada,
* *Quando* ele realiza o cálculo `100 + 50 - 25 * 2 / 5`,
* *Então* o histórico exibe os passos e o resultado final é exibido com precisão.





---

#### 🔹 CARD 03: [CALC-03] Tratamento de Erros de Divisão por Zero

* **História de Usuário:**
> **Como** Beatriz, uma estudante de matemática, **quero** ser notificada claramente ao tentar dividir um número por zero, **para que** eu entenda o motivo pelo qual a operação não pode ser concluída.


* **Critérios de Aceite:**
1. Qualquer tentativa de divisão por zero (`n / 0`) deve interromper o cálculo numérico imediatamente.
2. O display principal deve exibir a mensagem amigável `"Erro"`.
3. O histórico deve ser limpo e a calculadora deve travar novas operações numéricas até que o botão `C` ou `CE` seja acionado.


* **Cenários de Testes:**
* **Caminho Feliz (Happy Path):**
* *Dado* que a calculadora possui a entrada `8`,
* *Quando* o usuário clica em `÷`, `0` e `=`,
* *Então* o display substitui o número pela palavra `"Erro"`.


* **Caminho Alternativo:**
* *Dado* que o display exibe `"Erro"`,
* *Quando* o usuário pressiona o botão `C`,
* *Então* a calculadora reinicia o estado para `0` e limpa os erros da tela.


* **Caminho de Exceção:**
* *Dado* que o display está em estado de `"Erro"`,
* *Quando* o usuário tenta clicar no botão de operador `+`,
* *Então* a calculadora bloqueia a ação e não permite encadear operações sobre o erro.


* **Caminho de Ponta a Ponta (E2E):**
* *Dado* que uma operação matemática complexa resulta em divisão por zero,
* *Quando* o fluxo atinge a divisão inválida,
* *Então* o sistema trata a exceção sem quebrar a execução da página e permite reiniciar via botão `C`.





---

## 👥 Parte 3: Papéis (Roles) e Cerimônias do Scrum

### 🎭 Os Papéis no Scrum

1. **Product Owner (PO):** Define a visão do produto, escreve as Histórias de Usuário, estabelece os Critérios de Aceite e prioriza os cards no Backlog no Jira.
2. **Scrum Master (SM):** Facilita os processos, remove impedimentos técnicos ou organizacionais da equipe e garante o cumprimento do framework Scrum.
3. **Developers / Dev Team:** Desenvolvedores e Tesutadores (QA) que estimam, projetam, constroem o código em HTML/CSS/JS e escrevem os automações/testes manuais.

---

### 🔄 As Cerimônias do Scrum no Projeto

* **Sprint Planning (Planejamento da Sprint):**
* *Objetivo:* O PO apresenta os cards `CALC-01`, `CALC-02` e `CALC-03`. O time estima o esforço (Story Points) e puxa os cards do Backlog para a Coluna *To Do* da Sprint de 2 semanas.


* **Daily Scrum (Reunião Diária - 15 min):**
* *Objetivo:* Cada dev responde: *O que fiz ontem? O que farei hoje? Há algum impedimento?* (ex: "Ontem criei o layout CSS do Card 01; hoje vou integrar a lógica de clique do Card 02").


* **Sprint Review (Demonstração do Produto):**
* *Objetivo:* Ao final da Sprint, a equipe apresenta a **Calculadora funcional** rodando no navegador para o PO e Clientes/Stakeholders para validação e feedback.


* **Sprint Retrospective (Retrospectiva):**
* *Objetivo:* O time analisa internamente o processo: *O que funcionou bem? O que podemos melhorar no próximo ciclo?*



---

## 🔀 Parte 4: Engenharia de Software com Git, GitHub e Fluxo do Board

### 🌳 Estrutura de Branches (Gitflow)

* `main`: Código estável e pronto para produção (versão final entregue ao cliente).
* `develop`: Branch de integração onde o código da Sprint é reunido.
* `feature/CALC-01-interface-visual`: Branch do desenvolvedor para a criação do layout.
* `feature/CALC-02-operacoes-basicas`: Branch do desenvolvedor para as funções aritméticas.
* `bugfix/CALC-04-correcao-divisao-zero`: Branch de correção de bugs encontrados nos testes.

---

### 🔄 Fluxo Completo do Card no Board e Comandos Git

#### 1. A transição no Board e o trabalho do Desenvolvedor:

1. **Transição:** Desenvolvedor arrasta o card `CALC-01` de **To Do** para **In Progress** no Jira.
2. **Ação no Terminal Git:**
```bash
# Atualiza a branch de desenvolvimento local
git checkout develop
git pull origin develop

# Cria a branch de funcionalidade associada ao card do Jira
git checkout -b feature/CALC-01-interface-visual

```


3. **Desenvolvimento e Commit:**
```bash
git add index.html style.css
git commit -m "feat(CALC-01): cria interface estilo windows nas cores rosa e purple"
git push origin feature/CALC-01-interface-visual

```


4. **Pull Request (PR):** Dev abre o PR no GitHub direcionando a branch `feature/CALC-01-interface-visual` para a `develop` e move o Card no Jira para **Code Review / PR**.

#### 2. Revisão de Código e QA (Testes):

1. **Code Review:** Outro desenvolvedor analisa o código no GitHub, aprova e faz o Merge na `develop`.
2. **Transição:** Card é movido para **Testing / QA**.
3. **Validação do QA:** O testador puxa a branch `develop` atualizada e executa os **Cenários de Teste**. Se aprovado, o card é movido para **Done**.

---

## 🐛 Parte 5: Gestão de Bugs (Internos e Reportados pelo Cliente)

### 🔴 Caso 1: Testador (QA) Encontra um Bug Durante a Sprint

1. **Ação do QA:** O testador reprova o card no teste e abre um Card do tipo **BUG** no Jira associado à história original.
2. **Exemplo de Card de Bug Interno:**
* **Título:** `[BUG-01][CALC-02] Botão de decimal permite inserir múltiplas vírgulas`
* **Severidade:** Média
* **Passos para Reproduzir:**
1. Abrir a calculadora.
2. Clicar no número `5`.
3. Clicar na vírgula `,` duas vezes consecutivas.


* **Resultado Esperado:** O display exibe `5,`.
* **Resultado Encontrado:** O display exibe `5,,`.


3. **Fluxo no Board:** O card de funcionalidade é movido de volta para **In Progress**.
4. **Ação do Desenvolvedor (Git):**
```bash
git checkout -b bugfix/CALC-02-multiplas-virgulas
# ... correção aplicada no código ...
git commit -m "fix(CALC-02): adiciona verificacao para impedir virgula duplicada"
git push origin bugfix/CALC-02-multiplas-virgulas

```



---

### 🔴 Caso 2: Cliente Encontra um Bug na Produção (Hotfix)

1. **Cenário:** Durante a demonstração ou uso após a entrega, o cliente identifica que o botão `±` (inversão de sinal) não funciona em números negativos.
2. **Ação da Equipe:** O PO cria um card de emergência do tipo **HOTFIX** e adiciona ao topo da prioridade do quadro.
3. **Ação Técnica do Dev (Branch Direta de Hotfix da Main):**
```bash
# Puxa a versão de produção
git checkout main
git pull origin main

# Cria a branch de correção emergencial
git checkout -b hotfix/CALC-05-inversao-sinal

# Aplica a correção e envia
git commit -m "hotfix: corrige comportamento da inversao de sinal positivo/negativo"
git push origin hotfix/CALC-05-inversao-sinal

```


4. **Merge e Liberação:** É feito o PR e Merge tanto para a branch `main` (produção imediata) quanto para a branch `develop` (para não perder a correção nas próximas Sprints).

---

## 🚀 Parte 6: Entregas da Sprint e Demonstração (Demo) ao Cliente

```
   [ BACKLOG ] ──► [ SPRINT PLANNING ] ──► [ SPRINT DE 2 SEMANAS ]
                                                    │
                                                    ▼
   [ SPRINT REVIEW / DEMO ] ◄── [ SOFTWARE INCREMENTAL PRONTO ]
             │
             ▼
   [ CLIENTE APROVA ] ──► [ DEPLOY EM PRODUÇÃO (MAIN) ]

```

1. **Construção do Incremento:** Ao longo da Sprint de 2 semanas, todas as histórias finalizadas e aprovadas no QA sobem para a branch `develop`.
2. **Preparação para a Demo:** A aplicação é hospedada em um ambiente de homologação (ex: GitHub Pages ou Vercel).
3. **Execução da Cerimônia de Sprint Review:**
* O **Product Owner** abre a reunião e contextualiza os objetivos atingidos na Sprint.
* Um **Desenvolvedor** compartilha a tela e executa a calculadora ao vivo, demonstrando a fidelidade do layout Rosa/Purple (Card 01), os cálculos de orçamento (Card 02) e a resiliência a erros como divisão por zero (Card 03).
* O **Cliente** testa a ferramenta, faz perguntas, sugere melhorias (que viram novos cards de Backlog para futuras Sprints) e **valida o aceite da entrega**.


4. **Deploy Final:** Após o aceite do cliente na Demo, é feito o **Merge de Release** da branch `develop` para a `main`, disponibilizando o produto oficialmente.