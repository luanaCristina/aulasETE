"""
Serviço de Livros — Camada de regras de negócio.

Responsável por validações e lógica de negócio antes de chamar o repositório.
Cada método retorna uma tupla (sucesso: bool, mensagem: str).
"""

from datetime import datetime
from repositories import livro_repository


def validar_dados_livro(titulo: str, isbn: str, ano: int,
                        quantidade: int) -> tuple[bool, str]:
    """
    Valida os dados de um livro antes de inserir ou atualizar.

    Args:
        titulo: Título do livro.
        isbn: Código ISBN.
        ano: Ano de publicação.
        quantidade: Quantidade de exemplares.

    Returns:
        Tupla (válido, mensagem_de_erro).
    """
    # Validar título
    if not titulo or titulo.strip() == "":
        return False, "O título do livro é obrigatório."

    # Validar ISBN (deve ter exatamente 13 dígitos numéricos)
    if isbn and (len(isbn) != 13 or not isbn.isdigit()):
        return False, "O ISBN deve conter exatamente 13 dígitos numéricos."

    # Validar ano de publicação
    ano_atual = datetime.now().year
    if ano < 1900 or ano > ano_atual + 1:
        return False, f"O ano deve estar entre 1900 e {ano_atual + 1}."

    # Validar quantidade
    if quantidade < 0:
        return False, "A quantidade não pode ser negativa."

    return True, ""


def cadastrar_livro(titulo: str, autor_id: int, categoria_id: int,
                    isbn: str, ano: int, quantidade: int) -> tuple[bool, str]:
    """
    Cadastra um novo livro após validação.

    Args:
        titulo: Título do livro.
        autor_id: ID do autor selecionado.
        categoria_id: ID da categoria selecionada.
        isbn: Código ISBN.
        ano: Ano de publicação.
        quantidade: Quantidade de exemplares.

    Returns:
        Tupla (sucesso, mensagem).
    """
    # Validar dados
    valido, mensagem = validar_dados_livro(titulo, isbn, ano, quantidade)
    if not valido:
        return False, mensagem

    # Validar seleções
    if not autor_id:
        return False, "Selecione um autor."
    if not categoria_id:
        return False, "Selecione uma categoria."

    # Inserir no banco
    livro_id = livro_repository.inserir(
        titulo=titulo.strip(),
        autor_id=autor_id,
        categoria_id=categoria_id,
        isbn=isbn.strip() if isbn else None,
        ano_publicacao=ano,
        quantidade=quantidade
    )

    if livro_id:
        return True, f"✅ Livro cadastrado com sucesso! (ID: {livro_id})"
    return False, "❌ Erro ao cadastrar o livro. Verifique os dados."


def buscar_livros(filtro: str = "") -> list[dict]:
    """
    Busca livros com filtro opcional por título.

    Args:
        filtro: Texto para filtrar por título.

    Returns:
        Lista de livros encontrados.
    """
    return livro_repository.listar_todos(filtro)


def atualizar_livro(livro_id: int, titulo: str, autor_id: int,
                    categoria_id: int, isbn: str, ano: int,
                    quantidade: int) -> tuple[bool, str]:
    """
    Atualiza um livro existente após validação.

    Args:
        livro_id: ID do livro a atualizar.
        titulo: Novo título.
        autor_id: Novo ID do autor.
        categoria_id: Novo ID da categoria.
        isbn: Novo ISBN.
        ano: Novo ano de publicação.
        quantidade: Nova quantidade.

    Returns:
        Tupla (sucesso, mensagem).
    """
    # Validar dados
    valido, mensagem = validar_dados_livro(titulo, isbn, ano, quantidade)
    if not valido:
        return False, mensagem

    # Atualizar no banco
    sucesso = livro_repository.atualizar(
        livro_id=livro_id,
        titulo=titulo.strip(),
        autor_id=autor_id,
        categoria_id=categoria_id,
        isbn=isbn.strip() if isbn else None,
        ano_publicacao=ano,
        quantidade=quantidade
    )

    if sucesso:
        return True, "✅ Livro atualizado com sucesso!"
    return False, "❌ Erro ao atualizar o livro."


def remover_livro(livro_id: int) -> tuple[bool, str]:
    """
    Remove (desativa) um livro, verificando se há empréstimos ativos.

    Args:
        livro_id: ID do livro a remover.

    Returns:
        Tupla (sucesso, mensagem).
    """
    # Verificar empréstimos ativos
    if livro_repository.verificar_emprestimos_ativos(livro_id):
        return False, "❌ Não é possível remover: livro possui empréstimos ativos."

    # Realizar exclusão lógica
    sucesso = livro_repository.excluir(livro_id)

    if sucesso:
        return True, "✅ Livro removido com sucesso!"
    return False, "❌ Erro ao remover o livro."


def listar_autores() -> list[dict]:
    """Retorna lista de autores para preencher combobox."""
    return livro_repository.listar_autores()


def listar_categorias() -> list[dict]:
    """Retorna lista de categorias para preencher combobox."""
    return livro_repository.listar_categorias()
