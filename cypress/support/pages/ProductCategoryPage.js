
import ProductCategoryPageRepo from '../pagesrepo/ProductCategoryPageRepo'
import ShoppingCartPage from '../pages/ShoppingCartPage'
/// <reference types="cypress" />

class ProductCategoryPage extends ProductCategoryPageRepo{

    getProductCategoryHeader() {
        return cy.get(this.header).children('span').eq(0).then((ele) => {
            return ele.text()
        })
    }

    selectItemFromContentPanel(item) {
        cy.get(this.contentPanel).contains(item).click()
    }

    selectAddToBag() {
        cy.get(this.addToCart).eq(0).click()
        return new ShoppingCartPage()
    }


}

const productCategoryPage = new ProductCategoryPage();
export default productCategoryPage;