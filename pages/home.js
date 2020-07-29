/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  burgerMenu: '#nav-icon4',
  astraDaihatsuFooter: '.footer-heading-icon',
  emailDaihatsu: '.yCmsComponent .label:nth-child(2)',
  customerCare: '.yCmsComponent .label:nth-child(1)',
  appleStore: '.content a[href="https://apps.apple.com/id/app/astra-daihatsu-mobile/id1265062687"]',
  playStore: '.content a[href="https://play.google.com/store/apps/details?id=id.astra.dso.digitalization"]',
  facebookFooter: '.__social .icon-Facebook',
  twitterFooter: '.__social .icon-Twitter',
  copyright: '.copyright-responsive',
  newsArticle: '.auto .yCmsComponent a[href="/in/newsandarticles/listing"]',
  // Slider Banner
  // btnSlider4: '#slick-slide-control04',
  // imgSlider4: "img[src='https://imagesamcqa.seva.id/sys-master/images/h25/hd6/8808090402846/HomePage_480x320_Banner4_EN_480W.png']",

  iconDaftarMobil: ".link-component :nth-child(6) a[href='/in/c/TYPE'] img",
  iconNews: "img[src='https://imagesamcqa.seva.id/sys-master/images/h7f/he4/8818900303902/newspaper.svg']",
  promo1: ".__mobile img[src='https://imagesamcqa.seva.id/sys-master/images/h6a/hf0/8818441093150']",
  iconBtnDaftarHargaMobil: "img[src ='https://imagesamcqa.seva.id/sys-master/images/h6f/hf2/8818899910686/ic-suv.svg']",
  titleBtnDaftarHargaMobil: "a[href ='/in/daftar-harga']  .link-name",
  iconBtnSimulasiKredit: "img[src ='https://imagesamcqa.seva.id/sys-master/images/hc0/hf1/8818899976222/ic-simulasi-kredit.svg']",
  titleBtnSimulasiKredit: "a[href ='/in/dsoservice/credit-calculator?carType=NewCar']  .link-name",
  iconBtnBookingTestDriver: "img[alt='Test Drive']",
  titleBtnBookingTestDriver: "a[href ='/in/dsoservice/test-drive']  .link-name",
  iconBtnBookingService: "img[src ='https://imagesamcqa.seva.id/sys-master/images/hb7/hee/8818900008990/ic-book-service.svg']",
  titleBtnBookingService: ".menu--link_component .image__link--secondary a[href ='/in/dsoservice/book-service']  .link-name",
  iconBtnOutletTerdekat: "img[src ='https://imagesamcqa.seva.id/sys-master/images/h4f/heb/8818900107294/ic-outlet.svg']",
  titleBtnOutletTerdekat: "a[href ='/in/store-finder?carType=NEWCAR']  .link-name",
  iconBtnDaftarMobil: "img[src ='https://imagesamcqa.seva.id/sys-master/images/h8f/he7/8818900238366/ic-daftar-mobil.svg']",
  titleBtnDaftarMobil: ".menu--link_component  a[href ='/in/c/TYPE']  .link-name",
  iconBtnSukuCadang: "img[src ='https://imagesamcqa.seva.id/sys-master/images/h8e/hea/8818900172830/ic-suku-cadang.svg']",
  titleBtnSukuCadang: ".menu--link_component  a[href ='http://daihatsu-sparepart.com/']  .link-name",
  iconBtnBeritaDanArtikel: "img[src ='https://imagesamcqa.seva.id/sys-master/images/h7f/he4/8818900303902/newspaper.svg']",
  titleBtnBeritaDanArtikel: ".menu--link_component  a[href ='/in/newsandarticles/listing']  .link-name",
  sliderPromoHome1: "img[src='https://imagesamcqa.seva.id/sys-master/images/h6a/hf0/8818441093150']",
  sliderPromoHome2: "img[src='https://imagesamcqa.seva.id/sys-master/images/h11/hf3/8818441125918']",
  btnCallPromoHome: ".__mobile .promo-call .yCmsContentSlot a[href='tel:1500898']:nth-child(1)",
  labelCallPromoHome: ".__mobile .promo-call .yCmsContentSlot a[href='tel:1500898'] .label",
  numberCallPromoHome: ".__mobile .promo-call .yCmsContentSlot a[href='tel:1500898'] .number",
  headerDaihatsuFavorite: '.home-product',
  carcol1row1: '#product-1:nth-child(1)',
  imgCar11: ".newCarPrimaryImg img[src='https://imagesamcqa.seva.id/sys-master/images/h79/h0f/8818708086814/M804RS-GMNEMJ-KQ_sirion_STD.png_ProductGrid']",
  titleCar11: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Sirion/p/M804RS-GMNEMJ-KQ_DGS'] .content .car-title:nth-child(1)",
  labelStarPrice11: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Sirion/p/M804RS-GMNEMJ-KQ_DGS'] .content .start-price",
  labelCarPrice11: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Sirion/p/M804RS-GMNEMJ-KQ_DGS'] .content .product-price",
  carcol1row2: '.yCmsComponent  #product-2',
  imgCar12: ".newCarPrimaryImg img[src='https://imagesamcqa.seva.id/sys-master/images/h48/h19/8818708348958/F800RG-GMDFJ-HY_terios_X.png_ProductGrid'",
  titleCar12: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Terios/p/F800RG-GMDFJ-HY_BRM'] .content .car-title",
  labelStart12: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Terios/p/F800RG-GMDFJ-HY_BRM'] .content .start-price",
  labelCarPrice12: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Terios/p/F800RG-GMDFJ-HY_BRM'] .content .product-price",
  carcol2row1: ' #product-6',
  imgCar21: ".newCarPrimaryImg img[src='https://imagesamcqa.seva.id/sys-master/images/h2d/h68/8819067715614/GMRV-ZMDEJJ-HJFH_granmax_D.png_ProductGrid']",
  titleCar21: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Granmax-MB/p/GMRV-ZMDEJJ-HJFH_BL'] .content .car-title",
  labelStart21: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Granmax-MB/p/GMRV-ZMDEJJ-HJFH_BL'] .content .start-price",
  labelCarPrice21: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Granmax-MB/p/GMRV-ZMDEJJ-HJFH_BL'] .content .product-price",
  carcol2row2: ' #product-7',
  imgCar22: ".newCarPrimaryImg img[src='https://imagesamcqa.seva.id/sys-master/images/hdd/h5a/8818707038238/LX1.5DM_TMC_luxio_D.png_ProductGrid']",
  titleCar22: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Luxio/p/LX1.5DM_TMC_D0102'] .content .car-title",
  labelStart22: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Luxio/p/LX1.5DM_TMC_D0102'] .content .star-price",
  labelCarPrice22: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Luxio/p/LX1.5DM_TMC_D0102'] .content .product-price",
  btnLihatSemuaProduk: "a[href='/astradaihatsu/id/c/TYPE']",
  headerCaraPemesanan: '.new-to-astra-steps .heading-1',
  imgBottomHome: "img[src='https://imagesamcqa.seva.id/sys-master/images/hf5/h0c/8819753713694/static-image.png']",
  headerLayananPurnaJual: '.home-purna-jual h3',
  contentLayananPurnaJual: '.home-purna-jual .content',
  btnPerawatanBerkala: ".image__link--secondary  a[href='/in/perawatan-berkala']",
  imgPerawatanBerkala: "img[src='https://imagesamcqa.seva.id/sys-master/images/h26/h65/8819621527582/perawatan-berkala.svg']",
  labelPerawatanBerkala: "a[href='/in/perawatan-berkala'] .link-name span",
  btnBodiDanCat: ".image__link--secondary  a[href='/in/bodi-dan-cat']",
  imgBodiDanCat: "img[src='https://imagesamcqa.seva.id/sys-master/images/h35/h6b/8819621396510/bodi-cat.svg']",
  labelBodiDanCat: "a[href='/in/bodi-dan-cat'] .link-name span",
  btnEmergencyRoad: ".image__link--secondary a[href='/in/era-24']",
  imgEmergencyRoad: "img[src='https://imagesamcqa.seva.id/sys-master/images/h8e/h68/8819621429278/emergency-road.svg']",
  labelEmergencyRoad: "a[href='/in/era-24'] .link-name span",
  btnSukuCadang: ".purnajual1 .image__link--secondary  a[href='http://daihatsu-sparepart.com/']",
  imgSukuCadang: ".purnajual1 .image__link--secondary  a[href='http://daihatsu-sparepart.com/'] img",
  labelSukuCadang: ".purnajual1 .image__link--secondary  a[href='http://daihatsu-sparepart.com/'] .link-name",
  btnPromo: ".purnajual1 .image__link--secondary  a[href='/in/promotion-list']",
  imgPromo: ".purnajual1 .image__link--secondary  a[href='/in/promotion-list'] img",
  labelPromo: ".purnajual1 .image__link--secondary  a[href='/in/promotion-list'] .link-name",
  btnMobileService: ".purnajual2 .image__link--secondary  a[href='/in/mobile-service']",
  imgMobileService: ".purnajual2 .image__link--secondary  a[href='/in/mobile-service'] img",
  labelMobileService: ".purnajual2 .image__link--secondary  a[href='/in/mobile-service'] .link-name",
  btnServiceSuperCepat: ".purnajual2 .image__link--secondary  a[href='/in/service-super-cepat']",
  imgServiceSuperCepat: ".purnajual2 .image__link--secondary  a[href='/in/service-super-cepat'] img",
  labelServiceSuperCepat: ".purnajual2 .image__link--secondary  a[href='/in/service-super-cepat'] .link-name",
  btnPart24JamGratis: ".purnajual2 .image__link--secondary  a[href='/in/part-24']",
  imgPart24JamGratis: ".purnajual2 .image__link--secondary  a[href='/in/part-24'] img",
  labelPart24JamGratis: ".purnajual2 .image__link--secondary  a[href='/in/part-24'] .link-name",
  btnBookingService: ".purnajual2 .image__link--secondary  a[href='/in/dsoservice/book-service']",
  imgBookingService: ".purnajual2 .image__link--secondary  a[href='/in/dsoservice/book-service'] img",
  labelBookingService: ".purnajual2 .image__link--secondary  a[href='/in/dsoservice/book-service'] .link-name",
  btnHappyKontakService: ".purnajual2 .image__link--secondary  a[href='/in/happy-kontrak-service']",
  imgHappyKontakService: ".purnajual2 .image__link--secondary  a[href='/in/happy-kontrak-service'] img",
  labelHappyKontakService: ".purnajual2 .image__link--secondary  a[href='/in/happy-kontrak-service'] .link-name",
  // alertSuccessRegist: "[class='alert alert-info alert-dismissable getAccAlert']",
};
// function for slider
export const clickBtnSlider4 = async () => {
  await base.clickElement(elements.btnSlider4);
};
export const verifySliderBannerHome = async () => {
  await clickBtnSlider4();
  await base.waitElementPresent(elements.imgSlider4);
};

export const verifyLayananPurnaJual = async () => {
  await base.expectElementEqualText(elements.headerLayananPurnaJual, 'Layanan Purnajual');
  await base.expectElementEqualText(elements.contentLayananPurnaJual, 'Nikmati berbagai layanan purnajual yang memudahkan Anda melakukan perawatan mobil Daihatsu. Layanan purnajual Astra Daihatsu didukung oleh teknisi - teknisi yang handal dan terampil, dengan harga terjangkau. Bengkel Astra Daihatsu tersebar di berbagai kota dan kabupaten di Indonesia.');
  await base.waitElementVisible(elements.btnPerawatanBerkala);
  await base.waitElementVisible(elements.imgPerawatanBerkala);
  await base.expectElementEqualText(elements.labelPerawatanBerkala, 'Perawatan Berkala');
  await base.waitElementVisible(elements.btnBodiDanCat);
  await base.waitElementVisible(elements.imgBodiDanCat);
  await base.expectElementEqualText(elements.labelBodiDanCat, 'Bodi dan Cat');
  await base.waitElementVisible(elements.btnEmergencyRoad);
  await base.waitElementVisible(elements.imgEmergencyRoad);
  await base.expectElementEqualText(elements.labelEmergencyRoad, 'Emergency Road Assistance 24 Jam');
  await base.waitElementVisible(elements.btnSukuCadang);
  await base.waitElementVisible(elements.imgSukuCadang);
  await base.expectElementEqualText(elements.labelSukuCadang, 'Suku Cadang');
  await base.waitElementVisible(elements.btnPromo);
  await base.waitElementVisible(elements.imgPromo);
  await base.expectElementEqualText(elements.labelPromo, 'Promo');
  await base.waitElementVisible(elements.btnMobileService);
  await base.waitElementVisible(elements.imgMobileService);
  await base.expectElementEqualText(elements.labelMobileService, 'Mobile Service');
  await base.waitElementVisible(elements.btnServiceSuperCepat);
  await base.waitElementVisible(elements.imgServiceSuperCepat);
  await base.expectElementEqualText(elements.labelServiceSuperCepat, 'Service Super Cepat');
  await base.waitElementVisible(elements.btnPart24JamGratis);
  await base.waitElementVisible(elements.imgPart24JamGratis);
  await base.expectElementEqualText(elements.labelPart24JamGratis, 'Part 24 Jam atau Gratis');
  await base.waitElementVisible(elements.btnBookingService);
  await base.waitElementVisible(elements.imgBookingService);
  await base.expectElementEqualText(elements.labelBookingService, 'Booking Service');
  await base.waitElementVisible(elements.btnHappyKontakService);
  await base.waitElementVisible(elements.imgHappyKontakService);
  await base.expectElementEqualText(elements.labelHappyKontakService, 'Happy Kontrak Service');
};
export const verifyMenuComponent = async () => {
  await base.waitElementVisible(elements.iconBtnDaftarHargaMobil);
  await base.getStringText(elements.titleBtnDaftarHargaMobil, 'Daftar Harga Mobil');
  await base.waitElementVisible(elements.iconBtnSimulasiKredit);
  await base.getStringText(elements.titleBtnSimulasiKredit, 'Simulasi Kredit');
  await base.waitElementVisible(elements.iconBtnBookingTestDriver);
  await base.getStringText(elements.titleBtnBookingTestDriver, 'Booking Test Driver');
  await base.scrollToElement(elements.iconBtnOutletTerdekat);
  await base.waitElementVisible(elements.iconBtnBookingService);
  await base.getStringText(elements.titleBtnBookingService, 'Booking Service');
  await base.waitElementVisible(elements.iconBtnOutletTerdekat);
  await base.getStringText(elements.titleBtnBookingService, 'Outlet Terdekat');
  await base.waitElementVisible(elements.iconBtnDaftarMobil);
  await base.getStringText(elements.titleBtnDaftarMobil, 'Daftar Movil');
  await base.waitElementVisible(elements.iconBtnSukuCadang);
  await base.getStringText(elements.titleBtnSukuCadang, 'Suku Cadang');
  await base.waitElementVisible(elements.iconBtnBeritaDanArtikel);
  await base.getStringText(elements.titleBtnBeritaDanArtikel, 'Berita & Artiket');
};
export const verifyPromoBanner = async () => {
  await base.waitElementVisible(elements.btnCallPromoHome);
  await base.getStringText(elements.labelCallPromoHome, 'Daihatsu Access');
  await base.getStringText(elements.numberCallPromoHome, '1-500-898');
};
export const verifyDaihatsuFavorite = async () => {
  await base.getStringText(elements.headerDaihatsuFavorite, 'Temukan Daihatsu Favorit Kamu');
  await base.waitElementVisible(elements.carcol1row1);
  await base.waitElementVisible(elements.imgCar11);
  await base.getStringText(elements.titleCar11, 'Sirion');
  await base.getStringText(elements.labelStarPrice11, 'Mulai Dari');
  await base.getStringText(elements.labelCarPrice11, 'Rp 192.100.000');
  await base.waitElementVisible(elements.carcol1row2);
  await base.waitElementVisible(elements.imgCar12);
  await base.getStringText(elements.titleCar12, 'Terios');
  await base.getStringText(elements.labelStarPrice11, 'Mulai Dari');
  await base.getStringText(elements.labelCarPrice11, 'Rp 208.300.000');
  await base.waitElementVisible(elements.carcol2row1);
  await base.waitElementVisible(elements.imgCar21);
  await base.getStringText(elements.titleCar11, 'Granmax-MB');
  await base.getStringText(elements.labelStarPrice11, 'Mulai Dari');
  await base.getStringText(elements.labelCarPrice11, 'Rp 170.875.000');
  await base.waitElementVisible(elements.carcol2row2);
  await base.waitElementVisible(elements.imgCar22);
  await base.getStringText(elements.titleCar11, 'Luxio');
  await base.getStringText(elements.labelStarPrice11, 'Mulai Dari');
  await base.getStringText(elements.labelCarPrice11, 'Rp 202.700.000');
  await base.waitElementVisible(elements.btnLihatSemuaProduk);
};

export const successRegist = async () => {
  await base.pauseSleep(5000);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
  await base.getStringText(elements.alertSuccessRegist, 'Tinggal satu langkah lagi untuk menyelesaikan pendaftaran Anda. Silakan klik tautan pada email yang dikirimkan pada Anda untuk menyelesaikan pendaftaran Anda di Astra Daihatsu.');
};

export const verifyFooter1 = async () => {
  await base.scrollToElement(elements.playStore);
  await base.expectVisible(elements.astraDaihatsuFooter);
  await base.expectVisible(elements.emailDaihatsu);
  await base.expectVisible(elements.customerCare);
  await base.expectVisible(elements.appleStore);
  await base.expectVisible(elements.playStore);
  await base.expectVisible(elements.twitterFooter);
  await base.expectVisible(elements.facebookFooter);
};

export const verifyFooter2 = async () => {
  await base.scrollToElement(elements.copyright);
  await base.expectVisible(elements.copyright);
};
export const inactiveEmailRegist = async () => {
  await base.pauseSleep(5000);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
  await base.getStringText(elements.alertSuccessRegist, 'Email belum aktif, Silakan periksa email Anda untuk memverifikasi akun Anda.');
};

export const clickDaftarMobil = async () => {
  await base.scrollToElement(elements.promo1);
  await base.clickElement(elements.iconDaftarMobil);
};

export const clickMenuDaftarHargaMobil = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnDaftarHargaMobil);
};

export const clickMenuSimulasiKredit = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnSimulasiKredit);
};

export const clickMenuBookingTestDriver = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnBookingTestDriver);
};

export const clickMenuBookingService = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnBookingService);
};

export const clickMenuOutletTerderkat = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnOutletTerdekat);
};
export const clickMenuDaftarMobil = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnDaftarMobil);
};
export const clickSukuCadang = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnSukuCadang);
};
export const clickBeritaDanArtikel = async () => {
  await base.scrollToElement(elements.iconBtnBeritaDanArtikel);
  await base.clickElement(elements.iconBtnBeritaDanArtikel);
};
export const clickBannerPromoHome1 = async () => {
  await base.scrollToElement(elements.sliderPromoHome1);
  await base.clickElement(elements.sliderPromoHome1);
};
export const clickBannerPromoHome2 = async () => {
  await base.scrollToElement(elements.sliderPromoHome2);
  await base.clickElement(elements.sliderPromoHome2);
};
export const clickBtnCallCenterPromoHome = async () => {
  await base.scrollToElement(elements.btnCallPromoHome);
  await base.clickElement(elements.btnCallPromoHome);
};
export const clickCar11 = async () => {
  await base.scrollToElement(elements.imgCar11);
  await base.clickElement(elements.imgCar11);
};
export const clickCar12 = async () => {
  await base.scrollToElement(elements.imgCar12);
  await base.clickElement(elements.imgCar12);
};
export const clickCar21 = async () => {
  await base.scrollToElement(elements.imgCar21);
  await base.clickElement(elements.imgCar21);
};
export const clickCar22 = async () => {
  await base.scrollToElement(elements.imgCar22);
  await base.clickElement(elements.imgCar22);
};
export const clickLihatSemuaProduk = async () => {
  await base.scrollToElement(elements.btnLihatSemuaProduk);
  await base.clickElement(elements.btnLihatSemuaProduk);
};

export const verifyUrlHomepage1 = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/');
};

export const verifyUrlHomepage2 = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/');
};
