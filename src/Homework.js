"use-strict";

// const array = ["a", "b", "c", "d"];

// 1. 'a, b, c, d' 형태의 문자열 만들기

// const stringArray = array.toString();
// console.log(stringArray);

// 2. array의 길이가 홀수인지 짝수인지 알려주는 함수
// const newArray = () => {
//   const len = array.length;
//   if (len % 2 === 0) {
//     return true;
//   } else if (len % 2 === 1) {
//     return false;
//   }
// };

// console.log(newArray());

// 3. 소수 구하는 함수 func(정수): true false   소수면 true 아니면 false => 이해 못함
// const numberFunc = (num) => {
//   for (let i = 2, l = num; i < num; i++) {
//     const result = num % i;
//     if (result === 0) {
//       return false;
//     }
//   }
//   if (num === 1) {
//     return false;
//   }
//   return true;
// };

// console.log(numberFunc(5));

// 4. 윤년 구하기

const yoonYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log("윤년");
  } else {
    return console.log("평년");
  }
};

yoonYear(1999);
yoonYear(2000);
yoonYear(2004);
yoonYear(2400);
