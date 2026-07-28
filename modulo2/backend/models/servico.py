"""
Classe Servico — Representa um serviço oferecido pelo salão.

Conceitos de POO aplicados:
- Validação de dados no construtor
- Método para calcular horário de término
"""

from datetime import datetime, timedelta


class Servico:
    """Representa um serviço do Salão Beleza & Arte."""

    def __init__(self, nome: str, duracao_min: int, preco: float, 
                 ativo: bool = True, id: int = None):
        """
        Cria uma nova instância de Servico.

        Args:
            nome: Nome do serviço
            duracao_min: Duração em minutos (deve ser > 0)
            preco: Preço em reais (deve ser >= 0)
            ativo: Se o serviço está disponível
            id: ID do banco de dados

        Raises:
            ValueError: Se duração ou preço forem inválidos
        """
        self._id = id
        self.nome = nome
        self.duracao_min = duracao_min  # Setter valida
        self.preco = preco              # Setter valida
        self._ativo = ativo

    # ==================== PROPERTIES ====================

    @property
    def id(self) -> int:
        return self._id

    @property
    def nome(self) -> str:
        return self._nome

    @nome.setter
    def nome(self, valor: str):
        if not valor or len(valor.strip()) < 2:
            raise ValueError("O nome do serviço deve ter pelo menos 2 caracteres.")
        self._nome = valor.strip()

    @property
    def duracao_min(self) -> int:
        return self._duracao_min

    @duracao_min.setter
    def duracao_min(self, valor: int):
        if not isinstance(valor, int) or valor <= 0:
            raise ValueError("A duração deve ser um número inteiro positivo (em minutos).")
        if valor > 480:  # Máximo 8 horas
            raise ValueError("A duração não pode exceder 480 minutos (8 horas).")
        self._duracao_min = valor

    @property
    def preco(self) -> float:
        return self._preco

    @preco.setter
    def preco(self, valor: float):
        if valor < 0:
            raise ValueError("O preço não pode ser negativo.")
        self._preco = round(float(valor), 2)

    @property
    def ativo(self) -> bool:
        return self._ativo

    # ==================== MÉTODOS ====================

    def calcular_termino(self, inicio: datetime) -> datetime:
        """
        Calcula o horário de término do serviço a partir de um início.

        Args:
            inicio: Data/hora de início do serviço

        Returns:
            Data/hora prevista de término
        """
        return inicio + timedelta(minutes=self._duracao_min)

    def preco_formatado(self) -> str:
        """Retorna o preço formatado em reais."""
        return f"R$ {self._preco:.2f}"

    def duracao_formatada(self) -> str:
        """Retorna a duração em formato legível (ex: '1h30min')."""
        horas = self._duracao_min // 60
        minutos = self._duracao_min % 60
        if horas > 0 and minutos > 0:
            return f"{horas}h{minutos}min"
        elif horas > 0:
            return f"{horas}h"
        else:
            return f"{minutos}min"

    def to_dict(self) -> dict:
        return {
            'id': self._id,
            'nome': self._nome,
            'duracao_min': self._duracao_min,
            'duracao_formatada': self.duracao_formatada(),
            'preco': self._preco,
            'preco_formatado': self.preco_formatado(),
            'ativo': self._ativo,
        }

    def __str__(self) -> str:
        return f"{self._nome} ({self.duracao_formatada()}) - {self.preco_formatado()}"

    def __repr__(self) -> str:
        return f"Servico(id={self._id}, nome='{self._nome}')"
