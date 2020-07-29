import * as base from '../common/base-functions';

const elements = {
    titleBerita:'.articles_head',

  
  
};


export const verifyPageBerita = async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
    await base.assertContainsText(elements.titleBerita,'Berita Terbaru');

};