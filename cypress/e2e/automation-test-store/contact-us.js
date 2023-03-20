describe("Test Contantac Us for via Automatio Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        cy.visit("https://www.automationteststore.com");
        cy.get(".info_links_footer").contains("Contact Us").click();

    });
});