// @ts-nocheck
beforeEach(()=>{
  cy.visit("https://example.cypress.io/commands/misc");
});
describe('template spec', () => {
  it('.end() to end the command chain, use the .end() command', ()=>{
    // cy.end is useful when you want to end a chain of commands
    // and forse Cypress to re-query from the root element
    cy.get('.misc-table').within(()=>{
      // ends the current chain and yields null
      cy.contains('Cheryl').click().end()

      // queries the entire table again
      cy.contains('Charles').click();
    });
  });

  it('cy.exec() - To execute a system command, use the cy.exec() command.', ()=>{
    // execute a system command.
    // so you can take actions necessary for
    // your test outside the scope of Cypress.
    cy.exec('echo Jane Lane')
    .its('stdout').should('contain', 'Jane Lane');

    // we can use Cypress.platform string to 
    // select appropriate command
    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`);

    if(Cypress.platform == 'win32'){
      cy.exec('print cypress.config.js')
      .its('stderr').should('be.empty');
    }else{
      cy.exec('print cypress.config.js')
      .its('stderr').should('be.empty');

      cy.exec('pwd')
      .its('code').should('eq', 0)
    }
  });

  it('cy.focused() - To get the DOM element that has focus, use the cy.focused() command.', ()=>{
    cy.get('.misc-form').find('#name').click();
    cy.focused().should('have.id', 'name');

    cy.get('.misc-form').find('#description').click();
    cy.focused().should('have.id', 'description');
  });

  it('cy.screenshot() - To take a screenshot, use the cy.screenshot() command', ()=>{
    cy.screenshot('my-image');
  });

  it('cy.wrap() - To wrap an object, use the cy.wrap() command.', ()=>{
    cy.wrap({foo: 'bar'}).should('have.property', 'foo').and('include', 'bar');
  });

});