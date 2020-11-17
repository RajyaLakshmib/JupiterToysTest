 Feature: Jupiter Toys Webpage validation 
 
  @TestCase2
  Scenario: Testcase2 Successful submission of Contact page details
  Given user connect to Jupitor Toys home page
  And from the home page go to contact page
  And populate mandatory fields
  | Forename | Email             |Message |
  | Rajya    | abc@planit.net.au |NA      |
  When click submit button
  Then validate successful submission message of Rajya
  And browser close  