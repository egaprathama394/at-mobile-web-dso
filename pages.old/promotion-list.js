import * as base from '../common/base-functions';

const elements = {
  title: '#promo-title',
};

export const verifyPromo = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/promotion-list');
  await base.assertContainsText(elements.title, 'Promo');
};
