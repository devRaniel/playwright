import { test, expect } from '../fixtures/fixture';

test('get started link', async ({ installationPage, page }) => {
  await installationPage.clickGetStarted()

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('get started link1', async ({ installationPage, page }) => {
  await installationPage.clickGetStarted()

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

