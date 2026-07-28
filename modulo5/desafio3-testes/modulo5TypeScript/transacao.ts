/** Módulo de validação — TypeScript. Aluno deve escrever os testes. */

export interface Transacao {
  valor: number;
  limite: number;
  contaOrigem: string;
  contaDestino: string;
  horario: Date;
}

export interface ResultadoValidacao {
  valida: boolean;
  motivo: string | null;
}

export function validarTransacao(t: Transacao): ResultadoValidacao {
  if (t.valor <= 0) return { valida: false, motivo: "Valor deve ser maior que zero." };
  if (t.valor > t.limite) return { valida: false, motivo: "Valor excede o limite." };
  if (t.contaOrigem === t.contaDestino) return { valida: false, motivo: "Auto-transferência não permitida." };
  const h = t.horario.getHours();
  if ((h >= 23 || h < 6) && t.valor > 1000) return { valida: false, motivo: "Bloqueada entre 23h-6h acima de R$1000." };
  return { valida: true, motivo: null };
}
