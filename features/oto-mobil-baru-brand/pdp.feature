Feature: PDP

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @pdp @DAYTONA-406 @smoke @DSO-111
   Scenario: As a guest, I can access PDP through Home page
   When a guest try to access PDP
   Then a user can see PDP