import{ test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


test('login test',async({page}) =>{

  const loginPage= new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user','secret_sauce');
  await loginPage.verifyLoginSuccess();
/*
test.describe('login test',()=>{

  let loginPage: LoginPage;

test.beforeEach(async ({page})=>{

    loginPage = new LoginPage(page);
    await loginPage.goto('https://www.saucedemo.com');
});


test('login with correct username &Password', async({page})=>{
await loginPage.login('standard_user','secret_sauce');
await expect(page).toHaveURL(/inventory\.html/);


});*/

});
