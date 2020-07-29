import * as base from '../common/base-functions';

const elements = {
  titleLogin: '.loginWrapper .heading:nth-child(1)',
  emailBS: '#loginForm > div.row > div:nth-child(1) > div > div:nth-child(2) > label',
  passwordBS: '#loginForm > div.row > div:nth-child(1) > div > div:nth-child(3) > label',
  textUsername: '#j_username',
  textPassword: '#j_password',
  buttonForgot: "a[href='/in/login/pw/request/external']",
  buttonLogin: '.loginWrapper .btn-lg',
  buttonFB: '#custom-social-btn-facebook',
  buttonGoogle: '#custom-social-btn-google',
  buttonRegist: "a[href='/in/register'] .margin-top-bottom20",
  heading: '#loginForm > div.row > div.col-md-5.col-sm-12.grid-1.grid-2 > h4',
  details: '.details:nth-child(1)',
  detailsDaftar: '.details:nth-child(2)',
};

export default async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/book-service');
  await base.assertContainsText(elements.titleLogin, 'Login');
  await base.assertContainsText(elements.emailBS, 'Email *');
  await base.expectVisible(elements.textUsername);
  await base.assertContainsText(elements.passwordBS, 'Password*');
  await base.expectVisible(elements.textPassword);
  await base.assertContainsText(elements.buttonForgot, 'Lupa Password?');
  await base.expectVisible(elements.buttonForgot);
  await base.expectVisible(elements.buttonLogin);
  await base.assertContainsText(elements.details, 'Atau Login Dengan');
  await base.expectVisible(elements.buttonFB);
  await base.expectVisible(elements.buttonGoogle);
  await base.assertContainsText(elements.heading, 'Daftar');
  await base.assertContainsText(elements.detailsDaftar, 'Dengan mendaftar, saya telah membaca dan menyetujui ketentuan dan kebijakan privasi.');
  await base.expectVisible(elements.buttonRegist);
};
