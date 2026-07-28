/**
 * Regras de transição do Kanban.
 */
const ALLOWED_TRANSITIONS = {
  TODO: ['IN_PROGRESS'],
  IN_PROGRESS: ['TODO', 'DONE'],
  DONE: ['IN_PROGRESS'],
};

function validateTransition(current, target) {
  const valid = ['TODO', 'IN_PROGRESS', 'DONE'];
  if (!valid.includes(target)) {
    throw Object.assign(new Error(`Status inválido: ${target}`), { statusCode: 400, code: 'INVALID_STATUS' });
  }
  const allowed = ALLOWED_TRANSITIONS[current] || [];
  if (!allowed.includes(target)) {
    throw Object.assign(
      new Error(`Transição inválida: ${current} → ${target}. Permitidas: ${allowed.join(', ')}`),
      { statusCode: 400, code: 'INVALID_TRANSITION' }
    );
  }
  return true;
}

module.exports = { validateTransition, ALLOWED_TRANSITIONS };
