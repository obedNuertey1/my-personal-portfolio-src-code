// @ts-nocheck
beforeEach(()=>{
  cy.visit('https://example.cypress.io/commands/connectors')
  // console.clear();
});

describe('template spec', () => {
  it('.each() - To iterate over the elements of a current subject, use the .each command', ()=>{
    cy.get('.connectors-each-ul>li')
    .each(($el:any|any[], index:number, $list:any[]):void=>{
      console.log($el, index, $list);
    });
  });

  it('.its() - To get the properties on the current subject, use the .its() command.', ()=>{
    cy.get('.connectors-its-ul>li')
    // calls the 'length' property returning that value
    .its('length')
    .should('be.gt', 2);
  });

  it('.invoke() - To invoke a function on a current subject, uset the .invoke() command', ()=>{
    cy.get('.connectors-div').should('be.hidden')
    // call the jquery method 'show' on the 'div.container'
    .invoke('show')
    .should('be.visible');
  });

  it('.soread() - To spread an array as individual to a callback function, use the .spread() command.', ()=>{
    const arr:string[] = ['foo', 'bar', 'baz'];

    cy.wrap(arr).spread(function(foo:any, bar:any, baz:any){
      expect(foo).to.eq('foo');
      expect(bar).to.eq('bar');
      expect(baz).to.eq('baz');
    });
  });

  it('.then() - To invoke a callback function with the current subject, use the .then() command.', ()=>{
    cy.get('.connectors-list>li').then(function($lis:string|string[]):void{
      expect($lis).to.have.length(3);
      expect($lis.eq(0)).to.contain('Walk the dog');
      expect($lis.eq(1)).to.contain('Feed the cat');
      expect($lis.eq(2)).to.contain('Write JavaScript');
    });

    // If the callback function returns a value, it is yielded to the
    // next callback, just like in a Promise callback.
    cy.wrap(1).then((num:number)=>{
      expect(num).to.equal(1);

      return 2;
    })
    .then((num:number)=>{
      expect(num).to.equal(2);
    });

    // But unlike a Promise, if undefined is returned, then the original
    // then the original value passed into the .then(cb) is yielded to the next callback.
    cy.wrap(1)
    .then((num:number)=>{
      expect(num).to.equal(1);
      // note that nothing returned from this callback
    })
    .then((num:number)=>{
      // this callback receives the original unchanged value 1
      expect(num).to.equal(1);
    });

    // If there are Cypress commands in the .then(cb) callback,
    // then the value yielded by the last command will be passed to the next callback.
    cy.wrap(1)
    .then((num:number)=>{
      expect(num).to.equal(1);
      // note how we run a Cypress command
      // the result yielded by this Cypress command
      // will be passed to the second '.then'
      cy.wrap(2);
    })
    .then((num:number)=>{
      // this callback recieves the value yielded by the "cy.wrap(2)"
      expect(num).to.equal(2);
    });

  });

});
