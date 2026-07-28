import { Router, Response, NextFunction } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { query } from '../config/database';

const router = Router();

// POST /api/pickups — Agendar coleta
router.post('/', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { address, latitude, longitude, scheduledDate, items, photoUrl, notes } = req.body;

  if (!address || !scheduledDate || !items?.length) {
    res.status(400).json({ error: 'address, scheduledDate e items são obrigatórios.' });
    return;
  }

  const [pickup] = await query<{ id: number }>(`
    INSERT INTO pickups (user_id, address, latitude, longitude, scheduled_date, photo_url, notes)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id
  `, [req.userId, address, latitude, longitude, scheduledDate, photoUrl, notes]);

  // Inserir itens
  for (const item of items) {
    await query(`
      INSERT INTO pickup_items (pickup_id, category, description, quantity)
      VALUES ($1, $2, $3, $4)
    `, [pickup.id, item.category, item.description, item.quantity || 1]);
  }

  // Adicionar pontos ao usuário (+10 por descarte)
  await query('UPDATE users SET points = points + 10 WHERE id = $1', [req.userId]);

  res.status(201).json({ id: pickup.id, message: 'Coleta agendada! +10 pontos.', });
});

// GET /api/pickups/mine — Meus agendamentos
router.get('/mine', authMiddleware, async (req: AuthRequest, res: Response) => {
  const pickups = await query(`
    SELECT p.*, json_agg(pi.*) AS items
    FROM pickups p
    LEFT JOIN pickup_items pi ON pi.pickup_id = p.id
    WHERE p.user_id = $1
    GROUP BY p.id ORDER BY p.scheduled_date DESC
  `, [req.userId]);
  res.json(pickups);
});

// PATCH /api/pickups/:id/cancel
router.patch('/:id/cancel', authMiddleware, async (req: AuthRequest, res: Response) => {
  const [pickup] = await query<{ id: number; user_id: number; status: string }>(
    'SELECT * FROM pickups WHERE id = $1', [req.params.id]
  );
  if (!pickup) { res.status(404).json({ error: 'Não encontrado.' }); return; }
  if (pickup.user_id !== req.userId) { res.status(403).json({ error: 'Sem permissão.' }); return; }
  if (pickup.status !== 'agendado') { res.status(400).json({ error: 'Só agendados podem ser cancelados.' }); return; }

  await query("UPDATE pickups SET status = 'cancelado', updated_at = NOW() WHERE id = $1", [req.params.id]);
  res.json({ message: 'Coleta cancelada.' });
});

export default router;
