interface data {
    readonly datanama : String
    readonly dataUmur : Number 
}

let Student : data = {datanama: "farhan ammar", dataUmur:20}
console.log(Student)

class haiManis implements data {
    datanama : String
    dataUmur : Number
    constructor (dataNama : string, dataUmur : Number) {
        this.datanama = dataNama
        this.dataUmur = dataUmur
    }
}

const data2 = new haiManis("asu", 20)
data2.datanama = "sss"
console.log(data2.datanama)