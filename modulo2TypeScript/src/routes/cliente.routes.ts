import { Router, Request, Response } from 'express';
import { query } from '../config/database';
import { Cliente } from '../models/types';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const clientes = await query<Cliente>('SELECT * FROM clientes ORDER BY nome');
  res.json(clientes);
});

router.post('/', async (req: Request, res: Response) => {
  const { nome, telefone, email } = req.body as { nome: string; telefone: string; email?: string };

  if (!nome || !telefone) {
    res.status(400).json({ error: 'Nome e telefone são obrigatórios.' });
    return;
  }

  await query(
    'INSERT INTO clientes (nome, telefone, email) VALUES ($1, $2, $3)',
    [nome, telefone, email || null]
  );
  res.status(201).json({ message: 'Cliente criado com sucesso!' });
});

export default router;
