// Navigation bar:
// Test cases 1: Verify the navigation bar is present
// Test cases 2: Verify the navigation links
// Test cases 3: Verify the navigation dropdown
// Test cases 4: Verify the navigation bar is sticky to the top of the page

describe("Verify Navigation Bar", () => {
  beforeEach(() => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
  });

  it("the navigation bar is present and visible on the page", () => {
    cy.get("#header").should("be.visible");
  });

  it("the navigation bar contains multiple links and redirects to correct link", () => {
    cy.get("#header a").each(($el) => {
      cy.wrap($el).click();
      cy.url().should("not.include", "/series-docs/browse/categories/all");
    });
  });

  it("the navigation bar contains 3 dropdowns", () => {
    cy.get("#header .dropdown").should("have.length", 3);
  });

  it("contents in navbar highlighted when hovering", () => {
    cy.get("#header a").first().trigger("mouseover");
    cy.get("#header a").first().should("have.class", "hover");
    cy.get("#header a").first().trigger("mouseout");
    cy.get("#header a").first().should("not.have.class", "hover");
  });

  it("the navigation bar is sticky to the top of the page", () => {
    cy.scrollTo("bottom");
    cy.get("#header").should("be.visible");
  });
});
