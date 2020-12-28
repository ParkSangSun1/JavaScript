function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';

}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default paramters
//값이 없을때 대체값 설정
function showMessage(message,from = 'unk'){
    console.log(`${message} by ${from}`);

}
showMessage('Hi!');

//4.Rest Darameters
//배열로 받기
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    //간단하게 하는 방법1
    for(const arg of args){
        console.log(arg);
    }

    //간단하게 하는 방법2
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


//5. Local scope(밖에서는 안이 보이지 않지만 안에서는 밖에 보인다/ 자동차 썬팅처럼)
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//6. return
function sum(a,b){
    return a+b
}

//7. Early return

//함수 여러가지
const print = function(){
    console.log('print');

};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//arrow function
const simplePrint = function(){
    console.log('simplePrint!');
};
//더 쉬운방법
const simplePrint1 = () => console.log('simplePrint!');
const add = (a,b) => a+b;

//IIFE
//바로 만들자마자 호풀하는 방법
(function hello(){
    console.log('IIFE');
})();