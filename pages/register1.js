/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  titlePage: '#register-content-1 .heading',
  detailTitle: '#register-content-1 .details',
  iconFB: '#register-content-1 .icon-facebook-login',
  iconGoogle: '#register-content-1 .icon-google-login',
  labelEmail: '#register-content-1 .form-group:nth-child(4) .control-label',
  txtEmail: "[name = 'email']",
  btnLanjutkan: '#register-button-next',
  linkLogin: ".register-login-link a[href='/in/login']",
  errorInvalidEmail: '.error:nth-child(4)',
  footerIcon: '.footer-heading-icon',
};

export const verifyPageReg1 = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/register');
  await base.getStringText(elements.titlePage, 'Daftar');
  await base.getStringText(elements.detailTitle, 'Daftar lebih mudah dengan');
  await base.waitElementVisible(elements.iconFB);
  await base.waitElementVisible(elements.iconGoogle);
  await base.getStringText(elements.labelEmail, 'Email');
  await base.scrollToElement(elements.footerIcon);
  await base.waitElementVisible(elements.btnLanjutkan);
  await base.waitElementVisible(elements.linkLogin);
};

export const inputEmail = async (email) => {
  await base.setValueElement(elements.txtEmail, email);
};

export const clickLanjutkan = async () => {
  await base.scrollToElement(elements.footerIcon);
  await base.clickElement(elements.btnLanjutkan);
};

export const clickTitlePage = async () => {
  await base.clickElement(elements.titlePage);
};

export const displayErrorInvalidEmail = async (errorMsg) => {
  await base.waitElementVisible(elements.errorInvalidEmail, errorMsg);
};
