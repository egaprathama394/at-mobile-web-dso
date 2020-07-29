/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  gridPLP: '.plp-list',
  gambar1: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/hf1/h61/8818710446110/AYLA-GMLFJ-EH_ayla_D.png_ProductGrid']",
  gambar2: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h78/h47/8818723815454/B400RS-GMLEJ-26_sigra_D.png_ProductGrid']",
  gambar3: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h07/hcb/8819068502046/GMRV-BMREJJ-HEFH_granmax_BV.png_ProductGrid']",
  gambar4: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h2d/h68/8819067715614/GMRV-ZMDEJJ-HJFH_granmax_D.png_ProductGrid']",
  gambar5: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h9f/hbb/8818722504734/GMRP-TMREJJ-HCFH_granmax_PU_3way.png_ProductGrid']",
  gambar6: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/hdd/h5a/8818707038238/LX1.5DM_TMC_luxio_D.png_ProductGrid']",
  gambar7: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h79/h0f/8818708086814/M804RS-GMNEMJ-KQ_sirion_STD.png_ProductGrid']",
  gambar8: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/h48/h19/8818708348958/F800RG-GMDFJ-HY_terios_X.png_ProductGrid']",
  gambar9: "img[src = 'https://imagesamcqa.seva.id/sys-master/images/hfe/hef/8818726699038/F653RV-GMRFJ-W7_xenia_13X_STD.png_ProductGrid']",
  prod_name1: "._product-info a[title='Astra Daihatsu Ayla 1.0 D M/T'] .prod_name",
  prod_name2: "._product-info a[title='Astra Daihatsu Sigra 1.0 D M/T'] .prod_name",
  prod_name3: "._product-info a[title='Granmax Blindvan 1.3 FH'] .prod_name",
  prod_name4: "._product-info a[title='Granmax-MB 1.3 D FH'] .prod_name",
  prod_name5: "._product-info a[title='Granmax-PU 3 Way 1.3'] .prod_name",
  prod_name6: "._product-info a[title='Luxio 1.5 D M/T MC'] .prod_name",
  prod_name7: "._product-info a[title='Sirion STD M/T'] .prod_name",
  prod_name8: "._product-info a[title='Terios X M/T'] .prod_name",
  prod_name9: "._product-info a[title='Xenia X M/T 1.3 STD'] .prod_name",
  prod_price1: "._product-info a[title='Astra Daihatsu Ayla 1.0 D M/T'] ._rp",
  prod_price8: "._product-info a[title='Terios X M/T'] ._rp",
  // filter
  // filter value Category
  filterCategoryManual: '.tab:nth-child(5) #tab-child .hover-nav-plp:nth-child(1) input[type="checkbox"]',
  filterCategoryOtomatis: '.tab:nth-child(5) #tab-child .hover-nav-plp:nth-child(2) input[type="checkbox"]',
  // filter value transmisi
  filterTransmission1000cc: '.tab:nth-child(4) #tab-child .hover-nav-plp:nth-child(1) input[type="checkbox"]',
  filterTransmission1200cc: '.tab:nth-child(4) #tab-child .hover-nav-plp:nth-child(2) input[type="checkbox"]',
  filterTransmission1300cc: '.tab:nth-child(4) #tab-child .hover-nav-plp:nth-child(3) input[type="checkbox"]',
  filterTransmission1500cc: '.tab:nth-child(4) #tab-child .hover-nav-plp:nth-child(4) input[type="checkbox"]',
  // filter value capacity
  filterCapacity5orang: '.tab:nth-child(3) #tab-child .hover-nav-plp:nth-child(1) input[type="checkbox"]',
  filterPopup: "[id='openFilterpopup']",
  filterSort: '#filter-sort-plp',
  wishlistAyla: '#js-plp1 .add-to-wishlist-label',
  // sorting
  sortPopup: '#sortForm2 > span > span.select2.select2-container.select2-container--default > span.selection > span',
  sortRelevan: '[role="treeitem"]:nth-child(1)',
  sortPriceAsc: '[role="treeitem"]:nth-child(2)',
  sortPriceDesc: '[role="treeitem"]:nth-child(3)',
  nameCar1: '#js-plp1 #js-hover-rp  ._brand-name.prod_name',
  nameCar9: '#js-plp9 #js-hover-rp  ._brand-name.prod_name',

};

export const verifyPLP = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
  await base.scrollToElement(elements.gambar1);
  await base.waitElementVisible(elements.gambar1);
  await base.getStringText(elements.prod_name1, 'Astra Daihatsu Ayla');
  await base.scrollToElement(elements.gambar2);
  await base.waitElementVisible(elements.gambar2);
  await base.getStringText(elements.prod_name2, 'Astra Daihatsu Sigra');
  await base.scrollToElement(elements.gambar3);
  await base.waitElementVisible(elements.gambar3);
  await base.getStringText(elements.prod_name3, ' Granmax Blindvan');
  await base.scrollToElement(elements.gambar4);
  await base.waitElementVisible(elements.gambar4);
  await base.getStringText(elements.prod_name4, 'Granmax-MB');
  await base.scrollToElement(elements.gambar5);
  await base.waitElementVisible(elements.gambar5);
  await base.getStringText(elements.prod_name5, ' Granmax-PU');
  await base.scrollToElement(elements.gambar6);
  await base.waitElementVisible(elements.gambar6);
  await base.getStringText(elements.prod_name6, 'Luxio');
  await base.scrollToElement(elements.gambar7);
  await base.waitElementVisible(elements.gambar7);
  await base.getStringText(elements.prod_name7, 'Sirion');
  await base.scrollToElement(elements.gambar8);
  await base.waitElementVisible(elements.gambar8);
  await base.getStringText(elements.prod_name8, 'Terios');
  await base.scrollToElement(elements.gambar9);
  await base.waitElementVisible(elements.gambar9);
  await base.getStringText(elements.prod_name9, 'Xenia');
  await base.waitElementVisible(elements.sortPopup);
  await base.waitElementVisible(elements.filterSort);
};


export const verifyWishlistAyla = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
  await base.scrollToElement(elements.gambar1);
  await base.waitElementVisible(elements.gambar1);
  await base.getStringText(elements.prod_name1, 'Astra Daihatsu Ayla');
  await base.waitElementVisible(elements.wishlistAyla);
};

export const clickWishlist = async () => {
  await base.clickElement(elements.wishlistAyla);
  await base.pauseSleep(2000);
};

export const clickSort = async () => {
  await base.clickElement(elements.sortPopup);
  await base.waitElementVisible(elements.sortRelevan);
  await base.waitElementVisible(elements.sortPriceAsc);
  await base.waitElementVisible(elements.sortPriceDesc);
};
export const clickSortLowtoHigh = async () => {
  await base.clickElement(elements.sortPriceAsc);
};

export const clickAyla = async () => {
  await base.scrollToElement(elements.gambar1);
  await base.clickElement(elements.prod_name1);
};
export const clickLike = async (number) => {
  await base.scrollToElement(`#js-plp${number}`);
  await base.clickElement(`#js-plp${number} label.add-to-wishlist-label`);
};
// button filter or sort
const getBtn = () => ({
  sorted: elements.sortPopup,
  filtered: elements.filterPopup,
});
const setValueFilterSorting = () => ({
  // sorting
  relevancy: elements.sortRelevan,
  lowtohighPrice: elements.sortPriceAsc,
  hightolowPrice: elements.sortPriceDesc,
  // filter
  categoryManual: elements.filterCategoryManual,
  citycarcapacity: elements.filterCapacity5orang,
});

export const clickElementTo = async (task) => {
  await base.scrollToElement(`${getBtn()[task]}`);
  await base.clickElement(`${getBtn()[task]}`);
};
export const clickElementValueTo = async (value) => {
  await base.clickElement(`${setValueFilterSorting()[value]}`);
};
export const verifyFilter = async () => {

};


export const verifyListProduct = async () => {
  let i;
  for (i = 1; i < 10; i += 1) {
    await base.scrollToElement(`#js-plp${i} label.add-to-wishlist-label`);
    await base.waitElementVisible(`#js-plp${i}`);
    // add to wishlist
    await base.waitElementVisible(`#js-plp${i} label.add-to-wishlist-label`);
    // compare
    await base.waitElementVisible(`#js-plp${i} label.add-to-compare-label`);
    // img#js-plp1 .image-mobile .newCarPrimaryImg img
    await base.waitElementVisible(`#js-plp${i} .image-mobile .newCarPrimaryImg img`);
    // merek
    await base.waitElementVisible(`#js-plp${i} #js-hover-rp  ._brand-name.prod_name`);
    // mulai dari
    await base.waitElementVisible(`#js-plp${i} #js-hover-rp  ._brand-name._rp1`);
    // harga
    await base.waitElementVisible(`#js-plp${i} #js-hover-rp  ._brand-name._rp`);
    // deatil cc
    await base.waitElementVisible(`#js-plp${i} #js-hover-rp  ._specification.product_cc`);
    // deatil seat
    await base.waitElementVisible(`#js-plp${i} #js-hover-rp  ._specification.product_seats`);
  }
};
const callSequences = () => ({
  first: elements.nameCar1,
  last: elements.nameCar9,
});
export const verifySequenceCarList = async (sequence, namecar) => {
  await base.scrollToElement(`${callSequences()[sequence]}`);
  await base.expectElementEqualText(`${callSequences()[sequence]}`, namecar);
};
