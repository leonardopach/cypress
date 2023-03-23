/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
})

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {

        cy.xpath("//a[@id='dropdown-checkboxes-radiobuttons']").invoke("removeAttr", "target").click();


        cy.get("input[type='radio']")
            .should("have.length", 8);
    });
});
