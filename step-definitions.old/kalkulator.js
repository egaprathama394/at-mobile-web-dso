import calc from '../pages/kalkulator';

const { Then } = require('cucumber');

Then(/^a guest can access Kalkulator Kredit Page$/, async () => {
  await calc();
});
