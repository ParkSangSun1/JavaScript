//오브젝트 만드는법
//1
const obj1 = {};
//2
const obj2 = new Object();

const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

const ellie = {name :'ellie', age: 4};
print(ellie);

ellie.hasJob= true;
console.log(ellie.hasJob);

delete ellie.hasJob;
//오브젝트는 key : value 로 이루여져 있다 object = {key : value};

//2
console.log(ellie.name);
//키는 항상 스트링 타입으로 받아야함
console.log(ellie['name']);

ellie['hasjob']=true;
console.log(ellie['hasjob']);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');


//3
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = makePerson('elile',30);
console.log(person4);
function makePerson(name, age){
    return{
        //name: name, 생략가능 아래처럼
        name,
        age: age,
    }
}

//5 in operator ~안에 키가 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);

//6 for in vs for of
//for(key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//7 fun cloning
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//예전에는
const user3= {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//간단하게 하는방법
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//더 간단하게
const user5=Object.assign({}, user);
console.log(user5);
