import CashRegister from '../src/CashRegister'
import Printer from '../src/Printer'
import Item from '../src/Item'
import Purchase from '../src/Purchase'
import MockPrinter from './MockPrinter'
import StubPurchase from './StubPurchase'

describe('CashRegister', () => {
  it('should print the real purchase', () => {
    // initialize CashRegister and fake Printer

    // cashRegister.process(purchase);

    // verify that printer was called

    // const printer = new Printer()
    // const cashRegister = new CashRegister(printer)

    // const itemOne = new Item('apple', 5)
    // const itemTwo = new Item('banana', 3)
    // const purchase = new Purchase([itemOne, itemTwo])

    // cashRegister.process(purchase)
  })

  it('should process the real purchase with mocked printer', () => {
    const printer = new MockPrinter()
    const cashRegister = new CashRegister(printer)

    const itemOne = new Item('apple', 5)
    const itemTwo = new Item('banana', 3)
    const purchase = new Purchase([itemOne, itemTwo])

    cashRegister.process(purchase)
    
    printer.verifyIsCalled()
    printer.verifyIsCalledWith(`apple\t5\nbanana\t3\n`)
  })

  it('should process the stubed purchase with mocked printer', () => {
    const printer = new MockPrinter()
    const cashRegister = new CashRegister(printer)

    const purchase = new StubPurchase('stubed as string result')

    cashRegister.process(purchase)
    
    printer.verifyIsCalled()
    printer.verifyIsCalledWith('stubed as string result')
  })
})
