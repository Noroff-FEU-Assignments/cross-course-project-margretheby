

let products = [
    {
        id: 1,
        name: "The hiker",
        tag: "hiker",
        price: 1299,
        description: `Description of the jacket "The hiker" will appear here, giving the buyer information about this jackets specific features. Who need to get "The hiker", and detailed information about the most suitable use.`,
        inCart: 1
    },
    {
        id: 2,
        name: "The skier",
        tag: "skier",
        price: 1599,
        description: `Description of the jacket "The skier" will appear here, giving the buyer information about this jackets specific features. Who need to get "The skier", and detailed information about the most suitable use.`,
        inCart: 1
    },
    {
        id: 3,
        name: "The rainyday",
        tag: "rainyday",
        price: 999,
        description: `Description of the jacket "The rainyday" will appear here, giving the buyer information about this jackets specific features. Who need to get "The rainyday", and detailed information about the most suitable use.`,
        inCart: 1
    },
    {
        id: 4,
        name: "The climber",
        tag: "climber",
        price: 1199,
        description: `Description of the jacket "The climber" will appear here, giving the buyer information about this jackets specific features. Who need to get "The climber", and detailed information about the most suitable use.`,
        inCart: 1
    },
];


// Getting each object in the array into its own variable
let hiker = products.findIndex((products) => products.tag=="hiker");
hiker = products[hiker];

let skier = products.findIndex((products) => products.tag=="skier");
skier = products[skier];

let rainyday = products.findIndex((products) => products.tag=="rainyday");
rainyday = products[rainyday];

let climber = products.findIndex((products) => products.tag=="climber");
climber = products[climber];

// Getting params for adding to localStorage
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id')



// Getting HTML elements
const addToCartButton = document.querySelector(".add-to-cart-button");
const purchaseButton = document.querySelector(".purchase")



// eventListener for the add to cart-button
addToCartButton.addEventListener("click", () => {
    cartNumbers(idParam);
})



// Preventing the cart-numbers to update on refresh
function refreshPageCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".nav-cart-when-added span").textContent = productNumbers;
    }
}

// add to cart-button connecting to localStorage
function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".nav-cart-when-added span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".nav-cart-when-added span").textContent = 1;
    }

    setItems(product);
}


// Adding the items to localStorage

function setItems(product) {

        let cartItems = localStorage.getItem("productsInCart")
        let cartItem = JSON.parse(cartItems);
        cartItem = idParam;

        if (cartItem === "hiker") {
            localStorage.setItem("hikerInCart", JSON.stringify(hiker));
            hiker.inCart++;
            totalCostHiker();
        } else if (cartItem === "skier") {
            localStorage.setItem("skierInCart", JSON.stringify(skier));
            skier.inCart++;
            totalCostSkier();
        } else if (cartItem === "rainyday") {
            localStorage.setItem("rainydayInCart", JSON.stringify(rainyday));
            rainyday.inCart++;
            totalCostRainyday();
        } else if (cartItem === "climber") {
            localStorage.setItem("climberInCart", JSON.stringify(climber));
            climber.inCart++;
            totalCostClimber();
        }
}


// Updating the cart with localStorage
function updateCart() {
    const productContainer = document.querySelector(".products-container");
    let cartNumbers = localStorage.getItem("cartNumbers");
    const emptyCart = document.querySelector(".empty-cart");


    let hikerInCart = localStorage.getItem("hikerInCart");
    hikerInCart = JSON.parse(hikerInCart);
    let skierInCart = localStorage.getItem("skierInCart");
    skierInCart = JSON.parse(skierInCart);
    let climberInCart = localStorage.getItem("climberInCart");
    climberInCart = JSON.parse(climberInCart);
    let rainydayInCart = localStorage.getItem("rainydayInCart");
    rainydayInCart = JSON.parse(rainydayInCart);



    


    if (!hikerInCart && !skierInCart && !climberInCart && !rainydayInCart){
            purchaseButton.disabled = true;
        } else { 
            emptyCart.style.display = "none";

            if(hikerInCart) {
                productContainer.innerHTML += `
                <div class="cart-layout">
                <div class="cart-product-info">
                    <a href="${hikerInCart.tag}.html">
                    <div class="cart-jacket-image">
                        <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                    </div>
                    
                    <div class="cart-jacket-info">
                        <span>${hikerInCart.name}</span>
                    </a>
                        <div class="color-section">
                            <p class="color-cart">Color: </p>
                            <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                        </div>
                        <div class="size-section">
                        <div class="product-size-cards">
                            <p class="amount-mobile">Size:</p>
                            <select name="size" id="size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div class="size-card-cart">
                    <div class="product-size-card">
                    <span class="hidden amount-mobile">Amount: </span>
                    <select name="amount" id="amount">
                        <option value="${hikerInCart.inCart}">${hikerInCart.inCart}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                </div>
                <div class="cart-price">
                    <h2>${hikerInCart.inCart * hiker.price} kr</h2>
                </div>
                </div>`;
            } 

            if(skierInCart) {
                    
                productContainer.innerHTML += `
                <div class="cart-layout">
                <div class="cart-product-info">
                    <a href="${skierInCart.tag}.html">
                    <div class="cart-jacket-image">
                        <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                    </div>
                    <div class="cart-jacket-info">
                        <span>${skierInCart.name}</span>
                    </a>
                        <div class="color-section">
                            <p class="color-cart">Color: </p>
                            <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                        </div>
                        <div class="size-section">
                        <div class="product-size-cards">
                            <p class="amount-mobile">Size:</p>
                            <select name="size" id="size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                    </div>
                         </div>
                    </div>
                </div>
                    
                    <div class="size-card-cart">
                        <div class="product-size-card">
                        <span class="hidden amount-mobile">Amount: </span>
                        <select name="amount" id="amount">
                        <option value="${skierInCart.inCart}">${skierInCart.inCart}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                        </div>
                    </div>
                    <div class="cart-price">
                        <h2>${skierInCart.inCart * skierInCart.price} kr</h2>
                    </div>
                </div>`;
            }


            if(rainydayInCart) {
                
                productContainer.innerHTML += `
                <div class="cart-layout">
                
                <div class="cart-product-info">
                    <a href="${rainydayInCart.tag}.html">
                    <div class="cart-jacket-image">
                        <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                    </div>
                    
                    <div class="cart-jacket-info">
                        <span>${rainydayInCart.name}</span>
                    </a>
                        <div class="color-section">
                            <p class="color-cart">Color: </p>
                            <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                        </div>
                        <div class="size-section">
                        <div class="product-size-cards">
                            <p class="amount-mobile">Size:</p>
                            <select name="size" id="size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                    </div>
                        </div>
                    </div>
                </div>
                
                <div class="size-card-cart">
                    <div class="product-size-card">
                    <span class="hidden amount-mobile">Amount: </span>
                    <select name="amount" id="amount">
                    <option value="${rainydayInCart.inCart}">${rainydayInCart.inCart}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                    </div>
                </div>
                <div class="cart-price">
                    <h2>${rainydayInCart.inCart * rainydayInCart.price} kr</h2>
                </div>
                </div>`;
            }

            if(climberInCart) {
                
                productContainer.innerHTML += `
                <div class="cart-layout">
                    <div class="cart-product-info">
                        <a href="${climberInCart.tag}.html">
                        <div class="cart-jacket-image">
                            <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                        </div>
                        
                        <div class="cart-jacket-info">
                            <span>${climberInCart.name}</span>
                        </a>
                            <div class="color-section">
                                <p class="color-cart">Color: </p>
                                <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                            </div>
                            <div class="size-section">
                            <div class="product-size-cards">
                                <p class="amount-mobile">Size:</p>
                                <select name="size" id="size">
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                        </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="size-card-cart">
                        <div class="product-size-card">
                        <span class="hidden amount-mobile">Amount: </span>
                        <select name="amount" id="amount">
                        <option value="${climberInCart.inCart}">${climberInCart.inCart}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                        </div>
                    </div>
                    <div class="cart-price">
                        <h2>${climberInCart.inCart * climberInCart.price} kr</h2>
                    </div>
                </div>`;
            }            
            const totalPrice = document.querySelector(".total-price");
            totalPrice.innerHTML = `<div class="remove-items-cart"><h3>Empty cart </h3><i class="btn-icons fa-solid fa-trash"></i></div>`
        }
    



    // Removing items from cart with localStorage
    const removeButton = document.querySelector(".remove-items-cart");
    if (removeButton) {
        removeButton.addEventListener("click", () => {
            removeItem();
        })
    }

    function removeItem () {
        localStorage.clear();
        window.location.reload();
    } 
}

/*
// Unfinished: calculate total cost
function totalCostHiker() {
    
    let cartCost = localStorage.getItem("totalCostHiker")
    cartCost = parseInt(cartCost)
    if (cartCost) {
        localStorage.setItem("totalCostHiker", cartCost + hiker.price);
    } else {
        localStorage.setItem("totalCostHiker", hiker.price);
        cartCost = parseInt(cartCost)
    }
}

function totalCostSkier() {
    
    let cartCost = localStorage.getItem("totalCostSkier")
    cartCost = parseInt(cartCost)
    if (cartCost) {
        localStorage.setItem("totalCostSkier", cartCost + skier.price);
    } else {
        localStorage.setItem("totalCostSkier", skier.price);
        cartCost = parseInt(cartCost)
    }
}

function totalCostRainyday() {
    
    let cartCost = localStorage.getItem("totalCostRainyday")
    cartCost = parseInt(cartCost)
    if (cartCost) {
        localStorage.setItem("totalCostRainyday", cartCost + rainyday.price);
    } else {
        localStorage.setItem("totalCostRainyday", rainyday.price);
        cartCost = parseInt(cartCost)
    }
}

function totalCostClimber() {
    
    let cartCost = localStorage.getItem("totalCostClimber")
    cartCost = parseInt(cartCost)
    if (cartCost) {
        localStorage.setItem("totalCostClimber", cartCost + climber.price);
    } else {
        localStorage.setItem("totalCostClimber", climber.price);
        cartCost = parseInt(cartCost)
    }
} */




// Calling functions

refreshPageCartNumbers();
updateCart();