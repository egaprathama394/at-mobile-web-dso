/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  arrowBack: '#register-span-back',
  titlePage: '#register-content-2 .heading',
  labelFirstName: '.form-group:nth-child(2) .control-label',
  txtFirstName: "[name = 'firstName']",
  LabelNoPhone: '.form-group:nth-child(1) .control-label',
  txtNoPhone: "[name ='mobileNumber']",
  noteNoPhone: '.for-mobile-number .Please-note',
  labelPass: '.form-with-note:nth-child(4) .control-label',
  txtPass: "[name = 'pwd']",
  notePass1: '.pass-helper>ul>li:nth-child(1)',
  notePass2: '.pass-helper #register-pwd-req1',
  notePass3: '.pass-helper #register-pwd-req2',
  btnDaftar: '#registerChkTermsConditions',
  linkTermAndCond: '.uncased .termsAndConditionsLink',
  linkPeivacyPolicy: '.uncased .privacyPolicyLink',
  errorEmptyNama: '#register-content-2 > div.form-group.has-error.relativeposition.error-element > label:nth-child(6)',
  errorEmptyNoPhone: '.error-element:nth-child(1) .error:nth-child(4)',
  errorEmptyPass: "[for = 'password'].error",
  footerIcon: '.footer-heading-icon',
};

export const verifyPage2 = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/register');
  await base.waitElementVisible(elements.arrowBack);
  await base.getStringText(elements.titlePage, 'Daftar');
  await base.getStringText(elements.labelFirstName, 'Nama lengkap');
  await base.waitElementVisible(elements.txtFirstName);
  await base.getStringText(elements.LabelNoPhone, 'Nomor handphone');
  await base.waitElementVisible(elements.txtNoPhone);
  await base.getStringText(elements.noteNoPhone, 'Contoh: 81112341234');
  await base.scrollToElement(elements.btnDaftar);
  await base.getStringText(elements.labelPass, 'Password');
  await base.waitElementVisible(elements.txtPass);
  await base.getStringText(elements.notePass1, 'Password Anda harus memiliki:');
  await base.getStringText(elements.notePass2, 'Minimal 8 karakter');
  await base.getStringText(elements.notePass3, 'Setidaknya 1 karakter angka');
  await base.scrollToElement(elements.footerIcon);
  await base.waitElementVisible(elements.btnDaftar);
  await base.waitElementVisible(elements.linkTermAndCond);
  await base.waitElementVisible(elements.linkPeivacyPolicy);
};


export const inputNama = async (name) => {
  await base.scrollToElement(elements.titlePage);
  await base.setValueElement(elements.txtFirstName, name);
};

export const inputNoPhone = async (noPhone) => {
  await base.scrollToElement(elements.txtPass);
  await base.setValueElement(elements.txtNoPhone, noPhone);
};

export const inputPass = async (pass) => {
  await base.scrollToElement(elements.btnDaftar);
  await base.setValueElement(elements.txtPass, pass);
};

export const clickDaftar = async () => {
  await base.scrollToElement(elements.footerIcon);
  await base.clickElement(elements.btnDaftar);
};

export const errorEmptyAllFields = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/register');
  await base.scrollToElement(elements.labelFirstName);
  await base.getStringText(elements.errorEmptyNama, 'Field ini diperlukan');
  await base.getStringText(elements.errorEmptyNoPhone, 'Field ini diperlukan');
  await base.scrollToElement(elements.btnDaftar);
  await base.getStringText(elements.errorEmptyPass, 'Field ini diperlukan');
};

export const clickTitlePage = async () => {
  await base.scrollToElement(elements.titlePage);
  await base.clickElement(elements.titlePage);
};

export const clickLabelPass = async () => {
  await base.clickElement(elements.labelPass);
};

export const errorFieldNoPhone = async () => {
  await base.scrollToElement(elements.txtPass);
  await base.waitElementVisible(elements.errorEmptyNoPhone, 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.');
};

export const UnclickableBtnDaftar = async () => {
  await base.scrollToElement(elements.footerIcon);
  await base.clickElement(elements.btnDaftar);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/register');
};
