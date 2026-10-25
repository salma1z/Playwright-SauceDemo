import { test, expect , Locator} from '@playwright/test';

test('Login and add two items to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    /*
    const username:Locator= page.locator('#user-name');
    const Password:Locator=page.locator('#password');
    const LoginButton:Locator=page.locator('#login-button');

    await username.fill('standard_user');
    await Password.fill('secret_sauce');
    await LoginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const title:Locator=page.locator('.title');
    await expect(title).toHaveText('Products');

    */

    await page.getByRole('textbox', { name: 'Username' })
        .fill('standard_user');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

    await page.locator('[name="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[name="add-to-cart-sauce-labs-bike-light"]').click();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('2');

    await page.getByRole('button', { name: /Cart/ }).click();
    await page.getByRole('button', { name: 'checkout' }).click();
    await page.getByPlaceholder('First Name').fill('Salma');
    await page.getByPlaceholder('Last Name').fill('Elzeheiry');
    await page.getByPlaceholder('Zip/Postal Code').fill('34567');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.getByRole('button',{name:'continue'}).click();
        await page.waitForTimeout(5000);

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.getByRole('button',{name:'finish'}).click();

await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});