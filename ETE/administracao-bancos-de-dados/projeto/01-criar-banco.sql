-- ============================================================
-- Arquivo: 01-criar-banco.sql
-- Descrição: Criação do banco de dados do Pet Shop
-- Disciplina: Administração de Bancos de Dados
-- ============================================================
-- Como executar:
--   1. Abra o pgAdmin
--   2. Conecte-se ao servidor PostgreSQL
--   3. Clique com botão direito em "Databases" > "Query Tool"
--   4. Cole este script e execute (F5)
-- ============================================================

-- Criar o banco de dados do Pet Shop
CREATE DATABASE petshop_ete
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8'
    TEMPLATE = template0;

-- Comentário sobre o banco
COMMENT ON DATABASE petshop_ete IS 'Sistema de Gestão de Pet Shop - Projeto ETE';
