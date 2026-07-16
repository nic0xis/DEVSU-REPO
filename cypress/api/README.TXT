PROYECTO: PRUEBAS AUTOMATIZADAS E2E Y API

Autor:
Esteban Andrade

Herramientas utilizadas:
- Cypress 15.18.1
- Node.js
- JavaScript

--------------------------------------------------
REQUISITOS
--------------------------------------------------

- Node.js instalado
- Git
- Google Chrome

--------------------------------------------------
INSTALACIÓN
--------------------------------------------------

1. Clonar el repositorio:

git clone https://github.com/nic0xis/DEVSU-REPO.git

2. Ingresar al proyecto:

cd DEVSU-REPO

3. Instalar dependencias:

npm install

--------------------------------------------------
EJECUCIÓN DE LAS PRUEBAS
--------------------------------------------------

Abrir Cypress:

npx cypress open

Prueba E2E:

cypress/e2e/purchase.cy.js

Prueba API:

cypress/api/petstore.cy.js

También es posible ejecutar desde consola:

Prueba E2E

npx cypress run --spec "cypress/e2e/purchase.cy.js"

Prueba API

npx cypress run --spec "cypress/api/petstore.cy.js"

--------------------------------------------------
DESCRIPCIÓN
--------------------------------------------------

Prueba E2E:

- Agregar dos productos al carrito.
- Visualizar el carrito.
- Checkout como Guest.
- Completar el flujo de compra.

Prueba API:

- Crear usuario.
- Buscar usuario.
- Actualizar nombre y correo.
- Buscar usuario actualizado.
- Eliminar usuario.
- Verificar eliminación.

Repositorio GitHub:

https://github.com/nic0xis/DEVSU-REPO