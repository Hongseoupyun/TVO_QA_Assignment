// Filter categories:
// Test Case 1: Verify that the user is able to select different categories from the dropdown list.
// Test Case 2: Verify that the selected category is highlighted and the correct content is displayed.
// Test Case 3: Verify that the user is able to select different categories from the menu bar

describe("Verify Filter Categories", () => {
  it("user is able to select different categories from the dropdown list and correct content is displayed and highlights in menu bar", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
    cy.get(".Docs & Series")
      .trigger("mouseover")
      .then(() => {
        cy.get(".Docs & Series .dropdown").should("be.visible");
        cy.get(".Docs & Series .dropdown a").each(($el) => {
          const text = $el.text();
          cy.wrap($el).click();
          cy.url().should("not.include", "/series-docs/browse/categories/all");
          cy.get(".category h1").contains(text);
          cy.get(".category-nav a.selected").should("have.text", text);
        });
      });
  });

  it("user is able to select different categories from the menu bar and correct content is displayed and highlights in menu bar", () => {
    cy.get(".category-nav a").each(($el) => {
      const text = $el.text();
      cy.wrap($el).click();
      cy.url().should("not.include", "/series-docs/browse/categories/all");
      cy.get(".category h1").contains(text);
      cy.get(".category-nav a.selected").should("have.text", text);
    });
  });
});
