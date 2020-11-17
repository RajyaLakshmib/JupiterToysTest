 Feature: Jupiter Toys Webpage validation 
 @TestCase1
 Scenario: Testcase1 Contact page mandatory field validation
  Given user connect to Jupitor Toys home page
  And from the home page go to contact page
  When click submit button
  Then validate errors
  |Forename            |Email            |Message|
  |Forename is required|Email is required|Message is required|
  And populate mandatory fields
  | Forename | Email             |Message |
  | Rajya    | abc@planit.net.au |NA      |
  And validate errors are gone
  And browser close  