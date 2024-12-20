import { Page } from '@playwright/test';

export class AdoptionPage {
  constructor(private page: Page) {}

  nameInput = this.page.locator('input[name="name_field"]');
  addressInput = this.page.locator('input[name="address_field"]');
  postcodeInput = this.page.locator('input[name="postcode_field"]');
  emailInput = this.page.locator('input[name="email_field"]');
  button = this.page.locator('#submit_adoption');
  selectFirstDay = this.page.locator('#start_select')
  checkButtonForTurtle = this.page.locator('#check_btn_02');

  successMessage = this.page.getByText('YOUR ADOPTION HAS BEEN SET UP');

  async adoptTurtle(
    name_field: string,
    adress: string,
    postcode: string,
    email: string,
  ): Promise<void> {
    await this.selectFirstDay.selectOption('fday');
    await this.checkButtonForTurtle.click();
    await this.nameInput.fill(name_field);
    await this.addressInput.fill(adress);
    await this.postcodeInput.fill(postcode);
    await this.emailInput.fill(email);
    await this.button.click();
  }
}
