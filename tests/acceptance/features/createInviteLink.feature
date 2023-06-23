Feature: create invite link
  As a user
  I want to add user in my space
  So that I can share receipes with them

  Scenario: super user creates invite link to add user in his/her space
    Given the super user has generated the login token
    When the super user creates a invite link
      | email | group |group id| date | reusable |
      | nirajhancy@gmail.com | user | 2| 2029-03-03| false|
    Then status code should be '201'
    And the invite content should be contains email
    And the JSON data of the response should match
"""
{
"type": "object",
"required": [
"error"
],
"properties": {
"error": {
"type": "object",
"required": [
"message"
],
"properties": {
"type": "string",
"enum": ["Unauthorized"]
}
}
}
}
"""
