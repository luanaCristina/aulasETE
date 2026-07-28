#!/usr/bin/env python3
"""
SEO Checker — Ferramenta de Auditoria Básica de SEO
Analisa uma página web e gera relatório com pontuação.

Uso:
    python3 seo_checker.py <url>
    python3 seo_checker.py <arquivo.html> --local
"""

import sys
import os
from pathlib import Path

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("❌ Dependências não instaladas.")
    print("   Execute: pip install requests beautifulsoup4")
    sys.exit(1)


class SEOAuditor:
    """Realiza auditoria de SEO em uma página HTML."""

    def __init__(self, html_content: str, url: str = "local"):
        self.soup = BeautifulSoup(html_content, "html.parser")
        self.url = url
        self.score = 0
        self.max_score = 0
        self.issues = []
        self.warnings = []
        self.passes = []

    def _add_pass(self, msg: str, points: int = 5):
        self.passes.append(msg)
        self.score += points
        self.max_score += points

    def _add_warning(self, msg: str, points: int = 5):
        self.warnings.append(msg)
        self.max_score += points

    def _add_issue(self, msg: str, points: int = 5):
        self.issues.append(msg)
        self.max_score += points

    def check_meta_tags(self) -> dict:
        """Verifica meta tags essenciais."""
        results = {}

        # Title
        title_tag = self.soup.find("title")
        if title_tag and title_tag.string:
            title_text = title_tag.string.strip()
            title_len = len(title_text)
            if 30 <= title_len <= 60:
                self._add_pass(f'Title: "{title_text}" ({title_len} chars)')
            elif title_len > 0:
                self._add_warning(f'Title: "{title_text}" ({title_len} chars) — ideal: 30-60 chars')
            results["title"] = title_text
        else:
            self._add_issue("Title: NÃO ENCONTRADO")
            results["title"] = None

        # Meta Description
        desc = self.soup.find("meta", attrs={"name": "description"})
        if desc and desc.get("content"):
            desc_text = desc["content"]
            desc_len = len(desc_text)
            if 120 <= desc_len <= 160:
                self._add_pass(f"Description: ({desc_len} chars) — comprimento ideal")
            elif desc_len > 0:
                self._add_warning(f"Description: ({desc_len} chars) — ideal: 120-160 chars")
            results["description"] = desc_text
        else:
            self._add_issue("Meta Description: NÃO ENCONTRADA")
            results["description"] = None

        # Viewport
        viewport = self.soup.find("meta", attrs={"name": "viewport"})
        if viewport:
            self._add_pass("Viewport configurado")
        else:
            self._add_issue("Viewport: NÃO CONFIGURADO (problemas em mobile)")

        # Robots
        robots = self.soup.find("meta", attrs={"name": "robots"})
        if robots:
            self._add_pass(f'Robots: {robots.get("content", "")}')
        else:
            self._add_warning("Robots: não definido (usando default: index, follow)")

        # Charset
        charset = self.soup.find("meta", attrs={"charset": True})
        if charset:
            self._add_pass(f'Charset: {charset.get("charset")}')
        else:
            self._add_warning("Charset: não declarado explicitamente")

        return results

    def check_headings(self) -> dict:
        """Verifica hierarquia de headings H1-H6."""
        results = {}

        for level in range(1, 7):
            tags = self.soup.find_all(f"h{level}")
            results[f"h{level}"] = len(tags)

        # H1 check
        h1_count = results["h1"]
        if h1_count == 1:
            h1_text = self.soup.find("h1").get_text(strip=True)
            self._add_pass(f'H1 encontrado: "{h1_text[:50]}..."' if len(h1_text) > 50 else f'H1 encontrado: "{h1_text}"')
        elif h1_count == 0:
            self._add_issue("H1: NENHUM encontrado (crítico para SEO)")
        else:
            self._add_warning(f"H1: {h1_count} encontrados (ideal: exatamente 1)")

        return results

    def check_images(self) -> dict:
        """Verifica atributo alt em imagens."""
        images = self.soup.find_all("img")
        total = len(images)
        sem_alt = [img for img in images if not img.get("alt")]

        if total == 0:
            results = {"total": 0, "sem_alt": 0}
        else:
            results = {"total": total, "sem_alt": len(sem_alt), "detalhes": []}
            if len(sem_alt) == 0:
                self._add_pass(f"Todas as {total} imagens possuem alt")
            else:
                self._add_warning(f"{len(sem_alt)} de {total} imagens SEM atributo alt")
                for img in sem_alt[:5]:
                    src = img.get("src", "desconhecido")
                    results["detalhes"].append(src)

        return results

    def check_links(self) -> dict:
        """Analisa links internos e externos."""
        links = self.soup.find_all("a", href=True)
        internos = [l for l in links if l["href"].startswith(("/", "#")) or self.url in l["href"]]
        externos = [l for l in links if l["href"].startswith("http") and self.url not in l["href"]]

        self._add_pass(f"Links internos: {len(internos)}")
        if len(externos) > 0:
            self._add_pass(f"Links externos: {len(externos)}")

        return {"internos": len(internos), "externos": len(externos), "total": len(links)}

    def check_semantic_structure(self) -> dict:
        """Verifica elementos semânticos HTML5."""
        semantic_tags = ["header", "main", "footer", "nav", "article", "section"]
        results = {}

        for tag in semantic_tags:
            found = self.soup.find(tag)
            results[tag] = found is not None
            if found:
                self._add_pass(f"<{tag}> presente")
            elif tag in ["header", "main", "footer"]:
                self._add_warning(f"<{tag}> não encontrado")
            else:
                pass  # nav, article, section são opcionais

        return results

    def check_open_graph(self) -> dict:
        """Verifica meta tags Open Graph."""
        og_tags = ["og:title", "og:description", "og:image", "og:url"]
        results = {}
        found_count = 0

        for og in og_tags:
            tag = self.soup.find("meta", attrs={"property": og})
            results[og] = tag.get("content") if tag else None
            if tag:
                found_count += 1

        if found_count >= 3:
            self._add_pass(f"Open Graph: {found_count}/{len(og_tags)} tags configuradas")
        elif found_count > 0:
            self._add_warning(f"Open Graph: apenas {found_count}/{len(og_tags)} tags")
        else:
            self._add_warning("Open Graph: nenhuma tag configurada")

        return results

    def run_audit(self):
        """Executa a auditoria completa e imprime o relatório."""
        separator = "═" * 50

        print(f"\n{separator}")
        print(f"  SEO AUDIT REPORT — {self.url}")
        print(f"{separator}\n")

        # Meta Tags
        print("📋 META TAGS")
        self.check_meta_tags()
        self._print_results()

        # Headings
        print("\n📰 HEADINGS")
        headings = self.check_headings()
        self._print_results()
        heading_summary = " | ".join([f"H{k[-1]}: {v}" for k, v in headings.items() if v > 0 and k != "h1"])
        if heading_summary:
            print(f"  ℹ️  {heading_summary}")

        # Imagens
        print("\n🖼️  IMAGENS")
        img_results = self.check_images()
        self._print_results()
        if img_results.get("detalhes"):
            for src in img_results["detalhes"]:
                print(f"  → {src}")

        # Links
        print("\n🔗 LINKS")
        self.check_links()
        self._print_results()

        # Estrutura Semântica
        print("\n🏗️  ESTRUTURA SEMÂNTICA")
        self.check_semantic_structure()
        self._print_results()

        # Open Graph
        print("\n📱 OPEN GRAPH / SOCIAL")
        self.check_open_graph()
        self._print_results()

        # Pontuação Final
        final_score = int((self.score / self.max_score) * 100) if self.max_score > 0 else 0
        rating = self._get_rating(final_score)

        print(f"\n{separator}")
        print(f"  📊 PONTUAÇÃO: {final_score}/100 — {rating}")
        print(f"{separator}")

        if self.issues:
            print(f"\n  ❌ {len(self.issues)} problema(s) crítico(s)")
        if self.warnings:
            print(f"  ⚠️  {len(self.warnings)} aviso(s)")
        print()

    def _print_results(self):
        """Imprime resultados pendentes e limpa buffers."""
        for msg in self.passes:
            print(f"  ✅ {msg}")
        for msg in self.warnings:
            print(f"  ⚠️  {msg}")
        for msg in self.issues:
            print(f"  ❌ {msg}")
        self.passes.clear()
        self.warnings.clear()
        self.issues.clear()

    @staticmethod
    def _get_rating(score: int) -> str:
        if score >= 90:
            return "EXCELENTE"
        elif score >= 75:
            return "BOM"
        elif score >= 50:
            return "PRECISA MELHORAR"
        else:
            return "CRÍTICO"


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 seo_checker.py <url_ou_arquivo> [--local]")
        print("Exemplos:")
        print("  python3 seo_checker.py https://exemplo.com.br")
        print("  python3 seo_checker.py index.html --local")
        sys.exit(1)

    target = sys.argv[1]
    is_local = "--local" in sys.argv

    if is_local:
        # Ler arquivo local
        filepath = Path(target)
        if not filepath.exists():
            print(f"❌ Arquivo não encontrado: {target}")
            sys.exit(1)
        html_content = filepath.read_text(encoding="utf-8")
        url = f"local://{filepath.name}"
    else:
        # Buscar URL
        try:
            print(f"🔍 Analisando {target}...")
            response = requests.get(target, timeout=10, headers={
                "User-Agent": "SEOChecker/1.0 (Audit Tool)"
            })
            response.raise_for_status()
            html_content = response.text
            url = target
        except requests.RequestException as e:
            print(f"❌ Erro ao acessar {target}: {e}")
            sys.exit(1)

    auditor = SEOAuditor(html_content, url)
    auditor.run_audit()


if __name__ == "__main__":
    main()
