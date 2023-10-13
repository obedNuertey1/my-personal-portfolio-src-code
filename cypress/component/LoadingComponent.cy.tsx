// @ts-nocheck
import React from "react";
import LoadingComponent from "../../src/components/loadingComponent";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<LoadingComponent />);
  cy.get("[data-testid='in-page-loading']");
});

describe('The parent Component', () => {
  it('should have [data-testid="in-page-loading"]', () => {
    cy.get('[data-testid="in-page-loading"]').should("exist");
  });
  it('should have an id of #in-page-loading', ()=>{
    cy.get("#in-page-loading").should("exist");
  });
})

describe('The only child', ()=>{
  it('should be a div element with an id load-spinner', ()=>{
    cy.get("#in-page-loading").within(()=>{
      cy.get("#load-spinner").should("exist");
    });
  });

  it("#load-spinner should have only one child", ()=>{
    cy.get("#in-page-loading #load-spinner").children(/.+/).should("have.length", 1);
  });
});