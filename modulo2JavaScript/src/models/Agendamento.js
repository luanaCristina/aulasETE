/**
 * Classe Agendamento — Regras de Negócio (POO em JavaScript ES6+)
 * 
 * DESAFIO para o aluno:
 * - Verificar conflito de horário
 * - Validar horário de expediente
 * - Cancelar agendamento apenas se status for 'confirmado'
 */

const { HorarioConflitanteError, HorarioForaExpedienteError, AppError } = require('../errors/AppError');

class Agendamento {
    // Constantes de expediente
    static HORARIO_ABERTURA = 8;
    static HORARIO_FECHAMENTO = 18;
    // Dias que funciona (0=Dom, 1=Seg, 2=Ter, ..., 6=Sab)
    static DIAS_FUNCIONAMENTO = [2, 3, 4, 5, 6]; // Terça a Sábado

    constructor({ id, clienteId, profissionalId, servicoId, dataHora, status, observacoes }) {
        this.id = id || null;
        this.clienteId = clienteId;
        this.profissionalId = profissionalId;
        this.servicoId = servicoId;
        this.dataHora = dataHora instanceof Date ? dataHora : new Date(dataHora);
        this.status = status || 'confirmado';
        this.observacoes = observacoes || null;
    }

    /**
     * REGRA 1: Valida se o horário está dentro do expediente.
     * Expediente: Terça a Sábado, 08:00 às 18:00.
     * O serviço deve TERMINAR antes do fechamento.
     * 
     * @param {Date} dataHora - Data/hora desejada
     * @param {number} duracaoMin - Duração do serviço em minutos
     * @throws {HorarioForaExpedienteError}
     */
    static validarHorarioExpediente(dataHora, duracaoMin) {
        const data = new Date(dataHora);
        const diaSemana = data.getDay(); // 0=Dom, 6=Sab
        const hora = data.getHours();
        const termino = new Date(data.getTime() + duracaoMin * 60000);
        const horaTermino = termino.getHours();
        const minTermino = termino.getMinutes();

        // Verificar dia da semana
        if (!Agendamento.DIAS_FUNCIONAMENTO.includes(diaSemana)) {
            throw new HorarioForaExpedienteError(data.toLocaleString('pt-BR'));
        }

        // Verificar horário de abertura
        if (hora < Agendamento.HORARIO_ABERTURA) {
            throw new HorarioForaExpedienteError(data.toLocaleString('pt-BR'));
        }

        // Verificar se termina antes do fechamento
        if (horaTermino > Agendamento.HORARIO_FECHAMENTO ||
            (horaTermino === Agendamento.HORARIO_FECHAMENTO && minTermino > 0)) {
            throw new HorarioForaExpedienteError(data.toLocaleString('pt-BR'));
        }
    }

    /**
     * REGRA 2: Verifica se há conflito de horário com agendamentos existentes.
     * 
     * Dois intervalos [A, B] e [C, D] se sobrepõem quando A < D e C < B.
     * 
     * @param {Date} dataHoraNovo - Início do novo agendamento
     * @param {number} duracaoNovo - Duração do novo serviço (min)
     * @param {Array} agendamentosExistentes - [{data_hora, duracao_min}]
     * @returns {boolean} true se houver conflito
     */
    static verificarConflitoHorario(dataHoraNovo, duracaoNovo, agendamentosExistentes) {
        const inicioNovo = new Date(dataHoraNovo).getTime();
        const fimNovo = inicioNovo + duracaoNovo * 60000;

        for (const ag of agendamentosExistentes) {
            const inicioExistente = new Date(ag.data_hora).getTime();
            const fimExistente = inicioExistente + ag.duracao_min * 60000;

            // Sobreposição: A < D && C < B
            if (inicioNovo < fimExistente && inicioExistente < fimNovo) {
                return true; // CONFLITO!
            }
        }

        return false; // Sem conflito
    }

    /**
     * REGRA 3: Só pode cancelar se status for 'confirmado'.
     * @throws {AppError}
     */
    cancelar() {
        if (this.status !== 'confirmado') {
            throw new AppError(
                `Não é possível cancelar. Status atual: ${this.status}`,
                'CANCELAMENTO_INVALIDO',
                400
            );
        }
        this.status = 'cancelado';
    }

    toJSON() {
        return {
            id: this.id,
            clienteId: this.clienteId,
            profissionalId: this.profissionalId,
            servicoId: this.servicoId,
            dataHora: this.dataHora.toISOString(),
            status: this.status,
            observacoes: this.observacoes,
        };
    }
}

module.exports = Agendamento;
