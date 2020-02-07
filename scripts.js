let p1 = {
    name: 'Brad',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
let p2 = {
    name: 'Avera',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
let p3 = {
    name: 'Daniel',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
let p4 = {
    name: 'John',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
let p5 = {
    name: 'Mollie',
    sayHello: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and I am from ${this.city}.`)
    }
}

let np1 = new Person('Brad', 'Pelham', 30);
let np2 = new Person('Avera', 'Mtn Brook', 29);
let np3 = new Person('Daniel', 'Hoover', 18);
let np4 = new Person('John', 'Inverness', 28);
let np5 = new Person('Mollie', 'Huntsville', 19);

np1.greet();
np2.greet();
np3.greet();
np4.greet();
np5.greet();

class Vehicle {
    constructor(type, manufac, numWheels) {
        this.type = type
        this.manufac = manufac;
        this.numWheels = numWheels

    }
    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufac}, and has ${this.numWheels} wheels.`)
    }
}

class Sedan extends Vehicle {
    constructor(size, mpg, doors, type, manufac, numWheels) {
        super(type, manufac, numWheels);
        this.size = size
        this.mpg = mpg
        this.doors = doors

    }
    aboutSedan() {
        console.log(`It is a ${this.size} size vehicle, has ${this.doors} doors, and gets ${this.mpg}mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(reverse, wheel, doors, type, manufac, numWheels) {
        super(type, manufac, numWheels);
        this.doors = doors
        this.reverse = reverse
        this.wheel = wheel
    }
    aboutMotor() {
        console.log(`It has a ${this.wheel} to steer, ${this.reverse} go in reverse, and has ${this.doors} doors.`)
    }
}

let v1 = new Vehicle('car', 'Chevy', 4);
let v2 = new Sedan('medium', 30, 4, 'sedan', 'Honda', 4)
let v3 = new Motorcycle("can't", 'handle-bars', 'no', 'motorcycle', 'Harley', 2)

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();
v2.aboutSedan();
v3.aboutMotor();