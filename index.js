document.title = "product cards";

const url = `http://fakestoreapi.com/products`;
const containerEl = document.querySelector(".container");

fetch(url)
.then(response => response.json())
.then(data => {
    let display = ``;
    for (let i = 0; i < data.length; i++) {
        display += `
        <div class= "cardBox">
            <div>
                <img src= "${data[i].image}">
            </div>
            <h3>${data[i].title}</h3>
            <p><strong>Price:</strong> $${data[i].price}</p>
            <p><strong>Category:</strong> ${data[i].category}</p>
        </div> 
        `
    }
    containerEl.innerHTML = display;
})