"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples
let arr = [12, "Nikhil"];
// Enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
var StatusCode;
(function (StatusCode) {
    StatusCode["ABDANDONED"] = "Abdandoned status code 500";
    StatusCode["NOTFOUND"] = "Not Found status code 404";
})(StatusCode || (StatusCode = {}));
StatusCode.ABDANDONED;
let a; //let a: any;
a = 12;
a = "Nikhil";
//a agar string hai then ok, but when a is num, there's an error, but it doesn't give error in type any, so used type unknown
a.toUpperCase();
//Type Inference | Type Annotation
let b; //Here type is defined | known as Type Annotation
let c = 12; // Type Inference, means value ko dekh kar, type khud pata karle
function getDataOfUser(obj) { }
getDataOfUser({
    name: "Nikhil Shrivastava",
    email: "nikhil.shrivastava304@gmail.com",
    password: "nikhil-304",
});
function abcd(obj) {
    // obj.(name | email | password | gender);
    obj.admin;
}
let abc;
let ak; //let ak: string | number | null;
function abcde(a) { }
//@Classes & Constructor
class HumanMaker {
    name;
    surname;
    isHandsome;
    constructor(name, surname, isHandsome) {
        this.name = name;
        this.surname = surname;
        this.isHandsome = isHandsome;
    }
}
let h1 = new HumanMaker("Nikhil", "Shrivastava", true);
//@Classes & Constructor -> "this" keyword
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
    }
}
let b1 = new BottleMaker("Milton");
// @Classes & Constructor -> "Public and Private" access modifier
class BottleMaker2 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class MetaBottleMaker extends BottleMaker2 {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let b2 = new MetaBottleMaker("Cello");
b2.getValue();
// @Classes & Constructor -> "Protected" access modifier
class BottleMaker3 {
    name = "Milton";
}
class MetaBottleMaker2 extends BottleMaker3 {
    material = "metal";
    constructor() {
        super(); // Initialize the parent class properties
    }
    accessName() {
        console.log(this.name + ": ", this.material);
    }
    changeName() {
        this.name = "Cello";
    }
}
let b3 = new MetaBottleMaker2();
b3.accessName(); // This should now print "Milton: metal"
b3.changeName();
b3.accessName(); // This should print "Cello: metal"
//@Optional Class and Object Properties
class UserDets {
    userName;
    constructor(userName) {
        this.userName = userName;
    }
    changeName() {
        this.userName = "hellyow";
        //readonly gives error when you try to change the variable's value
        //Cannot assign to 'userName' because it is a read-only property
    }
}
let u1 = new UserDets("Nikhil");
u1.changeName();
//# sourceMappingURL=app.js.map