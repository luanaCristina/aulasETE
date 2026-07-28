const { verifyToken } = require('../services/auth.service');

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: { code: 'NO_TOKEN', message: 'Token não fornecido.' } });
  }

  try {
    const token = header.split(' ')[1];
    req.userId = verifyToken(token);
    next();
  } catch {
    res.status(401).json({ error: { code: 'INVALID_TOKEN', message: 'Token inválido.' } });
  }
}

module.exports = authMiddleware;
