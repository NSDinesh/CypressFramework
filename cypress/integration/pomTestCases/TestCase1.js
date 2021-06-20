
import HeaderSection from '../../support/pages/HeaderSection'
import ProductCategoryPage from '../../support/pages/ProductCategoryPage'

/// <reference types="cypress" />

describe("Test Suite",function(){

    const headerSection = new HeaderSection();
    const prdCategoryPage = new ProductCategoryPage();
    
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

        prdCategoryPage.selectItemFromContentPanel(itemOnContentPanel)

        prdCategoryPage.getProductCategoryHeader(this.testData.contentItem).
        should('equal',itemOnContentPanel)

        prdCategoryPage.selectAddToBag().addItemToCheckoutFromShoppingCart()
    })

    it("verify all category section links are working",function(){
        this.testData.categories.forEach(category => {
            headerSection.selectCategory(category).getProductCategoryHeader().should('equal',category)
        });
    })


})
