Feature: Test Drive Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA263 @Checkout @fields
   Scenario: As a customer, I try to Request Test Drive without fill any fields at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input '' '' '' '' '' in Test Drive Checkout page
    Then a customer can see error validation

   @DAYTONA263 @Checkout @email
   Scenario: As a customer, I try to input uncorrect email at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input 'Test' 'Baby' 'aci66v' '85764492623' 'negative test' in Test Drive Checkout page
    Then a customer can see error email validation

   @DAYTONA263 @Checkout @maximum
   Scenario: As a customer, I try to input more than maximum characters in any fields at Checkout page
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'negative test' on Catatan
    And I input 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,.' 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com' '85764492623' 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, too' in Test Drive Checkout page
    Then a customer can see maximum error validation