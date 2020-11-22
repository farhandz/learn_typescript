interface product {
    sel() : void
}

class KipasAngin implements product {
    sel() :void {
        console.log("kipas anhin barus")
    }
}

class MotorMabur implements product {
    sel() :void {
        console.log("ini motor mabur")
    }
}

function GetAll <T extends product>(product: T[]) : void {
    product.forEach(dt => dt.sel())
}

let kipas = new KipasAngin()
let motors = new MotorMabur()

GetAll([kipas, motors])

