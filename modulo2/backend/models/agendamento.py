"""
Classe Agendamento — Classe principal com regras de negócio.

Conceitos de POO aplicados:
- Composição (referencia Cliente, Profissional, Servico)
- Regras de negócio complexas (validação de conflito, expediente)
- Tratamento de exceções customizadas
- Padrão de estados (status do agendamento)

DESAFIO PARA O ALUNO:
Esta é a classe mais importante do sistema. Ela contém as regras
de negócio que garantem a integridade dos agendamentos.
"""

from datetime import datetime, timedelta
from typing import List, Optional

from ..exceptions import (
    HorarioConflitanteError,
    HorarioForaExpedienteError,
    ServicoNaoOferecidoError,
    CancelamentoInvalidoError,
)


class Agendamento:
    """
    Representa um agendamento no Salão Beleza & Arte.
    
    Regras de negócio implementadas:
    1. Não pode haver conflito de horário para o mesmo profissional
    2. Agendamento deve estar dentro do horário de expediente
    3. O profissional deve oferecer o serviço solicitado
    4. Só pode cancelar agendamento com status 'confirmado'
    """

    # Constantes de expediente
    HORARIO_ABERTURA = 8   # 08:00
    HORARIO_FECHAMENTO = 18  # 18:00
    DIAS_FUNCIONAMENTO = [1, 2, 3, 4, 5]  # Terça(1) a Sábado(5) — usando weekday()
    # Nota: Monday=0, Tuesday=1, ..., Saturday=5, Sunday=6
    DIAS_FUNCIONAMENTO = [1, 2, 3, 4, 5]  # Terça a Sábado

    # Status possíveis
    STATUS_CONFIRMADO = 'confirmado'
    STATUS_CANCELADO = 'cancelado'
    STATUS_CONCLUIDO = 'concluido'

    def __init__(self, cliente_id: int, profissional_id: int, servico_id: int,
                 data_hora: datetime, observacoes: str = None, id: int = None,
                 status: str = None):
        """
        Cria uma nova instância de Agendamento.

        Args:
            cliente_id: ID do cliente
            profissional_id: ID do profissional
            servico_id: ID do serviço
            data_hora: Data e hora do agendamento
            observacoes: Notas opcionais
            id: ID do banco (None para novos)
            status: Status atual (default: 'confirmado')
        """
        self._id = id
        self._cliente_id = cliente_id
        self._profissional_id = profissional_id
        self._servico_id = servico_id
        self._data_hora = data_hora
        self._status = status or self.STATUS_CONFIRMADO
        self._observacoes = observacoes
        self._created_at = datetime.now()
        self._updated_at = datetime.now()

    # ==================== PROPERTIES ====================

    @property
    def id(self) -> int:
        return self._id

    @property
    def cliente_id(self) -> int:
        return self._cliente_id

    @property
    def profissional_id(self) -> int:
        return self._profissional_id

    @property
    def servico_id(self) -> int:
        return self._servico_id

    @property
    def data_hora(self) -> datetime:
        return self._data_hora

    @property
    def status(self) -> str:
        return self._status

    @property
    def observacoes(self) -> Optional[str]:
        return self._observacoes

    # ==================== REGRAS DE NEGÓCIO ====================

    @staticmethod
    def validar_horario_expediente(data_hora: datetime, duracao_min: int):
        """
        REGRA 1: O agendamento deve estar dentro do horário de expediente.
        
        Expediente: Terça a Sábado, 08:00 às 18:00.
        O serviço deve TERMINAR antes do fechamento.

        Args:
            data_hora: Horário desejado para início do serviço
            duracao_min: Duração do serviço em minutos

        Raises:
            HorarioForaExpedienteError: Se fora do expediente
        """
        hora = data_hora.hour
        dia_semana = data_hora.weekday()  # 0=Segunda, 6=Domingo
        horario_termino = data_hora + timedelta(minutes=duracao_min)

        # Verifica dia da semana (Terça=1 a Sábado=5)
        if dia_semana not in [1, 2, 3, 4, 5]:
            raise HorarioForaExpedienteError(data_hora.strftime('%d/%m/%Y %H:%M'))

        # Verifica horário de abertura
        if hora < Agendamento.HORARIO_ABERTURA:
            raise HorarioForaExpedienteError(data_hora.strftime('%d/%m/%Y %H:%M'))

        # Verifica se o serviço termina antes do fechamento
        if horario_termino.hour > Agendamento.HORARIO_FECHAMENTO or \
           (horario_termino.hour == Agendamento.HORARIO_FECHAMENTO and horario_termino.minute > 0):
            raise HorarioForaExpedienteError(data_hora.strftime('%d/%m/%Y %H:%M'))

    @staticmethod
    def verificar_conflito_horario(data_hora_novo: datetime, duracao_novo: int,
                                    agendamentos_existentes: List[dict]) -> bool:
        """
        REGRA 2: Não pode haver sobreposição de horários para o mesmo profissional.
        
        Verifica se o intervalo [data_hora_novo, data_hora_novo + duracao_novo]
        se sobrepõe com algum agendamento existente.

        Args:
            data_hora_novo: Início do novo agendamento
            duracao_novo: Duração do novo serviço (minutos)
            agendamentos_existentes: Lista de dicts com 'data_hora' e 'duracao_min'
                                      dos agendamentos confirmados do profissional naquele dia

        Returns:
            True se houver conflito, False se estiver livre

        Exemplo de uso:
            agendamentos = [
                {'data_hora': datetime(2025, 8, 5, 9, 0), 'duracao_min': 45},
                {'data_hora': datetime(2025, 8, 5, 10, 0), 'duracao_min': 30},
            ]
            conflito = Agendamento.verificar_conflito_horario(
                datetime(2025, 8, 5, 9, 30), 60, agendamentos
            )
            # conflito = True (sobrepõe com o primeiro agendamento)
        """
        inicio_novo = data_hora_novo
        fim_novo = data_hora_novo + timedelta(minutes=duracao_novo)

        for ag in agendamentos_existentes:
            inicio_existente = ag['data_hora']
            fim_existente = inicio_existente + timedelta(minutes=ag['duracao_min'])

            # Verifica sobreposição de intervalos
            # Dois intervalos [A, B] e [C, D] se sobrepõem quando A < D e C < B
            if inicio_novo < fim_existente and inicio_existente < fim_novo:
                return True  # HÁ CONFLITO

        return False  # Sem conflito

    # ==================== AÇÕES ====================

    def cancelar(self):
        """
        REGRA 3: Só pode cancelar agendamento com status 'confirmado'.

        Raises:
            CancelamentoInvalidoError: Se o status não permitir cancelamento
        """
        if self._status != self.STATUS_CONFIRMADO:
            raise CancelamentoInvalidoError(self._id, self._status)

        self._status = self.STATUS_CANCELADO
        self._updated_at = datetime.now()

    def concluir(self):
        """
        Marca o agendamento como concluído (atendimento realizado).

        Raises:
            CancelamentoInvalidoError: Se o status não for 'confirmado'
        """
        if self._status != self.STATUS_CONFIRMADO:
            raise CancelamentoInvalidoError(self._id, self._status)

        self._status = self.STATUS_CONCLUIDO
        self._updated_at = datetime.now()

    def esta_no_passado(self) -> bool:
        """Verifica se o agendamento já passou."""
        return self._data_hora < datetime.now()

    # ==================== SERIALIZAÇÃO ====================

    def to_dict(self) -> dict:
        return {
            'id': self._id,
            'cliente_id': self._cliente_id,
            'profissional_id': self._profissional_id,
            'servico_id': self._servico_id,
            'data_hora': self._data_hora.isoformat() if self._data_hora else None,
            'status': self._status,
            'observacoes': self._observacoes,
            'created_at': self._created_at.isoformat() if self._created_at else None,
        }

    def __str__(self) -> str:
        data_fmt = self._data_hora.strftime('%d/%m/%Y %H:%M') if self._data_hora else '?'
        return f"Agendamento #{self._id} [{self._status}] em {data_fmt}"

    def __repr__(self) -> str:
        return f"Agendamento(id={self._id}, status='{self._status}')"
