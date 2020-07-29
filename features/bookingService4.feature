Feature: Booking Service Negative 4

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-724 @field-category-service @BS013
   Scenario: As a customer, I can see validation if I input number less than 8 digits at Nomor Handphone
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill '8888' at 'nomorhandphone' on Detail Informasi Pemesan
   Then a user can see wording below 'nomorhandphone' : 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'

   @DAYTONA-724 @field-category-service @BS014
   Scenario: As a customer, I can see validation if I input number more than 13 digits at Nomor Handphone
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill '82345678901234' at 'nomorhandphone' on Detail Informasi Pemesan
   Then a user can see wording below 'nomorhandphone' : 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'