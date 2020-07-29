import * as home from '../pages/home';
import * as burgerMenu from '../pages/burgerMenu';
import * as mobilBaru from '../pages/oto/mobil/baru/plp';
import * as promo from '../pages/promotion-list';
import * as news from '../pages/newsandarticles/listing';
import * as outlet from '../pages/store-finder';
import * as plpMPV from '../pages/oto/mobil/baru/tipe/plpMPV';
import * as plpSUV from '../pages/oto/mobil/baru/tipe/plpSUV';
import * as plpCityCar from '../pages/oto/mobil/baru/tipe/plpCityCar';
import * as plpKendaraanNiaga from '../pages/oto/mobil/baru/tipe/plpKendaraanNiaga';

const { Then } = require('cucumber');

Then(/^a guest can see Mobil Baru Menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickMobilBaru();
  await mobilBaru.verifyMobilBaru();
});

Then(/^a guest can see Promo menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickPromo();
  await promo.verifyPromo();
});

Then(/^a guest can see Berita menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickBerita();
  await news.verifyNews();
});

Then(/^a guest can see Outlet menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickOutlet();
  await outlet.verifyOutlet();
});

Then(/^a guest can see Tipe Menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.verifyMenuTipe();
});

Then(/^a guest can see Tipe Menu MPV Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.clickTipeMPV();
  await plpMPV.verifyTipeMPV();
});

Then(/^a guest can see Tipe Menu SUV Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.clickTipeSUV();
  await plpSUV.verifyTipeSUV();
});

Then(/^a guest can see Tipe Menu City Car Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.clickTipeCityCar();
  await plpCityCar.verifyTipeCityCAr();
});

Then(/^a guest can see Tipe Menu Kendaraan Niaga Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.clickTipeKendaraanNiaga();
  await plpKendaraanNiaga.verifyTipeKendaraanNiaga();
});

Then(/^a guest can see Tipe Menu Semua Tipe Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickTipe();
  await burgerMenu.clickSemuaTipe();
  await mobilBaru.verifyMobilBaru();
});

Then(/^a guest can see Quick Links Menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.clickQuickLinks();
  await burgerMenu.verifyContentMenuQuickLinks();
});
