"""Módulo de validação — Python. Aluno deve escrever os testes."""
from datetime import datetime


def validar_transacao(valor, limite, conta_origem, conta_destino, horario: datetime):
    if valor <= 0:
        return {"valida": False, "motivo": "Valor deve ser maior que zero."}
    if valor > limite:
        return {"valida": False, "motivo": "Valor excede o limite."}
    if conta_origem == conta_destino:
        return {"valida": False, "motivo": "Auto-transferência não permitida."}
    hora = horario.hour
    if (hora >= 23 or hora < 6) and valor > 1000:
        return {"valida": False, "motivo": "Bloqueada entre 23h-6h acima de R$1000."}
    return {"valida": True, "motivo": None}
