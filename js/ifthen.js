//shoping cart 

var items availible = ['dirt', 'ball', 'stick']

var cart = ['dert', 'ball', 'stick']

function viewCart() {
    console.log(cart);
}

viewCart();

function addToCart(item) {
    cart.push(item);
    viewCart();
}
addToCart();

///methods (  .nameofmethod)
//funtion nameOfFuntion(){arayName.method();}
//arrayName. splice ( indextostart, howmanyitemstooverwrite, howmanyitemsyouwanttosplice)
//.unshift (removes first item )
//

funtion removeCartItem(item) {
    for (var i = 0; i < cart.length; i++)
        if (item === cart[i]) {
            cart.splice(i, 1):
                viewCart():
        }
}
removeCartItem('nameofItem');