// @ts-nocheck
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/commands/traversal');
    // cy.get('[href="/commands/querying"]').contains('Querying');
    // cy.should('have.url', 'https://example.cypress.io/commands/traversal');
    
    // .children() - To get children of DOM elements, use the .children() command.
    cy.get('.traversal-breadcrumb')
    .children('.active')
    .should('contain', 'Data');

    // .closest() - To get the closest ancestor DOM element, use the .closest() command.
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');


    // .eq() - To get a DOM element at a specific index, use the .eq() command.
    cy.get('.traversal-list>li').eq(1).should('contain', 'siamese');

    // .filter() - To get DOM elements that match a specific selector, use the .filter() command.
    cy.get('.traversal-nav>li')
    .filter('.active').should('contain', 'About');

    // .find() - To get descendant DOM elements of the selector, use the .find() command.
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);

    // .first() - To get the first DOM element within elements, use the .first() command.
    cy.get('.traversal-table td').first().should('contain', '1');

    // .last() - To get the last DOM element within elements, use the .last() command.
    cy.get('.traversal-buttons .btn')
    .last().should('contain', 'Submit');

    // .next() to get the next sibling DOM element within elements, use the .next() command.
    cy.get('.traversal-ul')
    .contains('apples').next().should('contain', 'oranges');

    // .nextAll() - To get all of the next sibling DOM elements within elements, use the .nextAll() command.
    cy.get('.traversal-next-all').contains('oranges').nextAll().should('have.length', 3);

    // .nextUntil() - To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.
    cy.get('#veggies').nextUntil('#nuts').should('have.length', 3);

    // .not() - To remove DOM element(s) from the set of elements, use the .not() command.
    cy.get('.traversal-disabled .btn')
    .not('[disabled]').should('not.contain', 'Disabled');

    // .parent() - To get parent DOM element of elements, use the .parent() command.
    cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus');

    // .parents() - To get parents DOM element sof elements, use the .parents() command.
    cy.get('.traversal-cite').parents().should('match', 'blockquote');

    // .parentsUntil() To get parents DOM elements of elements until other element, use the .parentsUntil() command.
    cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length', 2);

    // .prev() - To get the privious sibling DOM element within elements, use the .prev() command.
    cy.get('.birds').find('.active').prev().should('contain', 'Lorikeets');

    // .prevAll() - To get all previous sibling DOM elements within elements, use the .prevAll() command.
    cy.get('.fruits-list').find('.third').prevAll().should('have.length', 2);

    // .prevUntil() - To get all previous sibling DOM elements within elements until other elements, use the .prevUntil() command.
    cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length', 3);

    // .siblings() - To get all sibling DOM elements, use the siblings() command.
    cy.get('.traversal-pills .active').siblings().should('have.length', 2);

  })
})