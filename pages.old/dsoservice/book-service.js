import { client } from 'nightwatch-api/lib';
import * as base from '../../common/base-functions';

const elements = {
  dropdownMenu: '.my-account-dropdown',
  headingBookingservice: '.mob-heading',
  txtDefinition: '.text-description',
  txtDisclaimerNopol: '.info:nth-of-type(2)',
  dropdownModel: 'span[aria-labelledby=select2-model-container]',
  dropdownCity: '#city',
  dropdownOutlet: 'span[aria-labelledby=select2-branch-container]',
  txtTanggal: '[name=callDate]',
  txtJam: '#callTime',
  txtNote: '#notes',
  btnSubmit: '#submit_book',
  txtUsername: '#j_username',
  txtPassword: '#j_password',
  btnLogin: '.loginWrapper .btn-lg',
  txtNopol: '#policeNo',
  fieldisian: '.select2-search__field',
  textNoPol: '#policeNo',
  seribukm: '.select2-results__option:nth-child(2)',
  dropdownTime: 'span[aria-labelledby=select2-callTime-container]',
  isian0830: '.select2-results__option:nth-child(3)',
  isianTanggal: '.day:not(.disabled):nth-child(4)',
  dropdownTahun: 'span[aria-labelledby=select2-year-container]',
  dropdownKategoriServis: '#serviceCategory~.select2-container',
  optionTanggal: '.day:not(.disabled):nth-child(4)',
  isianJam: '.select2-results__option:nth-child(4)',
  ND: '#autoServiceForm [name=firstName]',
  NB: '#autoServiceForm [name=lastName]',
  Email: '#service-email',
  HP: '#service-mobileNumber',
  btnSubmit2: '#addressCartSubmit',
  fieldotp: ' #otp',
  verifyotp: '.verify-otp',
  selamat: '.congrats',
  notif: '.icon-Bell',
  firstOrder: '.notify_info:nth-child(2)',
  statusOrder: '#car_orderstatus',
  ulasan: '#status .link--gray',
  bintang3: '.ratinglevel__item-service:nth-child(3)',
  submitUlasan: '.btn',
  puas: '.orderfeedback__ratingitem.active',
  feedbackPop: '.getAccAlert',
  feedbackHead: '.orderfeedback__heading:nth-child(1)',
  chooseCar: '.vehicle-selectbox',
  car1: '.vehicle-dropdown__list:nth-child(1)',
  orderStatus: '.vehicle-table--row:nth-child(2) .vehicle-table--status',
  beriUlasan: '.vehicle-table--feedback .link--gray:nth-child(1)',
  ratingFail: '.error:nth-child(4)',
};
const setObjectMappingDropdown = () => ({
  model: elements.dropdownModel,
  years: elements.dropdownTahun,
  katserv: elements.dropdownKategoriServis,
  outlet: elements.dropdownOutlet,
  date: elements.txtTanggal,
  jam: elements.dropdownTime,
  // notif: elements.notif,
});

const setObjectMappingValue = () => ({
  firstavailabledate: elements.optionTanggal,
  waktuService: elements.isianJam,
  // firstnotif: elements.firstOrder,
});

export const verifyPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/book-service');
  await base.assertContainsText(elements.dropdownMenu, 'Booking Service');
  await base.assertContainsText(elements.headingBookingservice, 'Booking Service');
  await base.assertContainsText(elements.txtDefinition, 'Jaga selalu performa Daihatsu kesayangan Anda dengan melakukan service berkala di bengkel resmi Daihatsu. Lakukan booking service.');
  await base.assertContainsText(elements.txtDisclaimerNopol, 'Contoh penulisan B123DSO (tanpa spasi)');
  await base.expectVisible(elements.dropdownModel);
  await base.expectVisible(elements.dropdownOutlet);
  await base.expectVisible(elements.txtTanggal);
  await base.expectVisible(elements.txtJam);
  await base.expectVisible(elements.txtNote);
  await base.expectVisible(elements.btnSubmit);
};

export const IdPass = async (username, password) => {
  await base.setValueElement(elements.txtUsername, username);
  await base.setValueElement(elements.txtPassword, password);
  await base.clickElement(elements.btnLogin);
};


export const inputfieldBS = async (NoPol) => {
  await base.setValueElement(elements.textNoPol, NoPol);
};

export const ketikDropdown = async (field, value) => {
  await base.scrollToElement(elements.dropdownKategoriServis);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(elements.fieldisian, value);
};

export const ChooseOptionDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(1000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};

export const setNote = async (note) => {
  await base.setValueElement(elements.txtNote, note);
};

export const klikLanjutkan = async () => {
  await base.clickElement(elements.btnSubmit);
};

export const klikLanjutkan2 = async () => {
  await base.clickElement(elements.btnSubmit2);
};

export const changeHP = async (HP) => {
  await base.setValueElement(elements.HP, HP);
};

// eslint-disable-next-line no-shadow
export const otp = async (otp) => {
  await base.clickElement(elements.fieldotp);
  await base.setValueElement(elements.fieldotp, otp);
  await base.clickElement(elements.verifyotp);
};

export const successVerify = async () => {
  await base.expectVisible(elements.selamat);
};

export const scrollToLogin = async () => {
  await base.scrollDown(elements.btnLogin);
};

// };

export const waitStatusClosed = async () => {
  client.pause(5000);
};

export const notif = async () => {
  await base.clickElement(elements.notif);
  await base.clickElement(elements.firstOrder);
};

export const ratingBS = async () => {
  await base.assertContainsText(elements.statusOrder, 'Closed');
  await base.scrollToElement(elements.ulasan);
  await base.assertContainsText(elements.ulasan, 'Berikan Ulasan');
  await base.clickElement(elements.ulasan);
};

export const negativeStatus = async () => {
  await base.assertContainsText(elements.statusOrder, 'Sent');
};

export const negativeUlasan = async () => {
  await base.expectNotFound(elements.ulasan);
};

export const giveRating = async () => {
  await base.scrollToElement(elements.submitUlasan);
  await base.clickElement(elements.bintang3);
  await base.assertContainsText(elements.puas, 'Puas');
  await base.clickElement(elements.submitUlasan);
};

export const notGiveRating = async () => {
  await base.scrollToElement(elements.submitUlasan);
  await base.clickElement(elements.submitUlasan);
};

export const ratingSuccess = async () => {
  await base.assertContainsText(elements.feedbackPop, 'Terima kasih atas feedback Sahabat Daihatsu');
  await base.assertContainsText(elements.feedbackHead, 'Ulasan Anda Untuk Pemesanan Ini Telah Kami Terima');
};

export const ratingFailed = async () => {
  await base.assertContainsText(elements.ratingFail, 'Field ini diperlukan.');
};

export const carDropDown = async () => {
  await base.clickElement(elements.chooseCar);
  await base.clickElement(elements.car1);
};

export const ratingRiwayat = async () => {
  await base.assertContainsText(elements.orderStatus, 'Closed');
  await base.scrollToElement(elements.beriUlasan);
  await base.clickElement(elements.beriUlasan);
};
