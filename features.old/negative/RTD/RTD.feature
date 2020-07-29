Feature: Test Drive Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA263 @login @unvalid
   Scenario: As a customer, I try to Request Test Drive using unvalid email and not input password
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v' and password ''
    Then a guest can see email and password validation

   @DAYTONA263 @login @email
   Scenario: As a guest, I try to login through Test Drive using wrong email
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci6@gmail.com' and password 'baby134137'
    Then a guest can see error validation

   @DAYTONA263 @login @password
   Scenario: As a guest, I try to login through Test Drive using wrong password
    When a customer try to access Test Drive through burger menu
    And a customer try to login through Test Drive using email 'aci66v@gmail.com' and password 'baby13'
    Then a guest can see error validation