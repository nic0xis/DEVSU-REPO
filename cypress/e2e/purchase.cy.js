describe('Purchase Flow', () => {

  it('Completa una compra como invitado', () => {

    cy.visit('/');

    // Agregar iPhone
    cy.contains('iPhone')
      .parents('.product-layout')
      .contains('Add to Cart')
      .click();

    cy.contains('Success').should('be.visible');

    // Agregar MacBook
    cy.contains('MacBook')
      .parents('.product-layout')
      .contains('Add to Cart')
      .click();

    cy.contains('Success').should('be.visible');

    // Abrir carrito
    cy.get('#cart > button').click();
    cy.contains('View Cart').click();

    // Verificar productos
    cy.contains('iPhone').should('exist');
    cy.contains('MacBook').should('exist');

    // Checkout
    cy.contains('Checkout').click();

    // Guest Checkout
    cy.get('input[value="guest"]').check({ force: true });
    cy.get('#button-account').click();

    // Datos del cliente
    cy.get('#input-payment-firstname').type('Esteban');
    cy.get('#input-payment-lastname').type('Andrade');
    cy.get('#input-payment-email').type(`esteban${Date.now()}@mail.com`);
    cy.get('#input-payment-telephone').type('0999999999');
    cy.get('#input-payment-address-1').type('Av Siempre Viva 123');
    cy.get('#input-payment-city').type('Quito');
    cy.get('#input-payment-postcode').type('170101');

    cy.get('#input-payment-country').select('Ecuador');

    cy.wait(1000);

    cy.get('#input-payment-zone').select('Pichincha');

    // Guardar datos del invitado
    cy.intercept('POST', '**/index.php?route=checkout/guest/save').as('guestSave');

    cy.get('#button-guest').click();

    cy.wait('@guestSave');

    // Esperar que cargue Delivery Method
    cy.wait(2000);

    // Delivery Method
    cy.get('#button-shipping-method', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    // Esperar que cargue Payment Method
    cy.wait(2000);

    // Aceptar términos
    cy.get('input[name="agree"]', { timeout: 15000 })
      .should('be.visible')
      .check({ force: true });
      cy.wait(3000);

    // Continuar Payment Method
    cy.get('#button-payment-method', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true });

    // Esperar Confirm Order
    cy.wait(3000);

    // Confirmar pedido
    cy.get('#button-confirm', { timeout: 20000 })
      .should('be.visible')
      .click({ force: true });

    // Esperar redirección
    cy.wait(5000);

    // Validar compra exitosa
    cy.url({ timeout: 30000 }).should('include', 'checkout/success');

    cy.get('#content h1', { timeout: 30000 })
      .should('contain', 'Your order has been placed!');

    

  });

});