// Getting HTML elements
const addToCartButton = document.querySelector(".add-to-cart-button");

// eventListener for the add to cart-button
addToCartButton.addEventListener("click", () => {
    cartNumbers();
})

// Preventing the cart-numbers to update on refresh
function refreshPageCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".nav-cart-when-added span").textContent = productNumbers;
    }
}

// add to cart-button connecting to localStorage
function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".nav-cart-when-added span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".nav-cart-when-added span").textContent = 1;
    }
}

refreshPageCartNumbers();