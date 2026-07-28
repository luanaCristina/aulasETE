const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'default-secret-change-me';
const EXPIRES_IN = '24h';

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(plain, hash) {
  return bcrypt.compareSync(plain, hash);
}

function generateToken(userId) {
  return jwt.sign({ sub: userId }, SECRET, { expiresIn: EXPIRES_IN });
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, SECRET);
    return parseInt(payload.sub);
  } catch {
    throw new Error('Token inválido ou expirado.');
  }
}

function validatePasswordStrength(password) {
  const errors = [];
  if (password.length < 8) errors.push('Mínimo 8 caracteres.');
  if (!/[A-Z]/.test(password)) errors.push('Pelo menos 1 maiúscula.');
  if (!/\d/.test(password)) errors.push('Pelo menos 1 número.');
  if (!/[@#$%&!]/.test(password)) errors.push('Pelo menos 1 especial (@#$%&!).');
  return errors;
}

module.exports = { hashPassword, comparePassword, generateToken, verifyToken, validatePasswordStrength };
