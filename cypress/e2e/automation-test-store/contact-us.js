/// <reference types="cypress"/>

describe("Test Contantac Us for via Automatio Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        cy.visit("https://www.automationteststore.com");
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("eq", "A place to practice your automation skills!");
        cy.url().should('eq', 'https://www.automationteststore.com/')
        cy.get(".info_links_footer").contains("Contact Us").click();
        cy.get("input[id='ContactUsFrm_first_name']").type("pedro");
        cy.get("input[id='ContactUsFrm_email']")
            .type("pedro@gmail.com")
            .should("have.attr", "name", "email");

        cy.get("textarea[id='ContactUsFrm_enquiry']").type("Desta maneira, a mobilidade dos capitais internacionais estimula a padronização do impacto na agilidade decisória.");

        cy.get("button[title='Submit']").click();

        cy.get(".mb40 > :nth-child(3)").should("have.text", "Your enquiry has been successfully sent to the store owner!");
        cy.log("hello moto");
    });
});