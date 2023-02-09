// Search functionality:
// Test Case 1: Verify that the search button is present and functional.
// Test Case 2: Verify that the user is able to type to search for specific content and the results are displayed correctly.
// Test Case 3: Verify that it displays the correct error message when there is no search results.
describe("Verify Search Functionality", () => {
  it("the search button(Magnifying glass) is present and functional", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all)");
    cy.get(".search-button").should("be.visible");
    cy.get(".search-button").click();
    cy.url().should("include", "/search");
  });

  it("the user is able to type to search for specific content and the results are displayed correctly", () => {
    cy.get(".search-input").type("Canada");
    cy.get(".search-input").type("{enter}");
    cy.url().should("include", "/Canada");
    cy.get(".search-results").should("be.visible");
    cy.get(".search-results").should("have.length.greaterThan", 1);
  });
  
  it("displays the correct error message when there is no search results", () => {
    cy.get(".search-input").type("asflnadv");
    cy.get(".search-input").type("{enter}");
    cy.url().should("include", "/asflnadv");
    cy.get(".search-results").should("be.visible");
    cy.get(".search-results").contains("Sorry, no results were found");
  });
});
