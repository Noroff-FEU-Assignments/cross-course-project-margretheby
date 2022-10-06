let products = [
    {
        id: 1,
        name: "The hiker",
        tag: "hiker",
        price: 1.299,
        description: `Description of the jacket "The hiker" will appear here, giving the buyer information about this jackets specific features. Who need to get "The hiker", and detailed information about the most suitable use.`,
        inCart: 0
    },
    {
        id: 2,
        name: "The skier",
        tag: "skier",
        price: 1.599,
        description: `Description of the jacket "The skier" will appear here, giving the buyer information about this jackets specific features. Who need to get "The skier", and detailed information about the most suitable use.`,
        inCart: 0
    },
    {
        id: 3,
        name: "The rainyday",
        tag: "rainyday",
        price: 999,
        description: `Description of the jacket "The rainyday" will appear here, giving the buyer information about this jackets specific features. Who need to get "The rainyday", and detailed information about the most suitable use.`,
        inCart: 0
    },
    {
        id: 4,
        name: "The climber",
        tag: "climber",
        price: 1.199,
        description: `Description of the jacket "The climber" will appear here, giving the buyer information about this jackets specific features. Who need to get "The climber", and detailed information about the most suitable use.`,
        inCart: 0
    },
];

let hiker = products.findIndex((products) => products.tag=="hiker");
hiker = products[hiker];

let skier = products.findIndex((products) => products.tag=="skier");
skier = products[skier];

let rainyday = products.findIndex((products) => products.tag=="rainyday");
rainyday = products[rainyday];

let climber = products.findIndex((products) => products.tag=="climber");
climber = products[climber];



function getProducts() {
    for(let i = 0; i < products.length; i++) {
        const productID = products[i].id;
        const productTag = products[i].tag;
        const productPrice = products[i].price;
    }
}

getProducts();

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

function setItems(product) {

    for (let i = 0; i < products.length; i++) {
        let productTag = products[i].tag;
        let productName = products[i].name;
        let productInCart = products[i].inCart;

       let cartItems = localStorage.getItem("productsInCart")
        cartItems = JSON.parse(cartItems);
    /*
        if (cartItems != null) {
            cartItems[productInCart] += 1;
        } else {
            productInCart = 1;
        }*/
    
        cartItems = productTag;

        localStorage.setItem("productsInCart", JSON.stringify(cartItems))

    }
}

function updateCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products-container");
    let emptyCart = document.querySelector(".empty-cart");
    if (cartItems && productContainer) {

        emptyCart.style.display = "none";
        
        
        for (let i = 0; i < cartItems.length; i++) {
            productContainer.innerHTML += `
            <div class="cart-layout">
            <a href="${products[i].tag}.html">
            <div class="cart-product-info">
                <div class="cart-jacket-image">
                    <img src="images/carousel1.png" class="cart-image" alt="The Hiker">
                </div>
                <div class="cart-jacket-info">
                    <span>${products[i].name}</span>
                    <div class="color-section">
                        <p class="color-cart">Color: </p>
                        <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                    </div>
                    <div class="size-section">
                        <p class="size-cart">Size: </p>
                        <div class="product-size-card">S</div>
                    </div>
                </div>
            </div>
            </a>
            <div class="size-card-cart">
                <div class="product-size-card">
                    1
                </div>
            </div>
            <div class="cart-price">
                <h2>${products[i].price} kr</h2>
            </div>
        </div>`;
        }
    }
}


refreshPageCartNumbers();
updateCart();