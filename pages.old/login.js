import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
  txtUsername: '#j_username',
  txtPassword: '#j_password',
  btnForgotPass: "a[href='/in/login/pw/request/external']",
  btnLogin: '.checkbox.margin-left8 ~.btn-lg',
  btnFB: '#custom-social-btn-facebook',
  btnGoogle: '#custom-social-btn-google',
  btnRegist: "a[href='/in/register'] .margin-top-bottom20",
  errorLabelEmail: '.error:nth-child(4)',
  errorLabelPass: '.error:nth-child(3)',
  errorLogin: '.login-error',
};

export const verifyPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/in/');
  await base.expectVisible(elements.txtUsername);
  await base.expectVisible(elements.txtPassword);
  await base.expectVisible(elements.btnForgotPass);
  await base.expectVisible(elements.btnLogin);
  await base.expectVisible(elements.btnFB);
  await base.expectVisible(elements.btnGoogle);
  await base.expectVisible(elements.btnRegist);
};

export const inputUsernamePassword = async (username, password) => {
  client.pause(1000);
  await base.setValueElement(elements.txtUsername, username);
  await client.pause(2000);
  await base.setValueElement(elements.txtPassword, password);
  await base.scrollToElement(elements.btnLogin);
  await base.clickElement(elements.btnLogin);
};

// export const verifyPagesucesslogin= async () => {
//   await base.expectVisible(elements.);
// };
export const verifyPagesucesslogin = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
};

export const loginBookService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/book-service');
};

export const loginTestDrive = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/test-drive');
};

// negative test

export const validation = async () => {
  await base.setValueElement(elements.errorLabelEmail, 'Please enter a valid email address.');
  await base.setValueElement(elements.errorLabelPass, 'Field ini diperlukan.');
};

export const error = async () => {
  await base.setValueElement(elements.errorLogin, 'Email atau Password yang Anda masukkan salah');
};
