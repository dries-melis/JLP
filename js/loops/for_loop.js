//// For Loops ////

for(let i = 0; i < 5; i++)
{
    console.log(`This is The ${i} time that there is something logged to the console`);

}

// You can loop over an array in multiple ways
const names = ['bucky', 'peter', 'rick'];

// The first way is using the lenght method on the array

for(let i = 0; i < names.length; i++)
{
    console.log(names[i]);
}

// the second method is by using the foreach function, this function is gonna handle everithing for you.
// You only need to specify the name of the array and what you want to do in this loop.

names.forEach(name => {
    console.log(name);
});

