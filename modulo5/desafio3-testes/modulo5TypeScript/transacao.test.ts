/** GABARITO — Testes TypeScript (ts-jest) */
import { validarTransacao, Transacao } from './transacao';

const base = (overrides: Partial<Transacao> = {}): Transacao => ({
  valor: 500, limite: 5000,
  contaOrigem: '001', contaDestino: '002',
  horario: new Date('2025-08-05T14:00:00'),
  ...overrides,
});

describe('validarTransacao (TypeScript)', () => {
  test('aceita transação válida', () => {
    expect(validarTransacao(base()).valida).toBe(true);
  });

  test('rejeita valor zero', () => {
    expect(validarTransacao(base({ valor: 0 })).valida).toBe(false);
  });

  test('rejeita acima do limite', () => {
    expect(validarTransacao(base({ valor: 6000 })).valida).toBe(false);
  });

  test('rejeita auto-transferência', () => {
    expect(validarTransacao(base({ contaDestino: '001' })).valida).toBe(false);
  });

  test('rejeita noturno > R$1000', () => {
    const r = validarTransacao(base({ valor: 2000, horario: new Date('2025-08-05T23:30:00') }));
    expect(r.valida).toBe(false);
  });

  test('aceita diurno > R$1000', () => {
    expect(validarTransacao(base({ valor: 5000 })).valida).toBe(true);
  });

  test('aceita noturno ≤ R$1000', () => {
    const r = validarTransacao(base({ valor: 999, horario: new Date('2025-08-05T02:00:00') }));
    expect(r.valida).toBe(true);
  });
});
