/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})
describe("Validate webdriveruni homepage links", () => {
    it("confirm links redirect to the correct pages", () => {
        cy.xpath("//a[@id='contact-us']")
            .invoke("removeAttr", "target").click();
        cy.url().should("include", "contactus");

        cy.go('back');
        cy.reload();
        // cy.reload(true) // realod without using cache

        cy.xpath("//a[@id='login-portal']").invoke("removeAttr", "target").click();
        cy.url().should("include", "index");

        cy.go("back");
        // cy.url().should("include", "contactus");
        cy.url().should("include", "/");

        cy.xpath("//a[@id='to-do-list']").invoke("removeAttr", "target").click();
        cy.url().should("include", "To-Do-List");
        cy.go("back");
    })
});