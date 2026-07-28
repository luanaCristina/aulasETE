const { Router } = require('express');
const { query } = require('../config/database');
const Agendamento = require('../models/Agendamento');

const router = Router();

// GET /api/agendamentos — Listar com JOIN
router.get('/', async (req, res) => {
    const agendamentos = await query(`
        SELECT 
            a.id, a.data_hora, a.status, a.observacoes,
            c.nome AS cliente_nome, c.telefone AS cliente_telefone,
            p.nome AS profissional_nome,
            s.nome AS servico_nome, s.duracao_min, s.preco
        FROM agendamentos a
        INNER JOIN clientes c ON a.cliente_id = c.id
        INNER JOIN profissionais p ON a.profissional_id = p.id
        INNER JOIN servicos s ON a.servico_id = s.id
        ORDER BY a.data_hora DESC
        LIMIT 50
    `);
    res.json(agendamentos);
});

// POST /api/agendamentos — Criar com validação de regras de negócio
router.post('/', async (req, res, next) => {
    try {
        const { clienteId, profissionalId, servicoId, dataHora, observacoes } = req.body;

        if (!clienteId || !profissionalId || !servicoId || !dataHora) {
            return res.status(400).json({ error: 'Campos obrigatórios: clienteId, profissionalId, servicoId, dataHora' });
        }

        const dataAgendamento = new Date(dataHora);

        // Buscar duração do serviço
        const [servico] = await query('SELECT duracao_min FROM servicos WHERE id = $1', [servicoId]);
        if (!servico) {
            return res.status(404).json({ error: 'Serviço não encontrado.' });
        }

        // REGRA 1: Validar expediente
        Agendamento.validarHorarioExpediente(dataAgendamento, servico.duracao_min);

        // REGRA 2: Verificar conflito
        const agendamentosDia = await query(`
            SELECT a.data_hora, s.duracao_min
            FROM agendamentos a
            INNER JOIN servicos s ON a.servico_id = s.id
            WHERE a.profissional_id = $1
              AND DATE(a.data_hora) = $2
              AND a.status = 'confirmado'
        `, [profissionalId, dataAgendamento.toISOString().split('T')[0]]);

        if (Agendamento.verificarConflitoHorario(dataAgendamento, servico.duracao_min, agendamentosDia)) {
            return res.status(409).json({
                error: 'Conflito de horário! Profissional já tem agendamento nesse período.',
                code: 'HORARIO_CONFLITANTE'
            });
        }

        // Inserir no banco
        await query(`
            INSERT INTO agendamentos (cliente_id, profissional_id, servico_id, data_hora, observacoes)
            VALUES ($1, $2, $3, $4, $5)
        `, [clienteId, profissionalId, servicoId, dataAgendamento, observacoes || null]);

        res.status(201).json({ message: 'Agendamento criado com sucesso!' });

    } catch (error) {
        next(error);
    }
});

// PATCH /api/agendamentos/:id/cancelar
router.patch('/:id/cancelar', async (req, res) => {
    const { id } = req.params;

    const [agendamento] = await query('SELECT * FROM agendamentos WHERE id = $1', [id]);
    if (!agendamento) {
        return res.status(404).json({ error: 'Agendamento não encontrado.' });
    }

    const ag = new Agendamento(agendamento);
    try {
        ag.cancelar();
    } catch (err) {
        return res.status(400).json({ error: err.message, code: err.code });
    }

    await query("UPDATE agendamentos SET status = 'cancelado', updated_at = NOW() WHERE id = $1", [id]);
    res.json({ message: `Agendamento #${id} cancelado com sucesso.` });
});

module.exports = router;
