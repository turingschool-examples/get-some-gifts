document.addEventListener('DOMContentLoaded', function() {
  displayItems();
  updateTotalCost();
  updateItemsToBuy();
});

let items = {};

const createItem = () => {
  items = new Items();
  shoppingList.map(item => {
    items.items.push(new Item(item))
  });
}

const displayItems = () => {
  createItem()
  let tableBody = document.querySelector('.table-body');
  items.items.forEach(item => {
    tableBody.innerHTML += `   
    <tr>
      <td>${item.recipient}</td>
      <td>${item.name}</td>
      <td>$${item.priceInDollars}</td>
      <td><input type="checkbox"></td>
       <td><input type="checkbox"></td>
    </tr>`
  });
}

const updateTotalCost = () => {
  items.calculateTotalItemCost();
  document.querySelector('#toSpend').innerHTML = items.totalCost;
}

const updateItemsToBuy = () => {
  let numToBuy = items.calculateHowManyItemsToBuy();
  document.querySelector('#toBuy').innerHTML = numToBuy;
}