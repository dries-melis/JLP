//// Functions ////
// function declaration

function hello()
{
    console.log('Hey you there, welcome!!');
}

/// Function expressions
const goodbye = () => {
    console.log('goodbye my friend');
};

/* BEWARE
 * If you use function expressions you need to declare them at the top of the file
 *That isn't required with function declaration!!!!
*/

// run/call a function


hello();
goodbye();