const { Router } = require('express');
const { query } = require('../config/database');

const router = Router();

// GET /api/clientes — Listar todos
router.get('/', async (req, res) => {
    const clientes = await query('SELECT * FROM clientes ORDER BY nome');
    res.json(clientes);
});

// POST /api/clientes — Criar novo
router.post('/', async (req, res) => {
    const { nome, telefone, email } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({ error: 'Nome e telefone são obrigatórios.' });
    }

    await query(
        'INSERT INTO clientes (nome, telefone, email) VALUES ($1, $2, $3)',
        [nome, telefone, email || null]
    );
    res.status(201).json({ message: 'Cliente criado com sucesso!' });
});

module.exports = router;
