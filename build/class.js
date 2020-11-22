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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (val) {
        this.name = val;
    };
    return User;
}());
exports.User = User;
// public bisa diakses disemua class atau diluar class
// protected hanya bisa diakses dari kelas tersebut, dan kelas turunanya
// private, hanya bisa diakses dari kelas itu sendiri
var data = new User("hai manis", 20);
console.log(data.age);
// inheritance (pewarisan classs)
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.write = true;
        _this.read = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.iniStatic = function () {
        return "hai manis";
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        // setter and getter
        set: function (value) {
            if (value.length < 5) {
                this._email = "email harus lebih dari 5";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Admin.getname = "ini dari static";
    return Admin;
}(User));
// let admin = new Admin("9090909","farhan", 20)
// console.log(admin.getRole())
// console.log(admin.phone)
// console.log(admin.name)
// console.log(admin.age)
// admin.email = "ammarjoz09@gmail.com "
// console.log(admin.email)
// static bisa diakses langsung tanpa initial admin terlebih dahulu
console.log(Admin.iniStatic());
