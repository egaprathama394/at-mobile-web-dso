Feature: Register negative test

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @register @DAYTONA-433 @REG009
   Scenario: As a guest, I can not Register if input Password field using invalid format
   When a guest try to Register using random email 
   Then a guest input data No handphone: '81903150019'
   Then a guest input field Password using invalid format more than 8 chars but no numeric char
   Then a guest cannot click button Daftar

   @register @DAYTONA-433 @REG010
   Scenario: As a guest, I can not Register using inactive email
   When a guest try to Register using email: 'rere@mailinator.com'
   Then a guest input data Nama lengkap: 'Renni Test Mobile Web'
   Then a guest input data No handphone: '81903150019'
   Then a guest input data password: 'rahasia2020'
   Then a guest will see notif at homepage