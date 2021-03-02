/* eslint-disable indent */
/*'use strict';


// let products= document.getElementById('products');
console.log(allCar);
// console.log(allCar[0].filePath);
let indeximage = 1;

for (let i = 0; i < 8; i++) {
    document.getElementById('image-' + indeximage).setAttribute('src', allCar[i].filePath);
    document.getElementById('img-brand-' + indeximage).textContent = allCar[i].kind;
    document.getElementById('car-name-' + indeximage).textContent = allCar[i].name;
    document.getElementById('car-price-' + indeximage).textContent = allCar[i].price;
    let targetRow = document.getElementById("add-to-cart-btn-" + indeximage);
    targetRow.setAttribute("data-price", allCar[i].price);
    targetRow.setAttribute("data-name", allCar[i].name);
    indeximage++;
    if (indeximage > 8) {
        break;
    }
}

let userCart = [];
function addToCart(targetId) {
    let target = document.getElementById(targetId);
    let price = target.getAttribute("data-price");
    let name = target.getAttribute("data-name");
    let car = {
        price: price,
        name: name
    };
    if (localStorage.getItem("user-cart")) {
        userCart = JSON.parse(localStorage.getItem("user-cart"));
    }
    userCart.push(car);
    console.log(JSON.stringify(userCart));
    localStorage.setItem("user-cart", JSON.stringify(userCart));
    console.log('added');

}*/

/* eslint-disable indent */
'use strict';


// let products= document.getElementById('products');
console.log(allCar);
// console.log(allCar[0].filePath);
let indeximage = 1;

for (let i = 0; i < 8; i++) {
    document.getElementById('image-' + indeximage).setAttribute('src', allCar[i].filePath);
    document.getElementById('img-brand-' + indeximage).textContent = allCar[i].kind;
    document.getElementById('car-name-' + indeximage).textContent = allCar[i].name;
    document.getElementById('car-price-' + indeximage).textContent = allCar[i].price;
    let targetRow = document.getElementById("add-to-cart-btn-" + indeximage);
    targetRow.setAttribute("data-price", allCar[i].price);
    targetRow.setAttribute("data-name", allCar[i].name);
    targetRow.setAttribute("data-color",allCar[i].color);
    targetRow.setAttribute("data-filePath",allCar[i].filePath);
    // console.log(x);
    indeximage++;
    if (indeximage > 8) {
        break;
    }
}

let userCart = [];
function addToCart(targetId) {
    let target = document.getElementById(targetId);
    let price = target.getAttribute("data-price");
    let name = target.getAttribute("data-name");
    let color =target.getAttribute("data-color");
    let filePath =target.getAttribute("data-filePath");
    let car = {
        price: price,
        name: name,
        color:color,
        filePath:filePath
        
    };
    if (localStorage.getItem("user-cart")) {
        userCart = JSON.parse(localStorage.getItem("user-cart"));
    }
    userCart.push(car);
    console.log(JSON.stringify(userCart));
    localStorage.setItem("user-cart", JSON.stringify(userCart));
    console.log('added');

}