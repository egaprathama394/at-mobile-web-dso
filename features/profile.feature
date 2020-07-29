Feature: Profile

   Background: Open DSO Home page
   Given a guest is at DSO Home page
   
   @profile @DAYTONA @smoke @EA001
   Scenario: As a guest, I can update account information
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '81456155090'
   And user try to change values of region and city element 'Jawa Tengah' 'Kabupaten Temanggung'
   And user try to change value of Alamat Lengkap 'Jalan-jalan'
   And user can submit the information updated
   Then user can verify that his information has been changed

   @profile @DAYTONA @smoke @EA002
   Scenario: As a guest, I can delete all item value account information
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user can delete all item value
   And user can see error message below some fields 'Field ini diperlukan'
   And user can not submit the information updated
   Then user can verify that his information has not been changed

   @profile @DAYTONA @smoke @EA003
   Scenario: As a guest, I can update phonenumber with less than 8 chars
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   And a guest can Login successfully using akun 'tester dso'
   And user can access my account page
   And user try to change Detail Profile 'Reni' 'dso' 'pilihtanggal'
   And user try to change value of 'phonenumber' element '8145'
   Then user can see error message below 'phonenumber' field 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'