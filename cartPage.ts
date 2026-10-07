import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        // مثال على لوكاتر لإضافة أول منتوج أو منتوج محدد
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('#checkout');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}