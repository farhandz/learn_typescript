"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
// let number = new List<number>(1,2,3)
// number.add(4)
// number.addMultiple(4,5,6)
// console.log(number)
var all = new List(1, 2, 3);
all.add("aaa");
all.addMultiple(1, 2, 3, "a");
console.log(all.getAll());
