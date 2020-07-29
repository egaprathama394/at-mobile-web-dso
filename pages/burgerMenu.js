/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  burgerMenu: '#nav-icon4',
  closeBurgerMenu: '.icon-search-close',
  menuProfile: ".liOffcanvas:nth-child(1) a[href='/in/my-account/update-profile']",
  menuNotif: "a[href='/in/my-account/astra-notifications'] .sidebar-tag",
  menuContactUs: "a[href='/in/my-account/history-contact-us'] .sidebar-tag",
  menuCart: ".bottom-menu .notifications_icon a[href='/in/checkout/multi/summary/view'] span",
  menuPromo: ".nav__link a[href='/in/promotion-list']",
  menuNews: ".nav__link a[href='/in/newsandarticles/listing']",
  menuTestDrive: ".nav__link a[href='/in/dsoservice/test-drive']",
  menuBookingService: ".nav__link a[href='/in/dsoservice/book-service']",
  menuOutlet: ".nav__link a[href='/in/store-finder?carType=NEWCAR']",
  menuRegister: ".__action a[href='/in/register']",
  menuLogin: '.__action .liOffcanvas .login-mobile',
  menuSignOut: "a[href='/in/sign-out']",
  namaAkun: ".liOffcanvas:nth-child(1) a[href='/in/my-account/update-profile'] span",
};

export const veryfyBurgerMenu = async () => {
  await base.waitElementVisible(elements.closeBurgerMenu);
  await base.waitElementVisible(elements.menuPromo);
  await base.waitElementVisible(elements.menuNews);
  await base.waitElementVisible(elements.menuTestDrive);
  await base.waitElementVisible(elements.menuBookingService);
  await base.waitElementVisible(elements.menuOutlet);
  await base.waitElementVisible(elements.menuRegister);
  await base.waitElementVisible(elements.menuLogin);
};

export const veryfyBurgerMenuAfterLogin = async () => {
  await base.waitElementVisible(elements.closeBurgerMenu);
  await base.waitElementVisible(elements.menuPromo);
  await base.waitElementVisible(elements.menuNews);
  await base.waitElementVisible(elements.menuTestDrive);
  await base.waitElementVisible(elements.menuBookingService);
  await base.waitElementVisible(elements.menuOutlet);
  await base.waitElementVisible(elements.menuSignOut);
};

export const clickLogin = async () => {
  await base.clickElement(elements.menuLogin);
};

export const verifySuccesLogin = async (akun) => {
  await base.waitElementVisible(elements.closeBurgerMenu);
  await base.waitElementVisible(elements.menuProfile);
  await base.getStringText(elements.namaAkun, akun);
  await base.waitElementVisible(elements.menuNotif);
  await base.waitElementVisible(elements.menuContactUs);
  // await base.waitElementVisible(elements.menuCart);
  await base.waitElementVisible(elements.closeBurgerMenu);
  await base.waitElementVisible(elements.menuPromo);
  await base.waitElementVisible(elements.menuNews);
  await base.waitElementVisible(elements.menuTestDrive);
  await base.waitElementVisible(elements.menuBookingService);
  await base.waitElementVisible(elements.menuOutlet);
  await base.waitElementVisible(elements.menuSignOut);
};

export const clickProfile = async () => {
  await base.clickElement(elements.menuProfile);
};

export const clickDaftar = async () => {
  await base.clickElement(elements.menuRegister);
};

export const clickNewsArticle = async () => {
  await base.clickElement(elements.menuNews);
};

export const clickPromo = async () => {
  await base.clickElement(elements.menuPromo);
};
export const clickOutlet = async () => {
  await base.clickElement(elements.menuOutlet);
};

export const clickBookingService = async () => {
  await base.clickElement(elements.menuBookingService);
};
