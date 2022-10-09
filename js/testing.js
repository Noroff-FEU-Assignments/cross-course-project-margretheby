let addToCartButton = document.querySelector(".add-to-cart-button");
let cartId = addToCartButton.getAttribute("data-id");
let cartNumberDisplay = document.querySelector(".cart_number");

addToCartButton.addEventListener("click", () => {
  addItemToCart(cartId);
});

function refreshCart() {
  let productNumber = localStorage.getItem("addItemToCart");
  if (productNumber) {
    cartNumberDisplay.textContent = productNumber;
  }
}

function addItemToCart(cartId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("addItemToCart", productNumber + 1);
    cartNumberDisplay.textContent = productNumber + 1;
  } else {
    localStorage.setItem("addItemToCart", 1);
    cartNumberDisplay.textContent = 1;
  }
  addItem(cartId);
}
function addItem(cartId) {
  let cartItem = localStorage.getItem(cartId);
  cartItem = parseInt(cartItem);
  if (cartItem) {
    localStorage.setItem(cartId, cartItem + 1);
  } else {
    localStorage.setItem(cartId, 1);
  }
}

refreshCart();


// EGEN KODE
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart")
    let cartItem = JSON.parse(cartItems);
    cartItem = idParam;
    if(!cartItem) {
        cartItem = [];
    } else {
        if (cartItem === "hiker") {
            localStorage.setItem("productsInCart", JSON.stringify(hiker))
            hiker.inCart++;
        } else if (cartItem === "skier") {
            localStorage.setItem("productsInCart", JSON.stringify(skier))
            skier.inCart++;
        } else if (cartItem === "rainyday") {
            localStorage.setItem("productsInCart", JSON.stringify(rainyday))
            rainyday.inCart++;
        } else if (cartItem === "climber") {
            localStorage.setItem("productsInCart", JSON.stringify(climber))
            climber.inCart++;
        } else {

            localStorage.setItem("productsInCart", JSON.stringify([cartItem, cartItem]))
            list = JSON.parse(localStorage.productsInCart)
            list.push(cartItem)
            localStorage.setItem("productsInCart", JSON.stringify(list))
        }
    }
}

// Adding the items to localStorage

function setItems(product) {
    for (let i = 0; i < products.length; i++) {
        let cartItems = localStorage.getItem("productsInCart")
        let cartItem = JSON.parse(cartItems);
        cartItem = idParam;



        if (cartItem === products[0].tag) {
            localStorage.setItem("hikerInCart", JSON.stringify(products[0]));
            totalCost(products[0]);

        } else if (cartItem === products[1].tag) {
            localStorage.setItem("skierInCart", JSON.stringify(products[1]));
            totalCost(products[1]);
        } else if (cartItem === products[2].tag) {
            localStorage.setItem("rainydayInCart", JSON.stringify(products[2]));
            totalCost(products[2]);
        } else if (cartItem === products[3].tag) {
            localStorage.setItem("climberInCart", JSON.stringify(products[3]));
            totalCost(products[3]);
        }
    }
}

// Total price som jeg kanskje får bruk for
    let hikerTotalPrice = hikerInCart.inCart * hiker.price;
    let skierTotalPrice = skierInCart.inCart * skierInCart.price;
    let rainydayTotalPrice = rainydayInCart.inCart * rainydayInCart.price;
    let climberTotalPrice = (climberInCart.inCart * climberInCart.price);






// HELE KODEN MIN


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
    for (let i = 0; i < products.length; i++) {
        let cartItems = localStorage.getItem("productsInCart")
        let cartItem = JSON.parse(cartItems);
        cartItem = idParam;



        if (cartItem === products[0].tag) {
            localStorage.setItem("hikerInCart", JSON.stringify(products[0]));
            totalCost(products[0]);

        } else if (cartItem === products[1].tag) {
            localStorage.setItem("skierInCart", JSON.stringify(products[1]));
            totalCost(products[1]);
        } else if (cartItem === products[2].tag) {
            localStorage.setItem("rainydayInCart", JSON.stringify(products[2]));
            totalCost(products[2]);
        } else if (cartItem === products[3].tag) {
            localStorage.setItem("climberInCart", JSON.stringify(products[3]));
            totalCost(products[3]);
        }
    }
}



// Updating the cart with localStorage
function updateCart() {
    const productContainer = document.querySelector(".products-container");
    const emptyCart = document.querySelector(".empty-cart");
    let cartNumbers = localStorage.getItem("cartNumbers");



    let hikerInCart = localStorage.getItem("hikerInCart");
    hikerInCart = JSON.parse(hikerInCart);
    let skierInCart = localStorage.getItem("skierInCart");
    skierInCart = JSON.parse(skierInCart);
    let climberInCart = localStorage.getItem("climberInCart");
    climberInCart = JSON.parse(climberInCart);
    let rainydayInCart = localStorage.getItem("rainydayInCart");
    rainydayInCart = JSON.parse(rainydayInCart);

    if (!hikerInCart && !skierInCart && !climberInCart && !rainydayInCart){
            const purchaseButton = document.querySelector(".purchase").disabled = true;
        } else { 
            if(hikerInCart) {
                emptyCart.style.display = "none";
                
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
                    <select name="amount" id="amount">
                    <option value="${cartNumbers}">${cartNumbers}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                    </div>
                </div>
                <div class="cart-price">
                    <h2>${hiker.price} kr</h2>
                </div>
                </div><i class="btn-icons fa-solid fa-trash"></i>`;
            } 

            if(skierInCart) {
                emptyCart.style.display = "none";
                    
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
                        <select name="amount" id="amount">
                        <option value="${cartNumbers}">${cartNumbers}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                        </div>
                    </div>
                    <div class="cart-price">
                        <h2>${skierInCart.price} kr</h2>
                    </div>
                </div><i class="btn-icons fa-solid fa-trash"></i>`;
            }


            if(rainydayInCart) {
                emptyCart.style.display = "none";
                
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
                    <select name="amount" id="amount">
                    <option value="${cartNumbers}">${cartNumbers}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                    </div>
                </div>
                <div class="cart-price">
                    <h2>${rainydayInCart.price} kr</h2>
                </div>
                </div><i class="btn-icons fa-solid fa-trash"></i>`;
            }

            if(climberInCart) {
                emptyCart.style.display = "none";
                
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
                        <select name="amount" id="amount">
                        <option value="${cartNumbers}">${cartNumbers}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                        </div>
                    </div>
                    <div class="cart-price">
                        <h2>${climberInCart.price} kr</h2>
                    </div>
                </div><i class="btn-icons fa-solid fa-trash"></i>`;
            }            
            const totalPrice = document.querySelector(".total-price");
            totalPrice.innerHTML = `<h2>Total cost: ${localStorage.getItem("totalCost")}</h2>`
        }
    



    // Removing items from cart with localStorage
    const removeButton = document.querySelector(".fa-trash");
    removeButton.addEventListener("click", () => {
        removeItem();
    })

    function removeItem () {
        localStorage.clear();
        window.location.reload();
    } 
}


function totalCost(product) {
    
    let cartCost = localStorage.getItem("totalCost")
    cartCost = parseInt(cartCost)
    if (cartCost) {
        localStorage.setItem("totalCost", cartCost + product.price);
        console.log(cartCost);
    } else {
        localStorage.setItem("totalCost", product.price);
        cartCost = parseInt(cartCost)
    }

    

}

refreshPageCartNumbers();
updateCart();