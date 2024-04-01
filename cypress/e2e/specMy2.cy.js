describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.guru99.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .featured-box > :nth-child(2) > :nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})