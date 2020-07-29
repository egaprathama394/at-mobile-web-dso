import * as base from '../../../../../common/base-functions';

const elements = {
  filter: '#openFilterpopup',
  sort: '.select2-selection',
  listHeader: '.list-heading',
};

export const verifyTipeCityCAr = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/City-Car/c/CITYCAR');
  await base.expectVisible(elements.filter);
  await base.expectVisible(elements.sort);
  await base.assertContainsText(elements.listHeader, 'Semua Mobil Baru City Car (2)');
  await base.expectElementNotEqualText(elements.listHeader, 'Semua Mobil Baru City Car (0)');
};
