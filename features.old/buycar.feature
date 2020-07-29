Feature: Buycar

   Background: Open DSO Home page
   Given a guest is at DSO Home page
 
    Scenario: as a guest,i can Buy Car successfully
    When a guest try to login using email 'yosuasiagian95@gmail.com' and password 'alice123'
    When I Filter for choosing Car
    And I choose Sort for choosing Car
    And I want click Minta Penawaran
    And I input 'siagian@mailinator.com' '80989999' 'Yosua' 'Siagian' 'tidak ada' 'Astra daihatsu padang' in checkout page buycar
    And I input '180794' in otp page
    Then I can see thankyou page