
import headerSection from '../../support/pages/HeaderSection'
import productCategoryPage from '../../support/pages/ProductCategoryPage'

/// <reference types="cypress" />

describe("Test Suite",function(){
    
    //fetch the url from Cypress.json from baseUrl key
    beforeEach(function(){
        cy.visit("/")
    })

    beforeEach(function(){
        cy.fixture(Cypress.env('testDataFile')).then(function(testData){
            this.testData = testData
        })
    })

    it.only("aa",function(){
        const a = this.testData.contentItem
        cy.log(a)
    })


    it("Add product to checkout",function(){
        const category = this.testData.category
        const itemOnContentPanel = this.testData.contentItem

        headerSection.selectCategory(category).getProductCategoryHeader().
        should('equal',this.testData.category)

        productCategoryPage.selectItemFromContentPanel(itemOnContentPanel)

        productCategoryPage.getProductCategoryHeader(this.testData.contentItem).
        should('equal',itemOnContentPanel)

        productCategoryPage.selectAddToBag().addItemToCheckoutFromShoppingCart()
    })

    it("verify all category section links are working",function(){
        this.testData.categories.forEach(category => {
            headerSection.selectCategory(category).getProductCategoryHeader().should('equal',category)
        });
    })


})
