// Tuples
let arr: [number, string] = [12, "Nikhil"];

// Enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

UserRoles.ADMIN;

enum StatusCode {
  ABDANDONED = "Abdandoned status code 500",
  NOTFOUND = "Not Found status code 404",
}

StatusCode.ABDANDONED;

let a; //let a: any;
a = 12;
a = "Nikhil";
//a agar string hai then ok, but when a is num, there's an error, but it doesn't give error in type any, so used type unknown
a.toUpperCase();

//Type Inference | Type Annotation
let b: number; //Here type is defined | known as Type Annotation
let c = 12; // Type Inference, means value ko dekh kar, type khud pata karle

//Interfaces and Type Aliases
//@ Defining interfaces
//@ Using interfaces to define object shapes

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; //Optional property
}

function getDataOfUser(obj: User) {}

getDataOfUser({
  name: "Nikhil Shrivastava",
  email: "nikhil.shrivastava304@gmail.com",
  password: "nikhil-304",
});

//@ Extending interfaces
interface User2 {
  name: string;
  email: string;
  password: string;
  gender?: string; //Optional property
}

interface Admin extends User2 {
  admin: boolean;
}

function abcd(obj: Admin) {
  // obj.(name | email | password | gender);
  obj.admin;
}

//@ Type aliases
type sankhya = number;
let abc: sankhya;

type value = string | number | null;
let ak: value; //let ak: string | number | null;

//@ Intersection types
type UserIntersection = {
  name: string;
  email: string;
};

type AdminIntersection = UserIntersection & {
  getDetails(user: string): void;
};

function abcde(a: AdminIntersection) {}

//@Classes & Constructor
class HumanMaker {
  constructor(
    public name: string,
    public surname: string,
    public isHandsome: boolean
  ) {}
}

let h1 = new HumanMaker("Nikhil", "Shrivastava", true);

//@Classes & Constructor -> "this" keyword
class BottleMaker {
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

let b1 = new BottleMaker("Milton");

// @Classes & Constructor -> "Public and Private" access modifier
class BottleMaker2 {
  constructor(
    public /*| private -> it'll show error, but it'll run*/ name: string
  ) {}
}

class MetaBottleMaker extends BottleMaker2 {
  constructor(name: string) {
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
  protected name: string = "Milton";
  // Protected access modifier provides same features like private, but with a twist, that it can be inherited (extended) and used in other class
}

class MetaBottleMaker2 extends BottleMaker3 {
  public material: string = "metal";

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
  constructor(public readonly userName: string) {}
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
  /*Parameter Properties: By prefixing a constructor parameter with an access modifier ( public, private, protected ) or the readonly modifier, TypeScript automatically performs two actions:
  - Declares a class property: with the same name and type as the constructor parameter.
  - Initializes that class property: with the value passed to the corresponding constructor parameter.
  */
  constructor(
    public name: string,
    public age: number,
    public gender?: string //This becomes optional
  ) {}
}

let ud1 = new UserData("Nikhil", 20, "Male");
let ud2 = new UserData("Alex", 18);

//@Getters and Setters in TypeScript
class People {
  constructor(public _name: string, public age: number) {}
  get name() {
    return this._name;
  }
  set name(value: string) {
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
  static version: 2.1;

  static getRandomNumber() {
    return Math.random();
  }
}

// let sh1 = new Shery();   --No use of this when static initialsed and if initialsed, it doesn't get added to Object

//@Classes and Objects: Abstract Classes
class Payments {
  constructor(protected amount: number, protected account_no: number) {
    this.amount = this.validateAmount(amount);
  }

  private validateAmount(amount: number): number {
    if (amount > 0) {
      return amount;
    } else {
      throw new Error("Amount must be greater than 0.");
    }
  }
}

//Abstract classes do not require instances to be created; they are used solely for inheritance and extending in other classes. They act as base classes, containing generic functionality. To make them more specific, they can be extended, and specific functionality can be added in the derived classes.

class Paytm extends Payments {}
