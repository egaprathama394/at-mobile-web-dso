import * as home from '../../pages/home';
import * as header from '../../pages/header';
import * as plp from '../../pages/oto-mobil-baru-tipe/plp';
import * as pdp from '../../pages/oto-mobil-baru-brand/pdp';

const { Given, When, Then } = require('cucumber');

When(/^a guest try to access PDP$/, async () => {
  await home.clickDaftarMobil();
  await plp.clickAyla();
});

Then(/^a user can see PDP$/, async () => {
  await header.verifyHeader();
  await pdp.verifyUrlPDP();
  await pdp.verifyPDPSectionImage();
  await pdp.verifyPDPSectionPriceOTR();
  await pdp.verifyPDPSectionInfoProduct();
  await pdp.verifyPDPSectionVariant();
  await pdp.verifyPDPSectionCarRecomendation();
  await pdp.verifyPDPSectionNews();
});
