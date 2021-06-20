/// <reference types="Cypress" />

describe("fixture", function () {

    before(function () {
        // cy.fixture('example').as('jsonData')
        cy.fixture('example').then(function(exampleData){
            //this.exampleData = exampleData   //sometimes this wont work, go for globalThis
            globalThis.exampleData = exampleData
        })
    })

    it.only("different way of getting fixture", function () {
        //storing in aliases and fetching the data
        cy.fixture('example').as('jsonData')
        cy.get('@jsonData').then(function (data) {
            cy.log(data.name)
        })

        //without alias
        cy.fixture('example').then(function (data) {
            cy.log(data.name)
        })

        cy.log(exampleData.name)

    })
})