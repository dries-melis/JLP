//// While Loops ////

// While loops run while the condition is true
let run = true;

while(run)
{
    console.log('in loop: ', run);
    run = false;
}

// Loop over cars array with while loop 
const cars = ['lambo', 'porsche', 'mustang']; // the array where we gonna loop over

let i = 0;

while(i < cars.length)
{
    console.log(`The ${i} car of the array is ${cars[i]}`);
    i++;
}
