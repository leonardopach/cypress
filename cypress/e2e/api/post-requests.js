/// <reference types="cypress"/>

describe('Post Request', () => {
    let titleOfPosts = new Array();
    it('Create a new post via /posts api', () => {
        cy.api({
            method: "POST",
            url: 'http://localhost:3000/posts',
            body: {
                title: "Want to learn automation testing?",
                author: "Sarah Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(201);
        })
    });

    it("Validate title of latest post", () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach(item => {
                titleOfPosts.push(item["title"]);
            });
        })
    })
});