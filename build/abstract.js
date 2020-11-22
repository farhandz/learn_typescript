"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    vehicle.prototype.start = function () {
        console.log("jalan sob motornya");
    };
    return vehicle;
}());
var Mobil = /** @class */ (function (_super) {
    __extends(Mobil, _super);
    function Mobil(merek, harga) {
        var _this = _super.call(this) || this;
        _this._jenis = "mobil balap";
        _this.wheels = 4;
        return _this;
    }
    Object.defineProperty(Mobil.prototype, "jenis", {
        get: function () {
            return this._jenis;
        },
        set: function (value) {
            this._jenis = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mobil;
}(vehicle));
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return Motor;
}(vehicle));
var mobil = new Mobil("avanza", "murah");
mobil.jenis = "mobil trek";
console.log(mobil.jenis);
mobil.start();
var motor = new Motor();
console.log(motor.wheels);
motor.start();
