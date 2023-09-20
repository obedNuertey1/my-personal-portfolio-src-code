// @ts-nocheck
beforeEach(()=>{
  cy.visit('https://example.cypress.io/commands/navigation')
});

describe('template spec', () => {
  it('cy.go()', () => {
    // To go back of forward in the browser's history, use the cy.go() command.
    cy.location('pathname').should('include', 'navigation');
    cy.go('back');
    cy.location('pathname').should('not.include', 'navigation');
    cy.go('forward');

    // clicking back
    cy.go(-1);
    cy.location('pathname').should('not.include', 'navigation');

    // clicking forward
    cy.go(1);
    cy.location('pathname').should('include', 'navigation');
  });

  it("cy.reload()", ()=>{
    // To reload the page, use the cy.reload() command.
    cy.reload()
    // reload the page without using the cache
    cy.reload(true);
  });

  it('cy.visit', ()=>{
    // To visit a remore page, use the cy.visit() command.
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 500000, // increate total time for the visit to resolve
      onBeforeLoad: function(contentWindow){
        // Content window is the remote page's window object
      },
      onLoad: function(contentWindow){
        // contentWindow is the remote page's window object
      }
    });
  });

})