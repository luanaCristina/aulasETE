-- ============================================================
-- Arquivo: 07-views-relatorios.sql
-- Descrição: Views para relatórios gerenciais do Pet Shop
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Selecione o banco "petshop_ete" no pgAdmin
--   2. Execute o script completo (F5) para criar todas as views
--   3. Depois consulte cada view com: SELECT * FROM nome_da_view;
-- ============================================================

-- ============================================================
-- VIEW 1: Agenda do Dia (ou qualquer data)
-- Relatório: Agenda diária com todos os detalhes
-- Uso: SELECT * FROM vw_agenda_dia WHERE data_agendamento = CURRENT_DATE;
-- ============================================================
CREATE OR REPLACE VIEW vw_agenda_dia AS
SELECT 
    a.id AS agendamento_id,
    a.data_hora::date AS data_agendamento,
    a.data_hora::time AS horario,
    p.nome AS pet,
    pet_esp.especie,
    c.nome AS tutor,
    c.telefone AS telefone_tutor,
    s.nome AS servico,
    s.preco AS valor_servico,
    s.duracao_minutos,
    prof.nome AS profissional,
    a.status,
    a.observacoes
FROM agendamentos a
INNER JOIN pets p ON a.pet_id = p.id
INNER JOIN pets pet_esp ON a.pet_id = pet_esp.id
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN servicos s ON a.servico_id = s.id
INNER JOIN profissionais prof ON a.profissional_id = prof.id
WHERE a.status != 'cancelado'
ORDER BY a.data_hora;

-- Exemplo de uso:
-- SELECT * FROM vw_agenda_dia WHERE data_agendamento = '2025-02-15';

COMMENT ON VIEW vw_agenda_dia IS 'Agenda detalhada - filtre por data_agendamento';

-- ============================================================
-- VIEW 2: Faturamento Mensal
-- Relatório: Receita de serviços e vendas por mês
-- Uso: SELECT * FROM vw_faturamento_mensal;
-- ============================================================
CREATE OR REPLACE VIEW vw_faturamento_mensal AS
SELECT 
    TO_CHAR(data_ref, 'YYYY-MM') AS mes,
    TO_CHAR(data_ref, 'TMMonth/YYYY') AS mes_extenso,
    fonte,
    quantidade,
    valor_total
FROM (
    -- Faturamento de serviços realizados
    SELECT 
        a.data_hora AS data_ref,
        'Serviços' AS fonte,
        COUNT(*) AS quantidade,
        SUM(s.preco) AS valor_total
    FROM agendamentos a
    INNER JOIN servicos s ON a.servico_id = s.id
    WHERE a.status = 'realizado'
    GROUP BY TO_CHAR(a.data_hora, 'YYYY-MM'), a.data_hora
    
    UNION ALL
    
    -- Faturamento de vendas de produtos
    SELECT 
        v.data_venda AS data_ref,
        'Produtos' AS fonte,
        COUNT(*) AS quantidade,
        SUM(v.valor_total) AS valor_total
    FROM vendas v
    GROUP BY TO_CHAR(v.data_venda, 'YYYY-MM'), v.data_venda
) AS faturamento
ORDER BY mes DESC, fonte;

COMMENT ON VIEW vw_faturamento_mensal IS 'Faturamento mensal separado por serviços e produtos';

-- ============================================================
-- VIEW 3: Produtos com Estoque Baixo
-- Relatório: Alerta de reposição de estoque
-- Uso: SELECT * FROM vw_estoque_baixo;
-- ============================================================
CREATE OR REPLACE VIEW vw_estoque_baixo AS
SELECT 
    id,
    nome AS produto,
    categoria,
    estoque AS qtd_atual,
    estoque_minimo AS qtd_minima,
    (estoque_minimo - estoque) AS qtd_repor,
    CASE 
        WHEN estoque = 0 THEN '🔴 ESGOTADO'
        WHEN estoque <= estoque_minimo THEN '🟡 BAIXO'
        ELSE '🟢 OK'
    END AS situacao
FROM produtos
WHERE estoque <= estoque_minimo
ORDER BY estoque ASC;

COMMENT ON VIEW vw_estoque_baixo IS 'Produtos que precisam de reposição urgente';

-- ============================================================
-- VIEW 4: Ficha Completa do Pet
-- Relatório: Dados completos do pet com histórico resumido
-- Uso: SELECT * FROM vw_ficha_pet WHERE pet = 'Rex';
-- ============================================================
CREATE OR REPLACE VIEW vw_ficha_pet AS
SELECT 
    p.id AS pet_id,
    p.nome AS pet,
    p.especie,
    p.raca,
    p.peso || ' kg' AS peso,
    COALESCE(
        EXTRACT(YEAR FROM AGE(CURRENT_DATE, p.data_nascimento))::TEXT || ' anos',
        'Idade não informada'
    ) AS idade,
    p.observacoes AS obs_pet,
    c.nome AS tutor,
    c.telefone,
    c.email,
    COUNT(a.id) AS total_agendamentos,
    COUNT(CASE WHEN a.status = 'realizado' THEN 1 END) AS atendimentos_realizados,
    MAX(a.data_hora) AS ultimo_atendimento
FROM pets p
INNER JOIN clientes c ON p.cliente_id = c.id
LEFT JOIN agendamentos a ON p.id = a.pet_id
GROUP BY p.id, p.nome, p.especie, p.raca, p.peso, 
         p.data_nascimento, p.observacoes,
         c.nome, c.telefone, c.email
ORDER BY p.nome;

COMMENT ON VIEW vw_ficha_pet IS 'Ficha completa do pet com dados do tutor e histórico';

-- ============================================================
-- COMO USAR AS VIEWS:
-- ============================================================
-- As views funcionam como "tabelas virtuais". Use SELECT nelas:

-- Ver agenda de uma data específica:
-- SELECT * FROM vw_agenda_dia WHERE data_agendamento = '2025-02-15';

-- Ver faturamento:
-- SELECT * FROM vw_faturamento_mensal;

-- Ver alertas de estoque:
-- SELECT * FROM vw_estoque_baixo;

-- Ver ficha de um pet:
-- SELECT * FROM vw_ficha_pet WHERE pet = 'Rex';

-- ============================================================
-- FIM - Views criadas! Use-as para relatórios gerenciais.
-- ============================================================
