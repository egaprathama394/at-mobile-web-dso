Feature: Header

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @header @DAYTONA-401 @smoke
   Scenario: As a guest, I can see header at Home page
   Then a guest can see Header

   @header @DAYTONA-401 @smoke
   Scenario: As a guest, I can click logo astra and redirect to homepage
   When a guest can access PLP
   Then a guest click logo astra
   Then a guest can see Homepage