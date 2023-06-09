Feature: Create recipe feature
    As a user
    I want to create a recipe
    So that I can store and share with other users


    Background:
        Given the user has registered with username "user" and password "aaaa1234"
        Given the user has logged in with username "user" and password "aaaa1234"
        And the user has created his/her own space named "User's Space"


    Scenario: user creates a recipe for first time
        When the user selects create recipe button
        And the user types recipe name "Masala tea recipe(test)"
        And the user selects save button
        And the user fills the following recipe data
            | Description      | This is a test recipe for masala tea |
            | Preparation_time | 2                                    |
            | Waiting_time     | 10                                   |
            | Servings         | 4                                    |
            | Servings_text    | cup                                  |
            | image            | masalachai.jpeg                      |
        And the user adds step named "Boil water with tea and spices"
        And the user adds time "5" required for step
        And the user adds follwing recipe ingredients
            | amount | unit | name   |
            | 100    | ml   | water  |
            | 2      | g    | spices |
            | 10     | g    | tea    |
        And the user adds the instuctions "Add all the ingridients together and wait until boil"
        And the user adds another step named "Add milk and boil for sometime"
        And the user adds time "5" required for step
        And the user adds follwing recipe ingredients
            | amount | unit | name |
            | 200    | ml   | milk |
        And the user adds the instuctions "Add the milk and again bring to boil and simmer for 2 mins while strirring at same time and serve on cups"