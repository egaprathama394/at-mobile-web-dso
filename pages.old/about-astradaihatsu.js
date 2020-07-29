import * as base from '../common/base-functions';

const elements = {
  titleTentangAstraDaihatsu:'.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  
  
};


export const verifyTentangAstraDaihatsu = async () => {

    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/about-astradaihatsu');
    await base.assertContainsText(elements.titleTentangAstraDaihatsu, 'Tentang Astra Daihatsu');
   
  };
  
  
