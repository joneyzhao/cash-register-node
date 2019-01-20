import assert from 'assert'

class MockPrinter{
  constructor() {
    this.__isCalled = false;
    this.__isCalledWith = null;
  }

  print(printThis) {
    this.__isCalled = true;
    this.__isCalledWith = printThis;
  }

  verifyIsCalled() {
    assert(this.__isCalled, 'expected print to be called at least once, print was not called')
  }

  verifyIsCalledWith(expected) {
    assert.equal(this.__isCalledWith, expected, `expected print to be called with ${expected}, but was called with ${this.__isCalledWith}`)
  }
}

export default MockPrinter
