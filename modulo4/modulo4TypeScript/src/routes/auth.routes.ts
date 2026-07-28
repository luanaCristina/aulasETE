import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../config/database';

const router = Router();
const SECRET = process.env.JWT_SECRET || 'default-secret';

router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) { res.status(400).json({ error: 'Campos obrigatórios.' }); return; }

  const existing = await query('SELECT id FROM users WHERE email = $1', [email]);
  if (existing.length) { res.status(400).json({ error: 'E-mail já cadastrado.' }); return; }

  const hash = bcrypt.hashSync(password, 10);
  const [user] = await query<{ id: number }>(
    'INSERT INTO users (name, email, password_hash, phone) VALUES ($1,$2,$3,$4) RETURNING id',
    [name, email, hash, phone]
  );

  const token = jwt.sign({ sub: user.id }, SECRET, { expiresIn: '24h' });
  res.status(201).json({ id: user.id, name, email, token });
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const [user] = await query<{ id: number; name: string; password_hash: string }>(
    'SELECT id, name, password_hash FROM users WHERE email = $1', [email]
  );
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    res.status(401).json({ error: 'Credenciais inválidas.' }); return;
  }
  const token = jwt.sign({ sub: user.id }, SECRET, { expiresIn: '24h' });
  res.json({ token, user: { id: user.id, name: user.name } });
});

export default router;
