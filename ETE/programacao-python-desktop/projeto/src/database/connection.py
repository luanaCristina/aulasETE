"""
Módulo de conexão com o banco de dados PostgreSQL.

Este módulo fornece a função get_connection() que cria uma conexão
com o banco de dados usando variáveis de ambiente ou valores padrão.
"""

import os
import psycopg2
from psycopg2 import OperationalError


def get_connection():
    """
    Cria e retorna uma conexão com o banco PostgreSQL.

    Utiliza variáveis de ambiente para configuração.
    Caso não existam, usa valores padrão para desenvolvimento local.

    Returns:
        psycopg2.connection: Objeto de conexão com o banco.

    Raises:
        OperationalError: Se não for possível conectar ao banco.
    """
    try:
        connection = psycopg2.connect(
            host=os.getenv("DB_HOST", "localhost"),
            port=os.getenv("DB_PORT", "5432"),
            database=os.getenv("DB_NAME", "biblioteca_ete"),
            user=os.getenv("DB_USER", "postgres"),
            password=os.getenv("DB_PASSWORD", "postgres"),
        )
        return connection
    except OperationalError as erro:
        print(f"❌ Erro ao conectar ao banco de dados: {erro}")
        raise
