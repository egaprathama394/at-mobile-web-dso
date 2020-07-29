import * as home from '../../pages/home';
import * as burgerMenu from '../../pages/burgerMenu';
import * as creditCalculator from '../../pages/dsoservice/credit-calculator';

const { Then } = require('cucumber');

Then(/^a guest can see Kalkulator Kredit Menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickQuickLinks();
  await burgerMenu.clickKalkulatorKredit();
  await creditCalculator.verifyPageCreditCalculator();
});
