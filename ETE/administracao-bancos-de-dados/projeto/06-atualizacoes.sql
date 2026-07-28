-- ============================================================
-- Arquivo: 06-atualizacoes.sql
-- Descrição: Exemplos de UPDATE e DELETE seguros com transações
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Selecione o banco "petshop_ete" no pgAdmin
--   2. IMPORTANTE: Execute cada bloco separadamente!
--   3. Use BEGIN/ROLLBACK para testar sem alterar dados
-- ============================================================

-- ============================================================
-- ⚠️ REGRA DE OURO: Sempre use WHERE em UPDATE e DELETE!
-- Sem WHERE, TODOS os registros serão afetados!
-- ============================================================

-- ============================================================
-- UPDATE 1: Atualização simples
-- Cenário: Cliente mudou de telefone
-- ============================================================
-- Primeiro, veja o registro atual:
SELECT nome, telefone FROM clientes WHERE id = 1;

-- Agora atualize:
UPDATE clientes 
SET telefone = '(81) 99999-0001'
WHERE id = 1;

-- Confirme a alteração:
SELECT nome, telefone FROM clientes WHERE id = 1;

-- ============================================================
-- UPDATE 2: Atualizar múltiplos campos
-- Cenário: Profissional mudou de cargo e especialidade
-- ============================================================
UPDATE profissionais 
SET cargo = 'veterinário',
    especialidade = 'Clínica geral e dermatologia'
WHERE id = 5 AND nome = 'Juliana Ramos';

-- ============================================================
-- UPDATE 3: Atualizar com base em condição
-- Cenário: Reajuste de 10% em todos os serviços ativos
-- ============================================================
-- Veja os preços antes:
SELECT nome, preco FROM servicos WHERE ativo = TRUE;

-- Aplique o reajuste:
UPDATE servicos 
SET preco = ROUND(preco * 1.10, 2)
WHERE ativo = TRUE;

-- Veja os preços depois:
SELECT nome, preco FROM servicos WHERE ativo = TRUE;

-- ============================================================
-- UPDATE 4: Atualizar com subquery
-- Cenário: Confirmar todos os agendamentos de amanhã
-- ============================================================
UPDATE agendamentos 
SET status = 'confirmado'
WHERE status = 'agendado'
  AND data_hora::date = '2025-02-20';

-- ============================================================
-- UPDATE 5: Atualizar estoque após venda
-- Cenário: Diminuir estoque quando produto é vendido
-- ============================================================
UPDATE produtos 
SET estoque = estoque - 1
WHERE id = 5 AND estoque > 0;  -- Proteção: só diminui se tem estoque

-- ============================================================
-- DELETE 1: Excluir registro específico (SEGURO)
-- Cenário: Cancelar um agendamento (excluir agendamento cancelado antigo)
-- ============================================================
-- Primeiro, veja o que vai ser excluído:
SELECT * FROM agendamentos WHERE id = 14 AND status = 'cancelado';

-- Agora exclua (com segurança - só exclui se for cancelado):
DELETE FROM agendamentos 
WHERE id = 14 AND status = 'cancelado';

-- ============================================================
-- DELETE 2: Excluir com condição temporal
-- Cenário: Limpar agendamentos cancelados com mais de 30 dias
-- ============================================================
-- Veja os candidatos à exclusão:
SELECT id, data_hora, status 
FROM agendamentos 
WHERE status = 'cancelado' 
  AND data_hora < CURRENT_DATE - INTERVAL '30 days';

-- Execute a limpeza:
DELETE FROM agendamentos 
WHERE status = 'cancelado' 
  AND data_hora < CURRENT_DATE - INTERVAL '30 days';

-- ============================================================
-- TRANSAÇÕES: BEGIN, COMMIT e ROLLBACK
-- Conceito: Garantir que operações complexas sejam atômicas
-- ============================================================

-- ============================================================
-- TRANSAÇÃO 1: Registrar uma venda completa
-- Se qualquer passo falhar, nada é gravado (ROLLBACK)
-- ============================================================
BEGIN;  -- Inicia a transação

-- Passo 1: Criar a venda
INSERT INTO vendas (cliente_id, data_venda, valor_total, forma_pagamento)
VALUES (3, CURRENT_TIMESTAMP, 71.80, 'pix');

-- Passo 2: Adicionar itens (usando o ID da venda criada)
INSERT INTO itens_venda (venda_id, produto_id, quantidade, preco_unitario)
VALUES 
    (currval('vendas_id_seq'), 3, 1, 25.90),
    (currval('vendas_id_seq'), 6, 1, 45.00);

-- Passo 3: Atualizar o estoque
UPDATE produtos SET estoque = estoque - 1 WHERE id = 3;
UPDATE produtos SET estoque = estoque - 1 WHERE id = 6;

-- Se tudo deu certo:
COMMIT;  -- Salva tudo permanentemente

-- Se algo deu errado (descomente para usar):
-- ROLLBACK;  -- Desfaz TUDO desde o BEGIN

-- ============================================================
-- TRANSAÇÃO 2: Teste com ROLLBACK (nada é salvo)
-- Use para praticar sem medo de errar!
-- ============================================================
BEGIN;

-- Vamos "excluir" todos os clientes (CUIDADO! Mas não se preocupe...)
DELETE FROM itens_venda;
DELETE FROM vendas;
DELETE FROM agendamentos;
DELETE FROM pets;
DELETE FROM clientes;

-- Verifique: tabelas vazias!
SELECT COUNT(*) AS clientes_restantes FROM clientes;

-- ROLLBACK desfaz tudo! Seus dados voltam ao normal:
ROLLBACK;

-- Confirme: dados intactos!
SELECT COUNT(*) AS clientes_restantes FROM clientes;

-- ============================================================
-- FIM - Lembre-se: 
-- ✅ Sempre use WHERE com UPDATE e DELETE
-- ✅ Use transações para operações complexas
-- ✅ Faça SELECT antes para confirmar o que será afetado
-- ============================================================
