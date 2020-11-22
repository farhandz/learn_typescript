"use strict";
var NameScapeExample;
(function (NameScapeExample) {
    var User = /** @class */ (function () {
        function User(nama) {
            this.nama = nama;
        }
        return User;
    }());
    NameScapeExample.User = User;
})(NameScapeExample || (NameScapeExample = {}));
// memnaggil namespace wajib diexport didalam namespacenya
var me = new NameScapeExample.User("farhan");
console.log(me.nama);
