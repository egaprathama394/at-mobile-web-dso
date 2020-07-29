import * as base from '../common/base-functions';

const elements = {
  titlePage: '.__account-nav .title',
  txtEmail: "#updateProfileForm [name ='email']",
};

export default async (email) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/update-profile');
  await base.expectVisible(elements.titlePage);
  await base.assertContainsText(elements.titlePage, 'Akun Saya');
  await base.expectVisible(elements.txtEmail);
  await base.expectElementEqualValue(elements.txtEmail, email);
};
