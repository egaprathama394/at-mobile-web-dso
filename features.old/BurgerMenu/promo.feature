Feature: Promo

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @promo @QADBD-150
   Scenario: As a guest, I can access Promo Menu through Home page
   Then a guest can see Promo menu Content
   