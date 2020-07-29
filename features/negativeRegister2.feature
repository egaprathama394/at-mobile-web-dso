Feature: Register negative test

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @register @DAYTONA-433 @REG006
   Scenario: As a guest, I can not Register if input No phone field using invalid format
   When a guest try to Register using random email 
   Then input field No Phone using invalid No phone format less than 8 chars
   Then display error message under the field No Phone at page register

   @register @DAYTONA-433 @REG007
   Scenario: As a guest, I can not Register if input No phone field using invalid format
   When a guest try to Register using random email 
   Then input field No Phone using invalid No phone format less than 13 chars
   Then display error message under the field No Phone at page register

   @register @DAYTONA-433 @REG008
   Scenario: As a guest, I can not Register if input Password field using invalid format
   When a guest try to Register using random email 
   Then a guest input data No handphone: '81903150019'
   Then a guest input field Password using invalid format less than 8 chars
   Then a guest cannot click button Daftar