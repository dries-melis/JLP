//// If Statements ////

const lenght = 172


if(lenght > 172)
{
    console.log('You are not that big (yet)');
} 



const password = 'password';


if(password.length >= 12)
{
    console.log('This password is Strong enough');
}
else if(password.length >= 8)
{
    console.log('This password is strong enough but it can be stronger ;)');
} 
else
{
    console.log('This password isn\'t long enough');
}


// Logical operators OR || AND &&
// This is a valid email adress checker

let email = 'test.mail@testmail.com';

if(email.includes('@') && email.includes('.'))
{
    console.log(` ${email} is a correct email adress!!!`);
}
else if(email.includes('@') && ! email.includes('.'))
{
    console.log('There must be a period (.) in a email adress!!');
} 
else if(! email.includes('@') && email.includes('.'))
{
    console.log('There must be a @ in a email adress!!');
} else
{
    console.log('This isn\'t a corect email adress!!')
}
