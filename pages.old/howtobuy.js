import * as base from '../common/base-functions';

const elements = {
    titlePanduanPembelian:'.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  
  
};


export const verifyPanduanPembelian= async () => {


await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/howtobuy');
await base.assertContainsText(elements.titlePanduanPembelian, 'Panduan Pembelian');

};
