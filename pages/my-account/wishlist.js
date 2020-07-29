/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { client } from 'nightwatch-api/lib';
import * as base from '../../common/base-functions';

const elements = {
  titlePage: "[class='__form-title']",
  btnResetWishlist: '.wishlist--clearAll',
  listWishlist1: '#js-plp1 .product-list-component.gtm-product-list',
};
export const verifyElement = async () => {
  await base.expectVisible(elements.titlePage);
  await base.expectVisible(elements.btnResetWishlist);
  await base.expectVisible(elements.listWishlist1);
};
