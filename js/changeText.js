// lets grab the p tag
const ptag = document.querySelector('p');

// you can log the innertext of the p tag
console.log(ptag.innerText);

// you can change the innertext of the p tag
ptag.innerText = 'I\'ve changed the innet text of the paragraph';


// let's grab all the p tags

const allptags = document.querySelectorAll('p');

allptags.forEach(ptag => ptag.innerText = 'Changed all the p tags at once');


//let's grab the div.container

const container = document.querySelector('div.container');

let html = `<p>This is the content of the container: ${container[2]}</p>`;

container.innerHTML += html;