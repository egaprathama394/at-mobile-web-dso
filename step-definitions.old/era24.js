import * as ERA from '../pages/era-24';

const { Then } = require('cucumber');

Then(/^a guest can access ERA 24 Jam Page$/, async () => {
  await ERA.verifyERA24Jam();
});
