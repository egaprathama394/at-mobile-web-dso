import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
 successtext: '.congrats',
 successtextoftestdrive: '.congrats',



};


export const successpage = async () => {
  await base.expectVisible(elements.successtext);
};


export const successpageoftestdrive = async () => {
  await base.expectVisible(elements.successtext);
};


