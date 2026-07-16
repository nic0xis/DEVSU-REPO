describe('PetStore API', () => {

    const username = `esteban_${Date.now()}`;

    const user = {
        id: Date.now(),
        username: username,
        firstName: 'Esteban',
        lastName: 'Andrade',
        email: 'esteban@mail.com',
        password: '123456',
        phone: '0999999999',
        userStatus: 1
    };

    it('CRUD Usuario', () => {

        // Crear usuario
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: user
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq(user.id.toString());

        });

        // Buscar usuario
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${username}`
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(username);

        });

        // Actualizar usuario

        user.firstName = 'Nicolas';
        user.email = 'nicolas@mail.com';

        cy.request({
            method: 'PUT',
            url: `https://petstore.swagger.io/v2/user/${username}`,
            body: user
        }).then((response) => {

            expect(response.status).to.eq(200);

        });

        // Buscar usuario actualizado

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${username}`
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.firstName).to.eq('Nicolas');
            expect(response.body.email).to.eq('nicolas@mail.com');

        });

        // Eliminar usuario

        cy.request({
            method: 'DELETE',
            url: `https://petstore.swagger.io/v2/user/${username}`
        }).then((response) => {

            expect(response.status).to.eq(200);

        });

        // Verificar eliminación

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${username}`,
            failOnStatusCode: false
        }).then((response) => {

            expect(response.status).to.eq(404);

        });

    });

});