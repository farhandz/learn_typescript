import Laptop from './BaseLaptop'

class Asus<T> extends Laptop<T> {
  constructor(type: T, withTOuchButton: boolean, withNumeric:  boolean) {
      super("Asus", type, withTOuchButton, withNumeric  )
  }
}

export default Asus