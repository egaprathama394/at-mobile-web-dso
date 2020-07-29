import * as base from '../common/base-functions';

const elements = {
  menuAstraDaihatsu: 'li ul li:nth-child(1) .heading.footer-heading',
  menuOtomotif: 'li ul li:nth-child(2) .heading.footer-heading',
  menuPurnaJual: 'li ul li:nth-child(3) .heading.footer-heading',
  menuQuickLinks: 'li ul li:nth-child(4) .heading.footer-heading',
  iconTwitter: '.icon-Twitter',
  iconFacebook: '.icon-Facebook',
  labelCopyright: '.__copyright .text-center',
  menuPromo: '.yCmsComponent a[href="/in/promotion-list"]',
  menuMobilBaru: '.yCmsComponent a[href="/in/Auto/Cars/New-Cars/TYPE/c/TYPE"]',
  menuBerita: '.yCmsComponent a[href="/in/newsandarticles/listing"]',
  menuDaftarHarga: '.yCmsComponent a[href="/in/daftar-harga"]',
  menuTestDrive: 'li.yCmsComponent a[href="/in/dsoservice/test-drive"]',
  menuBookingService: 'li.yCmsComponent a[href="/in/dsoservice/book-service"]',
  menuKalkulatorKredit: '.yCmsComponent a[href="/in/dsoservice/credit-calculator?carType=NewCar"]',
  menuLokasiOutlet: '.yCmsComponent a[href="/in/store-finder?carType=NewCar"]',
  txtUsername: '#j_username',
  txtPassword: '#j_password',
  btnForgotPass: "a[href='/in/login/pw/request/external']",
  btnLogin: '.loginWrapper .btn-lg',
  btnFB: '#custom-social-btn-facebook',
  btnGoogle: '#custom-social-btn-google',
  btnRegist: "a[href='/in/register'] .margin-top-bottom20",
};

export const verifyQuickLinksMenu = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.expectVisible(elements.menuTestDrive);
  await base.expectVisible(elements.menuBookingService);
  await base.expectVisible(elements.menuKalkulatorKredit);
  await base.expectVisible(elements.menuLokasiOutlet);
};

export const verifyLogin = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/login?redirectTo=/dsoservice/book-service');
  await base.expectVisible(elements.txtUsername);
  await base.expectVisible(elements.txtPassword);
  await base.expectVisible(elements.btnForgotPass);
  await base.expectVisible(elements.btnLogin);
  await base.expectVisible(elements.btnFB);
  await base.expectVisible(elements.btnGoogle);
  await base.expectVisible(elements.btnRegist);
};
