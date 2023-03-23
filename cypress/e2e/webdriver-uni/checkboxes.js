/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
})

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {

        cy.xpath("//a[@id='dropdown-checkboxes-radiobuttons']").invoke("removeAttr", "target").click();


        cy.get("input[type='checkbox']")
            .check()
            .should("be.checked")
            .eq(2)
            .uncheck()
            .should("not.be.checked");
    });
});
