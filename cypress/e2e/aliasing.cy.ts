// @ts-nocheck
beforeEach(()=>{
  cy.visit('https://example.cypress.io/commands/aliasing')
});

describe('template spec', () => {
  it('.as() - To alias a route or DOM element for use later, use the .as() command.', () => {
    // The following DOM command chain is unwieldy.
    // To avoid repeating it, let's use '.as()'!
    cy.get('.as-table')
    .find('tbody>tr').first()
    .find('td').first()
    .find('button').as('firstBtn');

    // To reference the alias we created, we place an
    // @ in front of its name
    cy.get('@firstBtn').click()
    cy.get('@firstBtn')
    .should('have.class', 'btn-success')
    .and('contain', 'Changed');

    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment');

    // We have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  })
})