Feature: Verify Page at Footer part4

   Background: Open DSO Home page
   Given a guest is at DSO Home page
   
   Scenario: As a guest, I can access Perawatan Berkala Page through Purna Jual on footer
   When a guest try to access Perawatan Berkala Page through Menu Purna Jual on footer
   Then a guest can access Perawatan Berkala Page 

   Scenario: As a guest, I can access Bodi Dan Cat Page through Menu Purna Jual on footer
   When a guest try to access Bodi Dan Cat Page through Menu Purna Jual on footer
   Then a guest can access Bodi Dan Cat Page

   Scenario: As a guest, I can access ERA 24 Jam through Purna Jual on footer
   When a guest try to access ERA 24 Jam Page through Menu Purna Jual on footer
   Then a guest can access ERA 24 Jam Page