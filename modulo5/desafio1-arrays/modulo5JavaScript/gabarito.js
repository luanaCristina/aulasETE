/**
 * GABARITO — Desafio 1: Carrinho de Compras
 *
 * EXPLICAÇÃO PEDAGÓGICA:
 * - Usamos .map() para transformar cada item (calcular subtotal)
 * - Usamos .reduce() para somar todos os subtotais (mais performático que for+acumulador)
 * - Usamos Math.max/min com spread para encontrar extremos
 * - Separamos as regras de negócio em funções puras (mais testável e legível)
 */

const carrinho = [
  { id: 1, nome: "Fone Bluetooth", preco: 89.90, quantidade: 2 },
  { id: 2, nome: "Carregador USB-C", preco: 45.00, quantidade: 3 },
  { id: 3, nome: "Capa de Celular", preco: 29.90, quantidade: 1 },
  { id: 4, nome: "Película Vidro", preco: 19.90, quantidade: 4 },
  { id: 5, nome: "Smartwatch", preco: 350.00, quantidade: 1 },
];

function calcularDesconto(total) {
  if (total >= 1000) return total * 0.15;
  if (total >= 500) return total * 0.10;
  return 0;
}

function calcularFrete(total) {
  return total > 200 ? 0 : 25.00;
}

function calcularCarrinho(itens) {
  // 1. Subtotais
  const itensComSubtotal = itens.map(item => ({
    nome: item.nome,
    subtotal: +(item.preco * item.quantidade).toFixed(2),
  }));

  // 2. Total bruto
  const totalBruto = +itensComSubtotal
    .reduce((acc, item) => acc + item.subtotal, 0)
    .toFixed(2);

  // 3. Desconto
  const desconto = +calcularDesconto(totalBruto).toFixed(2);
  const totalLiquido = +(totalBruto - desconto).toFixed(2);

  // 4. Frete
  const frete = calcularFrete(totalBruto);
  const totalFinal = +(totalLiquido + frete).toFixed(2);

  // 5. Mais caro e mais barato (pelo preço unitário)
  const precos = itens.map(i => i.preco);
  const maiorPreco = Math.max(...precos);
  const menorPreco = Math.min(...precos);
  const itemMaisCaro = itens.find(i => i.preco === maiorPreco).nome;
  const itemMaisBarato = itens.find(i => i.preco === menorPreco).nome;

  // 6. Quantidade total
  const quantidadeItens = itens.reduce((acc, i) => acc + i.quantidade, 0);

  return {
    itens: itensComSubtotal,
    totalBruto,
    desconto,
    totalLiquido,
    frete,
    totalFinal,
    itemMaisCaro,
    itemMaisBarato,
    quantidadeItens,
  };
}

console.log(JSON.stringify(calcularCarrinho(carrinho), null, 2));

/*
POR QUE ESTA SOLUÇÃO É BOA:
1. .map() + .reduce() = O(n) — percorre o array uma vez para cada operação
2. Funções puras separadas (desconto, frete) — fácil de testar isoladamente
3. .toFixed(2) evita erros de ponto flutuante (0.1 + 0.2 !== 0.3)
4. Nenhuma variável mutável desnecessária — código declarativo e previsível
*/
