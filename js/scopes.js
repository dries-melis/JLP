//// Variables scope and block scopes ////

let number = 75; // is acessable everywhere in this file

if(true)
{
    //number = 65; // this wil work for the whole file
    let number = 32; // this wil work only in this code block
    let sentence = 'This is a cool sentence!!!'; // this var is also only available in this code block
    console.log(`inside if statement ${number}, and the sentence ${sentence}`)
}

console.log('outside if ' + number);