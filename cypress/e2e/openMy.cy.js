/* eslint-disable no-undef */
describe('template spec', () => {
  // share the solution
  // before(() => {
  //   cy.visit('https://www.guru99.com/');
  //   cy.get('body').then(($body) => {
  //     if (
  //       $body.find('#sp_message_iframe_1091096').then(($modalEl) => {
  //         Cypress.dom.isVisible($modalEl);
  //       })
  //     ) {
  //       cy.get('button[aria-label="Accept"]').click();
  //     } else {
  //       console.log('Modal is not visible');
  //     }
  //   });
  // });

  // before(() => {
  //   cy.visit('https://www.guru99.com/');
  //   cy.get('a[data-lasso-id="147432"]').click();

  //   cy.get('#sp_message_iframe_1091096')
  //     .eq(0)
  //     .should('be.visible')
  //     .then(($iframe) => {
  //       const $body = $iframe.contents().find('body');
  //       cy.wrap($body).find('button[aria-label="Accept"]').click();
  //     });
  // });

  beforeEach(() => {
    cy.visit('https://www.guru99.com');
  });
  it('open website', () => {
    cy.get('.thick-heading').should('have.text', 'Tutorials Library');
  });

  it.skip('click the software testing link', () => {
    // cy.visit('www.guru99.com');
    cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(
      ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
      { timeout: 3000 },
    ).should('be.visible');
    cy.get(
      ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
    ).click();
  });

  it.skip('selecting unique elements', () => {
    cy.get('ul.menu1').eq(5).find('a[title="SAP Basis"]');
    cy.contains('SAP Bas').should('be.visible');
    cy.contains('a', 'SAP Basis');
    cy.get('a').contains('SAP Basis');
    // search in header
    cy.get('#main-header #primary-menu').children();
  });

  it('typing data into search field', () => {
    cy.get('input[name="search"]', { timeout: 10000 }).as('inputSearch');
    cy.get('@inputSearch').should('be.visible').type('SAP Basis{enter}');
  });
  it('click search icon on main page', () => {
    // cy.get('@inputSearch').should('be.visible');
    cy.get('span.search-toggle-icon').click();
    cy.get('input[type="search"]')
      .should('be.visible')
      .clear()
      .type('SAP Basis{enter}');
    cy.url().should('include', '/search_gcse?q=SAP+Basis');
  });
  it('check SAP text elements', () => {
    // cy.get('ul.menu1').eq(5).filter('SAP').should('have.length', 12);
    cy.get('ul.menu1')
      .eq(5)
      .each(($item) => {
        cy.wrap($item).find('a').should('be.visible').contains('SAP');
      });
    cy.get('ul.menu1 li a')
      .filter(':contains("SAP MM")')
      .should('have.length', 1);
  });
});
