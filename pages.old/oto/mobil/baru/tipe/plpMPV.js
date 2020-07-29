import * as base from '../../../../../common/base-functions';

const elements = {
  filter: '#openFilterpopup',
  sort: '.select2-selection',
  listHeader: '.list-heading',
};

export const verifyTipeMPV = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/MPV/c/MPV');
  await base.expectVisible(elements.filter);
  await base.expectVisible(elements.sort);
  await base.assertContainsText(elements.listHeader, 'Semua Mobil Baru MPV (4)');
  await base.expectElementNotEqualText(elements.listHeader, 'Semua Mobil Baru MPV (0)');
};
