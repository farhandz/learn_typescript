interface laptop {
    name: String
    on() : void;
    off() : void
}

class Rog implements laptop {
    name: String = "asus rog"
    isGaming: boolean

    constructor(name: String, isGaming: boolean) {
        this.isGaming = isGaming
        this.name = name
    }
    
    on() : void {
        console.log("laptop nyala")
    }
    
    off() : void {
        console.log("laptop mati")
    }
}

let rog = new Rog("asus rog", true)
rog.on()
rog.off()
console.log(rog.name)
console.log(rog.isGaming)