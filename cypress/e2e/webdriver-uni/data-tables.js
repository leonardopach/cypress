/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total age of all users", () => {

        let userDetails = [];
        let num = 0;
        cy.get("#thumbnail-1 td").each(($el, index) => {
            userDetails[index] = $el.text();
        }).then(() => {
            for (let i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i])
                }
            }
            cy.log(num);
            expect(num).to.eq(322)
        });

    });
    it.only("Calculate and assert the age of a given user based on last name", () => {

        let userDetails = [];
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index) => {
            userDetails[index] = $el.text();
        }).then(() => {
            for (let i = 0; i < userDetails.length; i++) {
                cy.log(userDetails[i]);
            }
        })
    });

});