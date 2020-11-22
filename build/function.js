"use strict";
function getName() {
    return "hallo nama saya farhan ammar";
}
console.log(getName());
function getAge() {
    return 12345;
}
console.log(getAge());
function PrintName() {
    console.log("hahahah");
}
PrintName();
// argument
function getAdd(val1, val2) {
    return val1 * val2;
}
console.log(getAdd(20, 4));
// default parameter
function DefaultParameter(val1, val2) {
    if (val2 === void 0) { val2 = "hai manis"; }
    return val1 + " " + val2;
}
console.log(DefaultParameter("farhan"));
