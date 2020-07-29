import * as base from '../common/base-functions';

const elements = {
    titleMobileService:'.info-text',

  
  
};


export const verifyPageMobileService = async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/mobile-service');
    await base.assertContainsText(elements.titleMobileService,'Daihatsu Mobile Service');

};