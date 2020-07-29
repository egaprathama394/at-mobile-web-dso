import * as waysOfWorking from '../pages/ways-of-working';

const { Then } = require('cucumber');

Then(/^a guest can access Cara Kerja Page$/, async () => {
    await waysOfWorking.verifyPageCaraKerja();
  });