'use strict'
//1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits =['apple', 'ba'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
//배열 마지막꺼 쉽게 찾기
console.log(fruits[fruits.length-1]);

//3
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//간단하게
for(let fruit of fruits){
    console.log(fruits[fruit]);
}
//더 간단하게
//c.forEach
fruits.forEach(function(fruit, index){
    console.log(fruit,index);
});

//4
fruits.push('aa','ha');
console.log(fruits);

//pop : 뒤에 하나 삭제, push : 뒤에 넣기
fruits.pop();
console.log(fruits);

//앞에서 넣고 빼기 unshift : 앞에 넣기, shift : 앞에 빼기
fruits.unshift('gg','oo');
fruits.shift();
console.log(fruits);

//지정된 포지션의 값 조작
fruits.push('bb');
console.log(fruits);
//몇개를 지울건지 정하지 않으면 1부터 뒤에껄 전부 삭제
fruits.splice(3);
console.log(fruits);
fruits.splice(1,1);
//원하는 자리에 추가
fruits.splice(1,1, 'tt', 'yy');

const fruits2=['aa','hh'];
//배열을 2개 묶는법
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5. 검사
console.clear();
console.log(fruits);
//몇번째 있는지 확인
console.log(fruits.indexOf('aa'));
console.log(fruits.indexOf('dd'));
//있는지 여부확인
console.log(fruits.includes('pp'));

//만약 aa가 두개일때 indexOf는 가장 처음 자리수를 출력/ lastIndexOf 는 가장 마지막 자리수를 출력
console.clear();
fruits.push('aa');
fruits.unshift('aa');
console.log(fruits);
console.log(fruits.indexOf('aa'));
console.log(fruits.lastIndexOf('aa'));