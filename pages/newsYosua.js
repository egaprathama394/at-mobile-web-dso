/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

// const elements = {
//   searchBar: '#js-site-search-input',
//   beritaYosua: '.col-lg-12 .news-list-component a[href="/in/newsandarticles/news-details?newsID=34"]',
// };

export const verifyBeritaYosua = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/news-details?newsID=34');
};
