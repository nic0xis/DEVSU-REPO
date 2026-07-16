QA Automation Exercise
Autor: Esteban Andrade

Framework utilizado
-------------------
- Cypress 15.x
- Node.js 24.x

Proyecto
--------
Automatización de una prueba End-to-End sobre OpenCart.

Flujo automatizado
------------------
1. Abrir OpenCart.
2. Agregar iPhone al carrito.
3. Agregar MacBook al carrito.
4. Visualizar el carrito.
5. Verificar ambos productos.
6. Iniciar Checkout.
7. Seleccionar Guest Checkout.
8. Completar datos del cliente.
9. Completar Delivery Method.
10. Aceptar términos y condiciones.
11. Continuar al método de pago.
12. Confirmar la orden.

Requisitos
----------
Node.js
npm

Instalación
-----------

1. Clonar el repositorio

git clone https://github.com/TU_USUARIO/DEVSU-REPO.git

2. Entrar al proyecto

cd DEVSU-REPO

3. Instalar dependencias

npm install

Ejecución

Modo interactivo

npx cypress open

Modo consola

npx cypress run

Estructura

cypress/
 ├── e2e/
 │    └── purchase.cy.js
 ├── fixtures/
 ├── support/
 ├── pages/
 ├── utils/
 └── reports/

Tecnologías

- Cypress
- JavaScript
- Node.js