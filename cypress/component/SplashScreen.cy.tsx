// @ts-nocheck
import React from "react";
import SplashScreen from "../../src/components/splashScreen";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<SplashScreen />);
  cy.get("[data-testid='splash-screen']");
});

describe('The parent element', () => {
  it('should have data-testid "splash-screen"', () => {
    cy.get("[data-testid='splash-screen']").should("exist");
  })
  it('should have id "#splash-screen"', () => {
    cy.get("#splash-screen").should("exist");
  })
});

describe("The only child of the previous parent", ()=>{
  it("should have #child", ()=>{
    cy.get("#splash-screen").within(()=>{
      cy.get("#child").should("exist");
    });
  });

  it("should have descendants with class .descendants", ()=>{
    cy.get("#child").children(".descendants").should("exist");
  });

  it("there should be 3 .descendants", ()=>{
    cy.get("#child").children(".descendants").should("have.length", 3);
  });
  
});