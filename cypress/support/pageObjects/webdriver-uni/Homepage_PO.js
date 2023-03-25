class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }

    clickOn_ContactUs_button() {
        cy.get("#contact-us").invoke("removeAttr", "target").click();
    }
}
export default HomePage_PO;