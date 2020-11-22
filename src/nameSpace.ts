namespace NameScapeExample {
    export class User {
      nama : String  
      constructor(nama : String) {
          this.nama = nama
      }
    }
}

// memnaggil namespace wajib diexport didalam namespacenya
const me = new NameScapeExample.User("farhan")
console.log(me.nama )