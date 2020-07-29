Feature: Register

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @register @DAYTONA-433 @smoke @REG001
   Scenario: As a guest, I can access Register page through Home page
   When a guest try to access Register page
   Then a guest can see Register page

   @register @DAYTONA-433 @smoke @REG002
   Scenario: As a guest, I can Register successfully using email
   When a guest try to Register using random email
   Then a guest input data Nama lengkap: 'Renni Test Mobile Web'
   Then a guest input data No handphone: '81903150019'
   Then a guest input data password: 'rahasia2020'
   Then user can register successfully