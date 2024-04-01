/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

// full login command
Cypress.Commands.add('loginWithLegacyCreds', () => {
  // const name = Cypress.env('loginName');
  cy.visit('/panel/garage', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
  cy.get('button.header_signin').click();
  cy.get("input[name='email']").type('densf22@gmail.com');
  cy.get("input[name='password']").type('Qwerty+1');
  cy.get('.modal-footer .btn-primary').click();
});

// partial login command
Cypress.Commands.add('login', () => {
  cy.visit('/panel/garage', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
