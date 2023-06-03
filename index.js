document.title = "Product Card"

imagenEl = document.querySelector(".imagen");
nameEl = document.querySelector("#name");
descriptionEl = document.querySelector("#description");
priceEl = document.querySelector("#price");
imagingEl = document.querySelector("#imaging");

function getProduct() {
    fetch(`https://fakestoreapi.com/products`
    ).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let title = data[i].title;
            let desc = data[i].description;
            let pricer = data[i].price;
            let imager = data[i].image;
        }
    });

}

getProduct();