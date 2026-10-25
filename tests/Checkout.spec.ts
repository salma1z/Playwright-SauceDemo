
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/inventoryPage';
import { CartPage } from '../Pages/CartPage';
import { Checkout } from '../Pages/CheckoutPage';

test('Complete checkout successfully', async ({ page }) => {
const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const checkout = new Checkout(page);

await loginPage.gotoLoginPage();
await loginPage.login('standard_user', 'secret_sauce');


await expect(page).toHaveURL(/inventory\.html$/);

await inventoryPage.addProductToCart('Sauce Labs Backpack');
await inventoryPage.addProductToCart('Sauce Labs Bike Light');

await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

await inventoryPage.openCart();
await cartPage.Checkoutclick();
await checkout.verifyCheckoutStepone();

await checkout.fillShippingInfo('salma', 'adel', '1234');

await checkout.continousView();
await checkout.verifyCheckoutSteptwo();

await checkout.CompleteCheckout();

await checkout.CompletePage();
await checkout.successMsg();
});
