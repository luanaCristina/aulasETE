"""
Repositório de Livros — Camada de acesso a dados.

Responsável por todas as operações SQL relacionadas aos livros.
Utiliza placeholders %s para evitar SQL Injection.
"""

from typing import Optional
from database.connection import get_connection


def listar_todos(filtro: str = "") -> list[dict]:
    """
    Lista todos os livros ativos, com possibilidade de filtro por título.

    Args:
        filtro: Texto para busca parcial no título (ILIKE).

    Returns:
        Lista de dicionários com dados dos livros.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = """
            SELECT l.id, l.titulo, a.nome AS autor, c.nome AS categoria,
                   l.isbn, l.ano_publicacao, l.quantidade_disponivel
            FROM livros l
            INNER JOIN autores a ON l.autor_id = a.id
            INNER JOIN categorias c ON l.categoria_id = c.id
            WHERE l.ativo = TRUE
        """

        if filtro:
            query += " AND l.titulo ILIKE %s"
            cursor.execute(query + " ORDER BY l.titulo", (f"%{filtro}%",))
        else:
            cursor.execute(query + " ORDER BY l.titulo")

        colunas = [desc[0] for desc in cursor.description]
        resultados = []
        for linha in cursor.fetchall():
            resultados.append(dict(zip(colunas, linha)))

        return resultados

    except Exception as erro:
        print(f"❌ Erro ao listar livros: {erro}")
        return []
    finally:
        if connection:
            connection.close()


def buscar_por_id(livro_id: int) -> Optional[dict]:
    """
    Busca um livro específico pelo ID.

    Args:
        livro_id: ID do livro no banco de dados.

    Returns:
        Dicionário com dados do livro ou None se não encontrado.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = """
            SELECT l.id, l.titulo, l.autor_id, l.categoria_id,
                   l.isbn, l.ano_publicacao, l.quantidade_total,
                   l.quantidade_disponivel, a.nome AS autor,
                   c.nome AS categoria
            FROM livros l
            INNER JOIN autores a ON l.autor_id = a.id
            INNER JOIN categorias c ON l.categoria_id = c.id
            WHERE l.id = %s AND l.ativo = TRUE
        """
        cursor.execute(query, (livro_id,))
        linha = cursor.fetchone()

        if linha:
            colunas = [desc[0] for desc in cursor.description]
            return dict(zip(colunas, linha))
        return None

    except Exception as erro:
        print(f"❌ Erro ao buscar livro: {erro}")
        return None
    finally:
        if connection:
            connection.close()


def inserir(titulo: str, autor_id: int, categoria_id: int,
            isbn: str, ano_publicacao: int, quantidade: int) -> Optional[int]:
    """
    Insere um novo livro no banco de dados.

    Args:
        titulo: Título do livro.
        autor_id: ID do autor.
        categoria_id: ID da categoria.
        isbn: Código ISBN (13 dígitos).
        ano_publicacao: Ano de publicação.
        quantidade: Quantidade total de exemplares.

    Returns:
        ID do livro inserido ou None em caso de erro.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = """
            INSERT INTO livros (titulo, autor_id, categoria_id, isbn,
                               ano_publicacao, quantidade_total,
                               quantidade_disponivel)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        """
        cursor.execute(query, (titulo, autor_id, categoria_id, isbn,
                               ano_publicacao, quantidade, quantidade))
        livro_id = cursor.fetchone()[0]
        connection.commit()
        return livro_id

    except Exception as erro:
        if connection:
            connection.rollback()
        print(f"❌ Erro ao inserir livro: {erro}")
        return None
    finally:
        if connection:
            connection.close()


def atualizar(livro_id: int, titulo: str, autor_id: int,
              categoria_id: int, isbn: str, ano_publicacao: int,
              quantidade: int) -> bool:
    """
    Atualiza os dados de um livro existente.

    Args:
        livro_id: ID do livro a ser atualizado.
        titulo: Novo título.
        autor_id: Novo ID do autor.
        categoria_id: Novo ID da categoria.
        isbn: Novo ISBN.
        ano_publicacao: Novo ano de publicação.
        quantidade: Nova quantidade total.

    Returns:
        True se atualizado com sucesso, False caso contrário.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = """
            UPDATE livros
            SET titulo = %s, autor_id = %s, categoria_id = %s,
                isbn = %s, ano_publicacao = %s, quantidade_total = %s
            WHERE id = %s AND ativo = TRUE
        """
        cursor.execute(query, (titulo, autor_id, categoria_id, isbn,
                               ano_publicacao, quantidade, livro_id))
        connection.commit()
        return cursor.rowcount > 0

    except Exception as erro:
        if connection:
            connection.rollback()
        print(f"❌ Erro ao atualizar livro: {erro}")
        return False
    finally:
        if connection:
            connection.close()


def excluir(livro_id: int) -> bool:
    """
    Realiza exclusão lógica (soft delete) de um livro.

    Em vez de deletar o registro, marca como inativo (ativo = FALSE).

    Args:
        livro_id: ID do livro a ser desativado.

    Returns:
        True se desativado com sucesso, False caso contrário.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()

        query = "UPDATE livros SET ativo = FALSE WHERE id = %s"
        cursor.execute(query, (livro_id,))
        connection.commit()
        return cursor.rowcount > 0

    except Exception as erro:
        if connection:
            connection.rollback()
        print(f"❌ Erro ao excluir livro: {erro}")
        return False
    finally:
        if connection:
            connection.close()


def listar_autores() -> list[dict]:
    """
    Lista todos os autores cadastrados (para preencher Combobox).

    Returns:
        Lista de dicionários com id e nome dos autores.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT id, nome FROM autores ORDER BY nome")
        return [{"id": row[0], "nome": row[1]} for row in cursor.fetchall()]
    except Exception as erro:
        print(f"❌ Erro ao listar autores: {erro}")
        return []
    finally:
        if connection:
            connection.close()


def listar_categorias() -> list[dict]:
    """
    Lista todas as categorias cadastradas (para preencher Combobox).

    Returns:
        Lista de dicionários com id e nome das categorias.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT id, nome FROM categorias ORDER BY nome")
        return [{"id": row[0], "nome": row[1]} for row in cursor.fetchall()]
    except Exception as erro:
        print(f"❌ Erro ao listar categorias: {erro}")
        return []
    finally:
        if connection:
            connection.close()


def verificar_emprestimos_ativos(livro_id: int) -> bool:
    """
    Verifica se um livro possui empréstimos ativos.

    Args:
        livro_id: ID do livro a verificar.

    Returns:
        True se existem empréstimos ativos, False caso contrário.
    """
    connection = None
    try:
        connection = get_connection()
        cursor = connection.cursor()
        query = """
            SELECT COUNT(*) FROM emprestimos
            WHERE livro_id = %s AND status = 'ativo'
        """
        cursor.execute(query, (livro_id,))
        count = cursor.fetchone()[0]
        return count > 0
    except Exception as erro:
        print(f"❌ Erro ao verificar empréstimos: {erro}")
        return True  # Por segurança, assume que há empréstimos
    finally:
        if connection:
            connection.close()
