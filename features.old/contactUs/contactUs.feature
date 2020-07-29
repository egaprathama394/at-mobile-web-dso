Feature: Contact Us

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @QADBD-182 @guest
   Scenario: As a guest, I can access Hubungi Kami Page through Burger Menu
   When a guest try to access Hubungi Kami Page through Burger Menu
   Then a guest will see Login Page

   @QADBD-182 @customer
   Scenario: As a customer, I can successfully submit Hubungi Kami form
   When a customer try to login using email 'aci66v@gmail.com' and password 'baby134137'
   And a customer try to access Hubungi Kami Page through Burger Menu
   And a customer can see Hubungi Kami Page
   And a customer try to submit message
   Then a customer can see Thank You Pop Up

   @QADBD-182 @customer @Home
   Scenario: As a customer, I can successfully submit Hubungi Kami form then back to Home Page
   When a customer try to login using email 'aci66v@gmail.com' and password 'baby134137'
   And a customer try to access Hubungi Kami Page through Burger Menu
   And a customer can see Hubungi Kami Page
   And a customer try to submit message
   Then a customer can see Home Page