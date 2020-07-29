/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  iconHomepage: '.bottom-menu .icon-homepage',
  iconWishlist: '.bottom-menu .icons_heart',
  iconCart: '.bottom-menu .icon-cart-car',
  iconTransaction: '.bottom-menu .icon-transaction',
  iconUserAccount: '.bottom-menu .icon_user_nav',
};

export const verifyBottomMenu = async () => {
  await base.waitElementVisible(elements.iconHomepage);
  await base.waitElementVisible(elements.iconWishlist);
  await base.waitElementVisible(elements.iconCart);
  await base.waitElementVisible(elements.iconTransaction);
  await base.waitElementVisible(elements.iconUserAccount);
};

export const clickWishList = async () => {
  await base.clickElement(elements.iconWishlist);
};
