"use strict";
console.log("aaa");
// type data string
var nama = "farhan";
nama = "ganteng";
console.log(nama);
// type data number\
var Umur = 20;
console.log(Umur);
// type data any (seperti js umunya)
var haha = "farhan ammar dzakwan";
haha = 2011;
console.log(haha);
// array 
var manis = [1, 2, 3, 4, 5];
console.log(manis);
// array any (Seperti javascript pada umunya)
var Farhan = [1, 2, 3, 4, 5];
Farhan = [
    {
        "nama": "farhan"
    },
    1,
    "hahaha"
];
console.log(Farhan);
// array tuple
var biodata;
biodata = ["jalan", 112];
console.log(biodata);
// enum (bisa berupa nnumber / string)
var Month;
(function (Month) {
    Month["Jan"] = "january";
    Month["Feb"] = "febuary";
    Month["Mar"] = "Maret";
    Month["Apr"] = "April";
    Month["Mei"] = "Mei";
    Month["Jun"] = "Juny";
})(Month || (Month = {}));
console.log(Month);
