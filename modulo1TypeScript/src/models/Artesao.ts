/**
 * Interface que define a estrutura de um Artesão.
 * TypeScript garante que todos os objetos sigam este contrato.
 */
export interface Artesao {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  foto: string;
}
