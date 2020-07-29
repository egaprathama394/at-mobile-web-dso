import * as base from '../common/base-functions';

const elements = {
    titlePart24Jam:'.info-text',
  
};


export const verifyPart24Jam= async () => {
    await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/part-24');
    await base.assertContainsText(elements.titlePart24Jam,'Part 24 Jam');

};