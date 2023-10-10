// @ts-nocheck
import Articles from "../../src/pages/Articles";
import React from "react";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<Articles />);
  cy.get('[data-testid="articles"]');
});

describe('For parent element', () => {
  it('Check if div with #articles exist', () => {
    cy.get("div#articles").should("exist");
  })

  it("there should be two section elements with .article-section", ()=>{
    cy.get("div#articles section.article-section").should("exist").should("have.length", 2)
  });
});

describe("For first section", ()=>{
  it('first section must have two children', ()=>{
    cy.get("section.article-section").should("have.length", 2);
  });

  it("Second section first child should have #intro-heading and .intro-children", ()=>{
    cy.get("section.article-section #intro-heading").should("exist");
  });
});

describe("For the second section", ()=>{
  it("each child should contain an article element", ()=>{
    cy.get("section.article-section").children("article").should("exist");
  });

  it("each child should have children with .article-elem ", ()=>{
    cy.get("section.article-section").children("article").as("withinArticle");
    cy.get('@withinArticle').eq(0).children(".article-elem").should("exist")
    cy.get('@withinArticle').eq(1).children(".article-elem").should("exist")
  });

  it("the first child within each article should be a time tag and the second an h3 tag", ()=>{
    cy.get("section.article-section").children("article").as("withinArticle");
    cy.get("@withinArticle").eq(0).children("time.article-elem").should("exist");
    cy.get("@withinArticle").eq(1).children("h3.article-elem").should("exist");
  });
});