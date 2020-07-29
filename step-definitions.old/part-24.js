import * as P24Jam from '../pages/part-24';

const { Then } = require('cucumber');

Then(/^a guest can access Part24Jam Page$/, async () => {
  await P24Jam.verifyPart24Jam();
});
