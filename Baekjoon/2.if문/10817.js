const numArr = [n1, n2, n3] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(a => parseInt(a));
const nth = (array, n) => {
  const sortArr = array.sort((a, b) => {
    return b - a
  });
  return sortArr[n - 1];
}
console.log(nth(numArr, 2))