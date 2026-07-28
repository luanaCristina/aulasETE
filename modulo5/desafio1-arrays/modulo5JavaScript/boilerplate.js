/**
 * DESAFIO 1 — Carrinho de Compras
 * Implemente a função calcularCarrinho()
 * Tempo: 45 minutos
 */

const carrinho = [
  { id: 1, nome: "Fone Bluetooth", preco: 89.90, quantidade: 2 },
  { id: 2, nome: "Carregador USB-C", preco: 45.00, quantidade: 3 },
  { id: 3, nome: "Capa de Celular", preco: 29.90, quantidade: 1 },
  { id: 4, nome: "Película Vidro", preco: 19.90, quantidade: 4 },
  { id: 5, nome: "Smartwatch", preco: 350.00, quantidade: 1 },
];

function calcularCarrinho(itens) {
  // TODO: Implementar aqui
  // 1. Calcular subtotal de cada item
  // 2. Calcular total bruto
  // 3. Aplicar desconto progressivo
  // 4. Calcular frete
  // 5. Encontrar item mais caro e mais barato
  // 6. Contar quantidade total de itens
}

// Teste
const resultado = calcularCarrinho(carrinho);
console.log(JSON.stringify(resultado, null, 2));
