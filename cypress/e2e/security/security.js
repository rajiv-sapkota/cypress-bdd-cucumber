import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertUtils } from "../../utils/commonUtils";


When("i try to access products page",()=>{
    cy.visit("https://www.saucedemo.com/inventory.html",{failOnStatusCode:false})
})
Then("i should be in login page and i should see error message for products",()=>{
    assertUtils.assertCurretntUrl('https://www.saucedemo.com/')
    assertUtils.assertErrorMessage('[data-test=error]',"Epic sadface: You can only access '/inventory.html' when you are logged in.")
})

When("i try to access cart page",()=>{
    cy.visit("https://www.saucedemo.com/cart.html",{failOnStatusCode:false})
})
Then("i should be in login page and i should see error message for cart",()=>{
    assertUtils.assertCurretntUrl('https://www.saucedemo.com/')
    assertUtils.assertErrorMessage('[data-test=error]',"Epic sadface: You can only access '/cart.html' when you are logged in.")
})


When("i try to access checkout page",()=>{
    cy.visit("https://www.saucedemo.com/checkout-step-one.html",{failOnStatusCode:false})
})
Then("i should be in login page and i should see error message for cart",()=>{
    assertUtils.assertCurretntUrl('https://www.saucedemo.com/')
    assertUtils.assertErrorMessage('[data-test=error]',"Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.")
})





