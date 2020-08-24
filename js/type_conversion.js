//// TYPE CONVERSION ////

let score = '100';

console.log(score + 3); // Concatenatse the 3 to the 100 = 1003 because 100 is a string

score = Number(score);
console.log(score + 3); // == 103 because we transformed the string into a number.

// If you want to now wich type a var or let is then you need to use typeof

console.log(typeof score);


// if you try to convert letter to a number you get the NaN error!
let result = Number('hello');
console.log(result);


// You can convert a number to a string!
let result2 = String(50);
console.log(result2, typeof result2);


// you can convert to booleans
let result3 = Boolean(100); // return always true except if you pass Number(0)
console.log(result3, typeof result3);
