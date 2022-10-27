
// API URL
const url = "http://rainydays.maby.one/wp-json/wc/store/products";

// Fetching all jackets from API
async function fetchJackets() {
    try {
    
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
        const allJackets = document.querySelector(".all-jackets");
        const loading = document.querySelector(".loading");
        if (allJackets) {
            if (loading) {
                loading.innerHTML = "";
            }
            allJackets.innerHTML += `
                <div class="jacket-page-card">
                    <a href="jacket-specific.html?id=${products[i].id}">
                        <img src="${products[i].images[0].src}" alt="${products[i].name}" class="jacket-page-card-img">
                        <div class="color-cards">
                            <div title="White" class="product-card-color" style="background-color: #ffffff;"></div>
                            <div title="Yellow" class="product-card-color" style="background-color: #EBCD08;"></div>
                            <div title="Light blue" class="product-card-color" style="background-color: #537c87;"></div>
                            <div title="Orange" class="product-card-color" style="background-color: #DD4B00;"></div>
                            <div title="Purple" class="product-card-color" style="background-color: #9008EB;"></div>
                            <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                            <div title="Black" class="product-card-color" style="background-color: #000000;"></div>
                        </div>
                        <h3 class="heading-jacket">${products[i].name}</h3>
                        <h3 class="product-card-price">${products[i].prices.regular_price} kr</h3>
                    </a> 
                </div>`;
             }
        } 
    } catch(error) {
        console.log(error);
        loading.innerHTML = "";
        allJackets.innerHTML = `<p>Something went wrong.</p>`
    } 
}
fetchJackets();

// Display popular jackets on index.html
const popularJackets = document.querySelector(".popular-jackets");


async function fetchPopularJackets() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const loading = document.querySelector(".loading");
        for (let i = 0; i < 3; i++) {
            loading.innerHTML = "";
            popularJackets.innerHTML += `
            <div class="jacket-page-card">
                <a href="jacket-specific.html?id=${result[i].id}">
                    <img src="${result[i].images[0].src}" alt="${result[i].name}" class="jacket-page-card-img">
                    <div class="color-cards">
                        <div title="White" class="product-card-color" style="background-color: #ffffff;"></div>
                        <div title="Yellow" class="product-card-color" style="background-color: #EBCD08;"></div>
                        <div title="Light blue" class="product-card-color" style="background-color: #537c87;"></div>
                        <div title="Orange" class="product-card-color" style="background-color: #DD4B00;"></div>
                        <div title="Purple" class="product-card-color" style="background-color: #9008EB;"></div>
                        <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                        <div title="Black" class="product-card-color" style="background-color: #000000;"></div>
                    </div>
                    <h3 class="heading-jacket">${result[i].name}</h3>
                    <h3 class="product-card-price">${result[i].prices.regular_price} kr</h3>
                </a> 
            </div>`
        }


    } catch (error) {
        console.log(error);
        popularJackets.innerHTML = `<p>Something went wrong.</p>`
    }
}
fetchPopularJackets(); 



// Getting params for adding to localStorage
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id')


// Getting HTML elements
const addToCartButton = document.querySelector(".add-to-cart-button");
const purchaseButton = document.querySelector(".purchase")



// eventListener for the add to cart-button
addToCartButton.addEventListener("click", () => {
    cartNumbers();
    setItems(); 
})

// Adding the items to localStorage

function setItems() {
    let cartItems = localStorage.setItem("productsInCart", idParam);
    let cartItem = JSON.stringify(cartItems);
    console.log(cartItems)

    const productContainer = document.querySelector(".products-container")

    if ("productsInCart" === 18) {
        productContainer.innerHTML = `
                <div class="cart-layout">
                <div class="cart-product-info">
                    <a href="jacket-specific.html?=${idParam}">
                    <div class="cart-jacket-image">
                        <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                    </div>
                    
                    <div class="cart-jacket-info">
                        <span>The Climber</span>
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
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                </div>
                <div class="cart-price">
                    <h2>1199 kr</h2>
                </div>
                </div>`;
            } 

}




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
}


/*
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
    let lightweightInCart = localStorage.getItem("lightweightInCart");
    lightweightInCart = JSON.parse(lightweigtInCart);

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
} */

// Calling functions
refreshPageCartNumbers();