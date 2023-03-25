/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get('[id="file-upload"]').invoke('removeAttr', 'target').click({ force: true });

})

describe("Test File Upload via webdriveruni", () => {
    it("Upload a file", () => {
        cy.get("input[id='myFile']").selectFile({
            contents: Cypress.Buffer.from('Downloads'),
            fileName: 'config.txt',
            mimeType: 'text/plain',
            lastModified: Date.now(),
        });
        cy.get("input[id='submit-button']").click();
    });
    it("Upload no file", () => {
        cy.get("input[id='submit-button']").click();

    });
})