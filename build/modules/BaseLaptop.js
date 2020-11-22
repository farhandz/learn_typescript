"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, withTOuchButton, withNumeric) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTOuchButton;
    }
    BaseLaptop.prototype.a = function () {
        console.log("a");
    };
    BaseLaptop.prototype.b = function () {
        console.log("b");
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
