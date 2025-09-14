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
