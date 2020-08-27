//// Callback function and Manipulating The DOM ////

// whith document.querySelectior you can pic the firts item with the class that is pass in this function
const ul = document.querySelector(".nice");

// array with movie that we can use to loop over
const titles = ['harry potter and the room of secrets', 'fast and the furious 7', 'the secret garden', 'shooter', 'whinie de pooh'];

// in this html variable we gonna add the li's
let html = ``;

// we call the foreach function on the titles array and then pass a callback function in the for each
// we make a li for every movie from the titles array
titles.forEach((title, index) => {
    // html template
    html += `<li>${index}: ${title}</li>`;
});


//with ul.innerHTML we set the inner html from the ul(variable declared at the top) to the html we created with the li's from the titles
ul.innerHTML = html;