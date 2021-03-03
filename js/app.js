/* eslint-disable indent */
'use strict';
const allCar = [];
const Product = function (filePath, name, price, kind,color) {
    this.filePath = filePath;
    this.name = name;
    this.price = price;
    this.kind = kind;
    this.color=color;
    Product.allProducts.push(this);
    allCar.push(this);
};
Product.allProducts = [];

function generateCatalog() {
    new Product('img/p10.jpg', 'Ferrari-1958', 250000, 'Ferrari','red');
    new Product('img/p9.jpg', 'Kia Optima 2020', 150000, 'Kia','white');
    new Product('img/p3.jpg', 'Honda-nsx', 180000, 'Honda','yellow');
    new Product('img/p4.jpg', 'Bugatti Chiron',240000, 'Bugatti','black');
    new Product('img/p5.png', 'Tuatara Record', 270000, 'Tuatara','dark gray');
    new Product('img/p6.jpg', 'BMW AZZA ', 250000, 'BMW','yellow');
    new Product('img/p7.jpg', 'Mercides  2021', 95000, 'Mercides','orange');
    new Product('img/p8.jpg', 'Mercides AMG', 1095000, 'Mercides','selver');
}
generateCatalog();