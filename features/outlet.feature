Feature: Outlet

   Background: Open DSO Home page
   Given a guest is at DSO Home page

    @outlet @DAYTONA @smoke @OL001
   Scenario: As a guest, I can access Outlet page through Home page
   When a guest try to access Outlet page
   Then a guest can see Outlet Content

   @outlet-detail @DAYTONA @smoke @OL002
   Scenario: As a guest, I can access Outlet Detail
   When a guest try to access Outlet page
   Then a guest try to choose First Outlet Detail