-- ============================================================
-- Arquivo: 05-consultas-avancadas.sql
-- Descrição: Consultas avançadas com JOINs, GROUP BY, subqueries
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Selecione o banco "petshop_ete" no pgAdmin
--   2. Execute cada consulta individualmente (selecione e F5)
--   3. Analise como os JOINs conectam as tabelas
-- ============================================================

-- ============================================================
-- CONSULTA 1: JOIN - Agenda completa com nomes
-- Conceito: INNER JOIN entre múltiplas tabelas
-- Pergunta: Qual a agenda completa com nome do pet, serviço e profissional?
-- ============================================================
SELECT 
    a.id AS agendamento_id,
    p.nome AS pet,
    c.nome AS tutor,
    s.nome AS servico,
    prof.nome AS profissional,
    a.data_hora,
    a.status
FROM agendamentos a
INNER JOIN pets p ON a.pet_id = p.id
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN servicos s ON a.servico_id = s.id
INNER JOIN profissionais prof ON a.profissional_id = prof.id
ORDER BY a.data_hora DESC;

-- ============================================================
-- CONSULTA 2: GROUP BY com HAVING
-- Conceito: Agrupamento com filtro no resultado agregado
-- Pergunta: Quais clientes têm mais de 1 pet cadastrado?
-- ============================================================
SELECT 
    c.nome AS cliente,
    COUNT(p.id) AS total_pets
FROM clientes c
INNER JOIN pets p ON c.id = p.cliente_id
GROUP BY c.id, c.nome
HAVING COUNT(p.id) > 1
ORDER BY total_pets DESC;

-- ============================================================
-- CONSULTA 3: Faturamento por serviço
-- Conceito: JOIN + GROUP BY + funções de agregação (SUM, COUNT)
-- Pergunta: Qual o faturamento total por serviço realizado?
-- ============================================================
SELECT 
    s.nome AS servico,
    COUNT(a.id) AS total_atendimentos,
    SUM(s.preco) AS faturamento_total
FROM agendamentos a
INNER JOIN servicos s ON a.servico_id = s.id
WHERE a.status = 'realizado'
GROUP BY s.id, s.nome
ORDER BY faturamento_total DESC;

-- ============================================================
-- CONSULTA 4: Serviço mais popular
-- Conceito: Subquery no WHERE com MAX
-- Pergunta: Qual é o serviço com mais agendamentos?
-- ============================================================
SELECT s.nome AS servico, COUNT(a.id) AS total_agendamentos
FROM servicos s
INNER JOIN agendamentos a ON s.id = a.servico_id
GROUP BY s.id, s.nome
HAVING COUNT(a.id) = (
    SELECT MAX(qtd) FROM (
        SELECT COUNT(id) AS qtd 
        FROM agendamentos 
        GROUP BY servico_id
    ) sub
);

-- ============================================================
-- CONSULTA 5: CASE WHEN - Classificação de peso
-- Conceito: Expressão condicional CASE
-- Pergunta: Como classificar os pets por porte?
-- ============================================================
SELECT 
    nome,
    especie,
    peso,
    CASE 
        WHEN peso IS NULL THEN 'Não informado'
        WHEN peso < 5 THEN 'Pequeno'
        WHEN peso BETWEEN 5 AND 15 THEN 'Médio'
        WHEN peso BETWEEN 15.01 AND 30 THEN 'Grande'
        ELSE 'Gigante'
    END AS porte
FROM pets
ORDER BY peso DESC NULLS LAST;

-- ============================================================
-- CONSULTA 6: LEFT JOIN - Clientes sem agendamentos
-- Conceito: LEFT JOIN para encontrar registros sem correspondência
-- Pergunta: Quais clientes nunca agendaram nenhum serviço?
-- ============================================================
SELECT 
    c.nome AS cliente,
    c.telefone
FROM clientes c
LEFT JOIN pets p ON c.id = p.cliente_id
LEFT JOIN agendamentos a ON p.id = a.pet_id
WHERE a.id IS NULL;

-- ============================================================
-- CONSULTA 7: Detalhamento de vendas
-- Conceito: JOIN múltiplo + cálculo de subtotal
-- Pergunta: Qual o detalhamento de cada venda com subtotais?
-- ============================================================
SELECT 
    v.id AS venda_id,
    c.nome AS cliente,
    pr.nome AS produto,
    iv.quantidade,
    iv.preco_unitario,
    (iv.quantidade * iv.preco_unitario) AS subtotal,
    v.forma_pagamento
FROM vendas v
INNER JOIN clientes c ON v.cliente_id = c.id
INNER JOIN itens_venda iv ON v.id = iv.venda_id
INNER JOIN produtos pr ON iv.produto_id = pr.id
ORDER BY v.id, pr.nome;

-- ============================================================
-- CONSULTA 8: Ranking de profissionais por atendimentos
-- Conceito: GROUP BY + ORDER BY em agregação
-- Pergunta: Quais profissionais realizaram mais atendimentos?
-- ============================================================
SELECT 
    prof.nome AS profissional,
    prof.cargo,
    COUNT(a.id) AS total_atendimentos,
    COUNT(CASE WHEN a.status = 'realizado' THEN 1 END) AS realizados,
    COUNT(CASE WHEN a.status = 'cancelado' THEN 1 END) AS cancelados
FROM profissionais prof
LEFT JOIN agendamentos a ON prof.id = a.profissional_id
GROUP BY prof.id, prof.nome, prof.cargo
ORDER BY total_atendimentos DESC;

-- ============================================================
-- CONSULTA 9: Subquery - Pets que nunca foram atendidos
-- Conceito: NOT IN com subquery
-- Pergunta: Quais pets nunca tiveram nenhum agendamento?
-- ============================================================
SELECT 
    p.nome AS pet,
    p.especie,
    c.nome AS tutor
FROM pets p
INNER JOIN clientes c ON p.cliente_id = c.id
WHERE p.id NOT IN (
    SELECT DISTINCT pet_id FROM agendamentos
);

-- ============================================================
-- CONSULTA 10: Relatório completo de faturamento
-- Conceito: COALESCE, múltiplas agregações, formatação
-- Pergunta: Qual o resumo financeiro do pet shop (serviços + vendas)?
-- ============================================================
SELECT 'Serviços Realizados' AS fonte,
    COUNT(*) AS quantidade,
    SUM(s.preco) AS valor_total
FROM agendamentos a
INNER JOIN servicos s ON a.servico_id = s.id
WHERE a.status = 'realizado'

UNION ALL

SELECT 'Vendas de Produtos' AS fonte,
    COUNT(*) AS quantidade,
    SUM(valor_total) AS valor_total
FROM vendas;
