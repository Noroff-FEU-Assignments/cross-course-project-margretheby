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
        </section>`
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