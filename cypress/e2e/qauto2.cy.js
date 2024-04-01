/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
/// <reference types="cypress" />
import GaragePage from './pages/garage.js';
import { mileage } from '../fixtures/mileage.js';

describe('tests for hillel auto', () => {
  const garagepage = new GaragePage();
  beforeEach(() => {
    // const BaseUrl1 = Cypress.env('qaQautoTestingUrl');
    const BaseUrl1 = Cypress.env('hostQa');
    Cypress.config('baseUrl', BaseUrl1);
    cy.loginWithLegacyCreds();
  });

  it('check the success msg in modal', () => {
    cy.get('div.alert-success p').contains(
      'You have been successfully logged in',
    );
    // cy.matchImageSnapshot();
  });

  it('intercept usage', () => {
    // cy.intercept('GET', '/api/cars').as('getCars');
    cy.intercept('GET', '/api/cars', {
      statusCode: 200,
      fixture: 'example.json',
    });
    cy.get('[routerlink="expenses"]').click();
    // cy.pause();
    // cy.get('@getCars').its('response.statusCode').should('eq', 200);
  });

  it('request usage', () => {
    cy.wait(1000);
    cy.getCookie('sid').then((cookie) => {
      const cookieValue = cookie.value;
      cy.request({
        method: 'POST',
        url: '/api/cars',
        body: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 2024,
        },
        headers: {
          Cookie: `sid=${cookieValue}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(201);
        // expect(response.body).to.have.property('data[id]');
        cy.writeFile('cypress/fixtures/response.json', response.body);
      });
    });
  });

  it('check the garage page opened', () => {
    cy.get('.panel-page h1').should('have.text', 'Garage');
    cy.reload();
  });

  it.skip('adding car', () => {
    cy.wait(1000);
    cy.get('a[routerlink="garage"].-active').should('be.visible');
    // click add car
    garagepage.addCarButton().should('be.visible').click();
    cy.get('h4.modal-title').should('have.text', 'Add a car');
    cy.get('input#addCarMileage').click();
    cy.get('#addCarBrand').select('BMW');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Mileage cost required');
    cy.get('input#addCarMileage').clear().type('30000');
    cy.get('.modal-footer .btn-primary').click();
  });

  it('check the car data', () => {
    // cy.get('.car-body input[name="miles"]')
    //   .first()
    //   .should('have.text', '30000');
    cy.get('button.btn-success')
      .first()
      .should('have.css', 'background-color', 'rgb(92, 184, 92)');
    cy.get('img.car-logo_img')
      .first()
      .should(
        'have.attr',
        'src',
        'https://qauto.forstudy.space/public/images/brands/audi.png',
      );
  });

  // eslint-disable-next-line no-restricted-syntax
  // for (const { id, mileageVal } of mileage) {
  //   it(`${id} creating car with mileage`, () => {
  //     garagepage.addCarButton().should('be.visible').click();
  //     cy.get('input#addCarMileage').clear().type(`${mileageVal}`);
  //     cy.get('.modal-footer .btn-primary').click();
  //     cy.get('div.alert-success p'); // msg for successfully added car
  //   });
  // }

  it('use conditional', () => {
    cy.wait(1000);
    cy.get('a[routerlink="expenses"]').should('be.visible');
    cy.get('body').then(($body) => {
      if (
        $body.find('a[routerlink="expenses"]').filter(':contains("Services")')
      ) {
        cy.get('a[routerlink="expenses"]').click();
        console.log('clicked on the link services');
      } else {
        $body
          .find('a[routerlink="expenses"]')
          .filter(':contains(" Fuel expenses ")');
        console.log('clicked on the link fule expenses');
        cy.get('a[routerlink="expenses"]').click();
      }
    });
  });
});
