/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  productImg: ".__product-img img[src='https://imagesamcqa.seva.id/sys-master/images/hb0/h65/8818710315038/AYLA-GMLFJ-EH_ayla_D.png_ProductDetail']",
  colorOrangeMetalic: "[title='ORANGE METALIC']",
  colorRedSolidDSO: "[title='RED SOLID DSO']",
  colorWhiteDSO: "[title='WHITE DSO']",
  colorGrayMetalic: "[title='GRAY METALIC']",
  colorClasicSilverDSO: "[title='CLASSIC SILVER DSO']",
  colorUltraBlackSolidDSO: "[title='ULTRA BLACK SOLID DSO']",
  imgSpec1: '.product-image-right-wrapper .w-lg-50:nth-child(1) .__product-img-spec',
  imgSpec2: '.product-image-right-wrapper .w-lg-50:nth-child(2) .__product-img-spec',
  videoSpec: '.product-video-right-wrapper',
  nameTabProductName: '.top-section .name-tab .product-name',
  nameTabProductVariant: '.section h3 span',
  nameTabProductPrice: '.price-desc',
  labelHargaOTR: '.price-channel span:nth-child(1)',
  lokasiOTR: '.price-channel .channel',
  iconLocOTR: "img[src='/_ui/responsive/theme-astradaihatsu/images/ic_map.svg']",
  disclaimerPriceOTR: '.left-content-pdp .product-price p',
  productInformation: '.take-journey-inner:nth-child(2) h2',
  specMesin: '.take-journey-items .slick-track li:nth-child(1)',
  specTransmisi: '.take-journey-items .slick-track li:nth-child(2)',
  specKursi: '.take-journey-items .slick-track li:nth-child(3)',
  specBahanBakar: '.take-journey-items .slick-track li:nth-child(4)',
  specTenaga: '.take-journey-items .slick-track li:nth-child(5)',
  productNameVariantPrice: '.variant-price h2',
  productImgVariantPrice: '.variant-price .__product-img-pdp',
  variantPrice1: '.price-sect li:nth-child(1)',
  variantPrice2: '.price-sect li:nth-child(2)',
  variantPrice1VariantName: '.price-sect li:nth-child(1) .name-var span',
  variantPrice1LabelHarga: '.price-sect li:nth-child(1) .price:nth-of-type(2) h5',
  variantPrice1ValueHarga: '.price-sect li:nth-child(1) .price:nth-of-type(2) span',
  variantPrice1Spek: '.price-sect li:nth-child(1) .price:nth-of-type(3) h5',
  variantPrice1SpekValue: '.price-sect li:nth-child(1) .price:nth-of-type(3) span',
  variantPrice1BtnAddToCart: '.price-sect li:nth-child(1) #addToCartButtonBuyNowPDP',
  variantPrice2VariantName: '.price-sect li:nth-child(2) .name-var span',
  variantPrice2LabelHarga: '.price-sect li:nth-child(2) .price:nth-of-type(2) h5',
  variantPrice2ValueHarga: '.price-sect li:nth-child(2) .price:nth-of-type(2) span',
  variantPrice2Spek: '.price-sect li:nth-child(2) .price:nth-of-type(3) h5',
  variantPrice2SpekValue: '.price-sect li:nth-child(2) .price:nth-of-type(3) span',
  variantPrice2BtnAddToCart: '.price-sect li:nth-child(2) #addToCartButtonBuyNowPDP',
  likeProductTab: '.like-product-wpr .heading-1',
  slideProductLike1: '.like-product-wpr .slick-track .slick-slide:nth-child(1)',
  imgProductLike1: '.slick-track .slick-slide:nth-child(1) .newCarPrimaryImg',
  nameProductLike1: '.slick-track .slick-slide:nth-child(1) ._product-info .prod_name',
  startFromProductLike1: '.slick-track .slick-slide:nth-child(1) ._product-info .start-from-pdp',
  priceProductLike1: '.slick-track .slick-slide:nth-child(1) ._product-info ._rp',
  specProductLike1: '.slick-track .slick-slide:nth-child(1) ._product-info .product_cc',
  seatProductLike1: '.slick-track .slick-slide:nth-child(1) ._product-info .product_seats',
  slideProductLike2: '.like-product-wpr .slick-track .slick-slide:nth-child(2)',
  slideProductLike3: '.like-product-wpr .slick-track .slick-slide:nth-child(3)',
  slideProductLike4: '.like-product-wpr .slick-track .slick-slide:nth-child(4)',
  btnAllPDP: '#btnAllPDP',
  newsPDPtitle: '.news_articles_container .articles_list--title',
  imgNews1: '.news_articles_container .slick-slide:nth-child(1) .loaded',
  dateNews1: '.news_articles_container .slick-slide:nth-child(1) .date_mobile',
  titleNews1: '.news_articles_container .slick-slide:nth-child(1) h3',
  imgNews2: '.news_articles_container .slick-slide:nth-child(2) .loaded',
  dateNews2: '.news_articles_container .slick-slide:nth-child(2) .date_mobile',
  titleNews2: '.news_articles_container .slick-slide:nth-child(2) h3',
  imgNews3: '.news_articles_container .slick-slide:nth-child(3) .loaded',
  dateNews3: '.news_articles_container .slick-slide:nth-child(3) .date_mobile',
  titleNews3: '.news_articles_container .slick-slide:nth-child(3) h3',
  btnAllNews: ".read-all-btn a[href='/in/newsandarticles/listing?code=ALL']",
  btnCalCredit: '.btn-credit-cal-mobile .btnCredit',
  btnMintaPenawaran: '#addToCartButtonBuyNowMobile',
  footerUnduhDaihatsu: '.unduh-daihatsu',
};

export const verifyUrlPDP = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/brand/Daihatsu/Astra-Daihatsu-Ayla/p/AYLA-GMLFJ-EH_D0199eo');
  await base.waitElementVisible(elements.btnCalCredit);
  await base.waitElementVisible(elements.btnMintaPenawaran);
};

export const verifyPDPSectionImage = async () => {
  await base.waitElementVisible(elements.productImg);
  await base.waitElementVisible(elements.colorRedSolidDSO);
  await base.waitElementVisible(elements.colorOrangeMetalic);
  await base.waitElementVisible(elements.colorWhiteDSO);
  await base.waitElementVisible(elements.colorClasicSilverDSO);
  await base.waitElementVisible(elements.colorGrayMetalic);
  await base.waitElementVisible(elements.colorUltraBlackSolidDSO);
  await base.waitElementPresent(elements.imgSpec1);
  await base.waitElementVisible(elements.imgSpec2);
  await base.waitElementVisible(elements.videoSpec);
};

export const verifyPDPSectionPriceOTR = async () => {
  await base.scrollToElement(elements.productInformation);
  await base.getStringText(elements.nameTabProductName, 'Astra Daihatsu Ayla');
  await base.getStringText(elements.nameTabProductVariant, '1.0 D M/T');
  await base.getStringText(elements.nameTabProductPrice, 'Rp 101.650.000');
  await base.getStringText(elements.labelHargaOTR, ' Harga OTR ');
  await base.getStringText(elements.lokasiOTR, 'DKI Jakarta');
  await base.waitElementVisible(elements.iconLocOTR);
  await base.getStringText(elements.disclaimerPriceOTR, 'Harga adalah estimasi harga OTR untuk wilayah DKI JAKARTA yang diberlakukan oleh dealer mitra kami. Bagi anda yang berlokasi di luar wilayah cakupan outlet tersebut, harga yang berlaku dapat berbeda.');
};

export const verifyPDPSectionInfoProduct = async () => {
  await base.scrollToElement(elements.productNameVariantPrice);
  await base.getStringText(elements.productInformation, ' Informasi Astra Daihatsu Ayla');
  await base.waitElementVisible(elements.specMesin);
  await base.waitElementVisible(elements.specTransmisi);
  await base.waitElementVisible(elements.specKursi);
  await base.waitElementVisible(elements.specBahanBakar);
  await base.waitElementVisible(elements.specTenaga);
};

export const verifyPDPSectionVariant = async () => {
  await base.scrollToElement(elements.variantPrice1VariantName);
  await base.getStringText(elements.productNameVariantPrice, 'Harga Astra Daihatsu Ayla');
  await base.waitElementVisible(elements.productImgVariantPrice);
  await base.scrollToElement(elements.likeProductTab);
  await base.waitElementVisible(elements.variantPrice1);
  await base.getStringText(elements.variantPrice1VariantName, 'Astra Daihatsu Ayla 1.0 M M/T');
  await base.getStringText(elements.variantPrice1LabelHarga, 'Harga');
  await base.getStringText(elements.variantPrice1Spek, 'Spesifikasi');
  await base.getStringText(elements.variantPrice1ValueHarga, 'Rp 118.150.000');
  await base.getStringText(elements.variantPrice1SpekValue, '5 Penumpang, 998 cc,');
  await base.waitElementVisible(elements.variantPrice1BtnAddToCart);
};

export const verifyPDPSectionCarRecomendation = async () => {
  await base.scrollToElement(elements.newsPDPtitle);
  await base.getStringText(elements.likeProductTab, 'Mobil Lainnya yang Kamu Suka');
  await base.waitElementVisible(elements.slideProductLike1);
  await base.waitElementVisible(elements.slideProductLike2);
  await base.waitElementVisible(elements.imgProductLike1);
  await base.getStringText(elements.nameProductLike1, 'Astra Daihatsu Ayla 1.0 D+ M/T');
  await base.getStringText(elements.startFromProductLike1, 'Mulai dari');
  await base.getStringText(elements.priceProductLike1, 'Rp 113.850.000');
  await base.waitElementVisible(elements.specProductLike1);
  await base.waitElementVisible(elements.seatProductLike1);
  await base.waitElementVisible(elements.btnAllPDP);
};

export const verifyPDPSectionNews = async () => {
  await base.scrollToElement(elements.footerUnduhDaihatsu);
  await base.getStringText(elements.newsPDPtitle, 'Berita dan Artikel Menarik');
  await base.waitElementVisible(elements.imgNews1);
  await base.waitElementVisible(elements.imgNews2);
  await base.waitElementVisible(elements.imgNews3);
  await base.waitElementVisible(elements.dateNews1);
  await base.waitElementVisible(elements.titleNews1);
  await base.waitElementVisible(elements.dateNews2);
  await base.waitElementVisible(elements.titleNews2);
  await base.waitElementVisible(elements.dateNews3);
  await base.waitElementVisible(elements.titleNews3);
  await base.waitElementVisible(elements.btnAllNews);
};
