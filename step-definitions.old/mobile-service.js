import * as MS from '../pages/mobile-service';

const { Then } = require('cucumber');

Then(/^a guest can access Mobile Service Page$/, async () => {
  await MS.verifyPageMobileService();
});
