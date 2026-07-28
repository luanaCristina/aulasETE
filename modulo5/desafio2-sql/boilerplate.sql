-- DESAFIO 2 — Boilerplate: Criar tabelas e inserir dados
-- Execute este script antes de começar

CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    departamento_id INTEGER REFERENCES departamentos(id),
    salario DECIMAL(10, 2) NOT NULL,
    data_admissao DATE NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

INSERT INTO departamentos (nome) VALUES
('Engenharia'), ('Produto'), ('Marketing'), ('RH');

INSERT INTO funcionarios (nome, departamento_id, salario, data_admissao) VALUES
('Carlos Mendes', 1, 9500.00, '2022-03-15'),
('Ana Paula', 1, 8000.00, '2022-06-01'),
('Pedro Souza', 1, 6000.00, '2023-01-10'),
('Julia Costa', 1, 4500.00, '2024-02-20'),
('Roberto Lima', 2, 7500.00, '2022-09-01'),
('Maria Silva', 2, 6000.00, '2023-04-15'),
('Fernanda Dias', 2, 5000.00, '2023-08-01'),
('Lucas Alves', 3, 5000.00, '2023-02-01'),
('Camila Ramos', 3, 4000.00, '2024-01-15'),
('Ricardo Nunes', 4, 4500.00, '2022-11-01'),
('Beatriz Melo', 4, 4000.00, '2023-06-10');

-- AGORA RESOLVA AS 3 QUERIES DO DESAFIO:

-- QUERY 1: Total da folha por departamento (total, média, qtd)
-- TODO


-- QUERY 2: Funcionários com salário acima da média GERAL
-- TODO


-- QUERY 3: Departamento com MAIOR e MENOR custo total
-- TODO
