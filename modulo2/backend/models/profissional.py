"""
Classe Profissional — Representa um profissional do salão.

Conceitos de POO aplicados:
- Encapsulamento
- Composição (lista de serviços oferecidos)
- Validação de especialidade contra lista permitida
"""

from datetime import datetime
from typing import List


class Profissional:
    """Representa um profissional do Salão Beleza & Arte."""

    # Especialidades permitidas (constante de classe)
    ESPECIALIDADES = ['cabeleireira', 'barbeiro', 'manicure', 'esteticista']

    def __init__(self, nome: str, especialidade: str, ativo: bool = True, id: int = None):
        """
        Cria uma nova instância de Profissional.

        Args:
            nome: Nome completo do profissional
            especialidade: Deve ser uma das especialidades válidas
            ativo: Se o profissional está ativo no salão
            id: ID do banco de dados (None para novos)

        Raises:
            ValueError: Se a especialidade não for válida
        """
        self._id = id
        self.nome = nome
        self.especialidade = especialidade  # Setter valida
        self._ativo = ativo
        self._servicos_ids: List[int] = []  # IDs dos serviços que oferece
        self._created_at = datetime.now()

    # ==================== PROPERTIES ====================

    @property
    def id(self) -> int:
        return self._id

    @property
    def nome(self) -> str:
        return self._nome

    @nome.setter
    def nome(self, valor: str):
        if not valor or len(valor.strip()) < 3:
            raise ValueError("O nome do profissional deve ter pelo menos 3 caracteres.")
        self._nome = valor.strip()

    @property
    def especialidade(self) -> str:
        return self._especialidade

    @especialidade.setter
    def especialidade(self, valor: str):
        if valor.lower().strip() not in self.ESPECIALIDADES:
            raise ValueError(
                f"Especialidade inválida: '{valor}'. "
                f"Opções: {', '.join(self.ESPECIALIDADES)}"
            )
        self._especialidade = valor.lower().strip()

    @property
    def ativo(self) -> bool:
        return self._ativo

    @property
    def servicos_ids(self) -> List[int]:
        return self._servicos_ids.copy()

    # ==================== MÉTODOS ====================

    def adicionar_servico(self, servico_id: int):
        """Adiciona um serviço à lista de serviços que o profissional oferece."""
        if servico_id not in self._servicos_ids:
            self._servicos_ids.append(servico_id)

    def remover_servico(self, servico_id: int):
        """Remove um serviço da lista."""
        if servico_id in self._servicos_ids:
            self._servicos_ids.remove(servico_id)

    def oferece_servico(self, servico_id: int) -> bool:
        """Verifica se o profissional oferece determinado serviço."""
        return servico_id in self._servicos_ids

    def desativar(self):
        """Desativa o profissional (ex: férias, saída)."""
        self._ativo = False

    def ativar(self):
        """Reativa o profissional."""
        self._ativo = True

    def to_dict(self) -> dict:
        return {
            'id': self._id,
            'nome': self._nome,
            'especialidade': self._especialidade,
            'ativo': self._ativo,
            'servicos_ids': self._servicos_ids,
        }

    def __str__(self) -> str:
        status = "✓" if self._ativo else "✗"
        return f"[{status}] {self._nome} ({self._especialidade})"

    def __repr__(self) -> str:
        return f"Profissional(id={self._id}, nome='{self._nome}')"
