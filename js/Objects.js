// arrays

let ninjas = ['rick', 'donatello', 8, 'bruce-li', 2];

console.log(ninjas);

// You can overwrite a specific item of an array
ninjas[1] = 'boris';
console.log(ninjas);


///////Method to apply on arrays////////
console.log(ninjas.length);


//Join brings all of the items of the array together in 1 string
let result = ninjas.join(', ');
console.log(result);

//indexOf gives the index of the first item of the given parameter
let result1 = ninjas.indexOf('bruce-li');
console.log(result1);

// With concat you can add to arrays together  
let result2 = ninjas.concat(['bart', 'eric']);
console.log(result2);



//The push method adds the parameter to the array and return the lenght of the array
let result3 = ninjas.push('oliver');
console.log(ninjas);

//The pop method removes the last item of the list
result4 = ninjas.pop();
console.log(result4);
console.log(ninjas);

