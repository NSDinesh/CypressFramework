import  ProductCategoryPage from '../../support/pages/ProductCategoryPage'

export default class HeaderSection{

    repo = {
        categoryMenuLinks : ".categorymenu>li>a"
    }

    selectCategory(categoryName){
       cy.get(this.repo.categoryMenuLinks).contains(categoryName).click()
       return new ProductCategoryPage()
    }

}