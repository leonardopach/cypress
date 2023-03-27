/// <reference types="cypress"/>

describe("Add multiple items to basket", () => {
    before(() => {
        cy.fixture("products").then(data => {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Add specific items to basket ", () => {
        data.productName.forEach(element => {
            cy.addProductToBasket(element).then(() => {
                debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click();
    });
})
