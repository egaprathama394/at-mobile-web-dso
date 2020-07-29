import * as Berita from '../pages/news-and-articles';

const { Then } = require('cucumber');

Then(/^a guest can access Berita Page$/, async () => {
  await Berita.verifyPageBerita();
});
