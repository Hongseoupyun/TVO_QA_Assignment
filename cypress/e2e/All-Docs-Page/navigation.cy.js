// Test Case 1: Verify that the page is loaded properly and the URL is correct.
// Test Case 2: Verify that the page has all the necessary elements, including header, footer, categories, etc.
// Test Case 3: Verify the responsive design of the page on different screen sizes, including mobile, tablet, and desktop. (Mobile, Visual)

describe("Verify Navigation", () => {
  beforeEach(() => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
  });
  it("the page is loaded properly and the URL is correct", () => {
    cy.url().should("include", "/series-docs/browse/categories/all");
  });

  it("the page has all the necessary elements, including header, footer, categories menu bar", () => {
    cy.get("#header").should("be.visible");
    cy.get("#footer").should("be.visible");
    cy.get(".categories").should("be.visible");
  });

  it("Verify the responsive design of the page on different screen sizes, including mobile, tablet, and desktop", () => {
    // verifies that the page is responsive on mobile, tablet, and desktop and still shows the header, footer, and categories menu bar
    cy.viewport("iphone-6");
    cy.wait(1000);
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
    cy.get(".categories").should("be.visible");

    cy.viewport(1024, 768);
    cy.wait(1000);
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
    cy.get(".categories").should("be.visible");

    cy.viewport(1920, 1080);
    cy.wait(1000);
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
    cy.get(".categories").should("be.visible");
  });
});
