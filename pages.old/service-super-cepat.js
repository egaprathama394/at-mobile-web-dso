import * as base from '../common/base-functions';

const elements = {
    titleServiceSuperCepat:'.info-text',
  
};


export const verifyServiceSuperCepat= async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/service-super-cepat');
    await base.assertContainsText(elements.titleServiceSuperCepat,'Service Super Cepat');

};