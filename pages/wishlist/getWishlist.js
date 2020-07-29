/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  titlePage: "[class='__form-title']",
  dropdownMenu: '.my-account-dropdown',
  wishlistCount: '.__form-title #wishlistCount',
  resetWishlist: '.__form-title .link--gray',
  // ayla
  wishlistAyla: "label[for='wishlist-item-AYLA-GMLFJ-EH_D0199eo']",
  gambarAylaWishList: "img[src='https://imagesamcqa.seva.id/sys-master/images/hf1/h61/8818710446110/AYLA-GMLFJ-EH_ayla_D.png_ProductGrid']",
  prod_nameAyla: "._product-info a[title='Astra Daihatsu Ayla'] .prod_name:nth-child(2)",
  listWishlist1: '#js-plp1 .product-list-component.gtm-product-list',
};

export const verifyCarWishlist = async (number) => {
  let i;
  for (i = 1; i < (number + 1); i += 1) {
    await base.scrollToElement(`#js-plp${i} .product-list-component.gtm-product-list`);
    await base.expectVisible(`#js-plp${i} .product-list-component.gtm-product-list`);
  }
};

export const verifyWishlistPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/wishlist/getWishlist');
  await base.waitElementVisible(elements.titlePage);
  await base.waitElementVisible(elements.dropdownMenu);
  await base.getStringText(elements.wishlistCount, '1');
  await base.waitElementVisible(elements.resetWishlist);
};
export const verifyTotalWishlist = async (number) => {
  await base.expectElementEqualText(elements.wishlistCount, number);
};
export const clickResetWishlist = async () => {
  await base.clickElement(elements.resetWishlist);
};
