/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("https://www.automationteststore.com");
})

describe("Iterater over elements", () => {
    it("Log information of all hair care products", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log(`Index: ${index} : ${$el.text()}`);
        });
    });

    it.only("Add specific produto to basket", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
                cy.wrap($el).click();
            };
        });
    });

});