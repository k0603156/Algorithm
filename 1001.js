const {
  createInterface
} = require('readline');
const input = createInterface({
  input: process.stdin,
  output: process.stdout
});
input.on('line', (line) => {
  var [values1, values2] = line.toString().split(' ');
  console.log(parseInt(values1) - parseInt(values2));
});