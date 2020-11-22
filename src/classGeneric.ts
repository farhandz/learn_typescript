class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements
    }
    
    add(element: T) : void {
        this.data.push(element)
    }

    addMultiple (...elements: T[]) : void {
        this.data.push(...elements)
    }

    getAll () : T[] {
        return this.data
    }
}

// let number = new List<number>(1,2,3)
// number.add(4)
// number.addMultiple(4,5,6)
// console.log(number)

let all = new List<Number | String>(1,2,3)
all.add("aaa")
all.addMultiple(1,2,3,"a")
console.log(all.getAll())