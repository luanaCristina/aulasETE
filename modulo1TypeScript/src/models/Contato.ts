/**
 * Interface que define os dados do formulário de contato.
 */
export interface Contato {
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
  tipoArtesanato?: string;
  mensagem: string;
  recebidoEm?: string;
}

/**
 * Resultado de uma validação.
 */
export interface ValidationResult {
  valido: boolean;
  erros: string[];
}
