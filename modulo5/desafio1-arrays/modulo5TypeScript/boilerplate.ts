/**
 * DESAFIO 1 — Carrinho de Compras (TypeScript)
 * Tempo: 45 minutos
 */

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface ResultadoCarrinho {
  itens: { nome: string; subtotal: number }[];
  totalBruto: number;
  desconto: number;
  totalLiquido: number;
  frete: number;
  totalFinal: number;
  itemMaisCaro: string;
  itemMaisBarato: string;
  quantidadeItens: number;
}

const carrinho: ItemCarrinho[] = [
  { id: 1, nome: "Fone Bluetooth", preco: 89.90, quantidade: 2 },
  { id: 2, nome: "Carregador USB-C", preco: 45.00, quantidade: 3 },
  { id: 3, nome: "Capa de Celular", preco: 29.90, quantidade: 1 },
  { id: 4, nome: "Película Vidro", preco: 19.90, quantidade: 4 },
  { id: 5, nome: "Smartwatch", preco: 350.00, quantidade: 1 },
];

function calcularCarrinho(itens: ItemCarrinho[]): ResultadoCarrinho {
  // TODO: Implementar aqui com tipagem forte
  throw new Error("Não implementado");
}

console.log(calcularCarrinho(carrinho));
