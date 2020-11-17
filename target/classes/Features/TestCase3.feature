 Feature: Jupiter Toys Webpage validation 
 
  @TestCase3
  Scenario: Testcase3 Contact page error validation on mandatory fields by giving invalid data
  Given user connect to Jupitor Toys home page
  And from the home page go to contact page
   #with invalid data
   When populate mandatory fields
  | Forename | Email   |Message |
  |*         | abc@123 |~~      |
  Then validate errors
  | Forename | Email                      |Message |
  |          | Please enter a valid email |        |
  And browser close  