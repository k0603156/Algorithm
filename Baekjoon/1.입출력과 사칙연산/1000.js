const {
  createInterface
} = require('readline');
const input = createInterface({
  input: process.stdin,
  output: process.stdout
});
input.setPrompt('');
input.prompt();
input.on('line', (line) => {
  let sum = 0;
  const values = line.split(' ');
  for (const value of values) {
    if (0 > value || value > 10) {
      input.close();
    }
    sum = sum + parseInt(value);
  }
  process.stdout.write(unescape(`\u001B[2J\u001B[0;0f`));
  input.write(String(sum));
  input.close();
})
input.on('close', () => process.exit());
//이게 안되면 저런 조건들은 왜 넣었는지 모르겠다.
// const {
//   createInterface
// } = require('readline');
// const input = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// input.on('line', (line) => {
//   let sum = 0;
//   const values = line.split(' ');
//   for (const value of values) {
//     sum = sum + parseInt(value);
//   }
//   process.stdout.write(unescape(`\u001B[2J\u001B[0;0f`));
//   input.write(String(sum));
// })
// input.on('close', () => process.exit());
//누산

// 조금 어이없게 아래 예시들은 된다.
// const {
//   createInterface
// } = require('readline');
// const input = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// input.on('line', (line) => {
//   var [values1,values2] = line.toString().split(' ');
//   console.log(parseInt(values1) + parseInt(values2));
// });

// var fs = require('fs');
// var input = fs.readFileSync('file').toString().split(' ');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// console.log(a + b);