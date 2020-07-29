import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
  menuBurger: '[data-toggle="collapse"]',
  menuLogin: '.user_account_menu .login',
  menuDaftar: '.register',
  menuBookingService: '.__desktop-nav .nav__links--primary:nth-of-type(3)',
  menuAkunSaya: '.liOffcanvas > a[href="/in/my-account/update-profile"]',
  menuTestDrive: '.__desktop-nav .nav__links--primary:nth-of-type(2)',
  navBar: '.astra-navbar',
  iconUser: '.user_account_item',
  iconUserLogin: '.account_items',
  // menuLogin: '.login',
  // menuAkunSaya: '.icons-user',
  menuRegist: '.register',
  Notice: '.alert-info',
  menuBookingservice: "a[href='/in/dsoservice/book-service']",
  mobilbaru: "a[href='/in/c/TYPE']",
  temukandaihatsutext: '.heading.heading-search',
};

export const clickBurgerMenu = async () => {
  await base.clickElement(elements.menuBurger);
  await base.scrollToElement(elements.menuLogin);
  client.pause(3000);
};

export const clickBurgerMenuBottom = async () => {
  await base.clickElement(elements.menuBurger);
  client.pause(1000);
};
export const clickMenuMobilBaru = async () => {
  await base.clickElement(elements.mobilbaru);
  client.pause(3000);
};
export const clickMenuLogin = async () => {
  await base.scrollToElement(elements.menuDaftar);
  await base.expectVisible(elements.menuDaftar);
  await base.clickElement(elements.menuLogin);
};

export const clickMenuDaftar = async () => {
  await base.clickElement(elements.menuBurger);
  await client.pause(3000);
  await base.scrollToElement(elements.menuDaftar);
  await base.clickElement(elements.menuDaftar);
};

export const clickMenuBookingService = async () => {
  await base.scrollToElement(elements.menuLogin);
  await base.clickElement(elements.menuBookingService);
};

export const clickMenuAkunSaya = async () => {
  await base.expectVisible(elements.navBar);
  await base.scrollToElement(elements.menuAkunSaya);
  await base.expectVisible(elements.menuAkunSaya);
  await base.clickElement(elements.menuAkunSaya);
};

export const clickMenuTestDrive = async () => {
  await base.clickElement(elements.menuTestDrive);
};

export const verifyhomepagesuccess = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
  await base.assertContainsText(elements.noteSuccessRegist, 'Tinggal satu langkah lagi untuk menyelesaikan pendaftaran Anda. Silakan klik tautan pada email yang dikirimkan pada Anda untuk menyelesaikan pendaftaran Anda di Astra Daihatsu.');
};

export const registPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
};

export const successLogin = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/book-service');
  
};
