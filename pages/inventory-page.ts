import { Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async goToInventory() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async goToCart() {
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
}
