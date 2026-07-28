import { Router, Request, Response } from 'express';
import { hashPassword, comparePassword, generateToken, validatePasswordStrength } from '../services/auth.service';

const router = Router();

interface User { id: number; name: string; email: string; passwordHash: string; }
const users: User[] = [];

router.post('/register', (req: Request, res: Response): void => {
  const { name, email, password } = req.body;
  const erros = validatePasswordStrength(password || '');
  if (erros.length) { res.status(400).json({ error: { code: 'WEAK_PASSWORD', errors: erros } }); return; }
  if (users.find(u => u.email === email)) { res.status(400).json({ error: { code: 'EMAIL_EXISTS' } }); return; }

  const user: User = { id: users.length + 1, name, email, passwordHash: hashPassword(password) };
  users.push(user);
  res.status(201).json({ id: user.id, name, email, token: generateToken(user.id) });
});

router.post('/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !comparePassword(password, user.passwordHash)) {
    res.status(401).json({ error: { code: 'INVALID_CREDENTIALS' } }); return;
  }
  res.json({ token: generateToken(user.id), user: { id: user.id, name: user.name } });
});

export default router;
