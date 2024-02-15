Feature: Generate Accessability report 
    
    Scenario: Generate Accessability report for playstation home page
        Given the user log into Sony application with valid credentials 
        When the user select playstation from the menu
        Then the user inject axe accessibility engine
        And the user generate an accessibility analysis report