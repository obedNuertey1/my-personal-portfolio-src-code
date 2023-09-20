// @ts-nocheck
describe('template spec', () => {
  const url:string = "https://example.cypress.io/commands/window";
  beforeEach(()=>{
    cy.visit(url);
  }); 
  it('cy.window() ', () => {
    // To get the global window object, use the cy.window() command.
    cy.window().should('have.property', 'top');
  });

  it('cy.document() ', ()=>{
    // To get the document object, use the cy.document() command.
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('cy.title() ', ()=>{
    // To get the title, use the cy.title() command.
    cy.title().should('include', 'Kitchen Sink');
  });
})