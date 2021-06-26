import  ProductCategoryPage from '../../support/pages/ProductCategoryPage'

class HeaderSection{

    repo = {
        categoryMenuLinks : ".categorymenu>li>a"
    }

    selectCategory(categoryName){
       cy.get(this.repo.categoryMenuLinks).contains(categoryName).click()
       return new ProductCategoryPage()
    }

}

const headerSection = new HeaderSection();
export default headerSection;