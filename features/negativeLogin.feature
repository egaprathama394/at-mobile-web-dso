Feature: Login Negative Test Scenario

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @login @DAYTONA-409 
   Scenario: As a guest, I can't Login using unregistered email
   When a guest try to login using unregistered email 'rere@gmail.com' and password 'rahasia2019'
   Then display error message 'Email atau Password yang Anda masukkan salah'

   @login @DAYTONA-409 
   Scenario: As a guest, I can't Login using invalid email format
   When a guest try to login using invailid email format 'rere' and password 'rahasia2019'
   Then display error message 'Masukkan email yang valid.' under the email field

   @login @DAYTONA-409 
   Scenario: As a guest, I can't Login using empty password
   When a guest try to login email 'rere@gmail.com' and empty Password
   Then display error message 'Field ini diperlukan' under the password field
