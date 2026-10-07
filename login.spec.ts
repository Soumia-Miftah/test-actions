import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { ProductsPage } from './productsPage';

test('Successful login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // تسجيل الدخول
  await loginPage.login('standard_user', 'secret_sauce');

  // التحقق من النجاح
  const title = await productsPage.getProductTitleText();
  expect(title).toBe('Products');
});