import * as base from '../common/base-functions';

const elements = {
    titleDaftarHarga:'.header-component',
  
  
};


export const verifyDaftarHarga= async () => {


    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/daftar-harga');
    await base.assertContainsText(elements.titleDaftarHarga,'Daftar Harga');

};
