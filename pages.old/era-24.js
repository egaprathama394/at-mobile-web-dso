import * as base from '../common/base-functions';

const elements = {
    titleERA24Jam:'.info-text',
  
  
};


export const verifyERA24Jam= async () => {


    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/era-24');
    await base.assertContainsText(elements.titleERA24Jam,'ERA 24 Jam');

};
