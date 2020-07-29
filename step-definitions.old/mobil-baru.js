import * as MB from '../pages/mobil-baru';

const { Then } = require('cucumber');

Then(/^a guest can access Mobil Baru Page$/, async () => {
  await MB.verifyMobilBaru();
});
