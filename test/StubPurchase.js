class StubPurchase {
  constructor(stubedString) {
    this.__stubedString = stubedString;
  }

  asString() {
    return this.__stubedString
  }
}

export default StubPurchase;
