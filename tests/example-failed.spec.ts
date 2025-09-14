import { test, expect } from '@playwright/test';

test('failed', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await page.waitForURL('https://playwright.dev/docs/intro')
  await expect(page.getByRole('heading', { name: 'Installations' })).toBeVisible();
});
