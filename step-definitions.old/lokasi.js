import loc from '../pages/lokasi';

const { Then } = require('cucumber');

Then(/^a guest can access Lokasi Outlet Page$/, async () => {
  await loc();
});
