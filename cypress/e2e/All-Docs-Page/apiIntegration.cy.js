// API Integration:
// Test Case 1: Verify that the API call is made to retrieve the data for the page.
// Test Case 2: Verify that the API returns the correct data and the page displays it correctly.
// Test Case 3: Verify that the API returns the correct error message when there is a problem with the API call. (API)

describe("Verify API Integration", () => {
  it("API call is made to retrieve the data for the page", () => {
    cy.intercept("https://api.tvo.org/v3/docs-and-series", {
      method: "GET",
    }).as("getData");
  });

  it("API returns the correct data and the page displays it correctly", () => {
    cy.wait("@getData").then((xhr) => {
      expect(xhr.status).to.equal(200);
      expect(xhr.response.body).to.have.property("data");
    });
  });

  it("API returns the correct error message when there is a problem with the API call", () => {
    cy.intercept("https://api.tvo.org/v3/docs-and-series", {
      method: "GET",
      status: 500,
      response: { error: "Internal Server Error" },
    }).as("getDataError");
    
    cy.wait("@getDataError").then((xhr) => {
      expect(xhr.status).to.equal(500);
      expect(xhr.response.body.error).to.equal("Internal Server Error");
    });
  });
});
