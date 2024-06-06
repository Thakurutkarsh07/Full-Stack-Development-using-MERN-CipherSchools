// let person = {
//     firstName: "Utkarsh",
//     lastName: "Thakur",
// getFullName: function(){
//     return`The name of the person is ${person.firstName} ${person.lastName}`;
// },
// phoneNumber:{
//     mobile:"12344",
//     landline:"56788",
// },
// };
// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// Object.create()
const coder = {
    isStudying: false,
    printIntro: function () {
        console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`);
    },
};

const me = Object.create(coder);
me.name = "Utkarsh Thakur";
me.isStudying = true;
me.printIntro();

// Classes
class Vehicle{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return `The name of the Vehicle is ${this.name} and made by ${this.maker} having engine of ${this.engine}.`;
    }
}

let v1 = new Vehicle("Creta","Hyundai","2500cc");
let v2 = new Vehicle("Q5","Audi","4000cc");

console.log(v1.getDetails())
console.log(v2.getDetails())

// Abstractiona and encapsulation

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        let getDetails_NoAccess = function(){
            return `${this.firstName} ${this.lastName} `
        };
        this.getDetails_Access = function() {
            return `${this.firstName} ${this.lastName} `
        };
    }
}
let p1 = new Person("Utkarsh","Thakur");
console.log(p1.firstName)
console.log(p1.getDetails_Access());
//console.log(p1.getDetails_NoAccess());//It will throw error as it is not allowed to access.

// Inheritance

class Student extends Person{
    constructor(firstName,lastName,rollNum){
        super(firstName, lastName);
        this.rollNum =rollNum;
    }
    getDetails = function(){
        return `Name of the user is ${this.firstName} ${this.lastName} and the roll Numeber is ${this.rollNum}.`;
    }
}

let s1 = new Student("Anurag","Mishar",21);

console.log(s1.getDetails());