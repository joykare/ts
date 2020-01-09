"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// types
var name = "Joy";
var isTrue = true;
var age = 26;
var templateStr = "My name is " + name + "\nI am " + age + " years old";
console.log(templateStr); // allows strings spanning different lines
// subtypes 
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// array type
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// tuple type
var person1 = [name, age];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 6
// any
var randomValue = 10;
randomValue = true;
randomValue = "string";
// unknown - cant access any properties off an unkown type or call/construct them 
var myVariable = 10;
// console.log(myVariable.name); 
// myVariable()
// myVariable.toUpperCase();
// type assertion - similar to type casting 
// (myVariable as string).toUpperCase();
// user defined type guard
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// type inference 
var a;
a = 10;
a = true;
var b = 20;
// b = true;
// union types
var multiType;
multiType = 20;
multiType = false;
// functions
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
// add(5, 'num')
console.log(add(5));
// interfaces 
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Teddy',
    lastName: 'Asola'
};
fullName(p);
function registrationForm(address) {
    console.log(address.personName + "'s phone number is " + address.phone);
}
var address = {
    personName: "Joy",
    phone: 8929999
};
registrationForm(address);
// classes 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Kamau');
emp1.greet();
// class inheritence 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating work');
    };
    return Manager;
}(Employee));
var manager = new Manager("She-kamau");
manager.delegateWork();
manager.greet();
console.log(manager.employeeName);
// access modifiers - private | public | protected
