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
