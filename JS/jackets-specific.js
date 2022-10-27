const buttons = document.querySelectorAll("[data-carousel-button]")
const successMessage = document.querySelector(".hidden");
const addToCart = document.querySelector(".add-to-cart-button");
const specificJacketInfo = document.querySelector(".specific-product-info");
const jacketName = document.querySelector(".jacket-name");
const imageSlides = document.querySelector(".image-slides");
const loading = document.querySelector(".loading");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://rainydays.maby.one/wp-json/wc/store/products/" + id;

// Displaying correct jackets
async function fetchJacket() {
    try {
        const response = await fetch(url);
        const jacketInfo = await response.json();

        createHtml(jacketInfo);
    } catch (error) {
        console.log(error);
    } 
    

}
fetchJacket();

function createHtml(jacketInfo) {
    imageSlides.innerHTML = `<li class="jacket-carousel-slide" data-active>
                                <img src="${jacketInfo.images[0].src}" alt="Jacket shown from the side" class="first-image-slide">
                            </li>
                            <li class="jacket-carousel-slide">
                                <img src="images/carousel2.png" alt="Jacket shown from behind">
                            </li>
                            <li class="jacket-carousel-slide">
                                <img src="Images/carousel3.png" alt="Jacket shown on someone skiing">
                            </li>
                            <li class="jacket-carousel-slide">
                                <img src="images/carousel4.png" alt="Jacket's details on the arms and zipper">
                            </li>`
    loading.innerHTML = "";
    jacketName.innerHTML = `${jacketInfo.name}`;
    specificJacketInfo.innerHTML = `
                        <p>${jacketInfo.description}</p>
                        <h3>${jacketInfo.prices.regular_price} KR</h3>
                        <div class="size-and-color-mobile">
                            <div class="available-colors"><p>Available in: </p></div>
                            <div class="color-cards">
                                <div title="White" class="product-card-color" style="background-color: #ffffff;"></div>
                                <div title="Yellow" class="product-card-color" style="background-color: #EBCD08;"></div>
                                <div title="Light blue" class="product-card-color" style="background-color: #537c87;"></div>
                                <div title="Orange" class="product-card-color" style="background-color: #DD4B00;"></div>
                                <div title="Purple" class="product-card-color" style="background-color: #9008EB;"></div>
                                <div title="Blue" class="product-card-color" style="background-color: #0043B8;"></div>
                                <div title="Black" class="product-card-color" style="background-color: #000000;"></div>
                            </div>                    
                            <div class="product-size"><p>Size: </p></div>
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
                    </div>`
}


// image carousel
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Add to cart success message

addToCart.onclick = function changeText() {
    successMessage.style.display = "block";
    successMessage.style.color = "#dd4b00";
    successMessage.style.margin = "20px";
}