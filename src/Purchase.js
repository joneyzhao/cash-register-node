class Purchase {
  constructor(items) {
    this.__items = items;
  }

  asString() {
    return this.__items.reduce((out, item) => {
      return out += `${item.name}\t${item.price}\n`
    }, '')
  }
}

export default Purchase;
