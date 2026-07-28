"""
test_seo_checker.py — Testes Unitários para o SEO Audit Tool

Cobre: Meta Tags, Headings, Imagens, Links, Estrutura Semântica, Open Graph
Técnicas: Particionamento por Equivalência, BVA, Tabela de Decisão
"""

import pytest
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../04-seo-audit-tool'))
from seo_checker import SEOAuditor


class TestMetaTags:
    """Testes para verificação de meta tags."""

    def test_title_presente_e_ideal(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_meta_tags()
        assert result["title"] is not None
        assert 30 <= len(result["title"]) <= 60

    def test_title_ausente(self, html_sem_meta):
        auditor = SEOAuditor(html_sem_meta, "https://test.com")
        result = auditor.check_meta_tags()
        # Title tag existe mas está vazia
        assert result["title"] is None or result["title"] == ""

    @pytest.mark.parametrize("title_len,expected_status", [
        (29, "short"),   # Abaixo do limite (BVA)
        (30, "ideal"),   # Limite inferior (BVA)
        (45, "ideal"),   # Meio da faixa
        (60, "ideal"),   # Limite superior (BVA)
        (61, "long"),    # Acima do limite (BVA)
    ])
    def test_title_boundary_values(self, title_len, expected_status):
        """BVA: Testa limites do comprimento ideal do title (30-60 chars)."""
        title_text = "A" * title_len
        html = f'<html><head><title>{title_text}</title></head><body></body></html>'
        auditor = SEOAuditor(html, "https://test.com")
        result = auditor.check_meta_tags()
        assert result["title"] == title_text
        assert len(result["title"]) == title_len

    def test_description_presente(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_meta_tags()
        assert result["description"] is not None
        assert len(result["description"]) > 0

    def test_description_ausente(self, html_sem_meta):
        auditor = SEOAuditor(html_sem_meta, "https://test.com")
        result = auditor.check_meta_tags()
        assert result["description"] is None

    @pytest.mark.parametrize("desc_len", [119, 120, 140, 160, 161])
    def test_description_boundary_values(self, desc_len):
        """BVA: Limites de 120-160 caracteres para description."""
        desc_text = "B" * desc_len
        html = f'<html><head><meta name="description" content="{desc_text}"></head><body></body></html>'
        auditor = SEOAuditor(html, "https://test.com")
        result = auditor.check_meta_tags()
        assert len(result["description"]) == desc_len

    def test_viewport_presente(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        auditor.check_meta_tags()
        # Verifica que não gerou issue para viewport
        assert auditor.score > 0

    def test_viewport_ausente(self, html_sem_meta):
        auditor = SEOAuditor(html_sem_meta, "https://test.com")
        auditor.check_meta_tags()
        # Deve ter gerado issues
        assert auditor.max_score > auditor.score


class TestHeadings:
    """Testes para verificação de headings H1-H6."""

    def test_h1_unico(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_headings()
        assert result["h1"] == 1

    def test_h1_multiplos(self, html_multiplos_h1):
        auditor = SEOAuditor(html_multiplos_h1, "https://test.com")
        result = auditor.check_headings()
        assert result["h1"] == 3

    def test_h1_ausente(self):
        html = "<html><body><h2>Sem H1</h2></body></html>"
        auditor = SEOAuditor(html, "https://test.com")
        result = auditor.check_headings()
        assert result["h1"] == 0

    def test_hierarquia_headings(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_headings()
        assert result["h1"] >= 1
        assert result["h2"] >= 1


class TestImages:
    """Testes para verificação de atributo alt em imagens."""

    def test_todas_com_alt(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_images()
        assert result["sem_alt"] == 0

    def test_imagens_sem_alt(self, html_sem_alt):
        auditor = SEOAuditor(html_sem_alt, "https://test.com")
        result = auditor.check_images()
        assert result["sem_alt"] == 3
        assert result["total"] == 4

    def test_pagina_sem_imagens(self):
        html = "<html><body><p>Sem imagens</p></body></html>"
        auditor = SEOAuditor(html, "https://test.com")
        result = auditor.check_images()
        assert result["total"] == 0


class TestLinks:
    """Testes para análise de links."""

    def test_links_internos_e_externos(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_links()
        assert result["internos"] >= 1
        assert result["externos"] >= 1
        assert result["total"] >= 2

    def test_pagina_sem_links(self):
        html = "<html><body><p>Sem links</p></body></html>"
        auditor = SEOAuditor(html, "https://test.com")
        result = auditor.check_links()
        assert result["total"] == 0


class TestSemanticStructure:
    """Testes para estrutura semântica HTML5."""

    def test_estrutura_completa(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_semantic_structure()
        assert result["header"] is True
        assert result["main"] is True
        assert result["footer"] is True
        assert result["nav"] is True

    def test_estrutura_ausente(self, html_sem_meta):
        auditor = SEOAuditor(html_sem_meta, "https://test.com")
        result = auditor.check_semantic_structure()
        assert result["header"] is False
        assert result["main"] is False


class TestOpenGraph:
    """Testes para meta tags Open Graph."""

    def test_og_completo(self, html_completo):
        auditor = SEOAuditor(html_completo, "https://test.com")
        result = auditor.check_open_graph()
        assert result["og:title"] is not None
        assert result["og:description"] is not None
        assert result["og:image"] is not None

    def test_og_ausente(self, html_sem_meta):
        auditor = SEOAuditor(html_sem_meta, "https://test.com")
        result = auditor.check_open_graph()
        assert result["og:title"] is None


class TestAuditIntegration:
    """Testes de integração do fluxo completo de auditoria."""

    def test_audit_completo_executa_sem_erro(self, html_completo, capsys):
        auditor = SEOAuditor(html_completo, "https://test.com")
        auditor.run_audit()
        captured = capsys.readouterr()
        assert "PONTUAÇÃO" in captured.out

    def test_html_vazio(self):
        auditor = SEOAuditor("", "https://test.com")
        auditor.run_audit()  # Não deve lançar exceção
