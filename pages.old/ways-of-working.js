import * as base from '../common/base-functions';

const elements = {
  titleCaraKerja:'.info-text',
  
  
};


export const verifyPageCaraKerja = async () => {

    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/ways-of-working');
    await base.assertContainsText(elements.titleCaraKerja, 'Cara Kerja');
   
  };
  
  
