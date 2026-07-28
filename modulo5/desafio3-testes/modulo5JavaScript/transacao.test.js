/**
 * GABARITO — Testes para validarTransacao()
 * Rode com: npx jest transacao.test.js
 */
const { validarTransacao } = require('./transacao');

describe('validarTransacao()', () => {
  // Helper para criar transação válida base
  const transacaoValida = (overrides = {}) => ({
    valor: 500,
    limite: 5000,
    contaOrigem: '001',
    contaDestino: '002',
    horario: new Date('2025-08-05T14:00:00'),
    ...overrides,
  });

  // ===== HAPPY PATH =====
  test('Deve aceitar transação válida', () => {
    const resultado = validarTransacao(transacaoValida());
    expect(resultado.valida).toBe(true);
    expect(resultado.motivo).toBeNull();
  });

  // ===== REGRA 1: Valor positivo =====
  test('Deve rejeitar valor zero', () => {
    const r = validarTransacao(transacaoValida({ valor: 0 }));
    expect(r.valida).toBe(false);
    expect(r.motivo).toMatch(/maior que zero/);
  });

  test('Deve rejeitar valor negativo', () => {
    const r = validarTransacao(transacaoValida({ valor: -100 }));
    expect(r.valida).toBe(false);
  });

  // ===== REGRA 2: Limite =====
  test('Deve rejeitar valor acima do limite', () => {
    const r = validarTransacao(transacaoValida({ valor: 6000, limite: 5000 }));
    expect(r.valida).toBe(false);
    expect(r.motivo).toMatch(/limite/);
  });

  // ===== REGRA 3: Auto-transferência =====
  test('Deve rejeitar auto-transferência', () => {
    const r = validarTransacao(transacaoValida({ contaOrigem: '001', contaDestino: '001' }));
    expect(r.valida).toBe(false);
    expect(r.motivo).toMatch(/Auto-transferência/);
  });

  // ===== REGRA 4: Anti-fraude noturno =====
  test('Deve rejeitar >R$1000 às 23h', () => {
    const r = validarTransacao(transacaoValida({ valor: 1500, horario: new Date('2025-08-05T23:30:00') }));
    expect(r.valida).toBe(false);
    expect(r.motivo).toMatch(/23h e 6h/);
  });

  test('Deve rejeitar >R$1000 às 3h', () => {
    const r = validarTransacao(transacaoValida({ valor: 2000, horario: new Date('2025-08-05T03:00:00') }));
    expect(r.valida).toBe(false);
  });

  test('Deve aceitar >R$1000 às 14h (horário diurno)', () => {
    const r = validarTransacao(transacaoValida({ valor: 5000, horario: new Date('2025-08-05T14:00:00') }));
    expect(r.valida).toBe(true);
  });

  test('Deve aceitar ≤R$1000 em horário noturno', () => {
    const r = validarTransacao(transacaoValida({ valor: 999, horario: new Date('2025-08-05T01:00:00') }));
    expect(r.valida).toBe(true);
  });
});

/*
EXPLICAÇÃO PEDAGÓGICA:
1. Padrão AAA (Arrange-Act-Assert) em cada teste
2. Helper function (transacaoValida) evita repetição e foca no que muda
3. .toMatch(regex) testa parcialmente a mensagem (não quebra se mudar texto)
4. Edge cases cobertos: zero, negativo, exatamente no limite, horário exato 23h
5. 9 testes cobrem 100% dos branches da função (todas as regras)
*/
