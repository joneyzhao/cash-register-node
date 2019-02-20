import CashRegister from '../src/CashRegister'
import Printer from '../src/Printer'
import Item from '../src/Item'
import Purchase from '../src/Purchase'
// import MockPrinter from './MockPrinter'
// import StubPurchase from './StubPurchase'
import { stub, mock } from 'sinon'

var sinon = require('sinon')


describe('CashRegister', () => {
  it('should process the mocked purchase with mocked printer', function () {
    // 用stub写printer的print
    // const printer = new Printer()
    // const printerStub = stub(printer, 'print').callsFake(function (arg) {
    //   console.log('I am replaced' + arg)
    // })
    // const cashRegister = new CashRegister(printer)

    // const itemOne = new Item('apple', 5)
    // const itemTwo = new Item('banana', 3)
    // const purchase = new Purchase([itemOne, itemTwo])

    // cashRegister.process(purchase)

    // sinon.assert.calledOnce(printerStub)
    // sinon.assert.calledWith(printerStub, `apple\t5\nbanana\t3\n`)

    // printerStub.restore()


    // 用mock写printer
    const printer = new Printer()
    const printerMock = mock(printer)

    const cashRegister = new CashRegister(printer)

    const itemOne = new Item('apple', 5)
    const itemTwo = new Item('banana', 3)
    const purchase = new Purchase([itemOne, itemTwo])

    printerMock.expects('print').once().withArgs(`apple\t5\nbanana\t3\n`)

    cashRegister.process(purchase)
    printerMock.verify()
    printerMock.restore()
  })

  it('should process the real purchase with stubed purchase', function () {
    const printer = new Printer()
    const printerStub = stub(printer, 'print')

    const cashRegister = new CashRegister(printer)
    
    const purchase = new Purchase()

    var purchaseStub = stub(purchase, 'asString').returns('abc')

    cashRegister.process(purchase)

    sinon.assert.calledOnce(purchaseStub)
    sinon.assert.calledWith(printerStub, 'abc')

    printerStub.restore()
    purchaseStub.restore()
   
  })

  it('should process with stub and mock', function () {
    const printer = new Printer()
    const purchase = new Purchase()
    const printerStub = stub(printer, 'print')
    const purchaseMock = mock(purchase)

    const cashRegister = new CashRegister(printer)

    purchaseMock.expects('asString').once().returns('str')

    cashRegister.process(purchase)

    sinon.assert.calledOnce(printerStub)
    sinon.assert.calledWith(printerStub, 'str')
    purchaseMock.verify()

    printerStub.restore()
    purchaseMock.restore()

  })
})
