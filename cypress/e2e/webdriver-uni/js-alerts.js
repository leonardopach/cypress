/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})
describe("Hnadle js alerts", () => {
    it("confirm js alert contains the correct text", () => {
        cy.xpath("//a[@id='popup-alerts']")
            .invoke("removeAttr", "target").click();
        cy.xpath("//div[@class='thumbnail']/div//span[@id='button1']").click();

        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!");
        })
    })
    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.xpath("//a[@id='popup-alerts']")
            .invoke("removeAttr", "target").click();
        cy.xpath("//div[@class='thumbnail']/div//span[@id='button4']").click();

        cy.on("window:alert", (str) => {
            return true;
        });
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })
    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.xpath("//a[@id='popup-alerts']")
            .invoke("removeAttr", "target").click();
        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click();

        cy.on("window:confirm", (str) => {
            return false;
        });

        cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    })
    it.only("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.xpath("//a[@id='popup-alerts']")
            .invoke("removeAttr", "target").click();

        const stub = cy.stub();
        cy.on("window:confirm", stub);

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Press a button!");
        }).then(() => {
            cy.get("#confirm-alert-text").contains("You pressed OK!");
        }).then(() => {
            cy.get('#button4').click();

            cy.on("window:confirm", () => {
                return false;
            });

            cy.get("#confirm-alert-text").contains("You pressed Cancel!");
        });
    })
});