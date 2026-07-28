import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * HomePage — Page Object para a página principal Bootstrap
 */
export class HomePage extends BasePage {
  // Navbar
  readonly navbar: Locator;
  readonly navBrand: Locator;
  readonly navLinks: Locator;
  readonly navToggler: Locator;

  // Hero
  readonly heroSection: Locator;
  readonly heroTitle: Locator;
  readonly heroButtons: Locator;

  // Features
  readonly featuresSection: Locator;
  readonly featureCards: Locator;

  // Modal
  readonly modalTriggerBtn: Locator;
  readonly modal: Locator;
  readonly modalCloseBtn: Locator;
  readonly modalSubmitBtn: Locator;

  // Form
  readonly contactForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitBtn: Locator;

  // Footer
  readonly footer: Locator;

  constructor(page: Page) {
    super(page);

    this.navbar = page.locator('nav.navbar');
    this.navBrand = page.locator('.navbar-brand');
    this.navLinks = page.locator('.nav-link');
    this.navToggler = page.locator('.navbar-toggler');

    this.heroSection = page.locator('#hero');
    this.heroTitle = page.locator('.hero-section h1');
    this.heroButtons = page.locator('.hero-section .btn');

    this.featuresSection = page.locator('#features');
    this.featureCards = page.locator('.card-custom');

    this.modalTriggerBtn = page.locator('[data-bs-target="#demoModal"]');
    this.modal = page.locator('#demoModal');
    this.modalCloseBtn = page.locator('#demoModal .btn-close');
    this.modalSubmitBtn = page.locator('#demoModal .btn-primary');

    this.contactForm = page.locator('#contato form');
    this.nameInput = page.locator('#nome');
    this.emailInput = page.locator('#email');
    this.messageInput = page.locator('#mensagem');
    this.submitBtn = page.locator('#contato button[type="submit"]');

    this.footer = page.locator('footer');
  }

  async open() {
    await this.navigate('/index.html');
    await this.waitForLoad();
  }

  async getCardCount(): Promise<number> {
    return this.featureCards.count();
  }

  async openModal() {
    await this.modalTriggerBtn.click();
    await this.modal.waitFor({ state: 'visible' });
  }

  async closeModal() {
    await this.modalCloseBtn.click();
    await this.modal.waitFor({ state: 'hidden' });
  }

  async fillContactForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async getNavLinkCount(): Promise<number> {
    return this.navLinks.count();
  }
}
