Feature: Create recipe feature
    As a user
    I want to create a recipe
    So that I can store and share with other users


    Background:
        Given the user has signed up with the following details
            | username         | user     |
            | password         | aaaa1234 |
            | confirm_password | aaaa1234 |
        And the user has logged in with username "user" and password "aaaa1234"
        And the user has created his/her own space named "User's Space"


    Scenario: user creates a new recipe
        When the user creates new recipe "Masala tea recipe(test)"
        And the user saves and view the following recipe details
            | Description      | This is a test recipe for masala tea                      |
            | Preparation_time | 2                                                         |
            | Waiting_time     | 10                                                        |
            | Servings         | 4                                                         |
            | Servings_text    | cup                                                       |
            | Image            | masalachai.jpeg                                           |
            | Step_name        | Boil water with tea and spices                            |
            | Instructions     | Add the spices and tea with the water and wait until boil |
        Then the user should be redirected to the "Masala tea recipe(test)" recipe page