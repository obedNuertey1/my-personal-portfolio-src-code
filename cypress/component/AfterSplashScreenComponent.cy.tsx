// @ts-nocheck
import AfterSplashScreen from "../../src/components/afterSplashScreen";
import React from "react";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<AfterSplashScreen />);
  cy.get("[data-testid='second-splash']")
});

describe('The Parent Node', () => {
  it('should have data-testid of "second-splash"', () => {
    cy.get("[data-testid='second-splash']").should("exist");
  })

  it('should have an id of "second-splash"', ()=>{
    cy.get("[data-testid='second-splash']#second-splash").should("exist");
  });
})

describe("The imediate child", ()=>{
  it("should have #second-splash-child", ()=>{
    cy.get("#second-splash-child").should("exist");
  });
  it("should have a child blockquote#typist", ()=>{
    cy.get("#second-splash").within(()=>{
      cy.get("blockquote#typist").shoul("exist");
    });
  });
});