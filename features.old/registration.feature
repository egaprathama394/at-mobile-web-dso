Feature: Register

   Background: Open DSO Home page
   Given a guest is at DSO Home page

  @register @smoke
    Scenario: as a guest,i can Regist successfully
    When a guest try to access regist page
    And a guest try to fill all regist field 'baby' 'syifa' '81299459292' 'babysyifa123' 'babysyifa123'
    Then a guest can see success registration notice text at homepage

