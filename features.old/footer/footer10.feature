Feature: footer10

   Background: Open DSO Home page
   Given a guest is at DSO Home page

#    Scenario: As a guest, I can access Footer page through Home page
#    Then a guest can see Footer at Home page

   Scenario: As a guest, I can access Kalkulator Kredit Page through Menu Quick Links on footer
   When a guest try to access Kalkulator Kredit Page through Menu Quick Links on footer
   Then a guest can access Kalkulator Kredit Page

   Scenario: As a guest, I can access Lokasi Outlet Page through Menu Quick Links on footer
   When a guest try to access Lokasi Outlet Page through Menu Quick Links on footer
   Then a guest can access Lokasi Outlet Page
