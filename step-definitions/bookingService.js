/* eslint-disable no-unused-vars */
import * as bookingService from '../pages/bookingService';
import * as header from '../pages/header';
import * as home from '../pages/home';
import * as login from '../pages/login';

import * as burgerMenuPages from '../pages/burgerMenu';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

When(/^a user try to access Booking Service page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenuPages.veryfyBurgerMenuAfterLogin();
  await burgerMenuPages.clickBookingService();
});
When(/^a user try to fill Detail informasi Pemesan '([^"]*)' '([^"]*)' '([^"]*)'$/, async (nama, hp, email) => {
  await bookingService.detailPemesan(nama, hp, email);
});

When(/^a user can see Booking Service Content$/, async () => {
  await bookingService.verifyBookingService();
});

When(/^a user try to access Booking Service page from Homepage$/, async () => {
  await home.clickMenuBookingService();
});
When(/^a user try to click button KIRIM KODE$/, async () => {
  await bookingService.clickBtnKodeOTP();
});
When(/^a user try click Kategori Servis dropdown on Detail Servis$/, async () => {
  await bookingService.clickCategoryServiceField();
});
When(/^a user try click Jam dropdown on Detail Servis$/, async () => {
  await bookingService.clickJamField();
});
When(/^a user try click Tahun Pembelian dropdown on Detail Servis$/, async () => {
  await bookingService.clickTahunField();
});
When(/^a user try click Model dropdown on Detail Servis$/, async () => {
  await bookingService.clickModelField();
});


Then(/^a user must fill Model field '([^"]*)' and password '([^"]*)' before go to Booking Service Page$/, async (email, password) => {
  await login.inputDataLogin(email, password);
  await login.clickBtnLogin();
});

Then(/^a user can see validation '([^"]*)' at any fields$/, async (message) => {
  await bookingService.verifyMessage('model', message);
  await bookingService.verifyMessage('tanggal', message);
  await bookingService.verifyMessage('jam', message);
  await bookingService.verifyMessage('kategori', message);
  await bookingService.verifyMessage('nokendaraan', message);
});
Then(/^a user can see wording Kategori Servis$/, async () => {
  await bookingService.verifyBlankKategoriService();
});
Then(/^a user can see wording 'Pilih Jam'$/, async () => {
  await bookingService.verifyBlankJam();
});
// alert error
Then(/^a user can see wording '([^"]*)' with message Tidak ada hasil yang ditemukan$/, async (content) => {
  await bookingService.verifyBlank(content);
});

Then(/^a user can see wording below '([^"]*)' : '([^"]*)'$/, async (content, message) => {
  await bookingService.verifyMessage(content, message);
});


When(/^a user try to fill Detail Servis '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (model, tahun, nopol, kategori, catatan, outlet, tanggal, jam) => {
  await bookingService.ketikDropDown('model', model);
  await bookingService.ketikDropDown('tahun', tahun);
  await bookingService.nopolMobil(nopol);
  await bookingService.ketikDropDown('kategori', kategori);
  await bookingService.noteService(catatan);
  await bookingService.ketikDropDown('outlet', outlet);
  // await bookingService.scrolltoTitle2();
  await bookingService.ChooseOptionDropdown('tanggal', tanggal);
  await bookingService.ChooseOptionDropdown('jam', jam);
});

When(/^a user try to fill '([^"]*)' at '([^"]*)' dropdown on Detail Servis$/, async (value, content) => {
  await bookingService.ketikDropDown1(value, content);
});
When(/^a user try to fill '([^"]*)' at '([^"]*)' on Detail Informasi Pemesan$/, async (value, content) => {
  await bookingService.ketikField(value, content);
});
When(/^a user try to input OTP '([^"]*)'$/, async (OTP) => {
  await bookingService.otp(OTP);
});

When(/^a user try to input false OTP code '([^"]*)'$/, async (OTP) => {
  await bookingService.otp(OTP);
});

When(/^a user try to request OTP Code/, async () => {
  await bookingService.requestotpagain();
});


When(/^a user try to submit Booking Service form$/, async () => {
  await bookingService.submit();
});

When(/^a user try to fill Detail Servis 3 fields with '([^"]*)' '([^"]*)' '([^"]*)'$/, async (model, tahun, nopol) => {
  await bookingService.ketikDropDown('model', model);
  await bookingService.ketikDropDown('tahun', tahun);
  await bookingService.nopolMobil(nopol);
});
