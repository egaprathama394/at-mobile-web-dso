import * as SK from '../pages/terms-condition';

const { Then } = require('cucumber');

Then(/^a guest can access Syarat & Ketentuan Penggunaan Page$/, async () => {
    await SK.verifySyaratDanKetentuanPenggunaan();
  });