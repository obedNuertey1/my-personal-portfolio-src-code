// @ts-nocheck
beforeEach(()=>{
  cy.visit('https://example.cypress.io/commands/network-requests');
});

describe('template spec', ()=>{
  const url:string = "https://jsonplaceholder.cypress.io/comments";
  it('cy.request() - To make an XHR request, use the cy.request() command.', ()=>{
    cy.request(url)
    .should((response: any)=>{
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(500);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });

  it('A request can pass the response data to the next request', ()=>{
    // first, let's find out the userId of the first user we have
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
    .its('body.0') //yields the first element of the returned list
    .then((user:any)=>{
      expect(user).property('id').to.be.a('number');
      // make a new post on behalf of the user
      cy.request(
        'POST',
        'https://jsonplaceholder.cypress.io/posts',
        {
          userId: user.id,
          title: 'Cypress Test Runner',
          body: 'Fast, easy and reliable testing for anything that runs in a browser.'
        }
      )
    })
    // note that the value here is the returned value of the 2nd request
    // which is the new post object
    .then((response:any)=>{
      expect(response).property('status').to.equal(201) //new entity created
      expect(response).property('body').to.contain(
        {title: 'Cypress Test Runner'}
        )
        // We don't know the exact post id - only that it will be > 100
        // since JSONPlaceholder has built-in 100 posts
        expect(response.body).property('id').to.be.a('number').and.to.be.gt(100);
        // we don't know the user id here - since it was in above closure
        // so in this test just confirm that the property is there
    
        expect(response.body).property('userId').to.be.a('number');
    })
  });

  it('A good idea is to save the response data to be used later in the shared test', ()=>{
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
    .its('body.0') // yields the first element of the returned list
    .as('user') //saves the object in the test context
    .then(function(){
      // NOTE
      // By the time this callback runs the "as('user')" command
      // has saved the user object in the tests context.
      // To access the test context we need to use
      // the "function(){...}" callback form,
      // otherwise "this" points at a wrong or undefined object!
      cy.request(
        'POST',
        'https://jsonplaceholder.cypress.io/posts',
        {
          userId: this.user.id,
          title: "Cypress Test Runner",
          body: 'Fast, easy and reliable testing for anything that runs in a browser'
        }
      ).its('body').as('post') // save the new post from the response
    })
    .then(function(){
      // When this callback runs, both "cy.request" API commands have finished
      // and the test context has 'user' and 'post' objects set.
      // Let's verify them.
      expect(this.post, 'post has the right user id')
      .property('userId').to.equal(this.user.id)
    });
  });

  let message:string = "whoa, this comment does not exist";
  it('cy.intercept() - To route responses to matching requests, use the cy.intercept()', ()=>{
    // List to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment');

    // We have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);

    // Listen to POST to comments
    cy.intercept('POST', '**/comments').as('postComment');

    // We have code that posts a comment when 
    // the button is clicked in scripts.js
    cy.get('.network-post').click()
    cy.wait('@postComment').should(({request, response})=>{
      expect(request.body).to.include('email')
      expect(request.headers).to.have.property('content-type')
      expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
    })
  });

  it('stub a response to PUT comments/ ****', ()=>{
    cy.intercept(
      {
        method: 'PUT',
        url: '**/comments/*',
      },
      {
        statusCode:404,
        body: {error: message},
        headers: {'access-control-allow-origin': "*"},
        delaysMs: 500,
      }
    ).as('putComment');

    // we have code that puts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-put').click();

    cy.wait('@putComment');

    // out 404 statusCode logging in script.js executed
    cy.get('.network-put-comment').should('contain', message);
  });

});