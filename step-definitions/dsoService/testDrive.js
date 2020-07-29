/* eslint-disable no-unused-vars */
import * as home from '../../pages/home';
import * as header from '../../pages/header';
import * as testdrive from '../../pages/dsoService/testDrive';

const { Given, When, Then } = require('cucumber');

When(/^a guest try to access testdrive page$/, async () => {
  await home.clickMenuBookingTestDriver();
});

Then(/^a user can see testdrive page$/, async () => {
  await testdrive.verifyTestdrivePage();
});
