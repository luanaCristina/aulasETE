const { Router } = require('express');
const auth = require('../middleware/auth');
const router = Router();

// TODO: Aluno implementar CRUD com PostgreSQL
router.get('/', auth, (req, res) => {
  res.json({ message: 'TODO: listar projetos do usuário', userId: req.userId });
});

router.post('/', auth, (req, res) => {
  res.status(201).json({ message: 'TODO: criar projeto' });
});

module.exports = router;
