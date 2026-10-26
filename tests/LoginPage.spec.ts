import{ test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import loginData from '../Test_Data/loginData.json';


test('Valid login test',async({page}) =>{

  const loginPage= new LoginPage(page);
  await loginPage.gotoLoginPage();
  //await loginPage.login('standard_user','secret_sauce');
  await loginPage.login(loginData.valid_user.username,
                        loginData.valid_user.password
  );
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Invalid login test',async({page}) =>{

  const loginPage= new LoginPage(page);
  await loginPage.gotoLoginPage();
  //await loginPage.login('standard_user','secret_sauce');
  await loginPage.login(loginData.invalid_user.username,
                        loginData.invalid_user.password
  );
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});



