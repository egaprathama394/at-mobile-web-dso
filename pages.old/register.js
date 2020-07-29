import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  txtND: '[name="firstName"]',
  txtNB: '[name="lastName"]',
  txtEmail: '.relativeposition:nth-child(4) .form-control',
  txtHP: '.allowPhonenumber',
  txtPassword: '.password-strength',
  txtPassword2: '[name="checkPwd"]',
  btnSubmit: '#registerChkTermsConditions',
  notifsuksesregister: '.alert',
};

export const verifyPageRegister = async () => {
  await base.expectVisible(element.txtND);
  await base.expectVisible(element.txtNB);

  await base.expectVisible(element.txtEmail);
  await base.expectVisible(element.txtHP);
  await base.expectVisible(element.txtPassword);
  await base.expectVisible(element.txtPassword2);
  await base.expectVisible(element.btnSubmit);
};

export const register = async (ND, NB, Email, HP, Password, Password2) => {
  await base.setValueElement(element.txtND, ND);
  await base.setValueElement(element.txtNB, NB);
  await base.setValueElement(element.txtEmail, Email);
  await base.scrollToElement(element.txtEmail);
  client.pause(3000);
  await base.setValueElement(element.txtHP, HP);
  client.pause(3000);
  await base.scrollToElement(element.btnSubmit);
  await base.setValueElement(element.txtPassword, Password);
  await base.setValueElement(element.txtPassword2, Password2);
  await base.clickElement(element.btnSubmit);
};

export const verifyPopUpRegister = async () => {
  await base.expectVisible(element.notifsuksesregister);
};
