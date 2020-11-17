 Feature: Jupiter Toys Webpage validation 
 
  @TestCase4
  Scenario: Testcase4 Verify shop page items in Cart
  Given user connect to Jupitor Toys home page
  And from the home page go to shop page
   When click buy button 2 times on Funny Cow
   And click buy button 1 time on Fluffy Bunny
   And click the cart menu
  Then verify the items are in the cart
  | ItemName   |NoOfItems|
  | Funny Cow  |2       |
  |Fluffy Bunny|1        |
   And browser close  
  
  
  
 
  