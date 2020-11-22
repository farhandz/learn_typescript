
// function bisasa
function data (value: any) : any {
    return value
}

console.log(data("hai this me").length)
console.log(data(1122).length)


// generic

function dataGeneric<T>(val: T): T {
    return val
}

console.log(dataGeneric('hahahh').length)
console.log(dataGeneric(1123))