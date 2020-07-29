Feature: VerifyContentFooter part1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @test
   Scenario: As a guest, I can access Footer page through Home page
   Then a guest can see Footer at Home page
   
   @QADBD-140
   Scenario: As a guest, I can access content menu Astra Daihatsu on Footer
   Then a guest can see content menu Astra Daihatsu on Footer

   @QADBD-141
   Scenario: As a guest, I can access content menu Otomotif on Footer
   Then a guest can see content menu Otomotif on Footer