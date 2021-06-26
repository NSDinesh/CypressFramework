import  productCategoryPage from '../../support/pages/ProductCategoryPage'

const categoryMenuLinks = ".categorymenu>li>a";

export  default class HeaderSection{

    selectCategory(categoryName){
       cy.get(".categorymenu>li>a").contains(categoryName).click();
       return new productCategoryPage();
    }

}