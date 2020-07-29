import * as base from '../common/base-functions';

const elements = {
  menuMobilBaru: ".dropdown_arrow a[href='/in/c/TYPE']",
  menuType: '.submenu_first_types .dropdown_arrow ',
  menuQuickLinks: '.submenuQuickLinks .dropdown_arrow',
  menuTestdrive: ".nav__links--primary .yCmsComponent a[href='/in/dsoservice/test-drive']",
  menuBookingservice: ".nav__links--primary .yCmsComponent a[href='/in/dsoservice/book-service']",
  menuPromo: ".nav__links--primary .yCmsComponent a[href='/in/promotion-list']",
  menuBerita: ".nav__links--primary .yCmsComponent a[href='/in/newsandarticles/listing']",
  menuOutlet: ".nav__links--primary .yCmsComponent a[href='/in/store-finder?carType=NEWCAR']",
  menuLogin: '.user_account_menu .login',
  menuDaftar: '.user_account_menu .register',
  iconMPV: "a[href='/in/c/MPV']",
  iconSUV: "a[href='/in/c/SUV']",
  iconCityCar: "a[href='/in/c/CITYCAR']",
  iconKendaraanNiaga: "a[href='/in/c/KENDARAANNIAGA']",
  iconSemuaTipe: ".nav__link--secondary a[href='/in/c/TYPE']",
  calculatorCredit: "a[href='/in/dsoservice/credit-calculator?carType=NEWCAR']",
};

export const verifyContentBurgerMenu = async () => {
  await base.expectVisible(elements.menuMobilBaru);
  await base.expectVisible(elements.menuType);
  await base.expectVisible(elements.menuQuickLinks);
  await base.expectVisible(elements.menuTestdrive);
  await base.expectVisible(elements.menuBookingservice);
  await base.expectVisible(elements.menuPromo);
  await base.expectVisible(elements.menuBerita);
  await base.expectVisible(elements.menuOutlet);
  await base.expectVisible(elements.menuLogin);
  await base.expectVisible(elements.menuDaftar);
};

export const clickMobilBaru = async () => {
  await base.clickElement(elements.menuMobilBaru);
};

export const clickPromo = async () => {
  await base.clickElement(elements.menuPromo);
};

export const clickBerita = async () => {
  await base.clickElement(elements.menuBerita);
};

export const clickOutlet = async () => {
  await base.clickElement(elements.menuOutlet);
};

export const clickTipe = async () => {
  await base.clickElement(elements.menuType);
};

export const verifyMenuTipe = async () => {
  await base.assertContainsText(elements.iconMPV, 'MPV');
  await base.assertContainsText(elements.iconSUV, 'SUV');
  await base.assertContainsText(elements.iconCityCar, 'City Car');
  await base.assertContainsText(elements.iconKendaraanNiaga, 'Kendaraan Niaga');
  await base.assertContainsText(elements.iconSemuaTipe, 'Semua Tipe');
};

export const clickTipeMPV = async () => {
  await base.clickElement(elements.iconMPV);
};

export const clickTipeSUV = async () => {
  await base.clickElement(elements.iconSUV);
};

export const clickTipeCityCar = async () => {
  await base.clickElement(elements.iconCityCar);
};

export const clickTipeKendaraanNiaga = async () => {
  await base.clickElement(elements.iconKendaraanNiaga);
};

export const clickSemuaTipe = async () => {
  await base.clickElement(elements.iconSemuaTipe);
};

export const clickQuickLinks = async () => {
  await base.clickElement(elements.menuQuickLinks);
};

export const verifyContentMenuQuickLinks = async () => {
  await base.assertContainsText(elements.calculatorCredit, 'Kalkulator Kredit');
};

export const clickKalkulatorKredit = async () => {
  await base.clickElement(elements.calculatorCredit);
};
