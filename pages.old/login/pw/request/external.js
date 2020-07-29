import * as base from '../../../../common/base-functions';

const elements = {
  btnForgotPass: "a[href='/in/login/pw/request/external']",
  fldEmail: '._email.form-control',
  sbmtFP: '.send',
  alert: '.alert.alert-info.alert-dismissable.getAccAlert',
};

export const verifyPageLoginforResetPassword = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/in/');
};

export const clickresetPassword = async () => {
  await base.clickElement(elements.btnForgotPass);
};

export const resetPassword = async (email) => {
  await base.setValueElement(elements.fldEmail, email);
  await base.clickElement(elements.sbmtFP);
};

export const veryfyAllertSuccess = async () => {
  await base.expectVisible(elements.alert);
};