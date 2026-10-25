import { Page,Locator,expect } from "@playwright/test";
export class LoginPage{

readonly page: Page;
readonly userNameInput:Locator;
readonly PasswordInput:Locator;
readonly LoginButton:Locator;
readonly errorMessage:Locator;


constructor(page:Page){

    this.page=page;
    this.userNameInput=page.getByRole('textbox', { name: 'Username' });
    this.PasswordInput= page.getByRole('textbox', { name: 'Password' });
    this.LoginButton=page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');

}

async gotoLoginPage() {
  await this.page.goto('https://www.saucedemo.com');
 
}

async login(username: string,password:string)
{
  
    await this.userNameInput.fill(username);
    await this.PasswordInput.fill(password);
    await this.LoginButton.click();
  
}

 async verifyLoginSuccess() {
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
  }

}

