Feature: Test Drive 

Background: Open DSO Home page
   Given a guest is at DSO Home page

   @testdrive @DAYTONA-426 @smoke
   Scenario: As a guest, I can access testdrive page through Home page
   When a guest try to access testdrive page
   Then a guest can see Login page that redirect to testdrive
   Then a guest login using email 'renni0811@gmail.com' and password 'rahasia2019'
   Then a user can see testdrive page