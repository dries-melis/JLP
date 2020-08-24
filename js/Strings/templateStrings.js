const title = 'Harry Potter and the room of secrets';
const author = 'J.K Rowling';
const likes = 30;

//The concatenation Way
let result1 = 'The movie called '+title+' written by '+author+' Has '+likes+' likes!!!';

console.log(result1);


//The Template String Way
let result2 = `The movie called ${title} written by ${author} has ${likes} likes!!`;

console.log(result2);

//Creating a HTML Template

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This Movie has ${likes} likes</span>
`

console.log(html);