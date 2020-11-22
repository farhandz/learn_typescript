"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = __importDefault(require("./Asus"));
var asus = new Asus_1.default("Zeenbook", true, true);
console.log(asus);
asus.a();
