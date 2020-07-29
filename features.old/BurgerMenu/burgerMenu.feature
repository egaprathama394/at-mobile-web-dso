Feature: BurgerMenu

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @burgerMenu @QADBD-146
   Scenario: As a guest, I can access Burger Menu through Home page
   Then a guest can see Burger Menu Content

   @tipe @QADBD-155
   Scenario: As a guest, I can access Tipe Menu through Home page
   Then a guest can see Tipe Menu Content
   
   @quicklinks @QADBD-161
   Scenario: As a guest, I can access Quick Links through Home page
   Then a guest can see Quick Links Menu Content
