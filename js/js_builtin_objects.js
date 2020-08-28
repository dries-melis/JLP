//// builtin js objects ///


// Math objects

console.table(Math);

// for example if you need to use the PI const 
console.log(Math.PI);

let circumference = 14.6;

// .round to round a number
console.log(Math.round(circumference));
// rounds down
console.log(Math.floor(circumference));
// rounds up
console.log(Math.ceil(circumference));
// removes the decimal (everything behind the period)
console.log(Math.trunc(circumference));

// generate random number (originaly between 0 and 1)
let randomNum = Math.random();
console.log(randomNum);
// generate random between 0 100
let randomPercent = Math.random()*100;
console.log(randomPercent);