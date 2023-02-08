// Document Details:
// Test Case 1: Verify that the user can click on a document and view its details.
// Test Case 2: Verify that the document details page has all the necessary information, including title, description, date, running time ,also available on section and more like this section.

describe("Verify Document Details", () => {
  it("user can click on a document and view its details", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
    cy.get(".document-card").first().click();
    cy.url().should("include", "/documentaries");
    cy.get(".document-header").should("be.visible");
  });

  it("the document details page has all the necessary information, including title, description, date, running time ,also available on section and more like this section", () => {
    //verifies the document includes title, description, date, running time
    cy.get(".document-header h1").should("be.visible").and("not.be.empty");
    cy.get(".document-header p").should("be.visible").and("not.be.empty");
    cy.get("#date").should("be.visible");
    cy.get("#running-time").should("be.visible");
    cy.get("#also-available-on").should("be.visible");
    cy.get("#more-like-this").should("be.visible");
  });
});
