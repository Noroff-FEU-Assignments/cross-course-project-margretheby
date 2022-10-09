// Checkout form
const form = document.querySelector("form");

// Inputs and error messages in the form
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector(".first-name-error")
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector(".last-name-error")
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error")
const address = document.querySelector("#address");
const addressError = document.querySelector(".address-error")
const postCode = document.querySelector("#postcode");
const postCodeError = document.querySelector(".postcode-error")
const city = document.querySelector("#city");
const cityError = document.querySelector(".city-error")
const cardNumber = document.querySelector("#cardnumber");
const cardNumberError = document.querySelector(".cardnumber-error")
const main = document.querySelector("main");

// Check-out success
const checkOutButtonSuccess = document.querySelector(".cta-button");


function validateCheckOut() {
    event.preventDefault();

    let submitForm = true;

    if (checkLength(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        submitForm = false;
    }

    if (checkLength(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        submitForm = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        submitForm = false;
    }

    if (checkLength(address.value, 5) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        submitForm = false;
    }

    if (checkLength(postCode.value, 4) === true) {
        postCodeError.style.display = "none";
    } else {
        postCodeError.style.display = "block";
        submitForm = false;
    }

    if (checkLength(city.value, 2) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
        submitForm = false;
    }

    if (checkCardNumber(cardNumber.value, 16) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
        submitForm = false;
    }

    if(submitForm) {
        handleSubmitForm();
        main.innerHTML = `
        <div class="header-image header-image-checkout-success">
        </div>
        <section>
            <div>
                <h1>THANK YOU</h1>
            </div>
            <div class="check-icon">
                <i class="btn-icons fa-solid fa-check"></i>
            </div>
            <div class="order-success">
                <p>Your order was successfully submitted. A confirmation has been sent to your e-mail.</p>
            </div>
            <div class="shop-more">
                <a href="jackets.html" class="cta-button">Shop more</a>
            </div>
        </section>`;
        localStorage.clear();
    }
}

form.addEventListener("submit", validateCheckOut);



function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function checkCardNumber(value, len) {
    if(value.trim().length === len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

function handleSubmitForm() {
    checkOutButtonSuccess.style.display = "block";
}

// Using localStorage in checkout summary

function updateCartSummary () {
    const cartSummary = document.querySelector(".checkout-summary")

    let hikerInCart = localStorage.getItem("hikerInCart");
    hikerInCart = JSON.parse(hikerInCart);
    let skierInCart = localStorage.getItem("skierInCart");
    skierInCart = JSON.parse(skierInCart);
    let climberInCart = localStorage.getItem("climberInCart");
    climberInCart = JSON.parse(climberInCart);
    let rainydayInCart = localStorage.getItem("rainydayInCart");
    rainydayInCart = JSON.parse(rainydayInCart);
    


    if(hikerInCart) {
        cartSummary.innerHTML += `
        <div class="cart-product-info">
            <div class="cart-jacket-image">
            <a href="${hikerInCart.tag}.html">
                <img src="images/carousel1.png" class="cart-image" alt="${hikerInCart.name}">
            </a>
            </div>
            <div class="cart-jacket-info">
                <span>${hikerInCart.name}</span>
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
                <div class="size-section">
                    <p class="color-cart">Amount: </p>
                    <div class="product-size-card">
                    <div class="product-size-card">
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
                </div>
                <div class="cart-price">
                    <h2>${hikerInCart.price * hikerInCart.inCart} kr</h2>
                </div>
            </div>
        </div>`
    }
    if (skierInCart) {
        cartSummary.innerHTML += `
        <div class="cart-product-info">
            <div class="cart-jacket-image">
            <a href="${skierInCart.tag}.html">
                <img src="images/carousel1.png" class="cart-image" alt="${skierInCart.name}">
            </a>
            </div>
            <div class="cart-jacket-info">
                <span>${skierInCart.name}</span>
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
                <div class="size-section">
                    <p class="color-cart">Amount: </p>
                    <div class="product-size-card">
                    <div class="product-size-card">
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
                </div>
                <div class="cart-price">
                    <h2>${skierInCart.price * skierInCart.inCart} kr</h2>
                </div>
            </div>
        </div>`

    }
    if (rainydayInCart) {
        cartSummary.innerHTML += `
        <div class="cart-product-info">
            <div class="cart-jacket-image">
            <a href="${rainydayInCart.tag}.html">
                <img src="images/carousel1.png" class="cart-image" alt="${rainydayInCart.name}">
            </a>
            </div>
            <div class="cart-jacket-info">
                <span>${rainydayInCart.name}</span>
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
                <div class="size-section">
                    <p class="color-cart">Amount: </p>
                    <div class="product-size-card">
                    <div class="product-size-card">
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
                </div>
                <div class="cart-price">
                    <h2>${rainydayInCart.price * rainydayInCart.inCart} kr</h2>
                </div>
            </div>
        </div>`

    }

    if (climberInCart) {
        cartSummary.innerHTML += `
        <div class="cart-product-info">
            <div class="cart-jacket-image">
            <a href="${climberInCart.tag}.html">
                <img src="images/carousel1.png" class="cart-image" alt="${climberInCart.name}">
            </a>
            </div>
            <div class="cart-jacket-info">
                <span>${climberInCart.name}</span>
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
                <div class="size-section">
                    <p class="color-cart">Amount: </p>
                    <div class="product-size-card">
                    <div class="product-size-card">
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
                </div>
                <div class="cart-price">
                    <h2>${climberInCart.price * climberInCart.inCart} kr</h2>
                </div>
            </div>
        </div>`
    
        
    }

}

updateCartSummary();