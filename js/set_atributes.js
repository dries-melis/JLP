const link = document.querySelector('a');

console.log(link.getAttribute('href'));

// you can change atributes of a html tag like this
link.setAttribute('href', 'https://www.google.com');
link.innerText = 'Google.com';

const mssg = document.querySelector('p');

mssg.setAttribute('class', 'first-p');

// Beware //
// you need to use a other method if you want to change the style otherwise the previous style wil be completly overwriten
mssg.style.color = 'orange';
mssg.style.fontSize = '50px';


