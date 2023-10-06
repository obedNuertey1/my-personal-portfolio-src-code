// @ts-nocheck
import React from "react";
import "../../src/index.css";
import Footer from "../../src/components/footerComponent";

beforeEach(()=>{
  cy.mount(<Footer />);
});

describe('FooterComponent.cy.tsx', () => {
  it('for Footer tag', () => {
    cy.get('[data-testid="footer"]').should("exist");
  });
  it("address should exist", ()=>{
    cy.get('[data-testid="footer"]').within(()=>{
      cy.get('address').should('exist');
    });
  });
  it(".social-list should exist", ()=>{
    cy.get('address').within(()=>{
      cy.get('ul').within(()=>{
        cy.get(".social-list").should("exist");
      });
    });
  });

  it("there should be 4 list items", ()=>{
    cy.get('address').within(()=>{
      cy.get('ul').find('.social-list').should(($socialList:any):void=>{
        expect($socialList.length).to.eq(4);
      });
    });
  });
})