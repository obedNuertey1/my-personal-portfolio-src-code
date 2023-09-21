// @ts-nocheck
beforeEach(()=>{
  cy.visit('https://example.cypress.io/commands/waiting')
});
describe('template spec', () => {
  it('cy.wait', () => {
    // To wait for a specific amount of time or resource to resolve,
    // use the cy.wait() command.
    cy.get('.wait-input1').type('Wait 1000ms after typing');
    cy.wait(1000);
    cy.get('.wait-input2').type('Wait 1000ms after typing');
    cy.wait(1000);
    cy.get('.wait-input3').type('Wait 1000ms after typing');
    cy.wait(1000);
  });
  it('listen to GET to comments/1', ()=>{
    cy.intercept('GET', '**/comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click();

    // wait for GET comments/1
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 400]);
  });
});