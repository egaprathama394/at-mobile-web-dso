/* eslint-disable no-await-in-loop */
/* eslint-disable no-const-assign */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const elements = {
  btnBack: '',
  headerOutlet: '',
  titleHeader: '',
  imgBannerOutlet: '',
  titleBannerOutlet: '',
  outlet1: '#list-view .branch__details-content:nth-child(1)',
  outlet1Name: '#list-view .branch__details-content:nth-child(1) .branch__displayName',
  outlet1Logo: '#list-view .branch__details-content:nth-child(1) img',
  outlet1Address: '#list-view .branch__details-content:nth-child(1) .branch__location--address',
  labelOutlet1PhoneNumber: '#list-view .branch__details-content:nth-child(1) .branch__phone--title',
  labelOutlet1WeekdayOpen: '#list-view .branch__details-content:nth-child(1) .branch__working-hours--content',
  labelOutletWeekendOpen: '#list-view .branch__details-content:nth-child(1) .branch__working-hours  .branch__working-hours--content2',
  valueOutlet1PhoneNumber: '#list-view .branch__details-content:nth-child(1) .branch__phone  span',
  valueOutlet1WeekdayOpen: '',
  valueOutletWeekendOpen: '',
  // nextsprint
  iconBtnPhone: '#list-view .js-store-finder-navigation-list :nth-child(1) :nth-child(4) .col-1 a .icon-phoneCall',
  btnPhone: '#list-view .js-store-finder-navigation-list :nth-child(1) :nth-child(4) div.col-1  a',
  btnOutlet1PetunjukArah: '#list-view .branch__details-content:nth-child(1) .branch__directions',
  labelOutlet1PetunjukArah: '#list-view .branch__details-content:nth-child(1) .branch__directions a',
  btnFilterAndMaps: '.branch__filter-mobile',
  btnFilter: '.branch__filter-mobile #openFilterPopup',
  iconBtnFilter: '.branch__filter-mobile .icon-filter',
  labelFilter: '.branch__filter-mobile #openFilterPopup span',
  btnMaps: '.branch__filter-mobile .page-view',
  iconBtnMap: '.branch__filter-mobile span .icon-maps',
  labelMaps: 'a[href="/store-finder?pageView=maps"] span',
};
export const veryfyOutletPage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/store-finder?carType=NEWCAR');
  await base.waitElementVisible(elements.outlet1);
  await base.waitElementVisible(elements.outlet1Logo);
  await base.expectElementEqualText(elements.outlet1Address, 'Jl. Swasembada Barat I');
  await base.expectElementEqualText(elements.outlet1Name, 'Astra Daihatsu Ottoh');
  await base.expectElementEqualText(elements.labelOutlet1PhoneNumber, 'Telepon :');
  await base.expectElementEqualText(elements.valueOutlet1PhoneNumber, '123');
  await base.expectElementEqualText(elements.labelOutlet1WeekdayOpen, 'Senin-Jumat');
  await base.expectElementEqualText(elements.labelOutletWeekendOpen, 'Sabtu');
  await base.expectElementEqualText(elements.labelOutlet1PetunjukArah, 'PETUNJUK ARAH');
  await base.waitElementVisible(elements.btnOutlet1PetunjukArah);
  await base.waitElementVisible(elements.btnPhone);
};
export const veryfyListOutlet = async () => {
  let i;
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/store-finder?carType=NEWCAR');
  for (i = 1; i < 11; i += 1) {
    await base.waitElementVisible(`#list-view .branch__details-content:nth-child(${i})`);
    await base.waitElementVisible(`#list-view .branch__details-content:nth-child(${i}) .branch__directions`);
    await base.waitElementVisible(`#list-view .js-store-finder-navigation-list :nth-child(${i}) :nth-child(4) div.col-1  a`);
    await base.waitElementVisible(`#list-view .js-store-finder-navigation-list :nth-child(${i}) :nth-child(4) .col-1 a .icon-phoneCall`);
  }
};
export const veryfyBtnBottom = async () => {
  await base.waitElementVisible(elements.btnFilterAndMaps);
  await base.waitElementVisible(elements.btnFilter);
  await base.waitElementVisible(elements.btnMaps);
  await base.expectElementEqualText(elements.labelFilter, 'Filter');
  await base.expectElementEqualText(elements.labelMaps, 'Map');
  await base.waitElementVisible(elements.iconBtnFilter);
  await base.waitElementVisible(elements.iconBtnMap);
};
export const clickOutletItem = async () => {
  await base.scrollToElement(elements.outlet1Name);
  await base.clickElement(elements.outlet1Name);
};
