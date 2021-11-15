document.addEventListener('DOMContentLoaded', function() {
  displayNewItem();
});

const items = [];
const totalSpent = 0;

const createNewItem = () => {
  shoppingList.forEach(item => {
    items.push(new Item(item))
  });
}

const displayNewItem = () => {
  createNewItem()
  let tableBody = document.querySelector('.table-body');
  items.forEach(item => {
    tableBody.innerHTML += `   
    <tr>
      <td>${item.recipient}</td>
      <td>${item.name}</td>
      <td>${item.priceInDollars}</td>
      <td><input type="checkbox"></td>
    </tr>`
  })
}