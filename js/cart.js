// TODO: Find the table body
let tBody = document.getElementById('tBody');
// TODO: Iterate over the items in the cart
let data = JSON.parse(localStorage.getItem('user-cart'));
let tr;
let td2;
let td3;
let td4;
let total=0;
if(data){
  for (let i = 0; i < data.length; i++) {
    tr = document.createElement('tr');
    tBody.appendChild(tr);
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td2.textContent = data[i].name;
    td3.textContent = data[i].price;
    total+=parseInt(data[i].price);
  }
  td4.textContent = total;
  let btn=document.getElementById('checkOut');
  btn.addEventListener('click',clear);
}


function clear(){
  alert(`Your Order Need 2 Weeks To arrive and the Total ${total} `);
  tBody.innerHTML = '';
  localStorage.removeItem('user-cart');
}
