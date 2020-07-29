import * as base from '../common/base-functions';

const elements = {
  titleLO: '.branch__title',
  dropLO: '.select2-selection.select2-selection--single',
  textdropLO: '#select2-stores-container',
  filterLO: '.branch__filter-title',
  catLO: '#select2-feature--dropDown-container',
  bodiLO: '.select2-results__option:nth-child(2)',
  showLO: '.select2-results__option:nth-child(3)',
  bengkelLO: '.select2-results__option:nth-child(4)',
  outletLO: '.branch__filter-contentTitle',
  lokasi1: '#storeFinder > div > div > div > div.store__finder.js-store-finder > div > div.col-lg-5.col-sm-12.branch__filter-wrapper > div > div > ul > li.active > a',
  lokasi2: '#storeFinder > div > div > div > div.store__finder.js-store-finder > div > div.col-lg-5.col-sm-12.branch__filter-wrapper > div > div > ul > li:nth-child(2) > a',
  leftLO: '.pull-right .btn:nth-child(1)',
  rightLO: '.pull-right .btn:nth-child(2)',
  fromLO: '.js-store-finder-pager-item-from',
  toLO: '.js-store-finder-pager-item-to',
  totalLO: '.js-store-finder-pager-item-all',
  noResult: '.no_results',
};

export default async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/store-finder?carType=NewCar');
  await base.assertContainsText(elements.titleLO, 'Temukan outlet di sekitar Anda');
  await base.expectVisible(elements.dropLO);
  await base.assertContainsText(elements.textdropLO, 'Cari berdasarkan Nama Outlet');
  await base.assertContainsText(elements.filterLO, 'FILTER BERDASARKAN:');
  await base.assertContainsText(elements.catLO, 'Pilih kategori');
  await base.assertContainsText(elements.outletLO, 'OUTLET');
  await base.clickElement(elements.catLO);
  await base.clickElement(elements.bodiLO);
  await base.assertContainsText(elements.noResult, 'Tidak ada hasil yang ditemukan');
  await base.clickElement(elements.catLO);
  await base.clickElement(elements.showLO);
  await base.clickElement(elements.catLO);
  await base.clickElement(elements.bengkelLO);
//   await base.expectVisible(elements.leftLO);
//   await base.assertContainsText(elements.fromLO, '1');
//   await base.assertContainsText(elements.toLO, '10');
//   await base.assertContainsText(elements.totalLO, '110');
//   await base.expectVisible(elements.rightLO);
};
