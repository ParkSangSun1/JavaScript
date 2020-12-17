'use strict';

console.log('Hello World');

//2. Variable
//let (added in ES6)
let globalName = 'global name';
{
    let name ='ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);

//3. Constants
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
const count = 17;
const size =17.1;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);
//bigInt
const bigInt = 1234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
