import  productCategoryPage from '../../support/pages/ProductCategoryPage'

//======Locator provided as constant============//
const categoryMenuLinks = ".categorymenu>li>a";

//==============================================//

export  default class HeaderSection{

    selectCategory(categoryName){
       cy.get(categoryMenuLinks).contains(categoryName).click();
       return new productCategoryPage();
    }

}