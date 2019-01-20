class Item {
  constructor(name, price) {
    this.__name = name;
    this.__price = price;
  }

  get name() {
    return this.__name;
  }

  get price() {
    return this.__price;
  }
}

export default Item;
