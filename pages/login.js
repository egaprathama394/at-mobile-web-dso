/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  titlePage: '.grid-1 .text-left .heading',
  titledetail: '.grid-1 .mb-2 .details',
  iconFB: '.grid-1 .icon-facebook-login',
  iconGoogle: '.grid-1 .icon-google-login',
  labelEmail: '.grid-1 .relativeposition:nth-of-type(3) .control-label',
  txtEmail: '.grid-1 #j_username',
  labelPassword: '.grid-1 .relativeposition:nth-of-type(4) .control-label',
  txtPass: '.grid-1 #j_password',
  linkForgotPass: ".grid-1 a[href='/in/login/pw/request/external']",
  btnLogin: '.grid-1 #regular-login',
  linkRegister: ".grid-1 .login-register-link a[href='/in/register']",
  errorMsg: '.login-error',
  errorMsgEmail: '.error-element .error:nth-child(4)',
  errorEmptyPass: '.form-group .error:nth-child(3)',
  footerHeadingIcon: '.footer-heading-icon',
};

export const urlLoginRegular = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/login');
};

export const urlLoginTestDrive = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/test-drive');
};

export const veryfyLoginPage = async () => {
  await base.getStringText(elements.titlePage, 'Masuk');
  await base.getStringText(elements.titledetail, 'Login lebih mudah dengan');
  await base.waitElementVisible(elements.iconFB);
  await base.waitElementVisible(elements.iconGoogle);
  await base.getStringText(elements.labelEmail, 'Email');
  await base.waitElementVisible(elements.txtEmail);
  await base.getStringText(elements.labelPassword, 'Kata Sandi');
  await base.waitElementVisible(elements.txtPass);
  await base.waitElementVisible(elements.linkForgotPass);
  await base.waitElementVisible(elements.btnLogin);
  await base.waitElementVisible(elements.linkRegister);
};

export const veryfyLoginBookingService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/book-service');
  await base.getStringText(elements.titlePage, 'Masuk');
  await base.getStringText(elements.titledetail, 'Login lebih mudah dengan');
  await base.waitElementVisible(elements.iconFB);
  await base.waitElementVisible(elements.iconGoogle);
  await base.getStringText(elements.labelEmail, 'Email');
  await base.waitElementVisible(elements.txtEmail);
  await base.getStringText(elements.labelPassword, 'Kata Sandi');
  await base.waitElementVisible(elements.txtPass);
  await base.waitElementVisible(elements.linkForgotPass);
  await base.waitElementVisible(elements.btnLogin);
  await base.waitElementVisible(elements.linkRegister);
};


export const inputDataLogin = async (email, password) => {
  await base.setValueElement(elements.txtEmail, email);
  await base.setValueElement(elements.txtPass, password);
};

export const clickBtnLogin = async () => {
  await base.scrollToElement(elements.footerHeadingIcon);
  await base.clickElement(elements.btnLogin);
};

export const displayErrorMsg = async (errorMsg) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?error=true');
  await base.getStringText(elements.errorMsg, errorMsg);
};

export const displayErrorMsgEmail = async (errorMsg) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/login');
  await base.getStringText(elements.errorMsgEmail, errorMsg);
};

export const displayErrorMsgPass = async (errorMsg) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/login');
  await base.getStringText(elements.errorEmptyPass, errorMsg);
};

export const inputEmptyPass = async (email) => {
  await base.setValueElement(elements.txtEmail, email);
  await base.clickElement(elements.txtPass);
  await base.clickElement(elements.labelPassword);
};

export const clickLupaPass = async () => {
  await base.scrollToElement(elements.btnLogin);
  await base.clickElement(elements.linkForgotPass);
};

export const veryfyLoginPagePLP = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/in/oto/mobil/tipe/tipe/c/TYPE');
  await base.scrollToElement(elements.titlePage);
  await base.getStringText(elements.titlePage, 'Masuk');
  await base.getStringText(elements.titledetail, 'Login lebih mudah dengan');
  await base.waitElementVisible(elements.iconFB);
  await base.waitElementVisible(elements.iconGoogle);
  await base.getStringText(elements.labelEmail, 'Email');
  await base.waitElementVisible(elements.txtEmail);
  await base.getStringText(elements.labelPassword, 'Kata Sandi');
  await base.waitElementVisible(elements.txtPass);
  await base.scrollToElement(elements.btnLogin);
  await base.waitElementVisible(elements.linkForgotPass);
  await base.waitElementVisible(elements.btnLogin);
  await base.waitElementVisible(elements.linkRegister);
};
