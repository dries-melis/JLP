//// Arguments & Parameters ////


/* This function checks if an email adress meets the standards
 * The email variable in the function is also called a parameter
 * The value of the email adress needs to be set if you call the function(argument)
 * You can set a default value for if you give it a value in the function decalration
*/
function checkEmail(email)
{
    if(typeof email !== 'undefined')
    {
            
        if(email.includes('@') && email.includes('.'))
        {
            console.log(` ${email} is a correct email adress!!!`);
        }
        else if(email.includes('@') && ! email.includes('.'))
        {
            console.log('There must be a period (.) in a email adress!!');
        } 
        else if(! email.includes('@') && email.includes('.')) // The ! means: if not include('@)
        {
            console.log('There must be a @ in a email adress!!');
        } else
        {
            console.log('This isn\'t a corect email adress!!')
        }
    } else
    {
        console.log('Please pass a email adress!');
    }
}

checkEmail('test.mail@mail.test');