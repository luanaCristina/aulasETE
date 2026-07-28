"""Testes unitários — módulo de autenticação."""
import pytest
from app.auth.service import (
    hash_password, verify_password,
    create_access_token, decode_token,
    validate_password_strength
)


def test_hash_password_retorna_hash_diferente():
    senha = "Teste@123"
    hashed = hash_password(senha)
    assert hashed != senha
    assert len(hashed) > 50


def test_verify_password_correto():
    senha = "Teste@123"
    hashed = hash_password(senha)
    assert verify_password(senha, hashed) is True


def test_verify_password_incorreto():
    hashed = hash_password("Teste@123")
    assert verify_password("SenhaErrada", hashed) is False


def test_create_and_decode_token():
    token = create_access_token(user_id=42)
    assert isinstance(token, str)
    user_id = decode_token(token)
    assert user_id == 42


def test_decode_token_invalido():
    with pytest.raises(ValueError):
        decode_token("token.invalido.aqui")


def test_senha_fraca_sem_maiuscula():
    erros = validate_password_strength("teste@123")
    assert "Pelo menos 1 letra maiúscula." in erros


def test_senha_fraca_curta():
    erros = validate_password_strength("Te@1")
    assert "Mínimo 8 caracteres." in erros


def test_senha_forte_sem_erros():
    erros = validate_password_strength("Teste@123")
    assert erros == []
