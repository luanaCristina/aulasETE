import { HorarioForaExpedienteError } from '../models/errors';
import { SlotOcupado } from '../models/types';

/**
 * Serviço de Agendamento — Regras de negócio em TypeScript.
 *
 * Conceitos demonstrados:
 * - Métodos estáticos com tipagem forte
 * - Enums e interfaces
 * - Lançamento de exceções tipadas
 */
export class AgendamentoService {
  // Expediente: Terça(2) a Sábado(6)
  private static readonly DIAS_FUNCIONAMENTO: number[] = [2, 3, 4, 5, 6];
  private static readonly HORARIO_ABERTURA: number = 8;
  private static readonly HORARIO_FECHAMENTO: number = 18;

  /**
   * REGRA 1: Valida horário de expediente.
   * Ter-Sáb, 08h-18h. Serviço deve terminar antes do fechamento.
   */
  static validarHorarioExpediente(dataHora: Date, duracaoMin: number): void {
    const dia = dataHora.getDay(); // 0=Dom, 6=Sab
    const hora = dataHora.getHours();
    const termino = new Date(dataHora.getTime() + duracaoMin * 60_000);

    if (!this.DIAS_FUNCIONAMENTO.includes(dia)) {
      throw new HorarioForaExpedienteError(dataHora.toLocaleString('pt-BR'));
    }

    if (hora < this.HORARIO_ABERTURA) {
      throw new HorarioForaExpedienteError(dataHora.toLocaleString('pt-BR'));
    }

    if (termino.getHours() > this.HORARIO_FECHAMENTO ||
      (termino.getHours() === this.HORARIO_FECHAMENTO && termino.getMinutes() > 0)) {
      throw new HorarioForaExpedienteError(dataHora.toLocaleString('pt-BR'));
    }
  }

  /**
   * REGRA 2: Verifica conflito de horário.
   * Dois intervalos [A,B] e [C,D] se sobrepõem quando A < D e C < B.
   */
  static verificarConflitoHorario(
    dataHora: Date,
    duracao: number,
    existentes: SlotOcupado[]
  ): boolean {
    const inicioNovo = dataHora.getTime();
    const fimNovo = inicioNovo + duracao * 60_000;

    for (const slot of existentes) {
      const inicioExistente = new Date(slot.data_hora).getTime();
      const fimExistente = inicioExistente + slot.duracao_min * 60_000;

      if (inicioNovo < fimExistente && inicioExistente < fimNovo) {
        return true; // CONFLITO
      }
    }

    return false;
  }
}
