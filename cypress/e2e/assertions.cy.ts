// @ts-nocheck
beforeEach(()=>{
  cy.visit("https://example.cypress.io/commands/assertions");
});

describe('template spec', () => {
  it('Implicit Assertions - .should()', () => {
    // To make an assertion about the current subject, use the .should() command.
    cy.get('.assertion-table').find('tbody tr:last').should('have.class', 'success')
    .find('td').first()
    // checking the text of the element in various ways
    .should('have.text', 'Column content')
    .should('contain', 'Column content')
    .should('have.html', 'Column content')
    // chai0jquery uses "is()" to check if element matches selector
    .should('match', 'td')
    // to match text content against a regul ar expression
    // first need to invoke jQuery method text()
    // and then match using regular expression
    .invoke('text')
    .should('match', /column content/i);

    // a better way to check element's text content aginst a regular expression 
    // is to use "cy.contains"
    // https://on.cypress.io/contains
    cy.get('.assertion-table')
    .find('tbody tr:last')
    // find first element with text content matching regular expression
    .contains('td', /column content/i)
    .should('be.visible');
  })

  it("implicit assertions - and()", ()=>{
    // To chain multiple assertions together, use the .and() command
    cy.get('.assertions-link').should('have.class', 'active')
    .and('have.attr', 'href').and('include', 'cypress.io');
  });

  it("Explicit Assertions - expect", ()=>{
    // To make a BDD assertion about a specified subject, use expect.
    expect(true).to.be.true;
    const o:any = {foo:'bar'};
    expect(o).to.equal(o);
    expect(o).to.deep.equal({foo: 'bar'});
    // matching text using regular expression
    expect('FooBar').to.match(/bar$/i);
  });

  it("Explicit Assertions - assert", ()=>{
    // To make a TDD assertion about a specified subject, use assert.
    const person = {
      name: 'Joe',
      age: 20,
    };
    assert.isObject(person, 'value is object');
    assert.deepEqual(person, person, 'person is equal');
    assert.equal(person.hasOwnProperty('name'), true, 'is property of name');
  });

  it('Should with callback function', ()=>{
    // You can write your own complicated checks using .should(cb) function
    // if included assertions are not enough.
    // Pass a function to should() with any number of explicit assertion with it
    // The callback function will be rettried
    // until it passes all your explicit assertions or times out.
    cy.get('.assertions-p').find('p').should(($p:string[]):void=>{
      // return an array of texts from all the p's
      let texts:string[] = $p.map((i:number, el:any)=>{
        // https://on.cypress.io/$
        return Cypress.$(el).text();
      });

      // jquery map returns jquery object
      // and .get() convert this to simple array
      texts = texts.get();

      // array should have length of 3
      expect(texts).to.have.length(3);

      // use second argument to expect(...) to provide clear
      // message with each assertion
      expect(texts, 'has expected text in each paragraph').to.deep.eq([
        'Some text from first p',
        'More text from second p',
        'And even more text from third p',
      ]);
    });
  });

  it("Assert that element's class includes heading-", ()=>{
    cy.get('.docs-header').find('div')
    // .should(cb) callback function will be retried
    .should(($div:any[]):void=>{
      expect($div).to.have.length(1);

      const className:string = $div[0].className;

      expect(className).to.match(/heading-/);
    })
    // .then(cb) callback is not retried,
    // it either passes or fails
    .then(($div:any[]):void=>{
      expect($div).to.have.text('Introduction');
    });
  });

  it('throwing errors', ():void=>{
    cy.get('.docs-header').find('div')
    .should(($div:string[])=>{
      if($div.length != 1){
        // you can throw your own errors
        throw new Error('Did not find 1 element');
      }
      const className:string = $div[0].className;

      if(!className.match(/heading-/)){
        throw new Error(`Could not find class "heading-" in ${className}`);
      }
    })
  });

  it("match text between two elements which we don't know what it should be", ()=>{
    let text:string;
    /**
     * Normalizes passed text,
     * useful before comparing text with spaces and different capitalization.
     * @param {string} s Text to normalize
     */
    const normalizeText:string = (s:string) => s.replace(/\s/g, '').toLowerCase();
    
    cy.get('.two-elements').find('.first').then(($first:string):void=>{
      // save text from the first element
      text = normalizeText($first.text());
    });

    cy.get('.two-elements')
    .find('.second')
    .should(($div:string):void=>{
      // We can massage text before comparing
      const secondText:string = normalizeText($div.text());
      expect(secondText, 'second text').to.equal(text);
    });
  });

  it('cypress retries with should(callbackFn)', ()=>{
    cy.get('#random-number')
    .should(($div:string):void=>{
      // retiries getting the element
      // while the "🎁" is converted into NaN
      // and only passes when a number is set
      const n:number = parseFloat($div.text());
      expect(n).to.be.gte(1).and.be.lte(10);
    });
  });

});
