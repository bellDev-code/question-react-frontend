"use-strict";

// const array = ["a", "b", "c", "d"];

// // 1. 'a, b, c, d' 형태의 문자열 만들기

// const stringArray = array.toString();
// console.log(stringArray);

// 2. array의 길이가 홀수인지 짝수인지 알려주는 함수
// const newArray = (array) => {
//   const len = array.length;
//   if (len % 2 === 0) {
//     return true;
//   } else if (len % 2 === 1) {
//     return false;
//   }
// };

// console.log(newArray([0, 1, 2, 3]));

// 3. 소수 구하는 함수 func(정수): true false   소수면 true 아니면 false => 이해 못함
// const numberFunc = (num) => {
//   // 위에서 제외할거 제외하자
//   if (num === 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(numberFunc(17));

// 4. 윤년 구하기

// const yoonYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return console.log("윤년");
//   } else {
//     return console.log("평년");
//   }
// };

// yoonYear(1999);
// yoonYear(2000);
// yoonYear(2004);
// yoonYear(2400);

// 4. 윤년 구하기 (가독성 좋게)

// const newYoonYear = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 > 0) {
//       console.log("윤년");
//     } else if (year % 400 === 0) {
//       console.log("윤년");
//     } else {
//       console.log("평년");
//     }
//   } else {
//     console.log("평년");
//   }
// };

// newYoonYear(1900);

// 5.
// const startArray = ["*", "**", "***", "****", "*****"];

// const starFunc = () => {
//   for (let i = 0; i < 5; i++) {
//     const star = startArray[i];
//     console.log(star);
//   }
//   for (let i = 3; i >= 0; i--) {
//     const star = startArray[i];
//     console.log(star);
//   }
// };

// starFunc();

// function starFunc(len) {
//   const star = "*";
//   for (let i = 0; i <= len; i++) {
//     console.log(star.repeat(i));
//   }
//   for (let i = len - 1; i > 0; i--) {
//     console.log(star.repeat(i));
//   }
// }
// starFunc(5);
// 6.두 배열을 인수로 받아 비교하여
// 서로 포함하는 값만 추출한 배열을
// 반환하는 함수 만들기

// const array = [0, 1, 2, 3];
// const array2 = [0, 2, 6, 8];

// const arrayFunc = () => {};

// arrayFunc();
