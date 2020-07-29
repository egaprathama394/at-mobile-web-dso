/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { client } from 'nightwatch-api/lib';
import * as base from '../common/base-functions';

const elements = {
  breadCrumb: '',
  labelBookingService: '#detailSevices .heading.mob-heading.d-lg-none.two',
  subHeaderBookingService: '#detailSevices .subheader-text.row.d-lg-none  h2',
  labelDetailService: '#bookServiceForm .__form-title',

  // model
  labelModel: '#addnew-address > div > :nth-child(1) label',
  placeHolderModel: '',
  fieldModel: '#addnew-address :nth-child(1) > div > div > div > div > span > span.selection > span',

  // tahun beli
  labelTahunPembelian: '#addnew-address :nth-child(2) .form-group.relativeposition label',
  placeholderPilihTahunPembelian: '',
  fieldTahunPembelian: '#addnew-address :nth-child(2) .form-group.relativeposition .select2-selection',
  labelNomorPolisiKendaraan: '#addnew-address :nth-child(3) .form-group.relativeposition label',
  placeholderPolisiKendaraan: '',
  fieldNomorPolisiKendaraan: '#addnew-address :nth-child(3) .form-group.relativeposition #policeNo',
  sublabelNomorPolisiKendaraan: '#addnew-address :nth-child(3) .info.Please-note.form-group',
  labelKategoriServis: '#detailSevices :nth-child(9) .field-box  label.control-label',
  placeholderKategoriServis: '',
  fieldKategoriServis: '#detailSevices :nth-child(9) .field-box  span.selection > span',
  labelKeluhan: '#detailSevices :nth-child(10) label',
  placeholderKeluhan: '',
  fieldKeluhan: '#notes',
  labelOutlet: '#book-service-branch label',
  placeholderOutlet: '',
  fieldOutlet: '#book-service-branch .selection',
  labelTanggal: '#dob-datepickers label',
  placeholderTanggal: '',
  popupDate: '.datepicker-days',
  fieldTanggal: '#callDate',
  sublabelTanggal: '#detailSevices :nth-child(15)  .Please-note',
  labelJam: '#detailSevices :nth-child(15) :nth-child(2)  label',
  placeholderJam: '',
  popupJam: '',
  fieldJam: '#detailSevices :nth-child(15) :nth-child(2)   span.selection > span',
  titleDetailPemesan: '#detailCustomers .__form-title',
  labelNamaLengkap: '#detailCustomers :nth-child(6) label.control-label',
  fieldNamaLengkap: '#detailCustomers :nth-child(6) > div.col-sm-12.col-md-12.col-lg-12 .input-group input',
  labelNomorHp: '#bookServiceForm :nth-child(7)  label',
  fieldKodeNegara: '#detailCustomers .mobile_number #isdCode',
  fieldNomorHp: '#detailCustomers .mobile_number #service-mobileNumber',
  sublabelNomorHandphone: '#detailCustomers .Please-note.form-group',
  btnKirimOTP: '#addressCartBookServiceSubmit',
  labelEmail: '#detailCustomers :nth-child(8) label',
  fieldEmail: '#service-email',
  btnBookingService: '#detailCustomers > div.booking-btn',
  pilihJam: '.select2-results__option:nth-child(2)',
  pilihTanggal: 'tr:not(.disabled):nth-child(4) .day:not(.disabled):nth-child(4)',
  dropdownSearch: '.select2-search__field',
  fieldOTP: '#otp',
  btnKirimUlangOTP: '#addressCartBookServiceSubmit',
  // alerterror
  alertInvalidOTP: '#detailCustomers #invalid_otp > span.hints',
  alertInvalidPhoneNumber: '[for="service-mobileNumber"].error',
  alertInvalidName: '',
  labelErrorModeL: '#addnew-address > div > div:nth-child(1) > div > label.error',
  labelErrorNomorPolisiKendaraan: '#addnew-address :nth-child(3) .form-group.relativeposition.error-element > label.error',
  labelErrorKategoriServis: '#detailSevices :nth-child(9) .field-box  label.error',
  labelErrorOutlet: '#book-service-branch  label.error',
  labelErrorDate: '#dob-datepickers  label.error',
  labelErrorJam: '#detailSevices :nth-child(15) :nth-child(2)  label.error',
  valueBlankKategoriService: '#select2-serviceCategory-results  li',
  valueBlankJam: '#select2-callTime-results li',
  inputFieldTahun: '#addnew-address > div > div:nth-child(2) > div > div > div > div > span:nth-child(3) > span > span.select2-search.select2-search--dropdown > input',
  valueBlankTahun: '#select2-year-results > li',
  valueBlankModel: "[role='treeitem']",
};

export const veryfyErrorBlankFieldModel = async () => {
  await base.scrollToElement(elements.labelErrorModeL);
  await base.expectVisible(elements.labelErrorModeL);
};
export const veryfyErrorBlankFieldPoliceNo = async () => {
  await base.scrollToElement(elements.labelErrorNomorPolisiKendaraan);
  await base.expectVisible(elements.labelErrorNomorPolisiKendaraan);
};
export const veryfyErrorBlankFieldDate = async () => {
  await base.scrollToElement(elements.labelErrorDate);
  await base.expectVisible(elements.labelErrorDate);
};
export const veryfyErrorBlankFieldJam = async () => {
  await base.scrollToElement(elements.labelErrorJam);
  await base.expectVisible(elements.labelErrorJam);
};
export const veryfyErrorBlankFieldKategoriService = async () => {
  await base.scrollToElement(elements.labelErrorKategoriServis);
  await base.expectVisible(elements.labelErrorKategoriServis);
};
export const veryfyErrorBlankOutlet = async () => {
  await base.scrollToElement(elements.labelErrorOutlet);
  await base.expectVisible(elements.labelErrorOutlet);
};

const setBlankObjectMappingDropdown = () => ({
  model: elements.valueBlankModel,
  tahun: elements.valueBlankTahun,
  kategori: elements.valueBlankKategoriService,
  jam: elements.valueBlankJam,
});
const getElementLabel = () => ({
  nomorhandphone: elements.labelNomorHp,
  model: elements.labelModel,
  tahun: elements.labelTahunPembelian,
  kategori: elements.labelKategoriServis,
  otp: elements.labelOutp,
});
const setAlertMessage = () => ({
  nomorhandphone: elements.alertInvalidPhoneNumber,
  otp: elements.alertInvalidOTP,
  model: elements.labelErrorModeL,
  tanggal: elements.labelErrorDate,
  jam: elements.labelErrorJam,
  kategori: elements.labelErrorKategoriServis,
  nokendaraan: elements.labelErrorNomorPolisiKendaraan,
});

export const verifyBlankJam = async () => {
  await base.scrollToElement(elements.labelJam);
  await base.expectVisible(elements.valueBlankJam);
};
export const verifyBlankKategoriService = async () => {
  await base.scrollToElement(elements.labelKategoriServis);
  await base.expectVisible(elements.valueBlankKategoriService);
};
// alert error message for detail pemesan
export const verifyMessage = async (content, message) => {
  await base.scrollToElement(`${getElementLabel()[content]}`);
  await base.expectVisible(`${setAlertMessage()[content]}`);
  await base.expectElementEqualText(`${setAlertMessage()[content]}`, message);
};

export const verifyBlank = async (content) => {
  await base.scrollToElement(`${getElementLabel()[content]}`);
  await base.expectVisible(`${setBlankObjectMappingDropdown()[content]}`);
};


export const verifyBookingService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/book-service');
  // await base.expectVisible(elements.breadCrumb);
  await base.expectElementEqualText(elements.labelBookingService, 'Booking Service');
  await base.expectElementEqualText(elements.subHeaderBookingService, 'Jaga selalu performa Daihatsu kesayangan Anda dengan melakukan service berkala di bengkel resmi Daihatsu. Lakukan booking service.');
  await base.expectElementEqualText(elements.labelDetailService, 'Detail Servis');
  await base.expectElementEqualText(elements.labelModel, 'Model*');
  await base.expectVisible(elements.fieldModel);
  //   await base.expectElementEqualText(elements.placeHolderModel, 'Pilih Model');
  //   await base.expectElementEqualText(elements.labelTahunPembelian, 'Tahun Pembelian*');
  await base.expectVisible(elements.fieldTahunPembelian);
  //   await base.expectElementEqualText(elements.placeholderPilihTahunPembelian, 'Pilih Tahun Pembelian');
  //   await base.expectElementEqualText(elements.labelNomorPolisiKendaraan, 'Nomor Polisi Kendaraan');
  await base.expectVisible(elements.fieldNomorPolisiKendaraan);
  //   await base.expectElementEqualText(elements.sublabelNomorPolisiKendaraan, 'Anda bisa memasukan dengan format BP1478HD atau BP 1478 HD');
  await base.expectElementEqualText(elements.labelKategoriServis, 'Kategori Servis*');
  //   await base.expectElementEqualText(elements.placeholderKategoriServis,   'Pilih Kategori Servis',
  //   'Estimasi Pengerjaan service: Pilih kategori servis dahulu',
  await base.expectElementEqualText(elements.labelKeluhan, 'Catatan/Keluhan');
  //   await base.expectElementEqualText(elements.placeholderKeluhan, 'Eg: Mobil sering cepat panas padahal tidak dipakai');
  await base.expectVisible(elements.fieldKeluhan);
  await base.expectElementEqualText(elements.labelOutlet, 'Outlet*');
  //   await base.expectElementEqualText(elements.placeholderKeluhan, 'Eg: Mobil sering cepat panas padahal tidak dipakai');
  await base.expectVisible(elements.fieldOutlet);
  await base.expectElementEqualText(elements.labelTanggal, 'Tanggal*');
  //   await base.expectElementEqualText(elements.placeholderTanggal, 'Pilih Tanggal Booking');
  await base.expectVisible(elements.fieldTanggal);
  await base.expectElementEqualText(elements.sublabelTanggal, 'Booking minimal H+1 dan maksimal H+14 dari waktu booking');

  await base.expectElementEqualText(elements.labelJam, 'Jam Tersedia*');
  //   await base.expectElementEqualText(elements.placeholderJam, 'Pilih Jam Booking');
  await base.expectVisible(elements.fieldJam);

  await base.expectElementEqualText(elements.titleDetailPemesan, 'Detail Informasi Pemesan');
  await base.expectElementEqualText(elements.labelNamaLengkap, 'Nama Lengkap*');
  await base.expectVisible(elements.fieldNamaLengkap);
  await base.expectElementEqualText(elements.labelNomorHp, 'Nomor Handphone*');
  await base.expectVisible(elements.fieldKodeNegara);
  await base.expectVisible(elements.fieldNomorHp);
  await base.expectElementEqualText(elements.sublabelNomorHandphone, 'Contoh: 81112341234');
  await base.expectVisible(elements.btnKirimOTP);
  await base.expectElementEqualText(elements.labelEmail, 'Alamat Email*');
  await base.expectVisible(elements.btnBookingService);
  await base.expectElementEqualText(elements.btnBookingService, 'BOOKING SERVICE');
};

export const clickModelField = async () => {
  await base.scrollToElement(elements.labelModel);
  await base.clickElement(elements.fieldModel);
};
export const clickCategoryServiceField = async () => {
  await base.scrollToElement(elements.labelKategoriServis);
  await base.clickElement(elements.fieldKategoriServis);
};
export const clickJamField = async () => {
  await base.scrollToElement(elements.labelJam);
  await base.clickElement(elements.fieldJam);
};
export const clickTahunField = async () => {
  await base.scrollToElement(elements.labelTahunPembelian);
  await base.clickElement(elements.fieldTahunPembelian);
};
export const clickBtnKodeOTP = async () => {
  await base.scrollToElement(elements.btnKirimOTP);
  await base.clickElement(elements.btnKirimOTP);
};

export const detailPemesan = async (fieldNamaLengkap, fieldNomorHp, fieldEmail) => {
  await base.scrollToElement(elements.fieldNomorHp);
  await base.clickElement(elements.fieldNamaLengkap);
  await base.setValueElementThenEnter(elements.fieldNamaLengkap, fieldNamaLengkap);
  await base.setValueElementThenEnter(elements.fieldNomorHp, fieldNomorHp);
  await base.setValueElementThenEnter(elements.fieldEmail, fieldEmail);
  await base.scrollToElement(elements.btnKirimOTP);
  await base.clickElement(elements.btnKirimOTP);
};
// Detail Order
const setObjectMappingDropdown = () => ({
  model: elements.fieldModel,
  tahun: elements.fieldTahunPembelian,
  kategori: elements.fieldKategoriServis,
  outlet: elements.fieldOutlet,
  tanggal: elements.fieldTanggal,
  jam: elements.fieldJam,
});
// informasi pemesan
const setObjectMappingInformation = () => ({
  namalengkap: elements.fieldNamaLengkap,
  nomorhandphone: elements.fieldNomorHp,
  email: elements.fieldEmail,
});
export const ketikField = async (value, content) => {
  await base.setValueElementThenEnter(`${setObjectMappingInformation()[content]}`, value);
};

const setObjectMappingValue = () => ({
  pilihtanggal: elements.pilihTanggal,
  pilihjam: elements.pilihJam,
});

// pages
export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextBookingService, 'Booking Service');
};

export const ketikDropDown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(elements.dropdownSearch, value);
};
export const ketikDropDown1 = async (value, content) => {
  await base.scrollToElement(`${getElementLabel()[content]}`, client);
  await base.clickElement(`${setObjectMappingDropdown()[content]}`, client);
  await base.setValueElementThenEnter(elements.dropdownSearch, value);
};

export const nopolMobil = async (nopol) => {
  await base.setValueElement(elements.fieldNomorPolisiKendaraan, nopol);
};

export const noteService = async (catatan) => {
  await base.setValueElement(elements.fieldKeluhan, catatan);
};

export const ChooseOptionDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(5000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};
export const otp = async (OTP) => {
  await base.clickElement(elements.btnKirimOTP);
  await base.setValueElement(elements.fieldOTP, OTP);
};

export const submit = async () => {
  await base.scrollToElement(elements.btnBookingService);
  await base.expectVisible(elements.btnBookingService);
  await base.clickElement(elements.btnBookingService);
};

export const requestotpagain = async () => {
  await base.expectVisible(elements.alertInvalidOTP);
  await base.clickElement(elements.btnKirimUlangOTP);
};
