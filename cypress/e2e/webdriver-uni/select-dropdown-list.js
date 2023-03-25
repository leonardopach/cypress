/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.xpath("//a[@id='dropdown-checkboxes-radiobuttons']")
            .invoke("removeAttr", "target")
            .click();

        let value = ["JAVA", "C#", "Python", "SQL"];
        for (let i = 0; i < value.length; i++) {
            cy.get("#dropdowm-menu-1").select(value[i]).should("have.value", value[i].toLowerCase());
        }

        cy.get("#dropdowm-menu-2").select("JUnit").should("have.value", "junit");
        cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value", "javascript");
    });

});