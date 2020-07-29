Feature: Test Drive Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA263 @Checkout @HP @null
   Scenario: As a customer, I try to input null in Number field at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input 'Test' 'Baby' 'aci66v@gmail.com' '085764492623' 'negative test' in Test Drive Checkout page
    Then a customer can see number error validation

   @DAYTONA263 @Checkout @HP @less
   Scenario: As a customer, I try to input less than 8 in Number field at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input 'Test' 'Baby' 'aci66v@gmail.com' '8576449' 'negative test' in Test Drive Checkout page
    Then a customer can see number error validation

   @DAYTONA263 @Checkout @HP @more
   Scenario: As a customer, I try to input more than 8 in Number field at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input 'Test' 'Baby' 'aci66v@gmail.com' '857644926233333' 'negative test' in Test Drive Checkout page
    Then a customer can see number error validation