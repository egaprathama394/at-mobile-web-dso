import * as base from '../../../../common/base-functions';

const elements = {
  filter: '#openFilterpopup',
  sort: '.select2-selection',
  listHeader: '.text-center.list-heading',
};

export const verifyMobilBaru = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
  await base.expectVisible(elements.filter);
  await base.expectVisible(elements.sort);
  await base.assertContainsText(elements.listHeader, 'Semua Mobil Baru(9)');
  await base.expectElementNotEqualText(elements.listHeader, 'Semua Mobil Baru(0)');
};
