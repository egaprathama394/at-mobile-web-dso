Feature: Outlet

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @outlet @QADBD-152
   Scenario: As a guest, I can access Outlet Menu through Home page
   Then a guest can see Outlet menu Content
   