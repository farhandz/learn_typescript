import Laptop from "./BaseLaptop";

class Mackbook<T> extends Laptop<T> {
  constructor(type: T, withTOuchButton: boolean, withNumeric: boolean) {
    super("Mackbook", type, withTOuchButton, withNumeric);
  }
}

export default Mackbook;
