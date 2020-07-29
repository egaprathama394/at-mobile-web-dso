Feature: Booking Service Negative 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @field-model @BS007
   Scenario: As a customer, I can't see any suggestion if I search other Model
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill 'Suzuki' at 'model' dropdown on Detail Servis
   Then a user can see wording 'model' with message Tidak ada hasil yang ditemukan

   @DAYTONA-724 @field-tahun @BS008
   Scenario: As a customer, I can't see any suggestion if I search 2021 at Tahun dropdown
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill '2021' at 'tahun' dropdown on Detail Servis
   Then a user can see wording 'tahun' with message Tidak ada hasil yang ditemukan


   @DAYTONA-724 @3-main-fields @BS009
   Scenario: As a customer, I can't see any suggestion if I search 55.000 KM at Kategori Servis dropdown
   When a guest can see Homepage Content
   And a user try to access Booking Service page from Homepage
   And a guest must login using email 'renni0811@gmail.com' and password 'rahasia2019' before go to Booking Service Page
   And a user can see Booking Service Content
   And a user try to fill Detail Servis 3 fields with 'AYLA' '2020' 'QA123DSO'
   And a user try to fill '55.000KM' at 'kategori' dropdown on Detail Servis
   Then a user can see wording 'kategori' with message Tidak ada hasil yang ditemukan