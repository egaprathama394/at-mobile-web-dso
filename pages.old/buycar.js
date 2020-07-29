import * as base from '../common/base-functions';


const { client } = require('nightwatch-api');
const element = {
  txtND: '.relativeposition:nth-child(3) .form-control',
  txtNB: '.relativeposition:nth-child(4) .form-control',
  txtEmail: '.relativeposition:nth-child(5) .form-control',
  txtHP: '.allowPhonenumber',
  txtPassword: '.password-strength',
  txtPassword2: '.relativeposition:nth-child(8) .form-control',
  btnSubmit: '#registerChkTermsConditions',
  notifsuksesregister: '.alert',
  filter: '#openFilterpopup',
  clickCheckbox1000cc: 'form>input[value=":relevance:KapasitasMesinRange:1.000+CC"]~label>.facet__list__checkbox.js-facet-checkbox.sr-only',
  clickHarga: "a[href='#tab-1']",
  clickCheckbox90jt: 'form>input[value=":relevance:price:Rp.90+Juta-Rp.150+Juta"]~label>.facet__list__checkbox.js-facet-checkbox.sr-only',
  clickTipe: "a[href='#tab-2']",
  clickCityCar: 'form>input[value=":relevance:category:CITYCAR"]~label>.facet__list__checkbox.js-facet-checkbox.sr-only',
  clickModel: "a[href='#tab-3']",
  clickAyla: 'form>input[value=":relevance:model:New+Ayla"]~label>.facet__list__checkbox.js-facet-checkbox.sr-only',
  clickSigra: 'form>input[value=":relevance:model:New+Sigra"]~label>.facet__list__checkbox.js-facet-checkbox.sr-only',
  clickbtnSbmtFilter: '.apply-filter',
  clickSort: '.float-right.search-relevant',
  clickSortRkeT: '.select2-results__option:nth-child(2)',
  clickpenawaranTerbaik1: 'div.row > div:nth-child(1) > div > div > button',
  clicksdemail: '.email',
  fieldGelar: '#title~.select2-container',
  fieldTuan: '.select2-results__option:nth-child(3)',
  fieldemail: '#email',
  fieldHP: '#customer-mobileNumber',
  fieldND: '#firstName',
  fieldNB: '#lastName',
  fieldCatatan: '#address-line1',
  fieldOutlet: '#branch~.select2-container',
  fieldvalueElement: '.select2-search__field',
  fieldotp: '#order-otp',
  verifyotp: '.verify-otp',
  pemuda: '.select2-results__option:nth-child(2)',
  buttonYa: '#addToCartConfirmButton',
  copyright: '.text-center',
  outletfield: '.select2-selection[aria-labelledby="select2-branch-container"]',
  mintaPenawaran: '#placeOrder-footer',
};

const setObjectMappingDropdown = () => ({
  outlet: element.outletfield,
});


const setObjectMappingValue = () => ({

  AstraDaihatsuPemuda: element.pemuda,
});


export const clickFilter = async () => {
  await base.clickElement(element.filter);
};
export const clickCheckbox1000cc = async () => {
  await base.clickElement(element.clickCheckbox1000cc);
};

export const clickHarga = async () => {
  await base.clickElement(element.clickHarga);
};

export const clickCheckbox90juta = async () => {
  await base.clickElement(element.clickCheckbox90jt);
};

export const clickTipe = async () => {
  await base.clickElement(element.clickTipe);
};

export const clickCityCar = async () => {
  await base.clickElement(element.clickCityCar);
};

export const clickModel = async () => {
  await base.clickElement(element.clickModel);
};

export const clickAyla = async () => {
  await base.clickElement(element.clickAyla);
};

export const clickSigra = async () => {
  await base.clickElement(element.clickSigra);
};

export const clickbtbSbmtFilter = async () => {
  await base.clickElement(element.clickbtnSbmtFilter);

};
export const clickSort = async () => {
  await base.clickElement(element.clickSort);

};

export const clickSortRkeT = async () => {
  await base.clickElement(element.clickSortRkeT);
};

export const clickpenawaranTerbaik1 = async () => {
  await base.scrollDown(element.clickpenawaranTerbaik1);
  await base.clickElement(element.clickpenawaranTerbaik1);
  await base.scrollDown(element.clicksdemail);
};

export const buycar = async (Email, HP, ND, NB, Catatan) => {
  await base.setValueElement(element.fieldemail, Email);
  await base.setValueElement(element.fieldHP, HP);
  await base.setValueElement(element.fieldND, ND);
  await base.setValueElement(element.fieldNB, NB);
  await base.setValueElement(element.fieldCatatan, Catatan);
  await base.scrollDown('body');
};

export const ketikdropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`,client);
  client.pause(3000);
  await base.setValueElementThenEnter(element.fieldvalueElement,value);
  await base.clickElement(element.mintaPenawaran);
};

export const otp = async (otp) => {
  await base.clickElement(element.fieldotp);
  await base.setValueElement(element.fieldotp, otp);
  await base.clickElement(element.verifyotp);
};
export const clickYA = async () => {
  await base.clickElement(element.buttonYa);
};
