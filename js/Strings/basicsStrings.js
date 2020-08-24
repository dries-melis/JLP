/*
###################
#####Variables#####
###################
*/



//////////////Strings////////////


console.log('this is a string')

let email = 'this.is@atest.mail';
console.log(email);


////string concatenation////
let firstname = 'dries';
let lastname = 'melis';

let fullname = firstname+' '+lastname;
console.log(fullname);


////getting characters//
console.log(fullname[2]);
/*The number in square brackets is also called the index*/


////Getting the lenght of a string////
console.log(fullname.length);


////String methods////
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();

console.log(result);

/*the indexOF method gives back the position of the letter/symbol in the string*/
let index = email.indexOf('@');
console.log(index);
