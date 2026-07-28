"""Regras de negócio para tarefas — transições de status."""

VALID_STATUSES = ["TODO", "IN_PROGRESS", "DONE"]

# Transições permitidas no Kanban
ALLOWED_TRANSITIONS = {
    "TODO": ["IN_PROGRESS"],
    "IN_PROGRESS": ["TODO", "DONE"],
    "DONE": ["IN_PROGRESS"],  # Pode reabrir, mas NÃO voltar direto para TODO
}


def validate_transition(current: str, target: str) -> bool:
    """Verifica se a transição de status é permitida."""
    if target not in VALID_STATUSES:
        raise ValueError(f"Status inválido: {target}")

    allowed = ALLOWED_TRANSITIONS.get(current, [])
    if target not in allowed:
        raise ValueError(
            f"Transição inválida: {current} → {target}. "
            f"Permitidas: {', '.join(allowed)}"
        )
    return True
