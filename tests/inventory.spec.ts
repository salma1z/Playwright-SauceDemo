
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage} from '../Pages/inventoryPage';

test('Add items to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);


const inventoryPage =new InventoryPage(page);
  await loginPage.gotoLoginPage()
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart('Sauce Labs Bike Light');

  await inventoryPage.verifyCartCount('2');

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart\.html/);
});
