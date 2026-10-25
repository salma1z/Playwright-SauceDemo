import{test, Locator,expect, Page} from '@playwright/test';


export class CartPage{
    readonly page:Page;
    readonly cartBadge:Locator;
    readonly Checkout:Locator;
    readonly ContinousShopping:Locator;



constructor(page: Page){
    this.page=page;
    this.cartBadge=page.locator('[data-test="shopping-cart-badge]"');
    this.Checkout=page.getByRole('button',{name:'Checkout'});
    this.ContinousShopping=page.getByRole('button',{name:'continue-shopping'});


}

async verifycartPage(){
    await expect(this.page).toHaveURL('/cart.html');
}

async verifyCartItemsCount(count: number) {
  await expect(this.page.locator('.cart_item')).toHaveCount(count);
  }


async verifyProductInCart(productName:string){
    await expect(
      this.page.filter({ hasText: productName })
    ).toBeVisible();
}

async Checkoutclick(){
    await this.Checkout.click();
}

async ContinousShop(){
    await this.ContinousShopping.click();
}
}