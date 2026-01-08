class ProductPage{
     assertCartCount(){
        cy.get(".shopping_cart_badge").should("have.text","1")
     }
}