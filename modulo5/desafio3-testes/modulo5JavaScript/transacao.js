/**
 * Módulo de Validação de Transações — CÓDIGO PRONTO
 * O aluno deve ESCREVER OS TESTES para esta função.
 */

function validarTransacao(transacao) {
  const { valor, limite, contaOrigem, contaDestino, horario } = transacao;

  // Regra 1: Valor deve ser positivo
  if (valor <= 0) {
    return { valida: false, motivo: "Valor deve ser maior que zero." };
  }

  // Regra 2: Valor não pode exceder limite
  if (valor > limite) {
    return { valida: false, motivo: "Valor excede o limite disponível." };
  }

  // Regra 3: Não pode transferir para si mesmo
  if (contaOrigem === contaDestino) {
    return { valida: false, motivo: "Auto-transferência não permitida." };
  }

  // Regra 4: Anti-fraude noturno
  const hora = horario.getHours();
  if ((hora >= 23 || hora < 6) && valor > 1000) {
    return { valida: false, motivo: "Transações acima de R$1000 bloqueadas entre 23h e 6h." };
  }

  return { valida: true, motivo: null };
}

module.exports = { validarTransacao };
