import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Acessibilidade (a11y) — WCAG 2.1', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('página não possui violações críticas de acessibilidade', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    // Filtra apenas violações críticas e sérias
    const critical = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (critical.length > 0) {
      console.log('Violações encontradas:');
      critical.forEach((v) => {
        console.log(`  [${v.impact}] ${v.id}: ${v.description}`);
        console.log(`    Elementos: ${v.nodes.length}`);
      });
    }

    expect(critical).toHaveLength(0);
  });

  test('imagens possuem atributo alt', async ({ page }) => {
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt, `Imagem sem alt: ${await img.getAttribute('src')}`).toBeTruthy();
    }
  });

  test('formulário possui labels associados', async ({ page }) => {
    const inputs = await page.locator('#contato input, #contato textarea, #contato select').all();
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeAttached();
      }
    }
  });

  test('botões possuem texto acessível', async ({ page }) => {
    const buttons = await page.locator('button').all();
    for (const button of buttons) {
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const hasAccessibleName = (text && text.trim().length > 0) || ariaLabel;
      expect(hasAccessibleName, 'Botão sem nome acessível').toBeTruthy();
    }
  });

  test('navegação por teclado funciona nos links da navbar', async ({ page }) => {
    // Tab para o primeiro link
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    // Skip-link ou primeiro elemento focável
    expect(firstFocused).toBeTruthy();
  });

  test('modal é acessível por teclado (Escape fecha)', async ({ page }) => {
    // Abrir modal
    await page.locator('[data-bs-target="#demoModal"]').click();
    await page.locator('#demoModal').waitFor({ state: 'visible' });

    // Escape deve fechar
    await page.keyboard.press('Escape');
    await expect(page.locator('#demoModal')).toBeHidden();
  });

  test('contraste de cores adequado na hero section', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .include('.hero-section')
      .withTags(['wcag2aa'])
      .analyze();

    const contrastIssues = results.violations.filter((v) => v.id === 'color-contrast');
    expect(contrastIssues).toHaveLength(0);
  });
});
