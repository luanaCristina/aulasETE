-- ============================================================
-- DML — Dados iniciais (Seed) para testes
-- Módulo II — ETE Advogado José David Gil Rodrigues
-- ============================================================

-- ============================================================
-- INSERIR PROFISSIONAIS
-- ============================================================

INSERT INTO profissionais (nome, especialidade) VALUES
('Fátima Silva', 'cabeleireira'),
('Carlos Mendes', 'barbeiro'),
('Ana Paula Souza', 'manicure'),
('Renata Oliveira', 'cabeleireira');

-- ============================================================
-- INSERIR SERVIÇOS
-- ============================================================

INSERT INTO servicos (nome, duracao_min, preco) VALUES
('Corte Feminino', 45, 35.00),
('Corte Masculino', 30, 25.00),
('Escova Progressiva', 120, 80.00),
('Manicure', 40, 20.00),
('Pedicure', 50, 25.00),
('Manicure + Pedicure', 80, 40.00),
('Barba', 20, 15.00),
('Corte + Barba', 45, 35.00),
('Hidratação Capilar', 60, 50.00),
('Coloração', 90, 70.00);

-- ============================================================
-- ASSOCIAR PROFISSIONAIS AOS SERVIÇOS (N:N)
-- ============================================================

-- Fátima (cabeleireira): corte feminino, escova, hidratação, coloração
INSERT INTO profissional_servico (profissional_id, servico_id) VALUES
(1, 1), (1, 3), (1, 9), (1, 10);

-- Carlos (barbeiro): corte masculino, barba, corte + barba
INSERT INTO profissional_servico (profissional_id, servico_id) VALUES
(2, 2), (2, 7), (2, 8);

-- Ana Paula (manicure): manicure, pedicure, manicure + pedicure
INSERT INTO profissional_servico (profissional_id, servico_id) VALUES
(3, 4), (3, 5), (3, 6);

-- Renata (cabeleireira): corte feminino, hidratação, coloração
INSERT INTO profissional_servico (profissional_id, servico_id) VALUES
(4, 1), (4, 9), (4, 10);

-- ============================================================
-- INSERIR CLIENTES
-- ============================================================

INSERT INTO clientes (nome, telefone, email) VALUES
('Maria José Santos', '(81) 99876-5432', 'maria.jose@email.com'),
('Pedro Henrique Lima', '(81) 98765-4321', 'pedro.lima@email.com'),
('Ana Clara Ferreira', '(81) 97654-3210', 'ana.clara@email.com'),
('João Victor Alves', '(81) 96543-2109', 'joao.victor@email.com'),
('Beatriz Costa', '(81) 95432-1098', 'bia.costa@email.com'),
('Lucas Gabriel Silva', '(81) 94321-0987', NULL),
('Camila Rodrigues', '(81) 93210-9876', 'camila.r@email.com');

-- ============================================================
-- INSERIR AGENDAMENTOS (exemplos variados)
-- ============================================================

INSERT INTO agendamentos (cliente_id, profissional_id, servico_id, data_hora, status, observacoes) VALUES
-- Agendamentos confirmados (futuros — ajustar datas conforme necessário)
(1, 1, 1, '2025-08-05 09:00:00', 'confirmado', 'Cliente prefere corte na altura dos ombros'),
(2, 2, 8, '2025-08-05 10:00:00', 'confirmado', NULL),
(3, 3, 6, '2025-08-05 14:00:00', 'confirmado', 'Unhas com francesinha'),
(4, 2, 2, '2025-08-05 11:00:00', 'confirmado', NULL),
(5, 1, 3, '2025-08-06 09:00:00', 'confirmado', 'Primeira vez fazendo progressiva'),
(6, 2, 7, '2025-08-06 09:00:00', 'confirmado', NULL),
(7, 4, 10, '2025-08-06 10:00:00', 'confirmado', 'Coloração loiro mel'),

-- Agendamentos concluídos (passados)
(1, 1, 9, '2025-07-20 10:00:00', 'concluido', NULL),
(3, 3, 4, '2025-07-22 15:00:00', 'concluido', NULL),

-- Agendamento cancelado
(5, 4, 1, '2025-07-25 11:00:00', 'cancelado', 'Cliente desmarcou por motivo pessoal');
