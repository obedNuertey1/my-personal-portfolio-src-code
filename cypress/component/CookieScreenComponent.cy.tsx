// @ts-nocheck
import React from "react";
import CookieScreenComponent from "../../src/components/cookieScreen";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<CookieScreenComponent />);
  cy.get("[data-testid='cookie']");
});

describe('The root node', () => {
  it('should have a data-testid of "cookie"', () => {
    cy.get("[data-testid='cookie']").should("exist");
  })

  it('should have an id of "cookie"', ()=>{
    cy.get("[data-testid='cookie']").should("exist");
  });

  it('should have two article tags', ()=>{
    cy.get("article").should("have.length", 2);
  });
});

describe('The first article node', ()=>{
  it("should have more than one p tags", ()=>{
    cy.get("#cookie").children("article").eq(0).find("p").should(($p:any):void=>{
      assert.isAbove($p.length, 1, "there is more than one p tags");
    });
  });
});

describe("The second article node", ()=>{
  it("should have two button elements", ()=>{
    cy.get("#cookie").children("article").eq(1).find("button").should(($button:any):void=>{
      assert.equal($button.length, 2, "there should be exactly two button elements");
    });
  });
});

