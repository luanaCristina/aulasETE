-- ============================================
-- Script 02: Criar tabelas do sistema
-- Sistema de Gestão de Biblioteca — ETE
-- ============================================
-- Execute conectado ao banco 'biblioteca_ete':
-- psql -U postgres -d biblioteca_ete -f 02-criar-tabelas.sql

-- Tabela de Autores
CREATE TABLE IF NOT EXISTS autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(100)
);

-- Tabela de Categorias
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela de Livros
CREATE TABLE IF NOT EXISTS livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(300) NOT NULL,
    autor_id INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    ano_publicacao INTEGER,
    quantidade_total INTEGER NOT NULL DEFAULT 1,
    quantidade_disponivel INTEGER NOT NULL DEFAULT 1,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT fk_livro_autor FOREIGN KEY (autor_id)
        REFERENCES autores(id) ON DELETE RESTRICT,
    CONSTRAINT fk_livro_categoria FOREIGN KEY (categoria_id)
        REFERENCES categorias(id) ON DELETE RESTRICT,
    CONSTRAINT chk_ano CHECK (ano_publicacao >= 1500 AND ano_publicacao <= 2030),
    CONSTRAINT chk_quantidade_total CHECK (quantidade_total >= 0),
    CONSTRAINT chk_quantidade_disponivel CHECK (quantidade_disponivel >= 0)
);

-- Tabela de Leitores
CREATE TABLE IF NOT EXISTS leitores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(200)
);

-- Tabela de Empréstimos
CREATE TABLE IF NOT EXISTS emprestimos (
    id SERIAL PRIMARY KEY,
    livro_id INTEGER NOT NULL,
    leitor_id INTEGER NOT NULL,
    data_emprestimo TIMESTAMP NOT NULL DEFAULT NOW(),
    data_devolucao_prevista DATE NOT NULL,
    data_devolucao_real TIMESTAMP NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'ativo',
    CONSTRAINT fk_emprestimo_livro FOREIGN KEY (livro_id)
        REFERENCES livros(id) ON DELETE RESTRICT,
    CONSTRAINT fk_emprestimo_leitor FOREIGN KEY (leitor_id)
        REFERENCES leitores(id) ON DELETE RESTRICT,
    CONSTRAINT chk_status CHECK (status IN ('ativo', 'devolvido', 'atrasado'))
);

-- Índices para melhor performance
CREATE INDEX idx_livros_titulo ON livros(titulo);
CREATE INDEX idx_livros_isbn ON livros(isbn);
CREATE INDEX idx_livros_ativo ON livros(ativo);
CREATE INDEX idx_emprestimos_status ON emprestimos(status);
CREATE INDEX idx_emprestimos_livro ON emprestimos(livro_id);
CREATE INDEX idx_leitores_cpf ON leitores(cpf);

-- Dados iniciais para teste
INSERT INTO autores (nome, nacionalidade) VALUES
    ('Machado de Assis', 'Brasileira'),
    ('Clarice Lispector', 'Brasileira'),
    ('Jorge Amado', 'Brasileira'),
    ('Gabriel García Márquez', 'Colombiana'),
    ('José Saramago', 'Portuguesa');

INSERT INTO categorias (nome) VALUES
    ('Romance'),
    ('Ficção Científica'),
    ('Técnico'),
    ('Poesia'),
    ('Biografia'),
    ('História');
