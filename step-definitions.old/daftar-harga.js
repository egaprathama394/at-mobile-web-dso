import * as DH from '../pages/daftar-harga';

const { Then } = require('cucumber');

Then(/^a guest can access Daftar Harga Page$/, async () => {
  await DH.verifyDaftarHarga();
});
