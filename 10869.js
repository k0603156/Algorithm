// const {
//   createInterface
// } = require('readline');
// const input = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const log = console.log;
// const parseInteger = (inputValue, char) => {
//   const [value1, value2] = inputValue.toString().split(char);
//   return [parseInt(value1), parseInt(value2)]
// }
// const isAllowablerange = (inputValue, from, to) => {
//   const [value1, value2] = inputValue;
//   return (value1 >= from && to >= value1 & value2 >= from && to >= value2)
// }
// const cal = (inputValue, f) => {
//   const [values1, values2] = inputValue;
//   const value1 = parseInt(values1);
//   const value2 = parseInt(values2);
//   return f(value1, value2);
// }
// const f = [
//   (a, b) => a + b,
//   (a, b) => a - b,
//   (a, b) => a * b,
//   (a, b) => Math.floor(a / b),
//   (a, b) => a % b
// ];
// input.on('line', (line) => {
//   const [val1, val2] = parseInteger(line, ' ');
//   if (isAllowablerange([val1, val2], 1, 10000))
//     f.map(f => {
//       log(cal([val1, val2], f));
//     })
// });
const L = console.log;
require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (line) => {
  const [l, r] = line.split(' ');
  const a = parseInt(l);
  const b = parseInt(r);
  L(a + b);
  L(a - b);
  L(a * b);
  L(Math.floor(a / b));
  L(a % b);
});