Feature: Test Drive 

Background: Open DSO Home page
   Given a guest is at DSO Home page

   @testdrive @QADBD-181
   Scenario: As a guest, I can Test Drive Outlet successfully 
   When a user try to login using email 'yosuasiagian95@gmail.com' and password 'alice123'
    When a guest want access test drive
    And I input 'SIGRA M.T' 'Astra Daihatsu Serang' 'date' 'time' 'tidak ada' in testdrive outlet page
    And I want click Lanjutkan
    And I input 'Yosua' 'Siagian' 'siagian@mailinator.com' '80989999' 'tidak ada' in checkout page
    Then I can see thankyou page of test drive
