// ========================================
// Calculadora — TypeScript (Tipagem Estrita)
// ========================================

type Operator = '+' | '-' | '*' | '/';

interface CalculationResult {
  value: number;
  display: string;
  error: string | null;
}

// Função principal de cálculo com tipagem forte
function performCalculation(a: number, operator: Operator, b: number): CalculationResult {
  // Regra: divisão por zero
  if (operator === '/' && b === 0) {
    return { value: 0, display: 'Erro', error: 'Divisão por zero não é permitida!' };
  }

  let result: number;
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }

  const formatted = parseFloat(result.toFixed(8));
  return { value: formatted, display: String(formatted), error: null };
}

// Estado da calculadora com tipos
let expression: string = '';
const displayElement = document.getElementById('display') as HTMLDivElement;

function updateDisplay(text: string): void {
  displayElement.textContent = text || '0';
}

function appendNumber(num: string): void {
  const lastSegment = expression.split(/[\+\-\*\/]/).pop() || '';
  if (num === '.' && lastSegment.includes('.')) return;
  expression += num;
  updateDisplay(expression);
}

function appendOperator(op: string): void {
  if (!expression) return;
  const last = expression.slice(-1);
  if (['+', '-', '*', '/'].includes(last)) {
    expression = expression.slice(0, -1);
  }
  expression += op;
  updateDisplay(expression);
}

function clearAll(): void {
  expression = '';
  updateDisplay('0');
}

function deleteLast(): void {
  expression = expression.slice(0, -1);
  updateDisplay(expression || '0');
}

function calculate(): void {
  if (!expression) return;
  try {
    const result: number = eval(expression);
    if (!isFinite(result)) {
      updateDisplay('Erro: ÷ por 0');
      expression = '';
      return;
    }
    const formatted = parseFloat(result.toFixed(8));
    expression = String(formatted);
    updateDisplay(String(formatted));
  } catch {
    updateDisplay('Erro');
    expression = '';
  }
}

// Teclado
document.addEventListener('keydown', (e: KeyboardEvent): void => {
  if (e.key >= '0' && e.key <= '9' || e.key === '.') appendNumber(e.key);
  else if (['+', '-', '*', '/'].includes(e.key)) appendOperator(e.key);
  else if (e.key === 'Enter') calculate();
  else if (e.key === 'Escape') clearAll();
  else if (e.key === 'Backspace') deleteLast();
});
