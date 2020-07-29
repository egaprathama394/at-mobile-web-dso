import * as base from '../common/base-functions';

const elements = {
  lihatPromo: 'a[href="/in/promotion-detail?promotionId=1" ] .promo-btn-style',
};

export const verifyPromoList = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/promotion-list');
};

export const clickLihatPromo = async () => {
  await base.clickElement(elements.lihatPromo);
};
