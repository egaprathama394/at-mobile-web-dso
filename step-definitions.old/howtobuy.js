import * as PB from '../pages/howtobuy';

const { Then } = require('cucumber');

Then(/^a guest can access Panduan Pembelian Page$/, async () => {
  await PB.verifyPanduanPembelian();
});
