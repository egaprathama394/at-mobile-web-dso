import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const elements = {
  // Booking Service
  thanksImage: '.account-section .order-confirmtation__image  img',
  congrats: '.account-section p.congrats',
  confirm: '.account-section span',
  btnBackHome: '.account-section .__back-home  button',
};


// eslint-disable-next-line import/prefer-default-export
export const thanks = async () => {
  await base.assertUrlContains('https://qa.astra-daihatsu.id/in/checkout/orderConfirmation/');
};

export const thankyouBS = async () => {
  await base.expectVisible(elements.thanksImage);
  await base.assertContainsText(elements.congrats, 'Selamat!');
  await base.assertContainsText(elements.confirm, 'Silakan datang ke bengkel sesuai jadwal booking atau periksa order Sahabat di Halaman Akun Saya.');
  await base.expectVisible(elements.btnBackHome);
};
