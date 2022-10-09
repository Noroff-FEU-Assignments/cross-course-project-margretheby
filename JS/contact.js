
// Contact form
const form = document.querySelector("form");

// Inputs and error messages in the form
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector(".first-name-error")
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector(".last-name-error")
const phoneNumber = document.querySelector("#phone");
const phoneNumberError = document.querySelector(".phone-error")
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error")
const message = document.querySelector("#message");
const messageError = document.querySelector(".message-error")

// Success message in the form
const successMessage = document.querySelector(".success-message");

// Send message button
const sendMessageButton = document.querySelector(".send-message-button");

function validateForm() {
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

    if (checkPhoneNumber(phoneNumber.value, 8) === true) {
        phoneNumberError.style.display = "none";
    } else {
        phoneNumberError.style.display = "block";
        submitForm = false;
    }

    if (checkPhoneNumber(phoneNumber.value, 8) === true) {
        phoneNumberError.style.display = "none";
    } else {
        phoneNumberError.style.display = "block";
        submitForm = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        submitForm = false;
    }

    if (checkLength(message.value, 15) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        submitForm = false;
    }

    if(submitForm) {
        handleSubmitForm();
        sendMessageButton.innerHTML = "Message sent";
        form.reset();
    }
}

form.addEventListener("submit", validateForm);



function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function checkPhoneNumber(value, len) {
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
    successMessage.style.display = "block";
}
/*
sendMessageButton.onclick = function changeText() {
        sendMessageButton.innerHTML = "Message sent";
} */