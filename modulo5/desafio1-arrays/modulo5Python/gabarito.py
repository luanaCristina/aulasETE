"""
GABARITO — Desafio 1: Carrinho de Compras (Python)

EXPLICAÇÃO PEDAGÓGICA:
- List comprehension para subtotais (pythônico e rápido)
- sum() com generator expression (memória eficiente)
- min()/max() com key= para encontrar extremos
- Funções puras para regras de negócio
"""

carrinho = [
    {"id": 1, "nome": "Fone Bluetooth", "preco": 89.90, "quantidade": 2},
    {"id": 2, "nome": "Carregador USB-C", "preco": 45.00, "quantidade": 3},
    {"id": 3, "nome": "Capa de Celular", "preco": 29.90, "quantidade": 1},
    {"id": 4, "nome": "Película Vidro", "preco": 19.90, "quantidade": 4},
    {"id": 5, "nome": "Smartwatch", "preco": 350.00, "quantidade": 1},
]


def calcular_desconto(total: float) -> float:
    if total >= 1000:
        return round(total * 0.15, 2)
    elif total >= 500:
        return round(total * 0.10, 2)
    return 0


def calcular_frete(total: float) -> float:
    return 0 if total > 200 else 25.00


def calcular_carrinho(itens: list[dict]) -> dict:
    # 1. Subtotais
    itens_sub = [
        {"nome": i["nome"], "subtotal": round(i["preco"] * i["quantidade"], 2)}
        for i in itens
    ]

    # 2. Total bruto
    total_bruto = round(sum(i["subtotal"] for i in itens_sub), 2)

    # 3. Desconto
    desconto = calcular_desconto(total_bruto)
    total_liquido = round(total_bruto - desconto, 2)

    # 4. Frete
    frete = calcular_frete(total_bruto)
    total_final = round(total_liquido + frete, 2)

    # 5. Extremos
    mais_caro = max(itens, key=lambda x: x["preco"])["nome"]
    mais_barato = min(itens, key=lambda x: x["preco"])["nome"]

    # 6. Quantidade
    qtd_total = sum(i["quantidade"] for i in itens)

    return {
        "itens": itens_sub,
        "totalBruto": total_bruto,
        "desconto": desconto,
        "totalLiquido": total_liquido,
        "frete": frete,
        "totalFinal": total_final,
        "itemMaisCaro": mais_caro,
        "itemMaisBarato": mais_barato,
        "quantidadeItens": qtd_total,
    }


import json
print(json.dumps(calcular_carrinho(carrinho), indent=2, ensure_ascii=False))
