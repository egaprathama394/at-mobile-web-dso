import * as outlet from '../pages/outlet';
import * as outletDetail from '../pages/outlet-detail';
import * as header from '../pages/header';
/* eslint-disable no-unused-vars */
// import * as home from '../pages/home';

import * as burgerMenuPages from '../pages/burgerMenu';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

When(/^a guest try to access Outlet page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenuPages.veryfyBurgerMenu();
  await burgerMenuPages.clickOutlet();
});

Then(/^a guest can see Outlet Content$/, async () => {
  await header.clickBurgerMenu();
  await outlet.veryfyListOutlet();
  // await outlet.veryfyOutletPage();
  await outlet.veryfyBtnBottom();
});
Then(/^a guest try to choose First Outlet Detail$/, async () => {
  await outlet.clickOutletItem();
  await outletDetail.veryfyOutletDetailPage();
});
