
let products = [
    {
        id: 1,
        name: "The hiker",
        tag: "hiker",
        price: 1299,
        description: `Description of the jacket "The hiker" will appear here, giving the buyer information about this jackets specific features. Who need to get "The hiker", and detailed information about the most suitable use.`,
        inCart: 0
    },
    {
        id: 2,
        name: "The skier",
        tag: "skier",
        price: 1599,
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
        id: 2,
        name: "The climber",
        tag: "climber",
        price: 1199,
        description: `Description of the jacket "The climber" will appear here, giving the buyer information about this jackets specific features. Who need to get "The climber", and detailed information about the most suitable use.`,
        inCart: 0
    },
];


for (let i = 0; i < products.length; i++) {
    const allJackets = document.querySelector(".all-jackets");
    allJackets.innerHTML += `
        <div class="jacket-page-card">
            <a href="${products[i].tag}.html?id=${products[i].tag}">
                <img src="images/resize-jacket-on-road.jpg" alt="${products[i].name}" class="jacket-page-card-img">
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
                <h3 class="product-card-price">${products[i].price} kr</h3>
            </a> 
        </div>`;
        
} 
