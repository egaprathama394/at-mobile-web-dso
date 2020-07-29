import bs from '../pages/bookingservice';

const { Then } = require('cucumber');

Then(/^a guest can access Booking Service$/, async () => {
  await bs();
});
