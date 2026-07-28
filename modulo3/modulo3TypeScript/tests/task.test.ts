import { validateTransition } from '../src/services/task.service';

describe('Task Service — Transições (TypeScript)', () => {
  test('TODO → IN_PROGRESS OK', () => {
    expect(validateTransition('TODO', 'IN_PROGRESS')).toBe(true);
  });

  test('DONE → TODO proibido', () => {
    expect(() => validateTransition('DONE', 'TODO')).toThrow('Transição inválida');
  });

  test('status inválido', () => {
    expect(() => validateTransition('TODO', 'BLAH')).toThrow('Status inválido');
  });
});
