import { hashPassword, comparePassword, generateToken, verifyToken, validatePasswordStrength } from '../src/services/auth.service';

describe('Auth Service (TypeScript)', () => {
  test('hashPassword retorna hash diferente', () => {
    const hash = hashPassword('Teste@123');
    expect(hash).not.toBe('Teste@123');
  });

  test('comparePassword correto', () => {
    const hash = hashPassword('Teste@123');
    expect(comparePassword('Teste@123', hash)).toBe(true);
  });

  test('comparePassword incorreto', () => {
    const hash = hashPassword('Teste@123');
    expect(comparePassword('Errada', hash)).toBe(false);
  });

  test('generateToken + verifyToken', () => {
    const token = generateToken(7);
    expect(verifyToken(token)).toBe(7);
  });

  test('senha fraca', () => {
    const erros = validatePasswordStrength('abc');
    expect(erros.length).toBeGreaterThan(0);
  });

  test('senha forte', () => {
    expect(validatePasswordStrength('Teste@123')).toHaveLength(0);
  });
});
