let tBody = document.getElementById('tBody');
let data = JSON.parse(localStorage.getItem('user-cart'));
let tr;
let td2;
let td3;
let td4;
let total = 0;
let td6;

if (data) {
  for (let i = 0; i < data.length; i++) {
    tr = document.createElement('tr');
    tBody.appendChild(tr);
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td5 = document.createElement('td');
    td6 = document.createElement('img');
    td4 = document.createElement('td');
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td4);

    td2.textContent = data[i].name;
    td3.textContent = data[i].price;
    td5.textContent = data[i].color;
    td6.src = data[i].filePath;
    td6.width = 100;
    td6.height = 100;
    total += parseInt(data[i].price);

  }
  td4.textContent = total;
  let btn = document.getElementById('checkOut');
  btn.addEventListener('click', clear);
}


let view = document.getElementById('card-main');
view.style.display = 'none';

function clear() {
  view.style.display = 'block';
  let table = document.getElementById('cart');
  table.style.display = 'none';
  let cart = document.getElementById('card-main');
  let img = document.getElementById('imgCart');
  img.src = td6.src;
  let nameCart = document.getElementById('nameCar');
  nameCart.textContent = td2.textContent;
  let colrcar = document.getElementById('colrcar');
  colrcar.textContent = td5.textContent;
  let pricecolor = document.getElementById('pricecolor');
  pricecolor.textContent = `$$ ${td3.textContent}`;

  tBody.innerHTML = '';
  localStorage.removeItem('user-cart');
}



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}