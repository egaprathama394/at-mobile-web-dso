/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  burgerMenu: '#nav-icon4',
  mainLogoAstra: ".__main-logo img[src='https://imagesamcqa.seva.id/sys-master/images/h80/hd0/8808261812254/Astra-Logo.png']",
  logoDaihatsu: ".__header-logo .__second-logo img[src='/_ui/responsive/theme-astradaihatsu/images/logo-daihatsu-2.png']",
  searchGlobal: '#js-site-search-input',
  btnSearch: '#header-search-button',
};

export const verifyHeader = async () => {
  await base.waitElementVisible(elements.burgerMenu);
  await base.waitElementVisible(elements.mainLogoAstra);
  await base.waitElementVisible(elements.logoDaihatsu);
  await base.waitElementVisible(elements.searchGlobal);
  await base.waitElementVisible(elements.btnSearch);
};

export const clickBurgerMenu = async () => {
  await base.clickElement(elements.burgerMenu);
};

export const clickMainLogoAstra = async () => {
  await base.clickElement(elements.mainLogoAstra);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
};
