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

//예시
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape {

}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('나는 삼각형');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6 Class checking : instanceOf
//왼쪽에 있는 오브젝트가 오른쪽 클래스의 인스턴스인지 아닌지 판별
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);