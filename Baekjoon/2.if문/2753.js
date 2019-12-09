const year = require('fs').readFileSync('/dev/stdin');
((!(year % 4) && (year % 100)) || !(year % 400)) ? console.log(1): console.log(0);