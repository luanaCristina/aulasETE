import { Page, Locator } from '@playwright/test';

/**
 * BasePage — Classe base para todos os Page Objects
 * Encapsula métodos comuns de interação com a página.
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToElement(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async clickAndWait(locator: Locator) {
    await locator.click();
    await this.page.waitForTimeout(300);
  }
}
