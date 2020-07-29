Feature: Booking Service

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @booking-service @DAYTONA-427 @smoke @BS001
   Scenario: As a guest, I can acces Booking Service Page from Burger Button
   When a guest try to login using email 'renni0811@gmail.com' and password 'rahasia2019'
   Then a guest can Login successfully using akun 'tester dso'
   When a user try to access Booking Service page
   And a user can see Booking Service Content

   @booking-service-homepage @DAYTONA-427 @smoke @BS002
   Scenario: As a guest, I can acces Booking Service Page from Homepage
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill Detail Servis 'AYLA' '2020' 'QA123DSO' '1.000 KM' 'Catatan/Keluhan' 'Astra Daihatsu Sunter' 'pilihtanggal' 'pilihjam'
   And a user try to fill Detail informasi Pemesan 'Sarah' '80989999' 'sarah.ramadhani24@gmail.com'
   And a user try to input OTP '180794'
   And a user try to submit Booking Service form
   Then a user can see Thank You Page for Booking Service
   
@booking-service-homepage-negative-test @DAYTONA-427 @smoke @BS003
   Scenario: As a guest, I can acces Booking Service and enter false OTP Code
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill Detail Servis 'AYLA' '2020' 'QA123DSO' '1.000 KM' 'Catatan/Keluhan' 'Astra Daihatsu Sunter' 'pilihtanggal' 'pilihjam'
   And a user try to fill Detail informasi Pemesan 'Sarah' '80989999' 'sarah.ramadhani24@gmail.com'
   And a user try to input false OTP code '123456'
   And a user try to submit Booking Service form
   And a user try to request OTP Code
   And a user try to input OTP '180794'
   And a user try to submit Booking Service form
   Then a user can see Thank You Page for Booking Service