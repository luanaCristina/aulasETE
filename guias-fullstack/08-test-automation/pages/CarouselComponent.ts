import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * CarouselComponent — Page Object para o Carousel Bootstrap
 */
export class CarouselComponent extends BasePage {
  readonly carousel: Locator;
  readonly slides: Locator;
  readonly activeSlide: Locator;
  readonly prevButton: Locator;
  readonly nextButton: Locator;
  readonly indicators: Locator;

  constructor(page: Page) {
    super(page);

    this.carousel = page.locator('#carouselDemo');
    this.slides = page.locator('.carousel-item');
    this.activeSlide = page.locator('.carousel-item.active');
    this.prevButton = page.locator('.carousel-control-prev');
    this.nextButton = page.locator('.carousel-control-next');
    this.indicators = page.locator('.carousel-indicators button');
  }

  async getSlideCount(): Promise<number> {
    return this.slides.count();
  }

  async getActiveSlideIndex(): Promise<number> {
    const items = await this.slides.all();
    for (let i = 0; i < items.length; i++) {
      if (await items[i].evaluate((el) => el.classList.contains('active'))) {
        return i;
      }
    }
    return -1;
  }

  async goToNext() {
    await this.nextButton.click();
    await this.page.waitForTimeout(700); // Esperar transição
  }

  async goToPrev() {
    await this.prevButton.click();
    await this.page.waitForTimeout(700);
  }

  async goToSlide(index: number) {
    const indicator = this.indicators.nth(index);
    await indicator.click();
    await this.page.waitForTimeout(700);
  }

  async getIndicatorCount(): Promise<number> {
    return this.indicators.count();
  }

  async isCarouselVisible(): Promise<boolean> {
    return this.carousel.isVisible();
  }
}
