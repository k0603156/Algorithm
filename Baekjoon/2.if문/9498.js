const point = require('fs').readFileSync('/dev/stdin');
if (100 >= point && point >= 90) console.log('A')
else if (89 >= point && point >= 80) console.log('B')
else if (79 >= point && point >= 70) console.log('C')
else if (69 >= point && point >= 60) console.log('D')
else console.log('F')