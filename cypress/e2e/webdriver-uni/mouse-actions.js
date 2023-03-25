
/// <reference types="cypress"/>
beforeEach(() => {
    cy.visit("/");
})

describe("teste mouse action", () => {
    it("Scroll element into view", () => {
        cy.get("a[id='actions']").scrollIntoView().invoke("removeAttr", "target").click()
    })

    it("I should be able to drag and drop a draggable item", () => {
        cy.get("a[id='actions']")
            .scrollIntoView().invoke("removeAttr", "target").click();
        cy.get("[id='draggable']").trigger("mousedown", { which: 1 });

        cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true });
    })

    it("I should be able to perform a double mouse click", () => {
        cy.get("a[id='actions']")
            .scrollIntoView().invoke("removeAttr", "target").click();
        cy.get("[id='double-click']").dblclick();
    })

    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.get("a[id='actions']")
            .scrollIntoView().invoke("removeAttr", "target").click();
        cy.get("[id='click-box']").trigger("mousedown", { which: 1 }).then(($element) => {
            expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
            // $element.trigger("mouseup");
        });
    })

});