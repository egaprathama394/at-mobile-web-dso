/* eslint-disable no-unused-vars */
import * as wishlist from '../../pages/wishlist/getWishlist';

const { Given, When, Then } = require('cucumber');

Given(/^a user can undo the wishlist car$/, async () => {
  await wishlist.clickResetWishlist();
});
