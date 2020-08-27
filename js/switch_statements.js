//// Switch Statements ////

const grade = 'D';



// Using if Statements
if(grade === 'A')
{
    console.log('The Letter is A'); 
} 
else if(grade === 'B')
{
    console.log('The letter is B');
}
else if(grade === 'C')
{
    console.log('The letter is C');
} 
else if(grade === 'D')
{
    console.log('The letter is D');
}
else if(grade == 'E')
{
    console.log('The letter is E');
}
else 
{
    console.log('We Don\'t know wich number you have');
}

// Now with switch statements

switch(grade){
    case 'A':
         console.log('The Letter is A');
         break;
    case 'B':
        console.log('The letter is B');
        break;
    case 'C':
        console.log('The letter is C');
        break;
    case 'D':
        console.log('The letter is D');
        break;
    case 'E':
        console.log('The letter is E');
        break;
    default:
        console.log('We Don\'t know wich number you have');
        break;
}