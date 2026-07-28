/**
 * Interfaces de domínio — Salão Beleza & Arte
 */

export enum StatusAgendamento {
  CONFIRMADO = 'confirmado',
  CANCELADO = 'cancelado',
  CONCLUIDO = 'concluido',
}

export interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email: string | null;
  created_at: Date;
}

export interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  ativo: boolean;
  created_at: Date;
}

export interface Servico {
  id: number;
  nome: string;
  duracao_min: number;
  preco: number;
  ativo: boolean;
}

export interface Agendamento {
  id: number;
  cliente_id: number;
  profissional_id: number;
  servico_id: number;
  data_hora: Date;
  status: StatusAgendamento;
  observacoes: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface AgendamentoDetalhado extends Agendamento {
  cliente_nome: string;
  profissional_nome: string;
  servico_nome: string;
}

export interface SlotOcupado {
  data_hora: Date;
  duracao_min: number;
}
