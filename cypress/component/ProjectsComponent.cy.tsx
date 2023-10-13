// @ts-nocheck
import React from "react";
import Projects from "../../src/pages/Projects";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<Projects />);
  cy.get('[data-testid="projects"]');
});

describe('The Parent element', () => {
  it('a data-testid of "projects" should exist', () => {
    cy.get('[data-testid="projects"]').should("exist");
  })

  it("an id of 'projects' should exist", ()=>{
    cy.get("#projects").should("exist");
  });

  it("should contain two section elements with className project-section", ()=>{
    cy.get("#projects").children("section.project-section").should("exist");
    cy.get("#projects").children("section.project-section").should("have.length", 2);
  });
});

describe("The first section", ()=>{
  it("should have two children", ()=>{
    cy.get("#projects").children("section.project-section").eq(0).children(/.+/).should("have.length", 2);
  });

  it("the first child should be an h1 with #intro-heading", ()=>{
    cy.get("#projects").children("section.project-section").eq(0).children(/.+/).eq(0).get("h1#intro-heading").should("exist");
  });

  it("the second should be an h2 with #intro-body", ()=>{
    cy.get("#projects").children("section.project-section").eq(0).children(/.+/).eq(1).get("h2#intro-body").should("exist");
  })
});

describe("The second section", ()=>{
  it("the second section should have an id of projects-repo", ()=>{
    cy.get("#projects").children("section.project-section").eq(1).get("#projects-repo").should("exist");
  });

  it("the second section should have one or more figure tags with a class of .project-card", ()=>{
    cy.get("#projects section.project-section#projects-repo").find("figure.project-card").should(($figure:any)=>{
      expect($figure.length).to.be.gt(0);
    });
  });
  
  it("within each figure tag there should be an image with the class .img-tag there should be an img tag", ()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card").children(/.+/).eq(0).get("img.img-tag").should("exist");
  });
  
  it("within each figure tag, there should be a figcaption tag with a class of .image-caption as it's first element",()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card").children(/.+/).eq(0).get("figcaption.image-caption").should("exist");
  });

  it("within each .image-caption there should be two div tag with class of caption-text", ()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card").children(/.+/).eq(0).get("figcaption.image-caption").children("div.caption-text").should("exist");
  });

  it("within each .image-caption there should be two div tag with class of caption-text", ()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card").children(/.+/).eq(0).get("figcaption.image-caption").children("div.caption-text").should("exist");
    });

  it("the first .caption-text element should have an id of #caption-links", ()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card figcaption.image-caption").children("div.caption-text").eq(0).get("#caption-links").should("exist");
  });

  it("the first .caption-text element should have two div tags with a class of .caption-link", ()=>{
    cy.get("#projects section.project-section#projects-repo figure.project-card figcaption.image-caption").children("div.caption-text").eq(0).within(()=>{
      cy.get("div.caption-link").should("have.length", 2);
    });
  });
// div.caption-links
});