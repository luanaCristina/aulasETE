/**
 * Classe de Erro customizada para o sistema.
 * Permite associar um código e um status HTTP ao erro.
 */
class AppError extends Error {
    constructor(message, code = 'GENERIC_ERROR', statusCode = 400) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}

class HorarioConflitanteError extends AppError {
    constructor(profissional, dataHora) {
        super(
            `O profissional '${profissional}' já possui agendamento no horário ${dataHora}.`,
            'HORARIO_CONFLITANTE',
            409
        );
    }
}

class HorarioForaExpedienteError extends AppError {
    constructor(dataHora) {
        super(
            `O horário ${dataHora} está fora do expediente (Ter-Sáb, 08h-18h).`,
            'FORA_EXPEDIENTE',
            400
        );
    }
}

module.exports = { AppError, HorarioConflitanteError, HorarioForaExpedienteError };
