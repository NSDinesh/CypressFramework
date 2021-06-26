
export default class ShoppingCartPage{
    //Locator provided in object expression
    repo = {
        "addToCartButton" : "a[class='cart']"
    }

    addItemToCheckoutFromShoppingCart(){
        cy.get(this.repo.addToCartButton).click()
    }

}