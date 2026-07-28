"""GABARITO — Testes com pytest. Rode: pytest test_transacao.py -v"""
from datetime import datetime
from transacao import validar_transacao


def base(**kwargs):
    defaults = {"valor": 500, "limite": 5000, "conta_origem": "001",
                "conta_destino": "002", "horario": datetime(2025, 8, 5, 14, 0)}
    defaults.update(kwargs)
    return defaults


def test_transacao_valida():
    r = validar_transacao(**base())
    assert r["valida"] is True


def test_valor_zero():
    r = validar_transacao(**base(valor=0))
    assert r["valida"] is False
    assert "maior que zero" in r["motivo"]


def test_valor_negativo():
    assert validar_transacao(**base(valor=-50))["valida"] is False


def test_acima_do_limite():
    r = validar_transacao(**base(valor=6000, limite=5000))
    assert r["valida"] is False
    assert "limite" in r["motivo"]


def test_auto_transferencia():
    r = validar_transacao(**base(conta_destino="001"))
    assert r["valida"] is False


def test_noturno_acima_1000():
    r = validar_transacao(**base(valor=1500, horario=datetime(2025, 8, 5, 23, 30)))
    assert r["valida"] is False


def test_diurno_acima_1000():
    r = validar_transacao(**base(valor=5000, horario=datetime(2025, 8, 5, 14, 0)))
    assert r["valida"] is True


def test_noturno_abaixo_1000():
    r = validar_transacao(**base(valor=999, horario=datetime(2025, 8, 5, 2, 0)))
    assert r["valida"] is True
