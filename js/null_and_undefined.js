//undefined
// a variable is undefined if you declared it but you havent give it a value yet!!
let age;


console.log(age); //undefined
console.log(age + 3); //Nan (Not a Number)
console.log(`The age is ${age}`); // The age is undefined


//null
//The null value is usefull when you havent yet a value for a var.. but you need to asign a value to it

let age2 = null; 


console.log(age2); //null
console.log(age2 + 3); //3
console.log(`The age is ${age2}`); // The age is null