import { test, expect, type Page } from '@playwright/test';
import { AdoptionPage } from '../pages/adoption.page';


test('Adding turtle to adoption', async ({ page }) => {

  const name_field = 'test name';
  const adress = 'adress';
  const postcode = '61611';
  const email = 'testemail@test.pl';
  const adoptionPage = new AdoptionPage(page);

  await page.goto('https://www.thetestroom.com/webapp/index.html');
  await page.getByRole('link', { name: 'ADOPTION' }).click();
  await adoptionPage.adoptTurtle(name_field, adress, postcode, email);
});
