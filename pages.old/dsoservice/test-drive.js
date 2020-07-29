import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  dropdownMenu: '.my-account-dropdown',
  headingTitle: '.heading',
  textDesc: '.text-description',
  formTitle: '.__form-title',
  optionModel: 'span[aria-labelledby=select2-testDriveproductModel-container]',
  fieldoutlet: '.select2-results__option:nth-child(3)',
  optionOutlet: 'span[aria-labelledby=select2-branch-container]',
  optionTransmission: 'span[aria-labelledby=select2-testDriveproductVariant-container]',
  optionCity: 'span[aria-labelledby=select2-city-container]',
  optionLocation: 'span[aria-labelledby=select2-testDrivetestDriveAt-container]',
  optionTanggal: '[name=callDate]',
  optionJam: 'span[aria-labelledby=select2-testDrivetimeToCall-container]',
  btnLanjutkan: '#submittestdrive',
  note: '.notice',
  cityvalue: '#cityValue',
  fieldmanual: '.select2-results__option:nth-child(2)',
  fieldjam: '.select2-results__option:nth-child(2)',
  fieldisian: '.select2-search__field',
  optionmanual: '.select2-results__option:nth-child(2)',
  optionoutlet: '.select2-results__option:nth-child(3)',
  optionRumah: '.select2-results__option:nth-child(2)',
  optiontanggal30: '.day:not(.disabled):nth-child(4)',
  fieldOutlet: 'span[aria-labelledby=select2-branch-container]',
  isianjam: '.select2-results__option:nth-child(2)',
  tuan: '.select2-results__option:nth-child(3)',
  fldND: '#autoServiceForm [name="firstName"]',
  fldNB: '#autoServiceForm [name="lastName"]',
  fldEmail: '#service-email[name="email"]',
  fldHP: '#service-mobileNumber[name="mobile"]',
  fldAlamat: '#address-line1:nth-child(2)',
  sbmtCO: '#addressCartSubmit',
  ottoh: '.select2-results__option~[aria-selected=false]',
  txtUsername: '#j_username',
  txtPassword: '#j_password',
  harmoni: '.select2-results__option:nth-child(3)',
  modelError: '.error:nth-child(3)',
  outletError: '#test-drivebranch > div > label.error',
  dateError: '.error:nth-child(4)',
  timeError: '#addnew-address > div > div > div.timeWrapper > div > label.error',
  catatan: '#notes',
  minError: '.error:nth-child(3)',
  maxError: '.error:nth-child(3)',
  NDError: '.error:nth-child(4)',
  NBError: '#autoServiceForm > div > div:nth-child(1) > div:nth-child(2) label.error',
  emailError: '#autoServiceForm > div > div:nth-child(2) > div:nth-child(1) label.error',
  HPError: '#autoServiceForm > div > div> .mobile_number > div > label.error',
  alamatError: '.error:nth-child(3)',
};

// Untuk ketik didropdown
const setObjectMappingDropdown = () => ({
  model: element.optionModel,
  outlet: element.fieldOutlet,
  tanggal: element.optionTanggal,
  jam: element.optionJam,
});

// Untuk pilih dropdown
const setObjectMappingValue = () => ({
  date: element.optiontanggal30,
  time: element.isianjam,
});

export const ketikdropdown = async (field, value) => {
  await base.scrollToElement(element.optionTanggal);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(3000);
  await base.setValueElementThenEnter(element.fieldisian, value);
  await base.scrollToElement(element.optionTransmission);
};

export const chooseOptionDropdown = async (field, value) => {
  await base.scrollToElement(element.optionTanggal);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(2000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
};

export const clickbtnLanjutkan = async () => {
  await base.scrollToElement(element.optionJam);
  await base.clickElement(element.btnLanjutkan);
};

export const inputcatatan = async (catatan) => {
  await base.setValueElement(element.catatan, catatan);
};

export const testdrive = async (ND, NB, Email, HP, ALAMAT) => {
  await base.setValueElement(element.fldND, ND);
  await base.setValueElement(element.fldNB, NB);
  await base.setValueElement(element.fldEmail, Email);
  await base.setValueElement(element.fldHP, HP);
  await base.setValueElement(element.fldAlamat, ALAMAT);
  await base.clickElement(element.sbmtCO);
};

export const inputUsernamePassword = async (email, pass) => {
  await base.setValueElement(element.txtUsername, email);
  await base.setValueElement(element.txtPassword, pass);
};

export const verifyTestDrive = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/test-drive');
  await base.assertContainsText(elements.dropdownMenu, 'Test Drive');
  await base.assertContainsText(elements.headingTitle, 'Test Drive');
  await base.assertContainsText(elements.textDesc, 'Ingin mencoba Daihatsu idaman sebelum membelinya? Atur jadwal test drive dengan pilihan kendaraan yang Anda inginkan.');
  await base.assertContainsText(elements.formTitle, 'Detail Mobil');
  await base.expectVisible(elements.optionModel);
  await base.expectVisible(elements.optionTransmission);
  await base.expectVisible(elements.optionCity);
  await base.expectVisible(elements.optionLocation);
  await base.expectVisible(elements.optionTanggal);
  await base.expectVisible(elements.optionJam);
  await base.expectVisible(elements.btnLanjutkan);
  await base.assertContainsText(elements.note, 'Pemenuhan permintaan test drive akan mengikuti ketersediaan unit, sales force kami akan menghubungi Anda.');
  // await base.expectVisible(element)
};

export const verifyCheckoutTD = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/checkout/multi-testdrive/delivery-address/add');
};

export const verifyLabelError = async () => {
  await base.scrollToElement(element.formTitle);
  await base.assertContainsText(element.modelError, 'Field ini diperlukan.');
  await base.assertContainsText(element.outletError, 'Field ini diperlukan.');
  await base.scrollToElement(element.btnLanjutkan);
  await base.assertContainsText(element.dateError, 'Field ini diperlukan.');
  await base.assertContainsText(element.timeError, 'Field ini diperlukan.');
};

export const inputCatatan = async (catatan) => {
  await base.scrollToElement(element.btnLanjutkan);
  client.pause(1000);
  await base.setValueElement(element.catatan, catatan);
};

export const verifyMinError = async () => {
  await base.scrollToElement(element.btnLanjutkan);
  await base.assertContainsText(element.minError, 'Silakan masukkan minimal 3 karakter');
};

export const verifyMaxError = async () => {
  await base.scrollToElement(element.btnLanjutkan);
  await base.assertContainsText(element.maxError, 'Anda telah melebihi batas maksimum karakter');
};

export const scrollToLanjutkan = async () => {
  await base.scrollToElement(element.btnLanjutkan);
};

export const verifyCheckoutError = async () => {
  await base.scrollToElement(element.fldND);
  await base.assertContainsText(element.NDError, 'Field ini diperlukan.');
  await base.assertContainsText(element.NBError, 'Field ini diperlukan.');
  await base.assertContainsText(element.emailError, 'Field ini diperlukan.');
  await base.scrollToElement(element.sbmtCO);
  await base.assertContainsText(element.HPError, 'Field ini diperlukan.');
  await base.assertContainsText(element.alamatError, 'Field ini diperlukan.');
};

export const verifyMaxCheckoutError = async () => {
  await base.scrollToElement(element.fldND);
  await base.assertContainsText(element.NDError, 'Anda telah melebihi batas maksimum karakter');
  client.pause(1000);
  await base.assertContainsText(element.NBError, 'Anda telah melebihi batas maksimum karakter');
  client.pause(1000);
  await base.assertContainsText(element.emailError, 'Anda telah melebihi batas maksimum karakter');
  await base.scrollToElement(element.sbmtCO);
  await base.assertContainsText(element.alamatError, 'Anda telah melebihi batas maksimum karakter');
};

export const verifyEmailCheckoutError = async () => {
  await base.scrollToElement(element.fldND);
  await base.assertContainsText(element.emailError, 'Mohon masukkan alamat email yang benar');
  await base.scrollToElement(element.sbmtCO);
};

export const verifyHPCheckoutError = async () => {
  await base.scrollToElement(element.fldND);
  await base.assertContainsText(element.HPError, 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.');
  await base.scrollToElement(element.sbmtCO);
};
