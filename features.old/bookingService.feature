Feature: bookingService

   Background: Open DSO Home page
   Given a guest is at DSO Home page

     @bookingService @QADBD-140
    Scenario: As a guest, I cannot access bookingService page 
    When a guest try to access bookingService page
    Then a guest can login page

     @bookingService @QADBD-140b
     Scenario: As a user, I can fill all field in bookingService page 
    When a user try to fill all field in bookingService page
    And login using email 'yosuasiagian95@gmail.com' and passwordd 'alice123'
    And i input 'AYLA' '2018' for model and year
    And i input 'B123DSO' '1.000 KM' for plat and katserv
    And i input 'Astra Daihatsu Sunter' 'firstavailabledate' for outlet and date
    And i input 'waktuService' 'tidak ada' for time and note
    And i click Lanjutkan
    And i change phone number '80989999'
    And i click Lanjutkan2
    And i input '180794' in otp page
    Then i see success page
    
  
