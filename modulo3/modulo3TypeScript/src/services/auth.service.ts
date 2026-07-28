import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET: string = process.env.JWT_SECRET || 'default-secret';
const EXPIRES_IN = '24h';

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function comparePassword(plain: string, hash: string): boolean {
  return bcrypt.compareSync(plain, hash);
}

export function generateToken(userId: number): string {
  return jwt.sign({ sub: userId }, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token: string): number {
  try {
    const payload = jwt.verify(token, SECRET) as { sub: number };
    return Number(payload.sub);
  } catch {
    throw new Error('Token inválido ou expirado.');
  }
}

export function validatePasswordStrength(password: string): string[] {
  const errors: string[] = [];
  if (password.length < 8) errors.push('Mínimo 8 caracteres.');
  if (!/[A-Z]/.test(password)) errors.push('Pelo menos 1 maiúscula.');
  if (!/\d/.test(password)) errors.push('Pelo menos 1 número.');
  if (!/[@#$%&!]/.test(password)) errors.push('Pelo menos 1 especial.');
  return errors;
}
