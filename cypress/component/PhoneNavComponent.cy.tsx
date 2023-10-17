// @ts-nocheck
import React from "react";
import PhoneNavComponent from "../../src/components/phoneNav";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<PhoneNavComponent/>);
  cy.get('[data-testid="phone-nav"]');
});

describe('The Parent node', () => {
  it('Should have data-testid of phone-nav', () => {
    cy.get('[data-testid="phone-nav"]').should("exist");
  });

  it("Should have an id of phone-nav", ()=>{
    cy.get("#phone-nav").should("exist");
  });

  it("Should have a ul as the immediate child", ()=>{
    cy.get("#phone-nav ul").should("exist");
  });

});

describe("The ul node", ()=>{
  
    it("Should have 4 or more children with className of phone-nav-buttons", ()=>{
      cy.get("#phone-nav ul").find("li.phone-nav-buttons").should(($phoneButtons:any)=>{
        expect($phoneButtons.length).to.gte(4);
      });
    });
  
});

describe("Each li node", ()=>{
  it("should have an anchor tag", ()=>{
    cy.get("#phone-nav ul > li.phone-nav-buttons a").should("exist");
  });

  // it("Should have an anchor tag with two children", ()=>{
  //   cy.get("#phone-nav ul li.phone-nav-buttons a").children(/.+/).should("have.length", 1);
  // });
});