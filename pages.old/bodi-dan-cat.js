import * as base from '../common/base-functions';

const elements = {
  titleBodiDanCat:'.info-text',
  
  
};


export const verifyBodiDanCat= async () => {

    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/bodi-dan-cat');
    await base.assertContainsText(elements.titleBodiDanCat, 'Bodi & Cat');
  };
  
  
