"""
Testes unitários para a camada de serviço de livros.

Testa as validações de dados sem necessidade de conexão com o banco.
Execute com: python3 -m pytest tests/ -v (a partir da pasta projeto/)
Ou com: python3 -m unittest tests.test_livro_service -v
"""

import unittest
import sys
import os
from unittest.mock import patch
from datetime import datetime

# Adicionar src ao path para imports
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

# Mock do psycopg2 para permitir executar testes sem o banco instalado
sys.modules['psycopg2'] = type(sys)('psycopg2')
sys.modules['psycopg2'].OperationalError = Exception
sys.modules['psycopg2'].connect = lambda **kwargs: None

from services.livro_service import validar_dados_livro


class TestValidarDadosLivro(unittest.TestCase):
    """Testes para a função validar_dados_livro."""

    def test_titulo_vazio_deve_falhar(self):
        """Título vazio não deve ser aceito."""
        valido, mensagem = validar_dados_livro("", "1234567890123", 2020, 5)
        self.assertFalse(valido)
        self.assertIn("título", mensagem.lower())

    def test_titulo_apenas_espacos_deve_falhar(self):
        """Título com apenas espaços não deve ser aceito."""
        valido, mensagem = validar_dados_livro("   ", "1234567890123", 2020, 5)
        self.assertFalse(valido)
        self.assertIn("título", mensagem.lower())

    def test_isbn_com_menos_de_13_digitos_deve_falhar(self):
        """ISBN com menos de 13 dígitos não deve ser aceito."""
        valido, mensagem = validar_dados_livro("Livro Teste", "123", 2020, 5)
        self.assertFalse(valido)
        self.assertIn("isbn", mensagem.lower())

    def test_isbn_com_letras_deve_falhar(self):
        """ISBN contendo letras não deve ser aceito."""
        valido, mensagem = validar_dados_livro(
            "Livro Teste", "12345678901ab", 2020, 5)
        self.assertFalse(valido)
        self.assertIn("isbn", mensagem.lower())

    def test_ano_menor_que_1900_deve_falhar(self):
        """Ano anterior a 1900 não deve ser aceito."""
        valido, mensagem = validar_dados_livro(
            "Livro Teste", "1234567890123", 1800, 5)
        self.assertFalse(valido)
        self.assertIn("ano", mensagem.lower())

    def test_ano_muito_futuro_deve_falhar(self):
        """Ano muito no futuro não deve ser aceito."""
        valido, mensagem = validar_dados_livro(
            "Livro Teste", "1234567890123", 2090, 5)
        self.assertFalse(valido)
        self.assertIn("ano", mensagem.lower())

    def test_quantidade_negativa_deve_falhar(self):
        """Quantidade negativa não deve ser aceita."""
        valido, mensagem = validar_dados_livro(
            "Livro Teste", "1234567890123", 2020, -1)
        self.assertFalse(valido)
        self.assertIn("quantidade", mensagem.lower())

    def test_dados_validos_deve_passar(self):
        """Dados corretos devem passar na validação."""
        valido, mensagem = validar_dados_livro(
            "Dom Casmurro", "1234567890123", 2020, 5)
        self.assertTrue(valido)
        self.assertEqual(mensagem, "")

    def test_isbn_vazio_deve_ser_aceito(self):
        """ISBN vazio (opcional) deve ser aceito."""
        valido, mensagem = validar_dados_livro(
            "Livro sem ISBN", "", 2020, 5)
        self.assertTrue(valido)
        self.assertEqual(mensagem, "")

    def test_quantidade_zero_deve_ser_aceita(self):
        """Quantidade zero deve ser válida (livro indisponível)."""
        valido, mensagem = validar_dados_livro(
            "Livro Teste", "1234567890123", 2020, 0)
        self.assertTrue(valido)
        self.assertEqual(mensagem, "")


if __name__ == "__main__":
    unittest.main()
