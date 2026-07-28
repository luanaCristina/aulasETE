/**
 * Classes de erro customizadas — tipagem forte!
 */

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;

  constructor(message: string, code: string = 'GENERIC_ERROR', statusCode: number = 400) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

export class HorarioConflitanteError extends AppError {
  constructor(profissional: string, dataHora: string) {
    super(
      `Profissional '${profissional}' já possui agendamento em ${dataHora}.`,
      'HORARIO_CONFLITANTE',
      409
    );
  }
}

export class HorarioForaExpedienteError extends AppError {
  constructor(dataHora: string) {
    super(
      `Horário ${dataHora} está fora do expediente (Ter-Sáb, 08h-18h).`,
      'FORA_EXPEDIENTE',
      400
    );
  }
}

export class CancelamentoInvalidoError extends AppError {
  constructor(id: number, statusAtual: string) {
    super(
      `Não é possível cancelar agendamento #${id}. Status: ${statusAtual}.`,
      'CANCELAMENTO_INVALIDO',
      400
    );
  }
}
