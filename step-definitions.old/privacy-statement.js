import * as KP from '../pages/privacy-statement';

const { Then } = require('cucumber');

Then(/^a guest can access Kebijakan Privasi Page$/, async () => {
  await KP.verifyKebijakanPrivasi();
});
