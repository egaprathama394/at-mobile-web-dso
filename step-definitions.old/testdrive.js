import td from '../pages/testdrive';

const { Then } = require('cucumber');

Then(/^a guest can access Test Drive Page$/, async () => {
  await td();
});
