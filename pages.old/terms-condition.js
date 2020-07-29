import * as base from '../common/base-functions';

const elements = {
    titleSyaratdanKetentuanPenggunaan:'.info-text',
  
  
};


export const verifySyaratDanKetentuanPenggunaan = async () => {

 await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/terms-condition');
 await base.assertContainsText(elements.titleSyaratdanKetentuanPenggunaan,'Syarat & Ketentuan Penggunaan');
   
  };


  