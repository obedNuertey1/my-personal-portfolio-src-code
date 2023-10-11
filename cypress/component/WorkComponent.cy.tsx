// @ts-nocheck
import React from "react";
import Work from "../../src/pages/Work";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<Work />);
  cy.get('[data-testid="work"]');
});

describe('Root container', () => {
  it('must have an #work', () => {
    cy.get("#work").should("exist");
  })

  it("must have two children", ()=>{
    cy.get("#work").children(/.+/).should("have.length", 2);
  });

  it("must have two section tags", ()=>{
    cy.get("#work section").should("have.length", 2);
  });
})

describe("The first section", ()=>{

  it("The first section should have an id of introduction", ()=>{
    cy.get("#work").children("section").eq(0).should("have.id", "introduction")
  });

  it("The first section should have an class of work-section", ()=>{
    cy.get("#work").children("section").eq(0).should("have.class", "work-section");
  });

  it("The first section should have a first child an id of intro-heading", ()=>{
    cy.get("#work").children("section").eq(0).children(/.+/).eq(0).should("have.id", "intro-heading");
  });

  it("The first section should have a second child with an id of intro-body", ()=>{
    cy.get("#work").children("section").eq(0).children(/.+/).eq(1).should("have.id", "intro-body");
  });
});

describe("The second section", ()=>{

  it("The second section should have an id of continuous-development", ()=>{
    cy.get("#work").children("section#continuous-development").should("exist");
  });

  it("The second section should have a class of work-section", ()=>{
    cy.get("#work section#continuous-development").should("have.class", "work-section");
  });

  it("The second section should have an h3 tag with an #watch-out", ()=>{
    cy.get("#work").children("section").eq(1).children(/.+/).eq(0).get("h3").should("exist");
  });

  it("The second section should have an h3 tag with a #watch-out", ()=>{
    cy.get("#work").children("section").eq(1).children(/.+/).eq(0).get("#watch-out").should("exist");
  });
});