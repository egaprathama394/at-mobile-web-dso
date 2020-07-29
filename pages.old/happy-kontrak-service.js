import * as base from '../common/base-functions';

const elements = {
    titleHappyKontrakService:'.info-text',
  
  
};


export const verifyHappyKontrakService= async () => {


    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/happy-kontrak-service');
    await base.assertContainsText(elements.  titleHappyKontrakService,'Happy Kontrak Service');

};
