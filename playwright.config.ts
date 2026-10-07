import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './', // كايقرا التيستات اللي ف هاد الدوسي نيشان
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    browserName: 'chromium',
    headless: false, // باش يفتح ليك المتصفح وتوفي التيست كيدوز
    screenshot: 'on', // كياخد تصويرة توماتيكياً لكل خطوة
    video:'on'
  },
});