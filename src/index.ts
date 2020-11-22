console.log("aaa")
// type data string
let nama : String = "farhan"
nama = "ganteng"
console.log(nama)

// type data number\
let Umur : Number = 20
console.log(Umur)


// type data any (seperti js umunya)
let haha : any = "farhan ammar dzakwan"
haha = 2011
console.log(haha)

// array 
let manis : number[] = [1,2,3,4,5]
console.log(manis)

// array any (Seperti javascript pada umunya)
let Farhan : any[] = [1,2,3,4,5]
Farhan = [
    {
        "nama" : "farhan"
    },
    1,
    "hahaha"
] 
console.log(Farhan)

// array tuple
let biodata : [string, number];
biodata = ["jalan", 112]
console.log(biodata)


// enum (bisa berupa nnumber / string)
enum Month {
    Jan = "january",
    Feb = "febuary",
    Mar = "Maret",
    Apr = "April",
    Mei = "Mei",
    Jun = "Juny"
}

console.log(Month)