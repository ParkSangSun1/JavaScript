'use strict';

console.log('Hello World');

//2. Variable(읽고 쓰기/ 변경가능)
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

//3. Constants(읽기만 가능/ 변경안됨)
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
//string
const char = 'c';
const brendan = 'brendan';
const greeting  = 'hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

console.log('value: '+helloBob+' type: '+typeof helloBob);
//boolean
//false : 0, null, undefinde, NaN, ''
//true : any other value
const canRead = true;
const test = 3<1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
//null
//명확하게 텅텅비어 있다/ 명확한 값할당

//undefinde
//값 할당 x, 아직 정해지지 않은 상태
//symbol
//동시에 실행될때 우선 순위를 주고싶을때, 고유한 식별자가 필요할때
const symbol1 = Symbol('id');


//5. Dynamic typing : 선언 할때 어떤 타입인지 선언하지 않고 
//프로그래밍이 동작할때 할당된 값에 따라서 타입이 변경 됨
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
''
""
``
//6.Logical operators : ||(or), &&(and), !(not)

//||
const value1 = true;
const value2 = 4<2;
console.log(`or : ${value1 || value2 || check()}`);

//&&
console.log(`and : ${value1 && value2 && check()}`);

function check(){
    for(let i=0;i<10;i++){
        console.log('AA');
    }
    return true;
}

//== 타입 신경x
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive!= numberFive);

//===타입 신경d
console.log(stringFive === numberFive);
console.log(stringFive!== numberFive);

//9.if문 축약 Ternary operator: ?
// condition ? value1 : value2;
na = 'ellie';
console.log(na === 'ellie' ? 'yes':'no');
