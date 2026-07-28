const { Router } = require('express');
const agendamentoRoutes = require('./agendamentoRoutes');
const clienteRoutes = require('./clienteRoutes');
const { query } = require('../config/database');

const router = Router();

// Sub-rotas
router.use('/clientes', clienteRoutes);
router.use('/agendamentos', agendamentoRoutes);

// Profissionais
router.get('/profissionais', async (req, res) => {
    const profissionais = await query(
        'SELECT * FROM profissionais WHERE ativo = TRUE ORDER BY nome'
    );
    res.json(profissionais);
});

// Serviços
router.get('/servicos', async (req, res) => {
    const servicos = await query(
        'SELECT * FROM servicos WHERE ativo = TRUE ORDER BY nome'
    );
    res.json(servicos);
});

module.exports = router;
