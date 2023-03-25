/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("/");
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });
    cy.get("#datepicker").click();
})

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {

        // let date = new Date();
        // date.setDate(date.getDate());
        // cy.log(date.getDate());

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5);
        // cy.log(date2.getDate());

        let date = new Date();

        date.setDate(date.getDate() + 23);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", { month: "long" });
        let futureDay = date.getDate();

        function selectMonthAndYear() {

            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get(".next").first().click();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get(".next").first().click();
                    }
                });
            })
        }

        function selectFutureDay() {
            cy.get("[class='day']").contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();

    });
})