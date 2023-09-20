import React from "react";
import Okay from '../../src/components/okay'

describe('gettingStarted.cy.tsx', ():void => {
  it('playground', ():void => {
    //@ts-ignore
    cy.mount(<Okay />);
    //@ts-ignore
    cy.get('[data-testid="myFirstDiv"]').within(()=>{cy.get('#query-btn').should('contain', 'Good')});
  })
})