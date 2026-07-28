const { Router } = require('express');
const auth = require('../middleware/auth');
const { validateTransition } = require('../services/task.service');
const router = Router();

// TODO: Aluno implementar com PostgreSQL
router.patch('/:id/move', auth, (req, res, next) => {
  try {
    const currentStatus = 'TODO'; // TODO: buscar do banco
    const { status: targetStatus } = req.body;
    validateTransition(currentStatus, targetStatus);
    res.json({ id: req.params.id, status: targetStatus });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
