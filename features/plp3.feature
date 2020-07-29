Feature: PLP for Filter

   Background: Open DSO Home page
   Given a guest is at DSO Home page

  @DAYTONA-408 @filter @transmision @PLP007
   Scenario: As a guest, I can filter cars by transmision on PLP
   When a guest try to access PLP
   And a user can see PLP
   # And a guest want to show the cars 'filtered' by 'transmision1000cc'
   # And a guest can excecute Filter
   # Then a guest can see the cars 'filtered' by '9998 cc'

   @DAYTONA-408 @filter @reset @PLP008
   Scenario: As a guest, I can filter cars by transmision on PLP
   When a guest try to access PLP
   And a user can see PLP
   # And a user want to reset filtered List Cars
   # And a guest want to show the cars 'filtered' by 'transmision1200cc'
   # And a guest want to show the cars 'filtered' by 'capacity7people'
   # And a guest want to show the cars 'filtered' by 'categoryManual'
   # And a guest can excecute Filter
   # Then a guest can see the cars 'filtered' by '1197 cc'
   # And  a guest can see the cars 'filtered' by '7 Orang'
   # Then a guest can see the cars 'filtered' by 'Otomatis'