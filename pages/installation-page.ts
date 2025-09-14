import { Page, Locator, expect } from '@playwright/test';

export class InstallationPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}