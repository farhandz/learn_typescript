"use strict";
function genericConsraint(arg) {
    console.log(arg.length);
    return arg;
}
console.log(genericConsraint("aaa"));
console.log(genericConsraint({ length: 10, value: 200, manis: 200 }));
