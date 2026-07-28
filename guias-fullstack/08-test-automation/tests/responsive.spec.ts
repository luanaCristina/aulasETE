import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const viewports = [
  { name: 'Mobile (375px)', width: 375, height: 667 },
  { name: 'Tablet (768px)', width: 768, height: 1024 },
  { name: 'Desktop (1280px)', width: 1280, height: 800 },
  { name: 'Wide (1920px)', width: 1920, height: 1080 },
];

test.describe('Responsividade — Grid Bootstrap', () => {
  for (const vp of viewports) {
    test.describe(`Viewport: ${vp.name}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      test('página carrega sem erros JS', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (err) => errors.push(err.message));
        await page.goto('/index.html');
        await page.waitForLoadState('networkidle');
        expect(errors).toHaveLength(0);
      });

      test('navbar está visível', async ({ page }) => {
        await page.goto('/index.html');
        const navbar = page.locator('nav.navbar');
        await expect(navbar).toBeVisible();
      });

      if (vp.width < 992) {
        test('navbar toggler aparece em telas menores', async ({ page }) => {
          await page.goto('/index.html');
          const toggler = page.locator('.navbar-toggler');
          await expect(toggler).toBeVisible();
        });

        test('menu colapsa em mobile', async ({ page }) => {
          await page.goto('/index.html');
          const navCollapse = page.locator('.navbar-collapse');
          await expect(navCollapse).not.toBeVisible();
        });
      }

      if (vp.width >= 992) {
        test('menu está expandido em desktop', async ({ page }) => {
          await page.goto('/index.html');
          const navCollapse = page.locator('.navbar-collapse');
          await expect(navCollapse).toBeVisible();
        });
      }

      test('cards são renderizados corretamente', async ({ page }) => {
        await page.goto('/index.html');
        const cards = page.locator('.card-custom');
        const count = await cards.count();
        expect(count).toBe(6);
      });

      test('nenhum overflow horizontal', async ({ page }) => {
        await page.goto('/index.html');
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        expect(bodyWidth).toBeLessThanOrEqual(vp.width + 1);
      });
    });
  }
});
