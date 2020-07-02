/// <reference types="cypress" />

describe("Bar Chart Tests", function () {
  it("Should match image snapshot", function () {
    cy.visit(
      "http://localhost:3000/api/og?title=This%20Blog%20%20Post%20Does%20Not%20Exist"
    )
    cy.get("body").matchImageSnapshot("openGraphImage")
  })
})
