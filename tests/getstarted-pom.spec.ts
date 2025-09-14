import { test, expect } from '@playwright/test';
import { InstallationPage } from '../pages/installation-page';

test('get started link', async ({ page }) => {
  const installationPage = new InstallationPage(page)
  await installationPage.goto()
  await installationPage.clickGetStarted()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(4000)
});
