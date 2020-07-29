Feature: footer9

   Background: Open DSO Home page
   Given a guest is at DSO Home page

#    Scenario: As a guest, I can access Footer page through Home page
#    Then a guest can see Footer at Home page

   @QADBD-143 @footer
   Scenario: As a guest, I can access content menu Quick Links on Footer
   Then a guest can see Quick Links menu

   @QuickTestDrive
   Scenario: As a guest, I can access Test Drive Page through Menu Quick Links on footer
   When a guest try to access Test Drive Page through Menu Quick Links on footer
   And a guest try to login using email 'aci66v@gmail.com' and password 'baby134137' to access Test Drive page
   Then a guest can access Test Drive Page

   @QuickBookingService
   Scenario: As a guest, I can access Booking Service Page through Menu Quick Links on footer
   When a guest try to access Booking Service Page through Menu Quick Links on footer
   And a guest try to login using email 'aci66v@gmail.com' and password 'baby134137' to access Test Drive page
   Then a guest can access Booking Service Page
