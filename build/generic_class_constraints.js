"use strict";
var KipasAngin = /** @class */ (function () {
    function KipasAngin() {
    }
    KipasAngin.prototype.sel = function () {
        console.log("kipas anhin barus");
    };
    return KipasAngin;
}());
var MotorMabur = /** @class */ (function () {
    function MotorMabur() {
    }
    MotorMabur.prototype.sel = function () {
        console.log("ini motor mabur");
    };
    return MotorMabur;
}());
function GetAll(product) {
    product.forEach(function (dt) { return dt.sel(); });
}
var kipas = new KipasAngin();
var motors = new MotorMabur();
GetAll([kipas, motors]);
