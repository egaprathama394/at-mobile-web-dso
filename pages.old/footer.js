import * as base from '../common/base-functions';

const elements = {
  menuAstraDaihatsu: 'li ul li:nth-child(1) .heading.footer-heading',
  menuOtomotif: 'li ul li:nth-child(2) .heading.footer-heading',
  menuPurnaJual: 'li ul li:nth-child(3) .heading.footer-heading',
  menuQuickLinks: 'li ul li:nth-child(4) .heading.footer-heading',
  iconTwitter: '.icon-Twitter',
  iconFacebook: '.icon-Facebook',
  labelCopyright: '.__copyright .text-center',
  menuCaraKerja: ".yCmsComponent a[href='/in/ways-of-working']",
  tentangAstraDaihatsu: '.sub-heading a[href="/in/about-astradaihatsu"]',
  panduanPembelian: '.sub-heading a[href="/in/howtobuy"]',
  kebijakanPrivasi: ".yCmsComponent a[href='/in/privacy-statement']",
  syaratdanKetentuanPenggunaan: ".yCmsComponent a[href='/in/terms-condition']",
  promo: ".sub-heading .yCmsComponent a[href='/in/promotion-list']",
  mobilBaru: ".yCmsComponent a[href='/in/Auto/Cars/New-Cars/TYPE/c/TYPE']",
  berita: ".sub-heading .yCmsComponent a[href='/in/newsandarticles/listing']",
  daftarHarga: ".yCmsComponent a[href='/in/daftar-harga']",
  menuPromo: '.yCmsComponent a[href="/in/promotion-list"]',
  menuMobilBaru: '.yCmsComponent a[href="/in/Auto/Cars/New-Cars/TYPE/c/TYPE"]',
  menuBerita: '.yCmsComponent a[href="/in/newsandarticles/listing"]',
  menuDaftarHarga: '.yCmsComponent a[href="/in/daftar-harga"]',
  testDrive: 'li.yCmsComponent a[href="/in/dsoservice/test-drive"]',
  bookService: 'li.yCmsComponent a[href="/in/dsoservice/book-service"]',
  kalkulator: '.yCmsComponent a[href="/in/dsoservice/credit-calculator?carType=NewCar"]',
  lokasiOutlet: '.yCmsComponent a[href="/in/store-finder?carType=NewCar"]',
  perawatanBerkala: ".sub-heading .yCmsComponent a[href='/in/perawatan-berkala']",
  bodiDanCat: ".sub-heading .yCmsComponent a[href='/in/bodi-dan-cat']",
  era24Jam: ".sub-heading .yCmsComponent a[href='/in/era-24']",
  sukuCadang: ".yCmsComponent a[title='Suku Cadang']",
  mobileService: ".sub-heading .yCmsComponent a[href='/in/mobile-service']",
  ServiceSuperCepat: ".sub-heading .yCmsComponent a[href='/in/service-super-cepat']",
  part24Jam: ".sub-heading .yCmsComponent a[href='/in/part-24']",
  happyKontrakService: ".sub-heading .yCmsComponent a[href='/in/happy-kontrak-service']",
  titleCaraKerja: '.info-text',
  titleTentangAstraDaihatsu: '.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  titlePanduanPembelian: '.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  // titleKebijakanPrivasi:'.info-text',
  titleSyaratdanKetentuanPenggunaan: '.info-text',
  // titlePromo:'.promo '
  titleBerita: '.articles_head',
  titleDaftarHarga: '.header-component',
  titlePerawatanBerkala: '.info-text',
  titleBodiDanCat: '.info-text',
  titleERA24Jam: '.info-text',
  titleSukuCadang: '.info-text',
  titleMobileService: '.info-text',
  titleServiceSuperCepat: '.info-text',
  titlePart24Jam: '.info-text',
  titleHappyKontrakService: '.info-text',
};

export const verifyFooter = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.expectVisible(elements.menuAstraDaihatsu);
  await base.expectVisible(elements.menuOtomotif);
  await base.expectVisible(elements.menuPurnaJual);
  await base.expectVisible(elements.menuQuickLinks);
  await base.expectVisible(elements.iconTwitter);
  await base.expectVisible(elements.iconFacebook);
};

export const clickMenuAstraDaihatsu = async () => {
  await base.clickElement(elements.menuAstraDaihatsu);
};

export const clickMenuCaraKerja = async () => {
  await base.clickElement(elements.menuCaraKerja);
};

export const clickMenuPurnaJual = async () => {
  await base.clickElement(elements.menuPurnaJual);
};

export const clickMenuOtomotif = async () => {
  await base.clickElement(elements.menuOtomotif);
};

export const clickQuickLinks = async () => {
  await base.clickElement(elements.menuQuickLinks);
};

export const clickIconTwitter = async () => {
  await base.clickElement(elements.iconTwitter);
};

export const clickIconFacebook = async () => {
  await base.clickElement(elements.iconFacebook);
};

export const verifyContentMenuAstraDaihatsu = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.expectVisible(elements.menuCaraKerja);
  await base.expectVisible(elements.tentangAstraDaihatsu);
  await base.expectVisible(elements.panduanPembelian);
  await base.expectVisible(elements.kebijakanPrivasi);
  await base.expectVisible(elements.syaratdanKetentuanPenggunaan);
};

export const verifyContentMenuOtomotif = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuOtomotif);
  await base.scrollToElement(elements.labelCopyright);
  await base.expectVisible(elements.promo);
  await base.expectVisible(elements.mobilBaru);
  await base.expectVisible(elements.berita);
  await base.expectVisible(elements.daftarHarga);
};

export const verifyContentMenuPurnaJual = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.expectVisible(elements.perawatanBerkala);
  await base.expectVisible(elements.bodiDanCat);
  await base.expectVisible(elements.era24Jam);
  await base.expectVisible(elements.sukuCadang);
  await base.expectVisible(elements.mobileService);
  await base.expectVisible(elements.ServiceSuperCepat);
  await base.expectVisible(elements.part24Jam);
  await base.expectVisible(elements.happyKontrakService);
};

export const verifyContentMenuQuickLinks = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.expectVisible(elements.testDrive);
  await base.expectVisible(elements.bookService);
  await base.expectVisible(elements.kalkulator);
  await base.expectVisible(elements.lokasiOutlet);
};

export const verifyContentIkutiKamiTwitter = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.expectVisible(elements.iconTwitter);
};
export const verifyContentIkutiKamiFacebook = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.expectVisible(elements.iconFacebook);
};

export const verifyPageCaraKerja = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.clickElement(elements.menuCaraKerja);
};

export const verifyPageTentangAstraDaihatsu = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.clickElement(elements.tentangAstraDaihatsu);
};

export const verifyPagePanduanPembelian = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.clickElement(elements.panduanPembelian);
};

export const verifyPageKebijakanPrivasi = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.clickElement(elements.kebijakanPrivasi);
};

export const verifyPageSyaratdanKetentuanPenggunaan = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuAstraDaihatsu);
  await base.clickElement(elements.syaratdanKetentuanPenggunaan);
};

export const verifyPagePromo = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuOtomotif);
  await base.clickElement(elements.promo);
};

export const verifyPageMobilBaru = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuOtomotif);
  await base.clickElement(elements.mobilBaru);
};

export const verifyPageBerita = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuOtomotif);
  await base.clickElement(elements.berita);
};

export const verifyPageDaftarHarga = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuOtomotif);
  await base.clickElement(elements.daftarHarga);
};

export const verifyPagePerawatanBerkala = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.perawatanBerkala);
};

export const verifyPageBodiDanCat = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.bodiDanCat);
};
export const verifyPageERA24Jam = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.era24Jam);
};
export const verifyPageSukuCadang = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.sukuCadang);
};

export const verifyPageMobileService = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.mobileService);
};
export const verifyPageServiceSuperCepat = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.ServiceSuperCepat);
};

export const verifyPagePart24Jam = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.part24Jam);
};

export const verifyPageHappyKontrakService = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuPurnaJual);
  await base.clickElement(elements.happyKontrakService);
};

export const verifyPageTestDrive = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.clickElement(elements.testDrive);
};

export const verifyPageBookingService = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.clickElement(elements.bookService);
};

export const verifyPageKalkulator = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.clickElement(elements.kalkulator);
};

export const verifyPageLokasi = async () => {
  await base.scrollToElement(elements.labelCopyright);
  await base.clickElement(elements.menuQuickLinks);
  await base.clickElement(elements.lokasiOutlet);
};
