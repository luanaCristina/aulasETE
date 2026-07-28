-- ============================================================
-- QUERIES DML — CRUD e Relatórios com JOIN
-- Módulo II — ETE Advogado José David Gil Rodrigues
-- ============================================================

-- ============================================================
-- CRUD BÁSICO
-- ============================================================

-- CREATE: Inserir novo cliente
INSERT INTO clientes (nome, telefone, email) 
VALUES ('Novo Cliente', '(81) 91234-5678', 'novo@email.com');

-- READ: Buscar todos os clientes
SELECT * FROM clientes ORDER BY nome;

-- READ: Buscar cliente por ID
SELECT * FROM clientes WHERE id = 1;

-- UPDATE: Atualizar telefone do cliente
UPDATE clientes 
SET telefone = '(81) 99999-0000' 
WHERE id = 1;

-- DELETE: Remover cliente (só funciona se não tiver agendamentos - RESTRICT)
DELETE FROM clientes WHERE id = 7;

-- ============================================================
-- RELATÓRIO 1: Agenda do dia (JOIN de 4 tabelas)
-- Mostra todos os agendamentos de uma data com detalhes
-- ============================================================

SELECT 
    a.id AS agendamento_id,
    a.data_hora,
    c.nome AS cliente,
    c.telefone AS telefone_cliente,
    p.nome AS profissional,
    s.nome AS servico,
    s.duracao_min,
    s.preco,
    a.status,
    a.observacoes
FROM agendamentos a
INNER JOIN clientes c ON a.cliente_id = c.id
INNER JOIN profissionais p ON a.profissional_id = p.id
INNER JOIN servicos s ON a.servico_id = s.id
WHERE DATE(a.data_hora) = '2025-08-05'
  AND a.status = 'confirmado'
ORDER BY a.data_hora, p.nome;

-- ============================================================
-- RELATÓRIO 2: Serviços mais agendados (TOP 5)
-- ============================================================

SELECT 
    s.nome AS servico,
    s.preco,
    COUNT(a.id) AS total_agendamentos
FROM servicos s
LEFT JOIN agendamentos a ON s.id = a.servico_id
GROUP BY s.id, s.nome, s.preco
ORDER BY total_agendamentos DESC
LIMIT 5;

-- ============================================================
-- RELATÓRIO 3: Faturamento por profissional (mês atual)
-- ============================================================

SELECT 
    p.nome AS profissional,
    p.especialidade,
    COUNT(a.id) AS atendimentos,
    COALESCE(SUM(s.preco), 0) AS faturamento_total
FROM profissionais p
LEFT JOIN agendamentos a ON p.id = a.profissional_id 
    AND a.status = 'concluido'
    AND EXTRACT(MONTH FROM a.data_hora) = EXTRACT(MONTH FROM CURRENT_DATE)
    AND EXTRACT(YEAR FROM a.data_hora) = EXTRACT(YEAR FROM CURRENT_DATE)
LEFT JOIN servicos s ON a.servico_id = s.id
GROUP BY p.id, p.nome, p.especialidade
ORDER BY faturamento_total DESC;

-- ============================================================
-- RELATÓRIO 4: Clientes mais frequentes
-- ============================================================

SELECT 
    c.nome AS cliente,
    c.telefone,
    COUNT(a.id) AS total_visitas,
    MAX(a.data_hora) AS ultima_visita
FROM clientes c
INNER JOIN agendamentos a ON c.id = a.cliente_id
WHERE a.status IN ('confirmado', 'concluido')
GROUP BY c.id, c.nome, c.telefone
ORDER BY total_visitas DESC;

-- ============================================================
-- RELATÓRIO 5: Horários disponíveis de um profissional em um dia
-- (Mostra os horários já ocupados para identificar os livres)
-- ============================================================

SELECT 
    a.data_hora AS horario_ocupado,
    s.nome AS servico,
    s.duracao_min,
    (a.data_hora + (s.duracao_min || ' minutes')::INTERVAL) AS termino_previsto
FROM agendamentos a
INNER JOIN servicos s ON a.servico_id = s.id
WHERE a.profissional_id = 1  -- ID da profissional Fátima
  AND DATE(a.data_hora) = '2025-08-05'
  AND a.status = 'confirmado'
ORDER BY a.data_hora;

-- ============================================================
-- CONSULTA AUXILIAR: Verificar conflito de horário
-- Usada antes de inserir um novo agendamento
-- ============================================================

-- Verifica se existe agendamento conflitante para o profissional
-- no intervalo [data_hora_inicio, data_hora_inicio + duracao_servico]
SELECT COUNT(*) AS conflitos
FROM agendamentos a
INNER JOIN servicos s ON a.servico_id = s.id
WHERE a.profissional_id = 1  -- profissional desejado
  AND a.status = 'confirmado'
  AND (
    -- Novo agendamento começa durante um existente
    '2025-08-05 09:30:00' >= a.data_hora 
    AND '2025-08-05 09:30:00' < (a.data_hora + (s.duracao_min || ' minutes')::INTERVAL)
  )
  OR (
    -- Novo agendamento termina durante um existente
    ('2025-08-05 09:30:00'::TIMESTAMP + '45 minutes'::INTERVAL) > a.data_hora 
    AND ('2025-08-05 09:30:00'::TIMESTAMP + '45 minutes'::INTERVAL) <= (a.data_hora + (s.duracao_min || ' minutes')::INTERVAL)
  );
