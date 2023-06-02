Feature: Create space as super user
    As a user
    I want to create a space
    So that I can create a recipes


    Background:
        Given user has navigated to the login page
        And user has logged in with username 'user' and password 'aaa1234'
        And user has navigated to the home page

    
    Scenario: user creates a space
        Given user is in space overview page
        When user tries to create a space with name "user's Space"
        And user should get sucess message " You have successfully created your own recipe space. Start by adding some recipes or invite other people to join you. "
    
    
    Scenario: user creates an invalid space
        Given user is in space overview page
        When user tries to create a space with name "user's Space"
        And user should get sucess message "Name already taken."
