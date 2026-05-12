let cartQuantity = 0;

function bagUpdate(){
    cartQuantity = cartQuantity + 1; 

    updateDisplay();
}

function wishUpdate(){
    if (cartQuantity > 0){
        cartQuantity--;
        updateDisplay();
    }
    else {
        alert("Your bag is already empaty!");
    }
}

function saleItemUpdate(){
    cartQuantity += 2;

    updateDisplay();
}

function updateDisplay() {
    document.querySelector('#cart-summary').innerText = `You bad has ${cartQuantity} items`;
}