import * as base from '../common/base-functions';

const elements = {
  dropdownKK: '.my-account-dropdown',
  textdropKK: '.my-account-dropdown',
  dropcalc: '#account-nav-item a[href="/in/dsoservice/credit-calculator"]',
  droptest: '#account-nav-item a[href="/in/dsoservice/test-drive"]',
  dropbook: '#account-nav-item a[href="/in/dsoservice/book-service"]',
  titleKK: '.__form-section.col-sm-12.col-md-12.col-lg-9 > div.heading.mob-heading.d-lg-none',
  textdescKK: '.text-description',
  formKK: '.__form-section.col-sm-12.col-md-12.col-lg-9 > div.__form-title',
  textmodelKK: '#creditCalculatorForm > div:nth-child(2) > div:nth-child(2) > div > label',
  modelKK: '#creditCalculatorForm > div:nth-child(2) > div:nth-child(2) > div > div > div > div > span > span.selection > span',
  searchmodel: '.select2-search__field',
  textvarKK: '#creditCalculatorForm > div:nth-child(2) > div:nth-child(3) > div > label',
  varKK: '#creditCalculatorForm > div:nth-child(2) > div:nth-child(3) > div > div',
  texthargaKK: '#creditCalculatorForm > div:nth-child(3) > div > label',
  hargaKK: '.form-control:nth-child(2)',
  simulasiKK: '#creditCalculatorForm > div.__form-title',
  textuangKK: '#creditCalculatorForm > div:nth-child(5) > div:nth-child(1) > label',
  uangKK: '#select2-precentageval-container',
  textcicilKK: '#creditCalculatorForm > div:nth-child(5) > div:nth-child(3) > label',
  cicilKK: '#select2-tenorval-container',
  textinfoKK: '.margin-top0-bottom20 .control-label.disclaimer_msg',
  buttonKK: '.__button-holder:nth-child(3) .btn',
  textbuttonKK: '#getCreditValue',
};

export default async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/credit-calculator?carType=NewCar');
  await base.expectVisible(elements.dropdownKK);
  await base.assertContainsText(elements.textdropKK, 'Kalkulator Kredit');
  await base.clickElement(elements.dropdownKK);
  await base.expectVisible(elements.dropcalc);
  await base.assertContainsText(elements.dropcalc, 'KALKULATOR KREDIT');
  await base.expectVisible(elements.droptest);
  await base.assertContainsText(elements.droptest, 'TEST DRIVE');
  await base.expectVisible(elements.dropbook);
  await base.assertContainsText(elements.dropbook, 'BOOKING SERVICE');
  await base.clickElement(elements.dropdownKK);
  await base.assertContainsText(elements.titleKK, 'Kalkulator Kredit');
  await base.assertContainsText(elements.textdescKK, 'Simulasi langsung uang muka, pembayaran bulanan, dan tenor kredit sesuai kebutuhan dari kendaraan baru Anda, hanya di Astra Daihatsu');
  await base.assertContainsText(elements.formKK, 'Detail Mobil');
  await base.assertContainsText(elements.textmodelKK, 'Model*');
  await base.expectVisible(elements.modelKK);
  await base.assertContainsText(elements.textvarKK, 'Varian*');
  await base.expectVisible(elements.varKK);
  await base.assertContainsText(elements.texthargaKK, 'Harga');
  await base.expectVisible(elements.hargaKK);
  await base.assertContainsText(elements.simulasiKK, 'Simulasi kredit');
  await base.assertContainsText(elements.textuangKK, 'Uang muka %*');
  await base.expectVisible(elements.uangKK);
  await base.assertContainsText(elements.textcicilKK, 'Lama cicilan*');
  await base.expectVisible(elements.cicilKK);
  await base.assertContainsText(elements.textinfoKK, '*Perhitungan simulasi kredit ini menggunakan kalkulator credit milik ACC, hitungan tersebut sudah termasuk biaya polis, biaya asuransi, biaya fiducia, dan administrasi selama masa tenor kredit.');
  await base.expectVisible(elements.buttonKK);
  await base.assertContainsText(elements.textbuttonKK, 'HITUNG');
};
