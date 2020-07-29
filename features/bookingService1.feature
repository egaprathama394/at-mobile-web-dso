Feature: Booking Service Negative 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-724 @sent-otp @BS004
   Scenario: As a customer, I can see validations if I don't input any fields and directly click button KIRIM KODE
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to click button KIRIM KODE
   Then a user can see validation 'Field ini diperlukan' at any fields

   @DAYTONA-724 @field-category-service @BS005
   Scenario: As a customer, I can't see any suggestion if I directly click Kategori Servis dropdown
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try click Kategori Servis dropdown on Detail Servis
   Then a user can see wording Kategori Servis

   @DAYTONA-724 @field-jam @BS006
   Scenario: As a customer, I can't see any suggestion if I directly click Jam dropdown
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try click Jam dropdown on Detail Servis
   Then a user can see wording 'Pilih Jam'