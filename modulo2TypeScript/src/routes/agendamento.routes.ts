import { Router, Request, Response, NextFunction } from 'express';
import { query } from '../config/database';
import { AgendamentoService } from '../services/agendamento.service';
import { CancelamentoInvalidoError } from '../models/errors';
import { Servico, Agendamento, SlotOcupado } from '../models/types';

const router = Router();

// GET /api/agendamentos
router.get('/', async (_req: Request, res: Response) => {
  const rows = await query(`
    SELECT a.id, a.data_hora, a.status, a.observacoes,
           c.nome AS cliente_nome, p.nome AS profissional_nome,
           s.nome AS servico_nome, s.duracao_min, s.preco
    FROM agendamentos a
    JOIN clientes c ON a.cliente_id = c.id
    JOIN profissionais p ON a.profissional_id = p.id
    JOIN servicos s ON a.servico_id = s.id
    ORDER BY a.data_hora DESC LIMIT 50
  `);
  res.json(rows);
});

// POST /api/agendamentos
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { clienteId, profissionalId, servicoId, dataHora, observacoes } = req.body;

    if (!clienteId || !profissionalId || !servicoId || !dataHora) {
      res.status(400).json({ error: 'Campos obrigatórios faltando.' });
      return;
    }

    const data = new Date(dataHora);

    // Buscar duração
    const [servico] = await query<Servico>('SELECT duracao_min FROM servicos WHERE id = $1', [servicoId]);
    if (!servico) { res.status(404).json({ error: 'Serviço não encontrado.' }); return; }

    // Regra 1: expediente
    AgendamentoService.validarHorarioExpediente(data, servico.duracao_min);

    // Regra 2: conflito
    const existentes = await query<SlotOcupado>(`
      SELECT a.data_hora, s.duracao_min
      FROM agendamentos a JOIN servicos s ON a.servico_id = s.id
      WHERE a.profissional_id = $1 AND DATE(a.data_hora) = $2 AND a.status = 'confirmado'
    `, [profissionalId, data.toISOString().split('T')[0]]);

    if (AgendamentoService.verificarConflitoHorario(data, servico.duracao_min, existentes)) {
      res.status(409).json({ error: 'Conflito de horário!', code: 'HORARIO_CONFLITANTE' });
      return;
    }

    await query(
      `INSERT INTO agendamentos (cliente_id, profissional_id, servico_id, data_hora, observacoes)
       VALUES ($1, $2, $3, $4, $5)`,
      [clienteId, profissionalId, servicoId, data, observacoes || null]
    );

    res.status(201).json({ message: 'Agendamento criado!' });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/agendamentos/:id/cancelar
router.patch('/:id/cancelar', async (req: Request, res: Response) => {
  const { id } = req.params;
  const [ag] = await query<Agendamento>('SELECT * FROM agendamentos WHERE id = $1', [id]);

  if (!ag) { res.status(404).json({ error: 'Não encontrado.' }); return; }
  if (ag.status !== 'confirmado') {
    throw new CancelamentoInvalidoError(ag.id, ag.status);
  }

  await query("UPDATE agendamentos SET status = 'cancelado', updated_at = NOW() WHERE id = $1", [id]);
  res.json({ message: `Agendamento #${id} cancelado.` });
});

export default router;
