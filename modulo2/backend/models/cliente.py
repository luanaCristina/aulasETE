"""
Classe Cliente — Representa um cliente do salão.

Conceitos de POO aplicados:
- Encapsulamento (atributos privados com getters/setters)
- Validação no construtor
- Método __str__ para representação legível
"""

import re
from datetime import datetime


class Cliente:
    """Representa um cliente do Salão Beleza & Arte."""

    def __init__(self, nome: str, telefone: str, email: str = None, id: int = None):
        """
        Cria uma nova instância de Cliente.

        Args:
            nome: Nome completo do cliente (mínimo 3 caracteres)
            telefone: Telefone no formato (XX) XXXXX-XXXX
            email: E-mail opcional
            id: ID do banco de dados (None para novos clientes)

        Raises:
            ValueError: Se os dados não passarem na validação
        """
        self._id = id
        self.nome = nome          # Usa o setter com validação
        self.telefone = telefone  # Usa o setter com validação
        self.email = email        # Usa o setter com validação
        self._created_at = datetime.now()

    # ==================== PROPERTIES (Getters/Setters) ====================

    @property
    def id(self) -> int:
        return self._id

    @property
    def nome(self) -> str:
        return self._nome

    @nome.setter
    def nome(self, valor: str):
        if not valor or len(valor.strip()) < 3:
            raise ValueError("O nome deve ter pelo menos 3 caracteres.")
        self._nome = valor.strip()

    @property
    def telefone(self) -> str:
        return self._telefone

    @telefone.setter
    def telefone(self, valor: str):
        if not valor or not valor.strip():
            raise ValueError("O telefone é obrigatório.")
        # Aceita formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
        padrao = r'^\(\d{2}\)\s?\d{4,5}-?\d{4}$'
        if not re.match(padrao, valor.strip()):
            raise ValueError("Telefone inválido. Use formato: (81) 99999-9999")
        self._telefone = valor.strip()

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, valor: str):
        if valor is None or valor.strip() == '':
            self._email = None
            return
        padrao = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(padrao, valor.strip()):
            raise ValueError("E-mail inválido.")
        self._email = valor.strip().lower()

    @property
    def created_at(self) -> datetime:
        return self._created_at

    # ==================== MÉTODOS ====================

    def to_dict(self) -> dict:
        """Converte o objeto para dicionário (útil para JSON)."""
        return {
            'id': self._id,
            'nome': self._nome,
            'telefone': self._telefone,
            'email': self._email,
            'created_at': self._created_at.isoformat() if self._created_at else None
        }

    def __str__(self) -> str:
        return f"Cliente({self._nome}, {self._telefone})"

    def __repr__(self) -> str:
        return f"Cliente(id={self._id}, nome='{self._nome}')"
