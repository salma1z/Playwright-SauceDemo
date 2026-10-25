
import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartBadge:Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge=page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async verifyCartCount(count: string) {
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText(count);
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
