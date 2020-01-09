export {}; // treat this file as a module not a dcript

// types
let name: string = "Joy";
let isTrue: boolean = true;
let age: number = 26;
let templateStr: string = `My name is ${name}
I am ${age} years old`;

console.log(templateStr); // allows strings spanning different lines

// subtypes 
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// array type
let list: number[] = [1,2,3];
let list1: Array<number> = [1,2,3]

// tuple type
let person1: [string, number] = [name, age]

// enum
enum Color {Red = 5, Blue, Green}

let c: Color = Color.Blue;
console.log(c) // 6

// any
let randomValue: any = 10;
randomValue = true;
randomValue = "string";

// unknown - cant access any properties off an unkown type or call/construct them 
let myVariable: unknown = 10;

// console.log(myVariable.name); 
// myVariable()
// myVariable.toUpperCase();

  // type assertion - similar to type casting 
  // (myVariable as string).toUpperCase();

  // user defined type guard
  function hasName(obj: any): obj is {name: string} {
    return !!obj && 
      typeof obj === "object" && "name" in obj
  }

  if(hasName(myVariable)) {
    console.log(myVariable.name);
  }

// type inference 
let a;
a = 10;
a = true;

let b = 20;
// b = true;

// union types
let multiType: number | boolean;

multiType = 20;
multiType = false;

// functions

function add(num1: number, num2?: number): number {
  return num2 ? num1 + num2 : num1;
}

// add(5, 'num')
console.log(add(5))

// interfaces 

function fullName(person: {firstName: string, lastName: string}) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Teddy',
  lastName: 'Asola'
}

fullName(p);

interface Address {
  personName?: string,
  phone: number
}

function registrationForm(address: Address) {
  console.log(`${address.personName}'s phone number is ${address.phone}`)
}

let address = {
  personName: "Joy",
  phone: 8929999
}

registrationForm(address);

// classes 

class Employee {
  employeeName: string;
  
  constructor(name: string) {
    this.employeeName = name;
  }
  
  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Kamau');
emp1.greet();

// class inheritence 
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  
  delegateWork() {
    console.log('Manager delegating work')
  }
}

let manager = new Manager("She-kamau");
manager.delegateWork();
manager.greet();
console.log(manager.employeeName);

// access modifiers - private | public | protected