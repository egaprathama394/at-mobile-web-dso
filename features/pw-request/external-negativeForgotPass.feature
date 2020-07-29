Feature: Forget Password Negative Test

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @forgetPass @DAYTONA-437 @smoke
   Scenario: As a guest, I can't forgot password using non registered email
   When a guest try to login using non registered email 'rere@gmail.com'
   Then display error message unregistered email 'Email tidak terdaftar'

   @forgetPass @DAYTONA-437 @smoke
   Scenario: As a guest, I can't forgot password invalid email format
   When a guest try to forget password using invalid email format 'rere'
   Then display error message invalid email 'Mohon memasukkan ID email yang valid'