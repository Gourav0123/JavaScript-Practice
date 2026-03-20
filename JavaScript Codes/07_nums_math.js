const { logDevReady } = require("@remix-run/node");

const score = 400000;

const balance = new Number(100000)
console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));



// -----------------------------Maths-------------------------------

console.log(Math);
console.log(Math.abs(-4));   //print absolute value and remove the -ve sign
console.log(Math.round(4.6));  // It print 5 because if the number have more then point value than print the nearest and bottom or top side number ( 4.4 > 4 , 4.6 > 5)
console.log(Math.ceil(4.2));   // It print all 5  because the number is if more then any number in point then the printing value will be the next one not the last one in point ( 4.1 > 5, 4.5 > 5, 4.9>5 )
console.log(Math.floor(4.8));   // This will print the back value of 4 to 4.9 will show 4
console.log(Math.min(4.9));     //