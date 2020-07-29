Feature: Booking Service Negative 3

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-724 @field-category-service @BS010
   Scenario: As a customer, I can see validation if I input number at Nama Lengkap field
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill '123' at 'namalengkap' on Detail Informasi Pemesan
   # Then a user can see wording below 'nama' : 'Kolom ini hanya boleh berisi huruf alphabet'

   @DAYTONA-724 @field-category-service @BS011
   Scenario: As a customer, I can see validation if I input an invalid email at Email field
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill 'aci66v' at 'email' on Detail Informasi Pemesan
   # Then a user can see wording below 'email' : 'Mohon masukkan alamat email yang benar'


   @DAYTONA-724 @field-category-service @BS012
   Scenario: As a customer, I can see validation if I input an OTP at OTP field
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill Detail Servis 'AYLA' '2020' 'QA123DSO' '1.000 KM' 'Catatan/Keluhan' 'Astra Daihatsu Sunter' 'pilihtanggal' 'pilihjam'
   And a user try to fill Detail informasi Pemesan 'Baby' '80989999' 'aci66v@gmail.com'
   And a user try to input OTP '123123'
   And a user try to submit Booking Service form
   Then a user can see wording below 'otp' : 'OTP tidak valid'