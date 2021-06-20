
describe("Radio button and checkbox",()=>{

    it("example 1",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#courses-iframe').within(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).as('iFr')
        })
        cy.get('@iFr').find('.btn.btn-theme').within(el => {
            var a = el.text()
            cy.log(a);
        })
        cy.get('@iFr').find('.main-menu').contains('Courses').click()
        
        cy.get('#radio-btn-example input').check();

        cy.get('#checkbox-example input').first().check();
        cy.get('#checkbox-example input').each((element,index,list) => {
            if(!element.prop('checked')){
                cy.wrap(element).check({scrollBehavior:"center"})
            }
            //cy.wrap(element).click()
        })
    })

    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });

    it.only("Validate the states of specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get("[value='lettuce']").should('be.checked').and('be.enabled')
        cy.get("[value='pumpkin']").should('be.checked').and('be.enabled')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled').and('not.be.checked')
    });

})