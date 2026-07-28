-- ============================================================
-- Arquivo: 03-dml-inserir-dados.sql
-- Descrição: Inserção de dados realistas no sistema Pet Shop
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Certifique-se de que executou o 02-ddl-tabelas.sql primeiro
--   2. No pgAdmin, selecione o banco "petshop_ete"
--   3. Abra o Query Tool e execute este script (F5)
-- ============================================================

-- ============================================================
-- CLIENTES (8 clientes com endereços de Recife/PE)
-- ============================================================
INSERT INTO clientes (nome, cpf, telefone, email, endereco) VALUES
('Maria Fernanda Silva', '12345678901', '(81) 99901-1234', 'maria.silva@email.com', 'Rua da Aurora, 150 - Boa Vista, Recife/PE'),
('João Pedro Santos', '23456789012', '(81) 99802-2345', 'joao.santos@email.com', 'Av. Conde da Boa Vista, 800 - Boa Vista, Recife/PE'),
('Ana Carolina Oliveira', '34567890123', '(81) 99703-3456', 'ana.oliveira@email.com', 'Rua do Espinheiro, 421 - Espinheiro, Recife/PE'),
('Carlos Eduardo Lima', '45678901234', '(81) 99604-4567', 'carlos.lima@email.com', 'Av. Boa Viagem, 1500 - Boa Viagem, Recife/PE'),
('Beatriz Almeida Costa', '56789012345', '(81) 99505-5678', 'bia.costa@email.com', 'Rua do Futuro, 200 - Graças, Recife/PE'),
('Roberto Cavalcanti', '67890123456', '(81) 99406-6789', 'roberto.cav@email.com', 'Av. Norte, 3200 - Casa Amarela, Recife/PE'),
('Luciana Barros', '78901234567', '(81) 99307-7890', 'lu.barros@email.com', 'Rua Real da Torre, 90 - Madalena, Recife/PE'),
('Fernando Mendes', '89012345678', '(81) 99208-8901', 'fernando.m@email.com', 'Rua Benfica, 450 - Madalena, Recife/PE');

-- ============================================================
-- PETS (12 pets - mix de cães, gatos e aves)
-- ============================================================
INSERT INTO pets (cliente_id, nome, especie, raca, data_nascimento, peso, observacoes) VALUES
(1, 'Rex', 'cachorro', 'Golden Retriever', '2020-03-15', 32.50, 'Alergia a frango'),
(1, 'Mimi', 'gato', 'Persa', '2021-07-20', 4.20, NULL),
(2, 'Thor', 'cachorro', 'Bulldog Francês', '2022-01-10', 12.80, 'Problemas respiratórios leves'),
(2, 'Luna', 'gato', 'Siamês', '2021-11-05', 3.90, NULL),
(3, 'Pipoca', 'cachorro', 'Poodle', '2019-06-22', 5.50, 'Precisa de tosa higiênica mensal'),
(3, 'Tweety', 'ave', 'Calopsita', '2022-04-01', 0.09, 'Cortar asas a cada 3 meses'),
(4, 'Zeus', 'cachorro', 'Pastor Alemão', '2020-09-18', 38.00, 'Vacinação em dia'),
(5, 'Mel', 'gato', 'Vira-lata', '2023-02-14', 3.50, 'Resgatada - muito dócil'),
(5, 'Bob', 'cachorro', 'Shih Tzu', '2021-08-30', 6.20, 'Tosa na tesoura preferencial'),
(6, 'Simba', 'cachorro', 'Labrador', '2020-12-25', 29.00, NULL),
(7, 'Nina', 'gato', 'Maine Coon', '2022-05-10', 6.80, 'Escovação semanal necessária'),
(8, 'Kiko', 'ave', 'Papagaio', '2018-03-01', 0.40, 'Fala algumas palavras');

-- ============================================================
-- SERVIÇOS (8 serviços do pet shop)
-- ============================================================
INSERT INTO servicos (nome, descricao, preco, duracao_minutos, ativo) VALUES
('Banho Pequeno', 'Banho completo para pets até 10kg', 45.00, 40, TRUE),
('Banho Grande', 'Banho completo para pets acima de 10kg', 65.00, 60, TRUE),
('Tosa Higiênica', 'Tosa das áreas íntimas e patas', 35.00, 30, TRUE),
('Tosa Completa', 'Tosa de corpo inteiro com acabamento', 80.00, 90, TRUE),
('Consulta Veterinária', 'Consulta geral com veterinário', 120.00, 30, TRUE),
('Vacinação', 'Aplicação de vacina (vacina não inclusa)', 50.00, 15, TRUE),
('Hidratação de Pelos', 'Tratamento de hidratação profunda', 55.00, 45, TRUE),
('Hospedagem (diária)', 'Hospedagem com alimentação e passeios', 90.00, 1440, TRUE);

-- ============================================================
-- PROFISSIONAIS (5 profissionais)
-- ============================================================
INSERT INTO profissionais (nome, cargo, telefone, especialidade, ativo) VALUES
('Dra. Patrícia Melo', 'veterinário', '(81) 99911-0001', 'Clínica geral e vacinação', TRUE),
('Ricardo Brito', 'tosador', '(81) 99911-0002', 'Tosa artística e raças específicas', TRUE),
('Camila Freitas', 'banhista', '(81) 99911-0003', 'Banho terapêutico', TRUE),
('Dr. André Souza', 'veterinário', '(81) 99911-0004', 'Dermatologia animal', TRUE),
('Juliana Ramos', 'auxiliar', '(81) 99911-0005', 'Atendimento e recepção', TRUE);

-- ============================================================
-- AGENDAMENTOS (15 agendamentos com status variados)
-- ============================================================
INSERT INTO agendamentos (pet_id, servico_id, profissional_id, data_hora, status, observacoes) VALUES
-- Agendamentos realizados (passado)
(1, 2, 3, '2025-01-10 09:00:00', 'realizado', 'Banho realizado sem problemas'),
(3, 1, 3, '2025-01-10 10:00:00', 'realizado', NULL),
(5, 4, 2, '2025-01-11 14:00:00', 'realizado', 'Tosa modelo padrão poodle'),
(7, 5, 1, '2025-01-12 08:30:00', 'realizado', 'Check-up anual'),
(10, 2, 3, '2025-01-13 09:30:00', 'realizado', NULL),

-- Agendamentos confirmados (próximos dias)
(2, 5, 1, '2025-02-15 10:00:00', 'confirmado', 'Vacina V10'),
(9, 4, 2, '2025-02-15 14:00:00', 'confirmado', 'Tosa na tesoura - cliente pediu'),
(11, 7, 3, '2025-02-16 11:00:00', 'confirmado', 'Primeira hidratação'),
(4, 5, 4, '2025-02-16 15:00:00', 'confirmado', 'Consulta dermatológica'),

-- Agendamentos pendentes (agendado)
(1, 7, 3, '2025-02-20 09:00:00', 'agendado', NULL),
(6, 6, 1, '2025-02-20 10:00:00', 'agendado', 'Vacina antirrábica'),
(8, 1, 3, '2025-02-21 08:00:00', 'agendado', NULL),
(12, 5, 1, '2025-02-22 09:00:00', 'agendado', 'Corte de unhas e asas'),

-- Agendamentos cancelados
(3, 2, 3, '2025-01-14 10:00:00', 'cancelado', 'Cliente remarcou'),
(5, 3, 2, '2025-01-15 16:00:00', 'cancelado', 'Pet doente - remarcar');

-- ============================================================
-- PRODUTOS (10 produtos do pet shop)
-- ============================================================
INSERT INTO produtos (nome, categoria, preco, estoque, estoque_minimo) VALUES
('Ração Premium Cães Adultos 15kg', 'ração', 189.90, 25, 5),
('Ração Gatos Castrados 10kg', 'ração', 159.90, 18, 5),
('Bolinha de Tênis (3 unid)', 'brinquedo', 25.90, 40, 10),
('Ratinho de Pelúcia para Gatos', 'brinquedo', 15.90, 35, 10),
('Shampoo Neutro Pet 500ml', 'higiene', 32.00, 20, 8),
('Coleira Ajustável Cães Médios', 'acessório', 45.00, 15, 5),
('Guia Retrátil 5m', 'acessório', 79.90, 8, 3),
('Antipulgas Comprimido (3 meses)', 'medicamento', 89.90, 30, 10),
('Cama Pet Tamanho M', 'acessório', 120.00, 6, 3),
('Comedouro Inox Duplo', 'acessório', 55.00, 12, 5);

-- ============================================================
-- VENDAS (5 vendas com diferentes formas de pagamento)
-- ============================================================
INSERT INTO vendas (cliente_id, data_venda, valor_total, forma_pagamento) VALUES
(1, '2025-01-10 10:30:00', 215.80, 'credito'),
(2, '2025-01-11 14:15:00', 189.90, 'pix'),
(3, '2025-01-12 09:45:00', 57.90, 'debito'),
(4, '2025-01-13 16:00:00', 269.80, 'credito'),
(6, '2025-01-14 11:20:00', 45.00, 'dinheiro');

-- ============================================================
-- ITENS DE VENDA (detalhamento de cada venda)
-- ============================================================
INSERT INTO itens_venda (venda_id, produto_id, quantidade, preco_unitario) VALUES
-- Venda 1: Ração + Shampoo
(1, 1, 1, 189.90),
(1, 5, 1, 32.00),
-- Venda 2: Ração Gatos
(2, 2, 1, 159.90),
-- Venda 3: Brinquedos
(3, 3, 1, 25.90),
(3, 4, 2, 15.90),
-- Venda 4: Ração + Guia + Antipulgas
(4, 1, 1, 189.90),
(4, 7, 1, 79.90),
-- Venda 5: Coleira
(5, 6, 1, 45.00);

-- ============================================================
-- FIM DO DML - Dados inseridos com sucesso!
-- Verifique com: SELECT COUNT(*) FROM clientes;
-- ============================================================
