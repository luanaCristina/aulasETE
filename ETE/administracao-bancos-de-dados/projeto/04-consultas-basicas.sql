-- ============================================================
-- Arquivo: 04-consultas-basicas.sql
-- Descrição: Consultas SELECT básicas (do simples ao intermediário)
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Selecione o banco "petshop_ete" no pgAdmin
--   2. Execute cada consulta individualmente (selecione e F5)
--   3. Analise os resultados de cada uma
-- ============================================================

-- ============================================================
-- CONSULTA 1: Listar todos os clientes
-- Conceito: SELECT simples, todas as colunas
-- Pergunta: Quem são todos os nossos clientes?
-- ============================================================
SELECT * FROM clientes;

-- ============================================================
-- CONSULTA 2: Selecionar colunas específicas
-- Conceito: Projeção (escolher colunas)
-- Pergunta: Qual o nome e telefone de cada cliente?
-- ============================================================
SELECT nome, telefone, email 
FROM clientes;

-- ============================================================
-- CONSULTA 3: Filtrar com WHERE
-- Conceito: Seleção (filtrar linhas)
-- Pergunta: Quais pets são cachorros?
-- ============================================================
SELECT nome, raca, peso 
FROM pets 
WHERE especie = 'cachorro';

-- ============================================================
-- CONSULTA 4: Ordenar resultados
-- Conceito: ORDER BY (ASC/DESC)
-- Pergunta: Quais são os serviços mais caros?
-- ============================================================
SELECT nome, preco, duracao_minutos 
FROM servicos 
ORDER BY preco DESC;

-- ============================================================
-- CONSULTA 5: Busca parcial com LIKE
-- Conceito: LIKE com coringas (% e _)
-- Pergunta: Quais clientes moram na Boa Vista ou Boa Viagem?
-- ============================================================
SELECT nome, endereco 
FROM clientes 
WHERE endereco LIKE '%Boa%';

-- ============================================================
-- CONSULTA 6: Filtro com IN (lista de valores)
-- Conceito: IN como alternativa a múltiplos OR
-- Pergunta: Quais agendamentos estão pendentes ou confirmados?
-- ============================================================
SELECT id, pet_id, data_hora, status 
FROM agendamentos 
WHERE status IN ('agendado', 'confirmado')
ORDER BY data_hora;

-- ============================================================
-- CONSULTA 7: Filtro com BETWEEN (intervalo)
-- Conceito: BETWEEN para intervalos numéricos ou de data
-- Pergunta: Quais produtos custam entre R$30 e R$100?
-- ============================================================
SELECT nome, categoria, preco 
FROM produtos 
WHERE preco BETWEEN 30.00 AND 100.00
ORDER BY preco;

-- ============================================================
-- CONSULTA 8: Múltiplas condições (AND/OR)
-- Conceito: Operadores lógicos combinados
-- Pergunta: Quais cachorros pesam mais de 10kg?
-- ============================================================
SELECT p.nome, p.raca, p.peso 
FROM pets p
WHERE p.especie = 'cachorro' AND p.peso > 10
ORDER BY p.peso DESC;

-- ============================================================
-- CONSULTA 9: Contagem e Alias
-- Conceito: COUNT(), AS (alias)
-- Pergunta: Quantos pets temos de cada espécie?
-- ============================================================
SELECT especie, COUNT(*) AS quantidade 
FROM pets 
GROUP BY especie
ORDER BY quantidade DESC;

-- ============================================================
-- CONSULTA 10: Produtos com estoque baixo
-- Conceito: Comparação entre colunas, operador <=
-- Pergunta: Quais produtos precisam de reposição?
-- ============================================================
SELECT nome, categoria, estoque, estoque_minimo
FROM produtos 
WHERE estoque <= estoque_minimo
ORDER BY estoque;
