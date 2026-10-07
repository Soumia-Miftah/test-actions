import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { ProductsPage } from './productsPage';
import { CartPage } from './cartPage';
import { CheckoutPage } from './checkoutPage';

test('Complete checkout flow successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // هنا استعملنا page.goto مباشرة باش نتفاديو أي مشكل
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // إضافة المنتج للسلة والانتقال إليها
    await cartPage.addProductToCart();
    await cartPage.goToCart();
    await cartPage.proceedToCheckout();

    // ملء معلومات الخلاص
    await checkoutPage.fillCheckoutInformation('Soumia', 'Miftah', '12345');
    await checkoutPage.finishCheckout();

    // التحقق من نجاح العملية
    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
});