import { test as base, expect } from '@playwright/test';
import { InstallationPage } from '../pages/installation-page';
import { InventoryPage } from '../pages/inventory-page';

export type Setup = {
    installationPage: InstallationPage,
    inventoryPage: InventoryPage
}

export const test = base.extend<Setup>({
    installationPage: async ({ page }, use) => {
        const installationPage = new InstallationPage(page)
        await installationPage.goto()
        await use(installationPage)
    },

    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page)
        await use(inventoryPage)
    }
})

export { expect }