import { test, expect } from '../../fixtures/fixture'

test('verify inventory is visible', async ({ inventoryPage, page }) => {
    await inventoryPage.goToInventory();
    await page.waitForTimeout(5000)

    await expect(page.getByText('Products')).toBeVisible();
})

test('verify cart is visible', async ({ inventoryPage, page }) => {
    await inventoryPage.goToCart();
    await page.waitForTimeout(5000)

    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
})
