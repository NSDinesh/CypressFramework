/// <reference types="cypress"/>

describe("automation test store", () => {

    it("select face from makeup", () => {
        cy.visit("https://www.automationteststore.com")
       
        cy.get('.subnav>ul>li>a').each((element, index, list) => {

            //text cannot be diectly used with cypress method
            // cy.get('.subnav>ul>li>a').eq(index).then(function($subMenu){
            //     if($subMenu.text().includes('Makeup')){
            //         cy.wrap($subMenu).click()
            //     }
            // })

            const subMenuHdr = element.text()
            cy.log(subMenuHdr)
            if(subMenuHdr.includes('Makeup')){
               cy.wrap(element).click();
               return false;
            }

        })
        //validation
        cy.get('.maintext').should('have.text','Makeup')

        cy.get('.thumbnails.row>li>a').each((element1, index, list) => {
            const items = element1.next().text()
            cy.log(items)
            if(items.includes('Face')){
                cy.wrap(element1).click();
                return false;
            }

        })
        //validation
        cy.get('.maintext').should('have.text','Face')

        //Alias 
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('prd')
        cy.get('@prd').should('include','Delicate Oil-Free Powder Blush')
        cy.get('@prd').its('length').should('be.greaterThan',10)

        //this get all the text from list element and put it in single string
        cy.get('.fixed_wrapper .prdocutname').invoke('text').should('include','Product with stock locations')
        
        cy.get('.thumbnails.grid .thumbnail').as('prdThumbnail')
        cy.get('@prdThumbnail').should('have.length','2')
        cy.get('@prdThumbnail').find('.productcart').invoke('attr','title').should('eq','Add to Cart')

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').then((t)=>{
            cy.log(t)
        })

    })

})