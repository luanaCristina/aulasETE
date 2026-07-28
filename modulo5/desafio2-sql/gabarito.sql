-- ==========================================================
-- GABARITO — Desafio 2: Relatório de Folha de Pagamento
-- ==========================================================

-- QUERY 1: Total da folha por departamento
-- JOIN para trazer nome do departamento + GROUP BY + funções agregadas
SELECT
    d.nome AS departamento,
    COUNT(f.id) AS qtd_funcionarios,
    SUM(f.salario) AS total_folha,
    ROUND(AVG(f.salario), 2) AS media_salarial
FROM funcionarios f
INNER JOIN departamentos d ON f.departamento_id = d.id
WHERE f.ativo = TRUE
GROUP BY d.id, d.nome
ORDER BY total_folha DESC;

/*
EXPLICAÇÃO PEDAGÓGICA:
- INNER JOIN traz o nome do departamento
- GROUP BY agrupa por departamento
- SUM/COUNT/AVG são funções de agregação que atuam sobre cada grupo
- ORDER BY total_folha DESC mostra o maior primeiro
- WHERE filtra ANTES do agrupamento (apenas ativos)
*/


-- QUERY 2: Funcionários acima da média geral
-- Subquery no WHERE para calcular a média global
SELECT
    f.nome,
    d.nome AS departamento,
    f.salario,
    ROUND(f.salario - (SELECT AVG(salario) FROM funcionarios WHERE ativo = TRUE), 2) AS diferenca_media
FROM funcionarios f
INNER JOIN departamentos d ON f.departamento_id = d.id
WHERE f.ativo = TRUE
  AND f.salario > (SELECT AVG(salario) FROM funcionarios WHERE ativo = TRUE)
ORDER BY f.salario DESC;

/*
EXPLICAÇÃO PEDAGÓGICA:
- A subquery (SELECT AVG(salario) FROM funcionarios) calcula a média UMA VEZ
- Usamos ela tanto no WHERE (filtrar) quanto no SELECT (mostrar diferença)
- Alternativa: CTE (WITH media AS ...) — mais legível para queries complexas
*/


-- QUERY 3: Departamento com maior e menor custo
-- UNION de duas queries com LIMIT 1 + ORDER BY
(
  SELECT 'Maior custo' AS tipo, d.nome AS departamento, SUM(f.salario) AS total_folha
  FROM funcionarios f
  JOIN departamentos d ON f.departamento_id = d.id
  WHERE f.ativo = TRUE
  GROUP BY d.id, d.nome
  ORDER BY total_folha DESC
  LIMIT 1
)
UNION ALL
(
  SELECT 'Menor custo', d.nome, SUM(f.salario)
  FROM funcionarios f
  JOIN departamentos d ON f.departamento_id = d.id
  WHERE f.ativo = TRUE
  GROUP BY d.id, d.nome
  ORDER BY total_folha ASC
  LIMIT 1
);

/*
EXPLICAÇÃO PEDAGÓGICA:
- UNION ALL combina dois resultados (MAX e MIN) em uma tabela
- Cada subquery tem seu próprio ORDER BY + LIMIT 1
- Alternativa: window functions (FIRST_VALUE/LAST_VALUE) — mais avançado
- UNION ALL é mais performático que UNION (não remove duplicatas)
*/
