Feature: PLP for Sorting Car List

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @sort @relevant @PLP009
   Scenario: As a guest, I can sort cars by Relevansi on PLP
   When a guest try to access PLP
   And a user can see PLP
   And a guest want to show the cars 'sorted' by 'relevancy'
   Then a guest can see the cars 'sorted' by 'relevancy'
   And a guest can see the 'first' car is 'Astra Daihatsu Ayla'
   And a guest can see the 'last' car is 'Xenia'

   @DAYTONA-408 @sort @price @low @PLP010
   Scenario: As a guest, I can sort cars by price from low to high on PLP
   When a guest try to access PLP
   And a user can see PLP
   And a guest want to show the cars 'sorted' by 'lowtohighPrice'
   Then a guest can see the cars 'sorted' by 'lowtohighPrice'
   And a guest can see the 'first' car is 'Astra Daihatsu Ayla' 
   And a guest can see the 'last' car is 'Terios'

   @DAYTONA-408 @sort @price @high @PLP011
   Scenario: As a guest, I can sort cars by price from high to low on PLP
   When a guest try to access PLP
   And a user can see PLP
   And a guest want to show the cars 'sorted' by 'hightolowPrice'
   Then a guest can see the cars 'sorted' by 'hightolowPrice'
   And a guest can see the 'first' car is 'Terios' 
   And a guest can see the 'last' car is 'Astra Daihatsu Ayla'