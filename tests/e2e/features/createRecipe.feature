Feature: Create recipe feature
    As a user
    I want to create a recipe
    So that I can store and share with other users

    
    Background:
        Given the user has registered with username "user" and password "aaaa1234"
        And the user has logged in with username "user" and password "aaaa1234"
        And the user has created his/her own space named "User's Space"
    

    Scenario: user creates a recipe
        When the user selects create recipe button
        And the user types recipe name "MySecretRecipe"
        And the user selects save button