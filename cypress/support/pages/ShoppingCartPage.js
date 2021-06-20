
export default class ShoppingCartPage{
    repo = {
        "AddToCartButton" : "a[class='cart']"
    }

    addItemToCheckoutFromShoppingCart(){
        cy.get(this.repo.AddToCartButton).click()
    }

}