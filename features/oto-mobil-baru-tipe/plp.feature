Feature: PLP

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @plp @DAYTONA-404 @smoke
   Scenario: As a guest, I can access PLP through Home page
   When a guest try to access PLP
   Then a user can see PLP

   @plp @DAYTONA-404 @smoke
   Scenario: As a guest, I can wishlist car through PLP
   When a guest can access PLP
   Then a guest can click wishlist a car
   Then a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019'
   Then a user can access PLP
   Then a user can see that car at wishlist page
   Then a user can undo the wishlist car
