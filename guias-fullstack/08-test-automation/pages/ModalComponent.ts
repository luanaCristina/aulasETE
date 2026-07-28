import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ModalComponent — Page Object para o Modal Bootstrap
 */
export class ModalComponent extends BasePage {
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly closeButton: Locator;
  readonly cancelButton: Locator;
  readonly submitButton: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;

  constructor(page: Page) {
    super(page);

    this.modal = page.locator('#demoModal');
    this.modalTitle = page.locator('#demoModalLabel');
    this.closeButton = page.locator('#demoModal .btn-close');
    this.cancelButton = page.locator('#demoModal .btn-secondary');
    this.submitButton = page.locator('#demoModal .btn-primary');
    this.nameInput = page.locator('#modalNome');
    this.emailInput = page.locator('#modalEmail');
    this.messageInput = page.locator('#modalMsg');
  }

  async isOpen(): Promise<boolean> {
    return this.modal.isVisible();
  }

  async close() {
    await this.closeButton.click();
    await this.modal.waitFor({ state: 'hidden' });
  }

  async cancel() {
    await this.cancelButton.click();
    await this.modal.waitFor({ state: 'hidden' });
  }

  async fillForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getTitle(): Promise<string> {
    return (await this.modalTitle.textContent()) || '';
  }
}
