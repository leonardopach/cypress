Cypress.Commands.add("repeat", nameItem => {
    const Link = cy.get("a[href*='product/category&path=']").contains(nameItem).click();

    const header = cy.get("span[class='maintext']").then($name => {
        const headerText = $name.text()
        cy.log(`Name title of page: ${headerText}`);
        expect(headerText).is.eq(nameItem);
    });

})