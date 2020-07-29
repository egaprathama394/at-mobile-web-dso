// import { client } from 'nightwatch-api/lib';
import * as thx from '../pages/ThankYouPage';

const { Then } = require('cucumber');

Then(/^a user can see Thank You on Pop Up Test Drive$/, async () => {
  await thx.thanks();
});


Then(/^a user can see Thank You Page for Booking Service$/, async () => {
  await thx.thankyouBS();
});
