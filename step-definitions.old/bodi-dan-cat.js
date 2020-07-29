import * as BC from '../pages/bodi-dan-cat';

const { Then } = require('cucumber');

Then(/^a guest can access Bodi Dan Cat Page$/, async () => {
  await BC.verifyBodiDanCat();
});
