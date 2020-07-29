/* eslint-disable no-unused-vars */
import * as home from '../../pages/home';
import * as header from '../../pages/header';
import * as plp from '../../pages/oto-mobil-baru-tipe/plp';
import * as burgerMenu from '../../pages/burgerMenu';
import * as updateProfile from '../../pages/my-account/update-profile';
import * as dropdownAkunSaya from '../../pages/my-account/dropdownAkunSaya';
import * as wishlist from '../../pages/wishlist/getWishlist';
import * as bottomMenu from '../../pages/bottom-menu';

const { Given, When, Then } = require('cucumber');

When(/^a guest try to access PLP$/, async () => {
  await home.clickDaftarMobil();
});
When(/^a customer try to access Wishlist page$/, async () => {
  await header.clickMainLogoAstra();
  await bottomMenu.clickWishList();
  await wishlist.verifyWishlistPage();
});
When(/^a customer delete list can on Wishlist page$/, async () => {
  await wishlist.clickResetWishlist();
});

Then(/^a customer can see there are '([^"]*)' cars at Wishlist page$/, async (number) => {
  await wishlist.verifyCarWishlist(3);
});
Then(/^a guest can see the cars '([^"]*)' by '([^"]*)'$/, async (task, category) => {
  await plp.verifyListProduct();
});
Then(/^a guest can see the '([^"]*)' car is '([^"]*)'$/, async (sequence, namecar) => {
  await plp.verifySequenceCarList(sequence, namecar);
});


Then(/^a guest want to show the cars '([^"]*)' by '([^"]*)'$/, async (task, category) => {
  await plp.clickElementTo(task);
  await plp.clickElementValueTo(category);
});

When(/^a customer try to like '([^"]*)' car on PLP$/, async (number) => {
  await plp.clickLike(number);
});
Then(/^a user can see PLP$/, async () => {
  await plp.verifyListProduct();
});

Then(/^a guest can access PLP$/, async () => {
  await home.clickDaftarMobil();
  await plp.verifyWishlistAyla();
});

Then(/^a guest can click wishlist a car$/, async () => {
  await plp.clickWishlist();
});

Then(/^a user can access PLP$/, async () => {
  await plp.verifyWishlistAyla();
});

Then(/^a user can see that car at wishlist page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenu.clickProfile();
  await updateProfile.verifyUpdateProfile();
  await updateProfile.clickDropdownAkunSaya();
  await dropdownAkunSaya.verifyDropdownAkunSaya();
  await dropdownAkunSaya.clickWishlist();
  await wishlist.verifyWishlistPage();
});
Then(/^a customer can see Total: '([^"]*)' Kendaraan$/, async (number) => {
  await wishlist.verifyTotalWishlist(number);
});
