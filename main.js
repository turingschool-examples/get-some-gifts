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
  createItem();
  let tableBody = document.querySelector('.table-body');
  items.items.forEach(item => {
    var haslink;
    if (item.link) {
      haslink = `<td class="link"><a target="_blank" href="${item.link}">${item.name}</a></td>`
    } else {
      haslink = `<td>${item.name}</td>`
    }

    tableBody.innerHTML += `   
    <tr>
      <td>${item.recipient}</td>
      ${haslink}
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