// @ts-nocheck
import React from "react";
import HeaderComponent from "../../src/components/headerComponent";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<HeaderComponent />);
  cy.get('[data-testid="header"]').as('testId');
});

describe('header', () => {
  it('the header must exist', () => {
    cy.get("header").should('exist');
  });

  it("there should be a data-testid", ()=>{
    cy.get("header").should("have.attr", "data-testid", "header");
  });
});

describe("profile", ()=>{
  it("there should be a div with #profile", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("#profile").should("exist");
    });
  });

  it("there should be two children within header", ()=>{
    cy.get('@testId').children(".header-items").should("have.length", 2);
  });

  it("#profile must have two children", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("#profile").children(".avatar-data").should("have.length", 2);
    });
  });

  it("there should be #avatar within #profile", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("#profile").within(()=>{
        cy.get("#avatar").should("exist");
      });
    });
  });

  it("avatar must be the first element of #profile", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("#profile").children(".avatar-data").eq(0).should("have.attr", "id", "avatar");
    });
  });
});

describe("navbar", ()=>{
  it("nav should exist", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("nav").should("exist");
    });
  });

  it("nav should have a ul tag", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("nav").child("ul").should("exist");
    });
  });

  it("nav ul should have four li items", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("nav").child("ul").find(".links").should(($links:any):void=>{
        assert.equal(links.length, 4, "there should be 4 links");
      });
    });
  });

  it("nav ul li must have the texts HOME ARTICLES PROJECTS WORK in that order", ()=>{
    cy.get('@testId').within(()=>{
      cy.get("nav").within(()=>{
        cy.get("ul").children("li").as("ul-children");
      });
    });
    cy.get("@ul-children").eq(0).should("contain", "HOME").and("have.attr", "id", "home").and("have.class", "nav-element");
    cy.get("@ul-children").eq(1).should("contain", "ARTICLES").and("have.attr", "id", "articles").and("have.class", "nav-element");
    cy.get("@ul-children").eq(2).should("contain", "PROJECTS").and("have.attr", "id", "projects").and("have.class", "nav-element");
    cy.get("@ul-children").eq(3).should("contain", "WORK").and("have.attr", "id", "work").and("have.class", "nav-element");
  });

});