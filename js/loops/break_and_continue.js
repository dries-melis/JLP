//// Break and Continue ////

const numbers = [50, 10, 0, 30, 85, 100, 90];

for(i = 0; i < numbers.length; i++){

    if(numbers[i] == 0){
        console.log('Youre number is so low that we won\'t show it');
        continue; // continue go straight to the next instance of the loop
    }

    console.log(`Youre Number Is ${numbers[i]}`);

    if(numbers[i] == 100)
    {
        console.log('You have the Highest Number!!!');
        break; // stops
    }
};