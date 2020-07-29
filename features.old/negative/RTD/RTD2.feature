Feature: Test Drive Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA263 @Without
   Scenario: As a customer, I try to Request Test Drive without fill any fields 
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And a customer try to submit form at Test Drive page
    Then a customer can see validation

   @DAYTONA263 @Catatan @Minimum
   Scenario: As a customer, I try to Request Test Drive using minimum characters on Catatan
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'aa' on Catatan
    Then a customer can see minimum validation

   @DAYTONA263 @Catatan @Maximum
   Scenario: As a customer, I try to Request Test Drive using maximum characters on Catatan
   When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby134137'
    And I input 'TERIOS M.T' 'Astra Daihatsu Sunter' 'date' 'time' in Test Drive
    And a customer try to submit form with 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus' on Catatan
    Then a customer can see maximum validation