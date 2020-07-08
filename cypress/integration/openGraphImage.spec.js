/// <reference types="cypress" />

describe("Open Graph Image Generator API Tests", function () {
  it("Should match image snapshot", function () {
    cy.visit(
      "http://localhost:3000/api/og?title=This%20Blog%20Post%20Does%20Not%20Exist&as=html"
    )
    cy.get("img").matchImageSnapshot("openGraphImage")
  })
})
