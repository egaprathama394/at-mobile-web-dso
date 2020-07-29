import * as news from '../pages/news';
import * as newsYosua from '../pages/newsYosua';

const { client } = require('nightwatch-api');

const { When, Then } = require('cucumber');


Then(/^a guest can access Berita Menu content$/, async () => {
  await client.pause(5000);
  await news.verifyNews();
});

When(/^a guest try to search using Search Bar Menu '([^"]*)'$/, async (berita1) => {
  await news.clickSearchBar();
  await client.pause(3000);
  await news.inputSearchBar(berita1);
  await client.pause(3000);
  await news.clickBeritaYosua();
});

Then(/^a guest can access Berita Menu Detail$/, async () => {
  await newsYosua.verifyBeritaYosua();
});
