import{test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage} from '../Pages/inventoryPage';
import { CartPage } from '../Pages/CartPage';


test('VerifyCartBadge not empty', async({page})=>
{
const loginPage=new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage= new CartPage(page);

await loginPage.gotoLoginPage();
await loginPage.login('standard_user','secret_sauce');

await inventoryPage.addProductToCart('Sauce Labs Backpack');
await inventoryPage.addProductToCart('Sauce Labs Bike Light');
await inventoryPage.openCart();


await expect(page).toHaveURL(/cart.html/);

await cartPage.verifyCartItemsCount(2);

});
