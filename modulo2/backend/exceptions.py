"""
Exceções Customizadas — Salão Beleza & Arte
============================================

Módulo II — ETE Advogado José David Gil Rodrigues

Exceções específicas do domínio para tratamento de erros
de forma organizada e informativa.
"""


class SalaoException(Exception):
    """Exceção base do sistema do salão."""

    def __init__(self, message: str, code: str = "ERRO_GENERICO"):
        self.message = message
        self.code = code
        super().__init__(self.message)


class HorarioConflitanteError(SalaoException):
    """
    Lançada quando se tenta agendar em um horário já ocupado
    pelo mesmo profissional.
    """

    def __init__(self, profissional: str, data_hora: str):
        super().__init__(
            message=f"O profissional '{profissional}' já possui agendamento "
                    f"no horário {data_hora}. Escolha outro horário.",
            code="HORARIO_CONFLITANTE"
        )


class HorarioForaExpedienteError(SalaoException):
    """
    Lançada quando o horário está fora do expediente do salão.
    Expediente: Terça a Sábado, 08:00 às 18:00.
    """

    def __init__(self, data_hora: str):
        super().__init__(
            message=f"O horário {data_hora} está fora do expediente do salão. "
                    f"Funcionamos de terça a sábado, das 08:00 às 18:00.",
            code="FORA_EXPEDIENTE"
        )


class ServicoNaoOferecidoError(SalaoException):
    """
    Lançada quando o profissional não oferece o serviço solicitado.
    """

    def __init__(self, profissional: str, servico: str):
        super().__init__(
            message=f"O profissional '{profissional}' não oferece o serviço "
                    f"'{servico}'. Verifique os serviços disponíveis.",
            code="SERVICO_NAO_OFERECIDO"
        )


class AgendamentoNaoEncontradoError(SalaoException):
    """Lançada quando um agendamento não é encontrado pelo ID."""

    def __init__(self, agendamento_id: int):
        super().__init__(
            message=f"Agendamento #{agendamento_id} não encontrado.",
            code="AGENDAMENTO_NAO_ENCONTRADO"
        )


class CancelamentoInvalidoError(SalaoException):
    """
    Lançada quando se tenta cancelar um agendamento que já foi
    cancelado ou concluído.
    """

    def __init__(self, agendamento_id: int, status_atual: str):
        super().__init__(
            message=f"Não é possível cancelar o agendamento #{agendamento_id}. "
                    f"Status atual: {status_atual}.",
            code="CANCELAMENTO_INVALIDO"
        )
