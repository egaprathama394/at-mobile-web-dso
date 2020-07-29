import * as SSC from '../pages/service-super-cepat';

const { Then } = require('cucumber');

Then(/^a guest can access Service Super Cepat Page$/, async () => {
  await SSC.verifyServiceSuperCepat();
});
