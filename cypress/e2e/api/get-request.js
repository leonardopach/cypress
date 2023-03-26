/// <reference types="cypress"/>

describe('Get Request', () => {

    let result;
    it('Validate status code of the /posts api', () => {
        result = cy.request("http://localhost:3000/posts")
            .its("status").should("equal", 200);
    });

    it.only("Validate /posts api contains the correct keys and values", () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            expect(body[0]).has.property("title", "json-server");
            cy.log(body);
            body.forEach((item) => {
                expect(item).to.have.all.keys("id", "title", "author");
                cy.log(`Autor ${item["author"]}, & Title ${item["title"]}`);
            })
        });

    })
});