/**
 * Regras de transição Kanban — TypeScript com tipos estritos.
 */

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

const ALLOWED_TRANSITIONS: Record<TaskStatus, TaskStatus[]> = {
  TODO: ['IN_PROGRESS'],
  IN_PROGRESS: ['TODO', 'DONE'],
  DONE: ['IN_PROGRESS'],
};

export function validateTransition(current: TaskStatus, target: string): boolean {
  const validStatuses: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'DONE'];

  if (!validStatuses.includes(target as TaskStatus)) {
    throw Object.assign(new Error(`Status inválido: ${target}`), { statusCode: 400 });
  }

  const allowed = ALLOWED_TRANSITIONS[current];
  if (!allowed.includes(target as TaskStatus)) {
    throw Object.assign(
      new Error(`Transição inválida: ${current} → ${target}. Permitidas: ${allowed.join(', ')}`),
      { statusCode: 400, code: 'INVALID_TRANSITION' }
    );
  }
  return true;
}
