// ========================================
// Calculadora — JavaScript Puro
// Lógica: acumular expressão → avaliar
// ========================================

let currentExpression = '';

function updateDisplay(value) {
  document.getElementById('display').textContent = value || '0';
}

function appendNumber(num) {
  // Evitar múltiplos pontos decimais
  if (num === '.' && currentExpression.split(/[\+\-\*\/]/).pop().includes('.')) return;
  currentExpression += num;
  updateDisplay(currentExpression);
}

function appendOperator(op) {
  if (!currentExpression) return;
  // Evitar operadores consecutivos
  const lastChar = currentExpression.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentExpression = currentExpression.slice(0, -1);
  }
  currentExpression += op;
  updateDisplay(currentExpression);
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay('0');
}

function deleteLast() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay(currentExpression || '0');
}

function calculate() {
  if (!currentExpression) return;

  try {
    // Verificar divisão por zero
    if (currentExpression.includes('/0') && !currentExpression.includes('/0.')) {
      // Checar se realmente divide por zero (não por 0.5, etc)
      const parts = currentExpression.split('/');
      const divisor = parseFloat(parts[parts.length - 1]);
      if (divisor === 0) {
        updateDisplay('Erro: ÷ por 0');
        currentExpression = '';
        return;
      }
    }

    // eval é seguro aqui pois controlamos o input (apenas números e operadores)
    const result = eval(currentExpression);

    // Limitar casas decimais
    const formatted = parseFloat(result.toFixed(8));
    currentExpression = String(formatted);
    updateDisplay(formatted);
  } catch (error) {
    updateDisplay('Erro');
    currentExpression = '';
  }
}

// Suporte a teclado
document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9' || e.key === '.') appendNumber(e.key);
  else if (['+', '-', '*', '/'].includes(e.key)) appendOperator(e.key);
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Escape') clearDisplay();
  else if (e.key === 'Backspace') deleteLast();
});
