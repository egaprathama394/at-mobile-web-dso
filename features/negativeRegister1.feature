Feature: Register negative test

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @register @DAYTONA-433 @REG003
   Scenario: As a guest, I can not Register using invalid format email
   When a guest try to Register using invalid format email 'rere'
   Then display error message 'Mohon masukkan alamat email yang benar' under the email field at page register

   @register @DAYTONA-433 @REG004
   Scenario: As a guest, I can not Register if all fields empty
   When a guest try to Register using random email 
   Then do not fill all fields and click button Daftar
   # Then display error message under the field at page register

   @register @DAYTONA-433 @REG005
   Scenario: As a guest, I can not Register if input No phone field using invalid format
   When a guest try to Register using random email 
   Then input field No Phone using invalid No phone format not starting with 8
   Then display error message under the field No Phone at page register