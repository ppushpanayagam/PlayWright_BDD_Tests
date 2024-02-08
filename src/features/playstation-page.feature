Feature: Verify Playstation page carousel slides

Background: Successfully log into Sony application
    Given the user log into Sony application with valid credentials 
    When the user select playstation from the menu
    Then the user should be redirected  to playstation application
  
  Scenario: Successfully verify expected carousel slides are displayed
    When the user on the playstation home page
    Then the carousel slides should be displayed as expected 
  
  Scenario Outline: Successfully verify banner displayed based on carousel slides selection
    Given the user on the playstation home page
    When the user select the "<slide>" only by one
    Then the user should see the corresponding banner for selected "<slide>"
    Examples:
        | slide                    |
        | Tekken 8 keyart          |
        | February LNY Sale keyart |
  
  Scenario: Successfully verify the slide selection and non selected slides
    Given the user on the playstation home page
    When the user select a specific "Tekken 8 keyart" from carousel slides
    Then the user should see the corresponding banner for the selected slide
    And the user should see the other slides should not be selected
  
  Scenario: Successfully verify auto rotation of the carousel slides
    When the user on the playstation home page
    Then the carousel slides should move one by one automatically