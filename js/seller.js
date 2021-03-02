'use strict';

let sellCar=[];
let newSellCar=[];
let submit = document.getElementById('submit');

submit.addEventListener('click',addToSellingCart);
function addToSellingCart(event){
  event.preventDefault();
  let carName=document.getElementById('carName').value;
  let carModel =document.getElementById('carModel').value;
  let carImage = document.getElementById('carImage').value;
  let carPrice = document.getElementById('carPrice').value;
  let carColor = document.getElementById('carColor').value;
  let car = {
    name: carName,
    model:carModel,
    image:carImage,
    carPrice:carPrice,
    color:carColor,
  };
  sellCar.push(car);
  if (localStorage.getItem("user-selling")) {
    newSellCar=JSON.parse(localStorage.getItem("user-selling"));
  }
  // console.log(JSON.stringify(userCart));
  localStorage.setItem("user-selling", JSON.stringify(sellCar));
  console.log('added');
  document.getElementById('carName').value='';
  document.getElementById('carModel').value='';
  document.getElementById('carImage').value='';
  document.getElementById('carPrice').value='';
  document.getElementById('carColor').value='';
  document.getElementById('login-box').style.visibility='hidden';
  document.getElementById('card').style.visibility='visible';
  let carforsale=JSON.parse(localStorage.getItem("user-selling"));
if(carforsale){
  console.log(carforsale);
  let img =document.getElementById('imgCart');
  img.setAttribute('src',carforsale[0].image);
  let carName=document.getElementById('carName1');
  let carModel=document.getElementById('carModel1');
  let carPrice=document.getElementById('carPrice1');
  let carColor=document.getElementById('carColor1');
  carName.textContent=carforsale[0].name;
  carModel.textContent=carforsale[0].model;
  carPrice.textContent=carforsale[0].carPrice;
  carColor.textContent=carforsale[0].color;


}
}



