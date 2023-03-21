/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("https://www.automationteststore.com");
})

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigation to specific product pages", () => {
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        const skicarepLink = cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });

    it("Navigation to specific product pages", () => {
        cy.repeat("Hair Care");
    });

    it("Validate properties of the Contact Us page", () => {
        cy.get("a[href*='content/contact']").click();

        //Uses cypress commands and chaining 
        cy.contains("#ContactUsFrm", "Contact Us Form")
            .find("#field_11")
            .should("contain", "First name");

        //Jquery Approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text => {
            const firstNametext = text.find("#field_11").text();
            expect(firstNametext).to.contain("First name");

            //Embedded commands 
            cy.get("#field_11").then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            })
        })

    });
});