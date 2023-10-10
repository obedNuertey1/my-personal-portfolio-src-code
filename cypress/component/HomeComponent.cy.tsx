// @ts-nocheck
import React from "react";
import Home from "../../src/pages/Home";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<Home />);
});

describe('Home root component', () => {
  it('A div of data-testid of home-section should exist ', () => {
    cy.get("[data-testid='home-section']").should("exist");
  });

  it("data-testid should have 3 sections each with the class of .homepage-section", ()=>{
    cy.get("[data-testid='home-section']").find(".homepage-section").should(($homepageSection:any)=>{
      expect($homepageSection.length, "there should be 3 sections").to.eq(3);
    });
  });
});

describe("The first Section", ()=>{
  it("the first section should have an id of introduction", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).should("have.id", "introduction");
  });

  it("#introduction should have two children \neach with the class intro-children", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).find(".intro-children").should(($introChildren:any)=>{
      expect($introChildren.length," there should be 2 children").to.eq(2);
    });
  });

  it("the first child of #introduction should have an id of intro-heading", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).children(".intro-children").eq(0).should("have.id", "intro-heading");
  });

  it("the second child of #introduction should have an id of intro-body", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).children(".intro-children").eq(1).should("have.id", "intro-body");
  });
});


describe("The Second Section", ()=>{
  it("The second section should have an id of article", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).should('have.id', 'article');
  });

  it("The second section should have three children each with a class article-section", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").should('have.length', 3);
  });

  it("The third section be an anchor tag \n NB: Use an anchor tag instead of Link JSX for testing \n After all the test passes use a Link JSX", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).get("a").should("exist");
  });

  it("The second section should have a first child with the id article-header", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(0).should("have.id", "article-header")

  });

  it("The second section should have a two article tags with .sample-article", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).find(".sample-article").should(($article:any)=>{
      expect($article.length, "there should be an h2 element").to.eq(2);
    });
  });

  it("Each article should have a time and an h3 tag", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).children(/.*/).eq(0).get("time#article-time").should("exist");
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).children(/.*/).eq(0).get("h3#article-topic").should("exist");
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).children(/.*/).eq(1).get("time#article-time").should("exist");
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).children(/.*/).eq(1).get("h3#article-topic").should("exist");
  });

  it("The second section should have a second child with the id article-body", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).should("have.id", "article-body");
  });

  it("id=article-body should have two children", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children(/.*/).should("have.length", 2);
  });

  it("each article tag should have two children with .article-elem", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children("article.sample-article").should("exist").and("have.length", 2);
  });


  it("the first element in .article-elem should be a time tag and the second should be an h3", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children(".sample-article").eq(0).children("time").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children(".sample-article").eq(0).children("h3").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children(".sample-article").eq(1).children("time").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children(".article-section").eq(1).children(".sample-article").eq(1).children("h3").should("exist");
  });
});


describe("The third section", ()=>{
  it("The third section should have an id of projects", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).should("have.id", "projects");
  });
  it("The third section should have three children with class project", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").should("have.length", 3);
  });

  it("The third section should have an h2 tag with #project-head as the first element", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(0).get("h2#project-head").should("exist");
  });

  it("The third section should have an 'a' tag as the third element \n Replace this anchor tag with a Link JSX element once all test passes", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(2).get("a").should("exist");
  });

  it("The second child within the third section should have #show-projects",()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(1).get("#show-projects").should("exist");
  });

  it("The second child should have two children with .current-projects", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(1).get("#show-projects").children(".current-projects").should("have.length", 2);
  });

  it("Each .current-projects should have an iframe tag", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(1).get("#show-projects").children(".current-projects").as("current-projects");

    cy.get("@current-projects").eq(0).within(()=>{
      cy.get("img").should("exist");
    });
    cy.get("@current-projects").eq(1).within(()=>{
      cy.get("img").should("exist");
    });
  });

});

