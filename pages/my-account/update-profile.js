/* eslint-disable import/prefer-default-export */
import { client } from 'nightwatch-api/lib';
import * as base from '../../common/base-functions';

const elements = {
  titlePage: '.title',
  dropdownMenu: '.my-account-dropdown',
  formTitle: '.__form-title',
  sectionInformasiUmum: '.__section-title.opened:nth-child(2)',
  labelFirstname: '#addnew-address > div:nth-child(1) > div:nth-child(1) > div > label',
  txtFirstName: "[name ='firstName']",
  labelLastname: "[for='profile.lastName']",
  txtLastName: "[name ='lastName']",
  datePicker: "[name ='birthdate']",
  pilihTanggal: 'tr:not(.disabled):nth-child(4) .day:not(.disabled):nth-child(4)',
  dropdownSearch: '.select2-search__field',
  sectionKontak: '#userAccountRequest .__section-title.opened:nth-child(4)',
  txtEmail: "[name ='email']",
  txtPhoneNo: "[name ='phoneNo']",
  sectionAlamat: '.__section-title.opened:nth-child(6)',
  labelProvinsi: "#other-info  label.control-label[for='regionSelector']",
  // eslint-disable-next-line no-useless-escape
  labelKota: "#other-info  label.control-label[for='profile\.defaultAddress\.city']",
  dropdownRegion: '#select2-regionSelector-container',
  textProvinsi: '#other-info > div:nth-child(1) > div:nth-child(1) > div > div > div > div > span > span.selection > span',
  textKota: '#other-info > div:nth-child(1) > div:nth-child(2) > div > div > div > div > span > span.selection > span',
  dropdownCity: '#select2-profiledefaultAddresscity-container',
  txtAlamat: '#address-line1',
  btnBatal: '#userAccountRequest > div.row._xs-button-center.margin-top-bottom20 > div.col-6.pl-0 > a > button',
  btnSimpan: "#userAccountRequest button[type='submit']",
  alertSaved: '.global-alerts .alert.alert-info.alert-dismissable.getAccAlert',
  errorMsgFirstname: "label[for='profile.firstName'].error",
  errorMsgPhonenumber: "label[for='profile.mobileNumber'].error",
  valueBlankRegion: "#select2-regionSelector-results [role='treeitem']",
  valueBlankCity: "#select2-profiledefaultAddresscity-results [role='treeitem']",
};

export const verifyUpdateProfile = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/update-profile');
  await base.getStringText(elements.titlePage, 'Akun Saya');
  await base.waitElementVisible(elements.dropdownMenu);
  await base.getStringText(elements.formTitle, 'Data Pribadi');
  await base.getStringText(elements.sectionInformasiUmum, 'INFORMASI UMUM');
  await base.waitElementVisible(elements.txtFirstName);
  await base.waitElementVisible(elements.txtLastName);
  await base.waitElementVisible(elements.datePicker);
  await base.getStringText(elements.sectionKontak, 'KONTAK');
  await base.waitElementVisible(elements.txtEmail);
  await base.waitElementVisible(elements.txtPhoneNo);
  await base.getStringText(elements.sectionAlamat, 'ALAMAT');
  await base.getStringText(elements.labelKota, 'Kota');
  await base.getStringText(elements.labelProvinsi, 'Provinsi');
  await base.waitElementVisible(elements.dropdownRegion);
  await base.waitElementVisible(elements.dropdownCity);
  await base.waitElementVisible(elements.txtAlamat);
  await base.waitElementVisible(elements.btnBatal);
  await base.waitElementVisible(elements.btnSimpan);
};
const getElementLabel = () => ({
  firstname: elements.labelFirstname,
  lastname: elements.labelLastname,
});

export const clickDropdownAkunSaya = async () => {
  await base.clickElement(elements.dropdownMenu);
};
export const clickButtonSimpan = async () => {
  await base.scrollDown(elements.btnSimpan);
  await base.clickElement(elements.btnSimpan);
};
export const clickButtonBatal = async () => {
  await base.scrollDown(elements.btnBatal);
  await base.clickElement(elements.btnBatal);
};

export const verifyInformationSaved = async () => {
  await base.waitElementVisible(elements.alertSaved);
};
export const verifyInformationUnSaved = async () => {
  await base.scrollToElement(elements.alertSaved);
  await base.expectNotFound(elements.alertSaved);
};

const setObjectMappingField = () => ({
  firstname: elements.txtFirstName,
  lastname: elements.txtLastName,
  phonenumber: elements.txtPhoneNo,
  address: elements.txtAlamat,
});
const setObjectMappingDropdown = () => ({
  birthdate: elements.datePicker,
  region: elements.textProvinsi,
  city: elements.textKota,
});
export const insertField = async (field, value) => {
  await base.scrollToElement(`${getElementLabel()[field]}`);
  await base.clickElement(`${setObjectMappingField()[field]}`, client);
  await base.setValueElementThenEnter(`${setObjectMappingField()[field]}`, value);
};
export const updateField = async (field, value) => {
  await base.scrollToElement(`${getElementLabel()[field]}`);
  await base.clickElement(`${setObjectMappingField()[field]}`, client);
  await base.setValueElement(`${setObjectMappingField()[field]}`, value);
};

export const insertFieldDropdown = async (field, value) => {
  await base.scrollToElement(`${getElementLabel()[field]}`);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(elements.dropdownSearch, value);
};
const setObjectMappingValue = () => ({
  pilihtanggal: elements.pilihTanggal,
});

export const ChooseOptionDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(5000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};

export const deleteItem = async (field) => {
  await base.scrollToElement(`${getElementLabel()[field]}`);
  await base.clickElement(`${setObjectMappingField()[field]}`, client);
  await base.setValueElementThenEnter(`${setObjectMappingField()[field]}`, '');
};
const setAlertMessage = () => ({
  firstname: elements.errorMsgFirstname,
  phonenumber: elements.errorMsgPhonenumber,
});

export const verifyMessage = async (content, message) => {
  await base.scrollToElement(`${getElementLabel()[content]}`);
  await base.expectVisible(`${setAlertMessage()[content]}`);
  await base.expectElementEqualText(`${setAlertMessage()[content]}`, message);
};
const getBlankObjectMappingDropdown = () => ({
  region: elements.valueBlankRegion,
  city: elements.valueBlankCity,
});

export const verifyBlank = async (content) => {
  await base.scrollToElement(`${getElementLabel()[content]}`);
  await base.expectVisible(`${getBlankObjectMappingDropdown()[content]}`);
};
export const verifyValue = async (field, value) => {
  await base.scrollToElement(`${getElementLabel()[field]}`);
  await base.expectElementEqualValue(`${setObjectMappingField()[field]}`, value);
};
