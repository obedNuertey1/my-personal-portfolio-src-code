import React from "react";
import Okay from '../../src/components/okay'

describe('gettingStarted.cy.tsx', ():void => {
  it('playground', ():void => {
    cy.mount(<Okay />);
  })
})