import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;
  private productTitle = '.title';

  constructor(page: Page) {
    this.page = page;
  }

  async getProductTitleText(): Promise<string | null> {
    return await this.page.textContent(this.productTitle);
  }
}