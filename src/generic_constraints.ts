interface genericConsraints {
    length : number
}

function genericConsraint <T extends genericConsraints> (arg: T) : T {
    console.log(arg.length)
    return arg
}


console.log(genericConsraint("aaa"))
console.log(genericConsraint({length: 10, value: 200, manis: 200}))