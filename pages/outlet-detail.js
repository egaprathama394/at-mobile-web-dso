/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import * as base from '../common/base-functions';

const elements = {
  imgBigBanner: '.store-image-banner .col-lg-9 img',
  imgSmallBanner1: '.store-image-banner .col-lg-12.col-6.col1 img:nth-child(1)',
  imgSmallBanner2: '.store-image-banner .col-lg-12.col-6.col2 img:nth-child(1)',
  // Informasi Outlet
  contentOutletInfo: '.store-info',
  btnPhone: '.store-info :nth-child(1) .row :nth-child(2)  a',
  imgDealer: '.store-info :nth-child(1)  img',
  // Btn Content
  btnBookingSevice: ".store-quick-links  li:nth-child(1) a[href='/in/dsoservice/book-service']  img",
  btnSukuCadang: ".store-quick-links  a[href='http://daihatsu-sparepart.com/']  img",

  labelBreadCrumb: '.breadcrumb',
  // Mobil Favorit
  titleMobilFavorit: '.store-best-seller .title',
  btnLihatSemua: "a[href='/c/TYPE']",
  btnLikeMobileFavotive1: "a[href='/in/oto/mobil/baru/brand/Daihatsu/Xenia/p/F653RV-GMRFJ-W7_D0340']#link-to-pdp ._img-top-section .custom-checkbox",
  // Info lokasi
  labelInfoLokasi: '.store-map .title',
  mapOutlet: '.store-map .yCmsComponent',
  logoCurrentMap: '#store-finder-map > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > img',

};
export const veryfyOutletDetailPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/store-finder/details?outletCode=D074');
  await base.waitElementVisible(elements.imgBigBanner);
  await base.waitElementVisible(elements.imgSmallBanner1);
  await base.waitElementVisible(elements.imgSmallBanner2);

  await base.scrollToElement(elements.contentOutletInfo);
  await base.scrollToElement(elements.btnPhone);

  await base.scrollToElement(elements.titleMobilFavorit);
  await base.waitElementVisible(elements.titleMobilFavorit);
  await base.waitElementVisible(elements.btnLihatSemua);
  await base.waitElementVisible(elements.btnLikeMobileFavotive1);


  await base.waitElementVisible(elements.labelInfoLokasi);
  await base.scrollToElement(elements.mapOutlet);
  await base.waitElementVisible(elements.mapOutlet);
  await base.waitElementVisible(elements.logoCurrentMap);
};
