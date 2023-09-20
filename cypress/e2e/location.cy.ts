// @ts-nocheck
beforeEach(()=>{
  cy.visit("https://example.cypress.io/commands/location");
});
describe('template spec', () => {
  it('cy.hash()', () => {
    // To get the current URL hash, use the cy.hash() command.
    cy.hash().should('be.empty');
  })
  it('cy.location()', ()=>{
    // To get window.location, use the cy.location() command.
    cy.location().should((location:any):void=>{
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('https://example.cypress.io/commands/location');
      expect(location.host).to.eq('example.cypress.io');
      expect(location.hostname).to.eq('example.cypress.io');
      expect(location.origin).to.eq('https://example.cypress.io');
      expect(location.pathname).to.eq('/commands/location');
      expect(location.port).to.eq('');
      expect(location.protocol).to.eq('https:');
      expect(location.search).to.be.empty;
    })
  });
  it("cy.url()", ()=>{
    // To get the current URL, use the cy.url() command.
    cy.url().should('eq', 'https://example.cypress.io/commands/location');
  });
})