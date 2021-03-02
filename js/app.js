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
    new Product('img/car1.jpg', 'Ferrari-1958', 250000, 'Ferrari','red');
    new Product('img/kia_optima.jpg', 'Kia Optima 2020', 150000, 'Kia','white');
    new Product('img/main-3-honda-nsx.jpg', 'Honda-nsx', 180000, 'Honda','yellow');
    new Product('img/bugatti-chiron.jpg', 'Bugatti Chiron',240000, 'Bugatti','black');
    new Product('img/Tuatara_Record-36-scaled-.jpg', 'Tuatara Record', 270000, 'Tuatara','dark gray');
    new Product('img/bmw-azz.jpg', 'BMW AZZA ', 250000, 'BMW','yellow');
    new Product('img/maxresdefault.jpg', 'Mercides  2021', 95000, 'Mercides','orange');
    new Product('img/benz.jpg', 'Mercides AMG', 1095000, 'Mercides','selver');
}
generateCatalog();