import { And, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
    cy.log("Executing before step");
    stub = cy.stub();
})
Given("I acess the WebdriverUniversity Login Portal Page", () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})

When("I enter a username {word}", (username) => {
    cy.get("#text").type(username);
})

And("I enter a password {word}", (password) => {
    cy.get("input[id='password']").type(password);
})

And("I click on the login button", () => {
    cy.get("[id='login-button']").click();
    cy.on("window:alert", stub);
})

Then("I should be presented with the following message {word} {word}", (message, message2) => {
    const expectedMessage = message + " " + message2;
    // cy.log(stub.get[0])
    expect(stub).to.be.calledWith(expectedMessage);
})