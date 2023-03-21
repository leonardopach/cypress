/// <reference types="cypress"/>

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {

        cy.visit("https://www.automationteststore.com");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    });


    it("Click on the first item using item text", () => {

        cy.visit("https://www.automationteststore.com");
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click().then(itemHeaderText => {
            cy.log("Selected the following item: " + itemHeaderText.text());
        });

    });

    it.only("Click on the first item using index", () => {

        cy.visit("https://www.automationteststore.com");
        cy.get(".fixed_wrapper").find(".prdocutname").eq(1).click().then(item => {
            cy.log("Selected the following item: " + item.text());
        });
    });
});