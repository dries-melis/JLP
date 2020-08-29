const para: any = document.querySelector('p');



console.log(para.classList);
console.log('no classess');
para.classList.add('error');
para.classList.remove('error');
para.classList.add('success');


// with .toggle you can toggle a class on and of

para.classList.toggle('toggle-class');
console.log(para.classList);
// if you do this again than the class is back gone
para.classList.toggle('toggle-class');
console.log(para.classList);



//challenge
const lorems: any = document.querySelectorAll('p');
console.log(lorems);

console.log(lorems[0].textContent);

lorems.forEach(lorem => {
  if (lorem.innerText.includes('error'))
  {
    lorem.classList.add('error');  
  } else if (lorem.innerText.includes('success'))
  {
    lorem.classList.add('success');
  }
});

