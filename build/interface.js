"use strict";
var Rog = /** @class */ (function () {
    function Rog(name, isGaming) {
        this.name = "asus rog";
        this.isGaming = isGaming;
        this.name = name;
    }
    Rog.prototype.on = function () {
        console.log("laptop nyala");
    };
    Rog.prototype.off = function () {
        console.log("laptop mati");
    };
    return Rog;
}());
var rog = new Rog("asus rog", true);
rog.on();
rog.off();
console.log(rog.name);
console.log(rog.isGaming);
