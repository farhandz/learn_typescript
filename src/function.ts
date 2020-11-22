function getName (): String {
    return "hallo nama saya farhan ammar"
}
console.log(getName())

function getAge () : Number {
    return 12345
}
console.log(getAge())

function PrintName (): void {
    console.log("hahahah")
}

PrintName()

// argument
function getAdd (val1 : number, val2 : number) :number {
    return val1 * val2
}
console.log(getAdd(20,4))


// default parameter
function DefaultParameter(val1: string, val2: string = "hai manis") : string {
    return val1 + " " + val2
}

console.log(DefaultParameter("farhan"))

  