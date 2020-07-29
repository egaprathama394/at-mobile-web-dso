Feature: PLP for Filter

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @filter @PLP004
   Scenario: As a guest, I can filter cars by price on PLP
   # When a guest try to access PLP
   # And a user can see PLP
   # And a guest want to show the cars 'filtered' by 'price'
   # Then a guest can see the cars 'filtered' by 'price'

   @DAYTONA-408 @filter @category @PLP005
   Scenario: As a guest, I can filter cars by category on PLP
   When a guest try to access PLP
   And a user can see PLP
   # And a guest want to show the cars 'filtered' by 'categoryManual'
   # Then a guest can see the cars 'filtered' by 'Manual'

   @DAYTONA-408 @filter @capacity @PLP006
   Scenario: As a guest, I can filter cars by capacity on PLP
   When a guest try to access PLP
   And a user can see PLP
   # And a guest want to show the cars 'filtered' by 'citycarcapacity'
   # Then a guest can see the cars 'filtered' by '5 Orang'