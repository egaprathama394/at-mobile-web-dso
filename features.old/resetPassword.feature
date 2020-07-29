Feature: Reset Password

   Background: Open DSO Home page
   Given a user is at DSO Home page

   @resetpassword-QA170
   Scenario: As a user, I can reset password through Home page
   When a guest try to access Login page
   Then user try to access Login page for reset password
   And user try to reset pasword 'yosuasiagian95@gmail.com'
   Then user can reset password successfully