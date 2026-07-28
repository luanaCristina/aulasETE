const { hashPassword, comparePassword, generateToken, verifyToken, validatePasswordStrength } = require('../src/services/auth.service');

describe('Auth Service', () => {
  test('hashPassword retorna hash diferente da senha', () => {
    const hash = hashPassword('Teste@123');
    expect(hash).not.toBe('Teste@123');
    expect(hash.length).toBeGreaterThan(50);
  });

  test('comparePassword retorna true para senha correta', () => {
    const hash = hashPassword('Teste@123');
    expect(comparePassword('Teste@123', hash)).toBe(true);
  });

  test('comparePassword retorna false para senha errada', () => {
    const hash = hashPassword('Teste@123');
    expect(comparePassword('Errada', hash)).toBe(false);
  });

  test('generateToken e verifyToken funcionam', () => {
    const token = generateToken(42);
    expect(typeof token).toBe('string');
    expect(verifyToken(token)).toBe(42);
  });

  test('verifyToken lança erro para token inválido', () => {
    expect(() => verifyToken('abc.def.ghi')).toThrow();
  });

  test('senha fraca - sem maiúscula', () => {
    const erros = validatePasswordStrength('teste@123');
    expect(erros).toContain('Pelo menos 1 maiúscula.');
  });

  test('senha forte - sem erros', () => {
    const erros = validatePasswordStrength('Teste@123');
    expect(erros).toHaveLength(0);
  });
});
