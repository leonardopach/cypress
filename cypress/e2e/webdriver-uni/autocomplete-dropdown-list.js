/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})

const autocomplete = () => {
    cy.get("input[id='myInput']").type("A")
    cy.get("#myInputautocomplete-list > *").each(($el, index) => {
        const prod = $el.text();
        if (prod === "Avacado") {
            // $el.click();
            $el.trigger("click");

            cy.get("#submit-button").click();
            cy.url().should("contain", "Avacado");
        }
    }).then(() => {
        cy.get("input[id='myInput']").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index) => {
            const prod = $el.text();
            if (prod === "Grapes") {
                $el.trigger("click");
                cy.get("#submit-button").click();
                cy.url().should("contain", "Grapes");
            }
        })
    });
}

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.xpath("//a[@id='autocomplete-textfield']")
            .invoke("removeAttr", "target")
            .click()
            .invoke("val", autocomplete);


    })
});