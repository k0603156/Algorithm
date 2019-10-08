// const {
//   createInterface
// } = require('readline');
// const input = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const log = console.log;
// const inputValue = () => {
//   return new Promise((resolve, reject) => {
//     input.on('line', (line) => {
//       resolve(line);
//     });
//   })
// }
// async function main() {
//   const val1 = await inputValue();
//   const val2 = await inputValue().then(value => [...value].reverse());
//   let result = 0;
//   val2.forEach((value, index, array) => {
//     log((val1 * value))
//     result += (val1 * value) * Math.pow(10, index);
//   });
//   log(result);
//   main();
// }
// main();

let [v1, [...v2]] = require('fs').readFileSync('/dev/stdin').toString().split("\n"), rs = 0;
v2.reverse().forEach((e, i) => {
  console.log(v1 * e);
  rs += (v1 * e) * Math.pow(10, i)
});
console.log(rs)