import { test, expect } from '@playwright/test';
import { CarouselComponent } from '../pages/CarouselComponent';

test.describe('Carousel — Funcionalidade e Acessibilidade', () => {
  let carousel: CarouselComponent;

  test.beforeEach(async ({ page }) => {
    carousel = new CarouselComponent(page);
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    await carousel.carousel.scrollIntoViewIfNeeded();
  });

  test('carousel está visível na página', async () => {
    expect(await carousel.isCarouselVisible()).toBe(true);
  });

  test('carousel possui 3 slides', async () => {
    const count = await carousel.getSlideCount();
    expect(count).toBe(3);
  });

  test('primeiro slide está ativo por padrão', async () => {
    const index = await carousel.getActiveSlideIndex();
    expect(index).toBe(0);
  });

  test('botão "próximo" avança para o slide 2', async () => {
    await carousel.goToNext();
    const index = await carousel.getActiveSlideIndex();
    expect(index).toBe(1);
  });

  test('botão "anterior" volta para o slide anterior', async () => {
    await carousel.goToNext();
    await carousel.goToPrev();
    const index = await carousel.getActiveSlideIndex();
    expect(index).toBe(0);
  });

  test('indicadores navegam para slide específico', async () => {
    await carousel.goToSlide(2);
    const index = await carousel.getActiveSlideIndex();
    expect(index).toBe(2);
  });

  test('indicadores correspondem ao número de slides', async () => {
    const indicatorCount = await carousel.getIndicatorCount();
    const slideCount = await carousel.getSlideCount();
    expect(indicatorCount).toBe(slideCount);
  });

  test('carousel possui role="region" para acessibilidade', async ({ page }) => {
    const role = await carousel.carousel.getAttribute('role');
    expect(role).toBe('region');
  });

  test('carousel possui aria-roledescription', async () => {
    const desc = await carousel.carousel.getAttribute('aria-roledescription');
    expect(desc).toBe('carousel');
  });

  test('carousel possui aria-label descritivo', async () => {
    const label = await carousel.carousel.getAttribute('aria-label');
    expect(label).toBeTruthy();
    expect(label!.length).toBeGreaterThan(5);
  });

  test('controles possuem texto acessível (visually-hidden)', async ({ page }) => {
    const prevText = await page.locator('.carousel-control-prev .visually-hidden').textContent();
    const nextText = await page.locator('.carousel-control-next .visually-hidden').textContent();
    expect(prevText).toBeTruthy();
    expect(nextText).toBeTruthy();
  });

  test('cada slide possui aria-roledescription="slide"', async ({ page }) => {
    const slides = await page.locator('.carousel-item').all();
    for (const slide of slides) {
      const roleDesc = await slide.getAttribute('aria-roledescription');
      expect(roleDesc).toBe('slide');
    }
  });
});
