//Footer:
// Test Case 1: Verify the presence of the footer on the page.
// Test Case 2: Verify that the footer contains all the necessary elements, such as links to important pages, social media icons, etc.
// Test Case 3: Verify that the links in the footer work and redirect to the correct page.
//Test Case 4: Verify that the social media icons are functional and redirect to the correct social media page.

describe("Verify Footer", () => {
  it("the footer is present and visible", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
    cy.get("#footer").should("be.visible");
  });
  it("the footer contains all the necessary elements, such as links to important pages and social media icons", () => {
    cy.get("#footer .links").should("be.visible");
    cy.get("#footer .social-media").should("be.visible");
  });
  it("the links in the footer redirect to the correct page", () => {
    cy.get("#footer .links a").each(($el) => {
      const href = $el.prop("href");
      cy.wrap($el).click();
      cy.url().should("eq", href);
    });
  });
  it("the social media icons are functional and redirect to the correct social media page", () => {
    cy.get("#footer .social-media a").each(($el) => {
      const href = $el.prop("href");
      cy.wrap($el).click();
      cy.url().should("eq", href);
    });
  });
});
