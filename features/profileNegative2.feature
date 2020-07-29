Feature: Profile

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @profile @DAYTONA @smoke @EA007
   Scenario: As a guest, I can update region value with Papua Nugini
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '81456155090'
   And user try to change values of 'region' 'Papua Nugini'
   Then a user can see wording 'region' on Account Page with message Tidak ada hasil yang ditemukan

   @profile @DAYTONA @smoke @EA008
   Scenario: As a guest, I can update region value with Papua Nugini
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '81456155090'
   And user try to change values of 'region' 'Jawa Timur'
   And user try to change values of 'city' 'Surakarta'
   Then a user can see wording 'city' on Account Page with message Tidak ada hasil yang ditemukan

   @profile @DAYTONA @smoke @EA009
   Scenario: As a guest, I cancel my account update
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change value of 'firstname' element 'Reni'
   And user can cancel to submit the information updated
   Then user can verify that his 'firstname' value is still 'tester'