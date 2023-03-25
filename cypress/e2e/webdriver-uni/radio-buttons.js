/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})

describe("Verify radios buttons via webdriveruni", () => {
    it("Check and validate radios", () => {
        cy.xpath("//a[@id='dropdown-checkboxes-radiobuttons']").invoke("removeAttr", "target").click();

        cy.get("form[id='radio-buttons']").find("input[type='radio']")
            .should("have.length", 5)
            .each(($radios) => {
                cy.wrap($radios).check();
                cy.wrap($radios).should("be.checked");
            }).eq(3).check();
    });

    it.only("Validate the states of specific radio buttons", () => {
        cy.xpath("//a[@id='dropdown-checkboxes-radiobuttons']").invoke("removeAttr", "target").click();

        cy.get("form[id='radio-buttons-selected-disabled']")
            .find("input[type='radio'][value='lettuce']")
            .check();

        cy.get("form[id='radio-buttons-selected-disabled']")
            .find("input[type='radio'][value='cabbage']")
            .should("be.disabled")
            .invoke("removeAttr", "disabled")
            .should("not.be.disabled")
            .check();


    });
});
