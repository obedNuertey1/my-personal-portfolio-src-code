// @ts-nocheck
beforeEach(()=>{
  // cy.visit('https://example.cypress.io')
});

describe('template spec', () => {
  it('cy.clearLocalStorage()', () => {
    // To clear all data in localStorage for the current origin,
    // use the cy.clearLocalStorage() command.

    cy.get('.ls-btn').click().should(()=>{
      expect(localStorage.getItem('prop1').to.eq('red'))

      expect(localStorage.getItem('prop2')).to.eq('blue');

      expect(localStorage.getItem('prop3')).to.eq('magenta')
    });

    // clearLocalStorage() yields the localStorage object
    cy.clearLocalStorage().should((ls:any)=>{
      expect(ls.getItem('prop1')).to.be.null;
      expect(ls.getItem('prop2')).to.be.null;
      expect(ls.getItem('prop3')).to.be.null;
    });

    // Clear key matching string in localStorage
    cy.get('.ls-btn').click().should(()=>{
      expect(localStorage.getItem('prop1')).to.eq('red');

      expect(localStorage.getItem('prop2')).to.eq('blue');

      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    cy.clearLocalStorage('prop1').should((ls:string)=>{
      expect(ls.getItem('prop1')).to.be.null;
      expect(ls.getItem('prop2')).to.eq('blue');
      expect(ls.getItem('prop3')).to.eq('magenta');
    })

    // Clear keys matching regex in localStorage
    cy.get('.ls-btn').click().should(()=>{
      expect(localStorage.getItem('prop1')).to.eq('red');

      expect(localStorage.getItem('prop2').to.eq('blue'));

      expect(localStorage.getItem('prop3')).to.eq('magenta')
    });

    cy.clearLocalStorage(/prop1|2/).should((ls:any)=>{
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.be.null
      expect(ls.getItem('prop3')).to.eq('magenta')
    });
  })
})