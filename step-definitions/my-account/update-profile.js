/* eslint-disable no-unused-vars */
import * as header from '../../pages/header';
import * as burgerMenu from '../../pages/burgerMenu';
import * as updateProfile from '../../pages/my-account/update-profile';

const { Given, When, Then } = require('cucumber');

When(/^user can access my account page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenu.clickProfile();
  await updateProfile.verifyUpdateProfile();
});
When(/^user can delete all item value$/, async () => {
  await updateProfile.deleteItem('firstname');
  await updateProfile.deleteItem('phonenumber');
});
When(/^user can see error message below some fields '([^"]*)'$/, async (message) => {
  await updateProfile.verifyMessage('firstname', message);
  await updateProfile.verifyMessage('phonenumber', message);
});
Then(/^user can see error message below '([^"]*)' field '([^"]*)'$/, async (content, message) => {
  await updateProfile.verifyMessage(content, message);
});

// When(/^user can access my account page$/, async () => {
//   await updateProfile.verifyUpdateProfile();
// });
When(/^user can submit the information updated$/, async () => {
  await updateProfile.clickButtonSimpan();
});
When(/^user can cancel to submit the information updated$/, async () => {
  await updateProfile.clickButtonBatal();
});

When(/^user can not submit the information updated$/, async () => {
  await updateProfile.clickButtonSimpan();
});
Then(/^user can verify that his information has not been changed$/, async () => {
  await updateProfile.verifyInformationUnSaved();
});

Then(/^user can verify that his information has been changed$/, async () => {
  await updateProfile.verifyInformationSaved();
});
Then(/^a user can see wording '([^"]*)' on Account Page with message Tidak ada hasil yang ditemukan$/, async (content) => {
  await updateProfile.verifyBlank(content);
});
Then(/^user can verify that his '([^"]*)' value is still '([^"]*)'$/, async (field, value) => {
  await updateProfile.verifyValue(field, value);
});


When(/^user try to change Detail Profile '([^"]*)' '([^"]*)' '([^"]*)'$/, async (firstname, lastname, birthdate) => {
  await updateProfile.insertField('firstname', firstname);
  await updateProfile.insertField('lastname', lastname);
  await updateProfile.ChooseOptionDropdown('birthdate', birthdate);
});
When(/^user try to change value of '([^"]*)' element '([^"]*)'$/, async (element, phonenumber) => {
  await updateProfile.updateField(element, phonenumber);
});
When(/^user try to change values of region and city element '([^"]*)' '([^"]*)'$/, async (region, city) => {
  await updateProfile.insertFieldDropdown('region', region);
  await updateProfile.insertFieldDropdown('city', city);
});

When(/^user try to change values of '([^"]*)' '([^"]*)'$/, async (content, value) => {
  await updateProfile.insertFieldDropdown(content, value);
});

When(/user try to change value of Alamat Lengkap '([^"]*)'$/, async (address) => {
  await updateProfile.insertField('address', address);
});
