Feature: Login

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @login @DAYTONA-409 @smoke
   Scenario: As a guest, I can access Login page through Home page
   When a guest try to access Login page
   Then a guest can see Login page

   @login @DAYTONA-409 @smoke
   Scenario: As a guest, I can Login successfully using email
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   Then a guest can Login successfully using akun 'tester dso'
   And user can access my account page