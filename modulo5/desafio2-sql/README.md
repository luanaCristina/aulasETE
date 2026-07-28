# 🏢 Desafio 2 — Relatório de Folha de Pagamento (45 min)

## Contexto do Mercado

Você é dev em uma **startup de RH** (tipo Gupy/Kenoby). O time financeiro precisa
de um relatório mensal consolidado da folha de pagamento com: total por departamento,
média salarial, e funcionários acima da média. Isso é resolvido com **GROUP BY + JOIN + subqueries**.

---

## 📥 Banco de Dados (executar o boilerplate.sql primeiro)

### Tabelas
- `departamentos` (id, nome)
- `funcionarios` (id, nome, departamento_id, salario, data_admissao, ativo)

---

## 📤 Resultados Esperados

### Query 1: Total da folha por departamento
```
| departamento | qtd_funcionarios | total_folha | media_salarial |
|---|---|---|---|
| Engenharia   | 4  | 28000.00 | 7000.00 |
| Produto      | 3  | 18500.00 | 6166.67 |
| Marketing    | 2  | 9000.00  | 4500.00 |
| RH           | 2  | 8500.00  | 4250.00 |
```

### Query 2: Funcionários acima da média geral da empresa
```
| nome          | departamento | salario | diferenca_media |
|---|---|---|---|
| Carlos Mendes | Engenharia   | 9500.00 | 3700.00 |
| Ana Paula     | Engenharia   | 8000.00 | 2200.00 |
| Roberto Lima  | Produto      | 7500.00 | 1700.00 |
```

### Query 3: Departamento com maior custo e menor custo
```
| tipo          | departamento | total_folha |
|---|---|---|
| Maior custo   | Engenharia   | 28000.00 |
| Menor custo   | RH           | 8500.00  |
```

---

## ⏱️ Tempo: 45 minutos
## 📐 Habilidades testadas: GROUP BY, HAVING, JOIN, Subquery, ORDER BY
