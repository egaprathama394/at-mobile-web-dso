import * as PB from '../pages/perawatan-berkala';

const { Then } = require('cucumber');

Then(/^a guest can access Perawatan Berkala Page$/, async () => {
  await PB.verifyPerawatanBerkala();
});
