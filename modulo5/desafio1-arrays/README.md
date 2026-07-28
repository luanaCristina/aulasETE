# 🏪 Desafio 1 — Carrinho de Compras (45 min)

## Contexto do Mercado

Você trabalha na equipe de back-end de um **e-commerce de eletrônicos** (tipo Magazalu ou Mercado Livre). O time de produto pediu um relatório do carrinho de compras que calcula:

- Subtotal de cada item (preço × quantidade)
- Total do carrinho
- Desconto progressivo (acima de R$ 500 = 10%, acima de R$ 1000 = 15%)
- Frete grátis para compras acima de R$ 200
- Item mais caro e item mais barato do carrinho

Este é um problema real que todo e-commerce resolve no back-end antes de enviar os dados para o front/checkout.

---

## 📥 Dados de Entrada

```javascript
const carrinho = [
  { id: 1, nome: "Fone Bluetooth", preco: 89.90, quantidade: 2 },
  { id: 2, nome: "Carregador USB-C", preco: 45.00, quantidade: 3 },
  { id: 3, nome: "Capa de Celular", preco: 29.90, quantidade: 1 },
  { id: 4, nome: "Película Vidro", preco: 19.90, quantidade: 4 },
  { id: 5, nome: "Smartwatch", preco: 350.00, quantidade: 1 },
];
```

---

## 📤 Resultado Esperado

```javascript
{
  itens: [
    { nome: "Fone Bluetooth", subtotal: 179.80 },
    { nome: "Carregador USB-C", subtotal: 135.00 },
    { nome: "Capa de Celular", subtotal: 29.90 },
    { nome: "Película Vidro", subtotal: 79.60 },
    { nome: "Smartwatch", subtotal: 350.00 },
  ],
  totalBruto: 774.30,
  desconto: 77.43,       // 10% (entre 500 e 1000)
  totalLiquido: 696.87,
  frete: 0,              // Grátis (> R$ 200)
  totalFinal: 696.87,
  itemMaisCaro: "Smartwatch",
  itemMaisBarato: "Película Vidro",
  quantidadeItens: 11,   // soma das quantidades
}
```

---

## 📐 Regras de Negócio

1. `subtotal = preco × quantidade` para cada item
2. `totalBruto = soma de todos os subtotais`
3. Desconto: `< R$500 = 0%` | `R$500-999 = 10%` | `≥ R$1000 = 15%`
4. Frete: `≤ R$200 = R$25.00` | `> R$200 = grátis`
5. `totalFinal = totalLiquido + frete`
6. Item mais caro/barato = baseado no preço unitário (não subtotal)
7. `quantidadeItens = soma de todas as quantidades`

---

## ⏱️ Tempo: 45 minutos
