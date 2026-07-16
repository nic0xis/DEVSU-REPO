class HomePage {

    visit() {
        cy.visit("/");
    }

    searchProduct(product) {
        cy.get('input[name="search"]').clear().type(product);
        cy.get('button.btn.btn-default.btn-lg').click();
    }

    addFirstProductToCart() {
        cy.contains("Add to Cart").first().click();
    }

    openCart() {
        cy.get('#cart > button').click();
        cy.contains("View Cart").click();
    }

}

export default new HomePage();