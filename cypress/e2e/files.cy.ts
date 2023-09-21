// @ts-nocheck
import requiredExample from "../fixtures/example";

beforeEach(()=>{
  // load example.json fixture file and store
  // in the test context object
  cy.fixture('example.json').as('example');
  cy.visit('https://example.cypress.io/commands/files');
});

describe('template spec', () => {
  it('cy.fixture() - To load a fixture, use the cy.fixture() command', () => {
    // Instead of writing a response inline you can
    // use a fixture file's content.

    // When application makes an Ajax request matching "GET **/comments/*"
    // Cypress will intercept it and reply with the object in 'example.json' fixture
    cy.intercept('GET', '**/comments/*', {fixture: 'example.json'}).as('getComment');

    // We have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('response.body')
    .should('have.property', 'name')
    .and('include', 'Using fixtures to represent data')
  })

  it('cy.fixture or require', function(){
    // We are inside the "function(){...}"
    // callback and can use test context object "this"
    // "this.example" was loaded in "beforeEach" function callback
    expect(this.example, 'fixture in the test context').to.deep.equal(requiredExample);

    // or use "cy.wrap" and "should('deep.equal',...)" assertion
    cy.wrap(this.example, 'fixture vs require').should('deep.equal', requiredExample)
  })

  // it('cy.readFile()', function(){
  //   // To read a file's content, use the cy.readFile() command.
    
  //   // You can read a file and yield its contents
  //   // The filePath is relative to your project's root.
  //   cy.readFile('cypress.config.ts').then((json:any)=>{
  //     expect(json.defineConfig()).to.be.an('object');
  //   });
  // });

  // it('cy.writeFile()', ()=>{
  //   // To write to a file the specified contents, use the cy.writeFile() command.

  //   // You can write to a file

  //   // Use a response form a request to automatically
  //   // generate a fixture file for use later
  //   cy.request('https://jsonplaceholder.cypress.io/users')
  //   .then((response:any)=>{
  //     // cy.writeFile('cypress/fixtures/users.json', response.body);
  //   })
  //   cy.fixture('users').should((users:any) => {
  //     expect(users[0].name).to.exist
  //   })

  //   // JavaScript arrays and objects are stringified
  //   // and formatted into text.
  //   cy.writeFile('cypress/fixtures/profile.json', {
  //     id: 8739,
  //     name: 'Jane',
  //     email: 'jane@example.com',
  //   });

  //   cy.fixtures('profile').should((profile:any)=>{
  //     expect(profile.name).to.eq('Jane');
  //   });
  // });

})