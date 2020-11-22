export class User {
    constructor (public name: String, public age: Number){
    }
    setName(val: string): void {
        this.name = val
    }
}
// public bisa diakses disemua class atau diluar class
// protected hanya bisa diakses dari kelas tersebut, dan kelas turunanya
// private, hanya bisa diakses dari kelas itu sendiri

let data = new User ("hai manis", 20)
console.log(data.age)

// inheritance (pewarisan classs)

class Admin extends User {
    write: boolean = true;
    read: boolean = true;
    phone: String;
    private _email: String = "";
    static getname: String = "ini dari static"

    static iniStatic(): string {
        return "hai manis"
    }

    // setter and getter
    set email (value: String) {
        if(value.length < 5) {
            this._email = "email harus lebih dari 5"
        } else {
            this._email = value
        }
    }
    get email () : String {
        return this._email
    }

    constructor(phone: String, name: String, age: Number) {
        super(name, age)
        this.phone = phone
    }
    getRole(): {read: boolean, write:boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
}

// let admin = new Admin("9090909","farhan", 20)
// console.log(admin.getRole())
// console.log(admin.phone)
// console.log(admin.name)
// console.log(admin.age)
// admin.email = "ammarjoz09@gmail.com "
// console.log(admin.email)

// static bisa diakses langsung tanpa initial admin terlebih dahulu
console.log(Admin.iniStatic())