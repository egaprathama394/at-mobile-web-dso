import * as base from '../common/base-functions';


var randomstring = require("randomstring")

const { client } = require('nightwatch-api');

const elements = {
  txtUsername: '#j_username',
  txtPassword: '#j_password',
  btnForgotPass: "a[href='/in/login/pw/request/external']",
  btnLogin: '.loginWrapper .btn-lg',
  btnFB: '#custom-social-btn-facebook',
  btnGoogle: '#custom-social-btn-google',
  btnRegist: "a[href='/in/register'] .margin-top-bottom20",
  updateNama: '.form-control:nth-child(2)',
  updateNb: '[name="lastName"]',
  updateEmail: '[name="email"]',
  updateHp: '[name="phoneNo"]',
  updateTgl: '[name="birthdate"]',
  fieldprovinsi: '[aria-labelledby="select2-regionSelector-container"]',
  fieldisian: '.select2-search__field',
  fieldSumatera: '.select2-results__option.select2-results__option--highlighted',
  updateKota: '[aria-labelledby=select2-profiledefaultAddresscity-container]',
  updateAlamat: '#address-line1',
  submit: '.__button-holder.button-margin',
  success: '.global-alerts',
};

const setObjectMappingDropdown = () => ({
  provinsi: elements.fieldprovinsi,
  kota: elements.updateKota,
});
const setObjectMappingValue = () => ({
});

export const isiHP = async () => {
  const middle = randomstring.generate({
    charset: 'numeric',
    length: 10,
  });
  const regcode = `8${middle}`;

  await base.setValueElement(elements.updateHp, regcode, client);
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
  await base.setValueElement(elements.txtUsername, username);
  await base.setValueElement(elements.txtPassword, password);
  client.pause(3000);
  await base.clickElement(elements.btnLogin);
};

export const updateData = async (name, nb, tanggal) => {
  await base.setValueElement(elements.updateNama, name);
  await base.setValueElement(elements.updateNb, nb);
  await base.setValueElement(elements.updateTgl, tanggal);
};

export const updateData2 = async (alamat) => {
  await base.setValueElement(elements.updateAlamat, alamat);
};

export const ketikDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(elements.fieldisian, value);
};

export const ChooseOptionDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(1000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};

export const clicksubmit = async () => {
  await base.clickElement(elements.submit);
};

export const verifySuccessPage = async () => {
  await client.pause(2000);
  await base.expectVisible(elements.success);
};
