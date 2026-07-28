import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'salao_beleza_arte',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
});

/**
 * Executa uma query SQL tipada.
 * @param sql - Query SQL com $1, $2, etc.
 * @param params - Parâmetros para a query
 * @returns Array de linhas tipadas
 */
export async function query<T = Record<string, unknown>>(
  sql: string,
  params: unknown[] = []
): Promise<T[]> {
  const result: QueryResult<T> = await pool.query(sql, params);
  return result.rows;
}

export { pool };
