/// <reference types="cypress"/>

describe("automation test store 2", () => {

    //Alias,invoke,variables and iterate example
    it("Calculate total normal and discount price of products", () => {
        cy.visit("https://www.automationteststore.com")
        cy.get('.thumbnail').as('prdThumbnail')
        //to print all normal price
        cy.get('@prdThumbnail').find('.oneprice').each(($element,index,$list) => {
            cy.log($element.text())
        })

        cy.get('@prdThumbnail').find('.oneprice').invoke('text').as('normalPrice')
        cy.get('@prdThumbnail').find('.pricenew').invoke('text').as('discountPrice')
    
        cy.get('@normalPrice').then(($normalPrice) => {
            var totalPrice = 0;
            var normalPrice = $normalPrice.split('$')
            cy.log(normalPrice.length)
            for(var i=0;i<normalPrice.length;i++){
                cy.log(normalPrice[i])
                totalPrice += Number(normalPrice[i])
            }
            cy.log("Total normal price - "+totalPrice)
        })

        cy.get('@discountPrice').then(($discountPrice) => {
            var totalPrice = 0;
            var discountPrice = $discountPrice.split('$')
            cy.log(discountPrice.length)
            for(var i=0;i<discountPrice.length;i++){
                cy.log(discountPrice[i])
                totalPrice += Number(discountPrice[i])
            }
            cy.log("Total discount price - "+totalPrice)
        })
       
    })
})