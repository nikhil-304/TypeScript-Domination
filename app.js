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
//@Classes and Objects: Parameter Properties
class UserData {
    name;
    age;
    gender;
    /*Parameter Properties: By prefixing a constructor parameter with an access modifier ( public, private, protected ) or the readonly modifier, TypeScript automatically performs two actions:
    - Declares a class property: with the same name and type as the constructor parameter.
    - Initializes that class property: with the value passed to the corresponding constructor parameter.
    */
    constructor(name, age, gender //This becomes optional
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let ud1 = new UserData("Nikhil", 20, "Male");
let ud2 = new UserData("Alex", 18);
//@Getters and Setters in TypeScript
class People {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let p1 = new People("Nikhil", 20);
console.log(p1._name);
p1.name = "Dhanashree";
//@Classes and Objects: Static Members
class Shery {
    //static keywords makes variables or properties accessible without making a class instance of the class
    //Means no use of new keyword to make an object, directly you can access it's variables and properties (methods)
    static version;
    static getRandomNumber() {
        return Math.random();
    }
}
// let sh1 = new Shery();   --No use of this when static initialsed and if initialsed, it doesn't get added to Object
//@Classes and Objects: Abstract Classes
class Payments {
    amount;
    account_no;
    constructor(amount, account_no) {
        this.amount = amount;
        this.account_no = account_no;
        this.amount = this.validateAmount(amount);
    }
    validateAmount(amount) {
        if (amount > 0) {
            return amount;
        }
        else {
            throw new Error("Amount must be greater than 0.");
        }
    }
}
//Abstract classes do not require instances to be created; they are used solely for inheritance and extending in other classes. They act as base classes, containing generic functionality. To make them more specific, they can be extended, and specific functionality can be added in the derived classes.
class Paytm extends Payments {
}
//@Functions
function func1() { }
function func2() {
    return "hellyew";
}
//@Function Types
function funct(name, callback) {
    callback("Nikudie");
}
funct("Nikhil", (arg) => {
    console.log(arg);
});
//@Optional & Default Parameters
function personalDets(name, age, gender = "Prefer not to say") {
    console.log(name, age, gender);
}
personalDets("Nikhil", 20, "Male");
personalDets("Dhanashree", 20);
//@Rest/Spread Parameters/Operators
// function restParams(a: number, b:number, c:number....){}
//Too much params? need to define that much args in function!
// No need, just store it in an array using rest/spread operator
//Instead of defining individual parameters for each possible argument, you can use
// the 'rest' syntax (...) to collect them into an array and handle them
// dynamically. This approach is particularly useful when the number of
// arguments is not fixed or when dealing with a large number of parameters.
function restParams(...arr) {
    console.log(arr);
}
restParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 74, 41, 741, 115);
//# sourceMappingURL=app.js.map