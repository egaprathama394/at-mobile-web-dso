import * as buycar from '../pages/buycar';
import * as home from '../pages/home';
import { client } from 'nightwatch-api/lib';
import { basename } from 'path';


const { When, Then } = require('cucumber');

When(/^I Filter for choosing Car$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuMobilBaru();
  await buycar.clickFilter();
  await buycar.clickCheckbox1000cc();
  await buycar.clickHarga();
  await buycar.clickCheckbox90juta();
  await buycar.clickTipe();
  await buycar.clickCityCar();
  await buycar.clickModel();
  await buycar.clickAyla();
  await buycar.clickSigra();
  await buycar.clickbtbSbmtFilter();
});


When(/^I choose Sort for choosing Car$/, async () => {
  await buycar.clickSort();
  await buycar.clickSortRkeT();
});

When(/^I want click Minta Penawaran$/, async () => {
  await buycar.clickpenawaranTerbaik1();
  await buycar.clickYA();
});

When(/^I input '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' in checkout page buycar$/, async (Email, HP, ND, NB, Catatan, Outlet) => {
  await buycar.buycar(Email, HP, ND, NB, Catatan);
  await buycar.ketikdropdown('outlet', Outlet);
});

When(/^I input '([^"]*)' in otp page$/, async (otp) => {
  await buycar.otp(otp);


});
