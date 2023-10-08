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
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).children(".intro-heading").eq(0).should("have.id", "intro-heading");
  });

  it("the second child of #introduction should have an id of intro-body", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(0).children(".intro-heading").eq(1).should("have.id", "intro-body");
  });
});


describe("The Second Section", ()=>{
  it("The second section should have an id of article", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).should('have.id', 'article');
  });

  it("The second section should have three children each with a class article-section", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").should('have.length', 2);
  });

  it("The third section be an anchor tag \n NB: Use an anchor tag instead of Link JSX for testing \n After all the test passes use a Link JSX", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).get("a").should("exist");
  });

  it("The second section should have a first child with the id article-header", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(0).should('have.id', 'article-header');
  });

  it("The second section should have a first child with an h2 tag", ()=>{
    cy.get("[data-testid='home-section']").children('.homeage-section').eq(1).find("h2").should(($h2:any)=>{
      expect($h2.length, "there should be an h2 element").to.eq(1);
    });
  });

  it("The second section should have a first child with the id article-body", ()=>{
    cy.get("[data-testid='home-section']").children('.homepage-section').eq(1).children(".article-section").eq(1).should('have.id', 'article-body');
  });

  it("id=article-body should have two children with article tag", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").should("have.length", 2);
  });

  it("each article tag should have two children with .article-elem", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").as("@withinArticle1");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").as("@withinArticle2");
    cy.get('@withinArticle1').children(".article-elem").should('have.length', 2);
    cy.get('@withinArticle2').children(".article-elem").should('have.length', 2);
  });


  it("the first element in .article-elem should be a date tag and the second should be an h3", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").eq(0).children(".article-elem").eq(0).get("date").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").eq(0).children(".article-elem").eq(1).get("h3").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").eq(1).children(".article-elem").eq(0).get("date").should("exist");
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(1).children("article").eq(1).children(".article-elem").eq(1).get("h3").should("exist");
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
    cy.get("[data-testid='home-section']").children(".homepage-section").get("h2").should("exist").and("have.id", "project-head");

    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(0).find("h2").shoud(($h2:any)=>{expect($h2.length).to.eq(1)});

  });

  it("The third section should have an 'a' tag as the third element \n Replace this anchor tag with a Link JSX element once all test passes", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".project").eq(2).find("a").shoud(($a:any)=>{expect($a.length).to.eq(1)});
  });

  it("The second child within the third section should have #show-projects",()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".projects").eq(1).should('have.id', 'show-projects');
  });

  it("The second child should have two children with .current-projects", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".projects").eq(1).children(".current-projects").should("have.length", 2);
  });

  it("Each .current-projects should have an iframe tag", ()=>{
    cy.get("[data-testid='home-section']").children(".homepage-section").eq(2).children(".projects").eq(1).children(".current-projects").as("current-projects");

    cy.get("@current-projects").eq(0).within(()=>{
      cy.get("iframe").should("exist");
    });
    cy.get("@current-projects").eq(1).within(()=>{
      cy.get("iframe").should("exist");
    });
  });

});

