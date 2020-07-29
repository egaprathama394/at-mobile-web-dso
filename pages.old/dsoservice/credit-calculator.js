import * as base from '../../common/base-functions';

const elements = {
  dropdownMenu: '.my-account-dropdown',
  headingTitle: '.heading',
  textDesc: '.text-description',
  optionModel: 'span[aria-labelledby=select2-testDriveproductModel-container]',
  optionVariant: 'span[aria-labelledby=select2-testDriveproductVariant-container]',
  harga: '#price',
  optionUangMuka: 'span[aria-labelledby=select2-precentageval-container]',
  optionLamaCicilan: 'span[aria-labelledby=select2-tenorval-container]',
  disclaimerMsg: '.control-label.disclaimer_msg',
  btnHitung: '#getCreditValue',
};

export const verifyPageCreditCalculator = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/credit-calculator?carType=NEWCAR');
  await base.assertContainsText(elements.dropdownMenu, 'Kalkulator Kredit');
  await base.assertContainsText(elements.headingTitle, 'Kalkulator Kredit');
  await base.assertContainsText(elements.textDesc, 'Simulasi langsung uang muka, pembayaran bulanan, dan tenor kredit sesuai kebutuhan dari kendaraan baru Anda, hanya di Astra Daihatsu');
  await base.expectVisible(elements.optionModel);
  await base.expectVisible(elements.optionVariant);
  await base.expectVisible(elements.harga);
  await base.expectVisible(elements.optionUangMuka);
  await base.expectVisible(elements.optionLamaCicilan);
  await base.assertContainsText(elements.disclaimerMsg, '*Perhitungan simulasi kredit ini menggunakan kalkulator credit milik ACC, hitungan tersebut sudah termasuk biaya polis, biaya asuransi, biaya fiducia, dan administrasi selama masa tenor kredit.');
  await base.expectVisible(elements.btnHitung);
};

export const clickHitung = async () => {
  await base.clickElement(elements.btnHitung);
};
