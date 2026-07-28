"""Testes unitários — regras de transição de tarefas."""
import pytest
from app.tasks.service import validate_transition


def test_todo_para_in_progress_permitido():
    assert validate_transition("TODO", "IN_PROGRESS") is True


def test_in_progress_para_done_permitido():
    assert validate_transition("IN_PROGRESS", "DONE") is True


def test_done_para_in_progress_permitido():
    assert validate_transition("DONE", "IN_PROGRESS") is True


def test_done_para_todo_proibido():
    with pytest.raises(ValueError, match="Transição inválida"):
        validate_transition("DONE", "TODO")


def test_todo_para_done_proibido():
    with pytest.raises(ValueError, match="Transição inválida"):
        validate_transition("TODO", "DONE")


def test_status_invalido():
    with pytest.raises(ValueError, match="Status inválido"):
        validate_transition("TODO", "INVALID")
