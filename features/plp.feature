Feature: PLP 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @PLP001
   Scenario: As a guest, I can see PLP
   When a guest try to access PLP
   Then a user can see PLP
   
   @DAYTONA-408 @PLP002
   Scenario: As a guest, I can reset car wishlist on Wishlist Page
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   When a guest try to access PLP
   And a customer try to like '1' car on PLP
   And a customer try to access Wishlist page
   And a customer delete list can on Wishlist page
   Then a customer can see Total: '0' Kendaraan

   @DAYTONA-408 @PLP003
   Scenario: As a guest, I can put car to wishlist on PLP
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   When a guest try to access PLP
   And a customer try to like '1' car on PLP
   And a customer try to like '2' car on PLP
   And a customer try to like '5' car on PLP
   And a customer try to access Wishlist page
   Then a customer can see there are '3' cars at Wishlist page
