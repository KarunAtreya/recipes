Feature: create invite link
  As a user
  I want to add user in my space
  So that I can share receipes with them

  Scenario Outline: super user creates invite link to add user in his/her space
    When the super user creates a invite link
      | email   | group_name   | group_id   | valid_until   | reusable   |
      | <email> | <group_name> | <group_id> | <valid_until> | <reusable> |
    Then status code should be '201'
    And the response should contain following information
      | email   | group_name   | group_id   | valid_until   | reusable   |
      | <email> | <group_name> | <group_id> | <valid_until> | <reusable> |
    Examples:
      | email             | group_name | group_id | valid_until | reusable |
      | niraj@gmail.com   | guest      | 1        | 2029-03-03  | false    |
      | prajwal@gmail.com | admin      | 3        | 2029-03-04  | false    |
      | karun@gmail.com   | guest      | 1        | 2029-03-05  | true     |
      | nabin@gmail.com   | user       | 2        | 2029-03-06  | true     |