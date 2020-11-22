"use strict";
var Student = { datanama: "farhan ammar", dataUmur: 20 };
console.log(Student);
var haiManis = /** @class */ (function () {
    function haiManis(dataNama, dataUmur) {
        this.datanama = dataNama;
        this.dataUmur = dataUmur;
    }
    return haiManis;
}());
var data2 = new haiManis("asu", 20);
data2.datanama = "sss";
console.log(data2.datanama);
