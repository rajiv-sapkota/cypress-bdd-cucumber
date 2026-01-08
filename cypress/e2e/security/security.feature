Feature: Route Protection for invalid login attempts

  
  @negative @smoke
  Scenario: access products page without login
    When i try to access products page
    Then i should be in login page and i should see error message for products
  
  @negative @smoke
  Scenario: access cart page without login
    When i try to access cart page
    Then i should be in login page and i should see error message for cart

  @negative @smoke
  Scenario: access checkout page without login
    When i try to access checkout page
    Then i should be in login page and i should see error message for checkout
