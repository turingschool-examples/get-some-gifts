class Items {
  constructor(items) {
    this.items = items || [];
    this.totalCost = 0;
  }

  calculateTotalItemCost() {
    this.items.forEach(item => {
      this.totalCost += item.priceInDollars;
    })
  }

  calculateHowManyItemsToBuy() {
    return this.items.filter(item => {
      return !item.isPurchased
    }).length;
  }
}