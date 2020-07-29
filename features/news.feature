Feature: Berita

    Background: Open DSO Home Page
    Given a guest is at DSO Home page

    Scenario: As a guest, I can access Berita Menu through Home Page
    When a guest click Burger Menu content
    And a guest click Berita Menu content
    Then a guest can access Berita Menu content
    Then a guest try to search using Search Bar Menu 'berita yosua'
    Then a guest can access Berita Menu Detail