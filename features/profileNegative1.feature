Feature: Profile

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @profile @DAYTONA @smoke @EA004
   Scenario: As a guest, I can update phonenumber with more than 12 chars
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '8145790072638819917373654'
   Then user can see error message below 'phonenumber' field 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'
   
   @profile @DAYTONA @smoke @EA005
   Scenario: As a guest, I can update phonenumber with more than 12 chars
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '526385960'
   Then user can see error message below 'phonenumber' field 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'

   @profile @DAYTONA @smoke @EA006
   Scenario: As a guest, I can update phonenumber with more than 12 chars
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '826385960ad^'
   Then user can see error message below 'phonenumber' field 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'