
import { Locator, Page, expect } from '@playwright/test';

export class Checkout {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipcode: Locator;
  readonly ContinousButton: Locator;
  readonly FinishButton: Locator;
  readonly completeMsg: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.zipcode = page.locator('[data-test="postalCode"]');

    this.ContinousButton = page.getByRole('button', {
      name: 'Continue',
    });

    this.FinishButton = page.getByRole('button', {
      name: 'Finish',
    });

    this.completeMsg = page.locator('[data-test="complete-header"]');
  }

async verifyCheckoutStepone() {
    await expect(this.page).toHaveURL(/checkout-step-one\.html$/);
}

async verifyCheckoutSteptwo() {
    await expect(this.page).toHaveURL(/checkout-step-two\.html$/);
}

async CompletePage() {
    await expect(this.page).toHaveURL(/checkout-complete\.html$/);
}

async fillShippingInfo(
    firstNameInput: string,
    lastNameInput: string,
    postalCode: string
) {
    await this.firstName.fill(firstNameInput);
    await this.lastName.fill(lastNameInput);
    await this.zipcode.fill(postalCode);
}

async continousView() {
    await this.ContinousButton.click();
}

async CompleteCheckout() {
    await this.FinishButton.click();
}

async successMsg() {
    await expect(this.completeMsg).toHaveText(
    'Thank you for your order!'
    );
}
}
