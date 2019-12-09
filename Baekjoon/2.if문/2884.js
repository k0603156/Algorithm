const [h, m] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const timetoM = parseInt(h * 60) + parseInt(m);

const makeTime = (timetoM) => {
  return Math.sign(timetoM - 45) === -1 ? ((timetoM - 45) + 1440) : (timetoM - 45)
}
const timer = makeTime(timetoM);
console.log(Math.floor(timer / 60), timer % 60);