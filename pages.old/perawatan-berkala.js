import * as base from '../common/base-functions';

const elements = {
    titlePerawatanBerkala:'.info-text',
  
};


export const verifyPerawatanBerkala= async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/perawatan-berkala');
    await base.assertContainsText(elements.titlePerawatanBerkala,'Perawatan Berkala');

};