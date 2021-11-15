class Item {
  constructor(itemDetails) {
    this.recipient = itemDetails.recipient,
    this.name = itemDetails.name,
    this.link = itemDetails.link,
    this.priceInDollars = itemDetails.priceInDollars,
    this.isPurchased = false,
    this.isWrapped = false;
  }

  purchaseItem(totalSpent) {
    this.isPurchased = true;
    return totalSpent -= this.priceInDollars;
  }

  wrapItem() {
    this.isWrapped = true;
  }
}