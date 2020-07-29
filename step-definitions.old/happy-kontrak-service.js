import * as HPS from '../pages/happy-kontrak-service';

const { Then } = require('cucumber');

Then(/^a guest can access Happy Kontrak Service Page$/, async () => {
  await HPS.verifyHappyKontrakService();
});
