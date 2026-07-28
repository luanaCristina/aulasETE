import { Router, Request, Response } from 'express';
import agendamentoRoutes from './agendamento.routes';
import clienteRoutes from './cliente.routes';
import { query } from '../config/database';
import { Profissional, Servico } from '../models/types';

const router = Router();

router.use('/agendamentos', agendamentoRoutes);
router.use('/clientes', clienteRoutes);

router.get('/profissionais', async (_req: Request, res: Response) => {
  const rows = await query<Profissional>(
    'SELECT * FROM profissionais WHERE ativo = TRUE ORDER BY nome'
  );
  res.json(rows);
});

router.get('/servicos', async (_req: Request, res: Response) => {
  const rows = await query<Servico>(
    'SELECT * FROM servicos WHERE ativo = TRUE ORDER BY nome'
  );
  res.json(rows);
});

export default router;
