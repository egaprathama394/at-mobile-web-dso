Feature: Riwayat Hubungi Kami

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @QADBD-182 @HubungiKami
   Scenario: As a customer, I can access Riwayat Hubungi Kami Page through Hubungi Kami
   When a customer try to access Riwayat Hubungi Kami Page through Hubungi Kami Menu on Burger Menu
   And a customer will see Login Page
   And a customer try to Login
   And a customer can see Hubungi Kami Page
   And a customer try to submit message
   And a customer can see Thank You Pop Up
   And a customer try to access Riwayat Hubungi Kami Page
   Then a customer can see Riwayat Hubungi Kami Page

   @QADBD-182 @AkunSaya
   Scenario: As a customer, I can access Riwayat Hubungi Kami Page through Akun Saya Menu
   When a customer try to login using email 'aci66v@gmail.com' and password 'baby134137'
   And a customer try to access Riwayat Hubungi Kami Page through Akun Saya Menu on Burger Menu
   And a customer will see Akun Saya Page
   And a customer try to access Riwayat Hubungi Kami Page through Akun Saya page
   Then a customer can see Riwayat Hubungi Kami Page