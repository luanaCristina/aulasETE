"""
Conexão com o Banco de Dados — PostgreSQL
==========================================

Módulo II — ETE Advogado José David Gil Rodrigues

Configura a conexão com o PostgreSQL usando psycopg2.
Os alunos devem ajustar as credenciais no arquivo .env
"""

import os
import psycopg2
from psycopg2.extras import RealDictCursor


# Configurações do banco (usar variáveis de ambiente em produção)
DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'port': os.environ.get('DB_PORT', '5432'),
    'database': os.environ.get('DB_NAME', 'salao_beleza_arte'),
    'user': os.environ.get('DB_USER', 'postgres'),
    'password': os.environ.get('DB_PASSWORD', 'postgres'),
}


def get_connection():
    """
    Cria e retorna uma nova conexão com o PostgreSQL.
    
    Returns:
        psycopg2.connection: Conexão ativa com o banco
        
    Raises:
        psycopg2.OperationalError: Se não conseguir conectar
    """
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except psycopg2.OperationalError as e:
        print(f"❌ Erro ao conectar no banco de dados: {e}")
        print(f"   Verifique se o PostgreSQL está rodando e as credenciais estão corretas.")
        print(f"   Config atual: host={DB_CONFIG['host']}, port={DB_CONFIG['port']}, db={DB_CONFIG['database']}")
        raise


def execute_query(sql: str, params: tuple = None, fetch: bool = True):
    """
    Executa uma query SQL e retorna os resultados.
    
    Args:
        sql: Query SQL a ser executada
        params: Parâmetros para a query (previne SQL Injection!)
        fetch: Se True, retorna os resultados; se False, apenas executa
        
    Returns:
        Lista de dicionários com os resultados (se fetch=True)
        
    Exemplo:
        # SELECT com parâmetros (SEGURO contra SQL Injection)
        clientes = execute_query(
            "SELECT * FROM clientes WHERE nome ILIKE %s",
            ('%maria%',)
        )
        
        # INSERT
        execute_query(
            "INSERT INTO clientes (nome, telefone) VALUES (%s, %s)",
            ('João', '(81) 99999-0000'),
            fetch=False
        )
    """
    conn = get_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute(sql, params)

        if fetch:
            results = cursor.fetchall()
            conn.close()
            return [dict(row) for row in results]
        else:
            conn.commit()
            conn.close()
            return None

    except Exception as e:
        conn.rollback()
        conn.close()
        raise e


def test_connection():
    """Testa a conexão com o banco de dados."""
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT version();")
        version = cursor.fetchone()
        conn.close()
        print(f"✅ Conectado ao PostgreSQL: {version[0]}")
        return True
    except Exception as e:
        print(f"❌ Falha na conexão: {e}")
        return False


# Testar conexão ao importar o módulo (útil para debug)
if __name__ == '__main__':
    test_connection()
