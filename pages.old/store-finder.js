import * as base from '../common/base-functions';

const elements = {
  title: '.branch__title',
  storeFinder: '.__form-section .select2-selection.select2-selection--single',
  iconCurrentLoc: '.icon-Current_Location',
  dropdownPilihkategori: '.__dropdown-content:nth-child(3) .select2-selection__rendered',
};

export const verifyOutlet= async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/store-finder?carType=NEWCAR');
  await base.assertContainsText(elements.title, 'Temukan outlet di sekitar Anda');
  await base.expectVisible(elements.storeFinder);
  await base.expectVisible(elements.iconCurrentLoc);
  await base.expectVisible(elements.dropdownPilihkategori);
};
