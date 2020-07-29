import * as about from '../pages/about-astradaihatsu';

const { Then } = require('cucumber');

Then(/^a guest can access Tentang Astra Daihatsu Page$/, async () => {
  await about.verifyTentangAstraDaihatsu();
});
