const { Router } = require('express');
const { hashPassword, comparePassword, generateToken, validatePasswordStrength } = require('../services/auth.service');

const router = Router();
const users = []; // In-memory (aluno deve migrar para PostgreSQL)

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const erros = validatePasswordStrength(password || '');
  if (erros.length) return res.status(400).json({ error: { code: 'WEAK_PASSWORD', errors: erros } });
  if (users.find(u => u.email === email)) return res.status(400).json({ error: { code: 'EMAIL_EXISTS', message: 'E-mail já cadastrado.' } });

  const user = { id: users.length + 1, name, email, passwordHash: hashPassword(password) };
  users.push(user);
  const token = generateToken(user.id);
  res.status(201).json({ id: user.id, name, email, token });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !comparePassword(password, user.passwordHash)) {
    return res.status(401).json({ error: { code: 'INVALID_CREDENTIALS', message: 'E-mail ou senha incorretos.' } });
  }
  const token = generateToken(user.id);
  res.json({ token, user: { id: user.id, name: user.name } });
});

module.exports = router;
