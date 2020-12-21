'use strict';
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    speak(){
        console.log(`${this.name} : hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get age(){
        return this._age;
    }
    set age(value){
        this._age = value<0 ? 0: value;

    }
}

const user1 = new User('Steve','job',-1);
console.log(user1.age);