/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  searchBar: '#js-site-search-input',
  beritaYosua: '.col-lg-12 .news-list-component a[href="/in/newsandarticles/news-details?newsID=34"]',
};

export const verifyNews = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
};

export const clickSearchBar = async () => {
  await base.clickElement(elements.searchBar);
};

export const inputSearchBar = async (berita1) => {
  await base.setValueElement(elements.searchBar, berita1);
};

export const clickBeritaYosua = async () => {
  await base.clickElement(elements.beritaYosua);
};

export const verifyBeritaYosua = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/news-details?newsID=34');
};

// export const ketikdropdown = async (field, value) => {
//   await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
//   await base.setValueElementThenEnter(element.searchBar, value);
// };
