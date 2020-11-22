import ilaptop from './Ilaptop'
import * as keyboard from './Keyboard'

class BaseLaptop<T> implements ilaptop<T> {
    name: String;
    type: T;
    withTouchButton: boolean;
    withNumeric: boolean;

    constructor(name: String, type: T, withTOuchButton : boolean, withNumeric: boolean) {
        this.name = name
        this.type = type
        this.withNumeric = withNumeric
        this.withTouchButton = withTOuchButton
    }

    a () :void {
       console.log("a") 
    }
    b() :void {
        console.log("b")
    }
}

export default BaseLaptop