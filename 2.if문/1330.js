let [v1, v2] = require('fs').readFileSync('/dev/stdin').toString().split(" ");
v1 = parseInt(v1);
v2 = parseInt(v2);
if (v1 < v2) console.log('<')
else if (v1 > v2) console.log('>')
else if (v1 === v2) console.log('==')