/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  titlePage: '.Forgot-Password .heading',
  forgotPassHelp: '.forget-password-help',
  labelEmail: '.form-group .control-label ',
  txtEmail: "[name = 'email']",
  btnLanjutkan: "#fgtPwd-button-send[type = 'submit']",
  alertMsg: '.getAccAlert',
  errorHints: '.has-error .help-block .hints',
  errorInvalidEmail: '#fgtPwd-label-error2',
};

export const verifyPageForgotPass = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login/pw/request/external');
  await base.getStringText(elements.titlePage, 'Lupa password');
  await base.getStringText(elements.forgotPassHelp, 'Masukkan email anda untuk mendapatkan link mengubah kata sandi. Untuk merubah kata sandi silahkan cek email anda.');
  await base.getStringText(elements.labelEmail, 'Email terdaftar');
  await base.waitElementVisible(elements.txtEmail);
  await base.waitElementVisible(elements.btnLanjutkan);
};

export const inputEmail = async (email) => {
  await base.setValueElement(elements.txtEmail, email);
};

export const clickLanjutkan = async () => {
  await base.clickElement(elements.btnLanjutkan);
};

export const verifySuccessForgotPass = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login/pw/request/external');
  await base.getStringText(elements.alertMsg, 'Instruksi pengaturan ulang password telah dikirim ke alamat email Anda. Mohon menghubungi Layanan Konsumen jika membutuhkan bantuan lebih lanjut.');
};

export const errorUnregisteredEmail = async (errorMsg) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login/pw/request/external');
  await base.waitElementVisible(elements.errorHints, errorMsg);
};

export const inputInvalidEmail = async (invalidEmail) => {
  await base.setValueElement(elements.txtEmail, invalidEmail);
  await base.clickElement(elements.labelEmail);
};

export const errorInvalidEmail = async (errorMsg) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login/pw/request/external');
  await base.waitElementVisible(elements.errorInvalidEmail, errorMsg);
};
