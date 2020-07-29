Feature: Forget Password

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @forgetPass @DAYTONA-437 @smoke
   Scenario: As a guest, I can access Forget Password page through Home page
   When a guest try to access Forget Password page
   Then a guest can see Forget Password page

   @forgetPass @DAYTONA-437 @smoke
   Scenario: As a guest, I can forgot password successfully using registered email
   When a guest try to forget password using email 'renni0811@gmail.com'
   Then a guest can forget password successfully