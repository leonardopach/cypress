/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("https://www.automationteststore.com");
})

describe("Alias and invoke", () => {
    it("Validate a specific hair care product ", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.gt", 18);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");

    })

    it("count a specific hair care product ", () => {

        cy.get('.thumbnail').as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.eq", 16);
        cy.get("@productThumbnail")
            .find(".productcart")
            .invoke("attr", "title")
            .should("include", "Add to Cart");
    })

    it("Calculate total of normal and sale products", () => {

        cy.get('.thumbnail').as("productThumbnail");
        cy.get("@productThumbnail").find(".pricenew").invoke("text").as("itemPrice");


        cy.get("@productThumbnail").find(".oneprice")
            .each($el => {
                cy.log($el.text())
            }).then($valor => {
                let itemPrice = $valor.text().split("$");
                let itemTotal = 0;
                for (let i = 0; i < itemPrice.length; i++) {
                    itemTotal += Number(itemPrice[i]);
                }
                cy.log(itemTotal)
            });

        let itemTotal = 0;
        cy.get("@itemPrice")
            .then($linkText => {
                let itemPrice = $linkText.split("$");

                for (let i = 0; i < itemPrice.length; i++) {
                    itemTotal += Number(itemPrice[i]);
                    cy.log(`The price new is: ${itemPrice[i]}`)
                }
                cy.log(itemTotal)
            }).then(() => {
                expect(itemTotal).to.equal(341);
            })
    })
})