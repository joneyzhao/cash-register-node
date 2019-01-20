class CashRegister {
  constructor(printer) {
    this.__printer = printer;
  }

  process(purchase) {
    this.__printer.print(purchase.asString());
  }
}

export default CashRegister
