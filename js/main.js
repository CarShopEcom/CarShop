/* eslint-disable indent */
'use strict';
// console.log(allCar);
let indeximage = 1;
for (let i = 0; i < 4; i++) {
    console.log('image-' + indeximage,'ssssssssssssssssssss', allCar[i].filePath);
    document.getElementById('image-' + indeximage).setAttribute('src', allCar[i].filePath);
    document.getElementById('img-brand-' + indeximage).textContent = allCar[i].kind;
    document.getElementById('car-name-' + indeximage).textContent = allCar[i].name;
    document.getElementById('car-price-' + indeximage).textContent = allCar[i].price;
    let targetRow = document.getElementById("add-to-cart-btn-" + indeximage);
    targetRow.setAttribute("data-price", allCar[i].price);
    targetRow.setAttribute("data-name", allCar[i].name);
    indeximage++;
    if (indeximage > 4) {
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

}