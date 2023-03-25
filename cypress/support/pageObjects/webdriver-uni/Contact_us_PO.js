class Contact_us_PO {
    contactForm_Submission(firstName, lastName, email, messages, $messageCont, $have) {
        cy.screenshot("formulario em branco");
        cy.get("[name='first_name']").type(firstName);
        cy.get("[name='last_name']").type(lastName);
        cy.get("[name='email']").type(email);
        cy.get("[name='message']").type(messages);
        cy.get("[type='submit']").click();
        cy.contains($messageCont).should($have, $messageCont);
        // cy.screenshot("Make a contact us form submission");
    }

}

export default Contact_us_PO;