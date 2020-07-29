import { client } from 'nightwatch-api/lib';
import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const elements = {
  titleLogin: '.loginWrapper .heading:nth-child(1)',
  emailBS: '#loginForm > div.row > div:nth-child(1) > div > div:nth-child(2) > label',
  passwordBS: '#loginForm > div.row > div:nth-child(1) > div > div:nth-child(3) > label',
  textUsername: '#j_username',
  textPassword: '#j_password',
  buttonForgot: "a[href='/in/login/pw/request/external']",
  buttonLogin: '.loginWrapper .btn-lg',
  buttonFB: '#custom-social-btn-facebook',
  buttonGoogle: '#custom-social-btn-google',
  buttonRegist: "a[href='/in/register'] .margin-top-bottom20",
  heading: '#loginForm > div.row > div.col-md-5.col-sm-12.grid-1.grid-2 > h4',
  details: '.details:nth-child(1)',
  detailsDaftar: '.details:nth-child(2)',
  banner: '.yCmsContentSlot.banner-logo-info',
  crumbHome: '.linkhome',
  breadcrumb: '.linkcontact',
  messageHai: '.code4:nth-child(1)',
  messageName: '.code5:nth-child(2)',
  messageHelp: '.code4:nth-child(3)',
  desc: '.text-description',
  kategori: '.message:nth-child(1) .code1',
  katdropdown: '.select2-selection.select2-selection--single',
  dropdownText: '.select2-search__field',
  dropdown: '.select2-results',
  dropdown1: '#select2-categoryMessage-result-pdft-33',
  subjek: '.message:nth-child(2) .code1',
  subjekText: '#subject',
  pesan: '.message:nth-child(3) .code1',
  message: '#message',
  note: '.notecontact',
  submit: '.submitdone',
  popup: '#submitContactUsModal',
  deliv: '.code5:nth-child(1)',
  popupText: '.message:nth-child(4) .code1',
  history: '.history:nth-child(1)',
  home: '.home',
  akunTitle: '.title:nth-child(1)',
  akundropdown: '.my-account-dropdown',
  akunHead: '.heading:nth-child(1)',
  search: '#search-msg',
  helper: '.helper-footer',
  akunData: '.__form-title',
  akunInfo: '.__section-title.opened',
  historyDropDown: 'a[href="/in/my-account/history-contact-us"]:nth-child(2)',
  servisDropDown: 'a[href="/in/my-account/service-order-history"]',
  kontakTitle: '.opened:nth-child(4)',
  menuAkunSaya: '.liOffcanvas > a[href="/in/my-account/update-profile"]',
  menuDaftar: '.user_account_menu .register',
  menuContact: '.yCmsContentSlot.__desktop-nav>li:nth-child(8)',
};

export const verifyLogin = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/contact-us');
};

export const clickLogin = async () => {
  await base.setValueElement(elements.textUsername, 'aci66v@gmail.com');
  await base.setValueElement(elements.textPassword, 'baby134137');
  await base.scrollToElement(elements.buttonGoogle);
  await base.clickElement(elements.buttonLogin);
  client.pause(1000);
};

export const verifyContact = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/contact-us');
  await base.assertContainsText(elements.banner, 'Hubungi Kami');
  await base.assertContainsText(elements.messageHai, 'Hai');
  await base.assertContainsText(elements.messageName, 'test baby,');
  await base.assertContainsText(elements.messageHelp, 'apa yang bisa kami bantu?');
  await base.scrollToElement(elements.note);
  await base.assertContainsText(elements.kategori, 'Kategori');
  await base.expectVisible(elements.katdropdown);
  await base.clickElement(elements.katdropdown);
  // await base.expectVisible(elements.dropdownText);
  await base.clickElement(elements.katdropdown);
  await base.assertContainsText(elements.subjek, 'Subjek');
  await base.expectVisible(elements.subjekText);
  await base.assertContainsText(elements.pesan, 'Isi Pesan / Detail Masalah');
  await base.expectVisible(elements.message);
  await base.assertContainsText(elements.note, 'Pesan Anda akan dibalas pada Hari Kerja Senin – Jumat jam 08.00 – 16.00 WIB.');
  await base.scrollToElement(elements.submit);
  await base.expectVisible(elements.submit);
};

export const submit = async () => {
  await base.scrollToElement(elements.banner);
  await base.clickElement(elements.katdropdown);
  // await base.expectVisible(elements.dropdownText);
  await base.setValueElementThenEnter(elements.dropdownText, 'Membeli Mobil');
  await base.scrollToElement(elements.submit);
  await base.setValueElement(elements.subjekText, 'Test Subjek');
  await base.setValueElement(elements.message, 'Test Isi Pesan');
  await base.clickElement(elements.submit);
};

export const submitRiwayat = async () => {
  await base.clickElement(elements.history);
};

export const submitHome = async () => {
  await base.clickElement(elements.home);
};

export const verifyPopUp = async () => {
  await base.expectVisible(elements.popup);
  await base.assertContainsText(elements.deliv, 'Pesan kamu terkirim :)');
  await base.assertContainsText(elements.popupText, 'Terima kasih telah menghubungi Customer Care kami. Kami akan segera membalas pesan Anda dan Anda bisa melihat riwayat pesan dengan mudah di Akun Saya.');
  await base.expectVisible(elements.history);
  await base.expectVisible(elements.home);
};

export const verifyRiwayat = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/history-contact-us');
  await base.assertContainsText(elements.akunTitle, 'Akun Saya');
  await base.expectVisible(elements.akundropdown);
  await base.assertContainsText(elements.akunHead, 'Riwayat Hubungi Kami');
  await base.expectVisible(elements.search);
  await base.scrollToElement(elements.helper);
  await base.assertContainsText(elements.helper, 'Butuh bantuan lain?');
};

export const verifyAkunSaya = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/update-profile');
  await base.expectVisible(elements.akundropdown);
  await base.assertContainsText(elements.akunTitle, 'Akun Saya');
  await base.assertContainsText(elements.akunData, 'Data Pribadi');
  await base.assertContainsText(elements.akunInfo, 'INFORMASI UMUM');
};

export const clickDropDown = async () => {
  await base.clickElement(elements.akundropdown);
  await base.scrollToElement(elements.kontakTitle);
  await base.clickElement(elements.historyDropDown);
};

export const riwayatServis = async () => {
  await base.clickElement(elements.akundropdown);
  await base.scrollToElement(elements.kontakTitle);
  await base.clickElement(elements.servisDropDown);
};

export const verifyHome = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/');
};

export const clickAkunSaya = async () => {
  await base.scrollDown('body');
  await base.clickElement(elements.menuAkunSaya);
};

export const clickMenuContact = async () => {
  await base.scrollToElement(elements.menuDaftar);
  await base.scrollToElement(elements.menuAkunSaya);
  await base.expectVisible(elements.menuContact);
  await base.clickElement(elements.menuContact);
  client.pause(1000);
};
