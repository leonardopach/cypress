import Contact_us_PO from "./pageObjects/webdriver-uni/Contact_us_PO";
Cypress.Commands.add("repeat", nameItem => {
    const Link = cy.get("a[href*='product/category&path=']").contains(nameItem).click();

    const header = cy.get("span[class='maintext']").then($name => {
        const headerText = $name.text()
        cy.log(`Name title of page: ${headerText}`);
        expect(headerText).is.eq(nameItem);
    });

})

Cypress.Commands.add("contact_user", (firstName, lastName, email, messages, $messageCont, $have) => {

    const contact_us = new Contact_us_PO();
    contact_us.contactForm_Submission(firstName, lastName, email, messages, $messageCont, $have);
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text());
            cy.get(".productcart").eq(index).click();
        };

    });
})