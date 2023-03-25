import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

/// <reference types="cypress"/>

describe("Test Contantac Us for via WebDriverUni", () => {
    beforeEach(() => {
        cy.fixture("contact-us").then(data => {
            globalThis.data = data;
        });
        const homepage_po = new HomePage_PO();

        homepage_po.visitHomePage();
        homepage_po.clickOn_ContactUs_button();
    })
    it.only("Should be able to submit a successful submission via contact us form", () => {

        cy.contact_user(data.first_name, data.last_name, data.email, data.message, "Thank You for your Message!", "have.text");
    });
    it("Should be not be able to submit a successful submission via contact us form as all fields are required", () => {

        cy.contact_user(Cypress.env("first_name"), data.last_name, data.email_invalid, data.message, "Error: Invalid email address", "be.visible");
    });
});
