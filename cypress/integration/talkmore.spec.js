context("talk more", () => {
  it("Enters the main page and render showing the header", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    context("Calculating price of phone bill with talk more", () => {
      it("selects the $39.99 plan and makes the simulation");
      cy.get(".hfIPvD > :nth-child(1)").click();
      cy.get(".sc-fFeiMQ > :nth-child(2)").select(1);
      cy.get(".sc-fFeiMQ > :nth-child(4)").select(3);
      cy.get(".sc-cxpSdN").type("250");
      cy.get(".sc-dJjYzT").click();
      cy.get(".sc-bkkeKt > :nth-child(1)").should("have.text", "total with talk more plan: 217.80");
      cy.get(".sc-bkkeKt > :nth-child(2)").should("have.text", "total without talk more: 225.00");
      cy.get(".sc-cxpSdN").clear();

      it("selects the $69.99 plan and makes the simulation");
      cy.get(".hfIPvD > :nth-child(2)").click();
      cy.get(".sc-fFeiMQ > :nth-child(2)").select(3);
      cy.get(".sc-fFeiMQ > :nth-child(4)").select(4);
      cy.get(".sc-cxpSdN").type("80");
      cy.get(".sc-dJjYzT").click();
      cy.get(".sc-bkkeKt > :nth-child(1)").should("have.text", "total with talk more plan: 59.40");
      cy.get(".sc-bkkeKt > :nth-child(2)").should("have.text", "total without talk more: 216.00");
      cy.get(".sc-cxpSdN").clear();

      it("selects the $99.99 plan and makes the simulation");
      cy.get(".hfIPvD > :nth-child(2)").click();
      cy.get(".sc-fFeiMQ > :nth-child(2)").select(2);
      cy.get(".sc-fFeiMQ > :nth-child(4)").select(4);
      cy.get(".sc-cxpSdN").type("80");
      cy.get(".sc-dJjYzT").click();
      cy.get(".sc-bkkeKt > :nth-child(1)").should("have.text", "total with talk more plan: 63.80");
      cy.get(".sc-bkkeKt > :nth-child(2)").should("have.text", "total without talk more: 232.00");
      cy.get(".sc-cxpSdN").clear();
    });
    context("tries to make a comparission with a phone number of the same region", () => {
      it("selects the same number region for origin and desitny, which causes an warning message");
      cy.get(".hfIPvD > :nth-child(2)").click();
      cy.get(".sc-fFeiMQ > :nth-child(2)").select(1);
      cy.get(".sc-fFeiMQ > :nth-child(4)").select(4);
      cy.get(".sc-cxpSdN").type("120");
      cy.get(".sc-dJjYzT").click();
      cy.get(".sc-hGPBjI").should("have.text", "Origin and destiny must be different");
    });
  });
});
