Feature: Login

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @login @QADBD-153
   Scenario: As a guest, I can access Login page through Home page
   When a guest try to access Login page
   Then a guest can see Login page

   Scenario: As a guest, I can Login successfully using email
   When a guest try to login using email 'yosuasiagian95@gmail.com' and password 'alice123'
   Then a guest can Login successfully

   

   