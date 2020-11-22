abstract class vehicle {
    abstract wheels : Number

    start () :void {
        console.log("jalan sob motornya")
    }   
}

class Mobil extends vehicle {
    _jenis : String = "mobil balap"
    
    constructor(merek: String, harga: String) {
        super()
    }
    wheels: Number = 4
    set jenis (value: String) {
        this._jenis = value
    }
    get jenis() : String {
        return this._jenis
    }
}

class Motor extends vehicle {
    wheels:  number = 2
}

let mobil = new Mobil("avanza", "murah")
mobil.jenis = "mobil trek"
console.log(mobil.jenis)
mobil.start()
let motor = new Motor()
console.log(motor.wheels)
motor.start()