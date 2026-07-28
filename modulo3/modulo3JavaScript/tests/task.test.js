const { validateTransition } = require('../src/services/task.service');

describe('Task Service — Transições', () => {
  test('TODO → IN_PROGRESS permitido', () => {
    expect(validateTransition('TODO', 'IN_PROGRESS')).toBe(true);
  });

  test('IN_PROGRESS → DONE permitido', () => {
    expect(validateTransition('IN_PROGRESS', 'DONE')).toBe(true);
  });

  test('DONE → IN_PROGRESS permitido (reabrir)', () => {
    expect(validateTransition('DONE', 'IN_PROGRESS')).toBe(true);
  });

  test('DONE → TODO proibido', () => {
    expect(() => validateTransition('DONE', 'TODO')).toThrow('Transição inválida');
  });

  test('TODO → DONE proibido (não pode pular)', () => {
    expect(() => validateTransition('TODO', 'DONE')).toThrow('Transição inválida');
  });

  test('Status inválido lança erro', () => {
    expect(() => validateTransition('TODO', 'INVALID')).toThrow('Status inválido');
  });
});
