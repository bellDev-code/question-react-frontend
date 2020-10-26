// 출력하기 예제
// for (let i = 0; i < 2; i++) {
//   console.log("강한친구 대한육군");
// }

// 고양이 출력하기
// console.log(`\\    /\\
// )  ( ')
// (  /  )
// \\(__)|`);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  console.log(input[0] + input[1]);
  process.exit();
});
