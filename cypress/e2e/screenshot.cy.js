function routeFn() {
  // return "/r/popular/?geo_filter=US";
  return "/";
}

describe("Component screenshot", () => {
  let elements;
  before(() => {
    cy.visit({ url: routeFn(), failOnStatusCode: false });
    cy.wait(1000);
    cy.get(".thing").then(($res) => {
      elements = $res;
    });
  });

  it("test screenshots", () => {
    elements.each((index, element) => {
      cy.wrap(element).compareSnapshot(index);
    });
  });
});
