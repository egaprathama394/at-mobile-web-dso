import { client } from 'nightwatch-api/lib';
import * as bookingService from '../../pages/dsoservice/book-service';
import * as home from '../../pages/home';
import * as akun from '../../pages/contactUs';

const { Then, When } = require('cucumber');

Then(/^a guest can access Booking Service Page$/, async () => {
  await bookingService.verifyPage();
});

When(/^login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await bookingService.IdPass(email, password);
});

When(/^login using email '([^"]*)' and passwordd '([^"]*)'$/, async (email, password) => {
  await bookingService.IdPass(email, password);
  await bookingService.scrollToLogin();
});
Then(/^a guest can login page$/, async () => {
  await home.successLogin();
});

When(/^i input '([^"]*)' '([^"]*)' for model and year$/, async (model, years) => {
  await bookingService.ketikDropdown('model', model);
  await bookingService.ketikDropdown('years', years);
});

When(/^i input '([^"]*)' '([^"]*)' for plat and katserv$/, async (NoPol, katserv) => {
  await bookingService.inputfieldBS(NoPol);
  client.pause(1000);
  await bookingService.ketikDropdown('katserv', katserv);
  client.pause(1000);
});

When(/^i input '([^"]*)' '([^"]*)' for outlet and date$/, async (outlet, date) => {
  await bookingService.ketikDropdown('outlet', outlet);
  await bookingService.ChooseOptionDropdown('date', date);
});

When(/^i input '([^"]*)' '([^"]*)' for time and note$/, async (jam, note) => {
  await bookingService.ChooseOptionDropdown('jam', jam);
  await bookingService.setNote(note);
});

When(/^i click Lanjutkan$/, async () => {
  await bookingService.klikLanjutkan();
});

When(/^i click Lanjutkan2$/, async () => {
  await bookingService.klikLanjutkan2();
});

When(/^i change phone number '([^"]*)'$/, async (HP) => {
  await bookingService.changeHP(HP);
});

When(/^i input '([^"]*)' in otp page$/, async (otp) => {
  await bookingService.otp(otp);
});

Then(/^i see success page$/, async () => {
  await bookingService.successVerify();
  client.pause(5000);
});

// Rating Booking Service

When(/^a customer try to access Booking Service through burger menu$/, async () => {
  client.pause(1000);
  await home.clickBurgerMenu();
  await home.clickMenuBookingService();
});

When(/^i can see success page$/, async () => {
  await bookingService.successVerify();
  client.pause(20000);
});

When(/^i can see my status order$/, async () => {
  client.pause(2000);
  await bookingService.notif();
  await bookingService.ratingBS();
});

When(/^i can give rating$/, async () => {
  await bookingService.giveRating();
});

Then(/^i can see Thank You message$/, async () => {
  await bookingService.ratingSuccess();
  client.pause(50000);
});

When(/^a customer try to access Riwayat Servis Page through Akun Saya Menu on Burger Menu$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuAkunSaya();
  await akun.riwayatServis();
});

When(/^i can choose my car on Riwayat Servis page$/, async () => {
  await bookingService.carDropDown();
});

When(/^i can give rating through Riwayat Servis page$/, async () => {
  await bookingService.ratingRiwayat();
  await bookingService.giveRating();
});

// Negative Rating

When(/^i can see my status order is not Closed$/, async () => {
  client.pause(1000);
  await bookingService.notif();
  await bookingService.negativeStatus();
});

Then(/^i cant see button Berikan Ulasan$/, async () => {
  client.pause(1000);
  await bookingService.negativeUlasan();
});

When(/^i dont give rating$/, async () => {
  await bookingService.notGiveRating();
});

Then(/^i can see warning wording$/, async () => {
  await bookingService.ratingFailed();
});
