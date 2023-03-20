describe("Test Contantac Us for via WebDriverUni", () => {
    ///<reference type="cypress">
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com");

        cy.get("#contact-us").invoke("removeAttr", "target").click();

        cy.get("[name='first_name']").type("pedro");
        cy.get("[name='last_name']").type("silva");
        cy.get("[name='email']").type("silvapedro@test.com");
        cy.get("[name='message']").type("As experiências acumuladas demonstram que a determinação clara de objetivos desafia a capacidade de equalização do retorno esperado a longo prazo.");

        cy.get("[type='submit']").click();

        cy.contains("Thank You for your Message!").should("have.text", "Thank You for your Message!");
    });
    it("Should be not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com");

        cy.get("#contact-us").invoke("removeAttr", "target").click();

        cy.get("input[name='first_name']").type("pedro");
        cy.get("input[name='last_name']").type("silva");
        cy.get("input[name='email']").type("silvapedro#test.com");
        cy.get("textarea[name='message']").type("As experiências acumuladas demonstram que a determinação clara de objetivos desafia a capacidade de equalização do retorno esperado a longo prazo.");

        cy.get("[type='submit']").click();
        cy.contains("Error: Invalid email address").should("be.visible");
    });
});
