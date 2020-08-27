//// Returning a value ////

/*
 * If you use RETURN the function returns a value.
 * You can store that function in a variable so you can do further calculations on the result
 * BTW this is the same email checker as in arguments_and_parameters.js but this time with return instead of console.log
*/


function checkEmail(email)
{
    if(typeof email !== 'undefined')
    {
            
        if(email.includes('@') && email.includes('.'))
        {
            return(` ${email} is a correct email adress!!!`);
        }
        else if(email.includes('@') && ! email.includes('.'))
        {
            return('There must be a period (.) in a email adress!!');
        } 
        else if(! email.includes('@') && email.includes('.')) // The ! means: if not include('@)
        {
            return('There must be a @ in a email adress!!');
        } else
        {
            return('This isn\'t a corect email adress!!')
        }
    } else
    {
        return('Please pass a email adress!');
    }
}

console.log(checkEmail('test.mail@mail.test'));