-- ============================================
-- Script 01: Criar o banco de dados
-- Sistema de Gestão de Biblioteca — ETE
-- ============================================

CREATE DATABASE biblioteca_ete
    WITH ENCODING 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8'
    TEMPLATE template0;

-- Nota: Execute este script conectado ao banco 'postgres'
-- psql -U postgres -f 01-criar-banco.sql
