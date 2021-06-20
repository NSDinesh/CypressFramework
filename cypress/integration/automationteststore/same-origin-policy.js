/// <reference types="cypress" />

describe("Cypress web security", () => {

    //try chromewebsecurity flag to false in cypress.json also
    
    it("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})