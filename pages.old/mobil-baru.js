import * as base from '../common/base-functions';

const elements = {
filter:'#openFilterpopup',
batal:'.cancel-filter',
sort:'.select2-selection.select2-selection--single',
relevansi:'#select2-sortOptions2-results',
  
};


export const verifyMobilBaru= async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
    await base.clickElement(elements.filter);
    await base.clickElement(elements.batal);
    await base.clickElement(elements.sort);
    await base.clickElement(elements.relevansi);
    
    



    

};