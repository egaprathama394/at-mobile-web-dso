Feature: Rating Booking Service Positive Test

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @BookingService
   Scenario: As a customer, I can give Rating on Booking Service
    When a customer try to access Booking Service through burger menu
    And a customer try to login through Booking Service using email 'aci66v@gmail.com' and password 'baby134137'
    And i input 'TERIOS' '2019' for model and year
    And i input 'B4BYS' '1.000 KM' for plat and katserv
    And i input 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'firstavailabledate' for outlet and date
    And i input 'waktuService' 'test rating booking service' for time and note
    And i click Lanjutkan
    And i change phone number '80989999'
    And i click Lanjutkan2
    And i input '180794' in otp page
    Then i see success page
   #  And i can see success page
   #  And i can see my status order
   #  And i can give rating
   #  Then i can see Thank You message

   @Rating @BS
   Scenario: As a customer, I can give Rating on Booking Service
    When a customer try to access Booking Service through burger menu
    And a customer try to login through Booking Service using email 'aci66v@gmail.com' and password 'baby134137'
    And i can see my status order
    And i can give rating
    Then i can see Thank You message

   @Rating @AkunSaya
   Scenario: As a customer, I can give Rating on Booking Service through Riwayat Servis
    When a customer try to login using email 'aci66v@gmail.com' and password 'baby134137'
    And a customer try to access Riwayat Servis Page through Akun Saya Menu on Burger Menu
    And i can choose my car on Riwayat Servis page
    And i can give rating through Riwayat Servis page
    Then i can see Thank You message