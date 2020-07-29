import * as links from '../pages/quickLinks';

const { Then } = require('cucumber');

Then(/^a guest can see Quick Links menu$/, async () => {
  await links.verifyQuickLinksMenu();
});
