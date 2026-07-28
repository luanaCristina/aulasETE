"""
conftest.py — Fixtures compartilhadas para os testes do SEO Checker
"""

import pytest
import sys
import os

# Adicionar o path do seo_checker ao sys.path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../04-seo-audit-tool'))


@pytest.fixture
def html_completo():
    """HTML completo com todas as tags SEO corretas."""
    return """
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Descrição otimizada para SEO com o comprimento ideal entre 120 e 160 caracteres para melhor exibição nos resultados de busca do Google.">
        <meta name="robots" content="index, follow">
        <meta property="og:title" content="Meu Site">
        <meta property="og:description" content="Descrição OG">
        <meta property="og:image" content="https://exemplo.com/img.jpg">
        <meta property="og:url" content="https://exemplo.com">
        <title>Título Otimizado para SEO - Meu Site</title>
    </head>
    <body>
        <header>
            <nav><a href="/">Home</a><a href="/sobre">Sobre</a></nav>
        </header>
        <main>
            <h1>Título Principal da Página</h1>
            <h2>Subtítulo Importante</h2>
            <p>Conteúdo da página com informações relevantes.</p>
            <img src="foto.jpg" alt="Descrição da foto">
            <img src="banner.png" alt="Banner principal">
            <a href="https://externo.com">Link externo</a>
        </main>
        <footer><p>Rodapé</p></footer>
    </body>
    </html>
    """


@pytest.fixture
def html_sem_meta():
    """HTML sem meta tags essenciais."""
    return """
    <!DOCTYPE html>
    <html>
    <head><title></title></head>
    <body><div>Conteúdo sem estrutura</div></body>
    </html>
    """


@pytest.fixture
def html_sem_alt():
    """HTML com imagens sem atributo alt."""
    return """
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Página com imagens sem alt text para teste de acessibilidade SEO.">
        <title>Página com Imagens sem Alt</title>
    </head>
    <body>
        <main>
            <h1>Galeria</h1>
            <img src="img1.jpg">
            <img src="img2.jpg">
            <img src="img3.jpg" alt="Esta tem alt">
            <img src="img4.jpg">
        </main>
    </body>
    </html>
    """


@pytest.fixture
def html_multiplos_h1():
    """HTML com múltiplos H1 (problema de SEO)."""
    return """
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Página com Múltiplos H1</title>
    </head>
    <body>
        <h1>Primeiro H1</h1>
        <h1>Segundo H1</h1>
        <h1>Terceiro H1</h1>
    </body>
    </html>
    """
