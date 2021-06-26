
export default class ShoppingCartPage{
    repo = {
        "addToCartButton" : "a[class='cart']"
    }

    addItemToCheckoutFromShoppingCart(){
        cy.get(this.repo.addToCartButton).click()
    }

}