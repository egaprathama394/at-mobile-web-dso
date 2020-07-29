Feature: Rating Booking Service Negative Test 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @BSForm
   Scenario: As a customer, I cant see button Berikan Ulasan
    When a customer try to access Booking Service through burger menu
    And a customer try to login through Booking Service using email 'aci66v@gmail.com' and password 'baby134137'
    And i can see my status order is not Closed
    Then i cant see button Berikan Ulasan

   @RatingBS
   Scenario: As a customer, I dont give Rating on Booking Service
    When a customer try to access Booking Service through burger menu
    And a customer try to login through Booking Service using email 'aci66v@gmail.com' and password 'baby134137'
    And i can see my status order
    And i dont give rating
    Then i can see warning wording
    