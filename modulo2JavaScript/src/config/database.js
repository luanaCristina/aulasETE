/**
 * Configuração do PostgreSQL — Pool de conexões
 */
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'salao_beleza_arte',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
});

/**
 * Executa uma query SQL.
 * @param {string} sql - Query SQL
 * @param {Array} params - Parâmetros ($1, $2, ...)
 * @returns {Promise<Array>} Linhas retornadas
 */
async function query(sql, params = []) {
    const result = await pool.query(sql, params);
    return result.rows;
}

module.exports = { pool, query };
