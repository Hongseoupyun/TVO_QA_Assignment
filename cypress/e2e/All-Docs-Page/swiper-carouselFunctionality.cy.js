//Swiper-carousel Functionality
//Test Case 1: Verify the Swiper carousel is present and visible.
//Test Case 2: Verify the carousel displays multiple slides.
//Test Case 3: Verify that the user can click on the left and right arrows to navigate through the carousel.

describe("Verify Swiper-carousel Functionality", () => {
  it("the swiper carousel is present and visible", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
    cy.get(".carousel-nav").should("be.visible");
    cy.get(".swiper-slide").should("be.visible");
  });

  it("the swiper carousel displays multiple slides", () => {
    cy.get(".swiper-slide").should("have.length.greaterThan", 1);
    cy.get(".carousel-nav").should("have.length.greaterThan", 1);
  });
  
  it("user can click on the left and right arrows to navigate through the carousel", () => {
    cy.get(".carousel-button-next").click();
    cy.get(".carousel-nav-active").should(
      "not.have.class",
      "swiper-slide-prev"
    );
    cy.get(".carousel-button-prev").click();
    cy.get(".carousel-nav-active").should(
      "not.have.class",
      "swiper-slide-next"
    );

    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should(
      "not.have.class",
      "swiper-slide-prev"
    );
    cy.get(".swiper-button-prev").click();
    cy.get(".swiper-slide-active").should(
      "not.have.class",
      "swiper-slide-next"
    );
  });
});
