const {
  createInterface
} = require('readline');
const input = createInterface({
  input: process.stdin,
  output: process.stdout
});
const log = console.log;
const parseInteger = (inputValue, char) => {
  const array = inputValue.toString().split(char);
  return array.map(v => parseInt(v));
}
const isAllowablerange = (inputValue, from, to) => {
  for (const v in inputValue) {
    if (from >= v && v >= to) {
      return false;
    }
  }
  return true;
}
const cal = (inputValue, f) => {
  const param = inputValue;
  return f(...param);
}
const funcArray = [
  (a, b, c) => (a + b) % c,
  (a, b, c) => (a % c + b % c) % c,
  (a, b, c) => (a * b) % c,
  (a, b, c) => (a % c * b % c) % c
];
input.on('line', (line) => {
  const from = 2;
  const to = 10000;
  const array = parseInteger(line, ' ');
  if (isAllowablerange(array, from, to))
    funcArray.map(f => {
      log(cal(array, f));
    })
});