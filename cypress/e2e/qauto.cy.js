/* eslint-disable no-undef */

describe('Some test', () => {
  beforeEach(() => {
    //   cy.login();
    // cy.visit('https://qauto.forstudy.space/panel/garage', {
    //   failOnStatusCode: false,
    //   auth: {
    //     username: 'guest',
    //     password: 'welcome2qauto',
    //   },
    // });
    // cy.getCookie('sid').then((cookie) => {
    //   const cookieVariable = cookie.value;
    //   cy.writeFile('jjj.log', cookieVariable);
    //   Cypress.env('cookie_sid', cookieVariable);
    // });
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it.skip('open main page2', () => {
    // cy.getCookie('sid').should('exist');
    // cy.setCookie(
    //   'sid',
    //   's%3AV1B_Hg7qVxYg1sFl-TH-hJ_34JwlKoKm.CmBerbISAqD1Y0VlSM7hV0tmb2SctaXqUXUom%2BZ3t7w',
    // );
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    // cy.getCookie('sid').then((cookie) => {
    //   const cookieVariable = cookie.value;
    //   cy.writeFile('jjj.log', cookieVariable);
    //   Cypress.env('cookie_sid', cookieVariable);
    // });
  });

  it.skip('open main page 3', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage');
    // const reuseCoookie = Cypress.env('cookie_sid');
    // cy.setCookie('sid', reuseCoookie);
  });

  it('check, if car is added', () => {
    cy.get('nav.sidebar.d-flex.flex-column a').eq(0).click();
    cy.xpath("//button[text()='Add car']").click();
    cy.get('select#addCarBrand').select('Audi');
    cy.get('select#addCarModel').select('TT');
    cy.get('input#addCarMileage').type('0');
    cy.xpath("//button[text()='Add']").click();
    cy.get('p.car_name.h2').should('contain', 'Audi TT');
  });
});
