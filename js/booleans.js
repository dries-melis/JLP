////BOOLEANS////

//booleans and comparisons
console.log(true, false, 'true', 'false');


//methods can return booleans
let email = 'test.mail@mail.test';
let names = ['rick', 'dirk', 'patrick', 'djeff'];

let result = email.includes('#'); // Returns a boolean (true or false) according to the result
let result2 = names.includes('dirk');


console.log(result);
console.log(result2);

// Comparison operators

let age = 25;

console.log(age == 25); // returns true because the age is indead 25
console.log(age == 30); // returns false because the age isn't 30
console.log(age != 25); // returns false because this statement says: 'The age isn't equal to 25' but the age is

//You can do these comparisons white much more like: >, <, >=, <=, etc..
// This is of course also posible with strings

let name = 'bucky';

console.log(name == 'bucky'); // returns true because the name is indead 'bucky'
console.log(name == 'patrick'); // returns false because the name isn't 'patrick'
console.log(age != 'bucky'); // returns false because this statement says: 'The name isn't equal to "bucky"' but the name is
console.log(name > 'gert'); // Returns false because the first letter of bucky comes before the first letter of gert in the alfabet. Lowercase letter are bigger than uppercase letters
console.log(name > 'Bucky'); // Returns True because uppercase letter always come behind their lowercase form

//You can do these comparisons white much more like: <, >=, <=, etc..



//////  BEWARE  //////
// the "==" comparison is also called the loose comparison and is'nt always that strict
// It translates strings to number tho compare it with a number and that isn't always what you want 
// There is also Strict comparisons to be more strict ;)
// with strict comparison, different types can't be equal

console.log(age == '25'); // Loose comparison, Returns true
console.log(age === '25'); // strict comparison, Returns False because different data types can't be true/equal
console.log(age === 25); // returns true
console.log(age !== '25') // true


