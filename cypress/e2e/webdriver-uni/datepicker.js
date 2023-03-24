/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });
})

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {

        let date = new Date();
        date.setDate(date.getDate());
        cy.log(date.getDate());

        let date2 = new Date();
        date2.setDate(date.getDate() + 5);
        cy.log(date2.getDate());
    });
})