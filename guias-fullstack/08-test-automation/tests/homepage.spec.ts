import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Homepage — Funcionalidades Principais', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('página carrega com título correto', async () => {
    const title = await homePage.getTitle();
    expect(title).toContain('Bootstrap Web App');
  });

  test('navbar está visível e contém links', async () => {
    await expect(homePage.navbar).toBeVisible();
    await expect(homePage.navBrand).toHaveText(/BootstrapApp/);
    const linkCount = await homePage.getNavLinkCount();
    expect(linkCount).toBeGreaterThanOrEqual(4);
  });

  test('hero section exibe título e botões', async () => {
    await expect(homePage.heroTitle).toBeVisible();
    await expect(homePage.heroTitle).toHaveText('Bootstrap 5 em Ação');
    const buttons = await homePage.heroButtons.count();
    expect(buttons).toBeGreaterThanOrEqual(2);
  });

  test('exibe 6 cards de features', async () => {
    const cardCount = await homePage.getCardCount();
    expect(cardCount).toBe(6);
  });

  test('cards de features são visíveis após scroll', async ({ page }) => {
    await homePage.featuresSection.scrollIntoViewIfNeeded();
    const firstCard = homePage.featureCards.first();
    await expect(firstCard).toBeVisible();
  });

  test('footer está presente com copyright', async () => {
    await expect(homePage.footer).toBeVisible();
    await expect(homePage.footer).toContainText('2026');
  });

  test('links de navegação apontam para âncoras corretas', async ({ page }) => {
    const links = await homePage.navLinks.all();
    const hrefs = await Promise.all(links.map(l => l.getAttribute('href')));
    expect(hrefs).toContain('#hero');
    expect(hrefs).toContain('#features');
    expect(hrefs).toContain('#carousel');
    expect(hrefs).toContain('#contato');
  });
});

test.describe('Homepage — Modal', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('modal abre ao clicar no botão', async () => {
    await homePage.openModal();
    await expect(homePage.modal).toBeVisible();
  });

  test('modal fecha ao clicar no X', async () => {
    await homePage.openModal();
    await homePage.closeModal();
    await expect(homePage.modal).toBeHidden();
  });

  test('modal contém formulário com campos', async ({ page }) => {
    await homePage.openModal();
    await expect(page.locator('#modalNome')).toBeVisible();
    await expect(page.locator('#modalEmail')).toBeVisible();
    await expect(page.locator('#modalMsg')).toBeVisible();
  });
});
